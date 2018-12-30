$(window).scroll(function(){

if($(window).scrollTop()>50)
    {
        $(".nevs").css("backgroundColor","#777");
       $(".nevs").css("color","#fff");
        
    }
    else{
          $(".nevs").css("backgroundColor","#fff");
        $(".nevs").css("color","#000");
    }

})