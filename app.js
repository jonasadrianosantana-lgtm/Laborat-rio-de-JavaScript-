const btnApagar    = document.getElementById('btnapagar');
const btnRestaurar = document.getElementById('btnrestaurar');
const btnJanela    = document.getElementById('btnjanela');
const status       = document.getElementById('status');

const paragrafo     = document.querySelector('#textoApagar');
const textoOriginal = paragrafo.textContent;

btnApagar.addEventListener('click', function () {
    if (confirm('Deseja realmente apagar o texto?')) {
        paragrafo.textContent = '';
        status.textContent = 'Texto apagado.';
    }
});

btnRestaurar.addEventListener('click', function () {
    paragrafo.textContent = textoOriginal;
    status.textContent = 'Texto restaurado.';
});

btnJanela.addEventListener('click', function () {
    status.textContent =
        `Tamanho da janela: ${window.innerWidth} × ${window.innerHeight} pixels.`;
});

paragrafo.addEventListener('mouseenter', () => paragrafo.style.backgroundColor = '#fff3cd');
paragrafo.addEventListener('mouseleave', () => paragrafo.style.backgroundColor = '');

const dblClick      = document.getElementById('dblClick');
const mouseOver     = document.getElementById('mouseOver');
const mousePosition = document.getElementById('mousePosition');

dblClick.addEventListener('dblclick', function () {
    alert('Clique duplo registrado! :)');
});

mouseOver.addEventListener('mouseover', function () {
    mouseOver.style.backgroundColor = 'red';
    mouseOver.style.color = '#fff';
});

mouseOver.addEventListener('mouseout', function () {
    mouseOver.style.backgroundColor = '';
    mouseOver.style.color = '';
});

document.addEventListener('mousemove', function (event) {
    mousePosition.textContent = `Posição do mouse: X: ${event.clientX}, Y: ${event.clientY}`;
});

const keyPressed  = document.getElementById('keyPressed');
const keyReleased = document.getElementById('keyReleased');

document.addEventListener('keydown', function (event) {
    keyPressed.textContent = `Tecla pressionada: ${event.key}`;
});

document.addEventListener('keyup', function (event) {
    keyReleased.textContent = `Tecla liberada: ${event.key}`;
});

const changeInput     = document.getElementById('changeinput');
const changeResultado = document.getElementById('changeResultado');

changeInput.addEventListener('change', function (event) {
    changeResultado.textContent = `Texto alterado: ${event.target.value}`;
});

const inputEvento    = document.getElementById('inputEvento');
const inputResultado = document.getElementById('inputResultado');

inputEvento.addEventListener('input', function (event) {
    inputResultado.textContent = `Digitando: ${event.target.value}`;
});

const meuForm         = document.getElementById('meuForm');
const submitResultado = document.getElementById('submitResultado');

meuForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nomeForm').value;
    submitResultado.textContent = `Formulário enviado! Nome: ${nome}`;
});

const btnCriar   = document.getElementById('btncriar');
const listaItens = document.getElementById('listaItens');

btnCriar.addEventListener('click', function () {
    const item = document.createElement('li');
    item.textContent = `Item criado às ${new Date().toLocaleTimeString()}`;
    listaItens.appendChild(item);
});

document.querySelectorAll('button').forEach(function (botao) {
    botao.style.cursor = 'pointer';
});