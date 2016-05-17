$(document).ready(function() {
    var read = function(){
        var content = 'https://www.google.com/webhp?hl=en#hl=en&q=' + $('.content').val();
        var url = encodeURI(content);
        window.location.href = url;
        $('.content').val() = "";
    }
    $('.search').click(function() {
        read();
    });
    $('.feeling').click(function() {
        window.location.href = "https://www.google.com/doodles/";
    });
    $('.content').keydown(function() {
        if(event.keyCode =='13') {
            read();
        }
    });
    $('.nine').click(function() {
        if ($('.hide').css('display') === "none") {
            $('.hide').show();
            $('.triangle').show();
            $('.extrabar').show();
            $('.extracontent').hide();
            $('.separator').hide();
        } else {
            $('.hide').hide();
            $('.triangle').hide();
        };
        event.stopPropagation(); 
    });
    $('.hide').click(function() {
        event.stopPropagation(); 
    });
    $('.triangle').click(function() {
        event.stopPropagation(); 
    });
    $('.mic').mouseover(function() {
        $('.smalltriangle').show();
        $('.note').show();
    });
    $('.mic').mouseout(function() {
        $('.smalltriangle').hide();
        $('.note').hide();
    });
    $(document).click(function() {
        $('.hide').hide();
        $('.triangle').hide();
    });
    $('.hide').scroll(function() {
        if ($('.hide').scrollTop() > 0) {
            $('.extrabar').hide();
            $('.extracontent').show();
            $('.separator').show();
            $('.extra').css('height','440px');
            if ($('.hide').scrollTop() == 320) {
                $('.extracontent').css('border-bottom','1px solid #cccccc');
                $('.hide').css('border-bottom','0px');
            } else {
                $('.hide').css('border-bottom','1px solid #cccccc');
            };
        } else {
            $('.extra').css('height','500px');
            $('.extrabar').show();
            $('.extracontent').hide();
            $('.separator').hide();
        };
    });
    $('.extrabar').click(function() {
        $('.extrabar').hide();
        $('.extracontent').show();
        $('.separator').show();
        $('.extra').css('height','440px');
        $('.hide').scrollTop(320);
        $('.extracontent').css('border-bottom','1px solid #cccccc');
    });
});