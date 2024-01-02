const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => { 
    if (nav.classList.toggle('open')) {
navBtnImg.src = "./img/svg/menu-close.svg";
    } else { 
navBtnImg.src = "./img/svg/menu-open.svg";
    }

}
  AOS.init();