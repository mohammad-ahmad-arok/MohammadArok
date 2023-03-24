// for animation contact

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');



window.onscroll = () => {
    scrollfun();
}
function scrollfun(params) {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop>2500) {
        menu.classList.toggle('active');
}
else {
    menu.classList.remove('active');
}

}