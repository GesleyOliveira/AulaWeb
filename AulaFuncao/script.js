document.querySelector('#btnCriar').addEventListener('click', criar);

var id=0;

function criar(){
    var titulo= document.createElement('h1');
    titulo.innerText = "criado"
    id += 1;
    x = 'tit' + id
    titulo.setAttribute('id', x)
    document.body.appendChild(titulo) 
}

variavel=document.querySelector('#btnCriar')
variavel.addEventListener('click', function(){
    var titulo= document.createElement('h1')
    titulo.innerText = "criado"
    id += 1;
    x = 'tit' + id
    titulo.setAttribute('id', x)
    document.body.appendChild(titulo) 
})