var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var screenW = $(window).width(),
    screenH = $(window).height(),
    aspectRatio = screenW / screenH;

var userAgentInfo = navigator.userAgent.toLowerCase();
var isIE11 = !!window.ActiveXObject ? !!window.ActiveXObject : "ActiveXObject" in window,
    isEdge = userAgentInfo.toUpperCase().indexOf("EDGE") > -1,
    isIE = userAgentInfo.toUpperCase().indexOf("MSIE") > -1,
    isIPad = /iPad/i.test(userAgentInfo);

// function fIsMobile() {
//     return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows  Phone | SymbianOS | IEMobile | Opera Mini /i.test(navigator.userAgent);
// }

var gaClass = "a-interaction a-common";
var controller = new ScrollMagic.Controller();

$(function() {

    // share
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var isWeixin = userAgentInfo.indexOf("micromessenger") != -1;
    if (isWeixin) {
        $.getScript("//web.archive.org/web/20201123215314/https://res.wx.qq.com/open/js/jweixin-1.2.0.js", function(response, status) {
            if (status == 'success') {
                $.getScript("//web.archive.org/web/20201123215314/https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js", function(r, s) {
                    if (s == 'success') {
                        var wxShare = setInterval(function() {
                            if (typeof(WechatShare) != "undefined") {
                                WechatShare({
                                    url: window.location.href,
                                    img: 'https://web.archive.org/web/20201123215314/https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/huawei-p-smart-pro/img/Huawei-p-smart-pro-shareImage.jpg',
                                    title: $(document).attr('title'),
                                    descript: document.querySelector('meta[name=\"description\"]').getAttribute('content')
                                }, function() {
                                    alert('Thanks for sharing.');
                                });
                                clearInterval(wxShare)
                            }
                        }, 150)
                    }
                });
            }
        });
    }

    // footnotes    
	$('sup a').click(function() {
        var top;
        var index = parseInt($(this).text()) - 1;
        if (screenW < 768 || (screenW < 1200 && aspectRatio < 1)) {
            top = $('.stark-footer').offset().top - 20;
            $(window).scrollTop(top + (index + 1) * 30);
        } else {
            top = $('.stark-footer').offset().top - 100;
            $(window).scrollTop(top);
        }

        $('.component-footnotes li').eq(index).addClass('current').siblings().removeClass('current');
    });


    // toTop
    $('.cbg-icon-backtotop').attr('href', 'javascript:');
    $(window).scroll(function() {
        var htop = $(this).scrollTop();
        if (htop < 10) {
            $('.cbg-backtotop').find('a').eq(0).addClass('hidden');
        } else {
            $('.cbg-backtotop').css('display', 'block');
            $('.cbg-backtotop').find('a').removeClass('hidden');
        }
    });
	
    $('.cbg-icon-backtotop').off().click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

    artSwiper();
    tripleAnimate();
    nightAnimate();
    lensAnimate();
    cameraUp();
    batteryNumber();
    emuiAnimate();

});

function artSwiper() {
    var swiper = new Swiper('.swiper-art', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        spaceBetween: 5,
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 3,
        navigation: {
            nextEl: '.swiper-art .swiper-button-next',
            prevEl: '.swiper-art .swiper-button-prev'
        },
        on: {
            slideChange: function() {
                var currentIndex = this.realIndex;
                $('.slide-title').each(function(i) {
                    if (i == currentIndex) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                })
            }
        }
    })
    $(".swiper-art .swiper-button-prev").addClass(gaClass).attr("cat", "Content Interactions").attr("act", "Scroll Left").attr("lab", "<product name> - <page title>");
    $(".swiper-art .swiper-button-next").addClass(gaClass).attr("cat", "Content Interactions").attr("act", "Scroll Right").attr("lab", "<product name> - <page title>");
}

function tripleAnimate() {
    new ScrollMagic.Scene({
            duration: 0,
            triggerElement: "#triple-trigger",
            triggerHook: 0.2,
        })
        .setClassToggle('.stark-triple', 'stark-animated')
        .addTo(controller);
}

