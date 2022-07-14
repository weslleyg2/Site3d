(function () {
    'use strict';
    const btnMobile = document.getElementById('btn-mobile');
    
    function toggleMenu(){
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');
    }
    
    btnMobile.addEventListener('click',toggleMenu);
    })();