/* 모바일 메뉴 */
$(".slleft li").click(function () {
    var slideM = $(this).index() + 1
    console.log(slideM);
    $(".slsub" + slideM).addClass("slideon").siblings().removeClass("slideon");
    $(this).css({
        "background": "#f4f4f4;"
    });
    $(this).addClass("uo").siblings().removeClass("uo");


});
$(".slright ul li").click(function () {
    $(this).toggleClass("slidup slidb").find("ul").slideToggle(300);
    $(this).find("i").toggleClass("slidup");
});

/* 모바일 메뉴 불러오기 */
$("#headergnb .header a").click(function () {

    $("#submu").animate({
        "right": "0"
    }, 300);
});
$("#submu .right .xeicon").click(function () {
    console.log(this);
    $("#submu").animate({
        "right": "-999px"
    }, 300);
});

/* 웹 서브메뉴 (hover) */
$("#headergnb .gnb li").on("mouseover", function () {

    $(this).addClass("line").siblings().removeClass("line");

    $(".subp").removeClass("on");
    var n = $(this).index() + 1;
    $("#sub" + n).addClass("on");
});
$("header").on("mouseleave", function () {
    $(".subp").removeClass("on");
    $("#headergnb .gnb li").removeClass("line");
});

/* 메인 슬라이드 배너 */
$(".slide").append($(".slide li:first-child").clone());

var n = 0;

function slide() {
    n++;
    if (bw >= 800) {
        if (n >= 6) {
            $(".slide").animate({
                "left": -n * 100 + "%"
            }, 1200, function () {
                $(this).css({
                    "left": 0
                });
            });
            n = 0;
        } else {
            $(".slide").animate({
                "left": -n * 100 + "%"
            }, 1200);
        }

    } else {
        if (n >= 8) {
            $(".slide").animate({
                "left": -n * 100 + "%"
            }, 1200, function () {
                $(this).css({
                    "left": 0
                });
            });
            n = 0;
        } else {
            $(".slide").animate({
                "left": -n * 100 + "%"
            }, 1200);
        }


    }

    $(".page li").eq(n).addClass("select").siblings().removeClass("select")
}
var timer = setInterval("slide()", 3000);

var mck = 0;
$(".mainstop").click(function () {
    if (mck == 0) {
        $(this).addClass("mainon");
        clearInterval(timer);
        mck = 1;
    } else {
        $(this).removeClass("mainon");
        timer = setInterval("slide()", 3000);
        mck = 0;
    }

});

/*$("#main").hover(
    function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval("slide()", 3000);
    }
)*/

$(".page li").click(function () {
    $(this).addClass("select").siblings().removeClass("select");
    n = $(this).index();
    $(".slide").animate({
        "left": -n * 100 + "%"
    }, 1200);
});

/* #icon btn */
$("#icon button").click(function () {
    $(this).find("p").toggle().text()
    $(this).find("a").toggleClass("active")
    $("#icon .view_box").toggleClass("height")
});

/* TOP버튼 스크롤탑 */
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 300) {
        $("#button").css({
            "display": "block"
        });
    } else {
        $("#button").css({
            "display": "none"
        });
    }
});
$("#button a").click(function () {
    $("html").animate({
        "scrollTop": 0
    }, 300);
    return false;
});

/* 모바일 content 스크롤탑 */
$(window).scroll(function () {
    var sc = $(this).scrollTop();
    if (sc > 576) {
        $("#contents .fiexhd").addClass("fix")
        $(".fiexhdH").css({
            "height": "81px"
        });
    } else {
        $("#contents .fiexhd").removeClass("fix")
        $(".fiexhdH").css({
            "height": "0"
        });
    }
});

/* 모바일 content 텝메뉴 */
$(".fiexhd li").click(function () {
    var ctt = $(this).index() + 1
    $(this).addClass("before og").siblings().removeClass("before og");
    $("#contents" + ctt).addClass("on").siblings().removeClass("on");

    $("html").animate({
        "scrollTop": 577
    }, 500);
    return false;

});

/* content 슬라이드 */
$(".slidecont").append($(".slidecont li:first-child").clone());
var bw = $("body").width();
var c = 0;

function slidecont() {
    c++;
    if (bw >= 800) {
        if (c >= 2) {
            $(".slidecont").animate({
                "left": -376 * c
            }, 1200, function () {
                $(this).css({
                    "left": 0
                });
            });
            c = 0;
        } else {
            $(".slidecont").animate({
                "left": -376 * c
            }, 1200);
        }
    } else {
        if (c >= 3) {
            $(".slidecont").animate({
                "left": -c * 100 + "%"
            }, 1200, function () {
                $(this).css({
                    "left": 0
                });
            });
            c = 0;
        } else {
            $(".slidecont").animate({
                "left": -c * 100 + "%"
            }, 1200);
        }
    }
    $(".contpage li").eq(c).addClass("selectcont").siblings().removeClass("selectcont")
}

var timercont = setInterval("slidecont()", 3000);


var chk = 0;
$(".stop").click(function () {
    if (chk == 0) {
        $(this).addClass("on");
        clearInterval(timercont);
        chk = 1;
    } else {
        $(this).removeClass("on");
        timercont = setInterval("slidecont()", 3000);
        console.log(222);
        chk = 0;
    }

});


$(".frame").hover(
    function () {
        clearInterval(timercont);
    },
    function () {
        if (chk == 0) {
            timercont = setInterval("slidecont()", 3000);
        }
    }
)

if (bw >= 800) {
    $(".contpage li").click(function () {
        c = $(this).index();
        $(this).addClass("selectcont").siblings().removeClass("selectcont")
        $(".slidecont").animate({
            "left": -376 * c
        }, 1200);
    });
} else {
    $(".contpage li").click(function () {
        c = $(this).index();
        $(this).addClass("selectcont").siblings().removeClass("selectcont")
        $(".slidecont").animate({
            "left": -c * 100 + "%"
        }, 1200);
    });
}


/* cont3 메뉴 더보기 */
$(".cont3height .button a").click(function () {
    $(this).toggleClass("cgbg");
    $(".cont3height ul").toggleClass("abc");
})


/* footer 페이지 링크 */
$(".footerPg li").click(function () {
    $(".footermnue").toggleClass("footerPgon");
    $(".footerpgbg").toggleClass("footerPgon");
});

/* 스와이퍼 */
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 2000,
    spaceBetween: 20,
});
