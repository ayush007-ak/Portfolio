const showMenu = (toggleId, navId) => {
    const toggle= document.getElementById(toggleId),
    nav= document.getElementById(navId)                                              //MENU SHOW


    if(toggle && nav){
        toggle.addEventListener('click', () => {
         nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')