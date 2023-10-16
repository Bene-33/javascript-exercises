const reverseString = function(string) {
    let splitString = string.split("");
    let reverseSplitArry = splitString.reverse("");
    let reverseString = reverseSplitArry.join("");

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
