const findTheOldest = function() {
  
    let getAge = function(birth, death){
        if (!death){
            return new Date().getFullYear() - birth;
        }
        else {
            return death - birth;
        }
    };
};

// Do not edit below this line
module.exports = findTheOldest;
