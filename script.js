for (x = 0; x<256;x++) {  
  let container = document.createElement("div"); 
  container.className = "grid"; 

  document.getElementById("container").appendChild(container); 
  
  
}
  

let grid = document.querySelectorAll("grid"); 
grid.addEventListener('mouseover', 
  e => e.target.classList.add('colorChange')
)


