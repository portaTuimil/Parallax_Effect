let firstLayer =  document.querySelector('#tree-layer');
let secondLayer =  document.querySelector('#first-layer');
let thirdLayer =  document.querySelector('#second-layer');
let fourthLayer =  document.querySelector('#third-layer');
let cover = document.querySelector(".cover");
let body = document.querySelector("body");
let scrollPosition;
let toogleDisplay;

//https://verpex.com/blog/website-tips/basic-guide-to-parallax-scrolling
document.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    const secondLayerRect = secondLayer.getBoundingClientRect();
    const firstLayerRect = firstLayer.getBoundingClientRect();

    cover.style.top = firstLayerRect.bottom + "px";
    cover.style.height = -firstLayerRect.top+secondLayerRect.top + 100 +"px";

    if (scrollPosition < (window.innerHeight)){
        body.style.transform = 'translateY('+ (scrollPosition * 1) + 'px)';

        firstLayer.style.transform = 'translateY(' + (-scrollPosition * 1) + 'px)';
        secondLayer.style.transform = 'translateY(' + (-scrollPosition * 0.4) + 'px)';
        thirdLayer.style.transform = 'translateY(' + (-scrollPosition * 0.2) + 'px)';
        fourthLayer.style.transform = 'translateY(' + (-scrollPosition * 0.05) + 'px)';

    }

    if (firstLayerRect.bottom<0){
        secondLayer.style.display = 'none';
        toogleDisplay = true;
    }

    if (toogleDisplay && firstLayerRect.bottom > 0){
        secondLayer.style.display = 'block';
        toogleDisplay = false;
    }
});