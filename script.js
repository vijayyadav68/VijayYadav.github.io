ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

 });



ScrollReveal().reveal('.home .content h3', { origin: 'top' });
ScrollReveal().reveal('.img, .Vloge, .container', { origin: 'bottom' });
ScrollReveal().reveal('.content h2, .about-text h1', { origin: 'left' });
ScrollReveal().reveal('.content p, .about-text p', { origin: 'right' });
