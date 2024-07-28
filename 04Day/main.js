// Activity 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let n = 1; n < 11; n++) {
  console.log(`5 x ${n} = ${5 * n}`);
}


// Activity 2
i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

i = 10;
while (i > 0) {
  console.log(i);
  i--;
}


// Activity 3
let n = 1;
do {
  console.log(n);
  n++;
} while (n < 6);

let num = 11;
let j = num;
let fact = 1;
do {
  fact *= num;
  num--;
} while (num > 0);
console.log("factorial of", j, " is " + fact);


// Activity 4
for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    if (i == j) console.log("*".repeat(i));
  }
}

for (let i = 1; i < 6; i++) {
  console.log("*".repeat(i));
}


// Activity 5
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
