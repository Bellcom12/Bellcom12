"use strict";

const menuToggle = document.querySelector("#toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu__wrapper");
const barIcon = document.querySelector(".fa-bars");
const cancleIcon = document.querySelector(".fa-xmark");
const search = document.querySelector(".search");
// const logo = document.querySelector('.logo');
// const home = document.querySelector('.home');
const cart = document.querySelector(".mobile-fa-cart-shopping");
const showPassword = document.querySelector(".show-password");
const password = document.querySelector("#password");
const accordionToggle = document.querySelectorAll(".accordion-control");
const accordionList = document.querySelectorAll(".accordion-list");

// ======================= script for mobile menu sliding =================

menuToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("slide-in")) {
    mobileMenu.classList.toggle("slide-out");
  } else {
    mobileMenu.classList.toggle("slide-in");
  }

  barIcon.classList.toggle("opacity");
  cancleIcon.classList.toggle("opacity");
  search.classList.toggle("opacity");
  // logo.classList.toggle('opacity');
  // home.classList.toggle('opacity');
  cart.classList.toggle("opacity");
});

// ======================= ends here =================

// ======================= script for showing password =================

showPassword.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default behavior

  if (showPassword.textContent === "SHOW") {
    showPassword.textContent = "HIDE";
    password.setAttribute("type", "text");
  } else {
    showPassword.textContent = "SHOW";
    password.setAttribute("type", "password");
  }
});

// ======================= ends here =================

// ======================= accordion script starts here =================
for (let i = 0; i < 2; i++) {
  accordionToggle[i].addEventListener("click", function () {
    accordionList[i].classList.toggle("active");

    const chevron = accordionToggle[i].querySelector(".chevron-up");
    console.log(chevron);

    if (chevron.classList.contains("chevron-up")) {
      chevron.classList.toggle("chevron-down");
    } else {
      chevron.classList.toggle("chevron-up");
    }
  });
}
// ======================= ends here =================
