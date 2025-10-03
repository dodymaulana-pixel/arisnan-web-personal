document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    // Efek shadow pada header saat scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Animasi fade-in saat elemen masuk ke viewport (scroll-reveal)
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.3, // Mulai fade-in ketika 30% dari elemen terlihat
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appeared");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});