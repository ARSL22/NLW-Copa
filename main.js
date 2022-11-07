/* PRIMEIRA PARTE : em javascript é representada como document é entendido como um objecto e como objectos do mundo real tem propriedades e funcionalidades.
Para eu selecionar essas propriedades e funcionalidades pomos um ponto a frente.Uma das funcionalidades é a busca (query) pelo selector() e dentro coloco um argumento.qual selector em formato de dado.
Podemos mudar por exemplo, assim que encontra a div ee tem a continuaçao desse objecto e podemos atraves do ponto encontramos a propriedade innerHTML (html interno).
ele pega todo o html interno que tem : header, img; e com o = atribuimos um valor de string
ele assim vai pegar tudo o que esta dentro da div app e colocar ali.
*/

document.querySelector('#cards').innerHTML = //responsavel por colocar o codigo na pagina
  createCard("21/11", "Segunda", createGame('brazil', '08:00', 'cameroon') + createGame('hungria', '08:00', 'argentina') + createGame('colombia', '08:00', 'japao'))
   + createCard("24/11", "Quinta", createGame('switzerland', '08:00', 'cameroon') + createGame('portugal', '08:00', 'gana') + createGame('brazil', '08:00', 'serbia'))
   + createCard("24/11", "Quinta", createGame('colombia', '08:00', 'cameroon') + createGame('india', '08:00', 'armenia') + createGame('comores', '08:00', 'jordao'))
   + createCard("28/11", "Segunda", createGame('coreia', '08:00', 'gana') + createGame('brazil', '08:00', 'switzerland') + createGame('portugal', '08:00', 'uruguai'))

//SEGUNDA PARTE : Mas agora ele quer criar atraves do javascript um cartao e como faz?
/*vai criar uma funçao card. depois de fazer fazemos uma interpolaçao
ou seja, pomos o ${} e colocamos la dentro a funçao.*/
/* dentro do main podemos por mais um ${ createCards} para fazer mais um cartao so que nos ja fizemos no HTML*/

function createGame(player1, hour, player2){
    return`
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/><!--tag alt é ter o texto apra quem nao consegue ler. e serve para o motor de busca-->
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2} "/>
    </li>
    `
}
//criamos uma variavel para o delay nos cartoes-css

function createCard(date, day, games) {
    return `
    <div class="card" style="animation-delay: 0.4s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

//criamos de forma dinamica atraves das funçoes, colocando as propriedades date e hour etc e colocando os argumentos depois...
/*
//TERCEIRA PARTE: vamos nesta parte na aula 04 fazer a refactoraçao e isso significa, colocar o header e o main no index html e em vez de $app na queryselector 
colocamos cards e ja aceita e fizemos a refactoraçao.
Como isto é javascript entao no document podemos tirar as `` template strign e as interpolaçoes.e para isso tiramos tudo e fazemos a conquetanar ( sinal de +)
*/

