const repeatString = function(string, repeat) {
let i = 0;
let str = "";

if (repeat <0) "ERROR";
    while (i < repeat){
        str += string;
        i++;
    }
        return str;
};

// Do not edit below this line
module.exports = repeatString;
