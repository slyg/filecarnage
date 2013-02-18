var 
    Suspect = require('./models').Suspect,
    Hapi    = require('hapi')
;

module.exports = {
    getAll : {
        handler: function(request) {
            Suspect.find({}, function(err, res){ request.reply(res); });
        }
    },
    create : {
        handler: function(request){
            var suspect = new Suspect(request.payload);
            suspect.save();console.log(suspect);
            request.reply(suspect);
        }
    },
    update : {
        handler: function(request){
        
            var id = request.params.id;
            var payload  = request.payload;
            
            Suspect.update({ _id: id }, { $set: {suspicions : payload}}).exec(function(err, suspect){
                if (err) request.reply(Hapi.Error.internal());
                request.reply();
            });
            
        }
    }
};