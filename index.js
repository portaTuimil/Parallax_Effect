

//https://verpex.com/blog/website-tips/basic-guide-to-parallax-scrolling
document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition < (window.innerHeight + 200)){
    document.querySelector('.parallax-layer:nth-child(1)').style.transform = 'translateY(' + (-scrollPosition * 0.25) + 'px)';
    document.querySelector('.parallax-layer:nth-child(2)').style.transform = 'translateY(' + (-scrollPosition * 0.2) + 'px)';
    document.querySelector('.parallax-layer:nth-child(2)').style.transform = 'translateY(' + (-scrollPosition * 0.01) + 'px)';

    document.querySelector('.tree-layer').style.transform = 'translateY(' + (-scrollPosition * 0.8) + 'px)';
    document.querySelector('.cover').style.transform = 'translateY(' + (-scrollPosition * 0.8) + 'px)';
    document.querySelector('body').style.transform = 'translateY(' + (scrollPosition * 0.95) + 'px)';
    
    }
});
