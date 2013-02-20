var 
    Suspect = require('./models').Suspect,
    Hapi    = require('hapi')
;

function handleError(req){
    req.reply(Hapi.Error.internal());
}

module.exports = {
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
    },
    exists : {
        handler: function(request){
            Suspect.find({'exists' : true}, function(err, suspects){
                 if(err) handleError(request);
                 request.reply(suspects);
             });
        }
    },
    removed : {
        handler: function(request){
            Suspect.find({'exists' : false}, function(err, suspects){
                 if(err) handleError(request);
                 request.reply(suspects);
             });
        }
    },
    search : {
        reference : {
            handler: function(request){
                 Suspect.find({reference : new RegExp(request.params.querystring, 'i')}, function(err, suspects){
                     if(err) handleError(request);
                     request.reply(suspects);
                 });
            }
        },
        type : {
            handler: function(request){
                 Suspect.find({type : new RegExp(request.params.querystring, 'i')}, function(err, suspects){
                     if(err) handleError(request);
                     request.reply(suspects);
                 });
            }
        },
        suspicion : {
            handler: function(request){
                Suspect
                    .where('type', new RegExp(request.params.typestring, 'i'))
                    .where('suspicions.' + request.params.suspicionkeystring, (request.params.suspicionvaluestring == "true") ? true : false)
                    .exec(function (err, suspects) {
                        if(err) handleError(request);
                        request.reply(suspects);
                    })
                ;
            }
        }
    },
    views : {
        public : {
            handler: {
                directory: {
                    path: './public/',
                    listing: true
                }
            }
        },
        home : {
            handler : function (request) {
                request.reply.view('index', {
                    title: 'JSP carnage'
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
                    request.reply.view('suspectsList', {
                        suspects : suspects
                    }).send();
                });
            }
        },
        scanned : {
            handler : function(request){
            
                console.log(request.params.id);
                
                Suspect.findOneAndUpdate(
                    { '_id': request.params.id }, 
                    { $set: {'scanned' : (request.payload.scanned == "true") ? true : false }
                }).exec(function(err, suspect){
                    if(err) handleError(request);
                    request.reply(suspect);
                });
            }
        }
    }
};