const paragrafos = document.querySelector('.paragrafos');
const pg = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
let backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

// console.log(pg);

for (let p of pg){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}