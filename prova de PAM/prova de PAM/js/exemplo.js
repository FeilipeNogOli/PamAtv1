/**
 atividade 1 tem scrip na propia página para não atralhar as outras
 */

//atividade 2
function exibirAlerta() {
    alert("Você clicou no botão!");
}

/*
atividade 3
document.getElementById(): Retorna o elemento com o ID especificado
document.getElementsByTagName(): Retorna uma coleção de elementos com o nome da tag especificada
document.getElementsByClassName(): Retorna uma coleção de elementos com a classe especificada
document.querySelector(): Retorna o primeiro elemento que corresponde ao seletor especificado
document.querySelectorAll(): Retorna todos os elementos que correspondem ao seletor especificado
*/

// Seleciona os elementos da outra página
var elementById = document.getElementById("elementById");
var elementsByTagName = document.getElementsByTagName("p");
var elementsByClassName = document.getElementsByClassName("elementsByClassName");
var firstElement = document.getElementById("firstElement");
var allElements = document.querySelectorAll(".allElements");

// Aplica estilos aos elementos
elementById.style.fontWeight = "bold";
elementById.style.color = "red";

for (let element of elementsByTagName) {
    element.style.fontStyle = "italic";
}

for (let element of elementsByClassName) {
    element.style.textDecoration = "underline";
}

firstElement.style.fontSize = "20px";

allElements.forEach(element => {
    element.style.backgroundColor = "yellow";
});

//atividade 4
function mouseOver() {
    alert("Mouse passou por cima do botão!");
}

function focusFunction() {
    alert("Input está em foco!");
}

function changeFunction() {
    alert("Valor do input mudou!");
}

//atividade 5

/*
  script dentro da propia pagina html
 */

//atividade 6

/*
  script dentro da propia pagina html
 */

//atividade 7

function converterParaCaixaAlta() {
    let inputText = document.getElementById("inputText").value;
    let resultado = inputText.toUpperCase();
    document.getElementById("resultado").innerText = resultado;
}

function resetar() {
    document.getElementById("inputText").value = "";
    document.getElementById("resultado").innerText = "";
}

//atividade 8

/*
  script dentro da propia pagina html
 */









