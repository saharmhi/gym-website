/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 70 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== CHANGE card-program===============*/
const bgcardProgram = () =>{
    const cardP = document.getElementById('card-p')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.hover  ?       cardP.classList.add('bg-cardProgram') 
                       : cardP.classList.remove('bg-cardProgram')
}
window.addEventListener('hover', bgcardProgram)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
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

// ============CACULATE BMI=============
const calculateForm = document.getElementById('caculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    // check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // show message
        calculateMessage.textContent = 'fill in the Height and Weight 💁‍♀️';

        // remove message three seconds
        setTimeout(()=>{
            calculateMessage.textContent = ''
        }, 3000)
    }else{
        // BMI formula
        const cm = calculateCm.value /100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

        // show your health status
        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `your BMI is ${bmi} and you are skinny 😔`
        } else if(bmi<25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `your BMI is ${bmi} and you are healthy 🥳`
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `your BMI is ${bmi} and you are overweight 😔`
        }
        
        // to clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message for seconds
        setTimeout(()=>{
            calculateMessage.textContent = ''
        }, 4000)
    }

}    

calculateForm.addEventListener('submit', calculateBmi);

// =============Scroll up=============
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)