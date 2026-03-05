var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
window.ecCom=window.ecCom||{};
(function(a){a.Constants=(function(){var b={};
b.SITE_ROOT_PATH="/content/huawei-cbg-site/";
b.CACHE_PAGE_PATH="hidden/ecommerce-i18n";
b.CB_OFFER="cbOffer";
b.DEFAULT="default";
b.ADDRESS_ADD="add";
b.ADDRESS_EDIT="edit";
return b
}())
}(ecCom));
(function(a,b){b.Util=(function(){var g=b.Constants.SITE_ROOT_PATH;
var c=b.Constants.CACHE_PAGE_PATH;
var f="/";
var h=".html";
var e="default";
var d={};
d.isEditMode=a("#is-edit-mode").val()=="true";
d.isDispatcher=location.pathname.indexOf(g)==-1;
d.getCurrentLanguage=function(){var j="";
var i=location.pathname;
if(i.startsWith(g)){j=i.split(g)[1].split(f)[0].replace(h,"")
}else{j=i.split(f)[1]
}return j
};
d.callAEMServletBySelector=function(i,j,m){var k=a.Deferred();
var l=d.getCurrentLanguage()+f+c+"."+i;
if(d.isDispatcher){l=f+l+f
}else{l=g+l+h
}if(window.integrationJsInterface||window.integrationJsInterfaceWebview){l=window.location.origin+l
}a.ajax(l,{async:j,dataType:"json",data:m,success:function(n){k.resolve(n)
},error:function(o){var n={};
n.message="Call AEM servlet fail, please check the servlet detail";
n.servletDetail=o.responseText;
k.reject(n)
}});
return k.promise()
};
d.identifyPageType=function(){var i=e;
var j=a("#offer-page-type");
if(j.size()>0){i=j.val()
}return i
};
d.isEmpty=function(i){if(!a.isEmptyObject(i)&&i!=""){return false
}else{return true
}};
d.isNotEmpty=function(i){return !d.isEmpty(i)
};
d.getEnv=function(){var k="";
var i=a("#aem-run-mode");
if(i.size()>0){var j=i.val();
var l=["icsl","uat"];
if(j.indexOf("local")!=-1){k="dev"
}else{if(j.indexOf("prod")!=-1){k="prod"
}else{if(j.indexOf("sit")!=-1||l!=-1){k="test"
}}}}return k
};
return d
}())
}(jQuery,ecCom));
(function(a,b){b.I18n=(function(){var e={};
var i={};
var c="i18n";
var d=600000;
var g="ec_i18n_";
var f=g+"expired_";
e.init=function(){var j=new Date().getTime();
var l=sessionStorage.getItem(f+e.getLocale());
if(b.Util.isEmpty(l)){h()
}else{if(j>=l){sessionStorage.removeItem(g+e.getLocale())
}}var k=sessionStorage.getItem(g+e.getLocale());
i=k?JSON.parse(k):{};
if(a.isEmptyObject(i)){e.initDictionary()
}};
e.initDictionary=function(){b.Util.callAEMServletBySelector(c,false).then(function(j){sessionStorage.setItem(g+e.getLocale(),JSON.stringify(j));
i=j;
h()
})
};
e.get=function(k,j){if(k=="ec_currency_unit"){return digitalData.page.pageInfo.siteCurrency||""
}var l=i[k];
if(!l){l=k
}return e.patchText(l,j)
};
e.getLocale=function(){return document.documentElement.lang.toLocaleLowerCase()
};
e.patchText=function(l,k){if(k||k=="0"){if(a.isArray(k)){for(var j=0;
j<k.length;
j++){l=l.replace("{"+j+"}",k[j])
}}else{l=l.replace("{0}",k)
}}return l
};
var h=function(){var j=new Date(new Date().getTime()+d);
sessionStorage.setItem(f+e.getLocale(),j.getTime())
};
return e
}())
}(jQuery,ecCom));
ecCom.I18n.init();
(function(c,e){var b={};
var a="products";
var d=function(){var g=e.Util.getCurrentLanguage();
var f=sessionStorage.getItem("ec_products_data_"+g);
if(e.Util.isEmpty(f)){e.Util.callAEMServletBySelector(a).then(function(h){b=h;
sessionStorage.setItem("ec_products_data_"+g,JSON.stringify(b))
})
}else{b=JSON.parse(f)
}};
e.getProductColorsByPID=function(g){var f;
if(c.isEmptyObject(b)){f=[]
}else{if(b[g]){f=b[g].colors
}else{f=[]
}}return f
};
e.getProductLinkByPID=function(f){if(e.Util.isEmpty(b)){return""
}var h="";
var g=b[f];
if(g!=undefined){if(g.pdpLink){h=g.pdpLink
}else{h=g.popLink
}}else{if(c("#ec-url-productOptionPageLink").val()){h=c("#ec-url-productOptionPageLink").val()+"?productId="+f
}else{h="/content/huawei-cbg-site/"+ec_siteCode+".html"
}}return dialogLinkHandler(h)
};
e.getPDPLinkByPID=function(f,i){if(e.Util.isEmpty(b)){return""
}var h="";
var g=b[f];
if(g!=undefined){if(g.pdpLink){h=g.pdpLink
}else{h=""
}}else{h=""
}return i?h:window.dialogLinkHandler(h)
};
e.getPCPLinkByPID=function(f,i){if(e.Util.isEmpty(b)){return""
}var h="";
var g=b[f];
if(g!=undefined){if(g.popLink){h=g.popLink
}else{if(c("#ec-url-productOptionPageLink").val()){h=c("#ec-url-productOptionPageLink").val()+"?productId="+f
}else{h="/content/huawei-cbg-site/"+ec_siteCode+".html"
}}}else{if(c("#ec-url-productOptionPageLink").val()){h=c("#ec-url-productOptionPageLink").val()+"?productId="+f
}else{h="/content/huawei-cbg-site/"+ec_siteCode+".html"
}}return i?h:window.dialogLinkHandler(h)
};
e.getProductType=function(g){var f;
var h=b[g];
if(h){f=h.type
}else{f="unknownType"
}return f
};
e.getPIDByProductPath=function(f){if(!f){return""
}for(var h in b){var g=b[h].popLink;
if(g&&g.indexOf(f)!=-1){return h
}}return""
};
if(isECommerceSite&&isECommerceSite!="Fusion-eCommerce"){d()
}}(jQuery,ecCom));
(function(b,c){var a=function(d){var g;
var f=c.Constants.SITE_ROOT_PATH+c.Util.getCurrentLanguage();
var e=["ec-url-cartLink","ec-url-checkoutLink","ec-url-productOptionPageLink","ec-url-addedLink"];
b("#ec-all-urls input").each(function(){var h=b(this);
if(b.inArray(h.attr("id"),e)!=-1){g=h.val().replace(f,d);
h.val(g)
}})
};
b(document).ready(function(){var d=b("#offer-home-page").val();
if(c.Constants.DEFAULT.indexOf(c.Util.identifyPageType())==-1&&d){a(d)
}})
})(jQuery,ecCom);
}

/*
     FILE ARCHIVED ON 03:36:21 May 08, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:25 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.561
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.011
  cdx.remote: 43.513
  LoadShardBlock: 90.773 (3)
  PetaboxLoader3.datanode: 129.801 (5)
  load_resource: 667.298 (2)
  PetaboxLoader3.resolve: 595.512 (2)
*/