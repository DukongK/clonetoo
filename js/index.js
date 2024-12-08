// con2 box1 -------
$(function () {
  $(".box1").on("mouseenter", function () {
    $(this).children("div").stop().fadeIn(200);
  });
  $(".box1").on("mouseleave", function () {
    $(this).children("div").stop().fadeOut(200);
  });
});

// pc con3 bx3 -------
$(function () {
  $(".bx3").on("mouseenter", function () {
    $(this).children("div").stop().fadeIn(200);
  });
  $(".bx3").on("mouseleave", function () {
    $(this).children("div").stop().fadeOut(200);
  });
});

// 모바일 con3 mo3box1
$(function () {
  $(".mo3box1").on("mouseenter", function () {
    $(this).children(".txtbox").stop().fadeIn(200);
  });
  $(".mo3box1").on("mouseleave", function () {
    $(this).children(".txtbox").stop().fadeOut(200);
  });
});

// header menu -------
// window 에 스크롤을 내리면
// 누가(.windowscrol)이 addClass는 (menu_on)이 나온다
// fadeIn ,a color #222 , display flex 가 필요

$(function () {
  $(window).on("scroll", function () {
    $(".windowscroll").addClass("menu_on");
    $(".windowscroll").fadeIn(300);
    $(".windowscroll a").css({ color: "#222" });
    $(".windowscroll").css({ display: "flex" });
  });
});

// family 메뉴 동작 ------
$(function () {
  $(".fam1").on("click", function () {
    $(".fam2").fadeIn(10);
    $(".fam2").css({ display: "block" });
    $(this).css({ display: "none" });
  });
  $(".fam2").on("click", function () {
    $(this).fadeOut(10);
    $(".fam1").css({ display: "block" });
  });
});

// 모바일 ************
// mofambbox 를 누르면 , mofamboxbutton 이 나오고 , mofambbox 는 사라진다
// iconr 를 누르면 mofamboxbutton이 사라진다

$(function () {
  $(".mofambbox").on("click", function () {
    $(" .mofamboxbutton  ul ").fadeIn(10);
    $(" .mofamboxbutton  ul ").css({ display: "block" });
    $(".mofambbox ul").css({ border: "none" });
    $(".iconr").css({ display: "flex" });
  });
  $(".iconr").on("click", function () {
    $(this).fadeOut(10);
    $(".mofamboxbutton ul").css({ display: "none" });
    $(".mofambbox ul").css({ "border-bottom": "1px solid #ddd" });
  });
});

// 모바일 메뉴 리스트 화면

// $(function () {
//   $(".menu2list ul").on("click", function () {
//     $(this).children(".menu2list ul li:last-child ").fadeToggle(10);
//     $("h2").toggleClass("cobon");
//   });
// });

// 두번째 방법
// menu2list를 누르면 a링크가 나타난다

// $(function () {
//   $(".menu2list").on("click", function () {
//     i = $(this).index();
//     console.log(i);

//     $(".menu2list li:last-child").toggleClass("active");
//     $("h2").removeClass("cobon");
//     $("h2").eq(i).toggleClass("cobon");
//   });
// });

// menu2list 를 누르면 h2의 색상이 하나씩 바뀐다
// menu2list 를 누르면 li:last-child a 의 글이 나타난다

// header menu list pc ver.

// menulist_icon1 을 누르면 pcmenubar_list 가 펼쳐진다

$(function () {
  $(".menulist_icon1").on("click", function () {
    $(".pcmenubar_list").css({ display: "block" });
  });
  $(".listbg > ul li i").on("click", function () {
    $(".pcmenubar_list").css({ display: "none" });
  });
});

$(function () {
  $(".scroll_list").on("click", function () {
    $(".pcmenubar_list").css({ display: "block" });
  });
  $(".listbg > ul li i").on("click", function () {
    $(".pcmenubar_list").css({ display: "none" });
  });
});

// 모바일 menu list

$(function () {
  $(".mobile_list li").on("click", function () {
    i = $(this).index();
    console.log(i);

    $(".mobile_list li p").eq(i).toggleClass("on");
    $(this).children("h2").toggleClass("color_on");
  });
});

// 모바일 메뉴 버튼을 누르면 배경이 조금 어두워지고 오른쪽에서 왼쪽으로 슬라이드 나옴
// x를 누르면 왼쪽에서 오른쪽으로 들어가는 슬라이드 화면은 원래대로 밝아짐

$(function () {
  $(".mo_menu_icon").on("click", function () {
    $(".mo_menu_list_wrap")
      .css({ display: "block" })
      .stop()
      .animate({ "margin-left": "0" });
  });

  $(".mo_xicon").on("click", function () {
    $(".mo_menu_list_wrap").stop().animate({ "margin-left": "100%" });
  });
});
