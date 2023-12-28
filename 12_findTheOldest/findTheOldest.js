const findTheOldest = function(array) {

    return array.reduce((firstPerson, secondPerson) => {
        let firstPersonAge = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
        let secondPersonAge = getAge(secondPerson.yearOfBirth, secondPerson.yearOfDeath);

        if (firstPersonAge < secondPersonAge){
            return secondPerson;
        }
        else{ 
            return firstPerson;
        }
    });
};
 
let getAge = function(birth, death){
    if (!death){
        return new Date().getFullYear() - birth;
    }
    else {
        return death - birth;
    }
};
// Do not edit below this line
module.exports = findTheOldest;
