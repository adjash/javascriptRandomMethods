/* This contains a bunch of methods which I will work on over time just for fun. */
import {findAndReplace, splitAString, reverseAString, isPalindrome} from './stringMethods.js';
import { triangleArea, addAllUpTo } from './equationMethods.js';


console.log(findAndReplace("The Quick red fox", "red", "blue"));
console.log("Split a string method: ", splitAString("Split String Here"));
console.log("Reversed String method: ", reverseAString("This is a Reversed String"));
console.log("Is Reversed String === Original String:", isPalindrome("demo"));
console.log(triangleArea(7,4));
console.log(addAllUpTo(13));