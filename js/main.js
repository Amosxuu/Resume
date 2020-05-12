
let menu = document.querySelector('.menu-icon');
let index = 0;

function meunToggle(){
    let navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active')
}
menu.addEventListener('click',meunToggle)
//----------------------------------------------------------------//

let target = document.getElementById('about')
let anchor = document.querySelector('header ul')
let upBtn = document.querySelector('.up-btn')
let downBtn = document.querySelector('.down-btn')

upBtn.addEventListener('click',function(){
    window.scrollTo({'behavior': 'smooth', 'top': 0 })
})

downBtn.addEventListener('click',function(){
    console.log(11)
    let about = document.querySelector('#about')
    let rect = about.getBoundingClientRect()
    window.scrollBy({'behavior': 'smooth', 'top': rect.top - 80 })
})

anchor.addEventListener('click', function (e) {
    meunToggle()
    if (e.target.nodeName == 'UL') {
        return
    }else{
        let hash = e.target.hash
        let target = document.querySelector(hash)
        let rect = target.getBoundingClientRect()
        if (window.scrollTo && hash !== '#navbar') {
            e.preventDefault()
            window.scrollBy({'behavior': 'smooth', 'top': rect.top - 80 })
        }else{
            window.scrollTo({'behavior': 'smooth', 'top': 0 })
        }
    }
    

})


// window.addEventListener('scroll',()=>{

//     let banner = document.querySelector('.banner-img');

//     banner.style.opacity = 1 - window.pageYOffset/550;
//     console.log(window.pageYOffset)
//     banner.style.top = +window.pageYOffset +'px';
//     banner.style.backgroundPositionY = - window.pageYOffset/2 +'px'
// })