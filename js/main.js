
let menu = document.querySelector('.menu-icon');
let index = 0;

// window.addEventListener('scroll',()=>{

//     let banner = document.querySelector('.banner-img');

//     banner.style.opacity = 1 - window.pageYOffset/550;
//     console.log(window.pageYOffset)
//     banner.style.top = +window.pageYOffset +'px';
//     banner.style.backgroundPositionY = - window.pageYOffset/2 +'px'

   
// })

function meunToggle(){
    let navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active')
}
menu.addEventListener('click',meunToggle)