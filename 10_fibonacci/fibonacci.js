const fibonacci = function(value) {
    let int = Number(value);
    if(int <= 0){
        return "OOPS";
    }
    else if(int <= 1){
        return 1;
    }
    return fibonacci(int-1) + fibonacci(int-2);
};

// Do not edit below this line
module.exports = fibonacci;
