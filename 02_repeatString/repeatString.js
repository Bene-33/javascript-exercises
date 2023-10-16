const repeatString = function(string, repeat) {
let i = 0;
let str = "";
    while (i < repeat){
        str += string;
        i++;
    }
        return str;
};

// Do not edit below this line
module.exports = repeatString;
