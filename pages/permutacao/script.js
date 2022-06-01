// permutação simples
const submitUm = document.querySelector('#submit1');
const resultadoUm = document.querySelector('#resultado1')
const numeroElemento = document.querySelector('#permutacao-simples')

// permutação circular
const submitDois = document.querySelector('#submit2')
const resultadoDois = document.querySelector('#resultado2')
const numeroElementoCircular = document.querySelector('#permutacao-circular')

// permutacao simples
submitUm.addEventListener('click', (e) => {
  e.preventDefault();
  resultadoUm.innerHTML = `É possivel fazer ${calculaFatorial(numeroElemento.value)} combinações!`
})


// permutacao circular
submitDois.addEventListener('click', (e) => {
  e.preventDefault();
  const permutacaoCircular = calculaFatorial(numeroElementoCircular.value - 1);
  resultadoDois.innerHTML = `Podemos obter ${permutacaoCircular} combinações!`
})






const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  return arranjo;
}
