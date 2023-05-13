import data from "../../vendor/src/DataPortfolio.json" assert { type: "json" };

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

const all = document.getElementById("all");
const web = document.getElementById("web");
const Graphic = document.getElementById("Graphic");

const CardData = data.card;
let i = 0;
while (i < CardData.length) {
  const card = `<div class="card-wrapper">  
    <div class="card-top">  
     <img class="image" src="${CardData[i].img}" alt="${CardData[i].alt}">  
    </div>  
    <div class="card-bottom">  
     <span class="top-text">${CardData[i].titel}</span><br>  
     <span class="bottom-text">${CardData[i].explain}</span>  
     <br>  
     <a href="${CardData[i].link}" title="${CardData[i].titel}" class="link-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path></svg></a> 
    </div>  
    </div> `;
  all.innerHTML += card;
  if (CardData[i].type == "web") {
    web.innerHTML += card;
  } else {
    Graphic.innerHTML += card;
  }
  i = i + 1;
}
