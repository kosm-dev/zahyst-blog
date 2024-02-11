"use strict";

document.addEventListener("DOMContentLoaded", () => {


  function toggleMenu() {
    const burger = document.querySelector('.burger'),
      menu = document.querySelector('.header__menu'),
      body = document.querySelector('body');

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
    });
  }

  if(document.querySelector('.burger')) {
    toggleMenu();
  }



  function headerScroll(headerClass) {
    const header = document.querySelector(headerClass);

    function onScroll() {
      if (window.scrollY > 0) {
        header.classList.add('header--scroll');
      } else {
        header.classList.remove('header--scroll');
      }
    }
    window.addEventListener('scroll', onScroll);
  }

  if (document.querySelector('.header')) {
    headerScroll('.header');
  }


  // function hideNavbar(navbarClass) {
  //   const navbar = document.querySelector(navbarClass);

  //   function onScroll() {
  //     if (window.scrollY > 0) {
  //       navbar.classList.add('active');
  //     } else {
  //       navbar.classList.remove('active');
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll);
  // }

  // if (document.querySelector('.navbar')) {
  //   hideNavbar('.navbar');
  // }



});