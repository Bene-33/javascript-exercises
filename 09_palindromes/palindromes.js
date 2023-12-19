const palindromes = function (word) {
    let string = word.toLowerCase();
    let newString = string.split('').reverse().join('');
    if(string === newString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
