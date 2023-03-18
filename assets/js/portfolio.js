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

var card = `<div class="card-wrapper">  
<div class="card-top">  
 <img class="image" src="${CardData.img}">  
</div>  
<div class="card-bottom">  
 <span class="top-text">${CardData.titel}</span><br>  
 <span class="bottom-text">${CardData.explain}</span>  
 <br>  
 <a href="#" class="link-btn"></a> 
</div>  
</div> `;
all.innerHTML=card;