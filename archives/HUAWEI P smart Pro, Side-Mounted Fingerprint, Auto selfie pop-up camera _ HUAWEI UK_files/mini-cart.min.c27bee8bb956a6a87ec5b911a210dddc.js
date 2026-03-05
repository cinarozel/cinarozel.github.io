var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var isTime=true,country_site=window.location.host+site,current_sendCodeTime,internal_email,get_internalEmail=function(){return internal_email
};
var redirect_href=function(d){var c=location.origin+"/"+a+"/"+d.toLowerCase()+"/";
var a=digitalData.page.pageInfo.siteCode2||"";
var b=location.pathname;
var e="";
if(ecCom.Util.isEditMode){b=b.replace(CBG_SITE_EDITOR_ROOT,"")
}else{if(b.indexOf(CBG_SITE_ROOT)==0){b=b.replace(CBG_SITE_ROOT,"");
if(b.indexOf("/")>-1){e=location.origin+CBG_SITE_ROOT+d.toLowerCase()+".html"
}else{e=location.origin+location.pathname.replace("/"+a+".html","/"+d.toLowerCase()+".html")
}}else{e=location.origin+"/"+d.toLowerCase()+"/"
}}$.ajax({type:"get",cache:false,url:e,dataType:"html",complete:function(f){if(f.status==404){location.href=c
}else{location.href=e;
console.log(location.href)
}}})
};
function internal_purchase(c){var b="";
var j='<div class="internal_purchase"><div class="purchase_background"></div><div class="purchase_content"><span class="purchase_close"><a href="javascript:;"></a></span><div class="purchase_top"><p class="purchase_title">'+ecCom.I18n.get("ec_emp_authentication")+'</p><p class="purchase_tip">'+ecCom.I18n.get("ec_input_code_to_verify")+'</p></div><div class="input_nav"><ul class="purchase_center"><li class="email_content"><input type="text" class="email_detail" disabled></li><li class="verifivcation_content"><span class="verifivcation_code">verifivcation code</span><input class="emaild_code" type="text"><div class="email_tip"><span class="code_tip"></span></div><span class="sent_email"></span></li></ul></div><div class="confirm"><button class="confirm_btn">'+ecCom.I18n.get("ec_confirm")+"</button></div></div></div>";
var f='<div class="success"><span class="success_purchase_close"><a href="javascript:;"></a></span><div class="success_item"><span class="success_ok"></span><div class="success_content"><p class="success_title">'+ecCom.I18n.get("ec_verify_success")+'</p><span class="thanks">'+ecCom.I18n.get("ec_automatic_skip")+'</span></div><button class="close_tip"><a href="javascript:;">'+ecCom.I18n.get("ec_go_shopping")+"</a></button></div></div>";
$("body").append(j);
$(".internal_purchase").removeClass("purchase_hide");
$(".emaild_code").attr("placeholder",ecCom.I18n.get("ec_input_verify_code"));
$("body").addClass("not_scroll");
var h=get_internalEmail();
console.log(h);
$("input.email_detail").val(h);
function l(){$(".internal_purchase").html("").addClass("purchase_hide");
$("body").removeClass("not_scroll")
}$(".internal_purchase .purchase_close a").click(function(){l()
});
$(".success .success_purchase_close a").click(function(){l()
});
var d=ecCom.I18n.get("ec_verify_code_sent"),k=ecCom.I18n.get("ec_input_verify_code"),e="Falscher Bestätigungscode.";
var i=function(){var m=$.Deferred();
var n={};
n.apiHost=purchaseApi_detail.api;
n.api="convert/v1/services/send-email";
n.type="POST";
n.contentType="application/x-www-form-urlencoded; charset=utf-8";
n.data={};
n.data.email=h;
n.data.siteCode=siteCode;
n.success=function(o){if(o.status=="success"){$(".code_tip").removeClass("redColor").text(d).show()
}m.resolve(o)
};
n.error=function(q,o,p){console.log(q,o,p);
m.reject(q,o,p)
};
ecCom.ajaxReq(n);
return m.promise()
};
var a=function(){var m=$.Deferred();
var n={};
n.api="convert/v1/services/check-token";
n.apiHost=purchaseApi_detail.api;
n.type="POST";
n.contentType="application/x-www-form-urlencoded; charset=utf-8";
n.data={};
n.data.email=h;
n.data.token=$("input.emaild_code").val();
n.success=function(o){if(o.status=="success"){$(".purchase_content").addClass("success_purchase").html(f);
$(".success .success_purchase_close a").click(function(){l()
});
if(c){b=c.replace("callback=","")
}else{b="employee-purchase"
}$(".success .close_tip a").click(function(){window.open(location.origin+"/"+siteCode+"/"+b,"_self")
});
window.open(location.origin+"/"+siteCode+"/"+b,"_self")
}else{$(".code_tip").addClass("redColor").text(e).show()
}m.resolve(o)
};
n.error=function(q,o,p){$(".code_tip").addClass("redColor").text(e).show();
m.reject(q,o,p)
};
ecCom.ajaxReq(n);
return m.promise()
};
$(".sent_email").click(function g(){i();
var m=59;
$(".sent_email").text("Zurücksetzen("+m+")").addClass("resend");
var n=setInterval(function(){--m;
if(m<0){$(".sent_email").text("Code zurücksenden").removeClass("resend");
$(".sent_email").on("click",function(){g()
});
clearInterval(n)
}else{current_sendCodeTime=m;
$(".sent_email").text("Zurücksetzen("+m+"s)").addClass("resend");
$(".sent_email").off("click");
return current_sendCodeTime
}},1000)
});
if(current_sendCodeTime){$(".sent_email").text("Zurücksetzen("+parseInt(current_sendCodeTime)+")").addClass("resend")
}else{$(".sent_email").text(ecCom.I18n.get("ec_get_code"))
}$(".confirm_btn").click(function(){if(!$("input.emaild_code").val()){$(".code_tip").addClass("redColor").text(k).show()
}else{a()
}})
}var pcp_locationHref;
if(location.href.split("productId=")[1]){pcp_locationHref=location.href.split("productId=")[1].match(/productId=(\d*)\D/)?location.href.split("productId=")[1].match(/(\d*)\D/):location.href.split("productId=")[1].match(/(\d*)/);
pcp_locationHref=pcp_locationHref[1]
}var purchaseApi_detail={};
purchaseApi_detail.api=apiHost.split("eCommerce/")[0];
var login_employee=function(){var a=$.Deferred();
var b={};
b.apiHost=purchaseApi_detail.api;
b.api="convert/v1/services/checkLoginStatus";
b.type="POST";
b.contentType="application/x-www-form-urlencoded; charset=utf-8";
b.success=function(c){a.resolve(c)
};
b.error=function(e,c,d){a.reject(e,c,d)
};
ecCom.ajaxReq(b);
return a.promise()
};
var hide_employee_buttonSearch=function(){var a=["#ecMiniCart .ec-mc-goods-btn-wrap .ec-mc-goods-btn-continue","#cartList .cart-total .cart-total-btn-wrap .btn-outline-secondary","#cartAdded .cart-added .cart-added-btn-wrap .btn-outline-secondary","#optpage_learnMore","#optpage_learnMore_float"];
var b=$("#header-v3 .search-wrap");
if((pcp_locationHref&&ecCom.getProductType(pcp_locationHref)==="hwerOffer")||ecCom.Util.identifyPageType()==="hwerOffer"){ec_pageLoading_start();
login_employee().then(function(c){if(c.resultCode===401||c.status==="error"||c.resultCode===1){console.log("没有登录")
}else{if(c.status==="success"||c.resultCode===0){b.remove();
$.each(a,function(d,e){if($(e).length>0){$(e).remove()
}});
ec_pageLoading_end()
}}},function(g,c,d,f){var e=c?c:"Api Fail";
console.error(e+" : checkLoginStatus");
ec_pageLoading_end()
})
}};
var init_base=function(){var c;
if(location.href.split("productId=")[1]){c=location.href.split("productId=")[1].match(/productId=(\d*)\D/)?location.href.split("productId=")[1].match(/(\d*)\D/):location.href.split("productId=")[1].match(/(\d*)/);
c=c[1]
}var d=sessionStorage.getItem("ec-loginStatus")?true:false,a;
if(get_internalEmail()){a=get_internalEmail().split("@")[1]==="huawei.com"?true:false
}else{a=false
}var b=location.href.split("employee-purchase/"),g="";
if(ecCom.Util.identifyPageType()==="hwerOffer"||c){g="callback="+location.href.split(location.origin+"/"+siteCode+"/")[1]
}var f;
if(location.href.split("?").length>1){f=(location.href.split("/?")[0]==location.origin+"/"+siteCode)&&!!location.search
}else{f=false
}var h=function(){var i=location.pathname;
if(ecCom.Util.isEditMode){return
}else{if((c&&ecCom.getProductType(c)==="hwerOffer")||ecCom.Util.identifyPageType()==="hwerOffer"){var j="";
if(!d){j=window.location.href;
getUPLoginUrl(j).then(function(k){if(!ecCom.isPC){window.open(k.loginWapUrl,"_self")
}else{window.open(k.loginWebUrl,"_self")
}})
}else{j=g;
if(a){login_employee().then(function(k){console.log(k);
if((k.resultCode===401||k.resultCode===1)&&j&&!f){console.log("没有登录内购登录");
window.open(location.origin+"/"+siteCode+"?"+g,"_self")
}else{if(k.status==="success"||k.resultCode===0){console.log("已登录内购");
$("#header-v3 .search-wrap").remove();
return
}}},function(o,k,l,n){var m=k?k:"Api Fail";
console.error(m+" : checkLoginStatus");
window.open(location.origin+"/"+siteCode+"?"+g,"_self")
})
}else{if(j&&!f){window.open(location.origin+"/"+siteCode+"?"+g,"_self")
}}}}}};
var e=function(){var i=$("#ec-url-loginLink").val();
if(i){var j;
i=i.replace("/content/huawei-cbg-site","").replace(".html","");
$("#footer-v3 .l-box li a[href] ").each(function(m,l){if($(l).attr("href").indexOf(i)>=0){$(l).addClass("employee-href")
}});
j=$(".employee-href");
if(j.length>0){if(!d||!a){j.hide();
return
}else{j.first().closest("li").siblings("li").find("a.employee-href").remove();
j.off("click");
j.on("click",function(l){l.preventDefault();
login_employee().then(function(m){console.log(m);
if(m.status==="error"||m.resultCode===1){console.log("没有登录");
internal_purchase()
}else{if(m.status==="success"||m.resultCode===0){window.open(location.origin+"/"+siteCode+"/employee-purchase","_self")
}}})
});
if(f){var k=location.href.split(location.origin+"/"+siteCode+"/?")[1];
login_employee().then(function(l){console.log(l);
if(l.resultCode===401||l.status==="error"||l.resultCode===1){console.log("没有登录");
internal_purchase(k)
}else{if(l.status==="success"||l.resultCode===0){console.log("登录成功")
}}})
}}}}};
e();
h()
};
window.winWidth=window.innerWidth;
window.winHeight=window.innerHeight;
ecCom.isPC=window.winWidth>1023;
var imgSize="428_428_";
window.gtm_itemInfos=[];
var currencyUnit=ecCom.I18n.get("ec_currency_unit");
var cartLimit=100;
var continue_shopping=$("#ec-url-goShopping").val();
var htmlExtension=".html";
var cartInfo={};
var cartItems={};
$(function(){var c=$(".ec-content").length>0;
c?$(".ec-content").css("margin-top",getHeaderHeight()):"";
var d=sessionStorage.getItem("ec-loginStatus")?true:false;
if(d){$(".mini-account i").removeClass("hsvg hsvg-person-1").addClass("hsvg24 hsvg-person-2");
$(".huawei-v4 .login-v4-wrap").addClass("signin")
}else{$(".mini-account i").removeClass("hsvg24 hsvg-person-2").addClass("hsvg hsvg-person-1")
}window.$miniCart=$(".ec-mc");
$(document).on("click",function(h){var j=$(h.target),l=ecCom.isPC?"ec-mc":"ec-mc-content",g=$(".ec-mc");
var k=ecCom.isPC?j.parents().hasClass(l):j.offsetParent().hasClass(l)||j.hasClass(l);
var i=j.is("a,img,button");
if(!(k&&g.hasClass("on"))||i){g.removeClass("on");
!ecCom.isPC?(g.stop().slideUp()&&$(".shop-bag-bnt").removeClass("on")&&$("html,body").removeClass("open-locked")):""
}});
var b="miniCartPtr";
var a=$("#ecMiniCart");
function e(){if(!ecCom.isPC){return
}var l=$(".second-nav-wrap").length>0?$(".second-nav-wrap").height():0;
var g=$(".shop-bag-bnt").find("i");
var m=a.width();
var n=parseFloat(getHeaderHeight()-l-5);
var k=parseFloat(g.offset().left-m/2-8);
var h=$(document).width()-m-40;
var o=k>h?h:k;
var j=g.width();
if(j==0||j==null){j=(g.parent().width()||18)
}var i=a.width()-(g.offset().left-o)-j/2-7.5;
window.deleteCss(b);
window.insertCss(b,".ec-mc-arrow.mini-cart-arrow::before { right: "+i+"px; }");
if(isArabicSite){window.deleteCss(b);
o=g.offset().left-j*2;
window.insertCss(b,"html[dir=rtl] .ec-mc-arrow.mini-cart-arrow::before { left: "+j+"px; }")
}a.css({left:o,top:n})
}$(window).on("resize",e);
$(".shop-bag-bnt").on("click",function(g){$(".ec-ma").hasClass("on")?$(".ec-ma").removeClass("on"):"";
if(isECommerceSite&&isECommerceSite=="Fusion-eCommerce"){if(window.innerWidth>1199){if($(".login-v4-wrap").hasClass("active")){$(".login-v4-wrap").removeClass("active")
}}else{if($(".n12-search").hasClass("popup--visible")){$(".js-open-search").click()
}if($(".main-nav").hasClass("main-nav--opened")){$(".js-nav-toggle").click()
}}createVmallMiniCartContent();
if(window.__vmallMiniCart&&window.__vmallMiniCart.getCartDataList){window.__vmallMiniCart.getCartDataList()
}e()
}else{if(isCartList()===1){if($(".ec-error-mes").length>0){ecCom.rendErrorMess(response,1);
return
}renderMiniCart()
}else{clickMiniCart()
}}g.stopPropagation()
});
queryLoginStatus(null,"up_cart").then(function(){if(isECommerceSite!="Fusion-eCommerce"){ecCom.initToken.done(function(){if(isCartList()===1){guestToCart(1);
window.queryDeletedItems()
}else{guestToCart(0)
}})
}},function(){if(isECommerceSite!="Fusion-eCommerce"){if(isCartList()===1){queryCart(1)
}else{rendMniCartIcon()
}}});
if(ecCom.isPC&&hasSecondNav()){var f=function(g){if(g.hasClass("on")){g.removeClass("on")
}};
$(window).scroll(function(){f($(".ec_ma"));
f($(".ec_mc"))
})
}$(document).on("click",".ec_reload_page",function(){window.location.reload()
});
$(document).on("click",".ec_go_cart",function(){if($("#cartList").length>0){$(document).scrollTop(0)
}else{window.open(dialogLinkHandler($("#ec-url-cartLink").val()),"_self")
}})
});
function isCartList(){return $("#cartList").length>0?1:0
}function getHeaderHeight(){var a=$("#header-v3");
if(!ecCom.isPC){a=$(".app-nav")
}if(a.length===0){a=$("#header-v4")
}return a.height()||0
}var hasSecondNav=function(){return $(".second-nav-wrap").length>0?true:false
};
var clickMiniCart=function(){if(!ecCom.isPC&&$(".app-nav-icon").hasClass("clicked")){$(".app-nav-icon").trigger("click")
}var a=$(".ec-mc");
var b=$(".shop-bag-bnt");
b.addClass("disabled");
if(!a.hasClass("on")){queryCart(0).then(function(){renderMiniCart();
b.removeClass("disabled")
},function(c){b.removeClass("disabled");
ecCom.rendErrorMess(c,1)
})
}else{b.removeClass("on");
a.removeClass("on").stop().slideUp();
b.removeClass("disabled");
$("html,body").removeClass("open-locked")
}};
var renderMiniCart=function(){var b=$(".ec-mc");
var f=hasSecondNav()?$(".second-nav-wrap").height():0;
$(".ec-mc-content").css("max-height",parseInt(window.innerHeight-getHeaderHeight()+f+1));
if(ecCom.isPC){var d=$(".shop-bag-bnt").find("i");
var g=d.offset();
var a=d.width();
var e=parseFloat(getHeaderHeight()-f+13);
var c=parseFloat(g.left-b.width()+a+40);
b.css({left:c,top:e}).toggleClass("on")
}else{if($(".app-nav-icon").hasClass("clicked")){$(".app-nav-icon").trigger("click")
}$(".shop-bag-bnt").toggleClass("on");
b.css({top:parseInt(getHeaderHeight()-f-1),height:parseInt(window.innerHeight-getHeaderHeight()+1+f)}).toggleClass("on");
$("html,body").toggleClass("open-locked");
b.hasClass("on")?b.stop().slideDown():b.stop().slideUp()
}ecCustomSrcoll(".scroll-content","outside");
adjustMcGoodsHeight()
};
function queryLoginStatus(c,d){var b=$.Deferred();
var a=function(e){internal_email=e
};
ecCom.ajaxReq({api:"v1/login/info",apiHost:loginApiHost,type:"get",success:function(h){if(h.data&&h.data.userId){ecCom.set("ec-loginStatus","1");
if(isECommerceSite=="Fusion-eCommerce"&&vmallLoginImgUrl){var g=new Date().getTime();
$(".login-img-vmall").attr("src",vmallLoginImgUrl.trim()+"?timestamp="+g)
}$(".mini-account i").removeClass("hsvg hsvg-person-1").addClass("hsvg24 hsvg-person-2");
$(".huawei-v4 .login-v4-wrap").addClass("signin");
window.addExtraAccountMenu&&window.addExtraAccountMenu();
ecCom.setGlobalSafeEmail(h.data.safeEmail);
window.processLoginStatus();
if(d=="up_cart"){if(ecCom.getCookie("cartId")){b.resolve(h)
}else{b.reject(h)
}}ecCom.setCookie("login_status",true,168);
var j=h.data.userName,i=false;
if(h.data.userAcctInfoList&&h.data.userAcctInfoList.length>0){var f=h.data.userAcctInfoList;
$.each(f,function(l,m){if(m.accountType==1){a(m.userAccount);
i=true
}});
if(!i&&h.data.userAccount){a(h.data.userAccount)
}}else{if(h.data.userAccount){a(h.data.userAccount)
}}if(ecCom.checkEmail(j)){ecCom.setGlobalLoginEmail(j);
ecCom.set("login_email",ecCom.emailHide(j))
}else{ecCom.setGlobalLoginEmail("");
ecCom.set("login_email","")
}sessionStorage.removeItem("guest_mode");
b.resolve(h)
}else{ecCom.set("guest_mode",1);
sessionStorage.removeItem("ec-loginStatus");
$(".huawei-v4 .login-v4-wrap").removeClass("signin");
$(".mini-account i").removeClass("hsvg24 hsvg-person-2").addClass("hsvg hsvg-person-1");
if(window.integrationJsInterface||window.integrationJsInterfaceWebview){var e=window.integrationJsInterface||window.integrationJsInterfaceWebview;
e.getAT(0);
return
}if(c){if(d=="up_guest"){var k=dialogLinkHandler(loginLink)+"?callback="+dialogLinkHandler(c);
window.open(k,"_self")
}else{getUPLoginUrl(c).then(function(l){if(!ecCom.isPC){window.open(l.loginWapUrl,"_self")
}else{window.open(l.loginWebUrl,"_self")
}})
}}if($.cookie("loginUserinfo")||$.cookie("_ext_u_e_")){ecomLogin()
}b.reject()
}init_base();
$(document).trigger(EC_LOGIN_STATUS_GOT)
},error:function(e){b.reject(e)
}});
return b.promise()
}function logout(){sessionStorage.getItem("ec-loginStatus")?sessionStorage.removeItem("ec-loginStatus"):"";
var b="v1/logout/gotoLogout";
var d=window.location.href;
if(isRedirectToLogin()){d=d.split(window.location.pathname)[0]+"/"+siteCode.toLowerCase()+htmlExtension
}var a=loginApiHost+b+"?callback="+encodeURIComponent(d);
window.removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(window.isUnifiedLoginSite()){removeUnifiedLoginCookie()
}if(isECommerceSite=="Fusion-eCommerce"&&vmallLogoutAPI){try{$.ajax({type:"get",url:vmallLogoutAPI+"?_="+new Date().getTime(),complete:function(e){console.log(e)
}})
}catch(c){console.log(c)
}}if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",url:casUrl+"/logout?service="+supportv2.cmktApiUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent(getNewUserUrl()),complete:function(){window.open(a,"_self")
}});
apiAuth.exitAuth()
}else{window.open(a,"_self")
}}function isRedirectToLogin(){if($("#addressList").length>0||$(".account-details").length>0||$(".vieworder-userlogin").length>0||$("#return-feedback-main").length>0||$("#paymentResult").length>0){return true
}return false
}window.toggleLoginStatus=function(){var a=window.location.href;
sessionStorage.removeItem("cartQty");
if(sessionStorage.getItem("ec-loginStatus")){logout();
ecGtmForLogInOut("SIGNOUT")
}else{ecGtmForLogInOut("LOGIN");
queryLoginStatus(a)
}};
function ecGtmForLogInOut(b){if($("body").hasClass("huawei-v4")){if("LOGIN"==b){try{window.dataLayer.push(addATCommonFields({event:"accountInteraction",accountInteraction:"log in",accountType:""}))
}catch(a){}}else{if("SIGNOUT"==b){try{window.dataLayer.push(addATCommonFields({clickName:"account_click my log out",clickType:"action",event:"accountInteraction",accountInteraction:"log out",accountType:""}))
}catch(a){}}}}}function guestToCart(b){var a=$.Deferred();
ecCom.ajaxReq({api:"guestToCart",data:{cartId:ecCom.getCookie("cartId")},success:function(c){if(c.resultCode===0){ecCom.delCookie("cartId");
ecCom.set("cartQty",c.data.cartInfo.originalTotalNumber);
renderCartData(c,b);
a.resolve(c)
}else{a.reject(c)
}},error:function(c){a.reject(c)
}});
return a.promise()
}function queryCart(b){var a=$.Deferred();
ecCom.ajaxReq({api:"queryCart",data:{cartId:ecCom.getCookie("cartId")||""},type:"get",success:function(c){if(c.resultCode===0){ecCom.set("cartQty",c.data.cartInfo.originalTotalNumber);
renderCartData(c,b);
cartInfo=c.data.cartInfo;
a.resolve(c)
}else{b===1?ecCom.rendErrorMess(c,0):"";
a.reject(c)
}},error:function(c){b===1?ecCom.rendErrorMess(c,0):"";
a.reject(c)
}});
return a.promise()
}function renderCartData(d,l){cartInfo=d.data.cartInfo;
var k=d.data.cartInfo,m=d.data.imageHost,n=k.itemInfos;
k.normalItems=[];
k.abnormalItems=[];
var h=k.normalItems;
var e=k.abnormalItems;
k.text=new Object();
k.btn=new Object();
k.CheckOutDisabled=true;
k.link=new Object();
k.text.title=ecCom.I18n.get("ec_cart_headline");
if(n){window.gtm_itemInfos=n;
var p=0;
$.each(n,function(t,x){x.totalCopyTax=0;
x.totalEcTax=0;
x.totalEcTax=getTotalTax(x,"eco_tax",x.totalEcTax);
x.totalCopyTax=getTotalTax(x,"copy_tax",x.totalCopyTax);
x.imgSrc=m+x.sbom.photoPath+imgSize+x.sbom.photoName;
x.sbom.pdpLink=ecCom.getProductLinkByPID(x.sbom.productId)||ec_getPublicPopLinkByPid(x.sbom.productId);
x.sbom.attrValuesString="";
cartItems[x.itemId]=x;
switch(x.invalidCauseReason){case 1:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_1");
e.push(x);
break;
case 5:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_5");
e.push(x);
break;
case 6:if(x.invalidCauseLeftValue===0){x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_4");
e.push(x)
}else{x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_5");
h.push(x)
}break;
case 7:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_6")+x.invalidCauseLeftValue;
h.push(x);
break;
case 8:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_6")+x.invalidCauseLeftValue;
h.push(x);
break;
case 9:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_10");
e.push(x);
break;
case 10:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_11");
e.push(x);
break;
case 11:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_12");
e.push(x);
break;
case 12:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_13");
e.push(x);
break;
case 13:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_14");
e.push(x);
break;
case 14:x.invalidCauseTips=ecCom.I18n.get("ec_cart_invalid_15");
e.push(x);
break;
default:k.CheckOutDisabled=false;
h.push(x);
break
}var w=false;
if(x.invalidCauseReason!==0){p++;
w=true
}var s=x.subItems;
if(s){var u=[];
var v=[];
var r=[];
var q=[];
$.each(s,function(z,y){if(w!==true&&y.invalidCauseReason!==0&&y.itemType!=="G"){p++;
w=true
}switch(y.invalidCauseReason){case 1:y.invalidCauseTips=y.itemName+ecCom.I18n.get("ec_cart_invalid_1");
x.subItemsError=true;
break;
case 6:if(y.invalidCauseLeftValue===0){y.invalidCauseTips=y.itemName+", "+ecCom.I18n.get("ec_cart_invalid_8")
}else{y.invalidCauseTips=y.itemName+", "+ecCom.I18n.get("ec_cart_invalid_9")+y.invalidCauseLeftValue
}x.subItemsError=true;
break;
default:if(y.invalidCauseReason===2||y.invalidCauseReason===3||y.invalidCauseReason===4){y.invalidCauseTips=y.itemName+ecCom.I18n.get("ec_cart_invalid_2");
x.subItemsError=true
}break
}switch(y.itemType){case"G":y.imgSrc=m+y.sbom.photoPath+imgSize+y.sbom.photoName;
y.sbom.pdpLink=ecCom.getProductLinkByPID(y.sbom.productId)||ec_getPublicPopLinkByPid(y.sbom.productId);
y.color=y.sbom.skuAttrValues&&y.sbom.skuAttrValues.length>0?y.sbom.skuAttrValues[0].attrValue:"";
v.push(y);
x.giftItems=v;
break;
case"P":y.imgSrc=m+y.sbom.photoPath+imgSize+y.sbom.photoName;
y.sbom.pdpLink=ecCom.getProductLinkByPID(y.sbom.productId)||ec_getPublicPopLinkByPid(y.sbom.productId);
y.color=y.sbom.skuAttrValues&&y.sbom.skuAttrValues.length>0?y.sbom.skuAttrValues[0].attrValue:"";
r.push(y);
x.bundleItems=r;
x.subtotal+=parseFloat(y.salePrice*y.qty);
x.totalEcTax=getTotalTax(y,"eco_tax",x.totalEcTax);
x.totalCopyTax=getTotalTax(y,"copy_tax",x.totalCopyTax);
break;
case"DP":y.imgSrc=m+y.sbom.photoPath+imgSize+y.sbom.photoName;
y.sbom.pdpLink=ecCom.getProductLinkByPID(y.sbom.productId)||ec_getPublicPopLinkByPid(y.sbom.productId);
y.color=y.sbom.skuAttrValues&&y.sbom.skuAttrValues.length>0?y.sbom.skuAttrValues[0].attrValue:"";
q.push(y);
x.complementaryItems=q;
x.subtotal+=parseFloat(y.salePrice*y.qty);
x.totalEcTax=getTotalTax(y,"eco_tax",x.totalEcTax);
x.totalCopyTax=getTotalTax(y,"copy_tax",x.totalCopyTax);
break;
default:if($.inArray(y.itemType,["S1","S6","S15"])>=0){y.sbom.pdpLink=ecCom.getProductLinkByPID(y.sbom.productId)||ec_getPublicPopLinkByPid(y.sbom.productId);
u.push(y);
x.serviceItems=u;
x.subtotal+=parseFloat(y.salePrice*y.qty);
x.totalEcTax=getTotalTax(y,"eco_tax",x.totalEcTax);
x.totalCopyTax=getTotalTax(y,"copy_tax",x.totalCopyTax)
}break
}})
}});
if(p==n.length){k.CheckOutDisabled=true
}}k.buyLimit=[];
for(var f=1;
f<=99;
f++){k.buyLimit.push(f)
}k.is_employee=true;
k.isLogin=false;
sessionStorage.getItem("ec-loginStatus")?k.isLogin=true:"";
k.text.login=ecCom.I18n.get("ec_login");
k.text.sign_out=ecCom.I18n.get("ec_sign_out");
k.isPC=ecCom.isPC;
k.currencyUnit=ecCom.I18n.get("ec_currency_unit");
k.text.Gift=ecCom.I18n.get("ec_gift");
k.text.Bundle=ecCom.I18n.get("ec_bundle");
k.text.ComplementaryProducts=ecCom.I18n.get("ec_complementary_products");
k.text.Service=ecCom.I18n.get("ec_service");
k.text.Qty=ecCom.I18n.get("ec_quantity");
k.btn.change=ecCom.I18n.get("ec_change");
k.btn.remove=ecCom.I18n.get("ec_remove");
k.cartLimit=cartLimit;
k.text.FullTips=ecCom.I18n.get("ec_full_cart_msg");
k.text.Total=ecCom.I18n.get("ec_total");
k.text.OfVatCharged=ecCom.I18n.get("ec_of_vat_charged");
k.text.Subtotal=ecCom.I18n.get("ec_subtotal");
k.text.IncludingVAT=ecCom.I18n.get("ec_including_vat");
k.text.voucherApplied=ecCom.I18n.get("ec_voucher_applied");
k.text.Summary=ecCom.I18n.get("ec_summary");
k.btn.CartAndCheckout=ecCom.I18n.get("ec_cart_and_check_out");
k.btn.ContinueShopping=ecCom.I18n.get("ec_continue_shopping");
k.btn.CheckOut=ecCom.I18n.get("ec_check_out");
k.text.PaymentType=ecCom.I18n.get("ec_support_payment_type");
k.paymentTypes=[];
k.text.GiftTips=ecCom.I18n.get("ec_cart_gift_tip");
var b=0;
if(n&&parseInt(n.length-2)>0){b=parseInt(n.length-2)
}k.text.cartLimitTips=ecCom.I18n.get("ec_more_items_msg",b);
k.text.emptyTips=ecCom.I18n.get("ec_empty_msg");
k.btn.shopping=ecCom.I18n.get("ec_go_shopping");
k.text.invalidCauseTitle=ecCom.I18n.get("ec_cart_invalid_7");
k.text.cart=ecCom.I18n.get("ec_cart");
k.link.cartLink=dialogLinkHandler($("#ec-url-cartLink").val());
k.text.notify=ecCom.I18n.get("ec_notify");
k.text.orders=ecCom.I18n.get("ec_orders");
k.link.orderLink=dialogLinkHandler($("#ec-url-orderListLink").val());
k.text.account=ecCom.I18n.get("ec_account");
k.link.accountLink=dialogLinkHandler($("#ec-url-accountLink").val());
k.text.continueShoppingUrl=dialogLinkHandler(continue_shopping);
k.text.total_amount=ecCom.I18n.get("ec_total_amount");
k.text.items=ecCom.I18n.get("ec_items");
k.text.vatAmount=ecCom.I18n.get("ec_vat_amount");
k.text.eco_tax=ecCom.I18n.get("ec_eco_tax");
k.text.copy_tax=ecCom.I18n.get("ec_copy_tax");
k.text.cartCouponTitle=ecCom.I18n.get("ec_get_your_exclusive_discount");
k.text.couponCode=ecCom.I18n.get("ec_coupon_number");
k.text.use=ecCom.I18n.get("ec_use");
k.miniAccountNav=JSON.parse($("#mini-account-nav").val());
k.miniCartNav=$.map(JSON.parse($("#mini-cart-nav").val()),function(i){i.url=dialogLinkHandler(i.url);
return i
});
k.urlPrefix=window.location.href.split(window.location.pathname)[0];
var a,o;
if(location.href.split("productId=")[1]){a=location.href.split("productId=")[1].match(/productId=(\d*)\D/)?location.href.split("productId=")[1].match(/(\d*)\D/):location.href.split("productId=")[1].match(/(\d*)/);
a=a[1]
}switch(l){case 0:if((a&&ecCom.getProductType(a)==="hwerOffer")||ecCom.Util.identifyPageType()==="hwerOffer"){login_employee().then(function(i){if(i.resultCode===401||i.status==="error"||i.resultCode===1){console.log("没有登录");
k.is_employee=true
}else{if(i.status==="success"||i.resultCode===0){k.is_employee=false
}}$("#ecMiniCart").empty().html(template("ecMiniCartArt",k))
},function(r,i,q){$("#ecMiniCart").empty().html(template("ecMiniCartArt",k))
})
}else{$("#ecMiniCart").empty().html(template("ecMiniCartArt",k))
}break;
case 1:$(".paymentData").each(function(){var i={};
i.name=$(this).data("name");
i.imgSrc=$(this).data("src");
k.paymentTypes.push(i)
});
var j=$("#cart_privacy_Statement").val();
j!==""?k.text.privacyStatement=j:"";
if((a&&ecCom.getProductType(a)==="hwerOffer")||ecCom.Util.identifyPageType()==="hwerOffer"){login_employee().then(function(i){if(i.resultCode===401||i.status==="error"||i.resultCode===1){console.log("没有登录");
k.is_employee=true
}else{if(i.status==="success"||i.resultCode===0){k.is_employee=false
}}$("#ecMiniCart").empty().html(template("ecMiniCartArt",k));
ec_pageLoading_end();
$("#cartList").empty().html(template("cartListsArt",k))
},function(r,i,q){$("#ecMiniCart").empty().html(template("ecMiniCartArt",k));
ec_pageLoading_end();
$("#cartList").empty().html(template("cartListsArt",k))
})
}else{$("#ecMiniCart").empty().html(template("ecMiniCartArt",k));
ec_pageLoading_end();
$("#cartList").empty().html(template("cartListsArt",k))
}var c={currentStep:"cart",text_cart:ecCom.I18n.get("ec_my_cart"),text_checkout:ecCom.I18n.get("ec_checkout_title"),text_submitAndPay:ecCom.I18n.get("ec_submit_and_pay")};
$(".eCommerce-title-guide .guide").empty().html(template("titleGuideArt",c));
window.checkQtyBtnStatus();
if(k.originalTotalNumber!=0&&$(".cart-recommended").length===0){window.queryRecommendProducts()
}else{if(k.originalTotalNumber===0){$("#cartRecommended").empty()
}}window.queryDeletedItems();
break
}if($("#cartList .cart-coupon-container").length>0){if(ocInitInfo&&ocInitInfo.showCouponList&&ocInitInfo.showCouponList.length>0){var g=ocInitInfo.showCouponList[0].couponCode;
$(".cart-coupon-container .cart-coupon-input").val(g).change();
ocInitInfo.showCouponList=[];
applyCoupon(g)
}}if(ecCom.Util.identifyPageType()==ecCom.Constants.CB_OFFER){$("#ecMiniCart .ec-mc-goods-btn-wrap .ec-mc-goods-btn-continue").remove();
$("#cartList .cart-total .cart-total-btn-wrap .btn-outline-secondary").remove()
}if(isECommerceSite!=="Vmall-eCommerce"&&k.originalTotalNumber!==0){$(".shop-bag-bnt i.hsvg-cart").addClass("hsvg-cart2")
}else{$(".shop-bag-bnt i.hsvg-cart").removeClass("hsvg-cart2")
}if(isECommerceSite=="Vmall-eCommerce"){$(".ec-mc-goods-list").addClass("hide");
$(".ec-mc-empty").addClass("hide");
$(".ec-mc-nav").addClass("vm-ec-mc-nav")
}}window.checkOutCart=function(f,g){if($(f).hasClass("off")){hwPop.alert({message:ecCom.I18n.get("ec_no_item_to_check_out"),islink:false}).on(function(k){if(k){if(g===0){location.href=dialogLinkHandler($("#ec-url-cartLink").val())
}}});
return
}var b=$(".ec-mc-goods-list .out_stock");
if(b.length>0){var i={};
i.items=[];
i.total=0;
b.each(function(k,m){var o=$(m);
var l=new Object();
var n=o.hasClass("cart_list_subs_no_gift")?o.parents(".ec-mc-goods-list li"):o;
l.itemName=n.attr("data-itemname");
l.itemCode=n.attr("data-itemcode");
l.itemType=n.attr("data-itemtype");
l.qty=1;
i.items.push(l);
i.total++
});
var a={},j=[],d={},h=[];
a.total=i.total;
a.items=[];
$.each(i.items,function(l,k){var m=JSON.stringify(k);
j.push(k.itemCode);
a.items.push(m)
});
$.each(j,function(l,k){d[k]=(d[k]+1)||1
});
$.each(d,function(l,k){h.push(k)
});
a.items=$.unique(a.items.sort());
$.map(a.items,function(k,m){var l=JSON.parse(k);
l.qty=h[m];
return a.items[m]=l
});
var c=a.items.length;
var e=c===1?ecCom.I18n.get("ec_valid_single_item_canot_buy",a.items[0].itemName):ecCom.I18n.get("ec_valid_more_item_canot_buy",[a.items[0].itemName,c]);
hwPop.confirm({message:e,btnrd:ecCom.I18n.get("ec_ok"),btnwt:ecCom.I18n.get("ec_no"),islink:false}).on(function(k){if(k){goToCheckOutPage(g)
}else{if(g===0){location.href=dialogLinkHandler($("#ec-url-cartLink").val())
}}});
return
}else{goToCheckOutPage(g)
}};
function getOrderItemReqArgs(c){var b=[];
var e=[];
var d=c===0?$(".ec-mc-goods-list > li:not(.out_stock,.ec-mc-goods-btn-wrap)"):$(".cart-list > li:not(.out_stock)");
d.each(function(k,i){var m=$(i),n=new Object(),l=new Array(),p=new Array();
if(enableDmpa){var r=m.data("itemname");
var f=m.data("itemcode");
var q=m.data("qty");
var g=m.data("saleprice");
var j=m.data("originalprice");
var h=m.data("tax");
var o={orderId:null,name:r||null,sku:f||null,color:null,configuration:null,productBrand:"Huawei",category:null,price:j||null,salePrice:g||null,currencyCode:ecCurrencyCode||null,variant:null,quantity:q||null,stock:null,coupon:null,orderStatus:null,shippingType:null,shippingAddr:null,invoiceType:null,tax:h||null,storeName:null,subModuleName:"eCommerce"};
e.push(o)
}if(m.find(".cart_list_subs_no_gift.out_stock").length>0){return true
}n.itemId=m.attr("data-itemcode");
n.itemType=m.attr("data-itemtype");
n.qty=m.data("qty");
m.find(".cart_list_subs_gift:not(.out_stock)").each(function(s,t){var u=new Object();
u.sbomCode=$(t).attr("data-itemcode");
l.push(u)
});
n.gifts=l;
m.find(".cart_list_subs_no_gift:not(.out_stock)").each(function(s,t){var u=new Object();
u.itemId=$(t).attr("data-itemcode");
u.itemType=$(t).attr("data-itemtype");
u.qty=$(t).data("qty");
if($(t).hasClass("cart_list_subs_dp")){n.itemProp={};
n.itemProp.dp_package_code=$(t).data("dpcode");
u.itemProp={};
u.itemProp.dp_group=$(t).data("dpgroup")
}if($(t).hasClass("cart_list_subs_p")){n.itemProp={};
n.itemProp.package_code=$(t).data("packagecode")
}p.push(u)
});
n.subOrderItemReqArgs=p;
b.push(n)
});
try{if(enableDmpa&&window.dmpa){window.dmpa("trackECommerce","createOrder",e)
}}catch(a){console.error("dmpa fail: CreateOrder")
}return b
}var goToCheckOutPage=function(d,f,b){var a={};
if(b&&f){a.orderItemReqArgs=d;
a.tradeInData=f
}else{a.orderItemReqArgs=getOrderItemReqArgs(d);
a.couponCode=ocInitInfo.showCouponList.length>0?strEncrypt(ocInitInfo.showCouponList[0].couponCode):null
}ecCom.set("orderItems",a);
ecCom.set("checkout_source",location.href);
var e=$("#ec-url-checkoutLink").val();
var c=ecCom.get("guest_mode")&&ecCom.get("guest_mode")===1?true:false;
if(c){queryLoginStatus(e,"up_guest")
}else{if(!sessionStorage.getItem("ec-loginStatus")){queryLoginStatus(e,"up_guest")
}else{window.open(dialogLinkHandler(e),"_self")
}}};
var getUPLoginUrl=function(c){var a=$.Deferred();
ecCom.set("guest_mode",2);
c=encodeURIComponent(c);
var b=window.digitalData.page.pageInfo.language?window.digitalData.page.pageInfo.language.replace("_","-"):"";
$.ajax({url:loginApiHost+"v1/login/getLogiRegisterPage?siteCode="+ec_siteCode+"&callback="+c+"&lang="+b,type:"GET",dataParams:"",traditional:true,xhrFields:{withCredentials:true},crossDomain:true,success:function(d){if(d.resultCode=="0"){if(d.data.upCenterUrl){window.upPersonalCenterLink=d.data.upCenterUrl
}a.resolve(d.data)
}},error:function(d){a.reject(d)
}});
return a.promise()
};
var rendMniCartIcon=function(){if(sessionStorage.getItem("cartQty")===null){queryCart(0);
return
}var a=ecCom.get("cartQty");
if(a!==0){$(".shop-bag-bnt i.hsvg-cart").addClass("hsvg-cart2")
}};
var getTotalTax=function(b,c,a){if(b.copyTaxes){$.each(b.copyTaxes,function(d,e){if(c===e.taxType){a+=parseFloat(e.totalTaxAmount);
return
}})
}return a
};
window.ecCustomSrcoll=function(a,b){b=b=="outside"?"outside":"inside";
$(a).mCustomScrollbar({scrollButtons:{enable:false},scrollInertia:200,autoDraggerLength:true,autoHideScrollbar:false,scrollbarPosition:b,mouseWheel:{preventDefault:true},theme:"dark-custom"})
};
var dmpaContinueShopping=function(d){try{if(enableDmpa&&window.dmpa){var b=$(d).attr("href");
var a=window.location.href;
var e={category:null,label:ecCom.I18n.get("ec_continue_shopping")||null,value:b||null,location:window.location.href||null,uri:window.location.pathname||null};
window.dmpa("trackEvent","click",e)
}}catch(c){console.error("dmpa fail: ContinueShopping")
}};
var adjustMcGoodsHeight=function(){var c=$(".ec-mc-goods-list > li");
var a=0;
if(c.length>=3){for(var b=0;
b<3;
b++){a+=$(c[b]).outerHeight()
}$(".ec-mc-goods-container").css({"max-height":a,height:a})
}};
window.ecCurrency=function(b){if(isNaN(b)){return b
}b=Number(b).toFixed(2);
b=b.toString();
b=b.replace(/\./g,"POINT");
if(window.thousandSeparator!==""){b=b.replace(/\d+/,function(f){return f.replace(/(\d)(?=(\d{3})+$)/g,function(g){return g+window.thousandSeparator
})
})
}var a=b.split("POINT");
if(a.length===2){var d=window.decimalPoint||".";
b=showDecimal?a[0]+d+a[1]:a[0];
if(showDecimal&&!showIntegerDecimal&&a[1]=="00"){b=a[0]
}}var c=window.showCurrencySpace?" ":"";
var e="";
if(window.putCurrencyFront===true){e=currencyUnit+c+b
}else{e=b+c+currencyUnit
}return e
};
window.ecNumberFormat=function(b){if(isNaN(b)){return b
}b=Number(b).toFixed(2);
b=b.toString();
b=b.replace(/\./g,"POINT");
if(window.thousandSeparator!==""){b=b.replace(/\d+/,function(c){return c.replace(/(\d)(?=(\d{3})+$)/g,function(d){return d+window.thousandSeparator
})
})
}if(window.decimalPoint!==""){var a=b.split("POINT");
a.length===2?b=a[0]+window.decimalPoint+a[1]:""
}return b
};
template.defaults.imports.ecCurrency();
ecCom.rendErrorMess=function(d,c,e){if(ecCom.Util.isEditMode){console.error("api error.");
return
}var h=$.isPlainObject(d);
var g=h?ecCom.getCustomizedErrorMsg(d):d;
if(!e){e=c===0?"reload":"popDefault";
h&&d.resultCode===1010002?e="token":"";
h&&d.resultCode===1004001?e="cartIsFull":""
}var j=null;
var f=ecCom.I18n.get("ec_reload_page");
switch(e){case"reload":j="ec_reload_page";
f=ecCom.I18n.get("ec_reload_page");
break;
case"popDefault":j="";
f=ecCom.I18n.get("ec_ok");
break;
case"goCart":j="ec_go_cart";
f=ecCom.I18n.get("ec_review_cart");
break;
case"cartIsFull":g=ecCom.I18n.get("ec_cart_limit_pop_tips",cartLimit);
j="ec_go_cart";
f=ecCom.I18n.get("ec_review_cart");
break;
case"token":g=ecCom.I18n.get("ec_session_timeout_tips");
j="ec_reload_page";
f=ecCom.I18n.get("ec_reload_page");
break
}switch(c){case 0:if($(".ec-error-mes").length>0){return
}var b='<div class="container ec-error-mes"><div class="ec-mc-empty"><i class="hsvg44 hsvg-face"></i><p>'+g+'</p><a class="btn btn-lg btn-outline-secondary '+j+'" href="javascript:;" role="button" title="'+f+'">'+f+"</a>";
"</div></div>";
$(".ec-content").html(b);
break;
case 1:var i=hwPop.alert({message:g,btnrd:f});
var a=$("#"+i.id);
a.on("shown.bs.modal",function(){a.find("button").addClass(j);
a.find(".modal-body").css("cssText","overflow-y:auto!important")
});
break
}};
var createFusionMinicartHtml=function(){var d=false;
sessionStorage.getItem("ec-loginStatus")?d=true:"";
var e=ecCom.I18n.get("ec_sign_out");
var c=ecCom.I18n.get("ec_login");
var g="";
var b=window.location.href.split(window.location.pathname)[0];
var a="";
if($("body").hasClass("huawei-v3")){if($("#mini-cart-nav").val()){var h=$.map(JSON.parse($("#mini-cart-nav").val()),function(i){i.url=dialogLinkHandler(i.url);
return i
});
$.each(h,function(j,k){var i="";
if(k.iconPath){i='<li><a href="'+k.url+'" class="a-common" cat="pop_up_cart" act="click_on_cart" lab="<page title - >"role = "button" title = "'+k.text+'" > <img class="nav-icon" src="'+k.iconPath+'" />'+k.text+'<i class="hsvg12 hsvg-right"></i></a></li>'
}else{i='<li> <a href="'+k.url+'" class="a-common" cat="pop_up_cart" act="click_on_cart" lab="<page title - >" role="button" title = "'+k.text+'" > <img class="nav-icon d-none" src="'+k.iconPath+'" />'+k.text+'<i class="hsvg12 hsvg-right"></i></a></li> '
}a+=i
})
}if(!ecCom.isPC){var f=JSON.parse($("#mini-account-nav").val());
if(f){$.each(f,function(i,l){var k="";
var j=l.iconPath?"nav-icon":"nav-icon d-none";
if(i==0&&!d){k='<li><a href="javascript:;" role="button" callbackurl="'+b+l.url+'" onclick="loginBeforeAccountCenter(this.attributes.callbackurl.value)" title="'+l.text+'"><img class="'+j+'" src="'+l.iconPath+'" />'+l.text+'<i class="hsvg12 hsvg-right"></i></a></li>'
}else{k='<li><a href="'+l.url+'" role="button" title="'+l.text+'"><img class="'+j+'" src="'+l.iconPath+'" />'+l.text+'<i class="hsvg12 hsvg-right"></i></a></li>'
}a+=k
})
}if(d){g='<li><a id="ec_mc_login_status" href="javascript:;" role="button" title="'+e+'" onclick="toggleLoginStatus(this)"><i class="hsvg24 hsvg-person-2"></i>'+e+"</a></li>"
}else{g='<li><a id="ec_mc_login_status" class="ec-mc-btn-link" href="javascript:;" role="button" title="'+c+'" onclick="toggleLoginStatus(this)">'+c+"</a></li>"
}a+=g
}}return a
};
var createVmallMiniCartContent=function(){var c=createFusionMinicartHtml();
var f=$(".ec-mc");
var h=$(".ec-mc-nav-list");
h.html(c);
var e=hasSecondNav()?$(".second-nav-wrap").height():0;
$(".ec-mc-content").css("max-height",parseInt(window.innerHeight-getHeaderHeight()+e+1));
if(ecCom.isPC){var b=$(".shop-bag-bnt").find("i");
var a=b.offset();
var d=b.width();
var i=parseFloat(getHeaderHeight()-e-5);
var g=parseFloat(a.left-f.width()+d+40);
f.css({left:g,top:i}).toggleClass("on")
}else{if($(".app-nav-icon").hasClass("clicked")){$(".app-nav-icon").trigger("click")
}$(".shop-bag-bnt").toggleClass("on");
f.css({top:parseInt(getHeaderHeight()-e-1),height:parseInt(window.innerHeight-getHeaderHeight()+1+e)}).toggleClass("on");
$("html,body").toggleClass("open-locked");
f.hasClass("on")?f.stop().slideDown():f.stop().slideUp()
}ecCustomSrcoll(".scroll-content","outside")
};
window.addRedPotClass=function(){if($(".shop-bag-bnt span.icon").hasClass("font-ico-bag")){$(".shop-bag-bnt span.icon").removeClass("font-ico-bag").addClass("hsvg-add-bag")
}};
window.removeRedPotClass=function(){if($(".shop-bag-bnt span.icon").hasClass("hsvg-add-bag")){$(".shop-bag-bnt span.icon").removeClass("hsvg-add-bag").addClass("font-ico-bag")
}};
window.renderMiniCartNum=function(a){if(!a){$(".v4.n01-main-navigation .shop-bag .bag-amount").html(a).hide()
}else{$(".v4.n01-main-navigation .shop-bag .bag-amount").html(a>99?"99+":a).show()
}};
}

/*
     FILE ARCHIVED ON 03:35:19 May 08, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:26 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.013
  cdx.remote: 27.607
  LoadShardBlock: 121.376 (3)
  PetaboxLoader3.datanode: 147.869 (4)
  load_resource: 551.753
  PetaboxLoader3.resolve: 492.163
*/