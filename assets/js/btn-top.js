const btnTop = document.querySelector('.btn-top svg');



function scrollfun(params) {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop>500) {
        btnTop.style.display = 'block';
       
}
else {
        btnTop.style.display = 'none';
        
    } 
 

}

window.addEventListener('scroll', () => {
    scrollfun()
})

btnTop.addEventListener('click', () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
})



