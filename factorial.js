function factorial (x) {
    let n = 1
    for (let i=1; i<=x; i++) {
    n = n*i
    }
    return n;
}
console.log(factorial(2))