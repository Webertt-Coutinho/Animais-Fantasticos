export default function initScrollSuave() {
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offSetTop;
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}