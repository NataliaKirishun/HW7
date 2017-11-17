(function () {
    'use strict';
    let requiredImg = document.getElementById('wrapper'),
        imgContainer=document.getElementById('container'),
        imgLarge = document.getElementById('largeImg'),
        pResult = document.getElementById('invisible');
    requiredImg.addEventListener('click', function (event) {
        let target = event.target || event.srcElement,
            check = target.matches('a') ? target : target.closest('a');
        if (check) {
            imgLarge.src = check.href;
            imgLarge.classList.add('growing');
            imgContainer.classList.add('growing');
            }
    });

    imgContainer.addEventListener('click', function (event) {
        imgLarge.classList.remove('growing');
    })

}());