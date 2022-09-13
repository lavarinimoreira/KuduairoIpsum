const data = [
     '<br>&nbsp;&nbsp;&nbsp;&nbsp;Famualia super kudurista vou fazer a venda e sessão de autógrafo da minha Ep com Hosme Fosgo e come lânsmina agora acreditas no malusco. Preço no valor de greituíto. Loscal Mêdiateca Zé Dú. Agradeceria atodos kudurista no super kudurista. Obrigueido.',
     '<br>&nbsp;&nbsp;&nbsp;&nbsp;Bailarino, surruaia pelo poder de acreditar em ti losko paranoico e voa que voa faz o muaindo conhecer o teu melhor um abreiço do vosso = SUPER KUDURISTA = Príncipe Ouro-Negro.',
     '<br>&nbsp;&nbsp;&nbsp;&nbsp;Estou de Malas feitas tenho fé que vou levar Angola no Brasil nossa cultura nosso kuduairo e homenagear os nossos Kings do kuduairo eles sabem quem são ai minha vuaida.',
     '<br>&nbsp;&nbsp;&nbsp;&nbsp;Aí minha vuaida losko paranoico já estão a respeitar o kuduairo melhor do que nunca assim são as condições que esperam o Rei do kuduairo internacional no Lubeingo as selvas de pelmas para organização.',
     '<br>&nbsp;&nbsp;&nbsp;&nbsp;Mais um aniversariante surpreendido pelo seu Paspá com há grande surpresa do Super Kudurista Príncipe Ouro-Negro com a cantada de parabuéns em alusivo ao seu aniversário obrigueido pelo convuaite e pela consideração que foi a grande ponte para este acontecimento as selvas de pelmas.'
];

let range = document.querySelector('#r');
let value = document.querySelector('#result');

range.addEventListener('input', function(){
    value.textContent = this.value;
});

let submit = document.querySelector('#s');

submit.addEventListener('click', function(){
    const quantidadeDeParagrafos = range.value;
    const imagemDoKuduairo = document.querySelector('img');
    imagemDoKuduairo.style.display = "initial";
    removeParagrafo();
    imprimeParagrafos(quantidadeDeParagrafos);
});

const imprimeParagrafos = (quantidade) => {
    const div = document.querySelector('#txt-box');
    let arr = data;
    shuffleArray(arr);
    for(let i=0; i<quantidade; i++){
        const p = document.createElement('p');
        // p.style.textAlign = "justify"
        p.innerHTML = arr[i];
        div.appendChild(p);
    };
};

const removeParagrafo = () => {
    let div = document.querySelector('#txt-box');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
};

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i>0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}