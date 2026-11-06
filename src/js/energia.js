// abas da pagina de energia: destacam a secao que esta na tela
// (o clique rola ate a secao pelo proprio link, com a rolagem suave do home.css)

const abas = document.querySelectorAll('.en-abas a');
const secoes = Array.from(abas).map(a => document.querySelector(a.getAttribute('href')));

function atualizarAbas() {
    const fimDaPagina =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    let atual = 0;

    secoes.forEach((secao, i) => {
        if (secao && secao.getBoundingClientRect().top <= 140) atual = i;
    });

    // secoes curtas no fim da pagina nunca chegam ao topo: no fim, a ultima aba fica ativa
    if (fimDaPagina) atual = secoes.length - 1;

    abas.forEach((aba, i) => aba.classList.toggle('ativa', i === atual));
}

window.addEventListener('scroll', atualizarAbas, { passive: true });
atualizarAbas();