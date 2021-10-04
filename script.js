    let star = document.getElementById('star');
    let moon = document.getElementById('moon');
    let montagne_2 = document.getElementById('montagne_2');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let montagne = document.getElementById('montagne');
    let header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        star.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        montagne_2.style.top = value * 1.5 + 'px';
        montagne.style.top = value * 0.1 + 'px';
        text.style.marginRight = value * 4 + 'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.8 + 'px';
        header.style.marginTop = value * .5 + 'px';
    })