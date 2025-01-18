
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

// const body = document.querySelector('body');
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
const body = document.querySelector('body');

icon.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('active');
    body.classList.toggle('active1');
    icon2.classList.toggle('active');
    overLay.classList.toggle('active');

    overLay.addEventListener('click', () => {
        nav.classList.remove('active');
        icon.classList.remove('active'), 
        overLay.classList.remove('active');
        body.classList.remove('active1');
        icon2.classList.remove('active')
    })

    icon2.addEventListener('click', () => {
        nav.classList.remove('active');
        icon.classList.remove('active'), 
        overLay.classList.remove('active');
        body.classList.remove('active1');
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






// const containerWrapperImg = document.querySelector('.container-wrapper-img');
// const arrowIcon = document.querySelectorAll('.icon-arrow i')

// const handleIcon = () => {
//     let scrollVal = Math.round(containerWrapperImg.scrollLeft);
//     let maxScrollbleWidth = containerWrapperImg.scrollWidth - containerWrapperImg.clientWidth;
//     arrowIcon[0].parentElement.style.opacity = scrollVal > 0 ? "1" : "0.4";
//     arrowIcon[0].parentElement.style.pointerEvents = scrollVal > 0 ? "visible" : "none";
//     arrowIcon[1].parentElement.style.opacity = maxScrollbleWidth > scrollVal ? "1" : "0.4";
//     arrowIcon[1].parentElement.style.pointerEvents = maxScrollbleWidth > scrollVal ? "visible" : "none";

//     let scrollVal2 = Math.round(containerWrapperImg2.scrollLeft);
//     let maxScrollbleWidth2 = containerWrapperImg2.scrollWidth - containerWrapperImg2.clientWidth;
//     arrow2[0].parentElement.style.opacity = scrollVal2 > 0 ? "1" : "0.4";
//     arrow2[0].parentElement.style.pointerEvents = scrollVal2 > 0 ? "visible" : "none";
//     arrow2[1].parentElement.style.opacity = maxScrollbleWidth2 > scrollVal2 ? "1" : "0.4";
//     arrow2[1].parentElement.style.pointerEvents = maxScrollbleWidth2 > scrollVal2 ? "visible" : "none";

// }
// arrowIcon.forEach(icon => {
//     icon.addEventListener('click', () => {
//         containerWrapperImg.scrollLeft += icon.id === "left" ? -350 : 350;
//         setTimeout(() => handleIcon(), 50)
//     })
// })

// let isDragging = false;
// const dragging = (e) => {
//     if(!isDragging) return;
//     containerWrapperImg.classList.add('dragging')
//     containerWrapperImg.scrollLeft -= e.movementX;
//     handleIcon()
// }

// const dragginStop = () => {
//     isDragging = false;
//     containerWrapperImg.classList.remove('dragging')
// }
// containerWrapperImg.addEventListener('mousedown', () => isDragging = true)
// containerWrapperImg.addEventListener('mousemove', dragging);
// document.addEventListener('mouseup', dragginStop);


// const containerWrapperImg2 = document.querySelector('.container-wrapper-img2');
// const arrow2 = document.querySelectorAll('.arrow2 i')


// arrow2.forEach(icon => {
//     icon.addEventListener('click', () => {
//         containerWrapperImg2.scrollLeft += icon.id === "left" ? -350: 350;
//         setTimeout(() => handleIcon(), 50)
//     })
// })

// let isDraggin2 = false;
// const dragging2 = (e) => {
//     if(!isDraggin2) return;
//     containerWrapperImg2.scrollLeft -= e.movementX;
//     containerWrapperImg2.classList.add('dragging')
//     handleIcon()
// }
// const draggingStop2 = () => {
//     isDraggin2 = false;
// }
// containerWrapperImg2.addEventListener('mousemove', dragging2)
// containerWrapperImg2.addEventListener('mousedown', () => isDraggin2 = true);
// document.addEventListener('mouseup', draggingStop2)


const containerWrapperImg = document.querySelector('.container-wrapper-img');
const arrowIcon = document.querySelectorAll('.icon-arrow i');

const handleIcon = () => {
    let scrollVal = Math.round(containerWrapperImg.scrollLeft);
    let scrollbleWidth = containerWrapperImg.scrollWidth - containerWrapperImg.clientWidth;
    arrowIcon[0].parentElement.style.pointerEvents = scrollVal > 0 ? "visible" : "none";
    arrowIcon[0].parentElement.style.opacity = scrollVal > 0 ? "1" : "0.4";
    arrowIcon[1].parentElement.style.pointerEvents = scrollbleWidth > scrollVal ? "visible" : "none";
    arrowIcon[1].parentElement.style.opacity = scrollbleWidth > scrollVal ? "1" : "0.4";
}
arrowIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        containerWrapperImg.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcon(), 500)
    })
})

