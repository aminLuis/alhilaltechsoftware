// Toggle del menú de hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("active"); // Para animar las barras, si lo deseas
    });
    // Cerrar el menú después de hacer clic en un enlace
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("active");
            navLinks.classList.remove('active');
        });
    });
});




// Efecto de desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de aparición al hacer scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// 

const techCards = document.querySelectorAll('.tech-card');
const observerTech = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerTech.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

techCards.forEach(card => observerTech.observe(card));

// Send email to Alhilaltech Software
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YEejxsoYoe8ZDRAjE"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.send("service_zjrqq6i", "template_o6hppf6", {
            to_name: document.getElementById("to_name").value,
            from_name: document.getElementById("from_name").value,
            message: document.getElementById("message").value,
        }).then(function (response) {
            document.getElementById("success-message").style.display = "block";
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Error al enviar el mensaje: " + JSON.stringify(error));
        });
    });
});
