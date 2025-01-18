
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

const tapss = document.querySelectorAll('.tapss');
const containerImg = document.querySelector('.container-img')
tapss.forEach((item , i) => {
    item.addEventListener('click', () => {
        containerImg.style.marginLeft = `-${i * 100}%`
        
        tapss.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active')
    })

})


// const tapps = document.querySelectorAll('.tapps');
// const containerMid = document.querySelectorAll('.container-mid');
// const containerRight2 = document.querySelectorAll('.container-right2');
//  tapps.forEach((item, i) => {
//     item.addEventListener('click', () => {

//         tapps.forEach(item => {
//             item.classList.remove('active')
//         })
//         item.classList.add('active');

//         containerMid.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerMid[i].classList.add('active');


//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')
//     })
//  })


const tapsss = document.querySelectorAll('.tapsss')
const containerImg2 = document.querySelector('.container-img2')
tapsss.forEach((item, i) => {
    item.addEventListener('click', () => {

        containerImg2.style.marginLeft = `-${i * 100}%`
        tapsss.forEach(item => {
            item.classList.remove('active2')
        })
        item.classList.add('active2')
    })
})


const tapssss = document.querySelectorAll('.tapssss');
const containerImg3 = document.querySelector('.container-img3');

tapssss.forEach((item, i) => {
    item.addEventListener('click', () => {


        containerImg3.style.marginLeft = `-${i * 100}%`

        tapssss.forEach(item => {
            item.classList.remove('active3')
        })
        item.classList.add('active3')
    })
})


// const tap22 = document.querySelectorAll('.tap22');
// tap22.forEach((item, i) => {
//     item.addEventListener('click', () => {

//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')

//         containerMid[i].classList.add('active')
//     })
// })

// const tap33 = document.querySelectorAll('.tap33');
// tap33.forEach((item, i) => {

//     item.addEventListener('click', () => {

//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')

//         containerMid.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerMid[i].classList.add('active')
//     })
// })

const tap44 = document.querySelectorAll('.tap44');
const containerr = document.querySelector('.content1');
const tapshow = document.querySelectorAll('.tapshow');
const showname = document.querySelectorAll('.showname');

tap44.forEach((item , i) => {
    item.addEventListener('click', () => {

        containerr.style.marginLeft = `-${i * 100}%`

        tap44.forEach(item => {
            item.classList.remove('active2');
        })
        item.classList.add('active2');

        tapshow.forEach(item => {
            item.classList.remove('active')
        })
        tapshow[i].classList.add('active');

        showname.forEach(item => [
            item.classList.remove('active')
        ])
        showname[i].classList.add('active');

        // containerFlex.classList.remove('active');
        // colorHide.classList.remove('active')
    })
})

const colorHide = document.querySelector('.color-hide');
const containerFlex = document.querySelector('.container-flex');
const overLay3 = document.querySelector('.overlay3');

tapshow.forEach((item, i) => {
    item.addEventListener('click', () => {

        colorHide.classList.add('active');
        containerFlex.classList.add('active');
        overLay3.classList.add('active');

        overLay3.addEventListener('click', () => {
            colorHide.classList.remove('active');
            containerFlex.classList.remove('active');
            overLay3.classList.remove('active')
        })
    })
})


const slSize = document.querySelectorAll('.select-size');
const btnAdd = document.querySelectorAll('.btn-add');

slSize.forEach((item, i, arr) => {
    item.addEventListener('click', () => {


        slSize.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');

        body.classList.add('active4')
    })
})


const slSize2 = document.querySelectorAll('.select-size2');
const btnAdd2 = document.querySelectorAll('.btn-add2');

slSize2.forEach((item, i) => {
    item.addEventListener('click', () => {

        slSize2.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')

        body.classList.add('active2')

    })
})

const slSize3 = document.querySelectorAll('.select-size3');
const btnAdd3 = document.querySelectorAll('.btn-add3');

slSize3.forEach((item, i) => {
    item.addEventListener('click', () => {

        slSize3.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')

        body.classList.add('active3')
    })
})

const selectSize4 = document.querySelectorAll('.select-size4');

selectSize4.forEach((item, i) => {
    item.addEventListener('click', () => {
        selectSize4.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');

        body.classList.add('active5')
    })
})



const tapps = document.querySelectorAll('.tapps');
const containerMid = document.querySelectorAll('.container-mid');
const containerRight2 = document.querySelectorAll('.container-right2');


tapps.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerMid.forEach(item => 
            item.classList.remove('active')
        )
        containerMid[i].classList.add('active');

        containerRight2.forEach(item => {
            item.classList.remove('active');
        })
        containerRight2[i].classList.add('active');
    })
})

const tap22 = document.querySelectorAll('.tap22');

tap22.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerMid.forEach(item => 
            item.classList.remove('active')
        )
        containerMid[i].classList.add('active');

        containerRight2.forEach(item => 
            item.classList.remove('active')
        )
        containerRight2[i].classList.add('active');
    })
})

