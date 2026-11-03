// dropdown de setores no menu
const dropdown = document.querySelector('.dropdown');
const toggle = document.querySelector('.dropdown-toggle');

if (dropdown && toggle) {

    function setOpen(open) {
        dropdown.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
    }

    // abre/fecha ao clicar no botão
    toggle.addEventListener('click', () => {
        setOpen(!dropdown.classList.contains('open'));
    });

    // fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) setOpen(false);
    });

    // fecha com a tecla Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });

}