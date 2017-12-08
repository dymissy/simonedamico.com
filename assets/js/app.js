let menu = () => {
    let menuBtn = document.getElementById('menu-button');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', (e) => {
        menuBtn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    let items = menu.getElementsByTagName('a');
    for(let item of items) {
        item.addEventListener('click', (e) => {
            menuBtn.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
};


let app = () => {
    menu();
};

app();