$(window).scroll(function(){

   if($(window).scrollTop()>500)
    {
    $(".nevs").css("backgroundColor","white");
    $(".nevs li a").css("color","#000");
    $('.form-inline').css("border-left","rgba(0,0,0,0.5) 1px solid");
    $('.logo').attr("src","images/darklogo.png");
        
    }
    else{
        
    $(".nevs").css("backgroundColor","rgba(0,0,0,.1)");
    $(".nevs li a").css("color","#fff");
    $('.form-inline').css("border-left","rgba(250,250,250,0.5) 1px solid"); $('.logo').attr("src","images/WhiteLogolastttt.png");
    }

})