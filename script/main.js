//MODEL
let leftbtn = document.querySelector('.left');
let img = document.querySelector('.img');
let imgLeft = document.querySelector('.img-left');
let line = document.querySelector('.line');
let line2 = document.querySelector('.line2');
let rightbtn = document.querySelector('.right');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let stop = document.querySelector('.img-stop');



//VIEW

leftbtn.addEventListener('click', () => {

    img.classList.add('img-left');
    img.classList.remove('img-right');
    line.classList.add('line-left');
    line.classList.remove('line-right');
    
});

rightbtn.addEventListener('click', () => {

    img.classList.add('img-right');
    img.classList.remove('img-left');
    line.classList.add('line-right');
    line.classList.remove('line-left');

});

one.addEventListener('click', () => {

    img.classList.add('speed-one');
    img.classList.remove('speed-two');
    img.classList.remove('speed-three');
    line2.classList.add('l1');
    line2.classList.remove('l2');
    line2.classList.remove('l3');

});

two.addEventListener('click', () => {

    img.classList.add('speed-two');
    img.classList.remove('speed-one');
    img.classList.remove('speed-three');
    line2.classList.add('l2');
    line2.classList.remove('l3');
    line2.classList.remove('l1');

});

three.addEventListener('click', () => {

    img.classList.add('speed-three');
    img.classList.remove('speed-one');
    img.classList.remove('speed-two');
    line2.classList.add('l3');
    line2.classList.remove('l2');
    line2.classList.remove('l1');

});


//CONTROLER

