var hamburgerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');

function openMobile() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);


$(document).ready(function () {

    $("#user-name").text("Welcome" + " Mayank");
    $("#name-text").text("Jane Doe");
    $("#role-text").text("Developer");

    
    $("#department-text").text("Sales");
    $("#phone-text").text("9921345610");
    $("#email-text").text("abc@gmail.com");



        
   
});