// FUNCAO DE INSERIR NOME e EQUIPE

var nameEl1 = document.querySelector("#name1")
var namePrompt1 = prompt("Nome atleta 1")
nameEl1.innerHTML = namePrompt1

var equipeEl1 = document.querySelector("#equipe1")
var equipePrompt1 = prompt("Nome equipe 1")
equipeEl1.innerHTML = equipePrompt1

var nameEl2 = document.querySelector("#name2")
var namePrompt2 = prompt("Nome atleta 2")
nameEl2.innerHTML = namePrompt2

var equipeEl2 = document.querySelector("#equipe2")
var equipePrompt2 = prompt("Nome equipe 2")
equipeEl2.innerHTML = equipePrompt2 

// FUNÇÕES DO INICIAR PAUSAR E ZERAR DO CRONOMETRO//


var btnIniciar = document.querySelector("#btnIniciar");
var btnPausar = document.querySelector("#btnPausar");
var btnReiniciar = document.querySelector("#btnReiniciar");
var cronometroElemento = document.querySelector("#cronometro");
var cronometro;
var tempoTotal = 299;
var tempoRestante = tempoTotal;


function atualizarCronometro() {
  var minutos = Math.floor(tempoRestante / 60);
  var segundos = tempoRestante % 60;

  var minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
  var segundosFormatados = segundos < 10 ? "0" + segundos : segundos;

  cronometroElemento.innerHTML = minutosFormatados + ":" + segundosFormatados;

  if (tempoRestante <= 0) {
    clearInterval(cronometro);
    cronometroElemento.innerHTML = "Tempo esgotado!";
  }

  tempoRestante--;
}

btnIniciar.addEventListener("click", function() {
  btnIniciar.disabled = true;
  btnPausar.disabled = false;
  btnReiniciar.disabled = false;

  cronometro = setInterval(atualizarCronometro, 1000);
});

btnPausar.addEventListener("click", function() {
  clearInterval(cronometro);
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});

btnReiniciar.addEventListener("click", function() {
  clearInterval(cronometro);
  cronometroElemento.innerHTML = "05:00";
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
  btnReiniciar.disabled = true;
 
  tempoRestante = tempoTotal;

});

// Pontuação 

let scoreFig1 = 0 
let scoreFig2 = 0


function attScore1(){
  scoreFig1++;
  document.querySelector("#score1").textContent = scoreFig1
} 

document.querySelector("#score1").addEventListener("click", function() {
    attScore1();
  });

function attScore1N(){
    scoreFig1--;
    document.querySelector("#score1").textContent = scoreFig1

}
document.querySelector("#score1").addEventListener("contextmenu", function(event) {
    event.preventDefault()
    attScore1N();
  });

  function attScore2(){
    scoreFig2++;
    document.querySelector("#score2").textContent = scoreFig2
  } 
  
  document.querySelector("#score2").addEventListener("click", function() {
      attScore2();
    });
  
  function attScore2N(){
      scoreFig2--;
      document.querySelector("#score2").textContent = scoreFig2
  
  }
  document.querySelector("#score2").addEventListener("contextmenu", function(event) {
      event.preventDefault()
      attScore2N();
    });


// FUNÇÃO DE VANTAGEM DOS ATLETAS//

let advFig1 = 0
let advFig2 = 0

function attAdv1(){
  advFig1++;
  document.querySelector("#adv1").textContent = advFig1
} 
document.querySelector("#adv1").addEventListener("click", function() {
  attAdv1();
});


function attAdv1N(){
    advFig1--;
    document.querySelector("#adv1").textContent = advFig1

}
document.querySelector("#adv1").addEventListener("contextmenu", function(event) {
    event.preventDefault()
    attAdv1N();
  });



function attAdv2(){
  advFig2++;
  document.querySelector("#adv2").textContent = advFig2
} 

  document.querySelector("#adv2").addEventListener("click", function() {
    attAdv2();
})

function attAdv2N(){
    advFig2--;
    document.querySelector("#adv2").textContent = advFig2

}
document.querySelector("#adv2").addEventListener("contextmenu", function(event) {
    event.preventDefault()
    attAdv2N();
  });


// FUNÇÃO DE DESVANTAGEM DOS ATLETAS//

let penFig1 = 0
let penFig2 = 0

function attPen1(){
    penFig1++;
    document.querySelector("#pen1").textContent = penFig1
}
document.querySelector("#pen1").addEventListener("click", function(){
    attPen1()
})

function attPen1N(){
    penFig1--;
    document.querySelector("#pen1").textContent = penFig1

}
document.querySelector("#pen1").addEventListener("contextmenu", function(event) {
    event.preventDefault()
    attPen1N();
  });

function attPen2(){
    penFig2++;
    document.querySelector("#pen2").textContent = penFig2
}

document.querySelector("#pen2").addEventListener("click", function(){
    attPen2()
})
function attPen2N(){
    penFig2--;
    document.querySelector("#pen2").textContent = penFig2

}
document.querySelector("#pen2").addEventListener("contextmenu", function(event) {
    event.preventDefault()
    attPen2N();
  });


