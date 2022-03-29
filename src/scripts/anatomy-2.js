// Anonymous function
(function (a, b, c) {
    return  a + b + c 
})

// Function expression
const sum = function abc(a, b) {
    return a + b
}

const result  = sum(7, 7)
console.log(result)


const anotherSum = sum
console.log(anotherSum(3, 3))

let x = 3
console.log(x)

function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1,2,3])