let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';


function somarSaldo(soma: number){
    let currentSaldo = Number(campoSaldo.innerHTML);
    currentSaldo = currentSaldo + soma;
    campoSaldo.innerHTML = currentSaldo.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarSaldo(Number(soma.value));
})

botaoLimpar.addEventListener('click', function() {
    limparSaldo();
})