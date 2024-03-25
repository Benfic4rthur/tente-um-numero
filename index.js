let numero = Math.round(Math.random() * 10);
let tentativas = 0;

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
    const valor = Number(input.value);
    tentativas++;
    if (valor === numero) {
        resultado.innerHTML = `Parabéns! O número correto era ${numero}. <br>Tentativas: ${tentativas} <button onclick="window.location.reload()" class="botao-reiniciar">Jogar novamente</button>`;
        input.value = "";
        input.focus();
        tentativas = 0;
        numero = Math.round(Math.random() * 10);
    } else if (valor > numero) {
        resultado.innerHTML = `O número correto é menor. <br>Tentativas: ${tentativas}`;
        input.value = "";
        input.focus();
    } else {
        resultado.innerHTML = `O número correto é maior.<br> Tentativas: ${tentativas}`;
        input.value = "";
        input.focus();
    }

    if (tentativas === 3) {
        resultado.innerHTML = `Você perdeu! <br>O número correto era ${numero}. <button onclick="window.location.reload()" class="botao-reiniciar">Jogar novamente</button>`;
        input.value = "";
        input.focus();
        tentativas = 0;
        numero = Math.round(Math.random() * 10);
    }

})
document.getElementById('input').addEventListener('input', function () {
    if (this.value > 10) {
        alert('Por favor, insira um número entre 0 e 10');
        this.value = '';
    }
});
//continuar com enter
document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btn').click();
    }
})