// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a, hero-buttons a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const navbar= document.querySelector('.navbar');
            const navbarHeight= navbar ? navbar.offsetHeight : 0;
            const targetPosition= target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});