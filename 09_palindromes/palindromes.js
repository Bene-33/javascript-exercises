const palindromes = function (word) {
    let replace = "!";
    let string = word.toLowerCase().replace(replace,'');
    let newString = string.split('').reverse().join('');
    if(string === newString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
