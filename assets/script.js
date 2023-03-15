$(".navgation li").click(function () {
  $(".car").hide().eq($(this).index()).show();

  $(".navgation li")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});

$(".navgation_lower li").click(function () {
  $(".specs").hide().eq($(this).index()).show();
  $(".navgation_lower li ")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});

$(".navgation_lower-two li").click(function () {
  $(".features").hide().eq($(this).index()).show();
  $(".navgation_lower-two li")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});
$(".navgation_lower-three li").click(function () {
  $(".features3").hide().eq($(this).index()).show();
  $(".navgation_lower-three li")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});
$(".navgation_lower-four li").click(function () {
  $(".features4").hide().eq($(this).index()).show();
  $(".navgation_lower-four li")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});
$(".navgation_lower-five li").click(function () {
  $(".features5").hide().eq($(this).index()).show();
  $(".navgation_lower-five li")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});
$(".navgation_lower-six li").click(function () {
  $(".features6").hide().eq($(this).index()).show();
  $(".navgation_lower-six li")
    .removeClass("active1")
    .eq($(this).index())
    .addClass("active1");
});

// Free courses slick slider
$(".Free-courses").slick({
  margin: 10,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  paushOnHover: false,
  draggable: true,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
