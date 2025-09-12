document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.about-mobile-main');
    const menuSection = document.querySelector('.about-mobile');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    }


});

