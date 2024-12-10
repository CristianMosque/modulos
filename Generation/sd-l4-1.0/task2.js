
export class Player {
  constructor(name, level) {
    this.name = name;
    this.level= level;
  }
  mostrarInfo(){
    return `name: ${this.name} level: ${this.level} `;
}
}
const jugador = new Player("Cris",1);
console.log(jugador.mostrarInfo());
