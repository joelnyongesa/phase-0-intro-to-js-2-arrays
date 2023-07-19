// Arrays in Javascript.

const primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37]
const flowers = ["rose", "tulip", "lily", "orchid"]

// console.log(primeNumbers.length)
// console.log(flowers.length)

const winningNumbers = [32,9,14,7,16,5]

function logWinningNumbers(numbers){
    console.log(`Winning Numbers: ${numbers}`);
}

// logWinningNumbers(winningNumbers);

// Using bracket notation.
// console.log(winningNumbers[0])

// Accessing the last eement in an array.
const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

// console.log(alphabet.length)
// console.log(alphabet[alphabet.length-1])

// UPDATING THE VALUE OF ELEMENTS IN AN ARRAY
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Juptier",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

// rewriting Jupiter using the bracket notation.
planets[4] = "Jupiter"

// console.log(planets)

// NESTED ARRAYS- Arrays containing other arrays.
const egregiouslyNestedArray = [
    "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
  ];

// console.log(egregiouslyNestedArray.length)
// console.log(egregiouslyNestedArray[0]);
// console.log(egregiouslyNestedArray[1]);
// console.log(egregiouslyNestedArray[2]);
console.log(egregiouslyNestedArray[1][0])
console.log(egregiouslyNestedArray[1][1][2])

// Keep nested arrays not more than 2 levels deep.

