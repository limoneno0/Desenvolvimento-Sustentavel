// abas da pagina de energia: cada aba mostra so o seu painel (sem recarregar a pagina)

const abas = document.querySelectorAll('.en-abas a');
const paineis = document.querySelectorAll('.en-painel');
const layout = document.querySelector('.energia-layout');

const ids = Array.from(abas).map(aba => aba.getAttribute('href').slice(1));

function mostrar(id) {
    if (!ids.includes(id)) id = ids[0];                    // endereco desconhecido: visao geral

    abas.forEach(aba => {
        aba.classList.toggle('ativa', aba.getAttribute('href') === '#' + id);
    });

    paineis.forEach(painel => {
        painel.classList.toggle('ativo', painel.id === id);
    });

    // a coluna lateral so aparece na visao geral
    layout.classList.toggle('sem-lateral', id !== ids[0]);
}

// qualquer link da pagina que aponte para uma aba:
// as abas, o botao "Ver dicas praticas" e o card lateral de fontes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    const id = link.getAttribute('href').slice(1);
    if (!ids.includes(id)) return;

    link.addEventListener('click', evento => {
        evento.preventDefault();
        mostrar(id);
        history.replaceState(null, '', '#' + id);

        // se o clique veio de mais abaixo na pagina, volta ate as abas
        const topo = document.querySelector('.en-abas').getBoundingClientRect().top;
        if (topo < 0) {
            window.scrollTo({ top: window.scrollY + topo - 20, behavior: 'smooth' });
        }
    });
});

// abre direto na aba do endereco (energia.html#fontes) e acompanha voltar/avancar
window.addEventListener('hashchange', () => mostrar(location.hash.slice(1)));
mostrar(location.hash.slice(1));