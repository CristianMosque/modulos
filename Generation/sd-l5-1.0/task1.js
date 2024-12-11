export function costCalculator(transaccionesAmount) {
    var cost = transaccionesAmount * 1.01 + 3;
    return cost
}
console.log(costCalculator((process.argv[3])))