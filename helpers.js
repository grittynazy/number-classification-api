// Check if a number is prime 
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Check if a number is perfect (sum of divisors equals the number)
function isPerfect(n) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n && n !== 1;
}

// Check if a number is an Armstrong number
function isArmstrong(n) {
    let digits = n.toString().split("").map(Number);
    let power = digits.length;
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === n;
}

// Get a list of mathematical properties
function getProperties(n) {
    let properties = [];
    if (n % 2 !== 0) properties.push("odd");
    if (n % 2 === 0) properties.push("even");
    if (isArmstrong(n)) properties.push("armstrong");
    return properties;
}

// Calculate the sum of digits
function getDigitSum(n) {
    return n.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
}

// Generate a fun fact about the number
function getFunFact(n) {
    if (isArmstrong(n)) {
        let digits = n.toString().split("");
        let power = digits.length;
        let armstrongCalculation = digits.map(d => `${d}^${power}`).join(" + ");
        return `${n} is an Armstrong number because ${armstrongCalculation} = ${n}`;
    }
    return `Fun fact: ${n} is an interesting number!`;
}

// Export functions so they can be used in index.js
module.exports = { isPrime, isPerfect, isArmstrong, getProperties, getDigitSum, getFunFact };

