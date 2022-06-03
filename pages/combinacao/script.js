const n = document.querySelector('#total-elementos')
const p = document.querySelector('#numero-combinacao')
const submit = document.querySelector('#submit')
const resultado = document.querySelector('#resultado')
const divPop = document.querySelector('.pop')
const nFormula = document.querySelector('#n-formula')
const pFormula = document.querySelector('#p-formula')

n.addEventListener('change', () => {
  nFormula.innerHTML = n.value || 'n';
})

p.addEventListener('change', () => {
  pFormula.innerHTML = p.value || 'p';
})

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const divisor = calculaFatorial(p.value) * calculaFatorial(n.value - p.value)
  const resul = calculaFatorial(n.value) / divisor;

  if (resul < 0 || !resul) {
    resultado.innerHTML = 'Tem algo errado com sua conta!'
    resultado.classList.add('erro')
    resultado.classList.remove('resultado')
  } else {
    resultado.innerHTML = `É possível formar ${resul} combinações!`
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
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