let isDraggin = false;
const dragging = (e) => {
    if(!isDraggin) return;
    containerWrapperImg.scrollLeft -= e.movementX;
    containerWrapperImg.classList.add('dragging');
    handleIcon();
}
const draggingStop = () => {
    isDraggin = false;
    containerWrapperImg.classList.remove('dragging');
}
containerWrapperImg.addEventListener('mousemove', dragging);
containerWrapperImg.addEventListener('mousedown', () => isDraggin = true);
containerWrapperImg.addEventListener('mouseup', draggingStop)



const containerWrapperImg2 = document.querySelector('.container-wrapper-img2')
const arrow = document.querySelectorAll('.arrow2 i');
const left2 = document.getElementById('left2');
const right2 = document.getElementById('right2');

const handleIcon2 = () => {
    let scrollVal = Math.round(containerWrapperImg2.scrollLeft);
    let scrollbleWidth = containerWrapperImg2.scrollWidth - containerWrapperImg2.clientWidth;
    arrow[0].parentElement.style.pointerEvents = scrollVal > 0 ? "visible" : "none";
    arrow[0].parentElement.style.opacity = scrollVal > 0 ? "1" : "0.4";
    arrow[1].parentElement.style.pointerEvents = scrollbleWidth > scrollVal ? "visible" : "none";
    arrow[1].parentElement.style.opacity = scrollbleWidth > scrollVal ? "1" : "0.4"
}
        left2.addEventListener('click', () => {
            containerWrapperImg2.scrollLeft += left2.id === "left" ? 350 : -350;
            setTimeout(() => handleIcon2(), 500)
        })
        right2.addEventListener('click', () => {
            containerWrapperImg2.scrollLeft += right2.id === "left" ? -350 : 350;
            setTimeout(() => handleIcon2(), 500)
        })


// left2.addEventListener('click', () => {
//     containerWrapperImg2.scrollLeft += left2.id === "left" ? 350 : -350;
// })
// right2.addEventListener('click', () => {
//     containerWrapperImg2.scrollLeft =+ right2.id === "left" ? -350 : 350;
// })
 
let isDragging2 = false;
const dragging2 = (e) => {
    if(!isDragging2) return;
    containerWrapperImg2.scrollLeft -= e.movementX;
    containerWrapperImg2.classList.add('dragging');
    handleIcon2();
}
const draggingStop2 = () => {
    isDragging2 = false;
    containerWrapperImg2.classList.remove('dragging');
}
containerWrapperImg2.addEventListener('mousemove', dragging2);
containerWrapperImg2.addEventListener('mousedown', () => isDragging2 = true);
containerWrapperImg2.addEventListener('mouseup', draggingStop2)



const containerWrapperImg3 = document.querySelector('.container-wrapper-img3')
const arrow3 = document.querySelectorAll('.arrow3 i');
const left3 = document.getElementById('left3');
const right3 = document.getElementById('right3');

const handleIcon3 = () => {
    let scrollVal = Math.round(containerWrapperImg3.scrollLeft);
    let scrollbleWidth = containerWrapperImg3.scrollWidth - containerWrapperImg3.clientWidth;
    arrow3[0].parentElement.style.pointerEvents = scrollVal > 0 ? "visible" : "none";
    arrow3[0].parentElement.style.opacity = scrollVal > 0 ? "1" : "0.4";
    arrow3[1].parentElement.style.pointerEvents = scrollbleWidth > scrollVal ? "visible" : "none";
    arrow3[1].parentElement.style.opacity = scrollbleWidth > scrollVal ? "1" : "0.4";
}

left3.addEventListener('click', () => {
    containerWrapperImg3.scrollLeft += left3.id === "left" ? -350 : -350;
    setTimeout(() => handleIcon3(), 500)
})

right3.addEventListener('click', () => {
    containerWrapperImg3.scrollLeft += right3.id === "left" ? 350 : 350;
    setTimeout(() => handleIcon3(), 500)
})

let isDraggin3 = false;
const dragging3 = (e) => {
    if(!isDraggin3) return;
    containerWrapperImg3.scrollLeft -= e.movementX;
    containerWrapperImg3.classList.add('dragging');
    handleIcon3();
}
const draggingStop3 = () => {
    isDraggin3 = false;
}
containerWrapperImg3.addEventListener('mousemove', dragging3);
containerWrapperImg3.addEventListener('mousedown', () => isDraggin3 = true);
containerWrapperImg3.addEventListener('mouseup', draggingStop3);

const label = document.getElementById('label');
const inputBottom = document.getElementById('input-bottom');

label.addEventListener('click', () => {
    inputBottom.focus();
})