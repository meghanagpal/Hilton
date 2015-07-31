$(document).ready(function () {
var x=$("#PricingInfo").offset().top;

 $(window).scroll(function() {

    if ($(this).scrollTop() > x/3+100) {
	
        $(".persistent-nav").show();
    } else {
		
       $(".persistent-nav").hide();
    }
});
//$('ul.links').transition({ x: '300px', y: '300px' }, 500);

// if($(window).width() < 599){
// $(window).bind('orientationchange', function(){
//                if (window.orientation % 180 == 0){
//                    $(document.body).css("-webkit-transform-origin", "")
//                        .css("-webkit-transform", "");               
//                } 
//                else {                   
//                    if ( window.orientation > 0) { //clockwise
//                      $(document.body).css("-webkit-transform-origin", "200px 190px")
//                        .css("-webkit-transform",  "rotate(-90deg)");  
//                    }
//                    else {
//                      $(document.body).css("-webkit-transform-origin", "280px 190px")
//                        .css("-webkit-transform",  "rotate(90deg)"); 
//                    }
//                }
//            })
//           .trigger('orientationchange'); 
//
//   }


});
