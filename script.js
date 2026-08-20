const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

const telaPedido = document.getElementById("telaPedido");
const telaEspecial = document.getElementById("telaEspecial");

btnSim.addEventListener("click", function () {
    telaPedido.style.display = "none";
    telaEspecial.style.display = "block";
    criarCoracoes();
});

function fugir() {
    btnNao.style.position = "fixed";

    const margem = 15;

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    const areaX =
        larguraTela -
        larguraBotao -
        margem * 2;

    const areaY =
        alturaTela -
        alturaBotao -
        margem * 2;

    const x =
        margem +
        Math.random() * Math.max(0, areaX);

    const y =
        margem +
        Math.random() * Math.max(0, areaY);

    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
}

btnNao.addEventListener("mouseenter", fugir);

btnNao.addEventListener("touchstart", function (event) {
    event.preventDefault();
    fugir();
});

function criarCoracoes() {
    for (let i = 0; i < 30; i++) {
        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";
        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-30px";
        coracao.style.fontSize = 15 + Math.random() * 25 + "px";
        coracao.style.zIndex = "999";
        coracao.style.pointerEvents = "none";
        coracao.style.animation =
            `cair ${3 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(coracao);

        setTimeout(function () {
            coracao.remove();
        }, 6500);
    }
}