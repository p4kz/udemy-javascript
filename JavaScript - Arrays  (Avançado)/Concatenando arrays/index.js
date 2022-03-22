const array1 = [1,2,3]
const array2 = [4,5,5]

const arrays = array1.concat(array2) // 1 <- concat = concatenando array 
const arrays2 = array1.concat(array2, [7,8,9]) // 2 <- add no array 

const a3 = [...array1, ...array2,...[7,8,9,]] //<- spread concatenando e add

console.log(arrays)
console.log(arrays2)
console.log(a3)