document.getElementById('style').setAttribute('href', 'assets/css/style.css?' + Math.random());

let menu = () => {
    let menuBtn = document.getElementById('menu-button');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', (e) => {
        menuBtn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
};


let app = () => {
    menu();
};

app();