const sumAll = function(x,y) {
    let sum = 0;
    let array =[x,y];
    let fullArray = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for(let i = array[0]; i <= array[1]; i++){
        fullArray.push(i)

    }

    return sum = fullArray.reduce(reducer);
};

// Do not edit below this line
module.exports = sumAll;
