
var lis=$(".menueOptions li");
lis.eq(0).click(function(){
  
    $(".cardSizeArea").siblings().hide();
  if(  $(".cardSizeArea").css("display")=='none'){
      $(".cardSizeArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".cardSizeArea").css("display")=='block'){
      $(".cardSizeArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(1).click(function(){
  
    $(".bgColorArea").siblings().hide();
  if(  $(".bgColorArea").css("display")=='none'){
      $(".bgColorArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".bgColorArea").css("display")=='block'){
      $(".bgColorArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(2).click(function(){
  
    $(".bgOptionsArea").siblings().hide();
  if(  $(".bgOptionsArea").css("display")=='none'){
      $(".bgOptionsArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".bgOptionsArea").css("display")=='block'){
      $(".bgOptionsArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(3).click(function(){
  
    $(".clipArea").siblings().hide();
  if(  $(".clipArea").css("display")=='none'){
      $(".clipArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".clipArea").css("display")=='block'){
      $(".clipArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(4).click(function(){
  
    $(".textCustArea").siblings().hide();
  if(  $(".textCustArea").css("display")=='none'){
      $("#firstPage").siblings().hide();
      $("#firstPage").show();
      $(".textCustArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".textCustArea").css("display")=='block'){
      $(".textCustArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
})
lis.eq(5).click(function(){
  
    $(".uploadArea").siblings().hide();
  if(  $(".uploadArea").css("display")=='none'){
      $(".uploadArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
  }else if( $(".uploadArea").css("display")=='block'){
      $(".uploadArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
  }
    
});
//$("#clipBtn").click(function(){
//  if($(".clipArea").css("display")=='none'){
//    clipArea.classList.add("show");}
//                             else if($(".clipArea").css("display")=='block'){
//                            clipArea.classList.remove("show");
//                             }
//        console.log(clipArea.classList)
//
//})
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
$(".clipArea option:selected").each(function(){
      console.log("option selected 1");
        $('.clipArea img').click(function(){
            var path=this.src;
            fabric.Image.fromURL(path,function(img){
                canvas.add(img);
                console.log("img added");
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
/*--------------shimaa---------------------*/
     var myText=$("#myText");
   
    
$("#add").click(function(){
    var text = new fabric.Text(myText.val(), { left: 0, top: 0 ,fontSize: fSize.val(),lineHeight:0.7
//                                              ,strokeWidth:0
//                                              ,stroke:'#f59'
//                                             ,shadow: 'white -5px -5px 3px'
      });
   canvas.add(text);
    $("#firstPage").hide(500,function(){
        $("#secPage").show(500);
    });
});
var fSize=$("#fSize");
$("#fSize").change(function(){
   
    console.log(typeof(fSize.val()));
    canvas.getActiveObject().set("fontSize", parseInt(fSize.val()));
    canvas.renderAll();   
    
});
$("#lineHeight").change(function(){
console.log(fSize.val());
    $("#lineHeight option:selected").each(function(){
        var op=$(this).val();
        console.log(parseFloat(op));
         canvas.getActiveObject().set("lineHeight", parseFloat(op));
    

    });
   
    canvas.renderAll();   
    
});
$("#fColor").change(function(){
    var color=$(this).val();
    console.log(color);
    canvas.getActiveObject().set("fill", color);
    canvas.renderAll();   
    
});

$("#bgColor").change(function(){
    var bgColor=$(this).val();
    console.log(bgColor);
    canvas.getActiveObject().set("backgroundColor", bgColor);
    canvas.renderAll();    
});
$("#sColor").change(function(){
    var scolor=$(this).val();
    console.log(scolor);
    canvas.getActiveObject().set("stroke", scolor);
    canvas.renderAll();   
    
});
$("#sWidth").change(function(){
//console.log(fSize.val());
    $("#sWidth option:selected").each(function(){
        var strOp=$(this).val();
        
        canvas.getActiveObject().set("strokeWidth", parseInt(strOp)); 
        canvas.renderAll(); 
    });   
});
    
    
        $('#font').fontselect().change(function(){
        
          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');
          
          // split font into family and weight
          font = font.split(':');
          
          // set family on paragraphs 
            console.log(canvas.getActiveObject());
            var x=canvas.getActiveObject();
          x.set({fontFamily:font[0]});
                    canvas.renderAll(); 
            console.log(canvas.getActiveObject());

        });
    
        
/** last edit on text alter font**/
$("#back").click(function(){
   /* console.log(myText.val());
            var text = new fabric.Text(myText.val(), { left: 100, top: 100 ,shadow: 'white -5px -5px 3px',fontStyle: 'italic',fontSize: fSize.val()});
           canvas.add(text);*/
    $("#secPage").hide(500,function(){
        $("#firstPage").show(500);
    });    
});
    $("#next").click(function(){
   /* console.log(myText.val());
            var text = new fabric.Text(myText.val(), { left: 100, top: 100 ,shadow: 'white -5px -5px 3px',fontStyle: 'italic',fontSize: fSize.val()});
           canvas.add(text);*/
    $("#firstPage").hide(500,function(){
        $("#secPage").show(500);
    });    
});
    
    
 /*----------tooltip-------------*/
    /****tooltip function fire****/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/****textlist editor***/
 var object = {
   id:   this.id,
   //remaining properties in all.js
  }
 $("#bold").click(function(){
     if(canvas.getActiveObject().get("fontWeight")=='normal')
              { canvas.getActiveObject().set("fontWeight", 'bold');}
     else if(canvas.getActiveObject().get("fontWeight")=='bold'){
         canvas.getActiveObject().set("fontWeight", 'normal');
     }
    canvas.renderAll();       
                  })
$("#italic").click(function(){
    console.log("italic")
    var obj=canvas.getActiveObject();
    if(obj.get('fontStyle')!='italic'){
               obj.set('fontStyle', 'italic');}
    else if(obj.get('fontStyle')=='italic'){
         obj.set('fontStyle', 'normal');
     }
    canvas.renderAll();       
                  })
$("#strike").click(function(){
    console.log('hi')
    if( canvas.getActiveObject().get("throughline")==false){
               canvas.getActiveObject().set({
               underline: false,
              overline: false,
              throughline: true});}
    else if( canvas.getActiveObject().get("textDecoration")==true){
               canvas.getActiveObject().set({
               underline: false,
              overline: false,
              throughline: false});}
    canvas.renderAll();       
                  })
$("#overLine").click(function(){
             if( canvas.getActiveObject().get("textDecoration")!="overline"){              canvas.getActiveObject().set("textDecoration","overline");}
    else if( canvas.getActiveObject().get("textDecoration")=="overline"){
              canvas.getActiveObject().set("textDecoration","none");}
  
    canvas.renderAll();       
                  });

$("#underLine").click(function(){
               if( canvas.getActiveObject().get("textDecoration")!="underline"){
               canvas.getActiveObject().set("textDecoration","underline");}
    else if( canvas.getActiveObject().get("textDecoration")=="underline"){
               canvas.getActiveObject().set("textDecoration","none");}   
    canvas.renderAll();       
                  });
    $("#lineThrough").click(function(){
                if( canvas.getActiveObject().get("textDecoration")!="line-through"){
               canvas.getActiveObject().set("textDecoration","line-through");}
    else if( canvas.getActiveObject().get("textDecoration")=="line-through"){
               canvas.getActiveObject().set("textDecoration","none");}   
    canvas.renderAll();       
                  });
$("#noLine").click(function(){
            canvas.getActiveObject().set("textDecoration","none");
    canvas.renderAll();       
                  });
    $("#leftLine").click(function(){
        
        canvas.getActiveObject().setTextAlign("left");
        canvas.renderAll(); 
    });
    $("#centerLine").click(function(){
        canvas.getActiveObject().setTextAlign("center");
        canvas.renderAll(); 
    });
    $("#rightLine").click(function(){
        canvas.getActiveObject().set("textAlign","right");
        canvas.renderAll(); 
    });
    
	
$("#copybtn").click(function(){
    canvas.getActiveObject().clone(function(cloned) {
		_clipboard = cloned;
	});
    //paste
    // clone again, so you can do multiple copies.
	_clipboard.clone(function(clonedObj) {
		canvas.discardActiveObject();
		clonedObj.set({
			left: clonedObj.left + 10,
			top: clonedObj.top + 10,
			evented: true,
		});
		if (clonedObj.type === 'activeSelection') {
			// active selection needs a reference to the canvas.
			clonedObj.canvas = canvas;
			clonedObj.forEachObject(function(obj) {
				canvas.add(obj);
			});
			// this should solve the unselectability
			clonedObj.setCoords();
		} else {
			canvas.add(clonedObj);
		}
		_clipboard.top += 10;
		_clipboard.left += 10;
		canvas.setActiveObject(clonedObj);
		canvas.renderAll();
	});

});

});
//$(window).scroll(function(){
//
//   if($(window).scrollTop()>500)
//    {
//    $(".nevs").css("backgroundColor","white");
//    $(".nevs li a").css("color","#000");
//    $('.form-inline').css("border-left","rgba(0,0,0,0.5) 1px solid");
//    $('.logo').attr("src","images/darklogo.png");
//        
//    }
//    else if($(window).scrollTop()<500){
//        
//    $(".nevs").css("backgroundColor","white");
//    $('.nevs').css("border-bottom","1px solid rgba(0,0,0,0.1) ")    
//     $(".nevs li a").css("color","#000");
//    $('.form-inline').css("border-left","rgba(0,0,0,0.5) 1px solid");
//    $('.logo').attr("src","images/darklogo.png");
//    }
//
//});
