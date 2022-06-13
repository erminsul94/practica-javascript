// console.log('hello world')
// Cuadrado

console.group('Cuadrados')
const ladocuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladocuadrado);

const perimetroCuadrado = ladocuadrado * 4;
console.log('el perimetro del cuadrado es: ' + perimetroCuadrado);

const areaCuadrado = ladocuadrado * ladocuadrado;
console.log('el area del cuadrado es: ' + areaCuadrado);
console.groupEnd();
// Triangulo

console.group('Triangulos')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    'Los lados del triangulo miden: ' 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log('La altura del triangulo es: ' + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del triangulo es: ' + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo es: ' + areaTriangulo);

console.groupEnd();

// Circulo

console.group('Circulos');

// Radio
const radioCirculo = 4;
console.log('El radio del triangulo es: ' + radioCirculo);

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo);

// PI
const PI = Math.PI;
console.log('El valor de PI es: ' + PI);

// Circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El permetro del circulo es: ' + perimetroCirculo);

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El area del circulo es: ' + areaCirculo);

console.groupEnd();