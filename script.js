"use strict";

const header = document.querySelector(".mainHeader");
const menuOpen = document.querySelector(".menuOpenButton");
const menuClose = document.querySelector(".menuCloseButton");
const sectionObserver = document.querySelector(".header-section");

// Navigation Menu
menuOpen.addEventListener('click', function() {
    console.log('menuOpen');
    header.classList.add('hidden');
    console.log('hell')
});

menuClose.addEventListener('click', function () {
    header.classList.remove('hidden');
});

// sticky navigation menu
const heightArea = document.querySelector('.provided-services');
const stickyNav = heightArea.getBoundingClientRect().height;

// const stick