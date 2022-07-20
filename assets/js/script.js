(function () {
    'use strict';
    const btnMobile = document.getElementById('btn-mobile');
    
    function toggleMenu(){
        const nav = document.getElementById('nav-menu');
        const menuTop = document.getElementById('menu-top');
        nav.classList.toggle('active');
        // menuTop.classList.toggle('no-show');
        
    }
    
    btnMobile.addEventListener('click',toggleMenu);

    let carouselImgs = new Carousel({
        container: '.certificates',
        itens: 'figure',
        btnPrev: '.fa-angle-left',
        btnNext: 'fa-angle-right'
    });
    
    })();