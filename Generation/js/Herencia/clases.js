//crear una clase car

class car{
    constructor(marca, modelo, cilindraje){
        this.marca =marca;
        this.modelo= modelo;
        this.cilindraje= cilindraje;
    }

    calcularEdad(){
        const año= new Date().getFullYear();
        return año - this.modelo;
    }

    mostrarInfo(){
        //return ("CARRO: "+ this.marca +" "+ this.cilindraje+" EDAD " + this.calcularEdad() );
        return `Carro: ${this.marca} cilindraje ${this.cilindraje} edad: ${this.calcularEdad()} `
    }
}

const carro = new car("Renault", "2005", 1000);

console.log(carro.calcularEdad());
console.log(carro.mostrarInfo());

