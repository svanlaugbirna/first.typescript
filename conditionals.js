var people = [
    { name: "Katha Ligerton", age: 50, numberOfKids: 3, country: "Indonesia", knowsProgram: true },
    { name: "Jeannine Haig", age: 27, numberOfKids: 4, country: "Sweden", knowsProgram: false },
    { name: "Marcelline Dampier", age: 50, numberOfKids: 2, country: "Greece", knowsProgram: false },
    { name: "Davon Sangster", age: 50, numberOfKids: 4, country: "Peru", knowsProgram: false },
    { name: "Sally Mckimmie", age: 42, numberOfKids: 2, country: "Dominican Repuplic", knowsProgram: false }
];
function isFirstPersonOlderThanLastPerson(people) {
    var firstPerson = people[0];
    var lastPerson = people[people.length - 1];
    return firstPerson.age > lastPerson.age;
}
function doesSecondPersonHaveSameNumberOfKidsAsThird(people) {
    var secondPerson = people[1];
    var thirdPerson = people[2];
    return secondPerson.numberOfKids === thirdPerson.numberOfKids;
}
var isOlder = isFirstPersonOlderThanLastPerson(people);
var hasSameNumberOfKids = doesSecondPersonHaveSameNumberOfKidsAsThird(people);
console.log("Is the first person older than the last person? ${isOlder}");
console.log("Does the 2nd person have the same amount of kids as the 3rd? ${hasSameNumberOfKids}");
function knowsProgramming(people) {
    var firstPerson = [0];
    var fourthPersonm = people[3];
    return firstPerson.knowsProgram && fourthPersonm.knowsProgram;
}
var areBothProgrammers = doFirstAndFourthPersonKnowProgramming(people);
if (areBothProgrammers) {
    console.log("Yay!");
}
else {
    console.log("LMGTFY");
}
