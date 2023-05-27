function calcularVal() {
    var primeiroV = Number(document.getElementById("primeiroV").value);
    var segundoV = Number(document.getElementById("segundoV").value);
    var media = (primeiroV + segundoV) / 2;
    document.querySelector("#resultado").innerHTML = `A média dos valores é: ${media}`;
}

function calcularPotencia() {
    var x = parseFloat(window.prompt('Digite o valor de x:'));
    var y = parseFloat(window.prompt('Digite o valor de y:'));

    var resultado = Math.pow(x, y);
    console.log(resultado);
}

function calcularNum() {
    var n1 = parseFloat(window.prompt('Digite o 1º valor:'));
    var n2 = parseFloat(window.prompt('Digite o 2º valor::'));
    var n3 = parseFloat(window.prompt('Digite o 3º valor::'));
    let array = [n1, n2, n3];
    let minimo = Math.min(...array)
    window.alert(`O menor valor dos três número é: ${minimo}`)
}

function exibirDados() {
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        }
    }

    let { modelo, config: { processador } } = dados;

    console.log(modelo);
    console.log(processador);
}

function exibirMarcaProc() {

    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        }
    }

    let marca = dados.marca;
    let processador = dados.config.processador
    let array = Object.values(dados)
    let segundoConteudoArray = array[1];

    window.alert("Marca: " + marca);
    window.alert("Processador: " + processador);
    window.alert("Segundo conteúdo do array: " + segundoConteudoArray);

}

function exibirAlert() {
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
        falar: function () {
            window.alert(`O equipamento é um ${this.marca} e processador ${this.config.processador}`)
        }
    }

    dados.falar()
    let marca = dados
    let processador = dados
}

function exibirAlertNovoEquip() {
    let dados = {
        marca: "HP",
        modelo: "V15",
        config: {
            memoria: 8,
            processador: "i7"
        },
    }
    let novoEquip = { ...dados, valorVenda: "", qtdEstoque: "" }

    console.log(novoEquip)

}

function alterA() {
    var alterA = document.getElementById('alternativaA');
    alterA.innerHTML = `X = [15,25], Y = [12,15,23,43]`
}

function alterB() {
    var y = [12, 15, 23, 43];
    var alterB = document.getElementById('alternativaB');
    alterB.innerHTML = y.join('-');
}
function alterC() {
    let x = [15, 25];
    let y = [12, 15, 23, 43];
    let z = [...x, ...y]
    var alterC = document.getElementById('alternativaC');
    alterC.innerHTML = z
}

function alterD() {
    let Z = [15, 25, 12, 15, 23, 43];
    for (i = 0; i < Z.length; i++) {
        var resultado = Z[i] * 5;
        console.log(`${resultado} `);
    }
}



