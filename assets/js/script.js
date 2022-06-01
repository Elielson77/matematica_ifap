const select = document.querySelector('#select')
const submit = document.querySelector('#submit')
const form = document.querySelector('#form')
let valor;

submit.addEventListener('click', () => {
  select.addEventListener('change', () => { valor = select.value; })
  changePage()
  console.log(form.action)
})

function changePage() {
  if (valor === '') return form.action = '#';
  if (valor === 'probabilidade') return form.action = './pages/probabilidade/index.html';
  if (valor === 'arranjo') return form.action = './pages/arranjo/index.html';
  if (valor === 'combinacao') return form.action = './pages/combinacao/index.html';
  if (valor === 'permutacao') return form.action = './pages/permutacao/index.html';
}

