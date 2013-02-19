module.exports = {

    suspect : {
    
        reference   : String,
        type        : String,
        exists      : {type : Boolean, default : true},
        suspicions : {
            probably_unused         : { type  : String, default : "not_scanned" },
            contains_inline_scripts : { type  : String, default : "not_scanned" },
            may_have_commented_code : { type  : String, default : "not_scanned" },
            contains_$j             : { type  : String, default : "not_scanned" },
            contains_$n$$           : { type  : String, default : "not_scanned" },
            non_native              : { type  : String, default : "not_scanned" },
            probably_unused         : { type  : String, default : "not_scanned" }
        }
    
    }
}