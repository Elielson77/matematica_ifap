const n = document.querySelector('#elementos')
const p = document.querySelector('#numArranjo')
const resultado = document.querySelector('#resultado')
const submit = document.querySelector('#submit')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const resul = calculaArranjo(n.value, p.value);

  if (resul < 0 || !resul) {
    resultado.classList.add('erro')
    resultado.innerHTML = 'Tem algo de errado com a sua conta!'
  } else {
    resultado.classList.remove('erro')
    resultado.innerHTML = ` É possível fazer ${resul} arranjos!`
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