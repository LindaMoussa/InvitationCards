    /*--------------popup----------------------*/
$(document).ready(function(){
    var lightBoxContainer=document.querySelector(".lightbox-container") ;
var lightBoxItem = document.querySelector(".lightbox-item");
var clr= document.querySelector(".light-close");
var loginCard=document.querySelector(".login-card");
    var regCard=document.querySelector(".reg-card")

var loginLink=document.querySelector(".loginLink a");
    console.log(loginLink);
    var logBtn=document.querySelector("#logBtn");
logBtn.addEventListener("click",function(){
         lightBoxContainer.classList.add("show");
         regCard.classList.add("show");         
        loginCard.classList.remove("show"); 
     });
    
clr.addEventListener("click",function(){
    if(loginCard.style.display=="block")
    {loginCard.classList.remove("show");} 
    if(regCard.style.display=="none")
    { regCard.classList.add("show");}
     lightBoxContainer.classList.remove("show");
});
    
 document.addEventListener("keydown",function(event){
      if(event.keyCode==27){
    if(loginCard.style.display=="block")
    {loginCard.classList.remove("show");} 
    if(regCard.style.display=="none")
     { regCard.classList.add("show");}
     lightBoxContainer.classList.remove("show");
     }
 });
loginLink.addEventListener("click",function(){
        regCard.classList.remove("show");
        loginCard.classList.add("show");
});
    

var userMailInpt=document.querySelector("#mail input");
var  uesrMailReg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
 userMailInpt.addEventListener("blur",function(){
    var alert=document.querySelector("#mail .alert")
    var userMail=userMailInpt.value;
    
    if (uesrMailReg.test(userMail)==false)
        {
          alert.style.display="block";  
        }
    else{
      alert.style.display="none";  
    }
});
})
