$(function(){
    var link=document.createElement("link");
    link.rel="stylesheet";
    link.href="css/header.css";
    document.head.appendChild(link);
    $("#footer").load("footer.html",function(html){
        document.getElementById("footer").innerHTML=html;
    })
});

