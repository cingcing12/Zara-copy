
// clearInput

// function myFunction(){
//     const input = document.querySelector('input').value;
//     const body = document.querySelector('body');
//     const clearInput = document.getElementById('clear-input');

//     if(input.length <= 0){
//         body.classList.remove('active')
//     }else{
//         body.classList.add('active')
//     }

//     clearInput.addEventListener('click', () => {
//         body.classList.remove('active');
//         document.querySelector('.input').value = "";
//         document.querySelector('.input').focus();
//     })
// }


// darkMode

const body = document.querySelector('body');
// const darkMode = document.querySelector('.dark-mode');
// const dark = document.getElementById('dark');
// const light = document.getElementById('light');

// darkMode.addEventListener('click', () => {
//     if(body.style.background === "rgb(26, 24, 24)"){
//         body.style.background = "white";
//         dark.style = "scale: 1; rotate:0deg; transition-delay: .5s";
//         light.style = "scale: 0; rotate:0deg; transition: .5s ease";
//     }else{
//         body.style.background = "rgb(26, 24, 24)";
//         dark.style = "scale: 0; rotate:360deg; transition: .5s ease";
//         light.style = "scale: 1; rotate:360deg; transition-delay: .5s";
//     }
// })

// icon menu

const icon = document.querySelector('.icon');
const overLay = document.querySelector('.over-lay');
const nav = document.querySelector('.nav');
const icon2 = document.querySelector('.icon2');

icon.addEventListener('click', () => {
    icon.classList.toggle('active')
    overLay.classList.toggle('active')
    body.classList.toggle('active1')
    nav.classList.toggle('active')
    icon2.classList.toggle('active')


    overLay.addEventListener('click', () => {
        icon.classList.remove('active');
        overLay.classList.remove('active')
        body.classList.remove('active1')
        nav.classList.remove('active');
        icon2.classList.remove('active')
    })

    icon2.addEventListener('click', () => {
        icon.classList.remove('active');
        overLay.classList.remove('active')
        body.classList.remove('active1')
        nav.classList.remove('active');
        icon2.classList.remove('active')
    })
})


// menu 

const taps = document.querySelectorAll('.taps');
const option = document.querySelector('.option');

taps.forEach((item , i) => {
    item.addEventListener('click', () => {
        option.style.marginLeft = `-${i * 100}%`

        taps.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');
    })
})

// open and close search

// const openSearch = document.querySelector('.icon-search');
// const closeSearch = document.querySelector('.icon-close');
// const header = document.querySelector('.header');

// openSearch.addEventListener('click', () => {
//     header.classList.add('active');
//     document.querySelector('.input').focus();
// })

// closeSearch.addEventListener('click', () => {
//     header.classList.remove('active')
// })