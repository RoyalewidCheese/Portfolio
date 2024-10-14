//<--================================= Show Menu =================================-->//
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/
/* Validate if constant exists */ 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== Menu Hidden =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
//<--================================= Remove Menu Mobile =================================-->//
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//<--================================= Shadow Header =================================-->//
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


//<--================================= Email JS =================================-->//
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()


    //ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_vwy9rvw','template_nvfbum4','#contact-form','MvPOp-Ckhyr5KCqTG')
    .then(() =>{
        //Show Sent Message
        contactMessage.textContent = 'Message send successfully ✅'

        // Remove Message After 5 Seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear Input Fields
        contactForm.reset()

    }, () =>{
            //Show Error Message
            contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
//<--================================= Show Scroll Up =================================-->//
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//<--================================= Scroll Sections Active Link =================================-->//
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

//<--================================= Dark Light Theme =================================-->//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Apply dark theme by default or if user has previously selected it
if (selectedTheme === 'dark' || !selectedTheme) { // Default to dark if no selection is made
  document.body.classList.add(darkTheme)
  themeButton.classList.add(iconTheme)
} else {
  document.body.classList.remove(darkTheme)
  themeButton.classList.remove(iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//<--================================= Scroll Reveal Animation =================================-->//
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 5, // Default delay for elements
//     // Reset: true // Uncomment if you want the animation to repeat on scroll
// });

// // Regular reveal for other elements with default delays
// sr.reveal(`.home__perfil, .home__name, .home__info, .contacts__mail`, {origin: 'right'});
// sr.reveal(`.about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'});
// sr.reveal(`.services__card, .projects__card`, {interval: 100}); // Interval for staggered reveal


//<--================================= Haptics =================================-->//
// Function to trigger vibration
const triggerVibration = () => {
    if (navigator.vibrate) {
        navigator.vibrate(50); // Vibrates for 50 milliseconds
    }
};

// Selectors for elements to add vibration
const elementsToVibrate = [
    ...document.querySelectorAll('.nav__link'),
    document.querySelector('.home__scroll-box'),
    document.querySelector('.nav__logo__name'),
    document.querySelector('#theme-button'),
    document.querySelector('#nav-toggle'),
    document.querySelector('#nav-close'),
    document.querySelector('.home__social'),
    document.querySelector('.button'),
    document.querySelector('.button__ghost'),
    ...document.querySelectorAll('.services__content'),
    ...document.querySelectorAll('.projects__card'),
    ...document.querySelectorAll('.projects__button.button'),
    ...document.querySelectorAll('.projects__link'),
    document.querySelector('#name'),     
    document.querySelector('#email'),
    document.querySelector('#subject'),
    document.querySelector('#message'),
    ...document.querySelectorAll('.contact__button.button'),
    ...document.querySelectorAll('.contact__social-link'),
    ...document.querySelectorAll('.footer__link'),
    document.querySelector('#scroll-up')
];

// Add event listener for vibration to each element
elementsToVibrate.forEach(element => {
    if (element) {  // Ensure the element exists
        element.addEventListener('click', triggerVibration);
    }
});

//<--================================= Mobile Responsiveness =================================-->//

