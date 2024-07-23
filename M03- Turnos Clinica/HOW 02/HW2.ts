const num1: number = 10;
const num2: number = 40;

const sumar= (a:number, b:number) =>{
    return a+b;
}
console.log (sumar(num1, num2));

const nombre: string = "Ornella";

const saludar = (name: string): string => {
    return `Hola ${name}`
}

console.log(saludar(nombre));
saludar("Pedro");
saludar("Maria")

const calcularTotal = (quantity: number, price:number): number => {
    return quantity * price ;
}
calcularTotal(5,10)
calcularTotal(10, 10)