let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(peso);
    let alturaValida = true; 

    if(!pesoValido){
        console.log("Peso inválido");
        pesoValido = false
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido")
     } 
    if(altura <= 0 ||altura >= 3.00){
        console.log("Altura inválido");
        alturaValida = false
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }
    if(alturaValida && pesoValido){
        let imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return "o peso esta invalido"
    }
}

function calculaImc(peso, altura){
    let imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2)

}