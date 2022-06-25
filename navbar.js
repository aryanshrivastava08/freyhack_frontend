const navbar = document.getElementById('MainNav');
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > navbar.clientHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});