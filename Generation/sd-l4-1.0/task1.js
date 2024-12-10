
export class Player {
    constructor(name) {
      this.name = name;
    }
    mostrarInfo(){
      return `name: ${this.name} `;
  }
  }
const jugador = new Player("jugador 1");
console.log(jugador.mostrarInfo());
