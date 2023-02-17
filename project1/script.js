 let count = 0;

 let btns = document.querySelectorAll(".material-symbols-outlined");
 let value = document.querySelector("#num");

  btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      let button = e.currentTarget.classList; 
      if(button.contains("positive")){
      count ++
     }else if(button.contains("negative")){
       count--
     } 
     value.textContent = count;
    })
  })