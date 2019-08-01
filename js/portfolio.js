const navbar = document.getElementsByClassName('navbar');
const banner = document.getElementById('home');

window.addEventListener('scroll', function() {
    const def = banner.getBoundingClientRect().top;
    if(def <= -150) {
        navbar[0].classList.add('color')
    } else {
        navbar[0].classList.remove('color')
    }
});