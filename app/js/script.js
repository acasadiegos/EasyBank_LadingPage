const btnHamburguer = document.querySelector('#btnHamburguer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburguer.addEventListener('click', function(){

    console.log('open hamburguer');

    if(header.classList.contains('open')){ // Close Hamburguer Menú
         body.classList.remove('noscroll');
         header.classList.remove('open');
         fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
         });
    }
    else{ // Open Hamburguer Menú
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});