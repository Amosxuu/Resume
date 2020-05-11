
let target = document.getElementById('about')
let anchor = document.querySelector('header ul')
let upBtn = document.querySelector('.up-btn')

function slideTo(params) {
    window.scrollTo({'behavior': 'smooth', 'top': 0 })
}
upBtn.addEventListener('click',slideTo)

anchor.addEventListener('click', function (e) {
    meunToggle()
    if (e.target.nodeName == 'UL') {
        return
    }else{
        let hash = e.target.hash
        console.log(hash)
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
