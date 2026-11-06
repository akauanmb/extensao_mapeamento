//aqui provavelmente será o lugar onde vou usar a DomAPI para fazer queryselector de tudo
//acho que pra adicionar os cards vai ter que ser um appendchild?
//também acho que vou precisar de algum algoritmo para atribuir um atalho diferente para cada interagível


const elementos = document.querySelectorAll("[tabindex], a, nav, link, button, details,dialog, summary");

const mapaAtalhos = {};

elementos.forEach((elemento, index) => {
    //recebe valor do índice e converte para string
    //elementos[index] receberá a letra valor a+indice
    let resto = index % 26;
    let letraAtalho = String.fromCharCode(resto + 97);
    const textoAtalho = [letraAtalho];
    while(Math.floor(index/26)>=1){
        index = Math.floor(index/26) - 1;
        resto = index % 26;
        letraAtalho = String.fromCharCode(resto + 97);
        textoAtalho.unshift(letraAtalho);
    }

    const card = textoAtalho.join("");
    const cardVisual = document.createElement("span");
    cardVisual.textContent = card;
    elemento.after(cardVisual);

    cardVisual.style.backgroundColor = "yellow";
    cardVisual.style.color = "black";
    cardVisual.style.border = "1px solid black";
    cardVisual.style.borderRadius = "3px";
    cardVisual.style.padding = "2px 4px";
    cardVisual.style.position = "absolute"; // Para flutuar sobre a tela
    
    //após os primerios testes foi notada a necessidade de eventualmente remover todos os cards da tela
    cardVisual.classList.add("removivel");
    mapaAtalhos[card] = elemento;
});

function limparCards(){
    const cards = querySelectorAll('.removivel');

    cards.forEach(card => {
        card.remove;
    }
}

let teclasInseridas = "";
document.addEventListener("keydown", (event) =>{
    if(document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") return;
    if(event.key == "Escape"){
        teclasInseridas = "";
        return;
    } 
    teclasInseridas = teclasInseridas + event.key;
    if(mapaAtalhos[teclasInseridas]){
        mapaAtalhos[teclasInseridas].click();
        teclasInseridas = "";
    }
}); 