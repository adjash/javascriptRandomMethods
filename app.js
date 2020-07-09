/* This contains a bunch of methods which I will work on over time just for fun. */
import {findAndReplace, splitAString, reverseAString, isPalindrome} from './stringMethods.js';
import { triangleArea, addAllUpTo, matchStickHouses, canArrayBeNested } from './equationMethods.js';


console.log(findAndReplace("The Quick red fox", "red", "blue"));
console.log("Split a string method: ", splitAString("Split String Here"));
console.log("Reversed String method: ", reverseAString("This is a Reversed String"));
console.log("Is Reversed String === Original String:", isPalindrome("demo"));
console.log(triangleArea(7,4));
console.log(addAllUpTo(13));

console.log(matchStickHouses(4))


console.log(canArrayBeNested([1, 2, 3, 4], [0, 6]));

console.log(canArrayBeNested([3, 1], [4, 0]));

console.log(canArrayBeNested([9, 9, 8], [8, 9]));

console.log(canArrayBeNested([1, 2, 3, 4], [2, 3]));