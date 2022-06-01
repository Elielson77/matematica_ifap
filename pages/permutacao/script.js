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
  const resul = calculaFatorial(numeroElemento.value);
  console.log(`vamo ver ${resul}`)

  if (resul < 0 || !resul) {
    resultadoUm.classList.add('erro')
    resultadoUm.classList.remove('resultado')
    resultadoUm.innerHTML = 'Tem algo de errado com a sua conta!'
  } else {
    resultadoUm.classList.remove('erro')
    resultadoUm.classList.add('resultado')
    resultadoUm.innerHTML = `É possivel fazer ${resul} combinações!`
  }
})


// permutacao circular
submitDois.addEventListener('click', (e) => {
  e.preventDefault();
  const permutacaoCircular = calculaFatorial(numeroElementoCircular.value - 1);

  if (permutacaoCircular < 0 || !permutacaoCircular) {
    resultadoDois.classList.add('erro')
    resultadoDois.classList.remove('resultado')
    resultadoDois.innerHTML = 'Tem algo de errado com sua Conta!'
  } else {
    resultadoDois.classList.remove('erro')
    resultadoDois.classList.add('resultado')
    resultadoDois.innerHTML = `Podemos obter ${permutacaoCircular} combinações!`
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
