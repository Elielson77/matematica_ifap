import { criaPopFail, criaPopSucesso, calculaPorcentagem, calculaProbabilidade } from "../../assets/js/function.js"
const espacoAmostral = document.querySelector('#espaco-amostral')
const evento = document.querySelector('#evento')
const submit = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const divPop = document.querySelector('.pop')

submit.addEventListener('click', (e) => {
  e.preventDefault()

  const prob = calculaProbabilidade(espacoAmostral.value, evento.value);
  const porcent = calculaPorcentagem(prob)

  if (prob > 1 || !prob) {
    resultado.classList.remove('resultado')
    resultado.classList.add('erro')
    resultado.innerHTML = 'Tem algo errado com sua conta!'
    if (divPop.children.length === 0) { criaPopFail(divPop) }
    return
  } else {
    resultado.innerHTML = `A sua probabilidade é de ${prob} ou seja, ${porcent}% <i class="fa-solid fa-check"></i>`
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
    if (divPop.children.length === 0) { criaPopSucesso(divPop) }
  }

})