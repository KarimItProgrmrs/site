$(document).ready(function(){
    $(".header-burger").click(function(event){
        $(".menu-left,.menu-right,.header-burger,.intro-links").toggleClass("active");
    }); 
    $(function(){
        $(".slider").slick({
            arrows:false, 
            dots:true, 
            autoplay:true, 
            autoplaySpeed:3000, 
            speed:1200, 
            // draggable:false,
            fade:true,
        })
    })
    $(".title-map").click(function(event){
        $(".map-map").addClass("active")
    })
});
    function slowScroll(id){
        var offset=0;
        $('html,body').animate({
            scrollTop: $(id).offset().top-offset
        }, 1000);
        return false;
    }
