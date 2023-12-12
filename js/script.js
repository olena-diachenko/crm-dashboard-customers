'use strict';

const body = document.querySelector('body');
const burger = document.getElementById('burger');
const burgerInner = document.getElementById('burger__inner');
const sidebar = document.getElementById('sidebar');

const clickhandler = () => { 
    sidebar.classList.toggle('open');
    burger.classList.toggle('open');
    burgerInner.classList.toggle('open');
    body.classList.toggle('lock');
}

burger.addEventListener('click', clickhandler)