const tap33 = document.querySelectorAll('.tap33');

tap33.forEach((item , i) => {
    item.addEventListener('click', () => {
        containerMid.forEach(item => 
            item.classList.remove('active')
        )
        containerMid[i].classList.add('active');

        containerRight2.forEach(item => 
            item.classList.remove('active')
        )
        containerRight2[i].classList.add('active')
    })

})

// tapps.forEach((item, i) => {
//     item.addEventListener('click', () => {

//         containerMid.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerMid[i].classList.add('active');

//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')
//     })
// })

// const tap22 = document.querySelectorAll('.tap22');

// tap22.forEach((item, i) => {
//     item.addEventListener('click', () => {

//         containerMid.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerMid[i].classList.add('active');

//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')
//     })
// })

// const tap33 = document.querySelectorAll('.tap33');

// tap33.forEach((item, i) => {
    
//     item.addEventListener('click', () => {

//         containerMid.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerMid[i].classList.add('active')

//         containerRight2.forEach(item => {
//             item.classList.remove('active')
//         })
//         containerRight2[i].classList.add('active')
//     })
// })

// const header = document.querySelector('.header')
// var lastScrollPOs = 0;

// window.addEventListener('scroll', () => {
//     var scrollTop = window.pageYOffset;

//     if(scrollTop > lastScrollPOs){
//         header.style.transform = "translateY(-100%)"
//     }else{
//         header.style.transform = "translateY(0%)"
//     }
//     lastScrollPOs = scrollTop;
// })

// const containerProd = document.querySelectorAll('.container-prod')
// const sr = ScrollReveal({
//     distance: "0px",
//     duration: 2600,
//     delay: 450,
//     reset: true
// })

// sr.reveal('.container-prod', {delay : 1000, reset: false})

// const containerMid1 = document.querySelector('.container-mid');

// let isDragging = false;
// const dragging = (e) => {
//     if(!isDragging) return;
//     containerMid1.scrollLeft -= e.movementX;
//     handleIcon();
// }
// const draggignStop = () => {
//     isDragging = false;
// }
// containerMid1.addEventListener('mousemove', dragging);
// containerMid1.addEventListener('mousedown', () => isDragging = true)
// containerMid1.addEventListener('mouseup', draggignStop)


// container-img4 

const label = document.getElementById('label');
const inputBottom = document.getElementById('input-bottom');

label.addEventListener('click', () => {
    inputBottom.focus();
})

const containerImg4 = document.querySelector('.container-img4');
const tapsss2 = document.querySelectorAll('.tapsss2');

tapsss2.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerImg4.style.marginLeft = `-${i * 100}%`;

        tapsss2.forEach(item => {
            item.classList.remove('active2')
        })
        item.classList.add('active2');

    })
})


// add color 4 

const tap444 = document.querySelectorAll('.tap444');

tap444.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerMid.forEach(item => {
            item.classList.remove('active');
        })
        containerMid[i].classList.add('active');

        containerRight2.forEach(item => {
            item.classList.remove('active');
        })
        containerRight2[i].classList.add('active');
    })
})

const selectSize5 = document.querySelectorAll('.select-size5');

selectSize5.forEach((item) => {
    item.addEventListener('click', () => {

        body.classList.add('active6')

        selectSize5.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');
    })
})

const selectSize6 = document.querySelectorAll('.select-size6');

selectSize6.forEach((item) => {
    item.addEventListener('click', () => {

        body.classList.add('active7');

        selectSize6.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');
    })
})



const containerImg5 = document.querySelector('.container-img5');
const tapsss3 = document.querySelectorAll('.tapsss3');

tapsss3.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerImg5.style.marginLeft = `-${i * 100}%`;

        tapsss3.forEach(item => {
            item.classList.remove('active2')
        })
        item.classList.add('active2');
    })
})


const tapsss4 = document.querySelectorAll('.tapsss4');
const containerImg6 = document.querySelector('.container-img6');

tapsss4.forEach((item, i) => {
    item.addEventListener('click', () => {
        containerImg6.style.marginLeft = `-${i * 100}%`;

        tapsss4.forEach(item => {
            item.classList.remove('active2')
        })
        item.classList.add('active2');
    })
})


const tap555 = document.querySelectorAll('.tap555');

tap555.forEach((item, i) => {
    item.addEventListener('click', () => {

        containerRight2.forEach(item => {
            item.classList.remove('active')
        })
        containerRight2[i].classList.add('active');

        containerMid.forEach(item => {
            item.classList.remove('active')
        })
        containerMid[i].classList.add('active');
    })
})

const tap666 = document.querySelectorAll('.tap666');

tap666.forEach((item, i) => 
    item.addEventListener('click', () => {

        containerRight2.forEach(item => {
            item.classList.remove('active');
        })
        containerRight2[i].classList.add('active');

        containerMid.forEach(item => {
            item.classList.remove('active');
        })
        containerMid[i].classList.add('active');
    })
)