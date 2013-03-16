var 
    request = require('request'),
    conf = require('./conf'),
    apiroot = "http://" + conf.api.host + ":" + conf.api.port + conf.api.root,
    i = 3
;

while(i--){
    (function(){
        var rand = Math.floor(Math.random()*100000000).toString();
        request.post({
            url : apiroot + "/suspects",
            json : {reference : 'test' + rand, type : 'jspfile'}
        }, function(err, res){
            console.log(res.statusCode);
        });
    }());
}