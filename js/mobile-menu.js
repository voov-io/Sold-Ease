const McButton = document.querySelector("#McButton");
const McBar1 = document.getElementById("McBar1");
const McBar2 = document.getElementById("McBar2");
const McBar3 = document.getElementById("McBar3");
const btns__menu = document.getElementById("btns__menu");
const menu__container =  document.querySelector(".menu__container");
const btn_call = document.querySelector(".buttom");
const call = document.querySelector(".buttom__container--call");

  McButton.addEventListener("click", function() {
  
    btns__menu.classList.toggle("active");
    McButton.classList.toggle("active");
    McBar1.classList.toggle("active");
    McBar2.classList.toggle("active");
    //   McBar1.style.animationName = "menu-positivo";
    
    McBar3.classList.toggle("active");
    menu__container.classList.toggle("active");
    btn_call.classList.toggle("active")
    call.classList.toggle("active")
  });