function receivesAFunction(spy) {
    spy();
}

// function returnsANamedFunction(fn) {
//     return returnsANamedFunction() {
      
//     }
// }


// function returnsANamedFunction() {
//     let fn = returnsANamedFunction();
//     return function fn()
//     return returnsANamedFunction();
// }
   
function returnsANamedFunction() {
    function makeBreakfast() {return " "}
    return makeBreakfast;
}

function returnsAnAnonymousFunction() {
    return function(){}
}



