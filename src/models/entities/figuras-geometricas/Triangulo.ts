export class Triangulo {

    constructor(
        private base: number,
        private altura: number
    ){}

    area() : number { 
        return (this.base * this.altura) / 2;
    }
}
