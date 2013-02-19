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
            suspect.save(function(){
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
};