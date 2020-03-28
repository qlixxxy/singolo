let selectedButton;
let selectedImage;
let selectedNav;    
let indexOfActiveSlide = 0;
let isEnabled = true;
const SlidersIdList = ['slide1', 'slide2'];


function navigation(event) {
    let target = event.target;
    if (target.tagName != "A") return
    event.preventDefault()
    if (selectedButton) {
        selectedButton.style.color = "#ffffff"
    }
    selectedButton = target 
    selectedButton.style.color = "#f06c64"
    let yOffset = -89;
    let id = target.getAttribute('href')
    let element = document.querySelector(id)
    let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: "smooth"})
     
}

function highlight(event) {
    let target = event.target
    if (target.tagName === 'IMG') {
        if (selectedImage) {
            selectedImage.closest("div").style.borderColor = ""
        }
        selectedImage = target
        selectedImage.closest("div").style.borderColor = "#f06c64"
    } return


}

function shuffle(event) {
    let frag = document.createDocumentFragment()
    let target = event.target
    let list = artList.children 
    if (target.tagName !== "LI") return
    for (let i of list) {
        frag.append(list[Math.floor(Math.random() * list.length)])
    } artList.append(frag)
   
}

function highlightNav(e) {
    let tg = e.target
    if (tg.tagName !== "LI") return
    if (selectedNav) {
        selectedNav.style.borderColor = ""
        selectedNav.style.color = ""
        
    }
    selectedNav = tg
    selectedNav.closest("#section3 > nav > ul > li").style.color = "#ffffff"
    selectedNav.closest("#section3 > nav > ul > li").style.borderColor = "#ffffff"
    
}


function formAlert(event) {
    event.preventDefault()
    let modal
    let subject = form.elements.subject;
    let project = form.elements.project;
    let message1;
    let message2;
    if (subject.value != '') {
    message1 = `Тема: ${subject.value}`
    } else { 
    message1 = `Без темы`
    }
    if (project.value != '') {
    message2 = `Описание: ${project.value}`
    } else { 
    message2 = `Без описания`
    }


    alert(`Письмо отправлено!\n${message1}\n${message2}`)
    project.value = ""
    subject.value = ""
}



function opacityChanger(event) {
    let target = event.target 
    console.log(target)
    if (target.tagName === "IMG") {
        target = target.nextElementSibling
    } 
    if (target.style.opacity == "1") {
        target.style.opacity = "0"
        return
    }
        target.style.opacity = "1"
}

function slideLeft() {
    if (isEnabled) {
        isEnabled = false;
        if (indexOfActiveSlide == 0) {
            document.querySelector("#slide2").style.left = "-2040px";
            indexOfActiveSlide = 1;
        } else {
            document.querySelector("#slide1").style.left = "-1020px";
            indexOfActiveSlide = 0;
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.querySelector("#slide2").style.left = +document.querySelector("#slide2").style.left.replace('px', '') + 10 + 'px';
                document.querySelector("#slide1").style.left = +document.querySelector("#slide1").style.left.replace('px', '') + 10 + 'px';
                if (document.querySelector("#slide1").style.left == '1020px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.querySelector("#slide1").style.left = +document.querySelector("#slide1").style.left.replace('px', '') + 10 + 'px';
                document.querySelector("#slide2").style.left = +document.querySelector("#slide2").style.left.replace('px', '') + 10 + 'px';
                if (document.querySelector("#slide2").style.left == '0px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 5);
    }  
}

function slideRight () {
    if (isEnabled) {
        isEnabled = false;
        if (indexOfActiveSlide == 0) {
            document.querySelector("#slide2").style.left = "0px";
            indexOfActiveSlide = 1;
        } else {
            document.querySelector("#slide1").style.left = "1020px";
            indexOfActiveSlide = 0;
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.querySelector("#slide1").style.left = +document.querySelector("#slide1").style.left.replace('px', '') - 10 + 'px';
                document.querySelector("#slide2").style.left = +document.querySelector("#slide2").style.left.replace('px', '') - 10 + 'px';
                if (document.querySelector("#slide1").style.left == '-1020px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.querySelector("#slide2").style.left = +document.querySelector("#slide2").style.left.replace('px', '') - 10 + 'px';
                document.querySelector("#slide1").style.left = +document.querySelector("#slide1").style.left.replace('px', '') - 10 + 'px';
                if (document.querySelector("#slide1").style.left == '0px') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 5);
    }

}

function scrollNavigation() {
let offset = window.pageYOffset;
if (offset > 0 && offset < 600) {
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(2) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(1) > a").style.color = "#f06c64"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(5) > a").style.color = "#ffffff"


} else if (offset > 600 && offset < 1100) {
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(1) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(3) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(2) > a").style.color = "#f06c64"
} else if (offset > 1100 && offset < 1965) {
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(2) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(4) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(3) > a").style.color = "#f06c64"
} else if (offset > 1965 && offset < 2300) {
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(3) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(5) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(4) > a").style.color = "#f06c64"
} else if (offset > 2300) { 
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(4) > a").style.color = "#ffffff"
    document.querySelector("#singolo1 > div > nav > ul > li:nth-child(5) > a").style.color = "#f06c64"

}


}

        







let navigationPanel = document.querySelector("#singolo1 > div > nav > ul")

let artList = document.querySelector("#section3 > div.images-container")

let navigationImage = document.querySelector("#section3 > nav > ul")

let form = document.forms.form

let submit = document.querySelector("#section5 > div.form-contact > div.form-container > form > input:nth-child(5)")

let hphone = document.querySelector("#slide1 > div > div.h-phone")

let vphone = document.querySelector("#slide1 > div > div.v-phone")

let moveleft = document.querySelector("#moveleft > img")
let moveright = document.querySelector("#moveright > img")

navigationPanel.addEventListener('click', navigation)

artList.addEventListener('click', highlight)

navigationImage.addEventListener('click', highlightNav)
navigationImage.addEventListener('click', shuffle)
submit.addEventListener('click',formAlert)
hphone.addEventListener('click', opacityChanger)
vphone.addEventListener('click', opacityChanger)
moveleft.addEventListener('click', slideLeft)
moveright.addEventListener('click', slideRight)
window.addEventListener('scroll', scrollNavigation)




