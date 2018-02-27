function addLoadEvent(func){
var oldonload=window.onload;
if(typeof window.onload!='function')
    window.onload = func;
else
    window.onload=function(){
      if(oldonload)
        oldonload();
      func();
      }
}

addLoadEvent(function(){
    var inpMessage="cerca nel sito...";
    var el=document.getElementById("search-in");
    el.value=inpMessage;
    el.onclick=function(){if(el.value==inpMessage) el.value=""}
    el.onblur=function(){if(el.value=="") el.value=inpMessage}
    });
