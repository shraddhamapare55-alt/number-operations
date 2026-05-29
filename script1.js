let n = 153;
let sum = 0;
let temp = n;
let digits = 0;
let armstrongSum = 0;
console.log("Number:", n);
console.log("First " + n + " numbers:");
for (let i = 1; i <= n; i++) {
    console.log(i);
}
console.log("Table of " + n + ":");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}
temp = n;
while (temp > 0) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
}
console.log("Sum of digits:", sum);
let prime = true;
if (n <= 1) {
    prime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
}
console.log("Is it a prime number?", prime ? "Yes" : "No");
console.log("Factors:");
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
temp = n;
while (temp > 0) {
    digits++;
    temp = parseInt(temp / 10);
}
temp = n;
while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** digits;
    temp = parseInt(temp / 10);
}
console.log("Is it an Armstrong number?", armstrongSum === n ? "Yes" : "No");