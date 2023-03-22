import data from "../../vendor/src/DataPortfolio.json" assert{type: 'json'}; 


const about = document.querySelector(".portfolio-box");  
 const btns = document.querySelectorAll(".tab-btn");  
 const articles = document.querySelectorAll(".content");  
 about.addEventListener("click", function (e) {  
  const id = e.target.dataset.id;  
  if (id) {  
   // remove selected from other buttons  
   btns.forEach(function (btn) {  
    btn.classList.remove("active");  
   });  
   e.target.classList.add("active");  
   // hide other articles  
   articles.forEach(function (article) {  
    article.classList.remove("active");  
   });  
   const element = document.getElementById(id);  
   element.classList.add("active");  
  }  
 }); 




const all = document.getElementById('all');
const web = document.getElementById('web');
const Graphic = document.getElementById('Graphic');

const CardData = data.card;
let i = 0;
while (i < CardData.length) {
    const card= `<div class="card-wrapper">  
    <div class="card-top">  
     <img class="image" src="${CardData[i].img}">  
    </div>  
    <div class="card-bottom">  
     <span class="top-text">${CardData[i].titel}</span><br>  
     <span class="bottom-text">${CardData[i].explain}</span>  
     <br>  
     <a href="${CardData[i].link}" class="link-btn"><i class='bx bx-link-alt' ></i></a> 
    </div>  
    </div> `;
    all.innerHTML += card;
    if (CardData[i].type == 'web') {
        web.innerHTML += card;
    
    } else {
        Graphic.innerHTML += card;
}
    i = i + 1;
} 


