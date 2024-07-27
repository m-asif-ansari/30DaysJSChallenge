// Activity 1
function add(num1, num2) {
    console.log(`Addition of ${num1} and ${num2} = ${num1+num2}`)
}

function sub(num1, num2) {
    console.log(`Subtraction of ${num1} and ${num2} = ${num1-num2}`)
}

function multiply(num1, num2) {
    console.log(`Multiplicatin of ${num1} and ${num2} = ${num1*num2}`)
}

function divide(num1, num2) {
    console.log(`Division of ${num1} and ${num2} = ${num1/num2}`)
}

function remainder(num1, num2) {
    console.log(`Remainder when Division of ${num1} and ${num2} = ${num1%num2}`)
}
let a = 12
let b = 2
add(a,b)
sub(a,b)
multiply(a,b)
divide(a,b)
remainder(a,b)


// Activity 2
let num = 12
num += 10
console.log(num)

let num2 = 15
num2 -= 10
console.log(num2)


// Activity 3
let var1 = 10
let var2 = 20
console.log(var1 < var2)
console.log(var1 > var2)
console.log(var1 <= var2)
console.log(var1 >= var2)
console.log(var1 == var2)
console.log(var1 === var2)


// Activity 4
console.log(true && false)
console.log(true || false)
console.log(!true)


// Activity 5
let num1 = -10
let cond = num1 ? num1>0 : num1<0