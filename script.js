togglebtn=document.querySelector(".togglebtn");
dropdown=document.querySelector(".dropdown");
togglebtn.addEventListener("click",function(){
    if(dropdown.style.display=="block")
    {
        togglebtn.innerHTML="<i class='bx bx-menu bx-sm' ></i>";
        dropdown.style.display="none";
    }
    else{
        togglebtn.innerHTML="<i class='bx bx-x bx-sm'></i>"
        dropdown.style.display="block";
    }
    
})