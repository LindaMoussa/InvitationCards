
function displayCards(){   
var row=document.getElementById("savedCardsRow");
var cont="";    
      console.log("Local Storage Len "+localStorage.length);
    for (var i=0;i<localStorage.length;i++)
        { if(localStorage.key(i).includes("savedimg"))
        {
              var image =localStorage.getItem(localStorage.key(i));
              console.log(typeof(localStorage.key(i)));
    //            console.log(image);
    //            localStorage.getItem('savedimg'+i);
               cont+=" <div class='col-md-4 my-2'><img  id='img"+(i)+"' class='img-fluid w-75' src="+image+" /><p class='mt-3'><a href='javascript:void(0)'onclick='removeCard("+i+")'>Remove</a></p></div>"    
            }
        }
    
    row.innerHTML=cont;
    
};
displayCards();
    
function removeCard(idx){
    console.log("Removed"+idx)  

    localStorage.removeItem(localStorage.key(idx));
    displayCards();
}
if(localStorage.getItem('UserName'))
    {
        $('#name').html(localStorage.getItem('UserName'));
    }
if(localStorage.getItem('UserEmail'))
    {
        $('#email').html(localStorage.getItem('UserEmail'));
    }
if(localStorage.getItem('UserBio'))
    {
        $('#bio').html(localStorage.getItem('UserBio'));
    }
$("#editBtnName").click(function(){
    
    $("#editUserName").css("display","block");
    $("#name").css("display","none");
    $("#editBtnName").css("display","none");
    $("#doneBtnName").css("display","block");
    $("#doneBtnName").click(function(){
          
    var name = $('#editUserName').val();
    if (name.length > 0)
    {
        $('#name').html(name);
        $("#editUserName").css("display","none");
        $("#name").css("display","block");
        $("#editBtnName").css("display","block");
        $("#doneBtnName").css("display","none");
        localStorage.setItem('UserName', name);
    }
    else{
        alert("Please enter your name")
        }
    })
 
});

$("#editBtnEmail").click(function(){
    
    $("#editUserEmail").css("display","block");
    $("#email").css("display","none");
    $("#editBtnEmail").css("display","none");
    $("#doneBtnEmail").css("display","block");
    $("#doneBtnEmail").click(function(){
          
    var email = $('#editUserEmail').val();
    if (email.length > 0)
    {   
        console.log(email)
        $('#email').html(email);
        $("#editUserEmail").css("display","none");
        $("#email").css("display","block");
        $("#editBtnEmail").css("display","block");
        $("#doneBtnEmail").css("display","none");
        localStorage.setItem('UserEmail', email);  
    }
    else{
        alert("Please enter your email")
        }
    })
 
});

$("#editBtnBio").click(function(){
    
    $("#editUserBio").css("display","block");
    $("#bio").css("display","none");
    $("#editBtnBio").css("display","none");
    $("#doneBtnBio").css("display","block");
    $("#doneBtnBio").click(function(){
          
    var bio = $('#editUserBio').val();
    if(bio.length >0)
    { 
        console.log(bio)
        $('#bio').html(bio);
        $("#editUserBio").css("display","none");
        $("#bio").css("display","block");
        $("#editBtnBio").css("display","block");
        $("#doneBtnBio").css("display","none");
         localStorage.setItem('UserBio', bio);   
    }
    else
    {
        alert("Please enter your bio")
    }
    })
 
});
//$("#changeProfile").click(function(){
//    $('input[type=file]').trigger('click');
//    $('input[type=file]').change(function() {
//    var vals = $(this).val(), val = vals.length ? vals.split('\\').pop() : '';
//
//    $('input[type=text]').val(val);
//        $(".profile img").attr('src',val)
//        var filePath = $(this).val();
//        console.log(filePath);
// 
//});
//})

