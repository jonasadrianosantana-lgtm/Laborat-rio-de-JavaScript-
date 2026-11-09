const btnapagar = document.getElementById('btnapagar');
const paragrafo = document.querySelector('p');
const textoOriginal = paragrafo.textContent;
const status = document.getElementById('status');
const dblClick = document.getElementById('dblClick');
const mouseOver = document.getElementById('mouseOver');
const mousePosition = document.getElementById('mousePosition');
const keyPressed = document.getElementById('keyPressed');
const keyReleased = document.getElementById('keyReleased');
const changeInput = document.getElementById('changeinput');
const changeEvent = document.getElementById('changeResultado');

// click + confirm
btnapagar.addEventListener('click', function () {
    if (confirm('Deseja realmente apagar o texto?')) {
        paragrafo.textContent = '';
        status.textContent = 'Texto apagado.';
    }
});

document.getElementById('btnrestaurar').addEventListener('click', function () {
    paragrafo.textContent = textoOriginal;
    status.textContent = 'Texto restaurado.';
});

// evento de mouse e manipulação de DOM
paragrafo.addEventListener('mouseenter', function () {
    paragrafo.style.backgroundColor = '#fff3cd';
});
paragrafo.addEventListener('mouseleave', function () {
    paragrafo.style.backgroundColor = '';
});

// manipulação de janela
document.getElementById('btnjanela').addEventListener('click', function () {
    status.textContent = `Tamanho da janela: ${window.innerWidth} × ${window.innerHeight} pixels.`;
});

// evento de clique duplo
dblClick.addEventListener('dblclick', function () {
    alert('click registrado! :)');
});

// evento mouseover
mouseOver.addEventListener('mouseover', function () {
    mouseOver.style.backgroundColor = 'red';
});

// evento mouseout
mouseOver.addEventListener('mouseout', function () {
    mouseOver.style.backgroundColor = 'black';
    mouseOver.style.color = 'white';
});

// evento de movimento do mouse
document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    mousePosition.textContent = `Posição do mouse: X: ${x}, Y: ${y}`;
});

// evento de tecla pressionada
document.addEventListener('keydown', function (event) {
    keyPressed.textContent = `Tecla pressionada: ${event.key}`;
});

// evento de tecla liberada
document.addEventListener('keyup', function (event) {
    keyReleased.textContent = `Tecla liberada: ${event.key}`;
});

// evento change
changeInput.addEventListener('change', function (event) {
    changeEvent.textContent = `Texto alterado: ${event.target.value}`;
});

// evento input
const inputEvento = document.getElementById('inputEvento');
const inputResultado = document.getElementById('inputResultado');

inputEvento.addEventListener('input', function (event) {
    inputResultado.textContent = `Digitando: ${event.target.value}`;
});

// evento submit
const submitResultado = document.getElementById('submitResultado');

document.getElementById('meuForm').addEventListener('submit', function (event) {
    event.preventDefault(); // evita recarregar a página
    const nome = document.getElementById('nomeForm').value;
    submitResultado.textContent = `Formulário enviado! Nome: ${nome}`;
});

// createElement
const listaItens = document.getElementById('listaItens');

document.getElementById('btncriar').addEventListener('click', function () {
    const item = document.createElement('li');
    item.textContent = `Item criado às ${new Date().toLocaleTimeString()}`;
    listaItens.appendChild(item);
});

// querySelectorAll
document.querySelectorAll('button').forEach(function (botao) {
    botao.style.cursor = 'pointer';
});