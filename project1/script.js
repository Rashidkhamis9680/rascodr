 let count = 0;

 let btns = document.querySelectorAll(".material-symbols-outlined");
 let value = document.querySelector("#num");
 let colorOne = document.querySelector('.changer');

  btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      let button = e.currentTarget.classList;
      console.log(button) 
      if(button.contains("positive")){
      count ++
       
     }else if(button.contains("negative")){
       count--
        

     } else{
      count = 0;
      
     }
     value.textContent = count;
     
     if(count > 0){
      colorOne.style.backgroundColor = "green";
      colorOne.style.color = "white";
     }else if(count < 0){
      colorOne.style.backgroundColor = "firebrick";
      colorOne.style.color = "white";
         }else{
          colorOne.style.backgroundColor = "white";
          colorOne.style.color = "black";
         }
  })
  });
