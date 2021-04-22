const btnHamburguer = document.querySelector('#btnHamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburguer.addEventListener('click', function(){
    console.log('open hamburguer');
    if(header.classList.contains('open')){ // Close Hamburguer Menú
         header.classList.remove('open');
         overlay.classList.remove('fade-in');
         overlay.classList.add('fade-out');
    }
    else{ // Open Hamburguer Menú
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});