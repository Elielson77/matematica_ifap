const elementos = document.querySelector('#total-elementos')
const elemComb = document.querySelector('#numero-combinacao')
const submit = document.querySelector('#submit')
const resultado = document.querySelector('#resultado')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const divisor = calculaFatorial(elemComb.value) * calculaFatorial(elementos.value - elemComb.value)

  resultado.innerHTML = `É possível formar ${calculaFatorial(elementos.value) / divisor} combinações!`
})

const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  return arranjo;
}
