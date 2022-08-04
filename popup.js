let palavra = document.getElementById("palavra");
palavra.value = 'pirata';
let botao = document.getElementById("pesquisar").addEventListener('click', pesquisarPalavra);
let textoRetorno = "";

function pesquisarPalavra(event) {
    const urlBase = "https://dicionario-extensao.herokuapp.com/meanings/";
    fetch(String(urlBase + palavra.value + '/')).then(retorno => (retorno.json()))
        .then(dados => montarRetorno(dados[0].meanings));
}

function montarRetorno(retornos) {

    for (let i = 0; i < retornos.length; i++) {
        textoRetorno += retornos[i] + "\n";
    }
    document.getElementById("popup").remove();
    montarTela();
}

function montarTela() {
    let divNova = document.createElement("div");
    document.body.appendChild(divNova);
    let paragrafo = document.createElement('p');
    paragrafo.innerText = textoRetorno;
    divNova.appendChild(paragrafo);
}