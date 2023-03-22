const btnTop = document.getElementById('btn-top');
window.onscroll = () => {
    scrollfun();
}
function scrollfun(params) {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop>400) {
    btnTop.style.display = 'block';
}
else {
    btnTop.style.display = 'none';
}

}

btnTop.addEventListener('click', () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
})


// for animation contact

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');


console.log(contact.offsetTop);

window.onscroll = () => {
    scrollfun();
}
function scrollfun(params) {
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop>1700) {
        menu.classList.toggle('active');
}
else {
    menu.classList.remove('active');
}

}
