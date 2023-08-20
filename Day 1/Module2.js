//Suppose we assume that it is a module with name Module2 and we want to use it somewhere else.
//Example, here in this case we want to use this Module2.js function in Module3.js.

// Way 1;
    function diff (a,b){
        return a-b;
    }
    exports.diff = diff;


// Way 2;
    exports.sum = (a , b) =>{
        return a + b;
    }
    exports.power = (num) =>{
        return num*num;
    }

// Way 3;
    const product = (a,b) =>{
        return a*b;
    }

    const divide = (a,b) =>{
        return a/b;
    }

    export {product , divide}