function nightAnimate() {

    var curren = 0,
        dragW = $(".bg-drag").width(),
        lLimit = dragW / 2 - screenW,
        rLimit = -dragW / 2,
        shadeEle = document.getElementById("bg-shade"),
        dragEle = document.getElementById('bg-drag'),
        nightEle = document.getElementById('stark-night');

    var nightAnimate = new TimelineMax({ paused: true })
    nightAnimate
        .to(".stark-night .bg-shade", 2, { left: lLimit, ease: Power1.easeOut }, 0)
        // .to(".stark-night .text-container", 2, { y: "-100vh" }, 0)
        .to(".stark-night .off-svg", .5, { autoAlpha: 0, ease: Power1.easeIn }, .5)
        .to(".stark-night .on-svg", .5, { autoAlpha: 1, ease: Power1.easeIn }, .5)
        .to(".stark-night .bg-drag", .5, { autoAlpha: 1 }, 1)

    var dragAnimate = new TimelineMax({ paused: true })
    dragAnimate
    // .fromTo(".stark-night .text-container", 1, { y: '-50vh' }, { y: '0' }, 0)
        .to(".stark-night .off-svg", .5, { autoAlpha: 1 }, 0)
        .to(".stark-night .on-svg", .5, { autoAlpha: 0 }, 0)

    new ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#night-trigger",
            triggerHook: 0,
        }).on("progress", function(e) {
            if (e.progress >= 0.35 && e.scrollDirection == "FORWARD") {
                if ($('.stark-night .bg-drag').css('opacity') == 0) {
                    $('.stark-night .text-container').addClass('animated');
                }
                nightAnimate.play();
            }
        }).setPin("#stark-night .container")
        // .addIndicators({ name: 'nightAnimate' })
        .addTo(controller);

    if (screenW < 640 || (screenW < 1200 && aspectRatio < 1) || isIPad) {

        dragEle.addEventListener('touchstart', function(event) {
            var x = event.changedTouches[0].pageX;
            curren = $(".bg-shade")[0].offsetLeft;
            dragEle.addEventListener('touchmove', function(event) {
                var mx = event.changedTouches[0].pageX;
                var space = curren + mx - x;
                if (space <= lLimit) {
                    space = lLimit;
                } else if (space >= rLimit) {
                    space = rLimit;
                }
                shadeEle.style.left = space + 'px';
                if (parseInt(Math.abs(screenW / space)) >= 2) {
                    $('.stark-night .text-container').removeClass('animated');
                    dragAnimate.play();
                } else {
                    $('.stark-night .text-container').addClass('animated');
                    dragAnimate.reverse();
                }
            })
        })

        dragEle.addEventListener('touchend', function() {
            $(".bg-drag").off('touchmove');
        })

    } else {

        $(".bg-drag").on("mousedown", function(e) {
            var x = e.pageX;
            curren = $(".bg-shade")[0].offsetLeft;
            $(".stark-night").on("mousemove", function(e) {
                var mx = e.pageX;
                var space = curren + mx - x;
                if (space <= lLimit) {
                    space = lLimit;
                } else if (space >= rLimit) {
                    space = rLimit;
                }
                shadeEle.style.left = space + 'px';
                if (parseInt(Math.abs(screenW / space)) >= 2) {
                    $('.stark-night .text-container').removeClass('animated');
                    dragAnimate.play()
                } else {
                    $('.stark-night .text-container').addClass('animated');
                    dragAnimate.reverse()
                }
            })
        })

        $(".stark-night").on("mouseup", function(e) {
            $(".stark-night").off('mousemove');
        });
    }

}

function lensAnimate() {
    // $(".stark-lens .bg").css({ "width": screenW + 1, "height": screenH })
    new ScrollMagic.Scene({
            duration: 0,
            triggerElement: "#lens-trigger",
            triggerHook: 0.2,

        }).setClassToggle(".stark-lens .mask", "active")
        // .addIndicators({ name: 'lensAnimate' })
        .addTo(controller);
}

function cameraUp() {
    new ScrollMagic.Scene({
            duration: 0,
            triggerElement: "#camera-trigger",
            triggerHook: 0.4,

        }).setClassToggle(".stark-up-camera .img-camera", "active")
        // .addIndicators({ name: 'cameraUp' })
        .addTo(controller);
}

function batteryNumber() {
    if (isIE || isIE11 || isEdge) {
        $('.battery-num').attr('y', '95%');
    }
    new ScrollMagic.Scene({
            triggerElement: '#battery-trigger',
            triggerHook: 0.8,
            duration: 0
        })
        .on('enter', function(event) {
            if (event.scrollDirection == 'FORWARD') {
                new TweenMax('.battery-num', 1, {
                    onUpdate: function() {
                        $('.battery-num').text(parseInt(this.time() * 4000));
                    }
                });
            }
        })
        // .addIndicators({ name: 'batteryNumber' })
        .addTo(controller);

}

function emuiAnimate() {
    var tween = new TweenMax(".stark-emui .animate-line", 1, {
        paused: true,
        width: "100%",
        onUpdate: function() {
            $('.stark-emui .line-1 .num').text(parseInt(this.time() * $('.stark-emui .line-1 .num').attr("data-num")));
            $('.stark-emui .line-2 .num').text(parseInt(this.time() * $('.stark-emui .line-2 .num').attr("data-num")));
            $('.stark-emui .line-3 .num').text(parseInt(this.time() * $('.stark-emui .line-3 .num').attr("data-num")));
        }
    });
    new ScrollMagic.Scene({
            triggerElement: '#emui-trigger',
            triggerHook: 0.9,
            duration: 0
        })
        .on('enter', function(event) {
            tween.restart();
        })
        // .addIndicators({ name: 'emui' })
        .addTo(controller);
}
}

/*
     FILE ARCHIVED ON 21:53:14 Nov 23, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:28 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.985
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 56.134
  LoadShardBlock: 53.926 (3)
  PetaboxLoader3.datanode: 216.783 (5)
  load_resource: 1163.285 (2)
  PetaboxLoader3.resolve: 993.441 (2)
*/