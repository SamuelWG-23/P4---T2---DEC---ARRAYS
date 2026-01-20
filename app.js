//Exercise 1
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
let exponentials = numbers.map(num => num ** 2);
console.log(exponentials);
let impares = numbers.filter(num=>num%2===0);
console.log(impares);
let add = numbers.reduce((acum,num) => acum + num,0)
console.log(add);

//Exercise 2
let cities = ["Cadiz","Sevilla","Huelva","Malaga","Cordoba"];
let upperCities = cities.map(city => city.toUpperCase());
console.log(upperCities);
cities.sort();
console.log(cities);
let startWithM = cities.some(city=>city.charAt(0) == "M");
console.log(startWithM);
let fourChar = cities.every(city => city.length > 4);
console.log(fourChar);

//Exercise 3
const arrEstudiantes = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 22, nota: 5 },
    { nombre: "María", edad: 19, nota: 7 },
    { nombre: "Carlos", edad: 21, nota: 4 }
];

let passed = arrEstudiantes.filter(student => student.nota >= 5);
console.log(passed);
let sortedByAge = arrEstudiantes.sort((a,b) => a.edad - b.edad);
console.log(sortedByAge);
let names = arrEstudiantes.map(name => name.nombre);
console.log(names);
let averageScore = arrEstudiantes.reduce((acum,num) => acum + num.nota,0)/arrEstudiantes.length;
console.log(averageScore);

//Exercise 4

let words = ["hola","salva","durillo"]
console.log(words);
let bigWords = words.filter(word => word.length >= 5);
console.log(bigWords);
let reverseWords = words.map(word => word.split('').reverse().join(''));
console.log(reverseWords);
let wordLength = words.sort((a,b) => b.length - a.length);
console.log(wordLength);

//Exercise 5

let firstNumbers = [3,21,31];
let lastNumbers = [41,51,61];
let sumOfNumbers =  firstNumbers.map((num,i) => num + lastNumbers[i]);
console.log(sumOfNumbers);
let timesOfNumbers =  firstNumbers.map((num,i) => num * lastNumbers[i]);
console.log(timesOfNumbers);
let findingIndexNumber = firstNumbers.findIndex(num => num > 10);
console.log(findingIndexNumber);

//Exercise 6

const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];
console.log(arrFrase);
let oneString = arrFrase.reverse((bigString,word) => bigString + word,0);
console.log(oneString)






