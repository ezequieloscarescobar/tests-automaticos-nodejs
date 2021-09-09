import { Triangulo } from './Triangulo';

test('El área del triángulo es 3', () => {
    const unTriangulo = new Triangulo(2,3);
    expect(unTriangulo.area()).toBe(3);
})