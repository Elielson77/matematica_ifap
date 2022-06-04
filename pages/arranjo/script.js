const n = document.querySelector('#elementos')
const p = document.querySelector('#numArranjo')
const resultado = document.querySelector('#resultado')
const submit = document.querySelector('#submit')
const divPop = document.querySelector('.pop')
const nFormula = document.querySelector('#n-formula')

n.addEventListener('change', () => {
  nFormula.innerHTML = n.value || 'n';
})

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const resul = calculaArranjo(n.value, p.value);

  if (resul < 0 || !resul) {
    resultado.classList.add('erro')
    resultado.classList.remove('resultado')
    resultado.innerHTML = 'Tem algo de errado com a sua conta!'
    if (divPop.children.length === 0) { criaPopFail(divPop) }
  } else {
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
    resultado.innerHTML = ` É possível fazer ${resul} arranjos! <i class="fa-solid fa-check"></i>`
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

const calculaArranjo = (n, p) => {
  const arranjo = calculaFatorial(n) / calculaFatorial(n - p);
  return arranjo
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
