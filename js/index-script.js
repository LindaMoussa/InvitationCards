var cardSizeBtn=document.getElementById("cardSizeBtn");
var cardSizeArea=document.querySelector(".cardSizeArea");
var bgColorBtn=document.getElementById("bgColorBtn");
var bgColorArea=document.querySelector(".bgColorArea");
var clipArea=document.querySelector(".clipArea");
var lis=$(".menueOptions li");
lis.eq(0).click(function(){
  
    $(".cardSizeArea").siblings().hide();
  if(  $(".cardSizeArea").css("display")=='none'){
      $(".cardSizeArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".cardSizeArea").css("display")=='block'){
      $(".cardSizeArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(1).click(function(){
  
    $(".bgColorArea").siblings().hide();
  if(  $(".bgColorArea").css("display")=='none'){
      $(".bgColorArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".bgColorArea").css("display")=='block'){
      $(".bgColorArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(2).click(function(){
  
    $(".bgOptionsArea").siblings().hide();
  if(  $(".bgOptionsArea").css("display")=='none'){
      $(".bgOptionsArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".bgOptionsArea").css("display")=='block'){
      $(".bgOptionsArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(3).click(function(){
  
    $(".clipArea").siblings().hide();
  if(  $(".clipArea").css("display")=='none'){
      $(".clipArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".clipArea").css("display")=='block'){
      $(".clipArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(4).click(function(){
  
    $(".textArea").siblings().hide();
  if(  $(".textArea").css("display")=='none'){
      $(".textArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".textArea").css("display")=='block'){
      $(".textArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(5).click(function(){
  
    $(".uploadArea").siblings().hide();
  if(  $(".uploadArea").css("display")=='none'){
      $(".uploadArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.9)");
  }else if( $(".uploadArea").css("display")=='block'){
      $(".uploadArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
/*cardSizeBtn.addEventListener("click",function(){
    if($(".cardSizeArea").css("display")=='none'){
    cardSizeArea.classList.add("show");}
                             else if($(".cardSizeArea").css("display")=='block'){
                            cardSizeArea.classList.remove("show");
                             }
    console.log(cardSizeArea.classList)
})

$("#bgColorBtn").click(function(){
    ///Lindaa// aw n3ml toggle ??
    if($(".cardSizeArea").css("display")=='block')
    {
        cardSizeArea.classList.remove("show");
//        $(".cardSizeArea").siblings().css({"color": "black"});
    }
    /////////
  if($(".bgColorArea").css("display")=='none'){
    bgColorArea.classList.add("show");}
                             else if($(".bgColorArea").css("display")=='block'){
                            bgColorArea.classList.remove("show");
                             }
        console.log(cardSizeArea.classList)

})*/
$("#clipBtn").click(function(){
  if($(".clipArea").css("display")=='none'){
    clipArea.classList.add("show");}
                             else if($(".clipArea").css("display")=='block'){
                            clipArea.classList.remove("show");
                             }
        console.log(clipArea.classList)

})
//************Linda****************//


$( document ).ready(function() {
    var canvas = new fabric.Canvas('c');
    var rect = new fabric.Rect({
  left: 0,top: 0,selectable:false     
});
$("#size48").click(function(){
  
    canvas.setWidth(384);
    canvas.setHeight(768);
    canvas.renderAll();
    
});
$("#size57").click(function(){
    
    canvas.setWidth(480);
    canvas.setHeight(672);
    canvas.renderAll();
    
});
$("#size554").click(function(){
 
    canvas.setWidth(528);
    canvas.setHeight(384);
    canvas.renderAll();
    
});
$("#size69").click(function(){
    
    canvas.setWidth(576);
    canvas.setHeight(864);
    canvas.renderAll();
});

$(".red").click(function(){
    console.log("red");
    canvas.backgroundColor="red";
    canvas.renderAll();
});
$(".green").click(function(){
    console.log("green");
    canvas.backgroundColor="green";
    canvas.renderAll();
});    
$(".yellow").click(function(){
    console.log("y");
    canvas.backgroundColor="yellow";
    canvas.renderAll();
});
$(".white").click(function(){
    console.log("white");
    canvas.backgroundColor="white";
    canvas.renderAll();
});
$(".purple").click(function(){
    canvas.backgroundColor="purple";
    canvas.renderAll();
});
$(".blue").click(function(){
    canvas.backgroundColor="blue";
    canvas.renderAll();
});
$(".pink").click(function(){
    canvas.backgroundColor="hotpink";
    canvas.renderAll();
});    
$(".black").click(function(){
    canvas.backgroundColor="black";
    canvas.renderAll();
});
$(".grey").click(function(){
    canvas.backgroundColor="gray";
    canvas.renderAll();
});
$(".orange").click(function(){
    canvas.backgroundColor="orange";
    canvas.renderAll();
});    
$(".brown").click(function(){
    canvas.backgroundColor="brown";
    canvas.renderAll();
});
$(".lightblue").click(function(){
    canvas.backgroundColor="lightblue";
    canvas.renderAll();
});         
$('.colorPicker').on('input', function() {        canvas.backgroundColor=$(".colorPicker").val();
    canvas.renderAll(); 
                                         } ) ;   
    
$('#clearBackground').click(function(){
    canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
    canvas.remove(rect);
});

$('.transparentRange').on('input',function(){
    canvas.opacity=$('.transparentRange').val();
    console.log("canvasOpacity"+canvas.opacity);
}); 
$('#applyGrad').click(function(){
    rect.set('width', canvas.getWidth());
    rect.set('height', canvas.getHeight());
   
        if( $("#Radio1").is(":checked") ){ 
            rect.setGradient('fill', {
              x1: 0,
              y1: rect.height,
              x2: rect.width,
              y2: rect.height,
              colorStops: {
                0: $(".g1ColorPicker").val(),
                1: $(".g2ColorPicker").val()
              }
            });
        }
        else if( $("#Radio2").is(":checked") ){ 
            rect.setGradient('fill', {
              x1: 0,
              y1: rect.height,
              x2: rect.width,
              y2: rect.height,
              colorStops: {
                0: $(".g2ColorPicker").val(),
                1: $(".g1ColorPicker").val()
              }
            });
        } 
        else{
          rect.setGradient('fill', {
              x1: 0,
              y1: rect.height,
              x2: rect.width,
              y2: rect.height,
              colorStops: {
                0: $(".g1ColorPicker").val(),
                1: $(".g2ColorPicker").val()
              }
            });   
    }
    canvas.add(rect);
    canvas.sendToBack(rect);
    canvas.renderAll();
    canvas.renderAll.bind(canvas);   
}) ; 

$('.cleanEditor').click(function(){
    canvas.clear();
}); 

$('.clipArtsSelector').change(function() {
    $("option:selected").each(function(){
        var value=$(this).val();
        console.log(value);
        var x="."+value+"Arts";
//        console.log(x);
        $(x).show();
        $(x).siblings().not(".form-group").hide();
        
//        $('img').click(function(){
//            var path=this.src;
////            console.log(this.src);
//            fabric.Image.fromURL(path,function(img){
//                canvas.add(img);
//            })
//        })
    });
  
});  
$("option:selected").each(function(){
    
        $('img').click(function(){
            var path=this.src;
            fabric.Image.fromURL(path,function(img){
                canvas.add(img);
            })
        }) 
});    

$('.eraser').click(function(){
    canvas.remove(canvas.getActiveObject());
});

$('.copy').click(function(){   
   
//    console.log(canvas.getActiveObject());
    var img=canvas.getActiveObject();
    var src=img._originalElement.currentSrc;
    fabric.Image.fromURL(src,function(img){
                canvas.add(img);
            });
  
}); 
$('.locked').click(function(){
    var img=canvas.getActiveObject();
    img.lockMovementX=true;
    img.lockMovementY=true;
    
});
$('.unlocked').click(function(){
    var img=canvas.getActiveObject();
    img.lockMovementX=false;
    img.lockMovementY=false;
    
});
//$('.forward').click(function(){
//    var img=canvas.getActiveObject();
//    console.log(canvas.getActiveObject())
//    canvas.bringForward(img);
//    
//})
//$('.backward').click(function(){
//    canvas.bringToFront(canvas.getActiveObject());
//})
document.getElementById('imgLoader').onchange = function handleImage(e) {
var reader = new FileReader();
  reader.onload = function (event){
    var imgObj = new Image();
    imgObj.src = event.target.result;
    imgObj.onload = function () {
      var image = new fabric.Image(imgObj);
      image.set({
            angle: 0,
            padding: 10,
            cornersize:10,
            height:110,
            width:110,
      });
      canvas.centerObject(image);
      canvas.add(image);
      canvas.renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}    
$("#download").click(function(){
    $("#c").get(0).toBlob(function(blob){
        saveAs(blob,"InvitationCard.png");
    });
});    
});