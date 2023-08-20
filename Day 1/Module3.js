//Now here we want to use Module2 item to Module3, So we can do like this;

// Way 1;
    const {diff} = require("./Module2.js");
    console.log(diff(12, 2))

// Way 2;
    // Way 1
    const {sum,power} = require("./Module2")
    console.log(sum(3,3))
    console.log(power(5))


    // Way 2;
    const Module2 = require("./Module2")
    console.log(Module2.sum(1,1))
    console.log(Module2.power(5))


// Way 3;
    import {product , divide} from "./Module2.js"

    console.log(product(2,2));
    console.log(divide(6,2));