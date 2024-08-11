




/*======================== scroll reveal =========================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

 });



ScrollReveal().reveal('.home-text, .about-text, .main-text, .contect h1', { origin: 'top' });
ScrollReveal().reveal('.image, .skill-main, .contect', { origin: 'bottom' });
ScrollReveal().reveal('.home-text h1, .about-text h1', { origin: 'left' });
ScrollReveal().reveal('.home-text p, .about-text p', { origin: 'right' });
