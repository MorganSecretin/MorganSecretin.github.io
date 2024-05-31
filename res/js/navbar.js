/* NAVBAR */
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.getElementById('navbarNavAltMarkup');

    toggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (nav) {
                nav.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.id;
        }
    });

    if (currentSectionId.length > 0) {
        // Remove active class from all nav links
        const links = document.querySelectorAll('.nav-link');
        let active = this.document.querySelector('.active');
        links.forEach(link => {
            link.classList.remove('active');
        });
        active = this.document.querySelector('.active');

        // Si welcome : #
        if(currentSectionId == 'welcome')
            currentSectionId = '';

        // Add active class to the nav link corresponding to the current section
        const currentNavLink = document.querySelector(`.navbar-nav .nav-item[href="#${currentSectionId}"]`);
        if (currentNavLink)
            currentNavLink.classList.add('active');
    }
});
/*********************************************************************/