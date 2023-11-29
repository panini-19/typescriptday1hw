/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('testing')


// Our first TS Code
// Built-in Types: variable: type = value
let age:number = 30;
console.log(age)

age = 20
console.log(age)

let myName:string = 'christian'
console.log(myName)

let isPrime:boolean = true

// ---------- TS Fundamentals ----------

// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
// ** AVOID DOING **

let lastName;
lastName = 'christian'
lastName = 30

const fullName = (fname:string, lname:string) => {
    console.log(fname + lname)
}

// ----- Arrays: Dynamic, you can pass any data type
let numbers:number[] = [1,2,3,4]

let dynamicArr:(string|number|boolean)[] = [23,'christian', true, 'lee', 99]


// Another huge benefit: Code completion
myName.charAt
age.toString
isPrime.valueOf


// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let dogTuple:[number, string] = [1, 'pitbull']
// Code Completion
dogTuple.push(3)
console.log(dogTuple)

// ----- Enums: Special "Class" that represents a group of constants.
const small:number = 25
const medium:number = 50
const large:number = 75

console.log(small)
console.log(medium)
console.log(large)
// PascalCase "numeric"
enum Size {
    Small = 25,
    Medium = 50,
    Large = 75
}

console.log(Size.Small)
// "string"
enum Instructors {
    Lead = 'Christian',
    Associate = 'Dylan'
}

console.log(Instructors.Lead)
// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
// void -> not returning anything
const calculateTax = (income:number,taxYear:number):number => {
    if (taxYear<2024){
        return income * 1.2
    }
    return income * 1.3
}

console.log(calculateTax(40000,2024))

// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let employee:{
    readonly id:number,
    name:string,
    age: number,
    location?: string,
    isAdmin: boolean
    } = {
    id: 0,
    name: 'dylan',
    age: 24,
    location: 'USA',
    isAdmin: false
}

