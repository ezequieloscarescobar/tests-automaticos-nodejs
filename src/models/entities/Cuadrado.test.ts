import { Cuadrado } from './Cuadrado';

test('El area del cuadrado es 4', () => {
    const unCuadrado = new Cuadrado(2);
    expect(unCuadrado.area()).toBe(4);
});