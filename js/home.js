$(document).ready(function(){
    $("#loading-screen .spinner").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000,function(){
            $("body").css("overflow","auto")
        })
    })
})

$(window).scroll(function(){

if($(window).scrollTop()>500)
    {
        $(".nevs").css("backgroundColor","#777");
       $(".nevs").css("color","#fff");
        
    }
    else{
          $(".nevs").css("backgroundColor","#fff");
        $(".nevs").css("color","#000");
    }

})

$(function() {
  $('.skitter-large').skitter({
      interval:1000
  });
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
})