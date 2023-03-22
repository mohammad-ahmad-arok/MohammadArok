function meteor() {
    let amount = 50;
    let body = document.querySelector("body");
    let count = 0;
  
    while (count < amount) {
        let drop = document.createElement("m");
  
        let size = Math.random() * 10;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -10;
        let duration = Math.random() * 10;
  
        drop.style.width = `${0.1 + size}px`;
        drop.style.left = `${posX}px`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${1 + duration}s`;
  
        body.appendChild(drop);
        count++;
    }
  }
  
  meteor();




const modeToggle = document.querySelector(".dark-light"),
    body = document.querySelector("body");
    let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode"){
              body.classList.add("dark");
            }
  
  // js code to toggle dark and light mode
        modeToggle.addEventListener("click" , () =>{
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");
  
          // js code to keep user selected mode even page refresh or file reopen
          if(!body.classList.contains("dark")){
              localStorage.setItem("mode" , "light-mode");
          }else{
              localStorage.setItem("mode" , "dark-mode");
          }
        });