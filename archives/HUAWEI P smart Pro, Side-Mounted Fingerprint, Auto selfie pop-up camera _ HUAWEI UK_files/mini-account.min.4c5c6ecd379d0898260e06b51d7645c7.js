var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
$(function(){var b=$(".ec-content").length>0;
var d=$(".ec-ma");
b?$(".ec-content").css("margin-top",getHeaderHeight()):"";
var a="miniAccountPtr";
function e(){if(!ecCom.isPC){return
}var m=$(".second-nav-wrap").length>0?$(".second-nav-wrap").height():0;
var j=$(".mini-account-btn").find("i");
var l=d.width();
var k=parseFloat(getHeaderHeight()-m+13);
var i=parseFloat(j.offset().left-l/2-8);
var h=$(document).width()-l-40;
var g=i>h?h:i;
var f=l-(j.offset().left-g)-j.width()/1.2;
window.deleteCss(a);
window.insertCss(a,".ec-ma-arrow.account::before { right: "+f+"px; }");
d.css({left:g,top:k})
}var c=$(".mini-account-btn").length>0;
if(c){$(document).on("click",function(f){var i=$(f.target),j=ecCom.isPC?"ec-ma":"ec-ma-content";
var h=ecCom.isPC?i.parents().hasClass(j):i.offsetParent().hasClass(j)||i.hasClass(j);
var g=i.is("a,img,button");
if(!(h&&d.hasClass("on"))||g){d.removeClass("on");
!ecCom.isPC?(d.stop().slideUp()&&$(".mini-account-btn").removeClass("on")&&$("body").removeClass("open-locked")):""
}});
$(".mini-account-btn").on("click",function(f){$(".ec-mc").hasClass("on")?$(".ec-mc").removeClass("on"):"";
$(".ec-ma-content").css("max-height",parseInt(winHeight-getHeaderHeight()));
if(ecCom.isPC){e();
d.toggleClass("on")
}else{$(this).toggleClass("on");
d.css({top:getHeaderHeight(),height:parseInt(winHeight-getHeaderHeight())}).toggleClass("on");
$("body").toggleClass("open-locked");
d.hasClass("on")?d.stop().slideDown():d.stop().slideUp()
}f.stopPropagation();
createMiniAccount()
});
$(window).on("resize",e)
}});
function loginBeforeAccountCenter(a){getUPLoginUrl(a).then(function(b){if(!ecCom.isPC){window.open(b.loginWapUrl,"_self")
}else{window.open(b.loginWebUrl,"_self")
}})
}function createMiniAccount(){var c=sessionStorage.getItem("ec-loginStatus")?true:false;
var e=JSON.parse($("#mini-account-nav").val());
$(".ec-ma").empty();
var d="";
$.each(e,function(g,h){var f=h.iconPath?"":"d-none";
h.url=dialogLinkHandler(h.url);
if(!c&&h.pageType=="accountCenter"){d+='<li style="margin-top:0;"><a class="a-common" cat="pop_up_account" act="click_on_'+h.text+'" lab="<page title>" href="javascript:;" role="button" callbackurl="'+h.url+'" onclick="loginBeforeAccountCenter(this.attributes.callbackurl.value)" title="'+h.text+'"><img class="nav-icon '+f+'" src="'+h.iconPath+'" />'+h.text+'<i class="hsvg12 hsvg-right"></i></a></li>'
}else{if(c&&h.pageType=="viewOrder"){h.url=dialogLinkHandler($("#ec-url-orderListLink").val())
}d+='<li style="margin-top:0;"><a class="a-common" cat="pop_up_account" act="click_on_'+h.text+'" lab="<page title>" href="'+h.url+'" role="button" title="'+h.text+'"><img class="nav-icon '+f+'" src="'+h.iconPath+'" />'+h.text+'<i class="hsvg12 hsvg-right"></i></a></li>'
}});
if(c){var a={act:'"click_on_sign_out"',icon:'<i class="hsvg24 hsvg-person-2"></i>',text:ecCom.I18n.get("ec_sign_out"),className:'"a-common"'}
}else{a={act:'"click_on_login"',icon:"",text:ecCom.I18n.get("ec_login"),className:'"ec-mc-btn-link a-common"'}
}var b='<i class="ec-ma-arrow account"></i><div class="ec-ma-content"><nav class="ec-ma-nav"><ul class="ec-mc-nav-list" style="border-top: 0;">'+d+'<li><a id="ec_mc_login_status" cat="pop_up_account" lab="<page title>" href="javascript:;" class='+a.className+" act="+a.act+' role="button" title="'+a.text+'" onclick="toggleLoginStatus(this)">'+a.icon+a.text+"</a></li></ul></nav></div>";
$(".ec-ma").html(b)
};
}

/*
     FILE ARCHIVED ON 13:47:20 May 06, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:34 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.599
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 41.234
  LoadShardBlock: 107.422 (3)
  PetaboxLoader3.datanode: 124.595 (5)
  load_resource: 2406.416 (2)
  PetaboxLoader3.resolve: 2369.907 (2)
*/