let firstLayer =  document.querySelector('#tree-layer');
let secondLayer =  document.querySelector('#first-layer');
let thirdLayer =  document.querySelector('#second-layer');
let fourthLayer =  document.querySelector('#third-layer');
let cover = document.querySelector(".cover");
let body = document.querySelector("body");
let scrollPosition;
let toogleDisplay;
let secondLayerRect;
let firstLayerRect;

function coverDifference(){
    secondLayerRect = secondLayer.getBoundingClientRect();
    firstLayerRect = firstLayer.getBoundingClientRect();

    cover.style.top = firstLayerRect.bottom + "px";
    /*cover.style.height = -firstLayerRect.top+secondLayerRect.top + 10 +"px";*/
};

document.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    coverDifference();

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

    document.querySelector('.parallax-container').setAttribute("height", firstLayerRect.bottom + "px")
});

window.onzoom = ()=> {
	coverDifference();
}