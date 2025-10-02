
const input = document.getElementById("input");

const btnOperador = document.getElementsByClassName("operador");

const operadores = ['/', '*', '-', '+'];

let valor1 = '';

let valor2 = "";

let operador = '';

function pintarValorEnInput($e){
    if(operadores.includes($e.textContent)){
        if (input.value == '') {
            alert('Se necesita agregar un número antes que el operador');
            return;
        }
        desactivarOperadores();
        valor1 = input.value;
        operador = $e.textContent;
        input.value += $e.textContent;
        return;     
    }

    if(operador == ''){
        valor1 += $e.textContent;
        
    }

    if(operador != ''){
        valor2 += $e.textContent;
        
    }

    input.value += $e.textContent;
}

function calcularResultado(){
    if(operador != ''){
        switch (operador) {
          case "+":
            pintarResultado(suma());
            break;
          case "-":
            pintarResultado(resta());
            break;
          case "*":
            pintarResultado(multi());
            break;
          case "/":
            if(isValidValue()){
                pintarResultado(division());
                break;
            }

            alert('El segundo valor no es valido');
            break;
            
        }
    }
    activarOperadores();
    limpiarVariables();
}

function pintarResultado(suma){
    input.value = suma;
}

function desactivarOperadores(){    
    for(let i=0; i < btnOperador.length; i++){
        btnOperador[i].setAttribute('disabled', true);
    }
}

function activarOperadores() {
  for (let i = 0; i < btnOperador.length; i++) {
    btnOperador[i].removeAttribute("disabled");
  }
}

function limpiarInput(){
    input.value = '';
    activarOperadores();
}

function limpiarVariables(){
    valor1 = '';
    valor2 = '';
    operador = '';
}

function suma(){
    return parseInt(valor1) + parseInt(valor2);
}

function resta() {
  return parseInt(valor1) - parseInt(valor2);
}

function multi() {
  return parseInt(valor1) * parseInt(valor2);
}

function division(){
    return parseInt(valor1) / parseInt(valor2);
}

function isValidValue() {
  if (valor2 == 0 || valor2 < 0) {
    return false;
  }

  return true;
}