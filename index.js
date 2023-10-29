var namee=""
var crushe=""




$(".name").keypress(function(event){
    console.log(event.key);
    namee=event.key;
})
$(".crush").keypress(function(event){
    console.log(event.key);
    crushe=event.key;
})



$("button").click(function(){
    if(namee!="" && crushe!=""){
    var num=Math.floor(Math.random()*100);
    $("button").addClass("st");
    setTimeout(function(){
        $("button").removeClass("st");
    },30);
    $("button").text(num+"%");
    setTimeout(function(){
        if(num<50){
            alert("You deserve better💔");
        }
        if(num>=50 && num<75){
            alert("You have a chance🤷‍♂️")
        }
        if(num>=75){
            alert("You found your soulmate💐💐💐")
        }
    },100);
}
    
});

$("button").mouseover(function(){
    if(namee!="" && crushe!=""){
        $("button").addClass("hove");
    }
});