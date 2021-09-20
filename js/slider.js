let width = document.querySelector('.works-carousel-item').offsetWidth;
let count = 1;

let list = document.querySelector('.works-carousel');
let listElems = document.querySelectorAll('.works-carousel-item');
let position = 0;

document.querySelector('.prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length));
    list.style.marginLeft = position + 'px';
};