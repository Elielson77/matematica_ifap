const n = document.querySelector('#elementos')
const p = document.querySelector('#numArranjo')
const resultado = document.querySelector('#resultado')
const submit = document.querySelector('#submit')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  resultado.innerHTML = ` É possível fazer ${calculaArranjo(n.value, p.value)} arranjos!`
})

const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  return arranjo;
}

const calculaArranjo = (n, p) => {
  const arranjo = calculaFatorial(n) / calculaFatorial(n - p);
  return arranjo
}