const fibonacci = function(value) {
    let int = Number(value);
    if(int < 0){
        return "OOPS";
    }
    else if(int < 1){
        return int = 1;
    }
    return (int-2) + (int-3);
};

// Do not edit below this line
module.exports = fibonacci;
