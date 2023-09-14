alert("Olá Mundo");

// Seletores 
let dataNascimento = document.querySelector("#dataNascimento"); 
let calcularIdade = document.querySelector("#calcularIdade"); 
let resultado = document.querySelector("#resultado"); 
let votar = document.querySelector("#votar"); 
 
// Adiciona um ouvinte de evento para o botão "Calcular Idade" 
calcularIdade.addEventListener("click", function(event) { 
    event.preventDefault(); 
 
    let dataNascimentoValor = new Date(dataNascimento.value); 
 
    let dataAtual = new Date(); 
 
    let diferencaEmMilissegundos = dataAtual - dataNascimentoValor; 
 
    let milissegundosEmAnos = 1000 * 60 * 60 * 24 * 365.25; 
    let diferencaEmAnos = diferencaEmMilissegundos / milissegundosEmAnos; 
 
    resultado.innerHTML = "Idade: " + Math.floor(diferencaEmAnos)+" ano(s)"; 
 
    if(diferencaEmAnos >= 18){ 
        votar.innerHTML = "É maior de Idade já pode votar"; 
    }else{ 
        let anosParaVotar = 18 - diferencaEmAnos;  
        votar.innerHTML = "É menor de Idade ainda não pode votar tem de aguar dar "+Math.ceil(anosParaVotar)+" ano(s) para votar" 
    } 
});
