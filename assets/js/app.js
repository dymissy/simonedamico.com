import {getBlogPosts} from "./service/blogPosts";

let menu = () => {
    let menuBtn = document.getElementById('menu-button');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', (e) => {
        menuBtn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    let items = menu.getElementsByTagName('a');
    for (let item of items) {
        item.addEventListener('click', (e) => {
            menuBtn.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
};

let blogPosts = () => {
    let posts = getBlogPosts();

    console.log(posts);
};


let app = () => {
    menu();
    blogPosts();
};

app();