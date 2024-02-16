var ren= [];
var input;
$(".add").click(function(){
        input = $(".picture-url").val();
        ren.push(input);
        $(".gallery").append("<img src= '" + ren +"'>");
    $(".picture-url").val("");
});
$(".bye").click(function() {
    $("img:last").remove();
});