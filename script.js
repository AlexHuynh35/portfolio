/*global $*/
var x = 0;
$(".headshot").click(function(){
    var colors=["white","red","orange","yellow","green","blue","purple"]
    if(x < colors.length){
        x = x + 1;
        $("body").css("background",colors[x])
    }else{
        x = 0;
        $("body").css("background",colors[x])
    }
});
$("#name").click(function(){
    $(".headshot").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AS_8TlTZOnJyCowNHa10OvVdRuQaRU1Qi_ATzrQGJHW8hk7wcA");
});