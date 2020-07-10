const splitAString = (str) => {return str.split('')};

const reverseAString = (str) => {return splitAString(str).reverse().join('')};

const isPalindrome = (str) => {
    if (str === reverseAString(str)){
        return true;
    }else {
        return false;
    }
}


const findAndReplace = (originalString, textoToReplace, replacementText) => {
   
    return  originalString.replace(textoToReplace, replacementText);
}



export {splitAString, reverseAString, isPalindrome, findAndReplace};

