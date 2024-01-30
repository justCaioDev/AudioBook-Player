const numeroCapitulos = 10;
const capitulo = document.getElementById('capitulo');
const btnBackward = document.getElementById('anterior');
const btnForward = document.getElementById('proximo');
const btnPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audioCapitulo');

let isPlay = 0;
let capituloAtual = 1;

btnPlayPause.addEventListener('click', tocarOuPausar);
btnForward.addEventListener('click', proximoCapitulo);
btnBackward.addEventListener('click', voltarCapitulo)

function trocarCapitulo() {
    capitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proximoCapitulo() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual++;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    trocarCapitulo();
    tocarFaixa();
    isPlay = 1;
}

function voltarCapitulo() {
    if (capituloAtual === 1) {
        capituloAtual = 10;
    } else {
        capituloAtual--;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    trocarCapitulo();
    tocarFaixa();
    isPlay = 1;
}

function tocarFaixa() {
    audioCapitulo.play();
    btnPlayPause.classList.remove('bi-play-fill'); 
    btnPlayPause.classList.add('bi-pause-fill'); 
}

function pausarFaixa() {
    audioCapitulo.pause();
    btnPlayPause.classList.add('bi-play-fill'); 
    btnPlayPause.classList.remove('bi-pause-fill'); 
}

function tocarOuPausar() {
    if (isPlay === 0) {
        tocarFaixa();
        isPlay = 1;
    } else {
        pausarFaixa();
        isPlay = 0;  
    }
}