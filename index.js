var hamburgerBtn = document.querySelector("button.hamburger-btn")
var hamburgerMenu = document.getElementById('main-menu')
var menu = document.querySelector('nav')

hamburgerBtn.onclick = function(e){
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.focus()
    if(hamburgerMenu.classList.contains('show-menu')){
        hamburgerBtn.setAttribute('aria-expanded', true)
    }
    else{
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
}
document.onkeyup = function(e){
    if(e.key === 'Escape'){
        hamburgerBtn.setAttribute('aria-expanded', false) 
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.focus()
    }
}

document.body.onclick = function(e){
    if(!menu.contains(e.target)){
        hamburgerBtn.setAttribute('aria-expanded', false) 
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.focus()
    }
}
