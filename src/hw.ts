// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean

let d = {age: number};
// A: any, however, 'number' will not be compiled since it is not defined correctly

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear is not used in the code snippet, in order to fix it, add a 
// '?' in front of 'releaseYear' so that it becomes optional

let prices = [100, 200, 300];
prices[0] = '$100';
// A:

function myFunc(a: number, b: number): number {}
// A: you can't reassign a number a value of string.
// '$100' needs to be changed to '100'
// 'a' and 'b' are declared but not used
// in order to call a function properly, it needs to return something,
// especially since 'number' is not undefined or void

// Codewars:

// 1)Your start-up's BA has told marketing that your website has a large audience in Scandinavia 
// and surrounding countries. Marketing thinks it would be great to welcome visitors to the site 
// in their own language. Luckily you already use an API that detects the user's location, so this 
// is an easy win.

// The Task:
// Think of a way to store the languages as a database. The languages are listed below so you can copy and 
// paste! Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a 
// greeting - if you have it in your database. It should default to English if the language is not in the 
// database, or in the event of an invalid input.

// Python Solution: 
// def greet(language):
    // greets = {
    //     'english': 'Welcome',
    //     'czech': 'Vitejte',
    //     'danish': 'Velkomst',
    //     'dutch': 'Welkom',
    //     'estonian': 'Tere tulemast',
    //     'finnish': 'Tervetuloa',
    //     'flemish': 'Welgekomen',
    //     'french': 'Bienvenue',
    //     'german': 'Willkommen',
    //     'irish': 'Failte',
    //     'italian': 'Benvenuto',
    //     'latvian': 'Gaidits',
    //     'lithuanian': 'Laukiamas',
    //     'polish': 'Witamy',
    //     'spanish': 'Bienvenido',
    //     'swedish': 'Valkommen',
    //     'welsh': 'Croeso'
    // }
    // return greets[language] if language in greets else "Welcome"

// Javascript Solution:
let greets:any = {
        'english': 'Welcome',
        'czech': 'Vitejte',
        'danish': 'Velkomst',
        'dutch': 'Welkom',
        'estonian': 'Tere tulemast',
        'finnish': 'Tervetuloa',
        'flemish': 'Welgekomen',
        'french': 'Bienvenue',
        'german': 'Willkommen',
        'irish': 'Failte',
        'italian': 'Benvenuto',
        'latvian': 'Gaidits',
        'lithuanian': 'Laukiamas',
        'polish': 'Witamy',
        'spanish': 'Bienvenido',
        'swedish': 'Valkommen',
        'welsh': 'Croeso'
    }
function greet (language:string):string {
    if (greets[language])
    return greets[language] 
    else {return 'Welcome'}
}
console.log(greet('latin'))

// 2)Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those 
// numbers in the form of a phone number.

// Example
// create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// Python Solution: 
// def create_phone_number(n):
//     s = "".join([str(i) for i in n])
//     return f"({s[:3]}) {s[3:6]}-{s[6:]}"

// Javascript Solution:
function create_phone_number(n:number[]):string {
    let s = n.join('')
    return `(${s.slice(0,3)}) ${s.slice(3,6)}-${s.slice(6)}`
}
console.log(create_phone_number([1,2,3,4,5,6,7,8,9,0]))