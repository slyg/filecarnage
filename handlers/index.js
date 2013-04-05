var 
    Suspect = require('./../models').Suspect,
    suspectsTypes = require('./../schemes').suspectsTypes,
    suspectSuspicionsPerType = require('./../schemes').suspectSuspicionsPerType,
    Hapi = require('hapi'),
    async = require('async')
;

function handleError(req){
    req.reply(Hapi.Error.internal());
}

module.exports = {
    ws : {
        retrieve : {
            handler: function(request) {
                if (request.params.id) {
                    Suspect.findOne({_id : request.params.id}, function(err, res){
                        if(err) handleError(request); 
                        request.reply(res);
                    });
                } else {
                    Suspect.find({}, function(err, res){ 
                        if(err) handleError(request); 
                        request.reply(res);
                    });
                }
            }
        },
        create : {
            handler: function(request){
                var suspect = new Suspect(request.payload);
                suspect.save(function(err){
                    if(err) handleError(request); 
                    request.reply(suspect);
                });
            }
        },
        update : {
            handler: function(request){
                var 
                    id = request.params.id,
                    payload  = request.payload
                ;
                Suspect.findOneAndUpdate({ _id: id }, { $set: {suspicions : payload}}).exec(function(err, suspect){
                    if(err) handleError(request); 
                    request.reply(suspect);
                });
                
            }
        }
    },
    views : {
        public : {
            handler: {
                directory: {
                    path: './../public/',
                    listing: true
                }
            }
        },
        home : {
            handler : function(request) {
                request.reply.view('views/index', {
                    title: 'File carnage',
                    types : suspectsTypes
                }).send();
            }
        },
        reference : {
            handler: function(request){
                Suspect.find({
                    reference : new RegExp(request.params.querystring, 'i'), 
                    type : request.params.typestring
                }, function(err, suspects){
                
                    if(err) handleError(request);
                    
                    var viewModel = [];
                    
                    async.each(suspects, function(suspect, next){
                        
                        var suspicions = [];
                        
                        async.each(suspectSuspicionsPerType[suspect.type], function(suspicion, next){
                            suspicions.push({ref : suspicion.ref, value : suspect.suspicions[suspicion.ref]});
                            next();
                        });
                        
                        viewModel.push({
                            reference : suspect.reference,
                            id : suspect._id,
                            suspicions : suspicions,
                            scanned : suspect.scanned,
                            removed : suspect.removed,
                            type : suspect.type
                        });
                        
                        next();
                    });
                    
                    request.reply.view('suspects', {
                        suspects : viewModel,
                        suspicionsList : suspectSuspicionsPerType[request.params.typestring]
                    }).send();
                });
            }
        },
        scanned : {
            handler : function(request){
                Suspect.findOneAndUpdate(
                    { '_id': request.params.id }, 
                    { $set: {'scanned' : (request.payload.scanned == "true") ? true : false }
                }).exec(function(err, suspect){
                    if(err) handleError(request);
                    request.reply(suspect);
                });
            }
        },
        removed : {
            handler : function(request){
                Suspect.findOneAndUpdate(
                    { '_id': request.params.id }, 
                    { $set: {'removed' : (request.payload.removed == "true") ? true : false }}
                ).exec(function(err, suspect){
                    if(err) handleError(request);
                    request.reply(suspect);
                });
            }
        },
        suspicion : {
            handler : function(request){
                var 
                    id                  = request.params.id,
                    suspicionkeystring  = request.params.suspicionkeystring,
                    setObj = {}
                ;
                
                setObj['suspicions.' + suspicionkeystring] = (request.payload.value == "true") ? true : false;
                
                Suspect.findOneAndUpdate(
                    { '_id': id },
                    { $set: setObj }
                ).exec(function(err, suspect){
                    if(err) handleError(request);
                    request.reply(suspect);
                });
            }
        }
    }
};