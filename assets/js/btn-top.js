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
