const elementos = document.querySelector('#total-elementos')
const elemComb = document.querySelector('#numero-combinacao')
const submit = document.querySelector('#submit')
const resultado = document.querySelector('#resultado')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const divisor = calculaFatorial(elemComb.value) * calculaFatorial(elementos.value - elemComb.value)
  const resul = calculaFatorial(elementos.value) / divisor;

  if (resul < 0 || !resul) {
    resultado.innerHTML = 'Tem algo errado com sua conta!'
    resultado.classList.add('erro')
  } else {
    resultado.innerHTML = `É possível formar ${resul} combinações!`
    resultado.classList.remove('erro')
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
