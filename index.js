var namee=""
var crushe=""




$(".name").keypress(function(event){
    namee=event.key;
})
$(".crush").keypress(function(event){
    crushe=event.key;
})



$("button").on("click touchstart",function(){
    if(namee!="" && crushe!=""){
    var num=Math.floor(Math.random()*100);
    $("button").addClass("st");
    setTimeout(function(){
        $("button").removeClass("st");
    },30);
    $("button").text(num+"%");
    setTimeout(function(){
        if(num<50){
            $("h3").text("You deserve better💔");
            alert("You deserve better💔");
        }
        if(num>=50 && num<75){
            $("h3").text("You have a chance🤷‍♂️");
            alert("You have a chance🤷‍♂️");
        }
        if(num>=75){
            $("h3").text("You found your soulmate💐💐💐");
            alert("You found your soulmate💐💐💐");
        }
    },100);
}
    
});

$("button").mouseover(function(){
    if(namee!="" && crushe!=""){
        $("button").addClass("hove");
    }
});
