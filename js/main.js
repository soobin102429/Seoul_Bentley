 /// some script
 $(function () {
    'use strict'

  $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function(event) {
      if(event.keyCode === 27) {
         $(".navbar-collapse").removeClass("show");
         $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".btn-close").click(function(e){
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  }); 
})
// ========= navi end =========

$(document).ready(function(){
    $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');

      if(value == "all")
      {
        $('.filter').show('1000');
      }
      else{
        $(".filter").not('.' + value).hide('3000');
        $(".filter").filter('.' + value).show('3000');
      }
    });
      if($(".filter-button").removeClass("active")){
        $(this).removeClass("active");
      }
      $(this).addClass("active");
  });
// <!-- gallery-section -->
$(function(){
    $('.color01').click(function(){
        $('.car-01').css('display','block');
        $('.car-02').css('display','none');
        $('.car-03').css('display','none');
        $('.car-04').css('display','none');
        $('.car-05').css('display','none');
    });
    $('.color02').click(function(){
        $('.car-02').css('display','block');
        $('.car-01').css('display','none');
        $('.car-03').css('display','none');
        $('.car-04').css('display','none');
        $('.car-05').css('display','none');
    });
    $('.color03').click(function(){
        $('.car-03').css('display','block');
        $('.car-02').css('display','none');
        $('.car-01').css('display','none');
        $('.car-04').css('display','none');
        $('.car-05').css('display','none');
    });
    $('.color04').click(function(){
        $('.car-04').css('display','block');
        $('.car-02').css('display','none');
        $('.car-03').css('display','none');
        $('.car-01').css('display','none');
        $('.car-05').css('display','none');
    });
    $('.color05').click(function(){
        $('.car-05').css('display','block');
        $('.car-02').css('display','none');
        $('.car-03').css('display','none');
        $('.car-04').css('display','none');
        $('.car-01').css('display','none');
    });
});