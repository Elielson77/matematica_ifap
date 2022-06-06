import { criaPopFail, criaPopSucesso, calculaFatorial } from "../../assets/js/function.js";
const divPop = document.querySelector('.pop')
// permutação simples
const submitUm = document.querySelector('#submit1');
const resultadoUm = document.querySelector('#resultado1')
const n = document.querySelector('#permutacao-simples')
const h2Simples = document.querySelector('#h2-simples')
const simples = document.querySelector('.simples')
const setaSimples = document.querySelector('#seta-simples')

// permutação circular
const submitDois = document.querySelector('#submit2')
const resultadoDois = document.querySelector('#resultado2')
const p = document.querySelector('#permutacao-circular')
const h2Circular = document.querySelector('#h2-circular')
const circular = document.querySelector('.circular')
const setaCircular = document.querySelector('#seta-circular')


// permutacao simples

h2Simples.addEventListener('click', () => {
  if (simples.style.display == 'flex') {
    simples.style.display = 'none'
    setaSimples.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
  } else {
    simples.style.display = 'flex'
    setaSimples.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
  }
})


submitUm.addEventListener('click', (e) => {
  e.preventDefault();
  const resul = calculaFatorial(n.value);

  if (resul < 0 || !resul) {
    resultadoUm.classList.add('erro')
    resultadoUm.classList.remove('resultado')
    resultadoUm.innerHTML = 'Tem algo de errado com a sua conta!'
    if (divPop.children.length === 0) { criaPopFail(divPop) }
  } else {
    resultadoUm.classList.remove('erro')
    resultadoUm.classList.add('resultado')
    resultadoUm.innerHTML = `É possivel fazer ${resul} permutações! <i class="fa-solid fa-check"></i>`
    if (divPop.children.length === 0) { criaPopSucesso(divPop) }
  }
})


// permutacao circular

h2Circular.addEventListener('click', () => {
  if (circular.style.display == 'flex') {
    circular.style.display = 'none'
    setaCircular.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
  } else {
    circular.style.display = 'flex'
    setaCircular.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
  }

})


submitDois.addEventListener('click', (e) => {
  e.preventDefault();
  const permutacaoCircular = calculaFatorial(p.value - 1);

  if (permutacaoCircular < 0 || !permutacaoCircular) {
    resultadoDois.classList.add('erro')
    resultadoDois.classList.remove('resultado')
    resultadoDois.innerHTML = 'Tem algo de errado com sua Conta!'
    criaPopFail(divPop)
  } else {
    resultadoDois.classList.remove('erro')
    resultadoDois.classList.add('resultado')
    resultadoDois.innerHTML = `Podemos obter ${permutacaoCircular} permutações! <i class="fa-solid fa-check"></i>`
    if (divPop.children.length === 0) { criaPopSucesso(divPop) }
  }
})