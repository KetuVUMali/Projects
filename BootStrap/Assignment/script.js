// Change Navbar Transparency on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        navbar.style.background = "transparent";
    }
});



// nav2 scroll bar 
document.addEventListener('DOMContentLoaded', function() {
    const navMenu2 = document.getElementById('navMenu2');
    const leftScroll2 = document.getElementById('leftScroll2');
    const rightScroll2 = document.getElementById('rightScroll2');
    const scrollStep2 = 150;
    
    leftScroll2.addEventListener('click', function() {
        navMenu2.scrollLeft -= scrollStep2;
    });
    
    rightScroll2.addEventListener('click', function() {
        navMenu2.scrollLeft += scrollStep2;
    });

    // Smooth scroll to section
    document.querySelectorAll('.nav-items2 a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Highlight active nav item on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-items2 a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                navMenu2.scrollLeft = link.offsetLeft - navMenu2.clientWidth / 2 + link.clientWidth / 2;
            }
        });
    });
});
