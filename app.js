/* This contains a bunch of methods which I will work on over time just for fun. */
import {findAndReplace, splitAString, reverseAString, isPalindrome} from './stringMethods.js';
import { triangleArea, addAllUpTo, matchStickHouses,
         canArrayBeNested, returnPlusOne, minMax, tallestBuildingHeight } from './equationMethods.js';


console.log(findAndReplace("The Quick red fox", "red", "blue"));
console.log("Split a string method: ", splitAString("Split String Here"));
console.log("Reversed String method: ", reverseAString("This is a Reversed String"));
console.log("Is Reversed String === Original String:", isPalindrome("demo"));
console.log(triangleArea(7,4));
console.log(addAllUpTo(13));

console.log(matchStickHouses(4))

/*Given Following Rules: 
1. 2 arrays
2. if arr1.minval > arr2minval && arr1max < arr2max
3. return true
4. else false
*/
console.log(canArrayBeNested([1, 2, 3, 4], [0, 6]));
console.log(canArrayBeNested([1, 2, 3, 4], [2, 3]));

console.log(returnPlusOne(1));

console.log(minMax([-0.473, -0.6834, -0.1287, 0.5632]));


console.log(tallestBuildingHeight([
    "                              ",
    "                         ###  ",
    "                         ###  ",
    "###                    #####  ",
    "###      #             #####  ",
    "###     ###            #####  ",
    "######  ###            #######",
    "######  ######  ###    #######",
    "###################    #######",
    "###############################",
    "###############################"
  ]));

  