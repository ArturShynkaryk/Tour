const btn = document.querySelector('.booking-block-btn') ;
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.callback-form');
const body = document.querySelector('body');

btn.addEventListener('click', function () {
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
})

form.addEventListener('click', function (e) {
    e.stopPropagation();
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})