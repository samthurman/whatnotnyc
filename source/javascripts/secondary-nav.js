$(function(){
  $("body").click(function(){
    if($("body").hasClass("show-secondary")) {
      $("body").toggleClass("show-secondary");
    } else {
      // do nothing
    }
  });

  $(".secondary-nav").click(function(event){
    event.stopPropagation();
  });

  $(".page-header__menu-toggle").click(function(event){
    event.stopPropagation();
    $("body").toggleClass("show-secondary");
  });

  $(".secondary-nav__header").click(function(){
    $(".secondary-nav__header").removeClass("secondary-nav__header--show-secondary");
    $(this).toggleClass("secondary-nav__header--show-secondary");
  });
});
