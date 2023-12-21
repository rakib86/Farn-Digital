document.addEventListener("scroll", function() {
    var scrolled = window.scrollY > 0 || window.innerWidth <= 768;
    document.body.classList.toggle("scrolled", scrolled);
});

document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".menu").classList.toggle("show");
}

document.querySelector(".menu-btn-close").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("show");
  });


'use strict';

const accordion = document.querySelectorAll('.accordion h3');
let mainParent;
let height;
let answer;
accordion.forEach(item => {
    item.addEventListener('click', () => {
        height = item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
        answer = item.parentElement.nextElementSibling;
        mainParent = item.parentElement.parentElement;
        if (mainParent.classList.contains('active')) {
            mainParent.classList.remove('active');
            answer.style.height = `0px`;
        } else { 
            mainParent.classList.add('active');
            answer.style.height = `${height}px`;
        }
    });
});