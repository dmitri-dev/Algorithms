// Fibonacci
function fibonacci(n) {
    const sequence = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence[n]
}
let memo = {}
function fibonacci2(n, memo) {
    let result
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 2) {
        result = 1
    } else {
        result = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo)
    }
    memo[n] = result
    return result
}



// Is Prime
function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// Minimum Integer Element
function minIntElement(a) {
    let currentMin = a[0]
    for (const i of a) {
        if (i < currentMin) {
            currentMin = i
        }
    }
    return currentMin
}

function minIntElement2(a) {
    a.sort()
    return a[0]
}

// Is Even
function isEven(n) {
    return n % 2 === 0
}

function isEven2(n) {
    return Number.isInteger(n / 2)
}

// Is Power of Two
function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    let dividend = n
    while (dividend !== 1) {
        if (dividend % 2 !== 0) {
            return false
        }
        dividend /= 2
    }
    return true
}

function isPowerOfTwo2(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

// Factorial
function factorial(n) {
    let product = 1
    for (let i = 2; i <= n; i++) {
        product *= i
    }
    return product
}

function factorial2(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial2(n - 1)
}

console.log(fibonacci2(20, {}))