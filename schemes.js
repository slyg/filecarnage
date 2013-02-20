module.exports = {

    suspect : {
    
        reference   : String,
        type        : String,
        exists      : { type : Boolean, default : true },
        scanned     : { type : Boolean, default : false }, // not scanned by default
        suspicions : {
            probably_unused         : { type  : Boolean, default : true }, // jspfile
            contains_inline_scripts : { type  : Boolean, default : true }, // jspfile
            contains_redirect       : { type  : Boolean, default : true }, // jspfile
            may_have_commented_code : { type  : Boolean, default : true }, // jsfile
            contains_$j             : { type  : Boolean, default : true }, // jsfile
            contains_$n$$           : { type  : Boolean, default : true }, // jsfile
            non_native              : { type  : Boolean, default : true }  // jsObject
        }
    
    }
}