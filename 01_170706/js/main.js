$(function(){

  //네비게이션
  // $(".gnb > li").mouseenter(function(){
  //   $(this).find(".sub").css({"display":"block"});
  // });
  // $(".gnb > li").mouseleave(function(){
  //   $(this).find(".sub").css({"display":"none"});
  // });
  // $(".gnb > li").focusin(function(){
  //   $(this).find(".sub").css({"display":"block"});
  // });
  // $(".gnb li li:last-child").focusout(function(){
  //   $(this).parent(".sub").css({"display":"none"});
  // });


    //$(".nav ul ul ").css({"display":"none"});
    // $(".nav > ul > li").hover(
    //   function(){
    //     $(this).find("ul").stop().slideDown(100);
    //     $(this).children("a").addClass("on");
    //   },
    //   function(){
    //     $(this).find("ul").stop().slideUp(100);
    //     $(this).children("a").removeClass("on");
    //   }
    // );

  //사운드 클릭 시
  $(".sound").click(function(){
    $(".sound_box").css({"display":"block"});
  });
  $(".sound_box .close").click(function(){
    $(".sound_box").css({"display":"none"});
  });

  //tab
  $(".on_off > a").click(function(){
    $(".on_off > a").removeClass("on");
    $(this).addClass("on");
  });

  //메뉴
  $(".gnb > li").click(function(){
    $(".gnb > li > .sub").removeClass("on");
    $(this).children(".sub").addClass("on");
  });
  


});
