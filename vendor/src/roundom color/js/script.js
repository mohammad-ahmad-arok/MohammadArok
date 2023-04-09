const boxColor = document.querySelectorAll('.color-box');
const hexColor = document.querySelectorAll('.color-box span');
const body = document.getElementsByTagName('body');

function randome() {
    for (let i = 0; i < boxColor.length; i++) {
   
    let random = Math.floor(Math.random() * 16777215).toString(16);
    let HIXCode = '#' + random;
    boxColor[i].style.background = HIXCode;
        hexColor[i].innerHTML = HIXCode;
        
        
       
}
}
randome();
const modal = document.querySelector('.modal');
function copyToClipboard(colorid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(colorid));
        range.select().createTextRange();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(colorid));
        window.getSelection().addRange(range);
        navigator.clipboard.writeText(document.getElementById(colorid).innerText);
        modal.style.display='block';
        setTimeout(() => {
            modal.style.display='none';
        }, 1500);
    }
}