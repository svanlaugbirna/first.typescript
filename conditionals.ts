interface Person {
  name: string;
  age: number;
  numberOfKids: number;
  country: string;
  knowsProgram: boolean;
}

const people: Person[] = [
  { name: "Katha Ligerton", age: 50, numberOfKids: 3, country: "Indonesia", knowsProgram: true },
  { name: "Jeannine Haig", age: 27, numberOfKids: 4, country: "Sweden", knowsProgram: false },
  { name: "Marcelline Dampier", age: 50, numberOfKids: 2, country: "Greece", knowsProgram: false },
  { name: "Davon Sangster", age: 50, numberOfKids: 4, country: "Peru", knowsProgram: false },
  { name: "Sally Mckimmie", age: 42, numberOfKids: 2, country: "Dominican Republic", knowsProgram: false }
];

function getGreetingByNationality(person: Person): string {
  switch (person.country) {
    case "Iceland":
      return "Hæ";
    case "Spain":
      return "Hola";
    case "Korea":
      return "여보세요";
    default:
      return "Hello";
  }
}

const secondPerson = people[1];
const greetingForSecondPerson = getGreetingByNationality(secondPerson);

console.log(`Greeting for the 2nd person: ${greetingForSecondPerson}`);

function isFirstPersonOlderThanLastPerson(people: Person[]): boolean {
  const firstPerson = people[0];
  const lastPerson = people[people.length - 1];
  return firstPerson.age > lastPerson.age;
}

function doesSecondPersonHaveSameNumberOfKidsAsThird(people: Person[]): boolean {
  const secondPerson = people[1];
  const thirdPerson = people[2];
  return secondPerson.numberOfKids === thirdPerson.numberOfKids;
}

function knowsProgramming(people: Person[]): boolean {
  const firstPerson = people[0];
  const fourthPerson = people[3];
  return firstPerson.knowsProgram && fourthPerson.knowsProgram;
}

const isOlder = isFirstPersonOlderThanLastPerson(people);
const hasSameNumberOfKids = doesSecondPersonHaveSameNumberOfKidsAsThird(people);
const areBothProgrammers = knowsProgramming(people);

console.log(`Is the first person older than the last person? ${isOlder}`);
console.log(`Does the 2nd person have the same amount of kids as the 3rd? ${hasSameNumberOfKids}`);

if (areBothProgrammers) {
  console.log("Yay!");
} else {
  console.log("LMGTFY");
}
