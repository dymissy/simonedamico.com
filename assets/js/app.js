document.getElementById('style').setAttribute('href', 'assets/css/style.css?' + Math.random());

let app = () => {
    console.log('here');


    let menu = document.getElementById('menu');
    menu.addEventListener('click', (e) => {
        menu.classList.toggle('is-active');
    });
};

app();