let dados = [];

async function iniciarBusca(){
    let resposta = await fetch ('data.json');
    dados = await resposta.json();
    

    return dados;
    
   
}

function criarCards(){
    let container = document.getElementById('container');
    const dados = iniciarBusca();
    dados.then( dados => {
    dados.forEach(item => {
        // if(item.nome.toLowerCase().includes(linguagem)){
           
            let card = document.createElement('article');
                card.className = 'card';
                card.onclick = function() {cardAnimation(card)};
                card.innerHTML = `
                                <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="${item.logo}" alt="${item.nome}" >
                                    <h2>${item.nome}</h2>
                                </div>
                                <div class="flip-card-back">
                                    <h2>${item.nome}</h2>
                                    <p>${item.ano}</p>
                                    <p>${item.descricao}</p>
                                    <a href="${item.link}" target="_blank">Saiba mais</a>                                           
                                </div>
                            </div>
                            `;
                            console.log(item.nome);
                container.appendChild(card);
           
        // }
    
    });
    console.log(dados);
})

}
function buscarCards(){
    
    let linguagem = document.getElementById('linguagem').value.toLowerCase();
    let containerModal = document.querySelector('.container-modal');
    const dados = iniciarBusca();
    dados.then( dados => {
    dados.forEach(item => {
        if(item.nome.toLowerCase() == linguagem){
            modal.style.display = "block";
           containerModal.innerHTML = '';
            let card = document.createElement('div');
                card.className = 'col';
                card.onclick = function() {cardAnimation(card)};
                card.innerHTML = `
                                <div class="col-1">
                                <img src="${item.logo}" alt="${item.nome}" >
                                </div>
                                <div class='col-2'>
                                <h2>${item.nome}</h2>
                                <p>${item.ano}</p>
                                <p>${item.descricao}</p>
                                <a href="${item.link}" target="_blank">Saiba mais</a>                                           
                                </div>
                            `;
                            console.log(item.nome);
                containerModal.appendChild(card);
                
           document.getElementById('linguagem').value = '';
        }
    
    });
    console.log(dados);
})

}
criarCards()
function cardAnimation(card) {
    // const cards = document.querySelectorAll('.card');
    console.log(card);
    card.classList.toggle('estilo-ativo');
    
}


function typeWrite(elemento){
    
    const textoArray = elemento.innerText.split('');
   
    elemento.innerText = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerText+= letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

// --- Lógica do Modal ---

// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que abre o modal
var btn = document.getElementById("botao-busca");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function() {
  
  buscarCards()
  // Se você ainda quiser chamar a função buscarCards(), pode fazer aqui:
  // buscarCards(); 
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha ele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}