$(document).ready(function() {
    var read = function(){
        var content = 'https://www.google.com/webhp?hl=en#hl=en&q=' + $('.content').val();
        var url = encodeURI(content);
        window.location.href = url;
        $('.content').val() = "";
    }
    $('.search').click(function(){
        read();
    });
    $('.feeling').click(function(){
        window.location.href = "https://www.google.com/doodles/";
    });
    $('.content').keydown(function(){
        if(event.keyCode =='13'){
            read();
        }
    });
    $('.nine').click(function(){
        $('.hide').toggle();
        event.stopPropagation(); 
    });
    $('.hide').click(function(){
        event.stopPropagation(); 
    });
    $('.mic').mouseover(function(){
        $('.smalltriangle').show();
        $('.note').show();
    });
    $('.mic').mouseout(function(){
        $('.smalltriangle').hide();
        $('.note').hide();
    });
    $(document).click(function(){
        $('.hide').hide();
    });
    $('.extrabar').click(function(){
        // $('.extrabar').remove();
        // $('.extra').css('height','480px');
        // $('.extra').css('border-bottom','1px solid #cccccc');
        // $('.extra').after('<div class="separator"></div>');
        // $('.extrabar').css('background','rgba(255,255,255,.9)');
        // $('.extrabar').css('height','378px');
        // $('.extrabar').css('max-height','40px');
        // $('.extrabar').append('<div class="mark13"></div>');
    });
});