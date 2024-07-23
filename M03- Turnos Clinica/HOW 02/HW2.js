"use strict";
const num1 = 10;
const num2 = 40;
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(num1, num2));
const nombre = "Ornella";
const saludar = (name) => {
    return `Hola ${name}`;
};
console.log(saludar(nombre));
saludar("Pedro");
saludar("Maria");
const calcularTotal = (quantity, price) => {
    return quantity * price;
};
calcularTotal(5, 10);
calcularTotal(10, 10);
