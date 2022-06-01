const espacoAmostral = document.querySelector('#espaco-amostral')
const evento = document.querySelector('#evento')
const submit = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

submit.addEventListener('click', (e) => {
  e.preventDefault()

  const prob = calculaProbabilidade(espacoAmostral.value, evento.value);
  const porcent = calculaPorcentagem(prob)

  if (prob > 1 || !prob) {
    resultado.classList.remove('resultado')
    resultado.classList.add('erro')
    resultado.innerHTML = 'Tem algo errado com sua conta!'
    return
  } else {
    resultado.innerHTML = `A sua probabilidade é de ${prob} ou seja, ${porcent}%`
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
  }

})

const calculaProbabilidade = (espacoAmostral, evento) => {
  const prob = evento / espacoAmostral;
  return Number(prob.toFixed(2))
}

const calculaPorcentagem = (prob) => {
  return prob * 100;
}