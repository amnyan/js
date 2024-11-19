function checkPrototypeChain(obj){
    let current = obj;
    let depth = 0;

    while (current !== null) {
        current = Object.getPrototypeOf(current);
        ++depth;
    }

    return depth - 1;
}


function exampleFunction() {}
console.log("Depth of prototype chain :", checkPrototypeChain(exampleFunction));