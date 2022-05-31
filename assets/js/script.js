const select = document.querySelector('#select')
const submit = document.querySelector('#submit')
let form = document.querySelector('#form')
let valor;

submit.addEventListener('click', (e) => {
  select.addEventListener('change', () => { valor = select.value; })
  changePage()
  console.log(form.action)
})

function changePage() {
  if (valor === '') return form.action = '#';
  if (valor === 'Probabilidade') return form.action = './pages/probabilidade/index.html';
  if (valor === 'Arranjo') return form.action = './pages/arranjo/index.html';
  if (valor === 'Combinação') return form.action = './pages/combinacao/index.html';
  if (valor === 'Permutação') return form.action = './pages/permutacao/index.html';
}

