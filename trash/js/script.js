// Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// Hilangkan Nav`
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');}
});

 // Typing Text Code

 const typed = new Typed('.multiple-text', {
    strings: ['Sampah Organik','Sampah Anorganik','B3','Residu'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop: true,
});


// ScrollReveal Code
ScrollReveal({ 
    distance:  '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .information-box, .wrapper, contact form' , {origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});