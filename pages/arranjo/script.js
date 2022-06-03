const n = document.querySelector('#elementos')
const p = document.querySelector('#numArranjo')
const resultado = document.querySelector('#resultado')
const submit = document.querySelector('#submit')
const divPop = document.querySelector('.pop')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const resul = calculaArranjo(n.value, p.value);

  if (resul < 0 || !resul) {
    resultado.classList.add('erro')
    resultado.classList.remove('resultado')
    resultado.innerHTML = 'Tem algo de errado com a sua conta!'
  } else {
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
    resultado.innerHTML = ` É possível fazer ${resul} arranjos!`
    criaPopSucesso(divPop)
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
    tiraPop()
  }, 5000)
  return
}

function tiraPop() {
  divPop.innerHTML = '';
}