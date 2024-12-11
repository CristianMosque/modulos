export function ageCalculator(year, month, day) {
    const today = new Date();
    const yearNacimiento = new Date(year, month, day)
    const currentYear = today.getFullYear();
    const edad = currentYear - yearNacimiento.getFullYear();
    return edad   
}
console.log(ageCalculator("2000","12","25"));