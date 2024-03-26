/*
const links = document.querySelectorAll('.header_navigation ul li a');

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = this.getAttribute("data-target");
        const targetElement = document.querySelector("[data-section='" + targetSection + "']");
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
*/

function scrollToSection(targetSection) {
    const targetElement = document.querySelector("[data-section='" + targetSection + "']");
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function navLinks(event) {
    event.preventDefault();
    const targetSection = this.getAttribute("data-target");
    scrollToSection(targetSection);
}

const headerLinks = document.querySelectorAll('nav a');
headerLinks.forEach(link => {
    link.addEventListener("click", navLinks);
});

const footerLinks = document.querySelectorAll(' .top_navigation ul li a');
footerLinks.forEach(link => {
    link.addEventListener("click", navLinks);
});

const asideLinks = document.querySelectorAll(' .aside_logo a');
asideLinks.forEach(link => {
    link.addEventListener("click", navLinks);
});
