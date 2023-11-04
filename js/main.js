
const hamburger = document.querySelector('.hamburger')

const menu = document.querySelector('.navi-menu')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})


const language = document.getElementById("butn")

const language_menu = document.querySelector(".lang-menu")

language.addEventListener("click", () => {
    language_menu.classList.toggle("active")
})

// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const third = document.getElementById('third')
// const fourth = document.getElementById('fourth')
// const fifth = document.getElementById('fifth')
// const sixth = document.getElementById('sixth')
// const seventh = document.getElementById('seventh')

const selector = document.querySelectorAll('.selector')

const category = document.querySelectorAll('.category-blocks')

selector.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        selector.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        category.forEach(block =>{
            block.classList.remove("active")
        })
        category[index].classList.add("active")
    })
})

const header = document.querySelector('header')


document.addEventListener('scroll', () => {
    
    let top = document.documentElement.scrollTop

    if(top > 112)
    {
        header.classList.add('fixed')
    } else
    {
        header.classList.remove('fixed')
    }
})

const desktopCategory = document.querySelectorAll('.category-grid')
const menuCategory = document.querySelectorAll('#menucategory')
const categoryBackground = document.querySelector('.category-desktop-menu')
const slideContainer = document.getElementById('slideContainer')

menuCategory.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {

        menuCategory.forEach(button => {
            button.classList.remove("active")
        })
        button.classList.add("active")

        categoryBackground.classList.add("active")

        desktopCategory.forEach(tab => {
            tab.classList.remove("active")
        })
        desktopCategory[index].classList.add("active")
    })
})

slideContainer.addEventListener('mouseleave', () => {
    categoryBackground.classList.remove("active")
})
