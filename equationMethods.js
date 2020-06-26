const multipleEquations = (val1, val2) => {
    return [val1+val2, val1*val2, val2/val1, val1/val2*100]
}
const [sum, multiply, division, percentage] = multipleEquations(5,6);

console.log(sum)
console.log(multiply)
console.log(division)
console.log(percentage)

export {sum, multiply, division, percentage};