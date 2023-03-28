let items = document.querySelectorAll(".items li");
 console.log(items)
 

items.forEach( li =>{
     li.addEventListener("click", (e)=>{
     e.target.parentElement.querySelectorAll(".active").forEach( elm =>{
          elm.classList.remove("active")
     });
          e.target.classList.add("active");
});
});


let links = document.querySelectorAll(" .items li");

links.forEach( (link) =>{
     link.addEventListener("click", (e)=>{
          // console.log(e.currentTarget.dataset.number)
          links.forEach( li =>{
               li.classList.remove("active");
          });
          e.currentTarget.classList.add("active");
          window.localStorage.setItem("number", e.currentTarget.dataset.number);
     });
});