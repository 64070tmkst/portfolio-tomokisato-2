$(function(){

    console.log("JS running");
    let position;



    // home aboutme のshow more
    $('#showbutton').click(function(){

        
        if($('.more').css('display') == 'none'){
            $('.more').slideDown();
            $('.more').addClass('shown');
            $('.showmore').html('<h2>Show less  <i class="fas fa-caret-up"></i><h2>');
            position = $('.more').offset().top;
            

            
        }else if($('.more').css('display') == 'block'){
            $('.more').slideUp();
            $('.more').removeClass('shown');
            $('.showmore').html('<h2>Show more  <i class="fas fa-caret-down"></i></h2>');
            position  = $('.skillslabel').offset().top;
            position += 300;
            
    
        };
            
        $('body,html').animate({scrollTop:position},400,'swing');
        
    });
    

    // タブクリックでスクロール
    $('a[href^=#]').click(function() {
        var speed = 400; 
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        position = target.offset().top - 25;
        
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    
    
    
    // クリックでタブopen
    $("nav").click(function(){
        $("nav ul li:nth-child(1)").animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
        $("nav ul li:nth-child(2)").animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
        $("nav ul li:nth-child(3)").animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
        $("nav ul li:nth-child(4)").animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
        
        
        
    });
    
    
    // スクロールとタブの連動
    function init() {

        
        window.addEventListener('scroll', function(e){

            let aboutme   = $('#aboutme').offset().top;
            let works = $('#works').offset().top;
            let contact =  $('#contact').offset().top;
            
            
            aboutme-=250;
            works-=250;
            contact-=250;
            
            if ( $(window).scrollTop() <= aboutme ) {
                $("nav ul li:nth-child(1)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(2)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(3)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(4)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                
                
            } else if ($(window).scrollTop()<= works) {
                console.log("aboutme");
                $("nav ul li:nth-child(1)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(2)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(3)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(4)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                
                
            } else if ($(window).scrollTop()<= contact) {
                console.log("works");
                $("nav ul li:nth-child(1)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(2)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(3)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(4)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                
            } else if (contact< $(window).scrollTop()) {
                $("nav ul li:nth-child(1)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(2)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(3)").stop(true,true).animate({width:'hide'},{duration:"fast",easing:'swing',queue:true});
                $("nav ul li:nth-child(4)").stop(true,true).animate({width:'show'},{duration:"fast",easing:'swing',queue:true});
            }
            
        });
    }
    
    
    window.onload = init();
    
    
    
});