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
    $(".nevs").css("backgroundColor","white");
    $(".nevs li a").css("color","#000");
    $('.form-inline').css("border-left","rgba(0,0,0,0.5) 1px solid");
    $('.logo').attr("src","images/darklogo.png");
    $('.profileIcon a i').css("color","000") ;  
    }
    else{
        
    $(".nevs").css("backgroundColor","rgba(0,0,0,.1)");
    $(".nevs li a").css("color","#fff");
    $('.form-inline').css("border-left","rgba(250,250,250,0.5) 1px solid"); 
    $('.logo').attr("src","images/WhiteLogolastttt.png");
        $('.profileIcon a i').css("color","#fff") ; 
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
});