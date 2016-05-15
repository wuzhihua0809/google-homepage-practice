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
        if ($('.hide').css('display') === "none") {
            $('.hide').show();
            $('.extrabar').show();
            $('.extracontent').hide();
            $('.separator').hide();
            $('extra').css('height','440px');
        } else{
            $('.hide').hide();
        };
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
    // $('extra').scroll(function(){
    //     if ($(extra.scrollTop()>0)) {
    //         $('.extrabar').hide();
    //         $('.extracontent').show();
    //         $('.separator').show();
    //     } ;
    // });
    $('.extrabar').click(function(){
        $('.extrabar').hide();
        $('.extracontent').show();
        $('.separator').show();
        $('extra').css('height','800px');
    });
});