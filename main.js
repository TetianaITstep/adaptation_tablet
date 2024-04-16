document.addEventListener('DOMContentLoaded', function() {
    const burgerImg = document.querySelector('.burger_img');
    const burgerNav = document.querySelector('.burger_nav');

    burgerImg.addEventListener('click', function() {
        burgerNav.classList.toggle('visible');
    });
});
