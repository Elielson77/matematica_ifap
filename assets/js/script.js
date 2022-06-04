import { changePage } from "./function.js"
const submit = document.querySelector('#submit')
const form = document.querySelector('#form')

submit.addEventListener('click', () => {
  changePage()
  console.log(form.action)
})