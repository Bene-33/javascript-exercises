const sumAll = function(x,y) {
    let sum = 0;
    let initialArray =[x,y];
    let array = initialArray.sort(function(a,b){return a-b});
    let fullArray = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (array[0] <= 0 || 
        array[1] <= 0 || 
        Number.isInteger(array[0]) === false ||
        Number.isInteger(array[1]) === false){
        return "ERROR"
    }
       else{

        for(let i = array[0]; i <= array[1]; i++){
            fullArray.push(i)

        }
       }

return sum = fullArray.reduce(reducer);
};

// Do not edit below this line
module.exports = sumAll;
