// let slides = document.querySelectorAll('.works-img img')
// let slidesText = document.querySelectorAll('.banner-text div')
// let prevBtn = document.querySelector('.controls .prev');
// let nextBtn = document.querySelector('.controls .next');
let menu = document.querySelector('.menu-icon');
let index = 0;

// function nextSlide(e) {
//     e.preventDefault()
//     slidesText[index].classList.remove('active');
//     slides[index].classList.remove('active');
//     index =(index + 1) % slides.length;
//     slidesText[index].classList.add('active');
//     slides[index].classList.add('active');
// }
// function prevSlide(e) {
//     e.preventDefault()
//     slidesText[index].classList.remove('active');
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slidesText[index].classList.add('active');
//     slides[index].classList.add('active');
// }

function meunToggle(){
    let navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active')
}

// nextBtn.addEventListener('click',nextSlide);
// prevBtn.addEventListener('click',prevSlide);
menu.addEventListener('click',meunToggle)