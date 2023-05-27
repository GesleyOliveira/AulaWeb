document.querySelector('#btn').addEventListener('click', funcoes)

function funcoes(){
    let registro1 = ["ana", "Sorocaba", 100, 200, 500]
    let [nomex, cidadex, ...dividas] = registro1
    console.log(dividas.join(" "))

    let registro2 = ["Julia", "200", 15, true]
    
    let array = [...registro1, ...registro2]
    console.log(array)

    console.log("entrei")
    let dados= ['Anna', 'julia', 'Sorocaba', 'Votorantim', 'Piedade']
    console.log(dados[0])
    for (i=0; i<dados.length; i++)
    {
        console.log(`${dados[i]}-`);
    }
    let dados2=["Votorantim", "SP", "Cimento"]
    let [cidade, uf, mascote] = dados2 
    console.log(`Na cidade de ${cidade}, no estado de ${uf}, tem uma fama da cidade do ${mascote}`)
    cidade = "Nova Votorantim"
    console.log(cidade, dados2[0])
    let objeto = {
        nome:"Gesley",
        endereco:{rua: "Itu", numero:12},
        esportes:['natacao', 'volei'],
        falar: function (){
            console.log (`meu nome é ${this.nome}`)
            },
    }
    objeto.falar()
    
    let {esportes}= objeto
    let {endereco}= objeto

    console.log(esportes, endereco)
    console.log(esportes.join(" e "))
    console.log(esportes.join(" "))
    console.log(esportes.join())
    
}