// Activity 1

let num = 10
if (num>0) {
    console.log("Number is positive")
}
else if (num == 0){
    console.log("Number is zero")
} 
else {
    console.log("Number is negative")
}

let age = 20
if (age >= 18) {
    console.log("Eligible to vote")
} 
else {
    console.log("Not eligible to vote")
}


// Activity 2
let num1 = 11
let num2 = 5
let num3 = 10
let biggest;

if (num1 > num2){
    if (num1 > num3){
        biggest = num1
    }
} else if (num2 > num3){
    if (num2 > num1){
        biggest = num2
    }
} else if (num3 > num1){
    if (num3 > num2){
        biggest = num3
    }
}
console.log(biggest)


// Activity 3

let day = "monday"
switch (day) {
    case 'monday':
        console.log("It's Monday")
        break;
    case 'tuesday':
        console.log("It's Tuesday")
        break;
    case 'wednesday':
        console.log("It's Wednesday")
        break;
    case 'thursday':
        console.log("It's Thursday")
        break;
    case 'friday':
        console.log("It's Friday")
        break;
    case 'saturday':
        console.log("It's Saturday")
        break;
    case 'sunday':
        console.log("It's Sunday")
        break;
    default:
        console.log("Invalid day")
}

let marks = 91
switch (true) {
    case marks >= 90 && marks < 100:
        console.log("A")
        break;
    case marks >= 75 && marks < 100:
        console.log("B")
        break;
    case marks >= 60 && marks < 100:
        console.log("C")
        break;
    case marks >= 45 && marks < 100:
        console.log("D")
        break;
    case marks < 45 && marks < 100:
        console.log("F")
        break;
    default:
        console.log("Invalid marks")
}


// Activity 4

let var1 = 11
let isEven = var1? var1 % 2 == 0 : false
console.log(var1,'is even',isEven)


// Activity 5

let year = 2024
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year,"It's a leap year")
        } else {
            console.log(year,"It's not a leap year")
        }
    } else {
        console.log(year,"It's a leap year")
    }
} else {
    console.log(year,"It's not a leap year")
}
