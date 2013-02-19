var 
    Suspect = require('./models').Suspect,
    Hapi    = require('hapi')
;

module.exports = {
    retrieve : {
        handler: function(request) {
            if (request.params.id) {
                Suspect.findOne({_id : request.params.id}, function(err, res){ request.reply(res); });
            } else {
                Suspect.find({}, function(err, res){ request.reply(res); });
            }
        }
    },
    create : {
        handler: function(request){
            var suspect = new Suspect(request.payload);
            suspect.save(function(){
                if (err) request.reply(Hapi.Error.internal());
                request.reply(suspect);
            });
        }
    },
    update : {
        handler: function(request){
        
            var id = request.params.id;
            var payload  = request.payload;
            
            Suspect.findOneAndUpdate({ _id: id }, { $set: {suspicions : payload}}).exec(function(err, suspect){
                if (err) request.reply(Hapi.Error.internal());
                request.reply(suspect);
            });
            
        }
    }
};