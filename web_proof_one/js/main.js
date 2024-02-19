window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('dark');
    } else {
        navbar.classList.remove('dark');
    }
});
