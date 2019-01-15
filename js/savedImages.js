
function displayCards(){   
var row=document.getElementById("savedCardsRow");
var cont="";    
      console.log("Local Storage Len "+localStorage.length);
    for (var i=0;i<localStorage.length;i++)
        {
            var image =localStorage.getItem(localStorage.key(i));
//            console.log(image);
//            localStorage.getItem('savedimg'+i);
           cont+=" <div class='col-md-4 my-2'><img  id='img"+(i)+"' class='img-fluid w-75' src="+image+" /><p class='mt-3'><a href='javascript:void(0)'onclick='removeCard("+i+")'>Remove</a></p></div>"    
        }
    
    row.innerHTML=cont;
    
};
displayCards();
    
function removeCard(idx){
    console.log("Removed"+idx)  

    localStorage.removeItem(localStorage.key(idx));
    displayCards();
}
