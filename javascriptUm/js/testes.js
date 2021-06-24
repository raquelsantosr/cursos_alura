let titulo1 = document.querySelector("#titulo1");
titulo1.addEventListener("click", mostraMensagem1);

function mostraMensagem1(){
    console.log("Fui clicado");
}



let titulo2 = document.querySelector("#titulo2");
titulo2.addEventListener("click", mostraMensagem2());

function mostraMensagem2(){
    console.log("Fui clicado dois");
}



let titulo3 = document.querySelector("#titulo3");
titulo3.addEventListener("click", function(){
    console.log("Fui clicado tres");
});




document.addEventListener("click", mostraMensagem4);

function mostraMensagem4(){
    console.log("Fui clicado quatro");
}