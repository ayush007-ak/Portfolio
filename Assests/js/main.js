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



//Active and remove menu

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
//Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


//scroll reveal animation
const sr  = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*HOME */

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home_image',{delay: 400})
sr.reveal('.home_social-icon',{interval:200})

/* SCROLL ABOUT*/

sr.reveal('.about_img',{})

sr.reveal('.about_subtitle',{delay: 200})

sr.reveal('.about_text',{delay: 400})

/*skills scroll */

sr.reveal('.skills_subtitle',{})

sr.reveal('.skills_text',{delay: 200})

sr.reveal('.skills_data',{interval: 200})

sr.reveal('.skills_img',{delay: 400})

/*work scroll */

sr.reveal('.work_img',{interval:200})

/*contact scroll */

sr.reveal('.contact_input',{interval: 200})