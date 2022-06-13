// Cuadrado

console.group('Cuadrados')
// const ladocuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladocuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log('el perimetro del cuadrado es: ' + perimetroCuadrado);

// const areaCuadrado = ladocuadrado * ladocuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log('el area del cuadrado es: ' + areaCuadrado);
console.groupEnd();
// Triangulo

console.group('Triangulos')
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     'Los lados del triangulo miden: ' 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log('La altura del triangulo es: ' + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log('El area del triangulo es: ' + areaTriangulo);

console.groupEnd();

// Circulo

console.group('Circulos');

// Radio
// const radioCirculo = 4;
// console.log('El radio del triangulo es: ' + radioCirculo);

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log('El diametro del circulo es: ' + diametroCirculo);

// PI
const PI = Math.PI;
console.log('El valor de PI es: ' + PI);

// Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo();
    return diametro * PI;
} 
// console.log('El permetro del circulo es: ' + perimetroCirculo);

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
} 
// console.log('El area del circulo es: ' + areaCirculo);

console.groupEnd();

function calcularPerimetroCuadrado() {
   const input = document.getElementById('inputCuadrado');
   const value = input.value;
   const perimetro = perimetroCuadrado(value); 
   alert('El permetro del cuadrado es: ' + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value); 
    alert('El area del cuadrado es: ' + area); 
}