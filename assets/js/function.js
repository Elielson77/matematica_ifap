export const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  if (n === 0) {
    return 1;
  }
  return arranjo;
}

export const calculaArranjo = (n, p) => {
  const arranjo = calculaFatorial(n) / calculaFatorial(n - p);
  return arranjo
}

export function criaPopSucesso(div) {
  const img = document.createElement("img")
  img.src = '../../assets/img/pop-sucess.jpg'
  img.classList.add('pop-image')
  div.appendChild(img)
  setTimeout(() => {
    div.innerHTML = '';
  }, 3000)
  return
}

export function criaPopFail(div) {
  const img = document.createElement("img")
  img.src = '../../assets/img/te-aviso.ico'
  img.classList.add('pop-image-fail')
  div.appendChild(img)
  setTimeout(() => {
    div.innerHTML = '';
  }, 3000)
  return
}

export const calculaProbabilidade = (espacoAmostral, evento) => {
  const prob = evento / espacoAmostral;
  return Number(prob)
}

export const calculaPorcentagem = (prob) => {
  return prob * 100;
}