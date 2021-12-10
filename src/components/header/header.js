
console.log ('Hola! Soy Header');

import $ from 'jquery';


$(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
    $(".header, .header__logo, .header__subtitle, .header__title, .header__nav").addClass("scroll"); 
  }
  else {
    $(".header, .header__logo, .header__subtitle, .header__title, .header__nav").removeClass("scroll");
  }
});