function checkAgeGroup(age) {

if(age < 13) { 
    return "child";
}
else if(age >= 13 && age <= 19) {
    return "Teen";
}
else if(age >= 20 && age <= 64) {
    return "Adult";
}
else { 
    return "Senior";
}
}
console.log(checkAgeGroup(10));
