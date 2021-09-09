export class Cuadrado {

    constructor(
        private lado: number
    ){}

    area() : number {
        return this.lado * this.lado;
    }
}
