export class Player { 
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  Info() {
    return `${this.name} has reached Level ${this.level}!`;
  }
  levelUp() {
    return `${this.name} has reached Level ${this.level+1}!`;
  }
}
const jugador = new Player("Grog", 4);
console.log(jugador.Info());
console.log(jugador.levelUp());

