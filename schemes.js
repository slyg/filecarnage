module.exports = {

    schemas : {

        suspect : {
        
            reference   : String,
            type        : String,
            removed     : { type : Boolean, default : false },
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
    
    },
    
    suspectsTypes : ["jspfile", "jsfile", "jsobject"],
    
    suspectSuspicionsPerType : {
        "jspfile"   : [
            { ref : 'probably_unused',              label : 'Probably unused'   }, 
            { ref : 'contains_inline_scripts',      label : 'Inline scripts'    }, 
            { ref : 'contains_redirect',            label : 'Redirect'          }
        ],
        "jsfile"    : [
            { ref : 'may_have_commented_code',      label : 'Commented code'    }, 
            { ref : 'contains_$j',                  label : 'Plain jQuery'      }, 
            { ref : 'contains_$n$$',                label : 'Prototype/Scrptl'  }
        ],
        "jsobject"  : [
            { ref : 'non_native',                   label : 'Non native'        }
        ]
    }
}