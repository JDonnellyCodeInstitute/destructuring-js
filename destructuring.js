/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27]
// non-ES6 way:
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
// ES6 destructuring way:
let [john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
//use commas to skip values you dont want
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

//even easier with objects
let languages2 = {
    first: "eng",
    second: "fra",
    third: "ger",
    fourth: "jap",
};
let {first, third} = languages2;
console.log(first, third);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite)
console.log(secondFavourite)
console.log(others)

let favouriteFoods = {
    brian: "pasta",
    anna: "pizza",
    sarah: "veg",
    andrea: "steak"
};
let {brian, anna, ...rest } = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);