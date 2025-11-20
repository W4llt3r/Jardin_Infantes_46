
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navMenu.classList.toggle("active");
    });

    // cerrar menú al tocar un enlace
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });