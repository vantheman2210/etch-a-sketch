window.onload = function() {
  placeholderGrid();
}; 

function placeholderGrid () { 

let fixedDiv = 256; 
for (i = 0; i < fixedDiv; i++) {
let grid = document.createElement("div"); 
      grid.id = "grid"; 
  
document.getElementById("container").appendChild(grid); 

container = document.getElementById("container");
container.style.gridTemplateColumns = `repeat(16, 1fr)`; 
container.style.gridTemplateRows = `repeat(16, 1fr)`;     

let basic = document.getElementById("basic"); 

let handler1 = function () { 
  grid.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

let handler12 = function () {  
    grid.addEventListener("mouseover", handler1, true); 
    grid.removeEventListener("mouseover", handler2, true);
}

basic.addEventListener("click", handler12, true);

let buttonRainbow = document.getElementById("rainbow"); 
let handler2 = function rainbowButton () { 
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.style.backgroundColor = `#${randomColor}`; 
      }   
let handler22 = function () { 
  grid.addEventListener("mouseover", handler2, true); 
  grid.removeEventListener("mouseover", handler1, true);
} 

buttonRainbow.addEventListener("click", handler22, true);

let buttonResetGrid = document.getElementById("reset");    
    buttonResetGrid.addEventListener("click", () => {   
    grid.style.backgroundColor = "rgba(224, 224, 224)";  
      })     
}
};



function createGrid () { 

  container.innerHTML = ''; 

  let userInput = prompt("How many squares");
 
  while (userInput > 100) { 
    userInput = prompt("How many squares?"); 
  } 

  let user = Math.pow(userInput, 2); 
  

  if (user <= 10000){ 

    for (x = 0; x<user;x++) {   


      let grid = document.createElement("div"); 
      grid.id = "grid"; 
  
      document.getElementById("container").appendChild(grid); 
  
      /*grid.addEventListener('mouseover', 
      e => e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")  */

      container = document.getElementById("container");
      container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`; 
      container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;      

      let basic = document.getElementById("basic"); 

      let handler1 = function () { 
        grid.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      }

      let handler12 = function () {  
        grid.addEventListener("mouseover", handler1, true); 
        grid.removeEventListener("mouseover", handler2, true);
      }

      basic.addEventListener("click", handler12, true);

      let buttonRainbow = document.getElementById("rainbow"); 
      let handler2 = function rainbowButton () { 
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.style.backgroundColor = `#${randomColor}`; 
      }   
      let handler22 = function () { 
        grid.addEventListener("mouseover", handler2, true); 
        grid.removeEventListener("mouseover", handler1, true);
      } 

      buttonRainbow.addEventListener("click", handler22, true);
    
      let buttonResetGrid = document.getElementById("reset");    
        buttonResetGrid.addEventListener("click", () => {    
        grid.style.backgroundColor = "rgba(224, 224, 224)";    
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`; 
        container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`; 
})
      
} } };  
    
    
    

    /*function resetGrid () {     
      let container = document.getElementById("container")
      container.innerHTML = ''; 
      placeholderGrid;
      };*/

    
      
/*let handler2 = function (){basic.addEventListener("click", () => {   
    handlerBasic;  
    setInterval(() => { handlerBasic();}, 500); 
        }) }*/  

        /*let handler1 = function () { 
  grid.style.backgroundColor = "red";  
} 
grid.addEventListener("mouseover", handler1, true);*/ 

/*buttonRainbow.addEventListener("click", () => {  
    rainbowButton; 
    setInterval(() => { rainbowButton();}, 500); 
        })*/