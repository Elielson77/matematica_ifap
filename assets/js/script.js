const submit = document.querySelector('#submit')
const form = document.querySelector('#form')

submit.addEventListener('click', () => {
  changePage()
  console.log(form.action)
})

function changePage() {
  if (document.querySelector('#probabilidade').checked == true) return form.action = './pages/probabilidade/index.html';
  if (document.querySelector('#arranjo').checked == true) return form.action = './pages/arranjo/index.html';
  if (document.querySelector('#combinacao').checked == true) return form.action = './pages/combinacao/index.html';
  if (document.querySelector('#permutacao').checked == true) return form.action = './pages/permutacao/index.html';
}

