const box = document.querySelector('.box');
const sun = document.querySelector('.sun');
const clouds = document.querySelector('.clouds');
const stars = document.querySelector('.stars');
const stain = document.querySelectorAll('.stain');

let isSunVisible = false; 

function myFunction() {
    if (isSunVisible) {
        // Defolt values
        sun.style.left = '';
        sun.style.backgroundColor = '';
        sun.style.boxShadow = '';
        stain.forEach((s) => (s.style.opacity = 0));

        clouds.style.left = '';
        box.style.backgroundColor = '';
        stars.style.left = '';
    } else {
        // Changed values
        sun.style.left = '53%';
        sun.style.backgroundColor = '#C5C7CF';
        sun.style.boxShadow = 'inset -4px -4px 22px #A3A5B7, inset 4px 4px 22px #FFFFFF';
        stain.forEach((s) => (s.style.opacity = 1));

        clouds.style.left = '100%';
        box.style.backgroundColor = '#1E1D2A';
        stars.style.left = '80px';
    }

    isSunVisible = !isSunVisible;
}

box.addEventListener('click', myFunction);
