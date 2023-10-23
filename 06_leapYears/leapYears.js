const leapYears = function(year) {
    let stringYear = year.toString().substr(-1, 2)
    if( year % 4 === 0){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
