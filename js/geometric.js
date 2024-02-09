const myModule = (()=>{
    'use strict'

//area y perímetro de un cuadrado
const perimetroCuadrado = (side) => side * 4;
const areaCuadrado = (side) => side * side;
const valueResult = document.getElementById('result');


//variables apra el triangulo
const perimetroTriangulo = (side1, side2, base) => side1 + side2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;


//variables para el círculo
const diametroCirculo = (radio)=>radio*2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI; //calse Math para llamar al número PI
const areaCirculo = (radio) => (radio * radio) * Math.PI;



//metodo para calcular el parímetro de un cuadrado
function calcularPerimetroCuadrado(){

    //para coger el lado que nos da el ususario, que es el inputSide
    let inputSide = document.getElementById('inputSide');

    //para obtener el valor del inputSide y lo vamos a convertir en numero
    let value = Number(inputSide.value);

    //ya que tenemos el valor, hace falta que haga las operaciones de perímetro o área y que lo muestre en nuestra web
    const result =`El perímetro del Cuadrado es : ${perimetroCuadrado(value)} cm`;

    valueResult.innerText = result;
}





//metodo para calcular el AREA de un cuadrado
function calcularAreaCuadrado(){

    //para coger el lado que nos da el ususario, que es el inputSide
    let inputSide = document.getElementById('inputSide');

    //para obtener el valor del inputSide y lo vamos a convertir en numero
    let value = Number(inputSide.value);

    //ya que tenemos el valor, hace falta que haga las operaciones de perímetro o área y que lo muestre en nuestra web
    const result =`El área del Cuadrado es : ${areaCuadrado(value)} cm2`;

    valueResult.innerText = result;
}




//metodo para calcular el parímetro de un triángulo
function calcularPerimetroTriangulo(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');

    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
 
    const result =`El períemtro del triangulo es: ${perimetroTriangulo(side1, side2, side3)} cm`;
    valueResult.innerText = result;
}




//método para calcular el area de un triangulo:
function calcularAreaTriangulo(){
    let base = document.getElementById('inputBase');
    let altura = document.getElementById('inputAltura');
 

    base = Number(base.value);
    altura = Number(altura.value);
  
 
    const result =`El area del triangulo es: ${areaTriangulo(base, altura)} cm2`;
    valueResult.innerText = result;
}



//método para calcular el diametro de un circulo:
function calcularDiametroCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El diámetro de Circulo es: ${diametroCirculo(radio)} cm`;
    valueResult.innerText=result;
}



//método para calcular el perimetro de un circulo:
function calcularPerimetroCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El perímetro de Circulo es: ${perimetroCirculo(radio)} cm`;
    valueResult.innerText=result;
}



//método para calcular el área de un círculo:
function calcularAreaCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El área de Circulo es: ${areaCirculo(radio)} cm2`;
    valueResult.innerText=result;
}

return {
    cpc : calcularPerimetroCuadrado,
    cac : calcularAreaCuadrado
    };
})();


