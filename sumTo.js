const sumTo = (num, currentSum=0) => {
    // BASE CASE 
    if (num === 0) {
        return currentSum
    }
    // RECURSION CASE
    currentSum += num
    return sumTo(num-1, currentSum)
}

console.log(sumTo(5))
