const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);



//minha solução

// document.querySelector('.paragrafos').style.backgroundColor = '#000'
// document.querySelector('.paragrafos').style.color = '#fff'

//professor, solução

 for (let p of ps ) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#c9c9';
}

// as mesmas coisas que tem no css tem no java script so que em camelCase
