var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function activeScriptNode(a){if(a.getAttribute("type")==="text/plain"){var b=a.cloneNode(true);
b.setAttribute("type","text/javascript");
a.parentNode.replaceChild(b,a)
}}function inactiveScriptNode(a){if(a.getAttribute("type")==="text/javascript"){var b=a.cloneNode(true);
b.setAttribute("type","text/plain");
a.parentNode.replaceChild(b,a)
}}function removeCookie(a){var b=new Date();
b.setDate(b.getDate()-1);
document.cookie=a+"="+escape("")+";expires="+b.toUTCString()+";"
}$(function(){var a=getCookie("huawei_store_accept_cookie_flag");
if(a==="true"){$(".cookie-package-controller").each(function(){activeScriptNode($(this)[0])
})
}var b=$(".cookie-data").length>0?$(".cookie-data").attr("the-package-control-of-cookies-enabled"):"";
$(".convergent-cookie-agree").on("click",function(){$(".cookie-package-controller").each(function(){activeScriptNode($(this)[0])
})
});
$(".convergent-cookie-close").on("click",function(){if($(".convergent-cookie-agree").length>0){if(b){setJPCookie("huawei_store_accept_cookie_flag",true,360);
setJPCookie("huawei_store_accept_cookie_choose","1|0|0",360)
}else{setJPCookie("huawei_store_accept_cookie_flag",false,360);
setJPCookie("huawei_store_accept_cookie_choose","0|0|0",360)
}}})
});
}

/*
     FILE ARCHIVED ON 22:16:39 Jul 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:21:20 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.551
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 12.704
  LoadShardBlock: 81.638 (3)
  PetaboxLoader3.datanode: 144.467 (5)
  load_resource: 466.52 (2)
  PetaboxLoader3.resolve: 358.985 (2)
*/