let toggler = document.querySelectorAll(".arrow");

for(let i=0; i<toggler.length; i++)
{
   toggler[i].addEventListener("click" , function(){
        this.parentElement.querySelector(".more").classList.toggle("show");
        this.classList.toggle("arrow-down");
   });
};