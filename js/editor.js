
var lis=$(".menueOptions li");
lis.eq(0).click(function(e){
  
    $(".cardSizeArea").siblings().hide();
  if(  $(".cardSizeArea").css("display")=='none'){
      $(".cardSizeArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
      lis.eq(0).css("color","rgb(190, 98, 166)");
    lis.eq(0).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".cardSizeArea").css("display")=='block'){
      $(".cardSizeArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
         lis.eq(0).css("color","rgba(255,255,255)");

  }
    
})
lis.eq(1).click(function(){
  
    $(".bgColorArea").siblings().hide();
  if(  $(".bgColorArea").css("display")=='none'){
      $(".bgColorArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
        lis.eq(1).css("color","rgb(190, 98, 166)");
    lis.eq(1).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".bgColorArea").css("display")=='block'){
      $(".bgColorArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
        lis.eq(1).css("color","rgba(255,255,255)");

  }
    
})
lis.eq(2).click(function(){
  
    $(".bgOptionsArea").siblings().hide();
  if(  $(".bgOptionsArea").css("display")=='none'){
      $(".bgOptionsArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
        lis.eq(2).css("color","rgb(190, 98, 166)");
    lis.eq(2).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".bgOptionsArea").css("display")=='block'){
      $(".bgOptionsArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
        lis.eq(2).css("color","rgba(255,255,255)");

  }
    
})
lis.eq(3).click(function(){
  
    $(".clipArea").siblings().hide();
  if(  $(".clipArea").css("display")=='none'){
      $(".clipArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
      lis.eq(3).css("color","rgb(190, 98, 166)");
    lis.eq(3).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".clipArea").css("display")=='block'){
      $(".clipArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
        lis.eq(3).css("color","rgba(255,255,255)");

  }
    
})
lis.eq(4).click(function(){
  
    $(".textCustArea").siblings().hide();
  if(  $(".textCustArea").css("display")=='none'){
      $("#firstPage").siblings().hide();
      $("#firstPage").show();
      $(".textCustArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
        lis.eq(4).css("color","rgb(190, 98, 166)");
    lis.eq(4).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".textCustArea").css("display")=='block'){
      $(".textCustArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
       lis.eq(4).css("color","rgba(255,255,255)");

  }
    
})
lis.eq(5).click(function(){
  
    $(".uploadArea").siblings().hide();
  if(  $(".uploadArea").css("display")=='none'){
      $(".uploadArea").show();
      $(".optionList").css("backgroundColor","rgba(65,0,73,.8)");
      lis.eq(5).css("color","rgb(190, 98, 166)");
    lis.eq(5).siblings().css("color","rgb(255, 255, 255)");

  }else if( $(".uploadArea").css("display")=='block'){
      $(".uploadArea").hide();
      $(".optionList").css("backgroundColor","rgba(255,255,255)");
      lis.eq(5).css("color","rgba(255,255,255)");

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
$('#clearGrad').click(function(){
    console.log("ClearGradiant");
    canvas.remove(rect);
    canvas.renderAll();
    canvas.renderAll.bind(canvas);
});
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

   
//    console.log(canvas.getActiveObject());
//    var img=canvas.getActiveObject();
//    var src=img._originalElement.currentSrc;
//    fabric.Image.fromURL(src,function(img){
//                canvas.add(img);
//            });
  
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
    canvas.deactivateAll().renderAll();
    $("#c").get(0).toBlob(function(blob){
//        console.log(blob)
        0.99
        blob.crossOrigin="Anonymous";
        saveAs(blob,"InvitationCard.jpg");
    });
});
$("#save").click(function(){
//        image=canvas.toSVG();
        var image = new Image();
        image.id = "pic";  
        image.src = canvas.toDataURL();
    
        var i=localStorage.length;
        var x=Math.floor(Math.random() * 10000) + 1  ;
        localStorage.setItem('savedimg'+x, image.src);
       
    $(".alert").show();
        setTimeout(function(){ $(".alert").fadeOut(2000); }, 1000);
});
   
/*--------------shimaa---------------------*/
     var myText=$("#myText");
   
    
$("#add").click(function(){
    var text = new fabric.Text(myText.val(), { left: 0, top: 0 ,fontSize: fSize.val(),lineHeight:0.7,fontFamily:"'Dancing Script', cursive"
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
//$("#noLine").click(function(){
//            canvas.getActiveObject().set("textDecoration","none");
//    canvas.renderAll();       
//                  });
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
    
	
//$("#copybtn").click(function(){
//});
//
canvas.on("object:selected", function(e){
    console.log(e.target.get('type'));
    console.log(typeof(e.target.get('type')));
    if(e.target.get('type')=="text"){
          $("#editTextList").css("display","block");
    }
    else{
        $("#editTextList").css("display","none");
    }
});
    /*--------------popup----------------------*/
var lightBoxContainer=document.querySelector(".lightbox-container") ;
var lightBoxItem = document.querySelector(".lightbox-item");
var clr= document.querySelector(".light-close");
var loginCard=document.querySelector(".login-card");
    var regCard=document.querySelector(".reg-card")

var loginLink=document.querySelector(".loginLink a");
    console.log(loginLink);
    var logBtn=document.querySelector("#logBtn");
logBtn.addEventListener("click",function(event){
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
/*-----------------scroll linda------------------*/
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
/*--------------------redo,undo----------------------------*/
////canvas.isDrawingMode = true;
//
////    canvas.getActiveObject(function(){
//  if(canvas.getActiveObject()){
//    h = [];
//      console.log("f1")
//  }
////  isRedoing = false;
////});
////
////var isRedoing = false;
//var h = [];
//$("#undo").click(function(){
//  if(canvas._objects.length>0){
//      console.log("fu")
//   h.push(canvas._objects.pop());
//            console.log(h)
//
//   canvas.renderAll();
//  }
//});
//$("#redo").click(function(){
//  console.log("fr")
//  if(h.length>0){
////    isRedoing = true;
//      console.log("frt")
//   canvas.add(h.pop());
//            console.log(h)
//
//  }
//});
    
 /*------ANOTHER CODE BUT NOT WORK-----------*/   
//     	var _config = {
// 		canvasState             : [],
// 		currentStateIndex       : -1,
// 		undoStatus              : false,
// 		redoStatus              : false,
// 		undoFinishedStatus      : 1,
// 		redoFinishedStatus      : 1,
//     undoButton              : document.getElementById('undo'),
// 		redoButton              : document.getElementById('redo'),
// 	};
//     canvas.on(
// 		'object:modified', function(){
// 	  		updateCanvasState();
// 		}
// 	);
  
//   canvas.on(
// 		'object:added', function(){
// 	  		updateCanvasState();
// 		}
// 	);
//     	var updateCanvasState = function() {
// 		if(_config.undoStatus == false && _config.redoStatus == false){
// 			var jsonData        = canvas.toJSON();
// 			var canvasAsJson        = JSON.stringify(jsonData);
// 			if(_config.currentStateIndex < _config.canvasState.length-1){
// 				var indexToBeInserted                  = _config.currentStateIndex+1;
// 				_config.canvasState[indexToBeInserted] = canvasAsJson;
// 				var numberOfElementsToRetain           = indexToBeInserted+1;
// 				_config.canvasState                    = _config.canvasState.splice(0,numberOfElementsToRetain);
// 			}else{
// 	    	_config.canvasState.push(canvasAsJson);
// 			}
// 	    _config.currentStateIndex = _config.canvasState.length-1;
//       if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
//         _config.redoButton.disabled= "disabled";
//       }
// 		}
// 	}

 
// 	var undo = function() {
// 		if(_config.undoFinishedStatus){
// 			if(_config.currentStateIndex == -1){
// 	    	_config.undoStatus = false;
// 			}
// 			else{
// 		    if (_config.canvasState.length >= 1) {
//         	_config.undoFinishedStatus = 0;
// 		      if(_config.currentStateIndex != 0){
// 			    	_config.undoStatus = true;
// 			      canvas.loadFromJSON(_config.canvasState[_config.currentStateIndex-1],function(){
// 								var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex-1]);
// 					    	canvas.renderAll();
// 			      		_config.undoStatus = false;
// 			      		_config.currentStateIndex -= 1;
// 								_config.undoButton.removeAttribute("disabled");
// 								if(_config.currentStateIndex !== _config.canvasState.length-1){
// 									_config.redoButton.removeAttribute('disabled');
// 								}
// 							_config.undoFinishedStatus = 1;
// 		      	});
// 		      }
// 		      else if(_config.currentStateIndex == 0){
//  		      	canvas.clear();
// 						_config.undoFinishedStatus = 1;
// 						_config.undoButton.disabled= "disabled";
// 						_config.redoButton.removeAttribute('disabled');
// 		      	_config.currentStateIndex -= 1;
// 		      }
// 		    }
// 			}
// 		}
// 	}
  
// 	var redo = function() {
// 		if(_config.redoFinishedStatus){
// 			if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
// 				_config.redoButton.disabled= "disabled";
// 			}else{
// 		  	if (_config.canvasState.length > _config.currentStateIndex && _config.canvasState.length != 0){
// 					_config.redoFinishedStatus = 0;
// 		    	_config.redoStatus = true;
// 		      canvas.loadFromJSON(_config.canvasState[_config.currentStateIndex+1],function(){
// 							var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex+1]);
// 				    	canvas.renderAll();
// 			    		_config.redoStatus = false;
// 		      		_config.currentStateIndex += 1;
// 							if(_config.currentStateIndex != -1){
// 								_config.undoButton.removeAttribute('disabled');
// 							}
// 						_config.redoFinishedStatus = 1;
//             if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
//               _config.redoButton.disabled= "disabled";
//             }
// 		      });
// 		    }
// 			}
// 		}
// 	}
  
    
//  	return {
// 		undoButton : _config.undoButton,
// 		redoButton : _config.redoButton,
// 		undo       : undo,
// 		redo       : redo,
//   }


  


  
//   undoButton.addEventListener('click',function(){
// 		undo;
// 	});

// 	redoButton.addEventListener('click',function(){
// 		redo;
// 	});


/*--------------------------------------BY ME----------------------------*/
//var current;
//var list = [];
//var state = [];
//var index = 0;
//var index2 = 0;
//var action = false;
//var refresh = true;
//
//canvas.on("object:added", function (e) { //canvas -object of canvas tag
//var object = e.target;
//if (action === true) {
//state = [state[index2]];
//list = [list[index2]];
//action = false;
//index = 1;
//}
//object.saveState(); //save object
//state[index] = JSON.stringify(object.originalState);
//list[index] = object;
//index++;
//index2 = index -1;
//refresh = true;
//});
//
//canvas.on("object:modified", function (e) {
//var object = e.target;
//if (action === true) {
//state = [state[index2]];
//list = [list[index2]];
//action = false;
//index = 1;
//}
//object.saveState();
//state[index] = JSON.stringify(object.originalState);
//list[index] = object;
//index++;
//index2 = index -1;
//refresh = true;
//});
//
//$("#undo").click(function(){
//    if (index <= 0) {
//    index = 0;
//    return;
//    }
//    
//    if (refresh === true) {
//    index--;
//    refresh = false;
//    }
//    
//    index2 = index -1;
//    current = list[index2];
//    console.log("shimaa check")
//    console.log(JSON.stringify(state[index2]))
//    // current.setOptions(JSON.stringify(state[index2]));
//    index--;
//    current.setCoords();
//    canvas.renderAll();
//    action = true;
//    }); 
//
//
//    $("#redo").click(function(){
//action = true;
//if (index >= state.length -1) {
//return;
//}
//
//index2 = index + 1;
//current = list[index2];
//
//// current.setOptions(JSON.stringify(state[index2]));
//index++;
//current.setCoords();
//canvas.renderAll();
//});
            
  
 });