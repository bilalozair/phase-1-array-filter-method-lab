// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name) {
    return drivers.filter(function (input) {
    return input.toLowerCase() == name.toLowerCase()});
}
// console.log(findMatching(drivers,"Bobby"));
function stringModifier(driver, prefix) {
    if (prefix.length > driver.length) {
        return false;
    }
    let modString = driver.substring(0,prefix.length);
    return prefix == modString;
}


function fuzzyMatch(drivers, name) {
   
    return drivers.filter(function(x) {
        return stringModifier(x, name);
    })
}

function matchName(drivers,Name) {
    return drivers.filter(function(x) {
        return x.name.toLowerCase() == Name.toLowerCase();
    })
}