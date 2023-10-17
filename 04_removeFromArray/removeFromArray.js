let removeFromArray = function(array, ...removeValue) {
    return array.filter(value => !removeValue.includes(value))

};

// Do not edit below this line
module.exports = removeFromArray;
