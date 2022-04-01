function figuraCuadradoPerimetro(lado){
    return lado *4
    //salidaPerimetro= `El perimetro del cuadro es :${perimetro}cm, el valor del lado recibido es:${lado}cm. `
}
function figuraCuadradoArea(lado){
      return lado **2
     //salidaArea= `El Area del cuadro es :${area}cm, el valor del lado recibido es:${lado}cm. `
    
}
function figuraTrianguloPerimetro(lado1, lado02, base){
    return lado1+lado02+base
}
function figuraTrianguloArea(base, altura){
    return (base * altura) /2 
}

function figuraCirculoDiametro( radio ){
    return radio * 2
}

function figuraCirculoPerimetro( radio){
    const diametro =  figuraCirculoDiametro(radio);
    return diametro * Math.PI
}

function figuraCirculoArea ( radio ){
    return ( radio **2 ) * Math.PI
}


//console.log( figuraTrianguloArea(6,6) );
//console.log( figuraCuadradoPerimetro(156) );
//console.log( figuraCuadradoArea(12) );
console.log(  figuraCirculoArea(5) );