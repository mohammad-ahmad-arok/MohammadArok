// for animation contact
let menu = document.querySelector('.menu');
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    var sectionContact = document.getElementById('contact');
    if (currentScrollPos+100 >=sectionContact.offsetTop) {
       menu.classList.add('active')
        
    }
    else {
        menu.classList.remove('active')
    }
}


