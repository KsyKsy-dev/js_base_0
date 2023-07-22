"use strict";

// expresion
let ask= function(q,y,n){
    if((confirm(q)) y();
    else n();
}
ask('agree?', function(){console.log("y");}, function(){console.log(n);})