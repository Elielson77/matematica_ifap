const divPop = document.querySelector('.pop')
// permutação simples
const submitUm = document.querySelector('#submit1');
const resultadoUm = document.querySelector('#resultado1')
const n = document.querySelector('#permutacao-simples')
const h2Simples = document.querySelector('#h2-simples')
const simples = document.querySelector('.simples')

// permutação circular
const submitDois = document.querySelector('#submit2')
const resultadoDois = document.querySelector('#resultado2')
const p = document.querySelector('#permutacao-circular')
const h2Circular = document.querySelector('#h2-circular')
const circular = document.querySelector('.circular')

// permutacao simples

h2Simples.addEventListener('click', () => {
  circular.style.display = 'none'
  if (simples.style.display == 'flex') {
    simples.style.display = 'none'
  } else {
    simples.style.display = 'flex'
  }
})


submitUm.addEventListener('click', (e) => {
  e.preventDefault();
  const resul = calculaFatorial(n.value);

  if (resul < 0 || !resul) {
    resultadoUm.classList.add('erro')
    resultadoUm.classList.remove('resultado')
    resultadoUm.innerHTML = 'Tem algo de errado com a sua conta!'
  } else {
    resultadoUm.classList.remove('erro')
    resultadoUm.classList.add('resultado')
    resultadoUm.innerHTML = `É possivel fazer ${resul} permutações!`
    if (divPop.children.length === 0) { criaPopSucesso(divPop) }
  }
})


// permutacao circular

h2Circular.addEventListener('click', () => {
  simples.style.display = 'none'
  if (circular.style.display == 'flex') {
    circular.style.display = 'none'
  } else {
    circular.style.display = 'flex'
  }

})


submitDois.addEventListener('click', (e) => {
  e.preventDefault();
  const permutacaoCircular = calculaFatorial(p.value - 1);

  if (permutacaoCircular < 0 || !permutacaoCircular) {
    resultadoDois.classList.add('erro')
    resultadoDois.classList.remove('resultado')
    resultadoDois.innerHTML = 'Tem algo de errado com sua Conta!'
  } else {
    resultadoDois.classList.remove('erro')
    resultadoDois.classList.add('resultado')
    resultadoDois.innerHTML = `Podemos obter ${permutacaoCircular} permutações!`
    if (divPop.children.length === 0) { criaPopSucesso(divPop) }
  }
})


const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  if (n === 0) {
    return 1;
  }
  return arranjo;
}

function criaPopSucesso(div) {
  const img = document.createElement("img")
  img.src = '../../assets/img/pop-sucess.jpg'
  img.classList.add('pop-image')
  div.appendChild(img)
  setTimeout(() => {
    divPop.innerHTML = '';
  }, 3000)
  return
}