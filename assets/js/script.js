'use strict';



/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeSlide(n) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + n + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  slides[currentIndex].classList.add('active');
});


/**
 * navbar toogle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}


/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

addEventOnElem(filterBtn, "click", filter);

