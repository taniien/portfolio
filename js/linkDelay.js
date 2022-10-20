$(function(){
    $("a").click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 500);
    });
});