var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var hwPageType="support-v2";
$(function(){String.prototype.trimSpecial=function(b){if(b){return this.replace(new RegExp("^\\"+b+"+|\\"+b+"+$","g"),"")
}return this.replace(/^\s+|\s+$/g,"")
};
setTimeout(function(){$(".a-sup-common,#accountNumber,#accountHeader").bind("click",function(){try{var d=$(this).attr("lab")?getContent($(this).attr("lab")):"Error: Not Maintain Value";
var c=$(this).attr("act")?getContent($(this).attr("act")):"Error: Not Maintain Value";
var b=$(this).attr("cat")?getContent($(this).attr("cat")):"Error: Not Maintain Value";
ga("send","event",b,c,d)
}catch(f){}})
},3000);
var a="expressRepaireServiceModify expressRepaireServiceSubmit repairStatusInquirySumbit doorToDoorServiceSubmit appointmentServiceModify appointmentServiceSubmit warrantyQuerySubmit topicPageInteractions topicListSiteSearch mailServiceSubmit homePageSiteSearch sparePartsPriceSubmit userCenterAdd userCenterModify userCenterDelete";
$(document).on(a,function(f){try{var b=DataLayerUtil.getEvent(f.type,"cat");
var c=DataLayerUtil.getEvent(f.type,"act");
var d=DataLayerUtil.getEvent(f.type,"lab");
ga("send","event",b,c,d)
}catch(g){}})
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(g){var a=/\+/g;
function d(k){return b.raw?k:encodeURIComponent(k)
}function h(k){return b.raw?k:decodeURIComponent(k)
}function j(k){return d(b.json?JSON.stringify(k):String(k))
}function c(k){if(k.indexOf('"')===0){k=k.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{k=decodeURIComponent(k.replace(a," "));
return b.json?JSON.parse(k):k
}catch(l){}}function f(l,k){var n=b.raw?l:c(l);
return g.isFunction(k)?k(n):n
}var b=g.cookie=function(u,r,y){if(r!==undefined&&!g.isFunction(r)){y=g.extend({},b.defaults,y);
if(typeof y.expires==="number"){var v=y.expires,x=y.expires=new Date();
x.setTime(+x+v*86400000)
}return(document.cookie=[d(u),"=",j(r),y.expires?"; expires="+y.expires.toUTCString():"",y.path?"; path="+y.path:"",y.domain?"; domain="+y.domain:"",y.secure?"; secure":""].join(""))
}var z=u?undefined:{};
var w=document.cookie?document.cookie.split("; "):[];
for(var q=0,o=w.length;
q<o;
q++){var p=w[q].split("=");
var k=h(p.shift());
var n=p.join("=");
if(u&&u===k){z=f(n,r);
break
}if(!u&&(n=f(n))!==undefined){z[k]=n
}}return z
};
b.defaults={};
g.removeCookie=function(l,k){if(g.cookie(l)===undefined){return false
}g.cookie(l,"",g.extend({},k,{expires:-1}));
return !g.cookie(l)
}
}));
var LAG_SITE_CODE="zh_CN";
var LAG_SOURCE="100000007";
var LAG_CHANNEL_CODE="WEBSITE";
var LAG_COUNTRY_CODE=digitalData.page.pageInfo.countryCode;
var LAG_LANG="zh-cn";
var LAN_LANG_CODE="zh-cn";
var LAG_COUNTRY=digitalData.page.pageInfo.countryCode;
var LAG_LANGUAGE="zh-cn";
var LAG_APP_NUMBER="A182283838";
var LAG_MAP_ICO_URL="//web.archive.org/web/20210506134650/https://consumer-res.huawei.com/etc/designs/huawei-cbg-site/clientlib-support-v2/asset/img/servicenet/map/{index}.png";
var __isAuth=($.cookie("__isAuth")==="true")?true:false;
var isCreateUserInfo=($.cookie("__isCreateUserInfo")==="true")?true:false;
var dcountryCode=digitalData.page.pageInfo.countryCode;
var regpostcode=/^[\s\S]*$/;
if(dcountryCode=="FR"){regpostcode=/^\d{5}$/
}else{if(dcountryCode=="UK"){regpostcode=/^[A-Za-z0-9][A-Za-z0-9 ]{3,6}[A-Za-z0-9]$/
}}var loginstate=-1;
var logininfo={};
var countryLangConfig={AE:{siteCode:"ar_AE",languageCode:"ar",casLangCode:"ar-ae",ccpdLangCode:"en"},BH:{siteCode:"en_BH",languageCode:"en",casLangCode:"en-bh",ccpdLangCode:"en"},EG:{siteCode:"ar_EG",languageCode:"ar",casLangCode:"ar-eg",ccpdLangCode:"en"},JO:{siteCode:"en_JO",languageCode:"en",casLangCode:"en-jo",ccpdLangCode:"en"},KW:{siteCode:"ar_KW",languageCode:"ar",casLangCode:"ar-kw",ccpdLangCode:"en"},LB:{siteCode:"en_LB",languageCode:"en",casLangCode:"en-lb",ccpdLangCode:"en"},SA:{siteCode:"ar_SA",languageCode:"ar",casLangCode:"ar-sa",ccpdLangCode:"en"},AZ:{siteCode:"az_AZ",languageCode:"az",casLangCode:"az-az"},BG:{siteCode:"bg_BG",languageCode:"bg",casLangCode:"bg-bg",ccpdLangCode:"en"},BA:{siteCode:"bs_BA",languageCode:"bs",casLangCode:"bs-ba",ccpdLangCode:"en"},CZ:{siteCode:"cs_CZ",languageCode:"cs",casLangCode:"cs-cz",ccpdLangCode:"en"},DK:{siteCode:"da_DK",languageCode:"da",casLangCode:"da-dk",ccpdLangCode:"en"},AT:{siteCode:"de_AT",languageCode:"de",casLangCode:"de-at",ccpdLangCode:"en"},CH:{siteCode:"de_CH",languageCode:"de",casLangCode:"de-ch"},DE:{siteCode:"de_DE",languageCode:"de",casLangCode:"de-de",ccpdLangCode:"en"},CY:{siteCode:"el_CY",languageCode:"el",casLangCode:"el-cy",ccpdLangCode:"en"},GR:{siteCode:"el_GR",languageCode:"el",casLangCode:"el-gr",ccpdLangCode:"en"},AU:{siteCode:"en_AU",languageCode:"en",casLangCode:"en-au",ccpdLangCode:"en"},BD:{siteCode:"en_BD",languageCode:"en",casLangCode:"en-us",ccpdLangCode:"en"},EN:{siteCode:"en_EN",languageCode:"en",casLangCode:"en-us"},ET:{siteCode:"en_ET",languageCode:"en",casLangCode:"en-us"},GB:{siteCode:"en_GB",languageCode:"en",casLangCode:"en-gb",ccpdLangCode:"en"},GH:{siteCode:"en_GH",languageCode:"en",casLangCode:"en-gh",ccpdLangCode:"en"},IE:{siteCode:"en_IE",languageCode:"en",casLangCode:"en-ie",ccpdLangCode:"en"},IN:{siteCode:"en_IN",languageCode:"en",casLangCode:"en-in",ccpdLangCode:"en"},IQ:{siteCode:"en_IQ",languageCode:"en",casLangCode:"en-us"},JM:{siteCode:"en_JM",languageCode:"en",casLangCode:"en-jm"},KE:{siteCode:"en_KE",languageCode:"en",casLangCode:"en-ke",ccpdLangCode:"en"},KH:{siteCode:"en_KH",languageCode:"en",casLangCode:"en-us",ccpdLangCode:"en"},LK:{siteCode:"en_LK",languageCode:"en",casLangCode:"en-us",ccpdLangCode:"en"},MU:{siteCode:"en_MU",languageCode:"en",casLangCode:"en-mu",ccpdLangCode:"en"},MY:{siteCode:"en_MY",languageCode:"en",casLangCode:"en-my",ccpdLangCode:"en"},NA:{siteCode:"en_NA",languageCode:"en",casLangCode:"en-na"},NG:{siteCode:"en_NG",languageCode:"en",casLangCode:"en-ng",ccpdLangCode:"en"},NP:{siteCode:"en_NP",languageCode:"en",casLangCode:"en-us"},NZ:{siteCode:"en_NZ",languageCode:"en",casLangCode:"en-nz",ccpdLangCode:"en"},OM:{siteCode:"en_OM",languageCode:"en",casLangCode:"en-us",ccpdLangCode:"en"},PH:{siteCode:"en_PH",languageCode:"en",casLangCode:"en-ph",ccpdLangCode:"en"},PK:{siteCode:"en_PK",languageCode:"en",casLangCode:"en-pk",ccpdLangCode:"en"},QA:{siteCode:"en_QA",languageCode:"en",casLangCode:"en-us",ccpdLangCode:"en"},SG:{siteCode:"en_SG",languageCode:"en",casLangCode:"en-sg",ccpdLangCode:"en"},TT:{siteCode:"en_TT",languageCode:"en",casLangCode:"en-tt"},TZ:{siteCode:"en_TZ",languageCode:"en",casLangCode:"en-tz"},UG:{siteCode:"en_UG",languageCode:"en",casLangCode:"en-ug"},US:{siteCode:"en_US",languageCode:"en",casLangCode:"en-us"},ZA:{siteCode:"en_ZA",languageCode:"en",casLangCode:"en-za",ccpdLangCode:"en"},ZM:{siteCode:"en_ZM",languageCode:"en",casLangCode:"en-zm"},AR:{siteCode:"es_AR",languageCode:"es",casLangCode:"es-ar",ccpdLangCode:"es"},BO:{siteCode:"es_BO",languageCode:"es",casLangCode:"es-bo",ccpdLangCode:"es"},CL:{siteCode:"es_CL",languageCode:"es",casLangCode:"es-cl",ccpdLangCode:"es"},CO:{siteCode:"es_CO",languageCode:"es",casLangCode:"es-co",ccpdLangCode:"es"},CR:{siteCode:"es_CR",languageCode:"es",casLangCode:"es-cr",ccpdLangCode:"es"},DO:{siteCode:"es_DO",languageCode:"es",casLangCode:"es-do",ccpdLangCode:"es"},EC:{siteCode:"es_EC",languageCode:"es",casLangCode:"es-ec",ccpdLangCode:"es"},ES:{siteCode:"es_ES",languageCode:"es",casLangCode:"es-es",ccpdLangCode:"es"},GT:{siteCode:"es_GT",languageCode:"es",casLangCode:"es-gt",ccpdLangCode:"es"},HN:{siteCode:"es_HN",languageCode:"es",casLangCode:"es-hn",ccpdLangCode:"es"},MX:{siteCode:"es_MX",languageCode:"es",casLangCode:"es-mx",ccpdLangCode:"es"},PA:{siteCode:"es_PA",languageCode:"es",casLangCode:"es-pa",ccpdLangCode:"es"},PE:{siteCode:"es_PE",languageCode:"es",casLangCode:"es-pe",ccpdLangCode:"es"},PY:{siteCode:"es_PY",languageCode:"es",casLangCode:"es-py",ccpdLangCode:"es"},SV:{siteCode:"es_SV",languageCode:"es",casLangCode:"es-sv",ccpdLangCode:"es"},UY:{siteCode:"es_UY",languageCode:"es",casLangCode:"es-uy",ccpdLangCode:"es"},VE:{siteCode:"es_VE",languageCode:"es",casLangCode:"es-ve"},EE:{siteCode:"et_EE",languageCode:"et",casLangCode:"et-ee",ccpdLangCode:"en"},IR:{siteCode:"fa_IR",languageCode:"fa",casLangCode:"fa-ir"},FI:{siteCode:"fi_FI",languageCode:"fi",casLangCode:"fi-fi",ccpdLangCode:"en"},CA:{siteCode:"fr_CA",languageCode:"fr",casLangCode:"fr-ca",ccpdLangCode:"en"},CD:{siteCode:"fr_CD",languageCode:"fr",casLangCode:"fr-cd"},CI:{siteCode:"fr_CI",languageCode:"fr",casLangCode:"fr-ci"},DZ:{siteCode:"fr_DZ",languageCode:"fr",casLangCode:"fr-dz",ccpdLangCode:"en"},FR:{siteCode:"fr_FR",languageCode:"fr",casLangCode:"fr-fr",ccpdLangCode:"en"},MA:{siteCode:"fr_MA",languageCode:"fr",casLangCode:"fr-ma",ccpdLangCode:"en"},TN:{siteCode:"fr_TN",languageCode:"fr",casLangCode:"fr-tn",ccpdLangCode:"en"},HR:{siteCode:"hr_HR",languageCode:"hr",casLangCode:"hr-hr",ccpdLangCode:"en"},HU:{siteCode:"hu_HU",languageCode:"hu",casLangCode:"hu-hu",ccpdLangCode:"en"},ID:{siteCode:"id_ID",languageCode:"id",casLangCode:"in-id",ccpdLangCode:"en"},IT:{siteCode:"it_IT",languageCode:"it",casLangCode:"it-it",ccpdLangCode:"en"},JP:{siteCode:"ja_JP",languageCode:"ja",casLangCode:"ja-jp",ccpdLangCode:"ja"},KR:{siteCode:"ko_KR",languageCode:"ko",casLangCode:"ko-kr",ccpdLangCode:"en"},LT:{siteCode:"lt_LT",languageCode:"lt",casLangCode:"lt-lt",ccpdLangCode:"en"},LV:{siteCode:"lv_LV",languageCode:"lv",casLangCode:"lv-lv",ccpdLangCode:"en"},MK:{siteCode:"mk_MK",languageCode:"mk",casLangCode:"mk-mk",ccpdLangCode:"en"},MM:{siteCode:"my_MM",languageCode:"my",casLangCode:"my-mm",ccpdLangCode:"en"},BE:{siteCode:"nl_BE",languageCode:"nl",casLangCode:"nl-be",ccpdLangCode:"en"},NL:{siteCode:"nl_NL",languageCode:"nl",casLangCode:"nl-nl",ccpdLangCode:"en"},NO:{siteCode:"no_NO",languageCode:"no",casLangCode:"nb-no",ccpdLangCode:"en"},PL:{siteCode:"pl_PL",languageCode:"pl",casLangCode:"pl-pl",ccpdLangCode:"en"},AO:{siteCode:"pt_AO",languageCode:"pt",casLangCode:"pt-ao"},PT:{siteCode:"pt_PT",languageCode:"pt",casLangCode:"pt-pt",ccpdLangCode:"en"},MD:{siteCode:"ro_MD",languageCode:"ro",casLangCode:"ro-md",ccpdLangCode:"en"},RO:{siteCode:"ro_RO",languageCode:"ro",casLangCode:"ro-ro",ccpdLangCode:"en"},RU:{siteCode:"ru_RU",languageCode:"ru",casLangCode:"ru-ru",ccpdLangCode:"ru"},SK:{siteCode:"sk_SK",languageCode:"sk",casLangCode:"sk-sk",ccpdLangCode:"en"},SI:{siteCode:"sl_SI",languageCode:"sl",casLangCode:"sl-si",ccpdLangCode:"en"},RS:{siteCode:"sr_RS",languageCode:"sr",casLangCode:"sr-sp",ccpdLangCode:"en"},SE:{siteCode:"sv_SE",languageCode:"sv",casLangCode:"sv-se",ccpdLangCode:"en"},TH:{siteCode:"th_TH",languageCode:"th",casLangCode:"th-th",ccpdLangCode:"en"},TR:{siteCode:"tr_TR",languageCode:"tr",casLangCode:"tr-tr",ccpdLangCode:"en"},UA:{siteCode:"uk_UA",languageCode:"uk",casLangCode:"uk-ua",ccpdLangCode:"en"},VN:{siteCode:"vi_VN",languageCode:"vi",casLangCode:"vi-vn",ccpdLangCode:"en"},CN:{siteCode:"zh_CN",languageCode:"zh-cn",casLangCode:"zh-cn"},CN1:{siteCode:"zh_CN",languageCode:"zh-cn",casLangCode:"zh-cn"},HK:{siteCode:"zh-tw_HK",languageCode:"zh-tw",casLangCode:"zh-hk"},TW:{siteCode:"zh-tw_TW",languageCode:"zh-tw",casLangCode:"zh-tw"},UK:{siteCode:"en_GB",languageCode:"en",casLangCode:"en-gb",ccpdLangCode:"en"},LEVANT:{siteCode:"en_LEVANT",languageCode:"en",casLangCode:"en-us"},FA:{siteCode:"fa_FA",languageCode:"fa",casLangCode:"fa-ir"},LATIN:{siteCode:"es_LATIN",languageCode:"es",casLangCode:"es-us",ccpdLangCode:"es"},IL:{siteCode:"he_IL",languageCode:"he",casLangCode:"he-il",ccpdLangCode:"en"},SD:{siteCode:"ar_SD",languageCode:"ar",casLangCode:"ar-sd"},BR:{siteCode:"pt_BR",languageCode:"pt",casLangCode:"pt-br",ccpdLangCode:"en"},KZ:{siteCode:"ru_KZ",languageCode:"ru",casLangCode:"ru-kz",ccpdLangCode:"en"},BY:{siteCode:"ru_BE",languageCode:"ru",casLangCode:"ru-by",ccpdLangCode:"en"},UZ:{siteCode:"ru_UZ",languageCode:"ru",casLangCode:"ru-ru",ccpdLangCode:"en"},LA:{siteCode:"lo_LA",languageCode:"lo",casLangCode:"lo-la",ccpdLangCode:"en"},CG:{siteCode:"fr_CG",languageCode:"fr",casLangCode:"fr-cg"},BW:{siteCode:"en_BW",languageCode:"en",casLangCode:"en-bw"}};
var sysConfig={siteCode:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].siteCode:LAG_SITE_CODE,source:LAG_SOURCE,channelCode:LAG_CHANNEL_CODE,countryCode:LAG_COUNTRY_CODE,langCode:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].languageCode:LAN_LANG_CODE,country:LAG_COUNTRY,language:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].languageCode:LAN_LANG_CODE,mapIcoUrl:LAG_MAP_ICO_URL,lang:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].languageCode:LAN_LANG_CODE,appNumber:LAG_APP_NUMBER,casLangCode:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].casLangCode:LAN_LANG_CODE,ccpdLangCode:countryLangConfig[LAG_COUNTRY_CODE]?countryLangConfig[LAG_COUNTRY_CODE].ccpdLangCode:LAN_LANG_CODE};
sysConfig.reqClientType="27";
if(sysConfig.countryCode=="UK"){sysConfig.countryCode="GB";
sysConfig.country="GB"
}else{if(sysConfig.countryCode=="CN1"){sysConfig.countryCode="CN";
sysConfig.country="CN"
}else{if(sysConfig.countryCode=="EN"){sysConfig.countryCode="Global";
sysConfig.country="Global"
}else{if(digitalData.page.pageInfo.siteCode=="uses"){sysConfig.langCode="es";
sysConfig.language="es";
sysConfig.siteCode="en_US";
sysConfig.casLangCode="es-us";
sysConfig.countryCode="US"
}else{if(digitalData.page.pageInfo.siteCode=="saen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_SA";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="SA";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="sa"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_SA";
sysConfig.casLangCode="ar-sa";
sysConfig.countryCode="SA"
}else{if(digitalData.page.pageInfo.siteCode=="aeen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.lang="en";
sysConfig.siteCode="en_AE";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="AE";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="befr"){sysConfig.langCode="fr";
sysConfig.language="fr";
sysConfig.siteCode="fr_BE";
sysConfig.casLangCode="fr-be";
sysConfig.countryCode="BE";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="chfr"){sysConfig.langCode="fr";
sysConfig.language="fr";
sysConfig.siteCode="fr_CH";
sysConfig.casLangCode="fr-ch";
sysConfig.countryCode="CH"
}else{if(digitalData.page.pageInfo.siteCode=="kwen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_KW";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="KW";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="levantar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_LEVANT";
sysConfig.casLangCode="ar-eg";
sysConfig.countryCode="LEVANT";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="latinen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_LATIN";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="LATIN";
sysConfig.ccpdLangCode="es"
}else{if(digitalData.page.pageInfo.siteCode=="ca"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_CA";
sysConfig.casLangCode="en-ca";
sysConfig.countryCode="CA"
}else{if(digitalData.page.pageInfo.siteCode=="egen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_EG";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="EG"
}else{if(digitalData.page.pageInfo.siteCode=="mmen"){sysConfig.langCode="en";
sysConfig.language="en";
sysConfig.siteCode="en_MM";
sysConfig.casLangCode="en-us";
sysConfig.countryCode="MM";
sysConfig.ccpdLangCode="en"
}else{if(sysConfig.countryCode=="FA"){sysConfig.countryCode="AE";
sysConfig.country="AE";
sysConfig.siteCode="fa_AE";
sysConfig.ccpdLangCode="en"
}else{if(sysConfig.countryCode=="TW"){sysConfig.language="zh-cn"
}else{if(digitalData.page.pageInfo.siteCode=="lvru"){sysConfig.langCode="ru";
sysConfig.language="ru";
sysConfig.siteCode="ru_LV";
sysConfig.casLangCode="ru-lv";
sysConfig.countryCode="LV";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="eeru"){sysConfig.langCode="ru";
sysConfig.language="ru";
sysConfig.siteCode="ru_EE";
sysConfig.casLangCode="ru-ee";
sysConfig.countryCode="EE";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="mdru"){sysConfig.langCode="ru";
sysConfig.language="ru";
sysConfig.siteCode="ru_MD";
sysConfig.casLangCode="ru-md";
sysConfig.countryCode="MD"
}else{if(digitalData.page.pageInfo.siteCode=="qaar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_QA";
sysConfig.casLangCode="ar-qa";
sysConfig.countryCode="QA";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="omar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_OM";
sysConfig.casLangCode="ar-om";
sysConfig.countryCode="OM";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="bhar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_BH";
sysConfig.casLangCode="ar-bh";
sysConfig.countryCode="BH";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="joar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_JO";
sysConfig.casLangCode="ar-jo";
sysConfig.countryCode="JO";
sysConfig.ccpdLangCode="en"
}else{if(digitalData.page.pageInfo.siteCode=="lbar"){sysConfig.langCode="ar";
sysConfig.language="ar";
sysConfig.siteCode="ar_LB";
sysConfig.casLangCode="ar-lb";
sysConfig.countryCode="LB";
sysConfig.ccpdLangCode="en"
}}}}}}}}}}}}}}}}}}}}}}}}}var requestConfig={channelCode:sysConfig.channelCode,countryCode:sysConfig.countryCode,langCode:sysConfig.langCode,country:sysConfig.countryCode,language:sysConfig.language,siteCode:sysConfig.siteCode,ccpdLangCode:sysConfig.ccpdLangCode,groupCode:{}};
var casUrl="";
var apiurl="";
var cmktUrl="";
var cmscApiUrl="";
var huaweitimeApiUrl="";
if((typeof supportv2!="undefined")&&(typeof supportv2.apiBaseUrl!="undefined")){apiurl=supportv2.apiBaseUrl
}if((typeof supportv2!="undefined")&&(typeof supportv2.casUrl!="undefined")){casUrl=supportv2.casUrl
}var ccpcAuthUrl=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=huawei&loginUrl="+encodeURIComponent(casUrl+"/portal/login.html")+"&service="+encodeURIComponent(apiurl+"/web/weblogin/1000");
if((typeof supportv2!="undefined")&&(typeof supportv2.cmktApiUrl!="undefined")){cmktUrl=supportv2.cmktApiUrl
}if((typeof loginApiUrl!="undefined")&&(typeof loginApiUrl.cmscApiUrl!="undefined")){cmscApiUrl=loginApiUrl.cmscApiUrl
}if((typeof loginApiUrl!="undefined")&&(typeof loginApiUrl.huaweitimeApiUrl!="undefined")){huaweitimeApiUrl=loginApiUrl.huaweitimeApiUrl
}if(window.location.href.indexOf("debugClientLibs")<0){window.console.log=function(){}
}var apiSysConfig;
apiSysConfig={async:true,contentType:"application/x-www-form-urlencoded;charset=utf-8",enabledAjaxLoadingAnimate:false,ajaxAnimateGif:"img_con_v27_gif_loading.gif",authUrl:ccpcAuthUrl,outAuthUrl:apiurl+"/web/weblogout/1000",getAuthInfo:apiurl+"/web/getAuthorizationInfo/1000"};
var apiBase={request:function(h,b,n,k,f,l){if(apiurl==null||apiurl==""){return
}var d=b;
try{if(apiSysConfig.enabledAjaxLoadingAnimate==true){$("body").append('<div class="ajax-animate"></div>');
$(".ajax-animate").addClass("show")
}}catch(g){}var a=apiurl+h;
if(h.indexOf("http")==0){a=h
}var c;
if(f==null){c=apiSysConfig.async
}else{c=f
}var j="jsonp";
if(l!=null){j=l
}if(j=="jsonp"){if(sysConfig.countryCode=="MX"||sysConfig.countryCode=="CL"||sysConfig.countryCode=="PE"||sysConfig.countryCode=="CO"||sysConfig.countryCode=="LATIN"||sysConfig.countryCode=="AR"||sysConfig.countryCode=="BR"){$.ajax({url:a,type:"GET",dataType:"html",data:d,async:c,success:function(p){if(p.indexOf("(")>0){var o=p.split("(")[0];
p=p.replace(o,"");
p=p.substr(1,p.length)
}else{p=p.substr(1,p.length)
}p=p.substr(0,p.length-1);
p=$.parseJSON(p);
try{if(p.responseCode!=null&&p.responseCode=="500002"){$.removeCookie("loginCallback",{path:"/"});
if(location.href.indexOf("/user-center")!=-1){if(!$(".user-center").data("isPreviewMode")){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}if(!isShowLogin()){return
}if(a.indexOf("/getServiceCust/1000")!=-1||a.indexOf("/getLeaguerInfo/1000")!=-1){if(location.href.indexOf("/express-repair/create")!=-1||location.href.indexOf("/reservation/create")!=-1||location.href.indexOf("/repair-appointment/create")!=-1||location.href.indexOf("/mail-feedback")!=-1){if($("#IS_PREVIEW_MODE").data("isPreviewMode")==false){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=getLoginUri(null,false);
return
}}catch(q){}n&&n(p);
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
},complete:function(){},error:function(){k&&k();
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
}})
}else{$.ajax({url:a,type:"GET",dataType:"jsonp",jsonp:j,data:d,async:c,success:function(o){console.log(o);
try{if(o.responseCode!=null&&o.responseCode=="500002"){$.removeCookie("loginCallback",{path:"/"});
if(location.href.indexOf("/user-center")!=-1){if(!$(".user-center").data("isPreviewMode")){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}if(!isShowLogin()){return
}if(a.indexOf("/getServiceCust/1000")!=-1||a.indexOf("/getLeaguerInfo/1000")!=-1){if(location.href.indexOf("/express-repair/create")!=-1||location.href.indexOf("/reservation/create")!=-1||location.href.indexOf("/repair-appointment/create")!=-1||location.href.indexOf("/mail-feedback")!=-1){if($("#IS_PREVIEW_MODE").data("isPreviewMode")==false){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=getLoginUri(null,false);
return
}}catch(p){}n&&n(o);
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
},complete:function(){},error:function(){k&&k();
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
}})
}}else{$.ajax({url:a,type:"GET",dataType:"jsonp",data:d,cache:true,async:c,jsonpCallback:j,success:function(o){console.log(o);
try{if(o.responseCode!=null&&o.responseCode=="500002"){$.removeCookie("loginCallback",{path:"/"});
if(location.href.indexOf("/user-center")!=-1){if(!$(".user-center").data("isPreviewMode")){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}if(!isShowLogin()){return
}if(a.indexOf("/getServiceCust/1000")!=-1||a.indexOf("/getLeaguerInfo/1000")!=-1){if(!$("#IS_PREVIEW_MODE").data("isPreviewMode")){return
}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}if(location.href.indexOf("/express-repair/create")!=-1||location.href.indexOf("/reservation/create")!=-1||location.href.indexOf("/repair-appointment/create")!=-1||a.indexOf("/getServiceCustV2/1000")!=-1||a.indexOf("/getLeaguerInfoV2/1000")!=-1){window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")));
return
}}removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=getLoginUri(null,false);
return
}}catch(p){}n&&n(o);
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
},complete:function(){},error:function(){k&&k();
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
}})
}},get:function(a,b){if(apiurl==null||apiurl==""){return
}$.ajax({url:apiurl+a,type:"GET",dataType:"json",async:apiSysConfig.async,success:function(c){console.log(c);
b&&b(c)
}})
},getJSONP:function(a,b){if(apiurl==null||apiurl==""){return
}$.ajax({url:apiurl+a,type:"GET",dataType:"jsonp",jsonp:"jsonp",async:apiSysConfig.async,success:function(c){console.log(c);
b&&b(c)
}})
},post:function(a,f,d,c){if(apiurl==null||apiurl==""){return
}var b="";
if(a.indexOf("http://")==0||a.indexOf("https://")==0){b=a
}else{b=apiurl+a
}$.ajax({url:b,type:"POST",dataType:"json",data:JSON.stringify(f),contentType:"application/json",async:apiSysConfig.async,xhrFields:{withCredentials:true},success:function(g){try{if(g.responseCode!=null&&g.responseCode=="500002"){if(location.href.indexOf("/user-center")!=-1){if(!$(".user-center").data("isPreviewMode")){return
}window.location.href=getLoginUri(null,false);
return
}if(!isShowLogin()){return
}if(b.indexOf("/getServiceCust/1000")!=-1||b.indexOf("/getLeaguerInfo/1000")!=-1||b.indexOf("/getServiceCustV2/1000")!=-1||b.indexOf("/getLeaguerInfoV2/1000")!=-1){var j=location.href;
if(j.indexOf("/express-repair/create")!=-1||j.indexOf("/reservation/create")!=-1||j.indexOf("/repair-appointment/create")!=-1||j.indexOf("/mail-feedback")!=-1||j.indexOf("/repair/pay")!=-1){if($("#IS_PREVIEW_MODE").data("isPreviewMode")==false){return
}window.location.href=getLoginUri(null,false);
return
}}window.location.href=getLoginUri(null,false);
return
}}catch(h){}d&&d(g)
},error:function(){c&&c()
}})
}};
var apiAuth={getAuthInfo:function(b,a){if(apiurl==null||apiurl==""){return
}if(isShowLogin()){if(a===true){$.ajax({url:apiSysConfig.getAuthInfo,type:"GET",dataType:"jsonp",jsonp:"jsonp",data:{},async:apiSysConfig.async,success:function(c){b&&b(c);
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
},complete:function(){},error:function(){$.ajax({url:apiSysConfig.getAuthInfo,type:"GET",dataType:"jsonp",jsonp:"jsonp",data:{},async:apiSysConfig.async,success:function(c){b&&b(c);
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
},complete:function(){},error:function(){error&&error();
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
}});
apiSysConfig.enabledAjaxLoadingAnimate&&$($(".ajax-animate")[0]).remove()
}})
}else{apiBase.request(apiSysConfig.getAuthInfo,{},b,function(){b(null)
})
}}},exitAuth:function(a){if(isShowLogin()||isUnifiedLoginSite()){apiBase.request(apiSysConfig.outAuthUrl,{},a,function(){a(null)
})
}}};
function getUrlParam(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");
var c=window.location.search.substr(1).match(b);
if(c!=null){return decodeURIComponent(c[2])
}return null
}function isLogin(){if(!!$.cookie("ac_loNa")){return true
}else{return false
}}function getLoginUri(a,c){if(casUrl==null||casUrl==""){return""
}var f=window.location.href;
var b;
var d;
if(f.indexOf("loginCallback=true")==-1){if(f.indexOf("?")>0){f=f+"&loginCallback=true"
}else{f=f+"?loginCallback=true"
}}if(a&&a!=""){if(a.indexOf("http://")==0||a.indexOf("https://")==0){f=a
}else{f=location.origin+a
}}var g=cmktUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(f);
if(c){f=f.replace("&loginCallback=true","").replace("?loginCallback=true","");
g=loginApiHost+"v1/login/casLogin?callback="+encodeURIComponent(f)+"&siteCode="+window.digitalData.page.pageInfo.siteCode2
}if($(window).width()>767){b=casUrl+"/portal/loginAuth.html";
d=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=red&loginUrl="+encodeURIComponent(b);
d+="&service="+encodeURIComponent(g)
}else{b=casUrl+"/mobile/standard/wapLogin.html";
d=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000002&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=huawei&loginUrl="+encodeURIComponent(b);
d+="&service="+encodeURIComponent(g)
}return d
}function getCmscLoginUri(a,d){if(casUrl==null||casUrl==""){return""
}var g=window.location.href;
var c;
var f;
var b=false;
if(d===true||d===false){b=d
}else{b=(isECommerceSite=="Self-eCommerce"||isECommerceSite=="Fusion-eCommerce")
}if(g.indexOf("loginCmscCallback=true")==-1){if(g.indexOf("?")>0){g=g+"&loginCmscCallback=true"
}else{g=g+"?loginCmscCallback=true"
}}if(a&&a!=""){if(a.indexOf("http://")==0||a.indexOf("https://")==0){g=a
}else{g=location.origin+a
}}var h=cmscApiUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(g);
if(b){g=g.replace("&loginCmscCallback=true","").replace("?loginCmscCallback=true","");
h=loginApiHost+"v1/login/casLogin?callback="+encodeURIComponent(g)+"&siteCode="+window.digitalData.page.pageInfo.siteCode2
}if($(window).width()>767){c=casUrl+"/portal/loginAuth.html";
f=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=red&loginUrl="+encodeURIComponent(c);
f+="&service="+encodeURIComponent(h)
}else{c=casUrl+"/mobile/standard/wapLogin.html";
f=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000002&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=huawei&loginUrl="+encodeURIComponent(c);
f+="&service="+encodeURIComponent(h)
}return f
}function getHuaweiTimeLoginUri(a,d){if(casUrl==null||casUrl==""){return""
}var g=window.location.href;
var c;
var f;
var b=false;
if(d===true||d===false){b=d
}else{b=(isECommerceSite=="Self-eCommerce"||isECommerceSite=="Fusion-eCommerce")
}if(g.indexOf("loginCallback=true")==-1){if(g.indexOf("?")>0){g=g+"&loginCallback=true"
}else{g=g+"?loginCallback=true"
}}if(a&&a!=""){if(a.indexOf("http://")==0||a.indexOf("https://")==0){g=a
}else{g=location.origin+a
}}var h=huaweitimeApiUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(g);
if(b){g=g.replace("&loginCallback=true","").replace("?loginCallback=true","");
h=loginApiHost+"v1/login/casLogin?callback="+encodeURIComponent(g)+"&siteCode="+window.digitalData.page.pageInfo.siteCode2
}if($(window).width()>767){c=casUrl+"/portal/loginAuth.html";
f=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=red&loginUrl="+encodeURIComponent(c);
f+="&service="+encodeURIComponent(h)
}else{c=casUrl+"/mobile/standard/wapLogin.html";
f=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000002&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=huawei&loginUrl="+encodeURIComponent(c);
f+="&service="+encodeURIComponent(h)
}return f
}function getAsyncUumLoginUri(b){var c=b||getNewUserUrl();
if(casUrl==null||casUrl==""||typeof(mktConfig)==="undefined"||mktConfig.uumApi==null||mktConfig.uumApi==""){return""
}var f=mktConfig.uumApi+"/v1/login/casLogin?callback="+encodeURIComponent(c)+"&siteCode="+window.digitalData.page.pageInfo.siteCode2.toUpperCase();
if(b){f+=($(window).width()<1199.98?"&clientType=95":"&clientType=85")
}else{f+=($(window).width()<1199.98?"&clientType=96":"&clientType=82")
}var a=casUrl+"/portal/loginAuth.html";
var d=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=red&loginUrl="+encodeURIComponent(a);
d+="&service="+encodeURIComponent(f);
return d
}function asyncUumLogin(a){if(window.sessionStorage&&window.sessionStorage.getItem("uumLoginStatus")==="1"){return
}if(casUrl!=null&&casUrl!=""&&typeof(mktConfig)!=="undefined"&&mktConfig.uumApi!=null&&mktConfig.uumApi!=""){$.ajax({type:"get",dataType:"jsonp",jsonp:"jsonp",url:getAsyncUumLoginUri(a),complete:function(){if(window.sessionStorage){window.sessionStorage.setItem("uumLoginStatus","1")
}}})
}}function asyncUumLogout(){if(casUrl!=null&&casUrl!=""&&typeof(mktConfig)!=="undefined"&&mktConfig.uumApi!=null&&mktConfig.uumApi!=""){$.ajax({type:"get",dataType:"jsonp",jsonp:"jsonp",url:mktConfig.uumApi+"/v1/logout/casLogout",complete:function(){}})
}}function getNewUserUrl(){var b="";
var a=supportv2.cmktApiUrl;
if(typeof(a)!="undefined"&&a!=""){b=a+"/services/service/extuser/info"
}return b
}function getRegisterUrl(b){var a="";
if(casUrl&&cmktUrl){if($(window).width()>1023){a=casUrl+"/portal/userRegister/"+(b=="phone"?"regbyphone.html":"regbyemail.html")+"?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&loginUrl="+encodeURIComponent(casUrl+"/portal/loginAuth.html")+"&service="+encodeURIComponent(cmktUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(location.href))+"&lang="+sysConfig.casLangCode+"&themeName=red"
}else{a=casUrl+"/mobile/standard/register/wapRegister.html?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&loginUrl="+encodeURIComponent(casUrl+"/mobile/standard/wapLogin.html")+"&service="+encodeURIComponent(cmktUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(location.href))+"&lang="+sysConfig.casLangCode+"&themeName=huawei"
}}return a
}function getWebsiteLogoutUrl(a){return casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent((a==null)?window.location.href:a))
}function getHuaweiAccount(){var a=getNewUserUrl();
if(a==null||a==""){return
}$.ajax({url:a,type:"GET",dataType:"jsonp",jsonp:"jsonp",success:function(b){if(b.resCode=="0"){try{window.encUser=b.cbg_uid
}catch(c){}if(b.crossSite&&b.crossSite=="1"){loginstate=1
}else{loginstate=0
}logininfo={cbgid:b.uid,name:b.userAccount,ac_loNa:b.ac_loNa,username:b.user};
if(getUrlParam("loginCallback")=="true"&&sysConfig.countryCode=="RU"){try{thirdPartyLogin()
}catch(c){}}}else{removeLoginCookie();
loginstate=3;
loginWhenExpires()
}},error:function(){loginstate=3
}})
}function getHuaweiAccountByRetry(){var a=getNewUserUrl();
if(a==null||a==""){return
}$.ajax({url:a,type:"GET",dataType:"jsonp",jsonp:"jsonp",success:function(b){if(b.resCode=="0"){try{window.encUser=b.cbg_uid
}catch(c){}if(b.crossSite&&b.crossSite=="1"){loginstate=1
}else{loginstate=0
}logininfo={cbgid:b.uid,name:b.userAccount,ac_loNa:b.ac_loNa,username:b.user};
if(getUrlParam("loginCallback")=="true"&&sysConfig.countryCode=="RU"){try{thirdPartyLogin()
}catch(c){}}}else{removeLoginCookie();
loginstate=3
}},error:function(){loginstate=3
}})
}function cmktLogin(){if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",jsonp:"jsonp",url:getLoginUri(getNewUserUrl(),false),complete:function(){}})
}}function cmscLogin(){if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",jsonp:"jsonp",url:getCmscLoginUri(getCmscNewUserUrl(),false),complete:function(){}})
}}function huaweiTimeLogin(){if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",jsonp:"jsonp",url:getHuaweiTimeLoginUri(getNewUserUrl(),false),complete:function(){}})
}}function getCmscNewUserUrl(){var b="";
var a=loginApiUrl.cmscApiUrl;
if(typeof(a)!="undefined"&&a!=""){b=a+"/services/service/extuser/info"
}return b
}function processCmscAndHuaweiTimeLoginStatus(){if(typeof loginApiUrl==="undefined"){return
}var b=supportv2.cmktApiUrl;
var a=loginApiUrl.cmscApiUrl;
var c=loginApiUrl.huaweitimeApiUrl;
if(!!$.cookie("_ext_u_e_")){if(a!=null&&a!=""){$.ajax({url:a+"/services/service/extuser/info",type:"get",dataType:"jsonp",jsonp:"jsonp",success:function(d){if(d.resCode!="0"){cmscLogin()
}}})
}if(!$.cookie("userID")){if(c!=null&&c!=""){huaweiTimeLogin()
}}}else{if(!!$.cookie("userID")){if(b!=null&&b!=""){cmktLogin()
}if(a!=null&&a!=""){cmscLogin()
}}}}function processLoginStatus(){if(!!$.cookie("_ext_u_e_")){if($.cookie("loginCallback")!=="true"){isCompleteUserInfo()
}if(!isUnifiedLoginSite()){return
}var a="cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode;
if(location.href.indexOf("community")!==-1&&location.href.indexOf("community/login")===-1&&typeof getCookie==="function"&&!$.cookie(a)&&!$.cookie("forumLogin")){$.cookie("forumLogin","1",{path:"/"});
try{CommunityUserLogin.login()
}catch(c){}}if(!sessionStorage.getItem("ec-loginStatus")){ecomLogin()
}}else{if((isECommerceSite==="Self-eCommerce"||isECommerceSite==="Fusion-eCommerce")&&typeof ecCom!="undefined"){var b=ecCom.get("guest_mode")&&ecCom.get("guest_mode")===1?true:false;
if((!b&&!!sessionStorage.getItem("ec-loginStatus"))||$.cookie("cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode)){if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",url:getLoginUri(getNewUserUrl(),false),complete:function(){isCompleteUserInfo(null,null,false);
loginstate=-1;
getHuaweiAccountByRetry()
}})
}}if(!b&&!!sessionStorage.getItem("ec-loginStatus")){if(location.href.indexOf("community")!=-1&&!$.cookie("cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode)&&!$.cookie("forumLogin")){$.cookie("forumLogin","1",{path:"/"});
try{CommunityUserLogin.login()
}catch(c){}}}if(!sessionStorage.getItem("ec-loginStatus")&&$.cookie("cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode)){ecomLogin()
}}}}function ecomLogin(){var a;
try{a=getLoginUri((loginApiHost+"v1/login/info?siteCode="+window.digitalData.page.pageInfo.countryCode));
if(a!=null&&a!=undefined&&a!=""&&(isUnifiedLoginSite())){$.ajax({url:a,type:"post",dataType:"jsonp",complete:function(c){window.sessionStorage.setItem("ec-loginStatus","1")
}})
}}catch(b){}}function loginWhenExpires(){if(!isUnifiedLoginSite()){if(typeof cmktLogin==="function"){cmktLogin()
}}else{var a=(typeof ecCom!="undefined")&&ecCom.get("guest_mode")&&ecCom.get("guest_mode")===1?true:false;
if((!a&&!!sessionStorage.getItem("ec-loginStatus"))||$.cookie("cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode)||$.cookie("_ext_u_e_")){$.ajax({type:"get",dataType:"jsonp",url:getLoginUri(getNewUserUrl(),false),complete:function(){isCompleteUserInfo(null,null,false);
loginstate=-1;
getHuaweiAccountByRetry()
}})
}else{if(location.href.indexOf("community")==-1){$(function(){apiAuth.exitAuth()
})
}}}}function isUnifiedLoginSite(){try{if(isECommerceSite){return isECommerceSite==="Self-eCommerce"||isECommerceSite==="Fusion-eCommerce"
}}catch(a){}return false
}function processPrivacy(){if($.cookie("agree-privacy-policy")=="1"){return
}if((sysConfig.countryCode=="GB"||isUnifiedLoginSite())&&location.href.indexOf("/community/")==-1){var b=500;
var a=setInterval(function(){if(loginstate==1||loginstate==0){var f=$(".cbg-support-privacy").val();
var c=$(".agree-privacy").val();
var d=$(".disagree-privacy").val();
showPrivacyPolicy({content:f,okStr:c,cancelStr:d,iconClass:"icon-warin"},function(){$.cookie("agree-privacy-policy","1",{path:"/"})
},function(){apiAuth.exitAuth(function(){removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")))
});
return
});
clearInterval(a)
}if(loginstate==3){clearInterval(a)
}if(b--<1){clearInterval(a)
}},20)
}}function processUumLoginStatus(){try{if(window.location.href.indexOf("loginCallback=true")!==-1&&$.cookie("_ext_u_e_")){asyncUumLogin()
}else{if(window.location.href.indexOf("loginCmscCallback=true")!==-1&&$.cookie("_cuef_u_e_")){asyncUumLogin(getCmscNewUserUrl())
}else{return
}}}catch(a){}}$(function(){if(($(".login-menu-component").length==0&&$(".huawei-v4 .login-v4-wrap .login-v4 .login-v4-cnt .show-login").length==0)){return
}getHuaweiAccount();
processUumLoginStatus();
if(sysConfig.siteCode=="en_EN"){return
}processCmscAndHuaweiTimeLoginStatus();
processLoginStatus();
var a=$(".login-menu-component").attr("data-support-login");
if(typeof(a)!="undefined"&&a=="no"){return
}$(".conv3_nav .icon_close").after($(".login-menu-component").html());
setTimeout(function(){$(".conv3_nav .navcon  .login-menu .login-btn").bind("click",function(c){c.stopPropagation();
$("body").append("<style>@media screen and (max-width:767px){body.ready-login{ height:"+$(window).height()+"px; } body.ready-login .conv3_wrap,body.ready-login .foot_module{display:none!important;} }</style>");
menuPageHistory.ClosePage(function(){callLoginOnClick()
})
});
$(".conv3_nav .navcon  .login-menu").bind("mouseenter",function(c){c.stopPropagation();
$(this).addClass("active")
});
$(".conv3_nav .navcon  .login-menu").bind("click",function(c){c.stopPropagation();
if($(this).hasClass("active")){$(this).removeClass("active")
}else{$(this).addClass("active")
}});
$(".conv3_nav .navcon .login-menu").bind("mouseleave",function(c){c.stopPropagation();
$(this).removeClass("active")
});
$(".conv3_nav .navcon .login-menu .my-exit,.conv3_wrap .user-center .my-exit,.user-info-header .user-info .my-exit").bind("click",function(c){c.stopPropagation();
apiAuth.exitAuth(function(){removeLoginCookie();
window.location.href=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")))
})
});
if(isLogin()==false){$(".conv3_nav .navcon  .login-menu.singin").bind("click",function(c){c.stopPropagation();
$.removeCookie("AuthorizationInfo",{path:"/"});
if(isLogin()){try{}catch(d){}window.location.href=$(".login-menu-component").attr("data-support-usercenter-url")
}else{}})
}else{$(".conv3_nav .navcon  .login-menu").addClass("singin");
var b=$.cookie("userHeadPicture");
if(b!=null&&b!=""){$("body").append("<style>.login-menu.singin,.login-menu.login-phone.singin .user-logined:before{  background-image:url("+b+") } .login-menu.singin .login-menu-contaner:after { content: '"+$.cookie("user")+"'; } </style>")
}$("body").append("<style>.login-menu.singin .login-menu-contaner:after { content: '"+$.cookie("user")+"'; }</style>");
setTimeout(function(){$(".login-menu.singin").click(function(c){c.stopPropagation();
if(isLogin()){try{}catch(d){}window.location.href=$(".login-menu-component").attr("data-support-usercenter-url")
}else{}if($(this).hasClass("active")){$(this).removeClass("active")
}else{$(this).addClass("active")
}})
})
}},200);
$(".huawei-v3 .header-wrap .right-box .login .login-wrap .login-cnt ul li.track-order-v3,.huawei-v3 .header-wrap .right-box .login .login-wrap .login-cnt ul li.app-track-order-v3").on("click",function(b){b.stopPropagation()
})
});
function webLogout(){removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}__isAuth=false;
isCreateUserInfo=false;
if(isECommerceSite=="Self-eCommerce"||isUnifiedLoginSite()){if(casUrl!=null&&casUrl!=""){$.ajax({type:"get",dataType:"jsonp",url:casUrl+"/logout?service="+supportv2.cmktApiUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent(getNewUserUrl()),success:function(){}});
apiAuth.exitAuth()
}}else{apiAuth.exitAuth()
}}function getSitUrl(a){var c=a?a:"";
var b=window.location.origin+"/"+siteCode+"/"+c;
return b
}function huaweitimeLogout(a){if(loginApiUrl.huaweitimeApiUrl!=null&&loginApiUrl.huaweitimeApiUrl!=""){$.ajax({type:"get",dataType:"jsonp",url:casUrl+"/logout?service="+encodeURIComponent(loginApiUrl.huaweitimeApiUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent(getNewUserUrl())),complete:function(){a&&a()
}})
}}function cmscLogout(a){if(casUrl!=null&&casUrl!=""&&loginApiUrl.cmscApiUrl!=null&&loginApiUrl.cmscApiUrl!=""){$.ajax({type:"get",dataType:"jsonp",url:casUrl+"/logout?service="+encodeURIComponent(loginApiUrl.cmscApiUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent(getCmscNewUserUrl())),complete:function(){a&&a()
}})
}}function callLogin(a){if(!isShowLogin()){return
}webLogout();
callLoginOnClick(a)
}function callLoginOnClick(a){if(!isShowLogin()){return
}if(casUrl==null||casUrl==""){return
}$(".login-dialog-component .login-dialog").css("display","block");
$("body").addClass("ready-login");
$("body").append("<style>@media screen and (max-width:767px){ body.ready-login{height:"+($(window).height()-0)+"px; } }</style>");
setTimeout(function(){$(".login-dialog").addClass("show")
},0);
setTimeout(function(){var d=window.location.href;
if(d.indexOf("loginCallback=true")==-1){if(d.indexOf("?")>0){d=d+"&loginCallback=true"
}else{d=d+"?loginCallback=true"
}}if(a&&a!=""){if(a.indexOf("http://")==0||a.indexOf("https://")==0){d=a
}else{d=location.origin+a
}}var f=cmktUrl+"/login/cloudplatforms?siteURL="+encodeURIComponent(d);
var b;
var c;
if($(window).width()>767){b=casUrl+"/portal/loginAuth.html";
c=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000000&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=red&loginUrl="+encodeURIComponent(b);
c+="&service="+encodeURIComponent(f)
}else{b=casUrl+"/mobile/standard/wapLogin.html";
c=casUrl+"/remoteLogin?reqClientType="+sysConfig.reqClientType+"&loginChannel=27000002&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&themeName=huawei&loginUrl="+encodeURIComponent(b);
c+="&service="+encodeURIComponent(f)
}$("#loginFrame").attr("src",c);
$(".login-close").bind("click",function(){$(".login-dialog").removeClass("show");
setTimeout(function(){$(".login-dialog").css("display","none");
$("body").removeClass("ready-login")
},300)
})
},200)
}function needLogin(a){if(!isShowLogin()){return
}if(typeof a=="undefined"){a=$(".user-center").data("isPreviewMode")
}if(!!$.cookie("ac_loNa")){setTimeout(function(){if(a==false){return
}isCompleteUserInfo(function(b,c){if(c=="500002"){return
}})
},2000)
}else{$(function(){setTimeout(function(){if(a==false){return
}window.location.href=getLoginUri(null,false)
},200)
});
apiAuth.exitAuth(function(){removeLoginCookie();
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){removeUnifiedLoginCookie()
}})
}}function isShowLogin(){if(isECommerceSite=="Self-eCommerce"||isECommerceSite=="Fusion-eCommerce"){return true
}var a=$(".login-menu-component").attr("data-support-login")||$(".huawei-v4 .login-v4-wrap .login-v4 .login-v4-cnt .show-login").attr("data-support-login");
if(typeof(a)!="undefined"&&a=="no"){return false
}return true
}$(function(){setTimeout(function(){$("[data-auth-href]").each(function(){$(this).bind("click",function(c){var b=this;
var a=$(this).attr("data-auth-href");
if(isShowLogin()){$.ajax({url:apiurl+"/web/getAuthorizationInfo/1000",type:"GET",dataType:"jsonp",jsonp:"jsonp",data:{},async:true,success:function(d){if(d.responseCode=="200"){window.location.href=$(b).attr("data-auth-href")
}else{$.removeCookie("loginCallback",{path:"/"});
if(location.href.indexOf("/express-repair")!=-1||location.href.indexOf("/reservation")!=-1||location.href.indexOf("/repair-appointment")!=-1){window.location.href=getLoginUri(a,false)
}else{window.location.href=getLoginUri(location.href,false)
}}}})
}else{window.location.href=$(b).attr("data-auth-href")
}})
})
},1000)
});
function authCallback(a){window.location.reload();
if(a.responseCode=="200"){window.location.reload()
}else{}}function removeLoginCookie(){$.removeCookie("ac_loNa",{path:"/"});
$.removeCookie("user",{path:"/"});
$.removeCookie("userHeadPicture",{path:"/"});
$.removeCookie("AuthorizationInfo",{path:"/"});
$.removeCookie("__isAuth",{path:"/"});
$.removeCookie("__isCreateUserInfo",{path:"/"});
$.removeCookie("loginCallback",{path:"/"});
if(window.sessionStorage){window.sessionStorage.removeItem("uumLoginStatus")
}}function removeUnifiedLoginCookie(){try{var a="cbgcommunityUserinfo"+digitalData.page.pageInfo.countryCode;
$.removeCookie(a,{path:"/"});
$.removeCookie("cbgLoginTag",{path:"/"});
sessionStorage.getItem("ec-loginStatus")?sessionStorage.removeItem("ec-loginStatus"):"";
$.removeCookie("login_status",{path:"/"});
$.removeCookie("forumLogin",{path:"/"});
$.removeCookie("user",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("ac_loNa",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("loginUserinfo",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"})
}catch(b){}}function isCompleteUserInfo(d,b,c){if(!isShowLogin()){return
}if(apiurl==null||apiurl==""){return
}var a={};
a.accountId="000";
a.source=sysConfig.source;
$(function(){if($.cookie("loginCallback")==="true"){apiAuth.getAuthInfo(function(f){if(f!=null&&f.responseCode=="500002"){removeLoginCookie();
if(c!=false){window.location.href=getLoginUri(null,false)
}}else{if(f.responseCode=="200"){if(__isAuth){d&&d(isCreateUserInfo,f.responseCode);
return false
}}}},true)
}else{if(__isAuth){d&&d(isCreateUserInfo);
return false
}if(casUrl==null||casUrl==""){return
}$.ajax({type:"get",url:apiSysConfig.authUrl,dataType:"jsonp",jsonp:"jsonp",complete:function(){$.cookie("loginCallback","true",{path:"/"});
thirdPartyLogin()
}})
}})
}function showPrivacyPolicy(b,d,a){var c="<div class='s-dialog-fr-privacy'>   <div class='s-content-dialog'>       <div class='s-dialog-title'>       </div><div class='s-dialog-content'>"+b.content+"       </div><div class='s-dialog-btn'>           <a class='s-btn s-cancel-btn'>"+b.cancelStr+"</a>           <a class='s-btn s-ok-btn'>"+b.okStr+"</a>       </div>   </div></div>";
$("body").append(c);
setTimeout(function(){$(".s-dialog-fr-privacy .s-content-dialog").toggleClass("s-show")
},0);
$(".s-dialog-fr-privacy .s-ok-btn").bind("click",function(){$(".s-dialog-fr-privacy .s-content-dialog").toggleClass("s-show");
$(this).unbind("click");
setTimeout(function(){$("body > .s-dialog-fr-privacy").remove();
d&&d()
},500);
$(".s-dialog-fr-privacy .s-ok-btn,.s-dialog-fr-privacy .s-cancel-bt").unbind("click")
});
$(".s-dialog-fr-privacy  .s-cancel-btn").bind("click",function(){$(".s-dialog .s-content-dialog").toggleClass("s-show");
$(this).unbind("click");
setTimeout(function(){$("body > .s-dialog-fr-privacy").remove();
a&&a()
},500);
$(".s-dialog-fr-privacy .s-ok-btn,.s-dialog-fr-privacy .s-cancel-bt").unbind("click")
})
}function thirdPartyLogin(){var a=$("i.third-party-login-url");
if(a){var b=$("i.third-party-login-url").attr("data-callback-url");
$.ajax({type:"get",url:b,dataType:"jsonp",jsonp:"jsonp",complete:function(){}})
}else{return
}}var apiIRetail={getHotline:function(a,c){var b=a;
b.countryCode=requestConfig.countryCode;
b.langCode=requestConfig.langCode;
apiBase.request("/iRetail/getHotline/1000",b,c)
}};
function checkStorageStatus(){var b=false;
try{if(window.localStorage){b=true
}}catch(a){}return b
}function buildNewKownApplicableRegion(a){if(sysConfig.countryCode=="Global"){a.applicable_region="0"
}else{if(digitalData.page.pageInfo.siteCode=="latin"){a.applicable_region="CO"
}else{if(digitalData.page.pageInfo.siteCode=="latinen"){a.applicable_region="US"
}else{if(digitalData.page.pageInfo.siteCode=="levantar"){a.applicable_region="EG"
}else{if(digitalData.page.pageInfo.siteCode=="levant"){a.applicable_region="US"
}else{a.applicable_region=sysConfig.countryCode
}}}}}return a
}function checkInputStr(b){var a=/^[^"#&'\+;<=>\\]{0,1000}$/;
return a.test(b)
}function getLoginStates(b){var a=$.cookie("_ext_u_e_");
if(a&&(a=="1"||a==1)){b&&b()
}else{apiAuth.exitAuth(function(){removeLoginCookie();
if($(".huawei-v4 .login-v4-wrap .login-v4 .login-v4-cnt .show-login").length>0){var c=getWebsiteLogoutUrl($(".huawei-v4 .login-v4-wrap .login-v4 .login-v4-cnt .show-login").attr("data-support-url"))
}else{var c=casUrl+"/logout?service="+encodeURIComponent(cmktUrl+"/logout/cloudplatforms?siteURL="+encodeURIComponent($(".login-menu-component").attr("data-support-url")))
}window.location.href=c
})
}}var login_leave="";
$(function(){if($(window).width()>1023){if($("#header-v3 .nav-wrap .login").length==0){return
}}else{if($(".app-nav .app-nav-wrap .app-login-icon").length==0){return
}}$(".login-cnt .login-other-items").bind("click",function(b){b.stopPropagation()
});
setTimeout(function(){$("#header-v3 .nav-wrap .login .signInBtn, .app-nav .app-login-icon .signInBtn").bind("click",function(a){if(typeof(communityLogin)!="undefined"){return
}a.stopPropagation();
window.location.href=getLoginUri()
});
$("#header-v3 .nav-wrap .login").bind("mouseenter",function(a){a.stopPropagation();
$(this).addClass("active");
clearTimeout(login_leave)
});
$("#header-v3 .nav-wrap .login, .app-nav .app-login-icon").bind("click",function(a){a.stopPropagation();
if($(this).hasClass("active")){$(this).removeClass("active")
}else{$(this).addClass("active")
}});
$("#header-v3 .nav-wrap .login").bind("mouseleave",function(a){a.stopPropagation();
var b=$(this);
login_leave=setTimeout(function(){b.removeClass("active")
},300)
});
$(".app-login-bullet .app-sign .app-loginout").bind("click",function(a){if(typeof(communityLogin)!="undefined"){return
}window.location.href=$(".app-login-bullet .app-sign .app-loginout").attr("data-url")
});
$("#header-v3 .nav-wrap .login .my-exit,.conv3_wrap .user-center .my-exit,.user-info-header .user-info .my-exit, .app-nav .app-login-icon .my-exit").bind("click",function(a){a.stopPropagation();
apiAuth.exitAuth(function(){$.removeCookie("ac_loNa",{path:"/"});
$.removeCookie("user",{path:"/"});
$.removeCookie("userHeadPicture",{path:"/"});
$.removeCookie("AuthorizationInfo",{path:"/"});
$.removeCookie("__isAuth",{path:"/"});
$.removeCookie("__isCreateUserInfo",{path:"/"});
$.removeCookie("loginCallback",{path:"/"});
$.removeCookie("agree-privacy-policy",{path:"/"});
if(isUnifiedLoginSite()){$.removeCookie("user",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("ac_loNa",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("loginUserinfo",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("cbgLoginTag",{path:"/"+window.digitalData.page.pageInfo.siteCode2+"/"});
$.removeCookie("forumLogin",{path:"/"});
sessionStorage.getItem("ec-loginStatus")?sessionStorage.removeItem("ec-loginStatus"):"";
$.removeCookie("login_status",{path:"/"})
}var b=encodeURIComponent($(".login-menu-component").attr("data-support-url"));
if(location.href.indexOf("/community/")!=-1&&(isUnifiedLoginSite())){b=encodeURIComponent(location.href);
if(location.href.indexOf("/community/user-center")!=-1||location.href.indexOf("/login/")!=-1){b=encodeURIComponent(location.href.substring(0,location.href.lastIndexOf("/community/"))+"/community/")
}}window.location.href=casUrl+"/logout?service="+encodeURIComponent($(".login-menu-component").attr("data-support-cmkt-url")+"/logout/cloudplatforms?siteURL="+b)
})
});
if(isLogin()==false){$("#header-v3 .nav-wrap .login.singin, .app-nav .app-login-icon.singin").bind("click",function(a){a.stopPropagation();
$.removeCookie("AuthorizationInfo");
if(isLogin()){try{}catch(b){}window.location.href=$(".login-menu-component").attr("data-support-usercenter-url")
}else{}})
}else{$("#header-v3 .nav-wrap .login, .app-nav .app-login-icon").addClass("singin");
$(".login-cnt .shop-bag-bnt").bind("click",function(a){a.stopPropagation()
});
$(".login.singin .show-logout .singin-user,.app-login-icon.singin  .app-sign-user .singin-user").text($.cookie("user"));
setTimeout(function(){$(".login.singin").click(function(a){a.stopPropagation();
if(isLogin()){try{}catch(b){}window.location.href=$(".login-menu-component").attr("data-support-usercenter-url")
}else{}if($(this).hasClass("active")){$(this).removeClass("active")
}else{$(this).addClass("active")
}})
})
}},200)
});
function forumLogin(b){var a=window.location.href;
var c="https://"+clientLoginUrl+loginPort+"/oauth2/v2/authorize?reqClientType="+reqClientType+"&response_type=code&client_id="+clientID+"&redirect_uri=https%3A%2F%2F"+window.location.host+"%2F"+digitalData.page.pageInfo.siteCode2+"%2Fcommunity%2Flogin%2F&scope=https%3A%2F%2Fwww.huawei.com%2Fauth%2Faccount%2Fbase.profile&display=page&lang="+sysConfig.casLangCode;
b&&(c=b);
setCookieCommunity("currentUrl",getCookieUri(),24);
if(window.location.href.indexOf("/community")==-1){setCookieCommunity("cbgcommunitylogin","1",24)
}window.location.href=c
}function forumMobileLogin(){window.location.href="https://"+clientUrl+"/CAS/mobile/standard/register/wapRegister.html?reqClientType="+reqClientType+"&loginChannel="+loginChannel+"&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&loginUrl=https%3A%2F%2F"+clientUrl+"%2FCAS%2Fportal%2Flogin.html&service=https%3A%2F%2F"+clientLoginUrl+"%2Foauth2%2Fv2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D"+clientID+"%26redirect_uri%3Dhttps%253A%252F%252F"+window.location.host+"%252F"+digitalData.page.pageInfo.siteCode2+"%252Fcommunity%252Flogin%252F%26scope%3Dhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fbase.profile%26display%3Dpage"
}function forumLogout(){var b=$("#forum-clientLogoutUrl").val();
var a=window.location.href;
if(a.indexOf("/community")==-1){setCookieCommunity("cbgcommunitylogout","1",24)
}window.location.href=b
}function forumMobileLogout(){var d=ajaxUrl+"user/logout";
var c;
if(getCookieCommunity("tk")){c=getCookieCommunity("tk")
}var f={};
if(SITE_CODE=="worldwide"){f.site=digitalData.page.pageInfo.siteCode
}else{f.site=SITE_CODE
}if(getCookieCommunity("loginUserinfo")){var b=JSON.parse(getCookieCommunity("loginUserinfo"));
f.loginUserId=b.userId
}else{return
}var a=window.location.protocol+"//"+window.location.host+"/"+digitalData.page.pageInfo.siteCode2;
f.redirectUri=encodeURIComponent(a);
$.ajax({url:d,type:"post",data:JSON.stringify(f),dataType:"json",xhrFields:{withCredentials:true},headers:{CSRFToken:c},crossDomain:true,contentType:"application/json",success:function(j,g,h){$(".forum-login,.app-login-icon").removeClass("singin");
delCookieCommunity("currentUrl");
delCookieCommunity("cbgcommunitylogin");
if(h.getResponseHeader("CSRFToken")){c=h.getResponseHeader("CSRFToken");
delCookieCommunity("tk");
setCookieCommunity("tk",h.getResponseHeader("CSRFToken"),24)
}if(j.resultCode=="1"||!j.resultCode){if(getCookieCommunity("loginUserinfo")){delCookieCommunity("loginUserinfo")
}if(getCookieCommunity("blacklist")){delCookieCommunity("blacklist",false)
}if(window.localStorage&&window.localStorage.getItem("pactList")){window.localStorage.removeItem("pactList")
}if(j&&j.url){window.location.href=j.url
}else{window.location.href="/"+digitalData.page.pageInfo.siteCode2
}}else{CommunityLoginFailTipDialog(j.resultMsg,function(){})
}},error:function(k,g,h){if(k.getResponseHeader("CSRFToken")){c=k.getResponseHeader("CSRFToken");
setCookieCommunity("tk",k.getResponseHeader("CSRFToken"),24)
}if(k&&k.responseJSON){CommunityLoginFailTipDialog(k.responseJSON.resultMsg,function(){})
}else{var j=$("#forum-networkplroblemtips").val();
CommunityLoginFailTipDialog(j,function(){})
}}})
}function setCookieCommunity(b,c,a){var d=new Date();
d.setTime(d.getTime()+a*60*60*1000);
document.cookie=b+"="+escape(c)+((a==null)?"":";expires="+d.toGMTString())+";path=/"+digitalData.page.pageInfo.siteCode2+"/;"
}function getCookieCommunity(b){if(document.cookie.length>0){var c=document.cookie.indexOf(b+"=");
if(c!=-1){c=c+b.length+1;
var a=document.cookie.indexOf(";",c);
if(a==-1){a=document.cookie.length
}return unescape(document.cookie.substring(c,a))
}}return""
}function delCookieCommunity(a){var b=new Date();
b.setTime(b.getTime()-1);
var c=getCookieCommunity(a);
if(c!=null&&c!=""){document.cookie=a+"=;expires="+b.toGMTString()+";path=/"+digitalData.page.pageInfo.siteCode2+"/;"
}}function getLoginStateCommunity(){var a=getCookieCommunity("loginUserinfo");
if(a&&a!=""){$(".forum-login,.app-login-icon").addClass("singin")
}else{$(".forum-login,.app-login-icon").removeClass("singin")
}}function getCookieUri(){var a=window.location.pathname;
a=a.substring(1,a.length);
a=a.substring(a.indexOf("/")+1,a.length);
if(a==""){a=" "
}return a
}function popWindowInHomepageCommunity(){var a=getCookieCommunity("popcommunity");
if(a&&a!=""){return
}else{setTimeout(function(){$(".forum-home-mask").show()
},500);
setCookieCommunity("popcommunity","1",720)
}}function goAccountCenter(){var a=window.location.href;
var c=a.substring(0,a.lastIndexOf("user-center"));
var b="https://"+clientUrl+"/AMW/portal/userCenter/index.html?loginChannel=40005000&reqClientType=3040&lang="+sysConfig.casLangCode+"&service="+c+"/login/";
window.open(b)
}function CommunityLoginFailTipDialog(b,c){var a="<div class='community-dialog'>   <div class='s-info-dialog'>       <div class='s-info-title'>           <h3><span class='fail-icon'></span>"+b+"</h3>       </div>   </div></div>";
$("body").append(a);
setTimeout(function(){$(".community-dialog .s-info-dialog").toggleClass("s-show");
setTimeout(function(){$(".community-dialog .s-info-dialog").css("opacity",0);
setTimeout(function(){$("body > .community-dialog").remove();
c&&c()
},1600)
},1600)
},0)
}$(function(){if(typeof(communityLogin)=="undefined"){return
}getLoginStateCommunity();
if(digitalData.page.category.pageType=="homepage"&&$("#forum-showPop").val()=="1"){popWindowInHomepageCommunity()
}$(".forum-login .signInBtn, .app-nav .forum-login-app .signInBtn").click(function(){forumLogin()
});
$(".forum-login .registeredBtn").click(function(){var a="https://"+clientUrl+"/CAS/portal/userRegister/regbyphone.html?reqClientType="+reqClientType+"&loginChannel="+loginChannel+"&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&loginUrl=https%3A%2F%2F"+clientUrl+"%2FCAS%2Fportal%2Flogin.html&service=https%3A%2F%2F"+clientLoginUrl+"%2Foauth2%2Fv2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D"+clientID+"%26redirect_uri%3Dhttps%253A%252F%252F"+window.location.host+"%252F"+digitalData.page.pageInfo.siteCode2+"%252Fcommunity%252Flogin%252F%26scope%3Dhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fbase.profile%26display%3Dpage";
forumLogin(a)
});
$(".forum-login .logout-btn a").click(function(){ga("send","event","user_center","click_on_logout_tuff","header_navigation");
forumLogout()
});
$(".forum-login-app .registeredBtn").click(function(){forumMobileLogin()
});
$(".forum-login-app .app-logout-btn a").click(function(){forumMobileLogout()
});
$(".forum-login .show-logout .user-info").parent().click(function(){goAccountCenter()
});
$(".forum-home-mask .forum-home-close").click(function(){$(".forum-home-mask").hide()
});
$(".forum-home-mask .sign-button a").click(function(){if($(window).width()<1024){forumMobileLogin()
}else{var a="https://"+clientUrl+"/CAS/portal/userRegister/regbyphone.html?reqClientType="+reqClientType+"&loginChannel="+loginChannel+"&countryCode="+sysConfig.countryCode+"&lang="+sysConfig.casLangCode+"&loginUrl=https%3A%2F%2F"+clientUrl+"%2FCAS%2Fportal%2Flogin.html&service=https%3A%2F%2F"+clientLoginUrl+"%2Foauth2%2Fv2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D"+clientID+"%26redirect_uri%3Dhttps%253A%252F%252F"+window.location.host+"%252F"+digitalData.page.pageInfo.siteCode2+"%252Fcommunity%252Flogin%252F%26scope%3Dhttps%253A%252F%252Fwww.huawei.com%252Fauth%252Faccount%252Fbase.profile%26display%3Dpage";
forumLogin(a)
}});
$(".forum-home-mask .sign-text a").click(function(){forumLogin()
})
});
if(typeof allowHA!="undefined"&&allowHA){(function(){var p="2.1.5.301",av,c=screen.width,X=screen.height,o=1,H=false,y="",b=500,l=30*60*1000,g=location.href,ae="HW_",at="",L=false,J=false,K="baseinfotype",I="customEvent",G="elementEvent",E="clickEvent",ab=0,S="",ap="",Y=true,ah=false,aa=0,U=document.referrer,h="",W="",r="",j="",F="",au=1,f="",A="",af="",v=false,a={},d="",al=new Date().getTime(),ag=-1,ac="",aj="",n={},aq={},P={type:function(){var aw=navigator.userAgent;
if(aw.match(/AppleWebKit.*Mobile.*/)){if(aw.indexOf(" wv")!==-1){return 2
}else{return 1
}}else{return 0
}}()};
_hasdk=function(){function aH(aJ,aL,aI,aK){aJ?ac=aJ:"";
aL?aj=aL:"";
aI?aq=aI:"";
aK?n.cvar=aK:"";
V(I);
return this
}function aw(aJ,aL,aI,aK){aJ?ac=aJ:"";
aL?aj=aL:"";
aI?aq=aI:"";
aK?n.cvar=aK:"";
V(E);
return this
}function aG(aI){aI?d=aI:"";
return this
}function aC(aI){aI?h=aI:"";
return this
}function ay(aI){aI?W=aI:"";
return this
}function aD(aI){aI?av=aI:"";
return this
}function aE(aI){aI?j=aI:"";
return this
}function az(aI){aI?S=aI:"";
return this
}function aB(aI){L=aI;
return this
}function aF(aI){J=aI;
return this
}function aA(aI){aI?ap=aI:"";
return this
}function ax(aI){aI?l=aI:"";
return this
}return{push:an,bindclick:M,sendData:aH,sendClickData:aw,setOnReportUrl:aG,setTitle:ay,setUserAccount:aD,setUid:aE,setCXX:az,setBaseinfotypeSwitch:aB,setWindowCloseSwitch:aF,setSessionTimeoutDuration:ax,setIdsite:aA,setPageData:aC}
}();
(function ad(){ai();
if(window.addEventListener){document.addEventListener("DOMContentLoaded",x,false)
}else{if(window.attachEvent){B()
}}})();
function B(){try{document.documentElement.doScroll("left")
}catch(aw){return setTimeout(B,20)
}L?V("baseinfotype"):""
}function an(){var aw,ay,ax;
for(aw=0;
aw<arguments.length;
aw+=1){ax=arguments[aw];
ay=ax.shift();
try{if(typeof ay==="string"||ay instanceof String){_hasdk[ay].apply(_hasdk,ax)
}else{ay.apply(_hasdk,ax)
}}catch(az){console.error("Invalid method:"+ay+", please check!!!")
}}return this
}function C(ax){var az=ax.split("&");
for(var ay=0;
ay<az.length;
ay++){var aw=az[ay].split("=");
if(aw[0].toLocaleLowerCase()==="token".toLocaleLowerCase()){az.splice(ay,1);
break
}}return az.join("&")
}function ai(){ak();
ab=0;
O(window,"beforeunload",ar,false);
O(document,"visibilitychange",R)
}function R(){if(Y){var aw=new Date().getTime();
ab+=aw-(aa||al)
}else{aa=new Date().getTime()
}Y=!Y
}function ak(){!W?W=document.title:"";
r=document.title;
at=location.host
}function x(){L?V("baseinfotype"):"";
document.removeEventListener("DOMContentLoaded",x,false)
}function q(){H=true;
var aw=t(k("id"));
if(U&&!t(k("refts"))){var ax=new Date().getTime();
D(k("refts"),ax,180*24*60*60*1000,"/");
A=ax
}else{A=t(k("refts"))
}af=t(k("viewts"));
if(!t(k("idvc"))){D(k("idvc"),1,365*24*60*60*1000,"/")
}else{D(k("idvc"),t(k("idvc"))-0+1,365*24*60*60*1000,"/")
}au=t(k("idvc"));
ag=0;
if(aw===""||!aw){var aw=Z(),ax=new Date().getTime();
D(k("id"),aw,365*24*60*60*1000,"/");
D(k("idts"),ax,365*24*60*60*1000,"/");
F=ax;
!av?av=aw:"";
ah=true
}else{F=t(k("idts"));
av?"":av=aw
}Q()
}function Q(){f=t(k("idn"));
if(f===""||!f){f=Z()
}D(k("idn"),f,l,"/")
}function z(aw){var aA="";
for(var ay=0;
ay<aw.length;
ay++){var ax=aw[ay][0];
var az=aw[ay][1];
if(az==null){az=""
}if(ay>0){aA+="&"
}aA=aA+ax+"="+az
}return aA
}function V(az){if(!H){q()
}if(d===""){console.error("serverUrl is empty");
return
}if(ap===""){console.error("idsite is empty");
return
}var ay=[];
a={url:C(window.location.href),title:W,at:al,rf:C(U)};
if(az===K){a.res=c+" X "+X;
if(ag!==-1){var aB=new Date().getTime();
a.cwt=aB;
a.dt=ab
}}if(az===I||az===E){a.en=ac;
a.el=aj;
a.cd=aq
}if(az===G){a.ei=n.elementId===document?"#document":n.elementId;
a.ec=n.cls;
a.ps=n.position;
a.data=n.data===undefined?"":n.data;
a.cd=aq
}ay.push(["type",az]);
ay.push(["vf",av]);
ay.push(["rt",new Date().getTime()]);
if(o===0){ay.push(["pt",encodeURIComponent(JSON.stringify(a))]);
var ax=z(ay);
w(ax)
}else{ay.push(["pt",a]);
Q();
var aA={type:ay[0][1],vf:ay[1][1],rt:ay[2][1],ut:P.type,cxx:S,idsite:ap,suid:j,cvar:n.cvar?n.cvar:h,idts:F,idvc:au,idn:f,refts:A,viewts:af,hsv:p,data:ay[3][1]};
var aw=T(az)+"&idsite="+encodeURIComponent(ap)+"&rec=1&r=886244&h="+new Date().getHours()+"&m="+new Date().getMinutes()+"&s="+new Date().getSeconds()+"&url="+encodeURIComponent(g)+"&_id="+encodeURIComponent(av)+"&_idts="+F+"&_idvc="+au+"&_idn="+f+"&urlref="+U+"&_refts="+A+"&_viewts="+af+"&scd=24&vpr="+c+" X "+X+"&cvar="+encodeURIComponent(n.cvar?n.cvar:h)+"&pdf=1&qt=0&data="+encodeURIComponent(JSON.stringify(aA));
w(aw)
}}function T(ax){var aw="action_name="+encodeURIComponent(W);
if(ax===G||ax===E){aw="link="+encodeURIComponent(W)
}return aw
}function w(aw){var ax=new Image(1,1);
d?ax.src=d+"?"+aw:ax.src="";
u()
}function u(){a={};
n={};
aq={}
}function t(ax){var aw=new RegExp("(^|;)[ ]*"+ax+"=([^;]*)"),ay=aw.exec(document.cookie);
return ay?decodeURIComponent(ay[2]):0
}function D(aC,az,ay,aB,ax,aA){var aw;
if(ay){aw=new Date();
aw.setTime(aw.getTime()+ay)
}document.cookie=aC+"="+encodeURIComponent(az)+(ay?";expires="+aw.toGMTString():"")+";path="+(aB||"/")+(ax?";domain="+ax:"")+(aA?";secure":"")
}function Z(){var az=[];
var aw="0123456789abcdef";
for(var ax=0;
ax<36;
ax++){az[ax]=aw.substr(Math.floor(Math.random()*16),1)
}az[14]="4";
az[19]=aw.substr((az[19]&3)|8,1);
az[8]=az[13]=az[18]=az[23]="";
var ay=az.join("");
return ay
}function k(aw){return(ae+aw+"_"+ap+"_"+at).replace(/\./g,"_")
}function am(ay){var ax="",aw="",aA=ay.getMonth()+1,aC=ay.getDate(),aD=ay.getHours(),az=ay.getMinutes(),aE=ay.getSeconds();
if(aA>=1&&aA<=9){aA="0"+aA
}if(aC>=0&&aC<=9){aC="0"+aC
}if(aD>=0&&aD<=9){aD="0"+aD
}if(az>=0&&az<=9){az="0"+az
}if(aE>=0&&aE<=9){aE="0"+aE
}var aB=ay.getFullYear()+ax+aA+ax+aC+""+aD+aw+az+aw+aE;
return aB
}function M(aw,ax,ay,aA){var az=aw===document?document:document.getElementById(aw);
if(az){ao(az,ay,aw,ax,aA)
}return this
}function N(aA,ax,az,aB,aC){var ay=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
var aw=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
n.elementId=ax;
n.cls=az.className;
n.data=aA;
n.cvar=aC;
n.position={res:aB.screenX+"X"+aB.screenY,vpr:aB.clientX+"X"+aB.clientY,doc:aw+"X"+ay};
V(G)
}function ao(aA,az,ax,ay,aB){function aw(aC){N(az,ax,aA,aC,aB)
}O(aA,ay,aw)
}function O(ay,ax,aw){ay.attachEvent?ay.attachEvent("on"+ax,aw):ay.addEventListener(ax,aw,false)
}function ar(){var aw,ay=new Date().getTime(),az=ay+b;
R();
D(k("viewts"),ay,365*24*60*60*1000,"/");
J?V("baseinfotype"):"";
if(az){var ax=0;
do{aw=new Date();
ax++;
if(ax>1000){break
}}while(aw.getTime()<az)
}}})();
if(typeof module!=="undefined"&&typeof module.exports==="object"){module.exports=_hasdk
}}(function(f){var p=function(t,r){return(t<<r)|(t>>>(32-r))
};
var a=function(w,t){var y,r,v,x,u;
v=(w&2147483648);
x=(t&2147483648);
y=(w&1073741824);
r=(t&1073741824);
u=(w&1073741823)+(t&1073741823);
if(y&r){return(u^2147483648^v^x)
}if(y|r){if(u&1073741824){return(u^3221225472^v^x)
}else{return(u^1073741824^v^x)
}}else{return(u^v^x)
}};
var q=function(r,u,t){return(r&u)|((~r)&t)
};
var o=function(r,u,t){return(r&t)|(u&(~t))
};
var l=function(r,u,t){return(r^u^t)
};
var k=function(r,u,t){return(u^(r|(~t)))
};
var h=function(u,t,z,y,r,v,w){u=a(u,a(a(q(t,z,y),r),w));
return a(p(u,v),t)
};
var c=function(u,t,z,y,r,v,w){u=a(u,a(a(o(t,z,y),r),w));
return a(p(u,v),t)
};
var j=function(u,t,z,y,r,v,w){u=a(u,a(a(l(t,z,y),r),w));
return a(p(u,v),t)
};
var d=function(u,t,z,y,r,v,w){u=a(u,a(a(k(t,z,y),r),w));
return a(p(u,v),t)
};
var g=function(v){var z;
var u=v.length;
var t=u+8;
var y=(t-(t%64))/64;
var x=(y+1)*16;
var A=Array(x-1);
var r=0;
var w=0;
while(w<u){z=(w-(w%4))/4;
r=(w%4)*8;
A[z]=(A[z]|(v.charCodeAt(w)<<r));
w++
}z=(w-(w%4))/4;
r=(w%4)*8;
A[z]=A[z]|(128<<r);
A[x-2]=u<<3;
A[x-1]=u>>>29;
return A
};
var b=function(v){var u="",r="",w,t;
for(t=0;
t<=3;
t++){w=(v>>>(t*8))&255;
r="0"+w.toString(16);
u=u+r.substr(r.length-2,2)
}return u
};
var n=function(t){t=t.replace(/\x0d\x0a/g,"\x0a");
var r="";
for(var v=0;
v<t.length;
v++){var u=t.charCodeAt(v);
if(u<128){r+=String.fromCharCode(u)
}else{if((u>127)&&(u<2048)){r+=String.fromCharCode((u>>6)|192);
r+=String.fromCharCode((u&63)|128)
}else{r+=String.fromCharCode((u>>12)|224);
r+=String.fromCharCode(((u>>6)&63)|128);
r+=String.fromCharCode((u&63)|128)
}}}return r
};
f.extend({md5:function(r){var A=Array();
var K,L,t,z,J,U,T,R,O;
var H=7,F=12,D=17,B=22;
var S=5,P=9,N=14,M=20;
var y=4,w=11,v=16,u=23;
var I=6,G=10,E=15,C=21;
r=n(r);
A=g(r);
U=1732584193;
T=4023233417;
R=2562383102;
O=271733878;
for(K=0;
K<A.length;
K+=16){L=U;
t=T;
z=R;
J=O;
U=h(U,T,R,O,A[K+0],H,3614090360);
O=h(O,U,T,R,A[K+1],F,3905402710);
R=h(R,O,U,T,A[K+2],D,606105819);
T=h(T,R,O,U,A[K+3],B,3250441966);
U=h(U,T,R,O,A[K+4],H,4118548399);
O=h(O,U,T,R,A[K+5],F,1200080426);
R=h(R,O,U,T,A[K+6],D,2821735955);
T=h(T,R,O,U,A[K+7],B,4249261313);
U=h(U,T,R,O,A[K+8],H,1770035416);
O=h(O,U,T,R,A[K+9],F,2336552879);
R=h(R,O,U,T,A[K+10],D,4294925233);
T=h(T,R,O,U,A[K+11],B,2304563134);
U=h(U,T,R,O,A[K+12],H,1804603682);
O=h(O,U,T,R,A[K+13],F,4254626195);
R=h(R,O,U,T,A[K+14],D,2792965006);
T=h(T,R,O,U,A[K+15],B,1236535329);
U=c(U,T,R,O,A[K+1],S,4129170786);
O=c(O,U,T,R,A[K+6],P,3225465664);
R=c(R,O,U,T,A[K+11],N,643717713);
T=c(T,R,O,U,A[K+0],M,3921069994);
U=c(U,T,R,O,A[K+5],S,3593408605);
O=c(O,U,T,R,A[K+10],P,38016083);
R=c(R,O,U,T,A[K+15],N,3634488961);
T=c(T,R,O,U,A[K+4],M,3889429448);
U=c(U,T,R,O,A[K+9],S,568446438);
O=c(O,U,T,R,A[K+14],P,3275163606);
R=c(R,O,U,T,A[K+3],N,4107603335);
T=c(T,R,O,U,A[K+8],M,1163531501);
U=c(U,T,R,O,A[K+13],S,2850285829);
O=c(O,U,T,R,A[K+2],P,4243563512);
R=c(R,O,U,T,A[K+7],N,1735328473);
T=c(T,R,O,U,A[K+12],M,2368359562);
U=j(U,T,R,O,A[K+5],y,4294588738);
O=j(O,U,T,R,A[K+8],w,2272392833);
R=j(R,O,U,T,A[K+11],v,1839030562);
T=j(T,R,O,U,A[K+14],u,4259657740);
U=j(U,T,R,O,A[K+1],y,2763975236);
O=j(O,U,T,R,A[K+4],w,1272893353);
R=j(R,O,U,T,A[K+7],v,4139469664);
T=j(T,R,O,U,A[K+10],u,3200236656);
U=j(U,T,R,O,A[K+13],y,681279174);
O=j(O,U,T,R,A[K+0],w,3936430074);
R=j(R,O,U,T,A[K+3],v,3572445317);
T=j(T,R,O,U,A[K+6],u,76029189);
U=j(U,T,R,O,A[K+9],y,3654602809);
O=j(O,U,T,R,A[K+12],w,3873151461);
R=j(R,O,U,T,A[K+15],v,530742520);
T=j(T,R,O,U,A[K+2],u,3299628645);
U=d(U,T,R,O,A[K+0],I,4096336452);
O=d(O,U,T,R,A[K+7],G,1126891415);
R=d(R,O,U,T,A[K+14],E,2878612391);
T=d(T,R,O,U,A[K+5],C,4237533241);
U=d(U,T,R,O,A[K+12],I,1700485571);
O=d(O,U,T,R,A[K+3],G,2399980690);
R=d(R,O,U,T,A[K+10],E,4293915773);
T=d(T,R,O,U,A[K+1],C,2240044497);
U=d(U,T,R,O,A[K+8],I,1873313359);
O=d(O,U,T,R,A[K+15],G,4264355552);
R=d(R,O,U,T,A[K+6],E,2734768916);
T=d(T,R,O,U,A[K+13],C,1309151649);
U=d(U,T,R,O,A[K+4],I,4149444226);
O=d(O,U,T,R,A[K+11],G,3174756917);
R=d(R,O,U,T,A[K+2],E,718787259);
T=d(T,R,O,U,A[K+9],C,3951481745);
U=a(U,L);
T=a(T,t);
R=a(R,z);
O=a(O,J)
}var Q=b(U)+b(T)+b(R)+b(O);
return Q.toLowerCase()
}})
})(jQuery);
function getDmpaClient(){return(window.viewType()=="mobile")?"mobile":"pc"
}function getDmpaSid(){return $.md5(new Date().getTime()+""+Math.random())
}function getDmpaSite(){return window.digitalData.page.pageInfo.siteCode2.toUpperCase()
}var dmpa_site_code=window.digitalData.page.pageInfo.siteCode;
var dmpa_site_id=(dmpa_site_code=="cn")?"consumer-cn":getDmpaSite();
var dmpa_session_obj;
var dmpa_cn_site_code="cn";
var dmpa_us_site_code="us";
var nowtime=new Date().getTime();
var dmpa_sessionid;
var eVars1;
var eVars2;
var eVars3;
var eVars4;
if(checkStorageStatus()){try{dmpa_session_obj=window.localStorage.dmpa_session_obj;
if(!dmpa_session_obj||JSON.parse(localStorage.dmpa_session_obj).expires<nowtime){dmpa_sessionid=$.md5(new Date().getTime()+""+Math.random());
localStorage.setItem("dmpa_session_obj",JSON.stringify({id:dmpa_sessionid,expires:nowtime+3*30*24*3600*1000}))
}else{dmpa_sessionid=JSON.parse(localStorage.dmpa_session_obj).id
}}catch(e){dmpa_sessionid=$.md5(new Date().getTime()+""+Math.random())
}}else{dmpa_sessionid=$.md5(new Date().getTime()+""+Math.random())
}function addCcpcDmpaAnalytics(j,d,f,k,b){if(dmpa_site_code==dmpa_us_site_code){return
}if(!b){b=getDmpaSid()
}k.sid=b;
f.language=getSiteLanguage();
var a=f.keyWord||f.q;
var h="";
try{a=decodeURIComponent(a?a:"")
}catch(g){}if(f.pageNo&&f.pageNo>1){return
}var c={query:a,searchFrom:j,query_from:j,scope:d,searchParam:f,sid:b,app_id:"www-website",type:"search",action:"customSearch",language:getSiteLanguage(),site:dmpa_site_id,module:d,userId:dmpa_sessionid,site_id:dmpa_site_id,sitecode:getDmpaSite(),source:"web",languagecode:getSiteLanguage(),pageSize:f.pageSize,pageNo:f.pageNo,client:getDmpaClient()};
if(d=="global"){if(f.docCategory=="consumer_press"){c.query_doctype="press"
}else{c.query_doctype=(f.docCategory!==undefined)?"product":"support"
}}if(typeof dmpa==="function"){dmpa("setAutoSendPV",false);
dmpa("set",{siteId:"consumer-cn",user_id:""});
dmpa("setAutoLinkTracking",false)
}trackDmpaSearch(c);
trackCcpcDmpaSearchResult(b,c,k)
}function trackDmpaSearch(c){if(dmpa_site_code==dmpa_us_site_code){return
}var a=JSON.stringify(c);
try{a=decodeURIComponent(a)
}catch(b){}try{dmpa("trackEvent","customSearch",{data:"'"+a+"'"})
}catch(b){if(typeof dmpa=="function"){setTimeout(function(){dmpa("trackEvent","customSearch",{data:"'"+a+"'"})
},2000)
}}}function trackCcpcDmpaSearchResult(d,h,b){if(dmpa_site_code==dmpa_us_site_code){return
}try{var o={};
if(!b.responseCode){if(b.hits||b.relatedProds||isArrayFn(b)){o.responseCode="200";
o.responseData=b
}}else{o=b
}if(o.responseCode=="200"&&!$.isEmptyObject(o.responseData)){var c={};
if(o.responseData.hits){var j=o.responseData.hits.hits;
var a=[];
for(var k=0;
k<j.length;
k++){if(j[k]._type=="crawler"){var l=j[k]._source;
a.push({id:l.docId,title:l.dretitle})
}else{a.push({id:j[k]._id,title:j[k].highlight.title[0]})
}}c.knowList=a
}else{if(o.responseData.relatedProds){var a=[];
var g=o.responseData.relatedProds;
for(var k=0;
k<g.length;
k++){a.push({id:g[k].docId,title:g[k].dretitle})
}c.knowList=a
}else{if(o.responseData){c.knowList=o.responseData
}}}c.sid=d;
c.pageSize=h.pageSize;
c.pageNo=h.pageNo;
c.site_id=dmpa_site_id;
c.sitecode=getDmpaSite();
c.source="web";
c.app_id="www-website";
c.languagecode=getSiteLanguage();
c.scope=h.scope;
c.userId=dmpa_sessionid;
if(o.responseData&&o.responseData.interventions&&o.responseData.interventions!="undefined"){c.interventions=o.responseData.interventions
}var f=JSON.stringify(c);
try{f=decodeURIComponent(f)
}catch(n){}try{dmpa("trackEvent","display",{data:"'"+f+"'"})
}catch(n){if(typeof dmpa=="function"){setTimeout(function(){dmpa("trackEvent","display",{data:"'"+f+"'"})
},2000)
}}}}catch(n){}}function trackCcpcSearchClick(c,h,n,j,a,l,d,p){if(dmpa_site_code==dmpa_us_site_code){return
}try{var b={};
b.sid=c;
b.knowledge_context_id=h;
b.title=n;
b.index=j;
b.pageNo=a;
b.site_id=dmpa_site_id;
b.sitecode=getDmpaSite();
b.source="web";
b.app_id="www-website";
b.languagecode=getSiteLanguage();
b.userId=dmpa_sessionid;
if(d&&d!="undefined"){b.interventions=d
}if(p&&p!="undefined"){b.scope=p
}else{b.scope="service"
}if(p=="global"){if(l=="support"){l="doc";
b.query_doctype="support"
}else{b.query_doctype=(l=="product")?"product":"press"
}}else{if(l=="relatedServices"){delete b.interventions;
var g={};
try{g=JSON.parse(decodeURIComponent(d));
b.knowledge_context_id=g.card_id
}catch(k){}l="card";
b.clickFrom=h;
b.analyticsType=getAnalyticsType(h);
b.ext_data={level3:(g.level3?g.level3:"entrance")}
}else{if(l=="shop"){delete b.interventions;
var g={};
try{g=JSON.parse(decodeURIComponent(d));
b.knowledge_context_id=g.card_id
}catch(k){}l="card";
b.clickFrom=h;
b.analyticsType=getAnalyticsType("service-center");
b.ext_data={level3:"show"}
}}}var f=JSON.stringify(b);
try{f=decodeURIComponent(f)
}catch(k){}var o="";
if(l=="product"){o="clickProduct"
}else{if(l=="card"){o="expressCardClick"
}else{o="clickDoc"
}}try{dmpa("trackEvent",o,{data:"'"+f+"'"})
}catch(k){if(typeof dmpa=="function"){setTimeout(function(){dmpa("trackEvent",o,{data:"'"+f+"'"})
},2000)
}}}catch(k){}}function getVenusTimeString(){var a=new Date();
var b=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":"+a.getSeconds();
return b
}function isArrayFn(a){if(typeof Array.isArray==="function"){return Array.isArray(a)
}else{return Object.prototype.toString.call(a)==="[object Array]"
}}function trackCcpcCardDisplay(b,k,j,l){if(dmpa_site_code==dmpa_us_site_code){return
}if(!l.responseData||l.responseData.length<0){return
}var a={};
if(j=="shop"){var c=l.responseData.extend_data.result.hits.hits;
var g=new Array();
for(var f=0;
f<c.length;
f++){if(f>2){break
}g.push({shopCode:c[f]._id,level3:"show"})
}a.custom_data=g
}else{var c=l.responseData.custom_data;
var g=new Array();
for(var f=0;
f<c.length;
f++){if(f>2){break
}g.push({card_id:c[f].card_id,level3:(c[f].level3?c[f].level3:"entrance")})
}a.custom_data=g
}a.type="card";
a.displayFrom=j;
a.sid=b;
a.site_id=dmpa_site_id;
a.sitecode=getDmpaSite();
a.source="web";
a.app_id="www-website";
a.languagecode=getSiteLanguage();
a.scope=k;
a.userId=dmpa_sessionid;
var d=JSON.stringify(a);
try{d=decodeURIComponent(d);
if(typeof dmpa==="function"){dmpa("setAutoSendPV",false);
dmpa("set",{siteId:"consumer-cn",user_id:""});
dmpa("setAutoLinkTracking",false);
dmpa("trackEvent","cardInfoDisplay",{data:"'"+d+"'"})
}}catch(h){}}function getAnalyticsType(b){var a="";
switch(b.toLocaleLowerCase()){case"express-repair":a="function";
break;
case"reservation":a="function";
break;
case"door-to-door-service":a="function";
break;
case"sparepart-price":a="function";
break;
case"inquiry":a="function";
break;
case"service-center":a="shop";
break;
case"warranty-query":a="function";
break;
case"vipservice":a="function";
break;
case"hicare":a="software";
break;
case"hisuite":a="software";
break;
case"phone clone":a="software";
break;
case"app store":a="software";
break;
case"beta":a="software";
break;
case"hotline":a="hotline";
break;
case"email feedback":a="email";
break;
case"activities":a="activities";
break;
case"roaming":a="function";
break;
case"honor":a="honor";
break;
default:a="function"
}return a
}function getGAData(d){if(!d){return null
}var a=d.split(" - ");
var c=queryVariableD(a[0]);
for(var b=1;
b<a.length;
b++){c=c+" - "+queryVariableD(a[b])
}return c
}window.variableTagD={"<page title>":digitalData.page.pageInfo.pageName,"<URL>":digitalData.page.pageInfo.uri,"<product name>":digitalData.product?digitalData.product.productInfo.marketingName:""};
window.queryVariableD=function(f){var a=window.variableTagD;
var d=f;
var c=/^<.*>$/;
for(var b in a){if(b==f){d=a[b]
}}if(c.test(d)){d=""
}return d
};
function sendDmpaByAttr(c,g,f,d,k,a,b){var c=c?c:"click";
var d=d?getGAData(d):"Error: Not Maintain Value";
var h=f?getGAData(f):"Error: Not Maintain Value";
var g=g?getGAData(g):"Error: Not Maintain Value";
g=g+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var k=k?k:null;
var a=a?a:null;
var b=b?b:null;
var j={category:g,label:d,value:h,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(k!=null){j.QueryResult=k
}if(a!=null){j.SearchPageNum=a
}if(b!=null){j.ProductName=b
}if(typeof dmpa5==="function"){dmpa5("trackEvent",c,j)
}}function sendDmpaByAttr2(f,k,j,h,o,c,d,b,a,g){var f=f?f:"click";
var h=h?getGAData(h):"Error: Not Maintain Value";
var l=j?getGAData(j):"Error: Not Maintain Value";
var k=k?getGAData(k):"Error: Not Maintain Value";
k=k+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var o=o?o:null;
var c=c?c:null;
var d=d?d:null;
var b=b?b:null;
var a=a?a:null;
var g=g?g:null;
var n={category:k,label:h,value:l,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(o!=null){n.QueryResult=o
}if(c!=null){n.SearchPageNum=c
}if(d!=null){n.ProductName=d
}if(b!=null){n.FAQViewTime=b
}if(a!=null){n.FAQChannelEntrance=a
}if(g!=null){n.FAQParameter=g
}if(typeof dmpa5==="function"){dmpa5("trackEvent",f,n)
}}function sendDmpaByAttr3(f,l,k,j,p,c,d,b,a,h,g){var f=f?f:"click";
var j=j?getGAData(j):"Error: Not Maintain Value";
var n=k?getGAData(k):"Error: Not Maintain Value";
var l=l?getGAData(l):"Error: Not Maintain Value";
l=l+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var p=p?p:null;
var c=c?c:null;
var d=d?d:null;
var b=b?b:null;
var a=a?a:null;
var h=h?h:null;
var g=g?g:null;
var o={category:l,label:j,value:n,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(p!=null){o.QueryResult=p
}if(c!=null){o.SearchPageNum=c
}if(d!=null){o.ProductName=d
}if(b!=null){o.FAQViewTime=b
}if(a!=null){o.FAQChannelEntrance=a
}if(h!=null){o.FAQParameter=h
}if(g!=null){o.ContentTitle=g
}if(typeof dmpa5==="function"){dmpa5("trackEvent",f,o)
}}function sendDmpaByData(d){var c=d.eType?d.eType:"click";
var f=d.label?getGAData(d.label):"Error: Not Maintain Value";
var h=d.value?getGAData(d.value):"Error: Not Maintain Value";
var g=d.category?getGAData(d.category):"Error: Not Maintain Value";
g=g+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var k=d.QueryResult?d.QueryResult:null;
var a=d.SearchPageNum?d.SearchPageNum:null;
var b=d.ProductName?d.ProductName:null;
var j={category:g,label:f,value:h,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(k!=null){j.QueryResult=k
}if(a!=null){j.SearchPageNum=a
}if(b!=null){j.ProductName=b
}if(typeof dmpa5==="function"){dmpa5("trackEvent",c,j)
}}function sendDmpaByCurrentTag(k){var a=window.event;
if(!a||!a.isTrusted||$(a.target).closest($(k)).length<1){return
}var d=$(k).attr("dmpa-etype")?$(k).attr("dmpa-etype"):"click";
var f=$(k).attr("lab")?getGAData($(k).attr("lab")):"Error: Not Maintain Value";
var h=$(k).attr("act")?getGAData($(k).attr("act")):"Error: Not Maintain Value";
var g=$(k).attr("cat")?getGAData($(k).attr("cat")):"Error: Not Maintain Value";
g=g+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var l=$(k).attr("queryresult")?$(k).attr("queryresult"):null;
var b=$(k).attr("searchpagenum")?$(k).attr("searchpagenum"):null;
var c=$(k).attr("productname")?$(k).attr("productname"):null;
var j={category:g,label:f,value:h,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(l!=null){j.QueryResult=l
}if(b!=null){j.SearchPageNum=b
}if(c!=null){j.ProductName=c
}if(typeof dmpa5==="function"){dmpa5("trackEvent",d,j)
}}function sendDmpaByClass(a){if(!a||!a.originalEvent||!a.originalEvent.isTrusted){return
}var d=$(this).attr("dmpa-etype")?$(this).attr("dmpa-etype"):"click";
var f=$(this).attr("lab")?getGAData($(this).attr("lab")):"Error: Not Maintain Value";
var h=$(this).attr("act")?getGAData($(this).attr("act")):"Error: Not Maintain Value";
var g=$(this).attr("cat")?getGAData($(this).attr("cat")):"Error: Not Maintain Value";
g=g+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var k=$(this).attr("queryresult")?$(this).attr("queryresult"):null;
var b=$(this).attr("searchpagenum")?$(this).attr("searchpagenum"):null;
var c=$(this).attr("productname")?$(this).attr("productname"):null;
var j={category:g,label:f,value:h,location:window.location.href,uri:window.digitalData.page.pageInfo.uri,subModuleName:"Support"};
if(k!=null){j.QueryResult=k
}if(b!=null){j.SearchPageNum=b
}if(c!=null){j.ProductName=c
}if(typeof dmpa5==="function"){dmpa5("trackEvent",d,j)
}}$(document).on("click",".dmpa-click-dispach",sendDmpaByClass);
function gaAndAaByAttr3(l,k,j,n,c,f,b,a,h,g,d){var j=j?getGAData(j):"Error: Not Maintain Value";
var k=k?getGAData(k):"Error: Not Maintain Value";
var l=l?getGAData(l):"Error: Not Maintain Value";
l=l+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var n=n?n:null;
var c=c?c:null;
var f=f?f:null;
var b=b?b:null;
var a=a?a:null;
var h=h?h:null;
var g=g?g:null;
var d=d?d:null;
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",l,k,j,{dimension7:n,dimension8:c,dimension9:f,dimension10:b,dimension11:a,dimension12:h,dimension13:g,dimension16:d});
ga("send","event",l,k,j)
}}function gaAndAaByAttr2(k,j,h,l,c,f,b,a,g,d){var h=h?getGAData(h):"Error: Not Maintain Value";
var j=j?getGAData(j):"Error: Not Maintain Value";
var k=k?getGAData(k):"Error: Not Maintain Value";
k=k+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var l=l?l:null;
var c=c?c:null;
var f=f?f:null;
var b=b?b:null;
var a=a?a:null;
var g=g?g:null;
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",k,j,h,{nonInteraction:true,dimension7:l,dimension8:c,dimension9:f,dimension10:b,dimension11:a,dimension12:g,dimension14:d});
ga("send","event",k,j,h)
}}function gaAndAaByAttr(b,d,f,a,c,h){var f=f?getGAData(f):"Error: Not Maintain Value";
var d=d?getGAData(d):"Error: Not Maintain Value";
var b=b?getGAData(b):"Error: Not Maintain Value";
b=b+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var a=a?a:null;
var c=c?c:null;
var h=h?h:null;
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",b,d,f,{dimension7:a,dimension8:c,dimension9:h});
ga("send","event",b,d,f)
}var g={};
g.customEventType="aSupportCommonClick";
g.sid=$.md5(new Date().getTime()+""+Math.random());
g.cat=b==undefined||b==null?"":decodeURIComponent(b);
g.act=d==undefined||d==null?"":decodeURIComponent(d);
g.lab=f==undefined||f==null?"":decodeURIComponent(f.replace(/%/g,"%25"));
g.QueryResult=a==undefined||a==null?"":decodeURIComponent(a);
g.SearchPageNum=c==undefined||c==null?"":decodeURIComponent(c);
g.ProductName=h==undefined||h==null?"":decodeURIComponent(h)
}function gaAndAaByCurrentTag(j){var a=window.event;
if(!a||!a.isTrusted||$(a.target).closest($(j)).length<1){return
}var f=$(j).attr("lab")?getGAData($(j).attr("lab")):"Error: Not Maintain Value";
var g=$(j).attr("act")?getGAData($(j).attr("act")):"Error: Not Maintain Value";
var h=$(j).attr("cat")?getGAData($(j).attr("cat")):"Error: Not Maintain Value";
h=h+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var k=$(j).attr("queryresult")?$(j).attr("queryresult"):null;
var b=$(j).attr("searchpagenum")?$(j).attr("searchpagenum"):null;
var c=$(j).attr("productname")?$(j).attr("productname"):null;
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",h,g,f,{dimension7:k,dimension8:b,dimension9:c});
ga("send","event",h,g,f)
}var d={};
d.customEventType="aSupportCommonClick";
d.sid=$.md5(new Date().getTime()+""+Math.random());
d.cat=h==undefined||h==null?"":decodeURIComponent(h);
d.act=g==undefined||g==null?"":decodeURIComponent(g);
d.lab=f==undefined||f==null?"":decodeURIComponent(f);
d.QueryResult=k==undefined||k==null?"":decodeURIComponent(k);
d.SearchPageNum=b==undefined||b==null?"":decodeURIComponent(b);
d.ProductName=c==undefined||c==null?"":decodeURIComponent(c)
}function gaAndAabyASupportCommon(g){if(!g||!g.originalEvent||!g.originalEvent.isTrusted){return
}var f=$(this).attr("lab")?getGAData($(this).attr("lab")):"Error: Not Maintain Value";
var d=$(this).attr("act")?getGAData($(this).attr("act")):"Error: Not Maintain Value";
var b=$(this).attr("cat")?getGAData($(this).attr("cat")):"Error: Not Maintain Value";
b=b+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var a=$(this).attr("queryresult")?$(this).attr("queryresult"):null;
var c=$(this).attr("searchpagenum")?$(this).attr("searchpagenum"):null;
var j=$(this).attr("productname")?$(this).attr("productname"):null;
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",b,d,f,{dimension7:a,dimension8:c,dimension9:j});
ga("send","event",b,d,f)
}var h={};
h.customEventType="aSupportCommonClick";
h.sid=$.md5(new Date().getTime()+""+Math.random());
h.cat=b==undefined||b==null?"":decodeURIComponent(b);
h.act=d==undefined||d==null?"":decodeURIComponent(d);
h.lab=f==undefined||f==null?"":decodeURIComponent(f);
h.QueryResult=a==undefined||a==null?"":decodeURIComponent(a);
h.SearchPageNum=c==undefined||c==null?"":decodeURIComponent(c);
h.ProductName=j==undefined||j==null?"":decodeURIComponent(j)
}$(document).on("click",".a-support-common",gaAndAabyASupportCommon);
function sendPageViewGA(b){if(typeof ga==="function"){var c=window.digitalData.page.pageInfo.uri;
if(c!=""&&(c.lastIndexOf("/")==c.length-1)){c=c.substr(0,c.length-1)
}var a=c+b;
ga("newhuaiweisupport.send","pageview",a)
}}function sendPageViewGAByTag(a){var b=$(a).attr("ga-path")?$(a).attr("ga-path"):null;
sendPageViewGA(b)
}function sendPageViewGAByThis(){var a=$(this).attr("ga-path")?$(this).attr("ga-path"):null;
sendPageViewGA(a)
}$(document).on("click",".ga-page-view",sendPageViewGAByThis);
function initHaEnvironment(c,g){var d=document.domain;
var b="";
var a=window.digitalData.page.pageInfo.siteCode;
if(d=="consumer.huawei.com"){if(g.China.sites.hasOwnProperty(a)){b=g.China.url
}else{if(g.Russia.sites.hasOwnProperty(countryCode)){b=g.Russia.url
}else{if(g.Europe.sites.hasOwnProperty(countryCode)){b=g.Europe.url
}else{if(g.Singapore.sites.hasOwnProperty(countryCode)){b=g.Singapore.url
}}}}}else{b=g.test.url
}c.setOnReportUrl(b);
c.setIdsite("huawei_website_20191106");
c.setBaseinfotypeSwitch(false);
c.setWindowCloseSwitch(false);
var f=document.title;
c.setTitle(f);
c.setCXX(sysConfig.countryCode);
c.setUid("acf0c6ba42h")
}var haURLsJson={test:{url:"https://web.archive.org/web/20210506134650/https://cloudbackup.hwcloudtest.cn:6447/webv1"},China:{url:"https://web.archive.org/web/20210506134650/https://metrics-drcn.dt.hicloud.com/webv1",sites:{en:"",cn:""}},Russia:{url:"https://web.archive.org/web/20210506134650/https://metrics5.data.hicloud.com:6447/webv1",sites:{ru:""}},Europe:{url:"https://web.archive.org/web/20210506134650/https://metrics2.data.hicloud.com:6447/webv1",sites:{at:"",by:"",be:"",ba:"",br:"",bg:"",hr:"",cy:"",cz:"",dk:"",ee:"",fi:"",fr:"",de:"",gr:"",hu:"",ie:"",it:"",jp:"",kr:"",lv:"",lt:"",md:"",nl:"",mk:"",no:"",pl:"",pt:"",ro:"",rs:"",sk:"",si:"",es:"",se:"",ch:"",tr:"",ua:"",uk:"",us:"","us-es":"","ch-fr":"","md-ru":"","be-fr":"","lv-ru":""}},Singapore:{url:"https://web.archive.org/web/20210506134650/https://metrics-dra.dt.hicloud.com:6447/webv1",sites:{dz:"",ar:"",az:"",bd:"",bo:"",bw:"",kh:"",cm:"",ca:"","ca-fr":"",cl:"",co:"",cg:"",cr:"","do":"",ec:"",eg:"","eg-e":"","et-en":"",gh:"",gt:"",hk:"","in":"",id:"",ir:"","ir-fa":"",il:"",kz:"",ke:"",kw:"","kw-en":"",la:"",latin:"","latin-en":"",levant:"","levant-ar":"",my:"",mu:"",mx:"",ma:"",mm:"",np:"",nz:"",ng:"",pk:"",pa:"",py:"",pe:"",ph:"",sa:"","sa-en":"",sg:"",za:"",lk:"",tw:"",th:"",tg:"",tn:"",ae:"","ae-fa":"",uy:"",uz:"",vn:""}}};
function sendPageHAEvent(){var a={};
a.languagecode=sysConfig.language;
a.countrycode=sysConfig.countryCode;
a.id="page_event_"+sysConfig.countryCode;
a.pageID=window.digitalData.page.pageInfo.pageName;
a.url=document.location.pathname;
if(haSdk!=undefined&&haSdk!=null&&window.digitalData.page.category.pageType=="support"){haSdk.sendData(a.id,a.id,a)
}}try{if(allowHA){var haSdk=_hasdk||[];
initHaEnvironment(haSdk,haURLsJson);
sendPageHAEvent()
}}catch(e){}function sendHa(a){if(haSdk!=undefined&&haSdk!=null&&allowHA){haSdk.sendData(a.id,a.id,a)
}}function haDispach(a){a.languagecode=sysConfig.language;
a.countrycode=sysConfig.countryCode;
console.log("HA --------------------------------------------");
console.log(a);
sendHa(a)
}function haDispachByThis(){var v={};
v.languagecode=sysConfig.language;
v.countrycode=sysConfig.countryCode;
var l=$(this).attr("ha-id")?$(this).attr("ha-id"):null;
if(l!=null){v.id=l
}var d=$(this).attr("ha-url")?$(this).attr("ha-url"):null;
if(d!=null){v.url=d
}var c=$(this).attr("ha-type")?$(this).attr("ha-type"):null;
if(c!=null){v.type=c
}var w=$(this).attr("ha-title")?$(this).attr("ha-title"):null;
if(w!=null){v.title=w
}var f=$(this).attr("ha-time")?$(this).attr("ha-time"):null;
if(f!=null){v.time=f
}var j=$(this).attr("ha-result")?$(this).attr("ha-result"):null;
if(j!=null){v.result=j
}var b=$(this).attr("ha-province")?$(this).attr("ha-province"):null;
if(b!=null){v.province=b
}var u=$(this).attr("ha-position")?$(this).attr("ha-position"):null;
if(u!=null){v.position=u
}var x=$(this).attr("ha-name")?$(this).attr("ha-name"):null;
if(x!=null){v.name=x
}var t=$(this).attr("ha-keyword")?$(this).attr("ha-keyword"):null;
if(t!=null){v.keyword=t
}var r=$(this).attr("ha-date")?$(this).attr("ha-date"):null;
if(r!=null){v.date=r
}var k=$(this).attr("ha-cycle")?$(this).attr("ha-cycle"):null;
if(k!=null){v.cycle=k
}var o=$(this).attr("ha-content")?$(this).attr("ha-content"):null;
if(o!=null){v.content=o
}var g=$(this).attr("ha-confirm")?$(this).attr("ha-confirm"):null;
if(g!=null){v.confirm=g
}var p=$(this).attr("ha-city")?$(this).attr("ha-city"):null;
if(p!=null){v.city=p
}var n=$(this).attr("ha-cat")?$(this).attr("ha-cat"):null;
if(n!=null){v.category=n
}var q=$(this).attr("ha-area")?$(this).attr("ha-area"):null;
if(q!=null){v.area=q
}var a=$(this).attr("ha-duration")?$(this).attr("ha-duration"):null;
if(a!=null){v.duration=a
}var h=$(this).attr("ha-street")?$(this).attr("ha-street"):null;
if(h!=null){v.street=h
}sendHa(v)
}function haDispachByTag(w){var v={};
v.languagecode=sysConfig.language;
v.countrycode=sysConfig.countryCode;
var l=$(w).attr("ha-id")?$(w).attr("ha-id"):null;
if(l!=null){v.id=l
}var d=$(w).attr("ha-url")?$(w).attr("ha-url"):null;
if(d!=null){v.url=l
}var c=$(w).attr("ha-type")?$(w).attr("ha-type"):null;
if(c!=null){v.type=c
}var x=$(w).attr("ha-title")?$(w).attr("ha-title"):null;
if(x!=null){v.title=x
}var f=$(w).attr("ha-time")?$(w).attr("ha-time"):null;
if(f!=null){v.time=f
}var j=$(w).attr("ha-result")?$(w).attr("ha-result"):null;
if(j!=null){v.result=j
}var b=$(w).attr("ha-province")?$(w).attr("ha-province"):null;
if(b!=null){v.province=b
}var u=$(w).attr("ha-position")?$(w).attr("ha-position"):null;
if(u!=null){v.position=u
}var y=$(w).attr("ha-name")?$(w).attr("ha-name"):null;
if(y!=null){v.name=y
}var t=$(w).attr("ha-keyword")?$(w).attr("ha-keyword"):null;
if(t!=null){v.keyword=t
}var r=$(w).attr("ha-date")?$(w).attr("ha-date"):null;
if(r!=null){v.date=r
}var k=$(w).attr("ha-cycle")?$(w).attr("ha-cycle"):null;
if(k!=null){v.cycle=k
}var o=$(w).attr("ha-content")?$(w).attr("ha-content"):null;
if(o!=null){v.content=o
}var g=$(w).attr("ha-confirm")?$(w).attr("ha-confirm"):null;
if(g!=null){v.confirm=g
}var p=$(w).attr("ha-city")?$(w).attr("ha-city"):null;
if(p!=null){v.city=p
}var n=$(w).attr("ha-cat")?$(w).attr("ha-cat"):null;
if(n!=null){v.category=n
}var q=$(w).attr("ha-area")?$(w).attr("ha-area"):null;
if(q!=null){v.area=q
}var a=$(w).attr("ha-duration")?$(w).attr("ha-duration"):null;
if(a!=null){v.duration=a
}var h=$(w).attr("ha-street")?$(w).attr("ha-street"):null;
if(h!=null){v.street=h
}sendHa(v)
}$(document).on("click",".ha-click-dispach",haDispachByThis);
function dmpaDateFormat(d,a){var c={"M+":d.getMonth()+1,"d+":d.getDate(),"h+":d.getHours(),"m+":d.getMinutes(),"s+":d.getSeconds(),"q+":Math.floor((d.getMonth()+3)/3),S:d.getMilliseconds()};
if(/(y+)/.test(a)){a=a.replace(RegExp.$1,(d.getFullYear()+"").substr(4-RegExp.$1.length))
}for(var b in c){if(new RegExp("("+b+")").test(a)){a=a.replace(RegExp.$1,RegExp.$1.length==1?c[b]:("00"+c[b]).substr((""+c[b]).length))
}}return a
}function timeConversion(f){var h=(-1)*new Date().getTimezoneOffset()/60;
var c=h*60*60*1000;
var b=(f.substring(0,19)).replace(/-/g,"/");
var a=new Date(b).getTime()+c;
var g=h;
if(window.sessionStorage.getItem("timeZoneOffeset")!=null){g=window.sessionStorage.getItem("timeZoneOffeset")
}var d=a+(g-h)*60*60*1000;
return dmpaDateFormat(new Date(d),"yyyy-MM-dd hh:mm:ss")
}function getVenusSearchType(a){if(!a){a=getUrlParam("t")
}var b="";
if(a=="PopupHotSearch"||a=="HotSearch"){b="hotSearch"
}else{if(a=="PopupSuggestSearch"||a=="SearchSuggest"){b="completeSearch"
}else{b="searchClick"
}}return b
}function checkIsUrgent(){var c=$(".product-urgent-download").is(":checked");
var b="product";
var d="Click on software search";
var f="";
if(c){f="open"
}else{f="close"
}var g="product_click_emergency_download";
var a={id:g,ha_confirm:f};
haDispach(a);
gaAndAaByAttr(b,d,f,"","","")
}function deviceType(){var a=window.innerWidth||$(window).width();
return a>=1024?"pc":(a<768?"mobile":"tablet")
}if(typeof pageCategory!="undefined"&&pageCategory=="support"){var cat="scroll";
var value=(deviceType()=="pc"?"Desktop":deviceType())+" scroll";
var gaHACat=value+"+"+sysConfig.countryCode+"+"+sysConfig.language;
var lab=window.location.pathname;
var roll_25=0,roll_50=0,roll_75=0,roll_100=0,gaScrollPercent=0;
$(document).on("scroll",function(){gaScrollPercent=getCookie("scrollPercentage")||0;
if(gaScrollPercent>24&&gaScrollPercent<49&&roll_25==0){roll_25=1;
var b="Content 25%";
sendDmpaByAttr("scroll",cat,value,b);
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",gaHACat,b,lab,{nonInteraction:true});
ga("send","event",gaHACat,b,lab,{nonInteraction:true})
}var a={id:"content_scroll",title:"25%"};
haDispach(a)
}if(gaScrollPercent>49&&gaScrollPercent<74&&roll_50==0){roll_50=1;
sendDmpaByAttr("scroll",cat,value,"Content 50%");
var b="Content 50%";
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",gaHACat,b,lab,{nonInteraction:true});
ga("send","event",gaHACat,b,lab,{nonInteraction:true})
}var a={id:"content_scroll",title:"50%"};
haDispach(a)
}if(gaScrollPercent>74&&gaScrollPercent<99&&roll_75==0){roll_75=1;
sendDmpaByAttr("scroll",cat,value,"Content 75%");
var b="Content 75%";
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",gaHACat,b,lab,{nonInteraction:true});
ga("send","event",gaHACat,b,lab,{nonInteraction:true})
}var a={id:"content_scroll",title:"75%"};
haDispach(a)
}if(gaScrollPercent==100&&roll_100==0){roll_100=1;
var b="Content 100%";
sendDmpaByAttr("scroll",cat,value,b);
if(typeof ga==="function"){ga("newhuaiweisupport.send","event",gaHACat,b,lab,{nonInteraction:true});
ga("send","event",gaHACat,b,lab,{nonInteraction:true})
}var a={id:"content_scroll",title:"100%"};
haDispach(a)
}})
}
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2017 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.10.0-dev
 *
 */
(function(c,b,a,f){var d=c(b);
c.fn.lazyload=function(g){var j=this;
var k;
var h={threshold:200,failure_limit:10,event:"scroll.lazyload",effect:"fadeIn",container:b,data_attribute:"src",data_srcset:"srcset",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiCSURBVHhe7Z0JjBRFFIbxxgNPIogHiKIRQ1AEFYJgVBREEiIeCSrGmyOKGxQSIFkTRQLKsQYIe7LsZtFF0QiLQDhiAkYQBAPBA/AAJCBEIoKgKKzfI29ITU1Pd83sLNOz23/yZ3aq3nv13pvqrurqrt4mYUVpael9cFFZWdke+CMsnD179jVaHcEPJK4PPEzSak1StrG4uLiFikXwQmFh4VkkapWdvBipG6OiEbxQXl5+JYk6aCfO4McqGsELRUVF15Kkv6ykmVygog0PHH4XlZSUvE6Qn3KofcLn8Orq6nO12gmzZs1qg+4hI2FxpG6+ijYsVFZWXkhwyzwC/mDu3LlnqFggGm0CCW64HWyMBP2cigUiKIHwMxVNGRwdzfLz88/Ur+ECgX1oBXqSJGS76/TDoQcuUtGUQPJuRH8r+sO0KFzAuUIzUJs4PlVFfVFfCURvnuo/pEXhAo71hP/ZAcdInUyMu6h4UtRHAtHpo/ofaVE4gaMVZrA2qV8WdA7KdAKZGZyHzkaxKYexFocTTIKvI8jf7aBNEsggFfdE0Dww1QSi85rqvaFF4QaOjjEDtkn9NgaUS1U8Aci0QybhOtig80SaHtcaW/ulTZmjanG4IVMFgtxsBR1HAhqn4gmgri0yfj3QeR6IbLnqPKZFuQEcfsQO3CT1B2B7FY+DwzzQqQfyQ/YQeWwt5rx7uhbnBmpra0/D8YVW4DY9R0RZ80M36SFMXWAP5MrnbOS+RP4o7KTFuQV60i0E4TeaHocJc7KKiorzKf/OS0f5roomBTIvqexkLcoOSELTVBcDTJCIdzQQT1K/3Os6mXZf8JKHe4KmIoziV2H3N2R38WNcrsWnFtoL3sSJb+FWWIbjnbXaGYx8zVGV5XivZAj3JhsdqRsKv4dH8UUO6RUuPiCbh6z8OM9o0akHjReJExZlkXMKvFrFnICtQYYNm9/I+UpFE1BVVXUJMp2YX97suqKDfDs4MGsDhziLA3Ly9QpYftkd8NVp06ZdoCq+kCsP9GpsO0I5VFUslJAfAT+fJt550O0aGoUHzCCTEYPrSEB/VfMFci2Rfx896cXH4C98H6HVoQQ+3gNXwFjMhVrlD84zrRDeaygGsQadrqruC5LWHnbP2sndAcTTAVbG4sNfWSAplMFJRYKBgnTbIzEjDvwbzkCnrZrIOcycOfMKYhhPDAdicfH3Yj7vUpHUQK+SmbzZhQNJg7vhyIKCgnPUTOghgxixDsbvbUYs6ykboCLpQ06iGJZR1Pfa1iY682QZSc2EFpybe+PvSsP3nfie5zpAOkNWTzA+FuMyQY1Llg8HqnrogG8y1ak2fJXFiwJ6XWsVqR9wnXoDDRWSyH+MxpNxgqqFDvhWEvOTWOT2a+BKeUZBg91o2HexgPrsXQkEAN+6wwrXaVi9QU60OLLOI4Grce5iFYvgB5LYjCS+QtI+h2vgFMpaaXUEV8iILZdt+jVChAgRIjQmcLVxE6NnjzQY7rv99Q1ZpmHqIQ9Eyg0gWatzJjrH+fyTz3JZPVaTjQsEX0US7IlwOpyoJnMK8sOTgzw4lRgmuxDZSXy+BbvIZdk+6JWQVLne7/5GWIHfY604nEkid4iBn+yKdIixVbk4kcbvJ/H/IJ9yn9qZ6MhprEYSOEoSUFdiNLSLB0HAd7nV0NNjgExKYu52cs2TC3+5kb0EI1/xKdezgRRZ5UIMPnHCUGOHHIKpUlUjRIgQIUKECFkB05jOTGemwyqmRI9qcYQgkLjWzAkLYNxD4STxZRUJJfDvbn7sSfh/vxadWtBwMyjbWneaiYsR534QGRUPFYqLi6/Hv5PPv8BqvnfU6voHDT5OgxsMBxJI/a9+e0GyCfzrgH9yLWv6KwmdKLvlVSzzoJHuNLLEbNiH41UtlMC/Z4lnu+WzJPJnOKwuz4UnQLt8MQx8nAMZeXZmVC4sa+lCsqztJewkoEy2SPRT0fQgD39jZDSU97bENeDBf6E8b9JO1XMGHLa3kbATW2FtUj6fAedOFXUHSm0wsNY2mIRLGTB6qGrOgmTJu2oSXrdC2WE4nb/dH65HQZa34wx5cBOJa1DLWHLqIa7niX+LFatws/OjyRg4sUkvCXdRPzLZ/o5kkO1f6PaDQ9H33CeXKdT1HCyJws/xMG7rLuPB7SriD4QfNhWFBC0n27QfQkTf7NX7OE3cq1UZAwG2oJ0KuEHmqVqcNmTLB7ZK8XcXnIHPTbUqGCiMRnc3n3/AOTDtTXvYiW25N7k0P8ObYbA5wWyDJPbVqjoh7Ud+yXhLHElpZ5INuW+AjfVmYMo1HGqBu49SSTI/VNzePL5vkG1rWp2bIIgRZlAx8uME7lJCdwiUkbFGphtanBTyCDLy+812+D5Sq3MPOh3yuu+8MmgrBIdfV1OHRHztcoWAnP3KgX2U5eb+FZwXmMEIj5KcwHmj9FBTjyQccRnA5HyF/CZLt0KrcweSJBxPuPyjrEhFfIHci5beIenRWu0L2h5g6cp2rV5aHX7I4YnTXi9RlA3TTtMg9IeYuqkkUOecC0x9uDpndlARbFzviZHyPBUJBPKy4drUdU6gAPmO6MW9yJGycL43y4TM4nE0YakIrk1lmQj5OiVQgN5E0wbcKZsKtTqcwEnZ1W46LTxG8L1VxAkc6oNNG+kkkGnNZejGvXIAO04vQcsKCPpWnPR6ac4cFXFGJhIoQOcpy47TS9CyApwbZzqrDsvENuV1QnTqfAgL5PkddJebtmCZVocL+JXwsCLOp/XaYnQzkkABundAc0oV+O6ZrEBO0Dj6hRF02vuG0c9YAgXYGIiNhfA9fGquxeGDXAkQaH/OYX3r8vhbphPY6EDChkUJrANImt0DD0f/jCAFkLReVgK3ZPxdBg0ZnOjlnxK8DWVVXFZXHtSqEKFJk/8BSGMJbVugW6wAAAAASUVORK5CYII="};
function l(){var n=0;
j.each(function(){var o=c(this);
if(h.skip_invisible&&!o.is(":visible")){return
}if(c.abovethetop(this,h)||c.leftofbegin(this,h)){}else{if(!c.belowthefold(this,h)&&!c.rightoffold(this,h)){o.trigger("appear");
n=0
}else{if(++n>h.failure_limit){return false
}}}})
}if(g){if(f!==g.failurelimit){g.failure_limit=g.failurelimit;
delete g.failurelimit
}if(f!==g.effectspeed){g.effect_speed=g.effectspeed;
delete g.effectspeed
}c.extend(h,g)
}k=(h.container===f||h.container===b)?d:c(h.container);
if(0===h.event.indexOf("scroll")){k.off(h.event).on(h.event,function(){return l()
})
}this.each(function(){var n=this;
var o=c(n);
n.loaded=false;
if(o.attr("src")===f||o.attr("src")===false){if(o.is("img")){o.attr("src",h.placeholder)
}}o.one("appear",function(){if(!this.loaded){if(h.appear){var p=j.length;
h.appear.call(n,p,h)
}c("<img />").one("load",function(){var r=o.attr("data-"+h.data_attribute);
var u=o.attr("data-"+h.data_srcset);
if(r!==o.attr("src")){o.hide();
if(o.is("img")){o.attr("src",r);
if(u!==null){o.attr("srcset",u)
}}else{if(o.is("video")){o.attr("poster",r)
}else{o.css("background-image","url('"+r+"')")
}}o[h.effect](h.effect_speed)
}n.loaded=true;
var q=c.grep(j,function(v){return !v.loaded
});
j=c(q);
if(h.load){var t=j.length;
h.load.call(n,t,h)
}}).bind("error",function(){c(n).trigger("error")
}).attr({src:o.attr("data-"+h.data_attribute),srcset:o.attr("data-"+h.data_srcset)||""})
}});
if(0!==h.event.indexOf("scroll")){o.off(h.event).on(h.event,function(){if(!n.loaded){o.trigger("appear")
}})
}});
d.off("resize.lazyload").bind("resize.lazyload",function(){l()
});
if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){d.on("pageshow",function(n){if(n.originalEvent&&n.originalEvent.persisted){j.each(function(){c(this).trigger("appear")
})
}})
}c(function(){l()
});
return this
};
c.belowthefold=function(h,j){var g;
if(j.container===f||j.container===b){g=(b.innerHeight?b.innerHeight:d.height())+d.scrollTop()
}else{g=c(j.container).offset().top+c(j.container).height()
}return g<=c(h).offset().top-j.threshold
};
c.rightoffold=function(h,j){var g;
if(j.container===f||j.container===b){g=d.width()+d.scrollLeft()
}else{g=c(j.container).offset().left+c(j.container).width()
}return g<=c(h).offset().left-j.threshold
};
c.abovethetop=function(h,j){var g;
if(j.container===f||j.container===b){g=d.scrollTop()
}else{g=c(j.container).offset().top
}return g>=c(h).offset().top+j.threshold+c(h).height()
};
c.leftofbegin=function(h,j){var g;
if(j.container===f||j.container===b){g=d.scrollLeft()
}else{g=c(j.container).offset().left
}return g>=c(h).offset().left+j.threshold+c(h).width()
};
c.inviewport=function(g,h){return !c.rightoffold(g,h)&&!c.leftofbegin(g,h)&&!c.belowthefold(g,h)&&!c.abovethetop(g,h)
};
c.extend(c.expr[":"],{"below-the-fold":function(g){return c.belowthefold(g,{threshold:0})
},"above-the-top":function(g){return !c.belowthefold(g,{threshold:0})
},"right-of-screen":function(g){return c.rightoffold(g,{threshold:0})
},"left-of-screen":function(g){return !c.rightoffold(g,{threshold:0})
},"in-viewport":function(g){return c.inviewport(g,{threshold:0})
},"above-the-fold":function(g){return !c.belowthefold(g,{threshold:0})
},"right-of-fold":function(g){return c.rightoffold(g,{threshold:0})
},"left-of-fold":function(g){return !c.rightoffold(g,{threshold:0})
}})
})(jQuery,window,document);
"undefined"==typeof jwplayer&&(jwplayer=function(b){if(jwplayer.api){return jwplayer.api.selectPlayer(b)
}},jwplayer.version="6.6.3896",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(b){function n(g){return function(){return a(g)
}
}function j(g){return function(){g("Error loading file")
}
}function d(g,p,l,o){return function(){try{var r=g.responseXML;
if(r&&r.firstChild){return l(g)
}}catch(q){}(r=v.parseXML(g.responseText))&&r.firstChild?(g=v.extend({},g,{responseXML:r}),l(g)):o&&o(g.responseText?"Invalid XML":p)
}
}var f=document,c=window,h=navigator,v=b.utils=function(){};
v.exists=function(g){switch(typeof g){case"string":return 0<g.length;
case"object":return null!==g;
case"undefined":return !1
}return !0
};
v.styleDimension=function(g){return g+(0<g.toString().indexOf("%")?"":"px")
};
v.getAbsolutePath=function(g,p){v.exists(p)||(p=f.location.href);
if(v.exists(g)){var l;
if(v.exists(g)){l=g.indexOf("://");
var o=g.indexOf("?");
l=0<l&&(0>o||o>l)
}else{l=void 0
}if(l){return g
}l=p.substring(0,p.indexOf("://")+3);
var o=p.substring(l.length,p.indexOf("/",l.length+1)),r;
0===g.indexOf("/")?r=g.split("/"):(r=p.split("?")[0],r=r.substring(l.length+o.length+1,r.lastIndexOf("/")),r=r.split("/").concat(g.split("/")));
for(var t=[],q=0;
q<r.length;
q++){r[q]&&(v.exists(r[q])&&"."!=r[q])&&(".."==r[q]?t.pop():t.push(r[q]))
}return l+o+"/"+t.join("/")
}};
v.extend=function(){var g=v.extend.arguments;
if(1<g.length){for(var l=1;
l<g.length;
l++){v.foreach(g[l],function(q,o){try{v.exists(o)&&(g[0][q]=o)
}catch(p){}})
}return g[0]
}return null
};
v.log=function(l,g){"undefined"!=typeof console&&"undefined"!=typeof console.log&&(g?console.log(l,g):console.log(l))
};
var a=v.userAgentMatch=function(g){return null!==h.userAgent.toLowerCase().match(g)
};
v.isIE=n(/msie/i);
v.isFF=n(/firefox/i);
v.isChrome=n(/chrome/i);
v.isIOS=n(/iP(hone|ad|od)/i);
v.isIPod=n(/iP(hone|od)/i);
v.isIPad=n(/iPad/i);
v.isSafari602=n(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);
v.isSafari=function(){return a(/safari/i)&&!a(/chrome/i)&&!a(/chromium/i)&&!a(/android/i)
};
v.isAndroid=function(g){return g?a(RegExp("android.*"+g,"i")):a(/android/i)
};
v.isMobile=function(){return v.isIOS()||v.isAndroid()
};
v.saveCookie=function(l,g){f.cookie="jwplayer."+l+"\x3d"+g+"; path\x3d/"
};
v.getCookies=function(){for(var p={},o=f.cookie.split("; "),g=0;
g<o.length;
g++){var l=o[g].split("\x3d");
0==l[0].indexOf("jwplayer.")&&(p[l[0].substring(9,l[0].length)]=l[1])
}return p
};
v.typeOf=function(l){var g=typeof l;
return"object"===g?!l?"null":l instanceof Array?"array":g:g
};
v.translateEventResponse=function(g,o){var l=v.extend({},o);
g==b.events.JWPLAYER_FULLSCREEN&&!l.fullscreen?(l.fullscreen="true"==l.message?!0:!1,delete l.message):"object"==typeof l.data?(l=v.extend(l,l.data),delete l.data):"object"==typeof l.metadata&&v.deepReplaceKeyName(l.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);
v.foreach(["position","duration","offset"],function(q,p){l[p]&&(l[p]=Math.round(1000*l[p])/1000)
});
return l
};
v.flashVersion=function(){if(v.isAndroid()){return 0
}var g=h.plugins,l;
try{if("undefined"!==g&&(l=g["Shockwave Flash"])){return parseInt(l.description.replace(/\D+(\d+)\..*/,"$1"))
}}catch(o){}if("undefined"!=typeof c.ActiveXObject){try{if(l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){return parseInt(l.GetVariable("$version").split(" ")[1].split(",")[0])
}}catch(p){}}return 0
};
v.getScriptPath=function(p){for(var o=f.getElementsByTagName("script"),g=0;
g<o.length;
g++){var l=o[g].src;
if(l&&0<=l.indexOf(p)){return l.substr(0,l.indexOf(p))
}}return""
};
v.deepReplaceKeyName=function(g,l,o){switch(b.utils.typeOf(g)){case"array":for(var p=0;
p<g.length;
p++){g[p]=b.utils.deepReplaceKeyName(g[p],l,o)
}break;
case"object":v.foreach(g,function(q,r){var w;
if(l instanceof Array&&o instanceof Array){if(l.length!=o.length){return
}w=l
}else{w=[l]
}for(var u=q,t=0;
t<w.length;
t++){u=u.replace(RegExp(l[t],"g"),o[t])
}g[u]=b.utils.deepReplaceKeyName(r,l,o);
q!=u&&delete g[q]
})
}return g
};
var k=v.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};
v.getPluginPathType=function(g){if("string"==typeof g){g=g.split("?")[0];
var l=g.indexOf("://");
if(0<l){return k.ABSOLUTE
}var o=g.indexOf("/");
g=v.extension(g);
return 0>l&&0>o&&(!g||!isNaN(g))?k.CDN:k.RELATIVE
}};
v.getPluginName=function(g){return g.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")
};
v.getPluginVersion=function(g){return g.replace(/[^-]*-?([^\.]*).*$/,"$1")
};
v.isYouTube=function(g){return/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(g)
};
v.youTubeID=function(l){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(l).slice(1).join("").replace("?","")
}catch(g){return""
}};
v.isRtmp=function(l,g){return 0==l.indexOf("rtmp")||"rtmp"==g
};
v.foreach=function(g,l){var o,p;
for(o in g){"function"==v.typeOf(g.hasOwnProperty)?g.hasOwnProperty(o)&&(p=g[o],l(o,p)):(p=g[o],l(o,p))
}};
v.isHTTPS=function(){return 0==c.location.href.indexOf("https")
};
v.repo=function(){var g="https://web.archive.org/web/20210506134650/http://consumer-res.huawei.com/etc/designs/huawei-cbg-site/statics/";
try{v.isHTTPS()&&(g=g.replace("http://","https://"))
}catch(l){}return g
};
v.ajax=function(l,u,t){var q;
0<l.indexOf("#")&&(l=l.replace(/#.*$/,""));
var p;
p=(p=l)&&0<=p.indexOf("://")&&p.split("/")[2]!=c.location.href.split("/")[2]?!0:!1;
if(p&&v.exists(c.XDomainRequest)){q=new XDomainRequest,q.onload=d(q,l,u,t),q.onerror=j(t,l,q)
}else{if(v.exists(c.XMLHttpRequest)){var o=q=new XMLHttpRequest,r=l;
q.onreadystatechange=function(){if(4===o.readyState){switch(o.status){case 200:d(o,r,u,t)();
break;
case 404:t("File not found")
}}};
q.onerror=j(t,l)
}else{t&&t()
}}try{q.open("GET",l,!0),q.send(null)
}catch(g){t&&t(l)
}return q
};
v.parseXML=function(p){try{var o;
if(c.DOMParser){o=(new DOMParser).parseFromString(p,"text/xml");
try{if("parsererror"==o.childNodes[0].firstChild.nodeName){return
}}catch(g){}}else{o=new ActiveXObject("Microsoft.XMLDOM"),o.async="false",o.loadXML(p)
}return o
}catch(l){}};
v.filterPlaylist=function(l,g){for(var o=[],t=0;
t<l.length;
t++){var r=v.extend({},l[t]);
r.sources=v.filterSources(r.sources);
if(0<r.sources.length){for(var q=0;
q<r.sources.length;
q++){var p=r.sources[q];
p.label||(p.label=q.toString())
}o.push(r)
}}if(g&&0==o.length){for(t=0;
t<l.length;
t++){if(r=v.extend({},l[t]),r.sources=v.filterSources(r.sources,!0),0<r.sources.length){for(q=0;
q<r.sources.length;
q++){p=r.sources[q],p.label||(p.label=q.toString())
}o.push(r)
}}}return o
};
v.filterSources=function(l,t){var g,q,r=v.extensionmap;
if(l){q=[];
for(var o=0;
o<l.length;
o++){var p=l[o].type,u=l[o].file;
u&&u.trim&&(u=u.trim());
p||(p=r.extType(v.extension(u)),l[o].type=p);
t?b.embed.flashCanPlay(u,p)&&(g||(g=p),p==g&&q.push(v.extend({},l[o]))):v.canPlayHTML5(p)&&(g||(g=p),p==g&&q.push(v.extend({},l[o])))
}}return q
};
v.canPlayHTML5=function(g){if(v.isAndroid()&&("hls"==g||"m3u"==g||"m3u8"==g)){return !1
}g=v.extensionmap.types[g];
return !!g&&!!b.vid.canPlayType&&b.vid.canPlayType(g)
};
v.seconds=function(l){l=l.replace(",",".");
var o=l.split(":"),g=0;
"s"==l.substr(-1)?g=Number(l.substr(0,l.length-1)):"m"==l.substr(-1)?g=60*Number(l.substr(0,l.length-1)):"h"==l.substr(-1)?g=3600*Number(l.substr(0,l.length-1)):1<o.length?(g=Number(o[o.length-1]),g+=60*Number(o[o.length-2]),3==o.length&&(g+=3600*Number(o[o.length-3]))):g=Number(l);
return g
};
v.serialize=function(g){return null==g?null:"true"==g.toString().toLowerCase()?!0:"false"==g.toString().toLowerCase()?!1:isNaN(Number(g))||5<g.length||0==g.length?g:Number(g)
}
}(jwplayer),function(d){var a="video/",n=d.foreach,h={mp4:a+"mp4",vorbis:"audio/ogg",ogg:a+"ogg",webm:a+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},k={mp4:h.mp4,f4v:h.mp4,m4v:h.mp4,mov:h.mp4,m4a:h.aac,f4a:h.aac,aac:h.aac,mp3:h.mp3,ogv:h.ogg,ogg:h.vorbis,oga:h.vorbis,webm:h.webm,m3u8:h.hls,hls:h.hls},a="video",a={flv:a,f4v:a,mov:a,m4a:a,m4v:a,mp4:a,aac:a,f4a:a,mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},f=d.extensionmap={};
n(k,function(b,c){f[b]={html5:c}
});
n(a,function(b,c){f[b]||(f[b]={});
f[b].flash=c
});
f.types=h;
f.mimeType=function(b){var c;
n(h,function(j,g){!c&&g==b&&(c=j)
});
return c
};
f.extType=function(b){return f.mimeType(k[b])
}
}(jwplayer.utils),function(d){var a=d.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},f=document;
d.scriptloader=function(j){function n(){o=a.ERROR;
b.sendEvent(c.ERROR)
}function h(){o=a.COMPLETE;
b.sendEvent(c.COMPLETE)
}var o=a.NEW,c=jwplayer.events,b=new c.eventdispatcher;
d.extend(this,b);
this.load=function(){var g=d.scriptloader.loaders[j];
if(g&&(g.getStatus()==a.NEW||g.getStatus()==a.LOADING)){g.addEventListener(c.ERROR,n),g.addEventListener(c.COMPLETE,h)
}else{if(d.scriptloader.loaders[j]=this,o==a.NEW){o=a.LOADING;
var k=f.createElement("script");
k.addEventListener?(k.onload=h,k.onerror=n):k.readyState&&(k.onreadystatechange=function(){("loaded"==k.readyState||"complete"==k.readyState)&&h()
});
f.getElementsByTagName("head")[0].appendChild(k);
k.src=j
}}};
this.getStatus=function(){return o
}
};
d.scriptloader.loaders={}
}(jwplayer.utils),function(b){b.trim=function(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")
};
b.pad=function(a,d,f){for(f||(f="0");
a.length<d;
){a=f+a
}return a
};
b.xmlAttribute=function(a,d){for(var f=0;
f<a.attributes.length;
f++){if(a.attributes[f].name&&a.attributes[f].name.toLowerCase()==d.toLowerCase()){return a.attributes[f].value.toString()
}}return""
};
b.extension=function(a){if(!a||"rtmp"==a.substr(0,4)){return""
}a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0];
if(-1<a.lastIndexOf(".")){return a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase()
}};
b.stringToColor=function(a){a=a.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");
3==a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));
return parseInt(a,16)
}
}(jwplayer.utils),function(d){var a="touchmove",f="touchstart";
d.touch=function(c){function h(g){g.type==f?(x=!0,n=j(l.DRAG_START,g)):g.type==a?x&&(v||(b(l.DRAG_START,g,n),v=!0),b(l.DRAG,g)):(x&&(v?b(l.DRAG_END,g):(g.cancelBubble=!0,b(l.TAP,g))),x=v=!1,n=null)
}function b(k,o,g){if(p[k]&&(o.preventManipulation&&o.preventManipulation(),o.preventDefault&&o.preventDefault(),o=g?g:j(k,o))){p[k](o)
}}function j(q,g){var k=null;
g.touches&&g.touches.length?k=g.touches[0]:g.changedTouches&&g.changedTouches.length&&(k=g.changedTouches[0]);
if(!k){return null
}var o=w.getBoundingClientRect(),k={type:q,target:w,x:k.pageX-window.pageXOffset-o.left,y:k.pageY,deltaX:0,deltaY:0};
q!=l.TAP&&n&&(k.deltaX=k.x-n.x,k.deltaY=k.y-n.y);
return k
}var w=c,x=!1,p={},n=null,v=!1,l=d.touchEvents;
document.addEventListener(a,h);
document.addEventListener("touchend",function(g){x&&v&&b(l.DRAG_END,g);
x=v=!1;
n=null
});
document.addEventListener("touchcancel",h);
c.addEventListener(f,h);
c.addEventListener("touchend",h);
this.addEventListener=function(g,k){p[g]=k
};
this.removeEventListener=function(g){delete p[g]
};
return this
}
}(jwplayer.utils),function(b){b.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}
}(jwplayer.utils),function(b){b.key=function(a){var n,h,j;
this.edition=function(){return j&&j.getTime()<(new Date).getTime()?"invalid":n
};
this.token=function(){return h
};
b.exists(a)||(a="");
try{a=b.tea.decrypt(a,"36QXq4W@GSBV^teR");
var f=a.split("/");
(n=f[0])?/^(free|pro|premium|ads)$/i.test(n)?(h=f[1],f[2]&&0<parseInt(f[2])&&(j=new Date,j.setTime(String(f[2])))):n="invalid":n="free"
}catch(k){n="invalid"
}}
}(jwplayer.utils),function(d){var a=d.tea={};
a.encrypt=function(c,A){if(0==c.length){return""
}var g=a.strToLongs(f.encode(c));
1>=g.length&&(g[1]=0);
for(var x=a.strToLongs(f.encode(A).slice(0,16)),y=g.length,z=g[y-1],l=g[0],p,j=Math.floor(6+52/y),b=0;
0<j--;
){b+=2654435769;
p=b>>>2&3;
for(var q=0;
q<y;
q++){l=g[(q+1)%y],z=(z>>>5^l<<2)+(l>>>3^z<<4)^(b^l)+(x[q&3^p]^z),z=g[q]+=z
}}g=a.longsToStr(g);
return h.encode(g)
};
a.decrypt=function(j,c){if(0==j.length){return""
}for(var l=a.strToLongs(h.decode(j)),x=a.strToLongs(f.encode(c).slice(0,16)),y=l.length,b=l[y-1],v=l[0],w,p=2654435769*Math.floor(6+52/y);
0!=p;
){w=p>>>2&3;
for(var g=y-1;
0<=g;
g--){b=l[0<g?g-1:y-1],b=(b>>>5^v<<2)+(v>>>3^b<<4)^(p^v)+(x[g&3^w]^b),v=l[g]-=b
}p-=2654435769
}l=a.longsToStr(l);
l=l.replace(/\0+$/,"");
return f.decode(l)
};
a.strToLongs=function(g){for(var b=Array(Math.ceil(g.length/4)),c=0;
c<b.length;
c++){b[c]=g.charCodeAt(4*c)+(g.charCodeAt(4*c+1)<<8)+(g.charCodeAt(4*c+2)<<16)+(g.charCodeAt(4*c+3)<<24)
}return b
};
a.longsToStr=function(g){for(var b=Array(g.length),c=0;
c<g.length;
c++){b[c]=String.fromCharCode(g[c]&255,g[c]>>>8&255,g[c]>>>16&255,g[c]>>>24&255)
}return b.join("")
};
var h={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(x,b){var g,y,z,A,l=[],p="",j,c,q=h.code;
c=("undefined"==typeof b?0:b)?f.encode(x):x;
j=c.length%3;
if(0<j){for(;
3>j++;
){p+="\x3d",c+="\x00"
}}for(j=0;
j<c.length;
j+=3){g=c.charCodeAt(j),y=c.charCodeAt(j+1),z=c.charCodeAt(j+2),A=g<<16|y<<8|z,g=A>>18&63,y=A>>12&63,z=A>>6&63,A&=63,l[j/3]=q.charAt(g)+q.charAt(y)+q.charAt(z)+q.charAt(A)
}l=l.join("");
return l=l.slice(0,l.length-p.length)+p
},decode:function(x,b){b="undefined"==typeof b?!1:b;
var g,y,z,A,l,p=[],j,c=h.code;
j=b?f.decode(x):x;
for(var q=0;
q<j.length;
q+=4){g=c.indexOf(j.charAt(q)),y=c.indexOf(j.charAt(q+1)),A=c.indexOf(j.charAt(q+2)),l=c.indexOf(j.charAt(q+3)),z=g<<18|y<<12|A<<6|l,g=z>>>16&255,y=z>>>8&255,z&=255,p[q/4]=String.fromCharCode(g,y,z),64==l&&(p[q/4]=String.fromCharCode(g,y)),64==A&&(p[q/4]=String.fromCharCode(g))
}A=p.join("");
return b?f.decode(A):A
}},f={encode:function(b){b=b.replace(/[\u0080-\u07ff]/g,function(c){c=c.charCodeAt(0);
return String.fromCharCode(192|c>>6,128|c&63)
});
return b=b.replace(/[\u0800-\uffff]/g,function(c){c=c.charCodeAt(0);
return String.fromCharCode(224|c>>12,128|c>>6&63,128|c&63)
})
},decode:function(b){b=b.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(c){c=(c.charCodeAt(0)&15)<<12|(c.charCodeAt(1)&63)<<6|c.charCodeAt(2)&63;
return String.fromCharCode(c)
});
return b=b.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(c){c=(c.charCodeAt(0)&31)<<6|c.charCodeAt(1)&63;
return String.fromCharCode(c)
})
}}
}(jwplayer.utils),function(b){b.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions"}
}(jwplayer),function(d){var a=jwplayer.utils;
d.eventdispatcher=function(c,h){var b,f;
this.resetEventListeners=function(){b={};
f=[]
};
this.resetEventListeners();
this.addEventListener=function(j,o,g){try{a.exists(b[j])||(b[j]=[]),"string"==a.typeOf(o)&&(o=(new Function("return "+o))()),b[j].push({listener:o,count:g})
}catch(n){a.log("error",n)
}return !1
};
this.removeEventListener=function(j,o){if(b[j]){try{for(var g=0;
g<b[j].length;
g++){if(b[j][g].listener.toString()==o.toString()){b[j].splice(g,1);
break
}}}catch(n){a.log("error",n)
}return !1
}};
this.addGlobalListener=function(j,k){try{"string"==a.typeOf(j)&&(j=(new Function("return "+j))()),f.push({listener:j,count:k})
}catch(g){a.log("error",g)
}return !1
};
this.removeGlobalListener=function(j){if(j){try{for(var k=0;
k<f.length;
k++){if(f[k].listener.toString()==j.toString()){f.splice(k,1);
break
}}}catch(g){a.log("error",g)
}return !1
}};
this.sendEvent=function(l,n){a.exists(n)||(n={});
a.extend(n,{id:c,version:jwplayer.version,type:l});
h&&a.log(l,n);
if("undefined"!=a.typeOf(b[l])){for(var g=0;
g<b[l].length;
g++){try{b[l][g].listener(n)
}catch(j){a.log("There was an error while handling a listener: "+j.toString(),b[l][g].listener)
}b[l][g]&&(1===b[l][g].count?delete b[l][g]:0<b[l][g].count&&(b[l][g].count-=1))
}}for(g=0;
g<f.length;
g++){try{f[g].listener(n)
}catch(o){a.log("There was an error while handling a listener: "+o.toString(),f[g].listener)
}f[g]&&(1===f[g].count?delete f[g]:0<f[g].count&&(f[g].count-=1))
}}
}
}(jwplayer.events),function(d){var a={},f={};
d.plugins=function(){};
d.plugins.loadPlugins=function(c,b){f[c]=new d.plugins.pluginloader(new d.plugins.model(a),b);
return f[c]
};
d.plugins.registerPlugin=function(h,j,c,l){var b=d.utils.getPluginName(h);
a[b]||(a[b]=new d.plugins.plugin(h));
a[b].registerPlugin(h,j,c,l)
}
}(jwplayer),function(b){b.plugins.model=function(a){this.addPlugin=function(g){var f=b.utils.getPluginName(g);
a[f]||(a[f]=new b.plugins.plugin(g));
return a[f]
};
this.getPlugins=function(){return a
}
}
}(jwplayer),function(d){var a=jwplayer.utils,f=jwplayer.events;
d.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};
d.plugin=function(c){function h(){switch(a.getPluginPathType(c)){case a.pluginPathType.ABSOLUTE:return c;
case a.pluginPathType.RELATIVE:return a.getAbsolutePath(c,window.location.href)
}}function b(){v=setTimeout(function(){w=a.loaderstatus.COMPLETE;
l.sendEvent(f.COMPLETE)
},1000)
}function j(){w=a.loaderstatus.ERROR;
l.sendEvent(f.ERROR)
}var w=a.loaderstatus.NEW,x,p,n,v,l=new f.eventdispatcher;
a.extend(this,l);
this.load=function(){if(w==a.loaderstatus.NEW){if(0<c.lastIndexOf(".swf")){x=c,w=a.loaderstatus.COMPLETE,l.sendEvent(f.COMPLETE)
}else{if(a.getPluginPathType(c)==a.pluginPathType.CDN){w=a.loaderstatus.COMPLETE,l.sendEvent(f.COMPLETE)
}else{w=a.loaderstatus.LOADING;
var g=new a.scriptloader(h());
g.addEventListener(f.COMPLETE,b);
g.addEventListener(f.ERROR,j);
g.load()
}}}};
this.registerPlugin=function(g,k,o,q){v&&(clearTimeout(v),v=void 0);
n=k;
o&&q?(x=q,p=o):"string"==typeof o?x=o:"function"==typeof o?p=o:!o&&!q&&(x=g);
w=a.loaderstatus.COMPLETE;
l.sendEvent(f.COMPLETE)
};
this.getStatus=function(){return w
};
this.getPluginName=function(){return a.getPluginName(c)
};
this.getFlashPath=function(){if(x){switch(a.getPluginPathType(x)){case a.pluginPathType.ABSOLUTE:return x;
case a.pluginPathType.RELATIVE:return 0<c.lastIndexOf(".swf")?a.getAbsolutePath(x,window.location.href):a.getAbsolutePath(x,h())
}}return null
};
this.getJS=function(){return p
};
this.getTarget=function(){return n
};
this.getPluginmode=function(){if("undefined"!=typeof x&&"undefined"!=typeof p){return d.pluginmodes.HYBRID
}if("undefined"!=typeof x){return d.pluginmodes.FLASH
}if("undefined"!=typeof p){return d.pluginmodes.JAVASCRIPT
}};
this.getNewInstance=function(k,o,g){return new p(k,o,g)
};
this.getURL=function(){return c
}
}
}(jwplayer.plugins),function(d){var a=d.utils,h=d.events,f=a.foreach;
d.plugins.pluginloader=function(b,y){function c(){j?z.sendEvent(h.ERROR,{message:n}):l||(l=!0,x=a.loaderstatus.COMPLETE,z.sendEvent(h.COMPLETE))
}function q(){g||c();
if(!l&&!j){var o=0,k=b.getPlugins();
a.foreach(g,function(u){u=a.getPluginName(u);
var r=k[u];
u=r.getJS();
var t=r.getTarget(),r=r.getStatus();
if(r==a.loaderstatus.LOADING||r==a.loaderstatus.NEW){o++
}else{if(u&&(!t||parseFloat(t)>parseFloat(d.version))){j=!0,n="Incompatible player version",c()
}}});
0==o&&c()
}}var x=a.loaderstatus.NEW,l=!1,j=!1,n,g=y,z=new h.eventdispatcher;
a.extend(this,z);
this.setupPlugins=function(t,w,v){var o={length:0,plugins:{}},r=0,u={},k=b.getPlugins();
f(w.plugins,function(L,M){var N=a.getPluginName(L),O=k[N],A=O.getFlashPath(),I=O.getJS(),K=O.getURL();
A&&(o.plugins[A]=a.extend({},M),o.plugins[A].pluginmode=O.getPluginmode(),o.length++);
try{if(I&&w.plugins&&w.plugins[K]){var D=document.createElement("div");
D.id=t.id+"_"+N;
D.style.position="absolute";
D.style.top=0;
D.style.zIndex=r+10;
u[N]=O.getNewInstance(t,a.extend({},w.plugins[K]),D);
r++;
t.onReady(v(u[N],D,!0));
t.onResize(v(u[N],D))
}}catch(J){a.log("ERROR: Failed to load "+N+".")
}});
t.plugins=u;
return o
};
this.load=function(){if(!(a.exists(y)&&"object"!=a.typeOf(y))){x=a.loaderstatus.LOADING;
f(y,function(o){a.exists(o)&&(o=b.addPlugin(o),o.addEventListener(h.COMPLETE,q),o.addEventListener(h.ERROR,p))
});
var k=b.getPlugins();
f(k,function(o,r){r.load()
})
}q()
};
var p=this.pluginFailed=function(){j||(j=!0,n="File not found",c())
};
this.getStatus=function(){return x
}
}
}(jwplayer),function(){jwplayer.parsers={localName:function(b){return b?b.localName?b.localName:b.baseName?b.baseName:"":""
},textContent:function(b){return b?b.textContent?b.textContent:b.text?b.text:"":""
},getChildNode:function(d,a){return d.childNodes[a]
},numChildren:function(b){return b.childNodes?b.childNodes.length:0
}}
}(jwplayer),function(d){var a=d.parsers;
(a.jwparser=function(){}).parseEntry=function(q,f){for(var h=[],b=[],j=d.utils.xmlAttribute,c=0;
c<q.childNodes.length;
c++){var k=q.childNodes[c];
if("jwplayer"==k.prefix){var n=a.localName(k);
"source"==n?(delete f.sources,h.push({file:j(k,"file"),"default":j(k,"default"),label:j(k,"label"),type:j(k,"type")})):"track"==n?(delete f.tracks,b.push({file:j(k,"file"),"default":j(k,"default"),kind:j(k,"kind"),label:j(k,"label")})):(f[n]=d.utils.serialize(a.textContent(k)),"file"==n&&f.sources&&delete f.sources)
}f.file||(f.file=f.link)
}if(h.length){f.sources=[];
for(c=0;
c<h.length;
c++){0<h[c].file.length&&(h[c]["default"]="true"==h[c]["default"]?!0:!1,h[c].label.length||delete h[c].label,f.sources.push(h[c]))
}}if(b.length){f.tracks=[];
for(c=0;
c<b.length;
c++){0<b[c].file.length&&(b[c]["default"]="true"==b[c]["default"]?!0:!1,b[c].kind=!b[c].kind.length?"captions":b[c].kind,b[c].label.length||delete b[c].label,f.tracks.push(b[c]))
}}return f
}
}(jwplayer),function(o){var d=jwplayer.utils,k=d.xmlAttribute,f=o.localName,h=o.textContent,a=o.numChildren,j=o.mediaparser=function(){};
j.parseGroup=function(q,n){var t,b,c=[];
for(b=0;
b<a(q);
b++){if(t=q.childNodes[b],"media"==t.prefix&&f(t)){switch(f(t).toLowerCase()){case"content":k(t,"duration")&&(n.duration=d.seconds(k(t,"duration")));
0<a(t)&&(n=j.parseGroup(t,n));
k(t,"url")&&(n.sources||(n.sources=[]),n.sources.push({file:k(t,"url"),type:k(t,"type"),width:k(t,"width"),label:k(t,"label")}));
break;
case"title":n.title=h(t);
break;
case"description":n.description=h(t);
break;
case"guid":n.mediaid=h(t);
break;
case"thumbnail":n.image||(n.image=k(t,"url"));
break;
case"group":j.parseGroup(t,n);
break;
case"subtitle":var p={};
p.file=k(t,"url");
p.kind="captions";
if(0<k(t,"lang").length){var l=p;
t=k(t,"lang");
var g={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};
t=g[t]?g[t]:t;
l.label=t
}c.push(p)
}}}n.hasOwnProperty("tracks")||(n.tracks=[]);
for(b=0;
b<c.length;
b++){n.tracks.push(c[b])
}return n
}
}(jwplayer.parsers),function(o){function d(n){for(var l={},b=0;
b<n.childNodes.length;
b++){var g=n.childNodes[b],c=j(g);
if(c){switch(c.toLowerCase()){case"enclosure":l.file=k.xmlAttribute(g,"url");
break;
case"title":l.title=f(g);
break;
case"guid":l.mediaid=f(g);
break;
case"pubdate":l.date=f(g);
break;
case"description":l.description=f(g);
break;
case"link":l.link=f(g);
break;
case"category":l.tags=l.tags?l.tags+f(g):f(g)
}}}l=o.mediaparser.parseGroup(n,l);
l=o.jwparser.parseEntry(n,l);
return new jwplayer.playlist.item(l)
}var k=jwplayer.utils,f=o.textContent,h=o.getChildNode,a=o.numChildren,j=o.localName;
o.rssparser={};
o.rssparser.parse=function(b){for(var n=[],c=0;
c<a(b);
c++){var q=h(b,c);
if("channel"==j(q).toLowerCase()){for(var g=0;
g<a(q);
g++){var l=h(q,g);
"item"==j(l).toLowerCase()&&n.push(d(l))
}}}return n
}
}(jwplayer.parsers),function(b){b.playlist=function(a){var g=[];
if("array"==b.utils.typeOf(a)){for(var f=0;
f<a.length;
f++){g.push(new b.playlist.item(a[f]))
}}else{g.push(new b.playlist.item(a))
}return g
}
}(jwplayer),function(d){var a=d.item=function(c){var f=jwplayer.utils,h=f.extend({},a.defaults,c);
h.tracks=c&&f.exists(c.tracks)?c.tracks:[];
0==h.sources.length&&(h.sources=[new d.source(h)]);
for(var b=0;
b<h.sources.length;
b++){var j=h.sources[b]["default"];
h.sources[b]["default"]=j?"true"==j.toString():!1;
h.sources[b]=new d.source(h.sources[b])
}if(h.captions&&!f.exists(c.tracks)){for(c=0;
c<h.captions.length;
c++){h.tracks.push(h.captions[c])
}delete h.captions
}for(b=0;
b<h.tracks.length;
b++){h.tracks[b]=new d.track(h.tracks[b])
}return h
};
a.defaults={description:"",image:"",mediaid:"",title:"",sources:[],tracks:[]}
}(jwplayer.playlist),function(d){var a=jwplayer,j=a.utils,f=a.events,h=a.parsers;
d.loader=function(){function g(r){try{var u=r.responseXML.childNodes;
r="";
for(var k=0;
k<u.length&&!(r=u[k],8!=r.nodeType);
k++){}"xml"==h.localName(r)&&(r=r.nextSibling);
if("rss"!=h.localName(r)){l("Not a valid RSS feed")
}else{var q=new d(h.rssparser.parse(r));
b.sendEvent(f.JWPLAYER_PLAYLIST_LOADED,{playlist:q})
}}catch(t){l()
}}function c(k){l(k.match(/invalid/i)?"Not a valid RSS feed":"")
}function l(k){b.sendEvent(f.JWPLAYER_ERROR,{message:k?k:"Error loading file"})
}var b=new f.eventdispatcher;
j.extend(this,b);
this.load=function(k){j.ajax(k,g,c)
}
}
}(jwplayer.playlist),function(d){var a=jwplayer.utils,f={file:void 0,label:void 0,type:void 0,"default":void 0};
d.source=function(b){var c=a.extend({},f);
a.foreach(f,function(g){a.exists(b[g])&&(c[g]=b[g],delete b[g])
});
c.type&&0<c.type.indexOf("/")&&(c.type=a.extensionmap.mimeType(c.type));
"m3u8"==c.type&&(c.type="hls");
"smil"==c.type&&(c.type="rtmp");
return c
}
}(jwplayer.playlist),function(d){var a=jwplayer.utils,f={file:void 0,label:void 0,kind:"captions","default":!1};
d.track=function(c){var b=a.extend({},f);
c||(c={});
a.foreach(f,function(g){a.exists(c[g])&&(b[g]=c[g],delete c[g])
});
return b
}
}(jwplayer.playlist),function(o){var d=o.utils,k=o.events,f=!0,h=!1,a=document,j=o.embed=function(b){function c(D,A){d.foreach(A,function(F,E){"function"==typeof D[F]&&D[F].call(D,E)
})
}function p(){if(u.sitecatalyst){try{null!=s&&s.hasOwnProperty("Media")||l()
}catch(A){l();
return
}}if("array"==d.typeOf(u.playlist)&&2>u.playlist.length&&(0==u.playlist.length||!u.playlist[0].sources||0==u.playlist[0].sources.length)){q()
}else{if(!M){if("string"==d.typeOf(u.playlist)){var D=new o.playlist.loader;
D.addEventListener(k.JWPLAYER_PLAYLIST_LOADED,function(H){u.playlist=H.playlist;
M=h;
p()
});
D.addEventListener(k.JWPLAYER_ERROR,function(H){M=h;
q(H)
});
M=f;
D.load(u.playlist)
}else{if(C.getStatus()==d.loaderstatus.COMPLETE){for(D=0;
D<u.modes.length;
D++){if(u.modes[D].type&&j[u.modes[D].type]){var E=d.extend({},u),F=new j[u.modes[D].type](w,u.modes[D],E,C,b);
if(F.supportsConfig()){return F.addEventListener(k.ERROR,n),F.embed(),c(b,E.events),b
}}}if(u.fallback){var G="No suitable players found and fallback enabled";
v=setTimeout(function(){r(G,f)
},10);
d.log(G);
new j.download(w,u,q)
}else{G="No suitable players found and fallback disabled",r(G,h),d.log(G),w.parentNode.replaceChild(y,w)
}}}}}}function n(A){g(w,t+A.message)
}function q(A){A&&A.message?g(w,"Error loading playlist: "+A.message):g(w,t+"No playable sources found")
}function l(){g(w,"Adobe SiteCatalyst Error: Could not find Media Module")
}function g(F,A){if(u.fallback){var E=F.style;
E.backgroundColor="#000";
E.color="#FFF";
E.width=d.styleDimension(u.width);
E.height=d.styleDimension(u.height);
E.display="table";
E.opacity=1;
var E=document.createElement("p"),D=E.style;
D.verticalAlign="middle";
D.textAlign="center";
D.display="table-cell";
D.font="15px/20px Arial, Helvetica, sans-serif";
E.innerHTML=A.replace(":",":\x3cbr\x3e");
F.innerHTML="";
F.appendChild(E);
r(A,f)
}else{r(A,h)
}}function r(D,A){v&&(clearTimeout(v),v=null);
b.dispatchEvent(k.JWPLAYER_SETUP_ERROR,{message:D,fallback:A})
}var u=new j.config(b.config),w,x,y,z=u.width,B=u.height,t="Error loading player: ",C=o.plugins.loadPlugins(b.id,u.plugins),M=h,v=null;
u.fallbackDiv&&(y=u.fallbackDiv,delete u.fallbackDiv);
u.id=b.id;
x=a.getElementById(b.id);
u.aspectratio?b.config.aspectratio=u.aspectratio:delete b.config.aspectratio;
w=a.createElement("div");
w.id=x.id;
w.style.width=0<z.toString().indexOf("%")?z:z+"px";
w.style.height=0<B.toString().indexOf("%")?B:B+"px";
x.parentNode.replaceChild(w,x);
o.embed.errorScreen=g;
C.addEventListener(k.COMPLETE,p);
C.addEventListener(k.ERROR,function(A){g(w,"Could not load plugins: "+A.message)
});
C.load();
return b
}
}(jwplayer),function(d){function a(c){if(c.playlist){for(var b=0;
b<c.playlist.length;
b++){c.playlist[b]=new h(c.playlist[b])
}}else{var g={};
f.foreach(h.defaults,function(k){j(c,g,k)
});
g.sources||(c.levels?(g.sources=c.levels,delete c.levels):(b={},j(c,b,"file"),j(c,b,"type"),g.sources=b.file?[b]:[]));
c.playlist=[new h(g)]
}}function j(c,b,g){f.exists(c[g])&&(b[g]=c[g],delete c[g])
}var f=d.utils,h=d.playlist.item;
(d.embed.config=function(g){var k={fallback:!0,height:270,primary:"html5",width:480,base:g.base?g.base:f.getScriptPath("jwplayer.js"),aspectratio:""};
g=f.extend(k,d.defaults,g);
var k={type:"html5",src:"https://web.archive.org/web/20210506134650/https://consumer.huawei.com/en/ucmf/groups/public/documents/webasset/jwplayer_cej.html5.js"},b={type:"flash",src:g.base+"jwplayer.flash.swf"};
g.modes="flash"==g.primary?[b,k]:[k,b];
g.listbar&&(g.playlistsize=g.listbar.size,g.playlistposition=g.listbar.position,g.playlistlayout=g.listbar.layout);
g.flashplayer&&(b.src=g.flashplayer);
g.html5player&&(k.src=g.html5player);
a(g);
b=g.aspectratio;
if("string"!=typeof b||!f.exists(b)){k=0
}else{var c=b.indexOf(":");
-1==c?k=0:(k=parseFloat(b.substr(0,c)),b=parseFloat(b.substr(c+1)),k=0>=k||0>=b?0:100*(b/k)+"%")
}-1==g.width.toString().indexOf("%")?delete g.aspectratio:k?g.aspectratio=k:delete g.aspectratio;
return g
}).addConfig=function(b,c){a(c);
return f.extend(b,c)
}
}(jwplayer),function(d){var a=d.utils,f=document;
d.embed.download=function(g,r,j){function u(x,k){for(var w=f.querySelectorAll(x),o=0;
o<w.length;
o++){a.foreach(k,function(y,z){w[o].style[y]=z
})
}}function b(o,w,k){o=f.createElement(o);
w&&(o.className="jwdownload"+w);
k&&k.appendChild(o);
return o
}var c=a.extend({},r),l=c.width?c.width:480,h=c.height?c.height:320,n;
r=r.logo?r.logo:{prefix:a.repo(),file:"logo.png",margin:10};
var v,q,p,c=c.playlist,t,H=["mp4","aac","mp3"];
if(c&&c.length){t=c[0];
n=t.sources;
for(c=0;
c<n.length;
c++){var I=n[c],J=I.type?I.type:a.extensionmap.extType(a.extension(I.file));
I.file&&a.foreach(H,function(k){J==H[k]?(v=I.file,q=t.image):a.isYouTube(I.file)&&(p=I.file)
})
}v?(n=v,j=q,g&&(c=b("a","display",g),b("div","icon",c),b("div","logo",c),n&&c.setAttribute("href",a.getAbsolutePath(n))),c="#"+g.id+" .jwdownload",g.style.width="",g.style.height="",u(c+"display",{width:a.styleDimension(Math.max(320,l)),height:a.styleDimension(Math.max(180,h)),background:"black center no-repeat "+(j?"url("+j+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),u(c+"display div",{position:"absolute",width:"100%",height:"100%"}),u(c+"logo",{top:r.margin+"px",right:r.margin+"px",background:"top right no-repeat url("+r.prefix+r.file+")"}),u(c+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):p?(r=p,g=b("embed","",g),g.src="https://web.archive.org/web/20210506134650/http://www.youtube.com/v/"+a.youTubeID(r),g.type="application/x-shockwave-flash",g.width=l,g.height=h):j()
}}
}(jwplayer),function(d){var a=d.utils,j=d.events,f={};
(d.embed.flash=function(y,c,w,x,n){function l(o,r,t){var k=document.createElement("param");
k.setAttribute("name",r);
k.setAttribute("value",t);
o.appendChild(k)
}function p(o,r,k){return function(){try{k&&document.getElementById(n.id+"_wrapper").appendChild(r);
var u=document.getElementById(n.id).getPluginConfig("display");
"function"==typeof o.resize&&o.resize(u.width,u.height);
r.style.left=u.x;
r.style.top=u.h
}catch(t){}}
}function g(r){if(!r){return{}
}var k={},o=[];
a.foreach(r,function(v,t){var u=a.getPluginName(v);
o.push(v);
a.foreach(t,function(z,A){k[u+"."+z]=A
})
});
k.plugins=o.join(",");
return k
}var b=new d.events.eventdispatcher,q=a.flashVersion();
a.extend(this,b);
this.embed=function(){w.id=n.id;
if(10>q){return b.sendEvent(j.ERROR,{message:"Flash version must be 10.0 or greater"}),!1
}var t,u,k=n.config.listbar,o=a.extend({},w);
if(y.id+"_wrapper"==y.parentNode.id){t=document.getElementById(y.id+"_wrapper")
}else{t=document.createElement("div");
u=document.createElement("div");
u.style.display="none";
u.id=y.id+"_aspect";
t.id=y.id+"_wrapper";
t.style.position="relative";
t.style.display="block";
t.style.width=a.styleDimension(o.width);
t.style.height=a.styleDimension(o.height);
if(n.config.aspectratio){var r=parseFloat(n.config.aspectratio);
u.style.display="block";
u.style.marginTop=n.config.aspectratio;
t.style.height="auto";
t.style.display="inline-block";
k&&("bottom"==k.position?u.style.paddingBottom=k.size+"px":"right"==k.position&&(u.style.marginBottom=-1*k.size*(r/100)+"px"))
}y.parentNode.replaceChild(t,y);
t.appendChild(y);
t.appendChild(u)
}t=x.setupPlugins(n,o,p);
0<t.length?a.extend(o,g(t.plugins)):delete o.plugins;
"undefined"!=typeof o["dock.position"]&&"false"==o["dock.position"].toString().toLowerCase()&&(o.dock=o["dock.position"],delete o["dock.position"]);
t=o.wmode?o.wmode:o.height&&40>=o.height?"transparent":"opaque";
u="height width modes events primary base fallback volume".split(" ");
for(k=0;
k<u.length;
k++){delete o[u[k]]
}u=a.getCookies();
a.foreach(u,function(v,z){"undefined"==typeof o[v]&&(o[v]=z)
});
u=window.location.href.split("/");
u.splice(u.length-1,1);
u=u.join("/");
o.base=u+"/";
f[y.id]=o;
a.isIE()?(u='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%"id\x3d"'+y.id+'" name\x3d"'+y.id+'" tabindex\x3d0""\x3e',u+='\x3cparam name\x3d"movie" value\x3d"'+c.src+'"\x3e',u+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',u+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',u+='\x3cparam name\x3d"wmode" value\x3d"'+t+'"\x3e',u+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',u+="\x3c/object\x3e",y.outerHTML=u,t=document.getElementById(y.id)):(u=document.createElement("object"),u.setAttribute("type","application/x-shockwave-flash"),u.setAttribute("data",c.src),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("bgcolor","#000000"),u.setAttribute("id",y.id),u.setAttribute("name",y.id),u.setAttribute("tabindex",0),l(u,"allowfullscreen","true"),l(u,"allowscriptaccess","always"),l(u,"seamlesstabbing","true"),l(u,"wmode",t),y.parentNode.replaceChild(u,y),t=u);
n.config.aspectratio&&(t.style.position="absolute");
n.container=t;
n.setPlayer(t,"flash")
};
this.supportsConfig=function(){if(q){if(w){if("string"==a.typeOf(w.playlist)){return !0
}try{var k=w.playlist[0].sources;
if("undefined"==typeof k){return !0
}for(var o=0;
o<k.length;
o++){if(k[o].file&&h(k[o].file,k[o].type)){return !0
}}}catch(r){}}else{return !0
}}return !1
}
}).getVars=function(b){return f[b]
};
var h=d.embed.flashCanPlay=function(c,g){if(a.isYouTube(c)||a.isRtmp(c,g)||"hls"==g){return !0
}var b=a.extensionmap[g?g:a.extension(c)];
return !b?!1:!!b.flash
}
}(jwplayer),function(d){var a=d.utils,h=a.extensionmap,f=d.events;
d.embed.html5=function(g,c,j,v,b){function p(o,q,k){return function(){try{var t=document.querySelector("#"+g.id+" .jwmain");
k&&t.appendChild(q);
"function"==typeof o.resize&&(o.resize(t.clientWidth,t.clientHeight),setTimeout(function(){o.resize(t.clientWidth,t.clientHeight)
},400));
q.left=t.style.left;
q.top=t.style.top
}catch(r){}}
}function n(k){u.sendEvent(k.type,{message:"HTML5 player not found"})
}var u=this,l=new f.eventdispatcher;
a.extend(u,l);
u.embed=function(){if(d.html5){v.setupPlugins(b,j,p);
g.innerHTML="";
var k=d.utils.extend({},j);
delete k.volume;
k=new d.html5.player(k);
b.container=document.getElementById(b.id);
b.setPlayer(k,"html5")
}else{k=new a.scriptloader(c.src),k.addEventListener(f.ERROR,n),k.addEventListener(f.COMPLETE,u.embed),k.load()
}};
u.supportsConfig=function(){if(d.vid.canPlayType){try{if("string"==a.typeOf(j.playlist)){return !0
}for(var I=j.playlist[0].sources,k=0;
k<I.length;
k++){var q;
var r=I[k].file,y=I[k].type;
if(null!==navigator.userAgent.match(/BlackBerry/i)||a.isAndroid()&&("m3u"==a.extension(r)||"m3u8"==a.extension(r))||a.isRtmp(r,y)){q=!1
}else{var z=h[y?y:a.extension(r)],G;
if(!z||z.flash&&!z.html5){G=!1
}else{var H=z.html5,t=d.vid;
if(H){try{G=t.canPlayType(H)?!0:!1
}catch(J){G=!1
}}else{G=!0
}}q=G
}if(q){return !0
}}}catch(o){}}return !1
}
}
}(jwplayer),function(d){var a=d.embed,h=d.utils,f=h.extend(function(z){var r=h.repo(),B=h.extend({},d.defaults),n=h.extend({},B,z.config),q=z.config,g=n.plugins,c=n.analytics,j=r+"jwpsrv.js",b=r+"sharing.js",A=r+"related.js",l=r+"gapro.js",B=d.key?d.key:B.key,p=(new d.utils.key(B)).edition(),g=g?g:{};
"ads"==p&&n.advertising&&(n.advertising.client.match(".js$|.swf$")?g[n.advertising.client]=n.advertising:g[r+n.advertising.client+".js"]=n.advertising);
delete q.advertising;
q.key=B;
n.analytics&&(n.analytics.client&&n.analytics.client.match(".js$|.swf$"))&&(j=n.analytics.client);
delete q.analytics;
if("free"==p||!c||!1!==c.enabled){g[j]=c?c:{}
}delete g.sharing;
delete g.related;
switch(p){case"premium":case"ads":n.related&&(n.related.client&&n.related.client.match(".js$|.swf$")&&(A=n.related.client),g[A]=n.related),n.ga&&(n.ga.client&&n.ga.client.match(".js$|.swf$")&&(l=n.ga.client),g[l]=n.ga),q.sitecatalyst&&new d.embed.sitecatalyst(z);
case"pro":n.sharing&&(n.sharing.client&&n.sharing.client.match(".js$|.swf$")&&(b=n.sharing.client),g[b]=n.sharing),n.skin&&(q.skin=n.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,h.repo()+"skins/$1.xml"))
}q.plugins=g;
return new a(z)
},a);
d.embed=f
}(jwplayer),function(d){var a=jwplayer.utils;
d.sitecatalyst=function(g){function n(k){c.debug&&a.log(k)
}function r(k){k=k.split("/");
k=k[k.length-1];
k=k.split("?");
return k[0]
}function l(){if(!q){q=!0;
var k=b.getPosition();
n("stop: "+F+" : "+k);
s.Media.stop(F,k)
}}function D(){j||(l(),j=!0,n("close: "+F),s.Media.close(F),p=!0,E=0)
}var b=g,c=a.extend({},b.config.sitecatalyst),f={onPlay:function(){if(!p){var k=b.getPosition();
q=!1;
n("play: "+F+" : "+k);
s.Media.play(F,k)
}},onPause:l,onBuffer:l,onIdle:D,onPlaylistItem:function(k){try{p=!0;
D();
E=0;
var o;
if(c.mediaName){o=c.mediaName
}else{var u=b.getPlaylistItem(k.index);
o=u.title?u.title:u.file?r(u.file):u.sources&&u.sources.length?r(u.sources[0].file):""
}F=o;
h=c.playerName?c.playerName:b.id
}catch(t){a.log(t)
}},onTime:function(){if(p){var o=b.getDuration();
if(-1==o){return
}j=q=p=!1;
n("open: "+F+" : "+o+" : "+h);
s.Media.open(F,o,h);
n("play: "+F+" : 0");
s.Media.play(F,0)
}o=b.getPosition();
if(3<=Math.abs(o-E)){var k=E;
n("seek: "+k+" to "+o);
n("stop: "+F+" : "+k);
s.Media.stop(F,k);
n("play: "+F+" : "+o);
s.Media.play(F,o)
}E=o
},onComplete:D},F,h,E,q=!0,j=!0,p;
a.foreach(f,function(k){b[k](f[k])
})
}
}(jwplayer.embed),function(o){var d=[],k=o.utils,f=o.events,h=f.state,a=document,j=o.api=function(z){function b(A,C){return function(D){return C(A,D)
}
}function p(A,C){u[A]||(u[A]=[],q(f.JWPLAYER_PLAYER_STATE,function(D){var E=D.newstate;
D=D.oldstate;
if(E==A){var F=u[E];
if(F){for(var G=0;
G<F.length;
G++){"function"==typeof F[G]&&F[G].call(this,{oldstate:D,newstate:E})
}}}}));
u[A].push(C);
return l
}function n(C,D){try{C.jwAddEventListener(D,'function(dat) { jwplayer("'+l.id+'").dispatchEvent("'+D+'", dat); }')
}catch(A){k.log("Could not add internal listener")
}}function q(A,C){t[A]||(t[A]=[],v&&w&&n(v,A));
t[A].push(C);
return l
}function g(){if(w){for(var C=arguments[0],D=[],A=1;
A<arguments.length;
A++){D.push(arguments[A])
}if("undefined"!=typeof v&&"function"==typeof v[C]){switch(D.length){case 4:return v[C](D[0],D[1],D[2],D[3]);
case 3:return v[C](D[0],D[1],D[2]);
case 2:return v[C](D[0],D[1]);
case 1:return v[C](D[0]);
default:return v[C]()
}}return null
}x.push(arguments)
}var l=this,t={},u={},v=void 0,w=!1,x=[],y=void 0,B={},r={};
l.container=z;
l.id=z.id;
l.getBuffer=function(){return g("jwGetBuffer")
};
l.getContainer=function(){return l.container
};
l.addButton=function(E,F,A,C){try{r[C]=A,g("jwDockAddButton",E,F,"jwplayer('"+l.id+"').callback('"+C+"')",C)
}catch(D){k.log("Could not add dock button"+D.message)
}};
l.removeButton=function(A){g("jwDockRemoveButton",A)
};
l.callback=function(A){if(r[A]){r[A]()
}};
l.forceState=function(A){g("jwForceState",A);
return l
};
l.releaseState=function(){return g("jwReleaseState")
};
l.getDuration=function(){return g("jwGetDuration")
};
l.getFullscreen=function(){return g("jwGetFullscreen")
};
l.getHeight=function(){return g("jwGetHeight")
};
l.getLockState=function(){return g("jwGetLockState")
};
l.getMeta=function(){return l.getItemMeta()
};
l.getMute=function(){return g("jwGetMute")
};
l.getPlaylist=function(){var A=g("jwGetPlaylist");
"flash"==l.renderingMode&&k.deepReplaceKeyName(A,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);
return A
};
l.getPlaylistItem=function(A){k.exists(A)||(A=l.getPlaylistIndex());
return l.getPlaylist()[A]
};
l.getPlaylistIndex=function(){return g("jwGetPlaylistIndex")
};
l.getPosition=function(){return g("jwGetPosition")
};
l.getRenderingMode=function(){return l.renderingMode
};
l.getState=function(){return g("jwGetState")
};
l.getVolume=function(){return g("jwGetVolume")
};
l.getWidth=function(){return g("jwGetWidth")
};
l.setFullscreen=function(A){k.exists(A)?g("jwSetFullscreen",A):g("jwSetFullscreen",!g("jwGetFullscreen"));
return l
};
l.setMute=function(A){k.exists(A)?g("jwSetMute",A):g("jwSetMute",!g("jwGetMute"));
return l
};
l.lock=function(){return l
};
l.unlock=function(){return l
};
l.load=function(A){g("jwLoad",A);
return l
};
l.playlistItem=function(A){g("jwPlaylistItem",parseInt(A));
return l
};
l.playlistPrev=function(){g("jwPlaylistPrev");
return l
};
l.playlistNext=function(){g("jwPlaylistNext");
return l
};
l.resize=function(D,E){if("flash"!=l.renderingMode){var A=document.getElementById(l.id);
A.className=A.className.replace(/\s+aspectMode/,"");
A.style.display="block";
g("jwResize",D,E)
}else{var A=a.getElementById(l.id+"_wrapper"),C=a.getElementById(l.id+"_aspect");
C&&(C.style.display="none");
A&&(A.style.display="block",A.style.width=k.styleDimension(D),A.style.height=k.styleDimension(E))
}return l
};
l.play=function(A){"undefined"==typeof A?(A=l.getState(),A==h.PLAYING||A==h.BUFFERING?g("jwPause"):g("jwPlay")):g("jwPlay",A);
return l
};
l.pause=function(A){"undefined"==typeof A?(A=l.getState(),A==h.PLAYING||A==h.BUFFERING?g("jwPause"):g("jwPlay")):g("jwPause",A);
return l
};
l.stop=function(){g("jwStop");
return l
};
l.seek=function(A){g("jwSeek",A);
return l
};
l.setVolume=function(A){g("jwSetVolume",A);
return l
};
l.loadInstream=function(A,C){return y=new j.instream(this,v,A,C)
};
l.getQualityLevels=function(){return g("jwGetQualityLevels")
};
l.getCurrentQuality=function(){return g("jwGetCurrentQuality")
};
l.setCurrentQuality=function(A){g("jwSetCurrentQuality",A)
};
l.getCaptionsList=function(){return g("jwGetCaptionsList")
};
l.getCurrentCaptions=function(){return g("jwGetCurrentCaptions")
};
l.setCurrentCaptions=function(A){g("jwSetCurrentCaptions",A)
};
l.getControls=function(){return g("jwGetControls")
};
l.getSafeRegion=function(){return g("jwGetSafeRegion")
};
l.setControls=function(A){g("jwSetControls",A)
};
l.destroyPlayer=function(){g("jwPlayerDestroy")
};
l.playAd=function(A){g("jwPlayAd",A)
};
var L={onBufferChange:f.JWPLAYER_MEDIA_BUFFER,onBufferFull:f.JWPLAYER_MEDIA_BUFFER_FULL,onError:f.JWPLAYER_ERROR,onSetupError:f.JWPLAYER_SETUP_ERROR,onFullscreen:f.JWPLAYER_FULLSCREEN,onMeta:f.JWPLAYER_MEDIA_META,onMute:f.JWPLAYER_MEDIA_MUTE,onPlaylist:f.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:f.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:f.JWPLAYER_PLAYLIST_COMPLETE,onReady:f.API_READY,onResize:f.JWPLAYER_RESIZE,onComplete:f.JWPLAYER_MEDIA_COMPLETE,onSeek:f.JWPLAYER_MEDIA_SEEK,onTime:f.JWPLAYER_MEDIA_TIME,onVolume:f.JWPLAYER_MEDIA_VOLUME,onBeforePlay:f.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:f.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:f.JWPLAYER_DISPLAY_CLICK,onControls:f.JWPLAYER_CONTROLS,onQualityLevels:f.JWPLAYER_MEDIA_LEVELS,onQualityChange:f.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:f.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:f.JWPLAYER_CAPTIONS_CHANGED,onAdError:f.JWPLAYER_AD_ERROR,onAdClick:f.JWPLAYER_AD_CLICK,onAdImpression:f.JWPLAYER_AD_IMPRESSION,onAdTime:f.JWPLAYER_AD_TIME,onAdComplete:f.JWPLAYER_AD_COMPLETE,onAdCompanions:f.JWPLAYER_AD_COMPANIONS};
k.foreach(L,function(A){l[A]=b(L[A],q)
});
var c={onBuffer:h.BUFFERING,onPause:h.PAUSED,onPlay:h.PLAYING,onIdle:h.IDLE};
k.foreach(c,function(A){l[A]=b(c[A],p)
});
l.remove=function(){if(!w){throw"Cannot call remove() before player is ready"
}x=[];
j.destroyPlayer(this.id)
};
l.setup=function(A){if(o.embed){var C=a.getElementById(l.id);
C&&(A.fallbackDiv=C);
C=l;
x=[];
j.destroyPlayer(C.id);
C=o(l.id);
C.config=A;
return new o.embed(C)
}return l
};
l.registerPlugin=function(D,E,A,C){o.plugins.registerPlugin(D,E,A,C)
};
l.setPlayer=function(A,C){v=A;
l.renderingMode=C
};
l.detachMedia=function(){if("html5"==l.renderingMode){return g("jwDetachMedia")
}};
l.attachMedia=function(A){if("html5"==l.renderingMode){return g("jwAttachMedia",A)
}};
l.dispatchEvent=function(E,F){if(t[E]){for(var A=k.translateEventResponse(E,F),C=0;
C<t[E].length;
C++){if("function"==typeof t[E][C]){try{E==f.JWPLAYER_PLAYLIST_LOADED&&k.deepReplaceKeyName(A.playlist,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),t[E][C].call(this,A)
}catch(D){k.log("There was an error calling back an event handler")
}}}}};
l.dispatchInstreamEvent=function(A){y&&y.dispatchEvent(A,arguments)
};
l.callInternal=g;
l.playerReady=function(A){w=!0;
v||l.setPlayer(a.getElementById(A.id));
l.container=a.getElementById(l.id);
k.foreach(t,function(C){n(v,C)
});
q(f.JWPLAYER_PLAYLIST_ITEM,function(){B={}
});
q(f.JWPLAYER_MEDIA_META,function(C){k.extend(B,C.metadata)
});
for(l.dispatchEvent(f.API_READY);
0<x.length;
){g.apply(this,x.shift())
}};
l.getItemMeta=function(){return B
};
l.isBeforePlay=function(){return v.jwIsBeforePlay()
};
l.isBeforeComplete=function(){return v.jwIsBeforeComplete()
};
return l
};
j.selectPlayer=function(b){var c;
k.exists(b)||(b=0);
b.nodeType?c=b:"string"==typeof b&&(c=a.getElementById(b));
return c?(b=j.playerById(c.id))?b:j.addPlayer(new j(c)):"number"==typeof b?d[b]:null
};
j.playerById=function(b){for(var c=0;
c<d.length;
c++){if(d[c].id==b){return d[c]
}}return null
};
j.addPlayer=function(b){for(var c=0;
c<d.length;
c++){if(d[c]==b){return b
}}d.push(b);
return b
};
j.destroyPlayer=function(b){for(var c=-1,g,l=0;
l<d.length;
l++){d[l].id==b&&(c=l,g=d[l])
}0<=c&&(b=g.id,l=a.getElementById(b+("flash"==g.renderingMode?"_wrapper":"")),k.clearCss&&k.clearCss("#"+b),l&&("html5"==g.renderingMode&&g.destroyPlayer(),g=a.createElement("div"),g.id=b,l.parentNode.replaceChild(g,l)),d.splice(c,1));
return null
};
o.playerReady=function(c){var b=o.api.playerById(c.id);
b?b.playerReady(c):o.api.selectPlayer(c.id).playerReady(c)
}
}(jwplayer),function(d){var a=d.events,h=d.utils,f=a.state;
d.api.instream=function(b,c,j,w){function x(k,o){l[k]||(l[k]=[],v.jwInstreamAddEventListener(k,'function(dat) { jwplayer("'+n.id+'").dispatchInstreamEvent("'+k+'", dat); }'));
l[k].push(o);
return this
}function p(o,k){g[o]||(g[o]=[],x(a.JWPLAYER_PLAYER_STATE,function(q){var r=q.newstate,t=q.oldstate;
if(r==o){var u=g[r];
if(u){for(var y=0;
y<u.length;
y++){"function"==typeof u[y]&&u[y].call(this,{oldstate:t,newstate:r,type:q.type})
}}}}));
g[o].push(k);
return this
}var n=b,v=c,l={},g={};
this.dispatchEvent=function(o,q){if(l[o]){for(var r=h.translateEventResponse(o,q[1]),k=0;
k<l[o].length;
k++){"function"==typeof l[o][k]&&l[o][k].call(this,r)
}}};
this.onError=function(k){return x(a.JWPLAYER_ERROR,k)
};
this.onFullscreen=function(k){return x(a.JWPLAYER_FULLSCREEN,k)
};
this.onMeta=function(k){return x(a.JWPLAYER_MEDIA_META,k)
};
this.onMute=function(k){return x(a.JWPLAYER_MEDIA_MUTE,k)
};
this.onComplete=function(k){return x(a.JWPLAYER_MEDIA_COMPLETE,k)
};
this.onTime=function(k){return x(a.JWPLAYER_MEDIA_TIME,k)
};
this.onBuffer=function(k){return p(f.BUFFERING,k)
};
this.onPause=function(k){return p(f.PAUSED,k)
};
this.onPlay=function(k){return p(f.PLAYING,k)
};
this.onIdle=function(k){return p(f.IDLE,k)
};
this.onClick=function(k){return x(a.JWPLAYER_INSTREAM_CLICK,k)
};
this.onInstreamDestroyed=function(k){return x(a.JWPLAYER_INSTREAM_DESTROYED,k)
};
this.play=function(k){v.jwInstreamPlay(k)
};
this.pause=function(k){v.jwInstreamPause(k)
};
this.destroy=function(){v.jwInstreamDestroy()
};
this.setText=function(k){v.jwInstreamSetText(k?k:"")
};
n.callInternal("jwLoadInstream",j,w?w:{})
}
}(jwplayer),function(d){var a=d.api,f=a.selectPlayer;
a.selectPlayer=function(b){return(b=f(b))?b:{registerPlugin:function(k,c,j){d.plugins.registerPlugin(k,c,j)
}}
}
}(jwplayer));
jwplayer.key="uG/VHSbjrT7/udRHL0vnyr5GjyFu3WZQ9+VRUxia1vs=";
if(typeof String.prototype.startsWith!="function"){String.prototype.startsWith=function(a){return this.slice(0,a.length)===a
}
}$(function(){$(".lazy").lazyload();
$(".conv3_footer .listcon .menu_foot_products").on("click",function(){var d=$(this).attr("wrap");
if(!d){return
}var b="open";
var a="footer:menu:explore";
var c="phones:all phones";
if(d.startsWith("menu_module_")){d=d.replace("menu_module_","");
c="more products:"+d
}analyticsSubmit(a,b,c,EVENT_TYPE_OPEN_MENU_SECOND_LEVEL)
})
});
window.viewType=function(){var a=window.innerWidth||$(window).width();
return a>=1024?"pc":(a<768?"mobile":"tablet")
};
$.fn.initJwplayer=function(c){var g=$(this),a={path:"../",target:"self",autostart:false};
var f=null,d=g.data("t-lab"),b=$.isAndroid();
window.conv3VidoeControl=window.conv3VidoeControl||{};
$.extend(a,c);
return this.each(function(q){var l=0;
var o=false;
var v=function(y,z){switch(z){case"show":y.find("video").show();
y.find(".jwpreview").css({opacity:0,visibility:"hidden"});
y.find(".jwcontrolbar").show();
break;
case"hide":y.find("video").hide();
y.find(".jwpreview").css({opacity:1,visibility:"visible"});
y.find(".jwcontrolbar").hide();
break
}};
var u=$(this).data("t-viewtimes");
var p=false;
var k={id:$(this).data("video-id"),image:$(this).data("video-image"),link:$(this).data("video-link"),aspectratio:$(this).data("video-ratio"),file:$(this).attr("href"),width:"100%",label:$(this).data("t-label"),autostart:a.autostart,flashplayer:"/etc/designs/huawei-cbg-site/statics/hw_jwflash.swf",tracks:[{file:$(this).data("video-track"),label:"on",kind:"captions","default":true}],captions:{back:false,color:$(this).data("caption-color")||"ffffff",fontsize:15},events:{onReady:function(){},onPlay:function(y){$(".jwdisplay").removeClass("x-mask");
$(".jwpreview").removeClass("x-opacity");
$(".jwplayer .x-over").hide();
clearTimeout(f);
if(!g.data("video-start")){$.trackVideo("Video Milestone","start",k.label+","+queryVariable("<URL>"));
g.data("video-start",true)
}else{$.trackVideo("Video Play/Pause/Exit","play",k.label+","+queryVariable("<URL>"))
}o=true;
clearTimeout(t);
b&&v(n,"show")
},onPause:function(){b&&v(n,"hide")
},onComplete:function(){$(".jwdisplay").addClass("x-mask");
$(".jwpreview").addClass("x-opacity");
$(".jwplayer .x-over").show();
o=false;
clearTimeout(t);
b&&v(n,"hide")
}}};
var n=null,t=null;
var j=function(){jwplayer(k.id).pause(true);
o=false;
clearTimeout(t);
t=setTimeout(function(){k.events.onPause()
},100)
};
conv3VidoeControl.pause=conv3VidoeControl.pause||[];
conv3VidoeControl.pause.push(j);
if(b){$(window).on("scroll",function(){if(o){j()
}})
}if($("html").hasClass("ie9")||$("html").hasClass("ie8")||$("html").hasClass("ie7")){k.primary="flash"
}else{k.primary="html5"
}var h=1600,x=900;
if(typeof(k.aspectratio)=="string"&&/^[0-9]{1,2}:[0-9]{1,2}$/.test(k.aspectratio)){var r=k.aspectratio.split(":");
x=h*parseInt(r[1])/parseInt(r[0])
}if(a.target=="self"){$(this).html('<div id="'+k.id+'"></div>');
try{jwplayer(k.id).setup(k);
if(u){jwplayer(k.id).onPlay(function(z){if(p){return
}var y=window.digitalData.page.pageInfo.uri.split("/").reverse()[1].split(".")[0];
addStatistics(y);
p=true
})
}jwplayer(k.id).onReady(function(y){n=$("#"+k.id)
})
}catch(q){}}else{if(a.target=="fancybox"){var w=function(y){y.stopPropagation();
y.preventDefault();
return false
};
$("head").append('<link href="/etc/designs/huawei-cbg-site/statics/fancybox.css" rel="stylesheet" type="text/css" />');
$.getScript("/etc/designs/huawei-cbg-site/statics/lib-bundle.js",function(){$.fancybox('<div id="'+k.id+'" class="cbg-jwplayer"></div><div class="cbg-video-mask"></div>',{width:h,height:x,padding:0,margin:20,autoSize:false,aspectRatio:true,scrolling:"no",beforeShow:function(){try{if(g.data("iframe-url")){var A='<iframe height="100%" width="100%" src="'+g.data("iframe-url")+'?autoplay=1" frameborder=0 allowfullscreen></iframe>';
$(".fancybox-wrap #videoPlayer").remove();
$(".fancybox-wrap .fancybox-inner").prepend(A)
}else{jwplayer(k.id).setup(k);
jwplayer(k.id).onFullscreen(function(D){D.fullscreen?$(".fancybox-close").hide():$(".fancybox-close").show();
!D.fullscreen&&$(".jwcontrolbar").css({opacity:0,display:"inline-block"})
});
jwplayer(k.id).onReady(function(D){$(".cbg-video-mask").fadeOut();
n=$("#"+k.id)
});
$(".fancybox-overlay").on("touchmove",w);
$("#cbg-banner").flexslider("pause")
}}catch(B){}if(window.innerWidth<1024){var y=$(window).height(),z=$(".fancybox-inner").height(),C=parseFloat((y-z)/2);
$(".fancybox-wrap").css("top",C);
_scrollTop=$(document).scrollTop();
$("html,body").css({height:$(window).height(),overflow:"hidden"}).scrollTop(_scrollTop);
return _scrollTop
}},afterClose:function(){$("[data-video-id]").removeClass("active");
if(window.innerWidth<1024){$("html,body").removeAttr("style").scrollTop(_scrollTop)
}},beforeClose:function(){var z=g.data("video-name")||"<video name>";
var A="<product name> - "+z+" - <page title>";
if(g.data("iframe-url")){analyticsSubmit("Video Milestone","Video",A,EVENT_TYPE_VIDEO_CLOSED)
}else{jwplayer(0).stop();
jwplayer(k.id).stop();
var y=Math.floor(jwplayer(k.id).getPosition()*100/jwplayer(k.id).getDuration());
analyticsSubmit("Video Milestone",getVideoActionStatus(y),A,EVENT_TYPE_VIDEO_CLOSED)
}}})
})
}}})
};
var videotrack=new Array();
$.fn.initH5player=function(b){var c=$(this),a={path:"../",target:"self",autostart:false};
$.extend(a,b);
return this.each(function(n){var d={id:$(this).data("video-id"),image:$(this).data("video-image"),aspectratio:$(this).data("video-ratio"),file:$(this).attr("href"),tracks:$(this).data("video-track"),firstplay:1,firstend:1};
if(addVideoList(d.file)){videotrack.push(d)
}var r=[];
for(var j=0;
j<videotrack.length;
j++){if(videotrack[j].file==d.file){r=videotrack[j];
break
}}var h=c.data("video-name");
var k=digitalData.product?digitalData.product.productInfo.marketingName:"";
var p=k+" - "+h+" - "+digitalData.page.pageInfo.pageName;
d.label=p;
if($(this).data("t-label")){d.label=$(this).data("t-label")
}var f=b.width||1600,u=b.height||900;
var f=1600,u=900;
if(typeof(d.aspectratio)=="string"&&/^[0-9]{1,2}:[0-9]{1,2}$/.test(d.aspectratio)){var o=d.aspectratio.split(":");
u=f*parseInt(o[1])/parseInt(o[0])
}if(d.tracks){var t="<video controls  playsinline='true' webkit-playsinline='true' controlsList='nodownload' poster='"+d.image+"' id='"+d.id+"' style='width:100%;height:auto'><source src='"+d.file+"' type='video/mp4' /><track src='"+d.tracks+"' kind='subtitles' default />Your browser does not support mp4 video.</video>"
}else{var t="<video controls  playsinline='true' webkit-playsinline='true' controlsList='nodownload' poster='"+d.image+"' id='"+d.id+"' style='width:100%;height:auto'><source src='"+d.file+"' type='video/mp4' /></video>"
}if(a.target=="self"){$(this).html('<div class="self-video">'+t+"</div>");
var l=1000;
var g=setInterval(function(){var w=$("#"+d.id);
var v=w[0];
if(w.length>0&&v.readyState=="4"){v.play();
v.addEventListener("play",function(){if(r.firstplay==1){r.firstplay=0;
window.ga?trackEvent("Video Milestone","Video Start",d.label,""):console.log("Google Analytics not detected")
}});
v.addEventListener("ended",function(){if(r.firstend==1){r.firstend=0;
window.ga?analyticsSubmit("Video Milestone","Video Complete",d.label,EVENT_TYPE_VIDEO_CLOSED):console.log("Google Analytics not detected")
}});
clearInterval(g)
}if(l--<1){clearInterval(g)
}},100)
}else{if(a.target=="fancybox"){var q=function(v){v.stopPropagation();
v.preventDefault();
return false
};
$("head").append('<link href="/etc/designs/huawei-cbg-site/statics/fancybox.css" rel="stylesheet" type="text/css" />');
$.getScript("/etc/designs/huawei-cbg-site/statics/lib-bundle.js",function(){$.fancybox('<div class="cbg-jwplayer">'+t+'</div><div class="cbg-video-mask"></div>',{width:f,height:u,padding:0,margin:20,autoSize:false,aspectRatio:true,scrolling:"no",beforeShow:function(){var v=1000;
var w=setInterval(function(){var y=$("#"+d.id);
var x=y[0];
if(y.length>0&&x.readyState=="4"){x.play();
x.addEventListener("play",function(){if(r.firstplay==1){r.firstplay=0;
window.ga?trackEvent("Video Milestone","Video Start",d.label,""):console.log("Google Analytics not detected")
}});
x.addEventListener("ended",function(){if(r.firstend==1){r.firstend=0;
window.ga?analyticsSubmit("Video Milestone","Video Complete",d.label,EVENT_TYPE_VIDEO_CLOSED):console.log("Google Analytics not detected")
}});
clearInterval(w)
}if(v--<1){clearInterval(w)
}},100)
},afterClose:function(){},beforeClose:function(){closeAllVideo(d.id)
}})
})
}}})
};
function addVideoList(c){var a=videotrack.length;
for(var b=0;
b<a;
b++){if(videotrack[b].file==c){return false
}}return true
}function closeAllVideo(a){document.getElementById(a).pause()
}(function(a){a.fn.addSelector=function(c){var d=a(this);
var b={tabView:undefined,tabClass:"current",tabChangeTitle:true};
var f=function(){return b.tabView=="both"||(b.tabView&&b.tabView.indexOf(viewType())>-1)
};
a.extend(b,c);
d.find(".select").on("click",function(k){if(f()){return
}var l=a(this),h=l.find("ol"),j=l.siblings(".select");
if(l.hasClass("disable")){return
}if(h.data("slide")=="open"){h.slideUp(250,function(){h.data("slide","close")
});
l.find("span").removeClass("active")
}else{h.slideDown(250,function(){h.data("slide","open")
});
l.find("span").addClass("active")
}j.find("ol").slideUp(250,function(){a(this).data("slide","close")
});
j.find("span").removeClass("active");
if(l.parents(".add-contact-info").length>0){var g=l.parents(".s-selector").siblings(".s-selector");
g.find("ol").slideUp(250,function(){a(this).data("slide","close")
});
g.find("span").removeClass("active")
}k.stopPropagation()
});
d.find(".select ol li").off("click.compareItem").on("click.compareItem",function(l){var g=a(this),j=g.parents(".select").eq(0).find("span"),h=g.text(),k=j.text();
if(f()){g.addClass(b.tabClass).siblings("li").removeClass(b.tabClass)
}else{g.addClass(b.tabClass).siblings("li").removeClass(b.tabClass);
g.parents(".select").eq(0).find("ol").slideUp(250,function(){a(this).data("slide","close")
})
}j.removeClass("active");
b.tabChangeTitle&&j.text(h);
d.trigger("selected",{val:h,_mark:g.parents("ol").eq(0).attr("_mark")});
setTimeout(function(){a(".conv3_search_wrap .result_news_pc .list li strong").each(function(){var n=a(this).find("a");
if(n.height()>45){a(this).addClass("ellipsis")
}});
a(".conv3_search_wrap .result_news_pc .list li p").each(function(){var n=a(this).find("span.content");
if(n.height()>65){a(this).addClass("ellipsis")
}})
},500);
l.stopPropagation()
});
a("body").on("click",function(){if(f()){return
}var g=d.find(".select");
g.find("ol").slideUp(250,function(){a(this).data("slide","close")
});
g.find("span").removeClass("active")
});
if(f()){a(window).on("resize",function(){if(f()){d.find(".select ol").show()
}else{d.find(".select ol").hide()
}})
}return d
}
})(jQuery);
function RenderSelectInput(j,g,h){var b=parseInt($(j).css("width").replace("px",""));
var f=parseInt($(j).css("height").replace("px",""));
var c=$(j).children("span:first");
c.after("<input type='text' class='select-input' placeholder='"+g+"' />");
var a=$(j).children("input:first");
var d=$(j).children("ol:first");
c.css("font-size","0");
a.css({height:f+"px",position:"relative",display:"block",left:"0",top:"-"+f+"px",outline:"none","border-width":"0","background-color":"transparent","margin-left":"auto","margin-right":"auto",width:$(c).css("width")});
a.keyup(function(){if(h!="undefined"){h(a,function(){d.children("li").each(function(){if($(this).text().toUpperCase().indexOf($(a).val().toUpperCase())>=0){$(this).html($(this).text().replace($(a).val().toUpperCase(),"<strong style='color:red;' >"+$(a).val().toUpperCase()+"</strong>"));
$(this).show()
}else{$(this).hide()
}});
if(!$(c).hasClass("active")){$(c).addClass("active")
}setTimeout(function(){$(d).css("display","block")
},500)
})
}});
a.focus(function(k){if(a.val()==""){return
}if(!$(c).hasClass("active")){$(c).addClass("active")
}setTimeout(function(){$(d).css("display","block")
},500)
});
$(window).resize(function(){a.css({width:$(c).css("width")})
});
$(j+" ol:first > li").on("click",function(){$(a).val($(this).text());
$(j+" ol:first").hide()
});
window.SelectProduct=function(k){setTimeout(function(){$(".conv3_certification_wrap .conv3_global_selector .select input:first").val(k);
$(".conv3_global_selector .select ol").hide()
},200)
}
}$.isAndroid=function(){return navigator.userAgent.indexOf("Android")>-1||navigator.userAgent.indexOf("Adr")>-1
};
$.isIos=function(){return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
};
$.isMobile=function(){var a=navigator.userAgent;
var c=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
for(var b=0;
b<c.length;
b++){if(a.indexOf(c[b])>0){return true
}}return false
};
$.isPc=function(){return !$.isMobile()
};
$.equip=function(){var a=navigator.userAgent;
var c=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
for(var b=0;
b<c.length;
b++){if(a.indexOf(c[b])>0){return c[b]
}}return"pc"
};
function HeightKey(d,j,k){var f=d;
var g=j;
var h=(f&&g)?f.toLowerCase().indexOf(g.toLowerCase()):-1;
if(h>-1){if(h==0){var c="<"+k+">"+f.substring(0,g.length)+"</"+k+">";
var b=f.substring(g.length,f.length);
var a=""
}else{var c=f.substring(0,h);
var b="<"+k+">"+f.substring(h,g.length+h)+"</"+k+">";
var a=f.substring(g.length+h,d.length)
}f=c+b+a
}return f
}function getURLParam(b){var a=decodeURIComponent(window.location.href).match(new RegExp("[?&]"+b+"=([^=&]*)(&|$)"));
return a?a[1]:null
}var monthtxt=$("#month_txt").val();
if(monthtxt==""||monthtxt=="month txt"){monthtxt="January,February,March,April,May,June,July,August,September,October,November,December"
}var montharray=monthtxt.split(",");
function formatMonth(a){m=parseInt(a);
return montharray[m-1]
}function formatTime(d,c){if(d&&d!=""){var b=d.split("-");
var a=formatMonth(b[1]);
return a+" "+b[2]+", "+b[0]
}else{return""
}}function deleteHttp(a){if(a!=null&&typeof a=="string"){if(a.indexOf("http:")==0){return a.substring(5,a.length)
}else{if(a.indexOf("https:")==0){return a.substring(6,a.length)
}else{return a
}}}else{return a
}}function formatString(a){if(a){return a
}return""
}function getVideoActionStatus(a){if(a<25){return"Video Start"
}if(a<50){return"Video 25%"
}if(a<75){return"Video 50%"
}if(a<99){return"Video 75%"
}return"Video Complete"
}function setCookie(a,c){var b=7;
var d=new Date();
d.setTime(d.getTime()+b*24*60*60*1000);
document.cookie=a+"="+escape(c)+";expires="+d.toGMTString()+";path=/"
}function getCookie(b){var a,c=new RegExp("(^| )"+b+"=([^;]*)(;|$)");
if(a=document.cookie.match(c)){return unescape(a[2])
}else{return null
}}function delCookie(a){var c=new Date();
c.setTime(c.getTime()-1);
var b=getCookie(a);
if(b!=null){document.cookie=a+"="+b+";expires="+c.toGMTString()
}}function getExplorerInfo(){var b=window.navigator.userAgent.toLowerCase();
if(b.indexOf("msie")>=0){var a=b.match(/msie ([\d.]+)/)[1];
return{type:"IE",version:a}
}else{if(b.indexOf("Edge")>=0){var a=b.match(/Edge\/([\d.]+)/)[1];
return{type:"Edge",version:a}
}else{if(b.indexOf("firefox")>=0){var a=b.match(/firefox\/([\d.]+)/)[1];
return{type:"Firefox",version:a}
}else{if(b.indexOf("chrome")>=0){var a=b.match(/chrome\/([\d.]+)/)[1];
return{type:"Chrome",version:a}
}else{if(b.indexOf("opera")>=0){var a=b.match(/opera.([\d.]+)/)[1];
return{type:"Opera",version:a}
}else{if(b.indexOf("safari")>=0){return{type:"Safari",version:0}
}else{return{type:0,version:0}
}}}}}}}function snsShare(d,b){var a=b||document.location.href;
var c=encodeURIComponent(document.title);
var f="";
switch(d){case"facebook":f="https://web.archive.org/web/20210506134650/https://www.facebook.com/sharer/sharer.php?u="+a;
break;
case"googleplus":f="https://web.archive.org/web/20210506134650/https://plus.google.com/u/0/share?text="+c+encodeURIComponent(" ")+a;
break;
case"twitter":f="https://web.archive.org/web/20210506134650/https://twitter.com/intent/tweet?text="+c+encodeURIComponent(" ")+a;
break;
case"sinablog":f="https://web.archive.org/web/20210506134650/http://v.t.sina.com.cn/share/share.php?url="+a+"&title="+c+"&appkey=330242870";
break;
case"qqblog":f="https://web.archive.org/web/20210506134650/http://shuqian.qq.com/post?from=3&title="+c+"&uri="+encodeURIComponent(document.location.href)+"&jumpback=2&noui=1";
break;
default:f=""
}window.open(f,d,"toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=500,location=1")
}var basesupport="//web.archive.org/web/20210506134650/https://consumer.huawei.com/support/services/";
function setInitMap(d,g){var f=d.address==undefined?"beijing":d.address;
d.geocoder.geocode({address:d.address},function(a,c){if(c==google.maps.GeocoderStatus.OK){var h={zoom:10,center:a[0].geometry.location,mapTypeId:google.maps.MapTypeId.ROADMAP};
var b=new google.maps.Map(document.getElementById(d.id),h);
g&&g(b)
}})
}function loadMapScript(c){c=c||"en";
var d=document.createElement("script");
d.type="text/javascript";
d.setAttribute("async","");
d.setAttribute("defer","");
d.src="//web.archive.org/web/20210506134650/https://maps.google.com/maps/api/js?key=AIzaSyB5ykZNED0-oT4i1RZRqS9oetClB7wCwfE&language="+c.toLowerCase()+"&callback=initMap";
document.body.appendChild(d)
}var MenuPageHistory=function(b){function a(c){this.pages=[];
this.option=c;
this.closeCallBack;
this.prePushCallBack
}a.prototype.PushPage=function(c,f){var d=this;
d.prePushCallBack&&d.prePushCallBack();
setTimeout(function(){if(d.pages.length>0){var g=d.pages[d.pages.length-1];
d.pages.push(c);
b(g).slideUp(d.option.slideSpeed,function(){b(c).slideDown(d.option.slideSpeed,function(){f&&f()
})
})
}else{d.pages.push(c);
b(c).slideDown(d.option.slideSpeed,function(){f&&f()
})
}},200)
};
a.prototype.PopPage=function(f){var d=this;
if(this.pages.length>1){var c=this.pages[this.pages.length-1];
var g=this.pages[this.pages.length-2];
b(c).slideUp(this.option.slideSpeed,function(){b(g).slideDown(d.option.slideSpeed,function(){d.pages.splice(d.pages.length-1,1);
f&&f()
})
})
}else{if(this.pages.length==1){var c=this.pages[this.pages.length-1];
b(c).slideUp(this.option.slideSpeed,function(){d.pages.splice(d.pages.length-1,1);
f&&f();
if(d.pages.length==0){d.closeCallBack&&d.closeCallBack()
}})
}}};
a.prototype.ClosePage=function(f){var d=this;
try{var c=this.pages[this.pages.length-1];
if(!c){f&&f();
return
}b(c).slideUp(this.option.slideSpeed,function(){d.pages.splice(0,d.pages.length);
f&&f();
d.closeCallBack&&d.closeCallBack()
})
}catch(g){f&&f()
}};
a.prototype.CloseHandler=function(c){if(c){this.closeCallBack=c
}};
a.prototype.BeforePushPageHandler=function(c){if(c){this.prePushCallBack=c
}};
return a
}(jQuery);
var slideSpeed=250;
var fotterScrollTop=0;
var menuPageHistory=new MenuPageHistory({slideSpeed:slideSpeed});
menuPageHistory.BeforePushPageHandler(function(){if(fotterScrollTop==0){fotterScrollTop=$(document).scrollTop()
}$(document).scrollTop(0)
});
menuPageHistory.CloseHandler(function(){$("#normal_nav .navcon .menu ul li").removeClass("current");
$(document).scrollTop(fotterScrollTop);
fotterScrollTop=0
});
$(function(){var a=getExplorerInfo();
setTimeout(function(){$("img").each(function(b){$(this).attr("onerror","imgErrorUrl(this)")
})
},3000)
});
var imgErrorUrl=function(a){var b=$(a)||$(this);
var c="/etc/designs/huawei-cbg-site/clientlib-v3/images/hw-logo1-80.png";
if(b.hasClass("imgerror-defaultlogo")){return
}else{b.attr("src",c).addClass("imgerror-defaultlogo")
}};
function clickLazyImgs(a){a.find("img.lazy_src").each(function(){$(this).attr("src",$(this).data("src")).removeClass("lazy_src").show()
})
}function scrollLazyImgs(c,b){var d=parseInt($(document).scrollTop());
var a=parseInt(c.offset().top)-(b||200);
if(d>=a){c.find("img.scroll_src").each(function(f){$(this).attr("src",$(this).data("src")).removeClass("scroll_src").show()
})
}}function classLazy(b,d){var c=d||500;
var a=parseInt($(document).scrollTop())+c;
$(".lazy_class").each(function(){var f=$(this).offset().top;
a>=f?$(this).addClass($(this).data("class")).removeClass("lazy_class"):""
})
}$(function(){$(".part_description,.spec-contect p").each(function(){if($(this).text().indexOf("≥")!=-1){$(this).text($(this).text().replace(/≥/g,">="))
}if($(this).text().indexOf("≤")!=-1){$(this).text($(this).text().replace(/≤/g,"<="))
}})
});
function getV3PageTypeByCategory(a){switch(a){case"phones":return"phones";
case"laptops":return"laptops";
case"tablets":return"tablets";
case"wearables":return"wearables";
case"smart-home":return"smart-home";
case"mobile-broadband":return"more-products";
case"accessories":return"more-products";
case"about-us":return"setCurrentNav";
case"legal":return"setCurrentNav";
case"store-finder":return"setCurrentNav";
default:return"0"
}}function setV3CurrentNav(){var a=$(".header-wrap>.nav-wrap>.left-box>ul>li");
var f=a.length;
var c=getV3PageTypeByCategory(digitalData.page.category.primaryCategory);
var g=digitalData.page.category.pageType;
var h=digitalData.page.category.primaryCategory;
if(g=="support"){for(var d=f-1;
d>0;
d--){if(a.eq(d).find("a").attr("href")&&a.eq(d).find("a").attr("href").indexOf("/support")>0){a.eq(d).addClass("curpage");
break
}}}else{if(h=="emui"){for(var d=f-1;
d>0;
d--){if(a.eq(d).find("a").attr("href")&&a.eq(d).find("a").attr("href").indexOf("/emui")>0){a.eq(d).addClass("curpage");
break
}}}else{if(c!="0"&&c!="setCurrentNav"){var b=0;
for(var d=0;
d<f;
d++){if(a.eq(d).attr("wrap")==c){a.eq(d).addClass("curpage");
b=1;
break
}}b==0?$(".header-wrap>.nav-wrap>.left-box>ul>li[wrap='more-products']").addClass("curpage"):""
}}}}$(document).ready(function(){if($(window).width()>767){setV3CurrentNav()
}$("input[type='text']").each(function(b,a){var c=$(a);
if(!c.attr("maxlength")){c.attr("maxlength",500)
}})
});
var plphidedataToJson=function(){var a=[];
$(".plphidedata_arr span").each(function(b,c){if($(c).text().length>0){a.push(JSON.parse($(c).text().trim()))
}});
return a
};
$(function(){$(".play_video").on("click",function(){var a=setInterval(function(){if($(".fancybox-mobile.fancybox-opened").length>0){clearInterval(a);
$("body").css("overflow","hidden");
$(".fancybox-overlay,.fancybox-close").on("click",function(){$("html,body").css("overflow","auto");
$("body").css("height","auto")
})
}},200)
})
});
function reSetBodyClass(){var a=100;
var b=setInterval(function(){if(!$("body").hasClass("huawei-v3")){$("body").addClass("huawei-v3 ")
}if(--a<0){clearInterval(b)
}},100)
}reSetBodyClass();
var _scrollTop=0;
var bilingual_site_cookie=getCookie("bilingual_site_cookie")?getCookie("bilingual_site_cookie"):"";
var current_site_code=digitalData.page.pageInfo.siteCode||"";
var current_country_code=digitalData.page.pageInfo.countryCode||"";
var site_code="";
var country_code="";
var cookieArr=[];
var cookieStr="";
var c_flag=false;
var s_flag=false;
var replace_str="";
var cookie_info="";
var path_name=window.location.pathname;
var click_flag=false;
if(path_name.indexOf("/editor.html/content/huawei-cbg-site/")==0){path_name=path_name.replace("/editor.html/content/huawei-cbg-site/","");
if(path_name.indexOf("/")>-1){current_site_code=path_name.split("/")[0]
}else{current_site_code=path_name.split(".")[0]
}}else{if(path_name.indexOf("/content/huawei-cbg-site/")==0){path_name=path_name.replace("/content/huawei-cbg-site/","");
if(path_name.indexOf("/")>-1){current_site_code=path_name.split("/")[0]
}else{current_site_code=path_name.split(".")[0]
}}else{current_site_code=path_name.split("/")[1]
}}$(document).ready(function(){$("#subscribe_email").on("click",function(){$(".tips-v3").hide();
if(!d()){return false
}var k=$("#email_input").val();
var n=$("#groupId").val();
var g=$("#campaignId").val();
var h=$("#privacyChecked").prop("checked");
var j=supportv2.cmktApiUrl;
if(!j){$(".news-letter-signup .systemBusy").css("display","inline-block");
return false
}var l=j+"/publicservices/service/newsletter/addRecipient";
$.ajax({type:"POST",url:l,data:{email:k,groupId:n,campaignId:g,agreePrivacy:h?"1":"0",source:"footer",regionCode:window.digitalData.page.pageInfo.siteCode2||""},success:function(p){$(".submit-contain p").hide();
var o=p.resCode;
f(o)
},error:function(){$(".news-letter-signup .systemBusy").css("display","inline-block")
}})
});
$(".dialog-modal i").on("click",function(){$(".news-letter-signup .dialog-modal").css("display","none")
});
function d(){var h=$("#email_input").val();
if($.trim(h)===""){$(".v3-wrong-email-null").css("display","inline-block");
$("#email_input").focus();
return false
}if(!h.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ig)){$(".v3-wrong-address").css("display","inline-block");
$("#email_input").focus();
return false
}var g=$("#privacyChecked").prop("checked");
if(!g){$(".news-letter-signup .privacyChecked").css("display","inline-block");
return false
}return true
}function f(g){if(g==="0"){$(".news-letter-signup .dialog-modal").css("display","block")
}else{if(g==="1001"){$(".news-letter-signup .resp1001").css("display","inline-block")
}else{if(g==="2"||g==="4"){$(".news-letter-signup .systemBusy").css("display","inline-block")
}else{if(g==="1005"){$(".news-letter-signup .frequent-user-operations").css("display","inline-block")
}else{if(g==="1006"){$(".news-letter-signup .privacyChecked").css("display","inline-block")
}}}}}}if($(".site_choose_mask").length>0){$(".site_choose_mask p span.site_choose_btn").each(function(){if($(this).attr("sitecode")&&$(this).attr("sitecode")==current_site_code){$(this).addClass("current").siblings().removeClass("current")
}});
$("a.lang_change").click(function(){if($(this).attr("scode")&&$(this).attr("scode")!=""){c_flag=false;
s_flag=false;
var h=$(this).attr("scode");
site_code=h;
country_code=current_country_code;
cookie_info=country_code+"|"+site_code;
var g="";
if(bilingual_site_cookie!=""){g="Y"
}else{g="N"
}c(cookie_info,site_code,g,"yes")
}});
if(bilingual_site_cookie!=""){site_code=current_site_code;
cookieStr=getCookie("bilingual_site_cookie");
cookieArr=cookieStr.split(",");
for(var b=0;
b<cookieArr.length;
b++){if(cookieArr[b].split("|")[0]==current_country_code){c_flag=true;
replace_str=cookieArr[b];
if(cookieArr[b].split("|")[1]==site_code){s_flag=true
}}}if(c_flag==true&&s_flag==true){}else{if(c_flag==true&&s_flag==false){site_code=replace_str.split("|")[1];
a(site_code)
}else{if(c_flag==false){if($("#is_editor").attr("data-is-editor-mode")=="true"){}else{if($("#is_editor").attr("data-is-editor-mode")=="false"){$(".site_choose_mask").show();
$("html").addClass("htmlbody_scroll")
}}}}}}else{if($("#is_editor").attr("data-is-editor-mode")=="true"){}else{if($("#is_editor").attr("data-is-editor-mode")=="false"){$(".site_choose_mask").show();
$("html").addClass("htmlbody_scroll")
}}}$(document).on("click","#close_btn",function(l){l.stopPropagation();
var g="navigation";
var h="site_language_box_close";
var j=current_site_code;
ga("send","event",g,h,j);
$("html").removeClass("htmlbody_scroll");
$(".site_choose_mask").hide();
site_code=current_site_code;
country_code=current_country_code;
cookie_info=country_code+"|"+site_code;
var k="";
if(bilingual_site_cookie!=""){k="Y"
}else{k="N"
}c(cookie_info,site_code,k,"yes")
});
$(document).on("click",".site_choose_btn",function(n){n.stopPropagation();
var g="navigation";
var h="site_language_select";
var j=current_site_code+"_"+$(this).text();
ga("send","event",g,h,j);
var l="yes";
if($(this).hasClass("current")){click_flag=true
}else{click_flag=false
}var k="";
if(bilingual_site_cookie!=""){k="Y"
}else{k="N"
}if(!$(this).attr("siteCode")){}else{$("html").removeClass("htmlbody_scroll");
$(".site_choose_mask").hide();
var o=$(this).attr("siteCode");
site_code=o;
country_code=current_country_code;
cookie_info=country_code+"|"+site_code;
c(cookie_info,site_code,k,l)
}});
$(document).on("click",".mask_content",function(g){g.stopPropagation()
});
$(document).on("click",function(g){g.stopPropagation()
});
function c(g,j,k,l){if(getCookie("bilingual_site_cookie")&&getCookie("bilingual_site_cookie")!=""){cookieStr=getCookie("bilingual_site_cookie");
cookieArr=cookieStr.split(",");
for(var h=0;
h<cookieArr.length;
h++){if(cookieArr[h].split("|")[0]==current_country_code){c_flag=true;
replace_str=cookieArr[h];
if(cookieArr[h].split("|")[1]==j){s_flag=true
}}}if(c_flag==true&&s_flag==true&&l=="yes"){a(j,k,l)
}else{if(c_flag==true&&s_flag==true&&l!="yes"){}else{if(c_flag==true&&s_flag==false){cookieStr=cookieStr.replace(replace_str,g);
setCookie("bilingual_site_cookie",cookieStr);
a(j,k,l)
}else{if(c_flag==false){cookieStr=cookieStr+","+g;
setCookie("bilingual_site_cookie",cookieStr);
a(j,k,l)
}}}}}else{cookieArr.push(g);
setCookie("bilingual_site_cookie",cookieArr);
a(j,k,"yes")
}}function a(k,l,n){var h=window.location.href;
var g=window.location.origin;
if(location.hash!=""){var o=window.location.pathname+location.hash
}else{var o=window.location.pathname
}var j=window.location.search;
if(o.indexOf("/editor.html/content/huawei-cbg-site/")==0){o=o.replace("/editor.html/content/huawei-cbg-site/","");
if(o.indexOf("/")>-1){o=o.replace(o.split("/")[0],k);
o="/editor.html/content/huawei-cbg-site/"+o;
h=g+o
}else{o=o.replace(o.split(".")[0],k);
o="/editor.html/content/huawei-cbg-site/"+o;
h=g+o+j
}}else{if(o.indexOf("/content/huawei-cbg-site/")==0){o=o.replace("/content/huawei-cbg-site/","");
if(o.indexOf("/")>-1){o=o.replace(o.split("/")[0],k);
o="/content/huawei-cbg-site/"+o;
h=g+o+j
}else{o=o.replace(o.split(".")[0],k);
o="/content/huawei-cbg-site/"+o;
h=g+o+j
}}else{o=o.replace("/"+current_site_code+"/","/"+k+"/");
h=g+o+j
}}if(n=="yes"){window.location.href=h
}else{if(h.indexOf("/community/")>-1||h.indexOf("/community.html")>-1){if(l=="N"){window.location.href=h
}else{$.ajax({type:"get",cache:false,url:h,dataType:"html",complete:function(p){if(p.status==404){}else{if($("#is_editor").attr("data-is-editor-mode")=="false"){$(".site_choose_mask").show();
$("html").addClass("htmlbody_scroll")
}}}})
}}else{if($("#is_editor").attr("data-is-editor-mode")=="false"){$(".site_choose_mask").show();
$("html").addClass("htmlbody_scroll")
}}}}}});
$(document).ready(function(){hasAppid();
IEVersion();
showCookieTip();
secondMenuScroll();
setHotKeysList();
$("#search_area .hot_word a").each(function(){$(this).on("click",function(){analyticsSubmit("Site Search",$(this).text(),"Autosuggest",EVENT_AUTO_SUGGEST_SEARCH)
})
});
$("#header-v3 .nav-wrap .left-box .nav-list.rmd_pro>a").on("click",function(){navRmdShow($(this).parent())
});
$("#header-v3 .nav-wrap .left-box .nav-list.rmd_pro a.close").on("click",function(){$(this).parents(".nav-list").removeClass("current");
$(this).parents(".products-wrap").slideUp(200);
$(".huawei-v3 #header-v3 .header-wrap .borbot").addClass("bot")
});
$(".app-nav .app-nav-icon").on("click",function(){showAppNav($(this))
});
$(".header-ad .close-ad").on("click",function(){$(".header-ad").stop(true,true).slideUp(500);
if($(window).width()>1023){$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",$("#header-v3").height()-$("#header-v3 .header-ad").height()+"px")
}else{$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",$(".app-nav").height()-$(".app-nav .header-ad").height()+"px");
if($(".app-nav-icon").hasClass("clicked")){var d=$(window).height()-$(".app-nav").height()-$(".huawei-bootom-cookie:visible").outerHeight(),c=$(".second-navigation:visible").height(),b=$(".app-nav").height(),a=$(".app-nav .header-ad").height();
$(".header-wrap").height(d+c+a-$(".header-gblnav-default").height());
$("#header-v3").css({height:d+c+a,top:b-a-c+"px","z-index":151})
}}return false
});
$(".search-wrap>a").on("click",function(){$(".products-wrap").hide().parents(".nav-list").removeClass("current");
if($("#search_area").is(":hidden")){$(".header-wrap").removeAttr("style");
$("#search_area").css("top",$("#header-v3").height()-$(".second-navigation").height()).show();
$("html").addClass("ban_scroll");
setTimeout(function(){$(".input_box input").focus()
},50)
}else{$("#search_area").hide();
$("html").removeClass("ban_scroll")
}});
$("#search_area .icon_close").on("click",function(){$("#search_area .input_box input").val("").siblings(".arrow").children().addClass("icon_disabled");
if($(window).width()>1024){$("html").removeClass("ban_scroll")
}$("#search_area").hide()
});
$("#search_area i.arrow").on("click",function(){var a=$.trim($("#search_area .input_box input").val());
if(a.length>1){analyticsSubmit("Site Search",a,"PureSearch",EVENT_PURE_SEARCH);
if(window.location.href.indexOf("/support")>0){window.location.href=$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(a)+"&tag=support"
}else{window.location.href=$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(a)
}}});
$("#search_area .input_box input").on("keyup",function(b){b=b||window.event;
b.stopPropagation();
if(b.keyCode=="13"){var a=$.trim($(this).val());
if(a.length>1){analyticsSubmit("Site Search",a,"PureSearch",EVENT_PURE_SEARCH);
if(window.location.href.indexOf("/support")>0){window.location.href=$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(a)+"&tag=support"
}else{window.location.href=$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(a)
}}else{$("#search_area .search_toast").fadeIn("slow");
setTimeout(function(){$("#search_area .search_toast").fadeOut("slow")
},3000)
}}else{showAssociatedproducts($(this))
}});
$(".app-search").on("click",function(){var c=0;
var a=$(".app-nav").height();
var b=$(window).height()-a;
if($(".second-navigation").length>0){c=$(".second-navigation").height()
}if($(this).hasClass("app-search-icon")){if(!$(this).hasClass("clicked")){if($.isIos()){$("meta[id='viewport']").attr("content","width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no")
}$(this).addClass("clicked");
$(".app-nav-icon").removeClass("clicked");
_scrollTop=$(document).scrollTop();
$("html,body").css({overflow:"hidden",height:$(window).height()}).scrollTop(0);
$("#header-v3,.header-wrap").removeAttr("style");
$(".search_result .icon_close,.header-gblnav-default").hide();
$("#search_area").css({height:b+c,top:a-c+"px","z-index":151}).scrollTop(0).stop(true,true).slideDown();
return _scrollTop
}else{if($.isIos()){$("meta[id='viewport']").attr("content","width=device-width, initial-scale=1.0, minimum-scale=0.2, maximum-scale=5.0, user-scalable=yes")
}$("#search_area").stop(true,true).slideUp();
$("html,body,#header-v3,.header-wrap").removeAttr("style");
$(this).removeClass("clicked");
$("html,body").scrollTop(_scrollTop)
}}else{$("#search_area").css({height:b+c,top:a-c+"px","z-index":151}).scrollTop(0).show()
}});
$(".app-login-icon").on("click",function(){$(".nav-cnt .nav-list").removeClass("current");
var c=0;
var a=$(".app-nav").height();
var b=$(window).height()-a;
if(!$(this).hasClass("clicked")){if($.isIos()){$("meta[id='viewport']").attr("content","width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no")
}$(this).addClass("clicked");
$(".app-nav-icon").removeClass("clicked");
_scrollTop=$(document).scrollTop();
$("html,body").css({overflow:"hidden",height:$(window).height()}).scrollTop(0);
$("#header-v3,.header-wrap").removeAttr("style");
$(".header-gblnav-default").hide();
$(".app-login-bullet").css({height:b+c,top:a-c+"px","z-index":151}).scrollTop(0).stop(true,true).slideDown();
return _scrollTop
}else{if($.isIos()){$("meta[id='viewport']").attr("content","width=device-width, initial-scale=1.0, minimum-scale=0.2, maximum-scale=5.0, user-scalable=yes")
}$(".app-login-bullet").stop(true,true).slideUp();
$("html,body").removeAttr("style");
$(this).removeClass("clicked");
$("html,body").scrollTop(_scrollTop)
}});
$(".huawei-ie-tips .huawei-ie-close").on("click",function(){$(".huawei-ie-tips").slideUp(500)
});
$(".huawei-v3 .huawei-cookie-cnt .huawei-cookie-close").on("click",function(){cookieTips()
});
$(".header-gblnav-dflink").on("click",function(){hwGroupNav()
});
$(".second-mask-wrap").on("click",function(){$(".second-navigation .second-nav .icon-app").click()
});
if($(window).width()<1024){$(".icon-app,.second-navigation-support .tit").on("click",function(){if($(this).hasClass("active")){$(this).removeClass("active");
$(".second-ul").stop(true,true).slideUp(500).delay(2000);
$(".second-nav-wrap").css("height","44px");
$(".legal-nav-wrap").css("height","35px");
if(!$(".app-nav-icon").hasClass("clicked")&&$(".header-wrap").height()==0){$("html,body").removeAttr("style").scrollTop(_scrollTop)
}$(".second-mask-wrap").hide()
}else{$(this).addClass("active");
$(".second-ul").stop(true,true).slideDown(500).delay(2000);
$(".second-nav-wrap,.legal-nav-wrap").css("height","auto");
var a=$(window).height()-$(".app-nav").height();
$(".second-mask-wrap").height(a+$(".second-navigation").height()).addClass("scrolled").show();
if(!$(this).parents(".second-navigation").hasClass("second-navigation-support")){_scrollTop=$(document).scrollTop();
$("html,body").css({height:$(window).height(),overflow:"hidden"}).scrollTop(_scrollTop);
return _scrollTop
}}});
$(".second-navigation .second-ul li a").click(function(){if($(this).hasClass("current")){$(".second-navigation .second-nav .icon-app").click()
}});
$(".nav-ul a").click(function(){if($(this).hasClass("current")){$(this).removeClass("current")
}else{$(this).addClass("current").parent().siblings().find("a").removeClass("current")
}})
}$("#footer-v3 .list-h3").each(function(a,b){$(this).on("click",function(){var c=$(this).parents(".footer-nav-list");
if(c.hasClass("active")){c.removeClass("active")
}else{c.addClass("active").siblings().removeClass("active")
}})
});
twoHeight();
if($(window).width()<1024){$(window).load(function(){$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",$(".app-nav").height()+"px")
})
}if($("body").find("div#content-v3")&&$('div[role="main"]')&&!$('div[role="main"]').find("div#content-v3")){$('div[role="main"]').appendTo("#content-v3")
}$(".huawei-bootom-cookie .two-choose .accept-cookie").click(function(){cookieTips();
$(".huawei-bootom-cookie").remove()
});
$(".huawei-bootom-cookie .two-choose .reject-cookie").click(function(){$("#footer-v3").css("padding-bottom",0);
$(".huawei-bootom-cookie").remove()
})
});
$(window).on("resize",function(){navMove();
showCookieTip()
});
function navRmdShow(d){$("html").removeClass("ban_scroll");
$("#search_area").hide();
d.find("img.rmd_img").each(function(){$(this).attr("src",$(this).attr("lazy-src")).removeClass("rmd_img").show()
});
var a=d.find(".products-wrap");
var b=$(window).width();
var c=(b<1024)?"mobile":"pc";
if(c=="pc"){if(d.hasClass("current")){a.animate({opacity:0},300,function(){d.removeClass("current");
a.hide();
d.find(".products-left li").css({"margin-top":0,opacity:"0"});
d.find(".products-right").css({"margin-top":0,opacity:"0"})
});
$(".huawei-v3 #header-v3 .header-wrap .borbot").addClass("bot")
}else{$(".header-wrap").removeAttr("style");
d.addClass("current").siblings().removeClass("current");
d.siblings().find(".products-wrap .products-left li").animate({marginTop:0,opacity:0},300);
d.siblings().find(".products-wrap .products-right").animate({marginTop:0,opacity:0},300);
d.find(".products-left li").animate({marginTop:0,opacity:0},100);
d.find(".products-right").animate({marginTop:0,opacity:0},100);
a.fadeIn().animate({opacity:1},100,function(){d.find(".products-left li").each(function(f,g){setTimeout(function(){$(g).fadeIn().animate({marginTop:30,opacity:1},300)
},(f+1)*50)
});
d.find(".products-right").animate({marginTop:30,opacity:1},400);
d.siblings().find(".products-wrap").fadeOut(300+50*(d.find(".products-left li").length+1)).css({opacity:0})
});
$(".huawei-v3 #header-v3 .header-wrap .borbot").removeClass("bot")
}$(window).scroll(300,function(){$("#header-v3 .nav-wrap .left-box .close").trigger("click")
})
}else{if(d.hasClass("current")){d.removeClass("current");
a.removeClass("border-bot").slideUp(200)
}else{d.addClass("current").siblings().removeClass("current").find(".products-wrap").slideUp(200);
a.slideDown(200,function(){$(this).addClass("border-bot")
})
}}}function footerRmdNav(a){$("body").stop().animate({scrollTop:0},300,function(){var b=$(".app-nav .app-nav-icon");
var c=$(".nav-wrap .rmd_pro[wrap='"+a+"']");
if(b.hasClass("clicked")){!c.find(".products-wrap").is(":hidden")?navRmdShow(c):c.click()
}else{$(".app-nav .app-nav-icon").click();
setTimeout(function(){c.click()
},1000)
}})
}function showAppNav(a){$("#search_area").hide();
$(".app-login-bullet").hide();
var j=$(window).width(),c=0,g;
if($(".second-navigation").length>0){g=$(".second-navigation");
c=g.height()
}var d=$(window).height()-$(".app-nav").height()-$(".huawei-bootom-cookie:visible").outerHeight();
if(a.hasClass("clicked")){a.removeClass("clicked");
$(".header-gblnav-default,.header-gblnav").hide();
$(".header-gblnav-dflink").removeClass("header-gblnav-dflink-active");
$(".nav-wrap").slideUp(function(){if(j<1024){var b=$(".app-nav").height();
$("html,body,#header-v3,.header-wrap").removeAttr("style")
}$(".huawei-v3 .app-nav .app-nav-wrap .borbot").addClass("bot");
$("html,body").scrollTop(_scrollTop)
})
}else{_scrollTop=$(document).scrollTop();
a.addClass("clicked");
$(".app-search-icon").removeClass("clicked");
$(".app-login-icon").removeClass("clicked");
if(j<1024){var f=$(".app-nav").height();
$("html,body").css({overflow:"hidden",height:$(window).height()});
if(c!=0){$("#header-v3").css({height:d+c,top:f-c+"px","z-index":151});
if($(".icon-app").hasClass("active")){$(".second-navigation .second-nav .icon-app").click()
}}else{$("#header-v3").css({height:d,top:f+"px","z-index":151})
}$(".header-wrap").height(d+c-$(".header-gblnav-default").height());
$("#header-v3").stop(true,true).slideDown(function(){$(".header-gblnav,.header-gblnav-default").show()
});
$(".nav-cnt li,.nav-wrap").show();
var k=$(".server-center-component").length;
var l=$("#locationSecret").css("display")||"none";
if(k==1){if(l!="none"){var h=$("#locationSecret").height();
$("#header-v3").css("padding-top",h).css("z-index","100");
$(".header-wrap").css("padding-top",h)
}}}$(".huawei-v3 .app-nav .app-nav-wrap .borbot").removeClass("bot");
return _scrollTop
}}var nw=378;
var rightleft=0;
function navMove(){var a=parseInt($(window).width());
if(a>1024&&a<1349){if(getRightHideWidth()>0){$(".next-wrap").show()
}}}function moveNavigation(c){var a=c.hasClass("prev-wrap")?"l":"r";
if(a=="l"){var b=getLeftHideWidth()
}else{var b=0-getRightHideWidth();
rightleft=b
}$(".header-wrap .nav-wrap .left-box .nav-cnt").stop().animate({"margin-left":b},"400",function(){var d=0||parseInt($(".header-wrap .nav-wrap .left-box .nav-cnt").css("margin-left"));
if(d>0){$(".next-wrap").show()
}else{if(d<0){$(".prev-wrap").show()
}else{if(d==0){$(".prev-wrap").hide();
$(".next-wrap").show()
}}}if(b==rightleft){$(".next-wrap").hide()
}})
}function getNavRealWidth(){var d=$(".header-wrap .nav-wrap .left-box .nav-cnt>li");
var b=d.length;
var a=0;
for(var c=0;
c<b;
c++){a+=parseInt(d.eq(c).width())
}a+=(b*36);
return a
}function getRightHideWidth(){var c=0||parseInt($(".header-wrap .nav-wrap .left-box .nav-cnt").css("margin-left"));
c=Math.abs(c);
var a=getNavRealWidth();
var d=a-c-nw;
var b=0;
if(d<=380){b=c+d
}else{b=c+nw
}return b-30
}function getLeftHideWidth(){var b=0||parseInt($(".header-wrap .nav-wrap .left-box .nav-cnt").css("margin-left"));
b=Math.abs(b);
var a=0;
if(b>0){if((b-nw)<=0){a=0
}else{a=b-nw
}}return a
}var site=window.digitalData.page.pageInfo.siteCode2.toUpperCase();
var pre_url=supportv2.supportApiUrl+"/services/service/";
var sgwHost="";
var sgwAppId="DE1FDF33D6278164A62EC486793F7CCF";
function initSgw(){try{var a=window.digitalData.page.pageInfo.siteCode;
if(a==="cn"){if(typeof mktConfig!=="undefined"&&mktConfig.sgwApi!=""&&mktConfig.sgwApi!=null){sgwHost=mktConfig.sgwApi;
return
}sgwHost="https://web.archive.org/web/20210506134650/https://sgw-cn.c.huawei.com/forward"
}}catch(b){}}initSgw();
function getSiteLanguage(){return window.digitalData.page.pageInfo.language?window.digitalData.page.pageInfo.language.replace("_","-"):""
}function setHotKeysList(){var a=$("#search_area .hot_word ul");
a.empty();
var c="";
var b={};
if(typeof sgwHost=="undefined"||sgwHost==null||sgwHost==""){c=pre_url+"vofficial/hot";
b={qAppName:"HuaweiOfficial",site:site,language:getSiteLanguage()}
}else{c=sgwHost+"/cmkt/venus/hot/1";
b={appName:"HuaweiOfficial",language:site}
}if(checkStorageStatus()){if(window.sessionStorage[digitalData.page.pageInfo.siteCode+"_hotkeyList"]){var h=JSON.parse(window.sessionStorage[digitalData.page.pageInfo.siteCode+"_hotkeyList"]);
for(var d=0,g=h;
d<g.length;
d++){if(d==5){break
}if(window.location.href.indexOf("/support")>0){var f=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(g[d].key)+"&tag=support&t=PopupHotSearch'><i class='icon_search'></i><span>"+g[d].key+"</span></a></li>"
}else{var f=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(g[d].key)+"&t=PopupHotSearch'><i class='icon_search'></i><span>"+g[d].key+"</span></a></li>"
}a.append(f)
}return false
}getHotKeysList(c,b,1,a)
}else{getHotKeysList(c,b,0,a)
}}function getHotKeysList(c,b,a,d){if(typeof sgwHost=="undefined"||sgwHost==null||sgwHost==""){$.ajax({url:c,type:"GET",data:b,dataType:"jsonp",jsonp:"jsonp",success:function(h){if(h.length>0&&h!=null){if(a==1){window.sessionStorage[digitalData.page.pageInfo.siteCode+"_hotkeyList"]=JSON.stringify(h)
}for(var f=0;
f<h.length;
f++){if(f==5){break
}if(window.location.href.indexOf("/support")>0){var g=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(h[f].key)+"&tag=support&t=PopupHotSearch'><i class='icon_search'></i><span>"+h[f].key+"</span></a></li>"
}else{var g=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(h[f].key)+"&t=PopupHotSearch'><i class='icon_search'></i><span>"+h[f].key+"</span></a></li>"
}d.append(g)
}}}})
}else{$.ajax({url:c,type:"GET",data:b,dataType:"json",beforeSend:function(f){f.setRequestHeader("SGW-APP-ID",sgwAppId)
},success:function(f){if(f!=null&&f.result!=null&&f.result.length>0){var j=f.result;
if(a==1){window.sessionStorage[digitalData.page.pageInfo.siteCode+"_hotkeyList"]=JSON.stringify(j)
}for(var g=0;
g<j.length;
g++){if(g==5){break
}if(window.location.href.indexOf("/support")>0){var h=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(j[g].key)+"&tag=support&t=PopupHotSearch'><i class='icon_search'></i><span>"+j[g].key+"</span></a></li>"
}else{var h=" <li><a href='"+$("#all_search_url").attr("href")+"?keyword="+encodeURIComponent(j[g].key)+"&t=PopupHotSearch'><i class='icon_search'></i><span>"+j[g].key+"</span></a></li>"
}d.append(h)
}}}})
}}function showAssociatedproducts(f){var b=$.trim(f.val());
if(b.length<2){f.siblings("i.arrow").find(".icon_public").addClass("icon_disabled");
if(b==""){$("#search_area .suggested_result").hide();
$("#search_area .hot_word").show();
return
}}else{f.siblings("i.arrow").find(".icon_public").removeClass("icon_disabled")
}$(".associated_list").scrollTop(0);
var a=$(".associated_list").empty();
var d=window.location.href.split("/"+digitalData.page.pageInfo.siteCode2+"/")[0];
if(d==window.location.href){d=window.location.href.split("/"+digitalData.page.pageInfo.siteCode2+".htm")[0]
}var c=d+"/"+digitalData.page.pageInfo.siteCode2+"/_jcr_content.allProducts.json";
if(checkStorageStatus()){if(!sessionStorage[digitalData.page.pageInfo.siteCode+"_all"]){$.getJSON(c,function(g){sessionStorage[digitalData.page.pageInfo.siteCode+"_all"]=g.allProduct;
setAssociatedProducts(b,g.allProduct.split(","),a)
})
}else{setAssociatedProducts(b,sessionStorage[digitalData.page.pageInfo.siteCode+"_all"].split(","),a)
}}else{$.getJSON(c,function(g){setAssociatedProducts(b,g.allProduct.split(","),a)
})
}}function setAssociatedProducts(d,g,h){var f=$("#all_search_url").attr("href");
$(".suggested_result,.hot_word").hide();
if(d.length>0){var a=parseInt($(".suggested_result").attr("search_num")-1);
var b=0;
for(var c=0;
c<g.length;
c++){rl=HeightKey(g[c],d,"strong");
if(rl!=g[c]){b++;
if(window.location.href.indexOf("/support")>0){h.append("<li class='associated_key'><a href='"+f+"?keyword="+encodeURIComponent(g[c])+"&tag=support&t=PopupSuggestSearch'><i class='icon_search'></i><span>"+rl+"</span></a></li>")
}else{h.append("<li class='associated_key'><a href='"+f+"?keyword="+encodeURIComponent(g[c])+"&t=PopupSuggestSearch'><i class='icon_search'></i><span>"+rl+"</span></a></li>")
}$(".hot_word").hide();
$(".suggested_result").show();
if(b>a){break
}}}h.find("li a").each(function(j){$(this).on("click",function(){analyticsSubmit("Site Search",g[j],"Autosuggest",EVENT_AUTO_SUGGEST_SEARCH)
})
});
$("li.associated_key").eq(0).addClass("default-pro");
$("li.associated_key").length==0?$(".suggested_result").hide():""
}else{$(".suggested_result").hide()
}}function cookieTips(){var a=$(window).width();
$(".huawei-bootom-cookie").hide();
setCookie("agreed-huawei-cookiepolicy","1");
$("#footer-v3").removeAttr("style");
$(".custom-service").removeAttr("style");
$(".manhattan_topBtn").removeAttr("style");
$("#content-v3-compare").css({transform:"none","-webkit-transform":"none"});
$("#up").css("bottom",5+"vh");
$(".post-create").removeAttr("style");
$(".cbg-backtotop").css("bottom",50+"px");
$(".emui9-backtotop").css("bottom",50+"px");
$("body").removeClass("hasCookie");
if(a<1024){$(".custom-service-container,.scroll-top").removeAttr("style");
$("#livechat-compact-container").css("z-index",2147483639);
$(".header-gblnav-default").css("bottom","0px");
$(".huawei-bootom-cookie").hide(function(){if($(".app-nav-icon").hasClass("clicked")){var f=$(window).height()-$(".app-nav").height()-$(".huawei-bootom-cookie:visible").outerHeight(),d=$(".second-navigation:visible").height(),c=$(".app-nav").height();
$(".header-wrap").height(f+d-$(".header-gblnav-default").height());
$("#header-v3").css({height:f+d,top:c-d+"px","z-index":151})
}else{headerHeigh()
}}).css("height","0")
}var b=$(".content-v3-compare");
if(b.is(":visible")){pdpCompareHeight=b.outerHeight();
b.css({top:"100%"})
}}function showCookieTip(d){if($("#cookie-type").val()=="othercookie"){delCookie("agreed-huawei-cookiepolicy");
headerHeigh();
return
}var c=getCookie("agreed-huawei-cookiepolicy");
if(c=="1"){$(".huawei-bootom-cookie").remove();
headerHeigh();
$("body").removeClass("hasCookie")
}else{$(".huawei-bootom-cookie").show();
var a=$(window).width();
var b=$(".huawei-bootom-cookie").outerHeight();
if($(".huawei-bootom-cookie").hasClass("cookie-style-two")){b=$(".huawei-cookie-cnt").outerHeight()
}$("#footer-v3").css("padding-bottom",b+"px");
$(".manhattan_topBtn").css("bottom",b+10+"px");
$(".emui9-backtotop").css("bottom",b+10+"px");
$(".manhattan_topBtn").css("bottom",b+10+"px");
$(".post-create").css({bottom:b+10+"px",top:"auto"});
$(".cbg-backtotop").css("bottom",b+15+"px");
$("body").addClass("hasCookie");
if(a<1024){$(".header-gblnav-default").css("bottom",b+"px");
$(".custom-service-container,.scroll-top").css("z-index",207)
}else{$(".custom-service").css("bottom",b+22+"px")
}headerHeigh()
}}function hwGroupNav(){var b=$(window).width(),a=$(window).height();
if($(".header-gblnav-dflink").hasClass("header-gblnav-dflink-active")){if(b<1024){$(".header-gblnav-dflink").removeClass("header-gblnav-dflink-active");
$(".header-gblnav-container").stop(true,true).slideUp(100,function(){var c=$(".app-nav").height()-$(".second-navigation").height(),d=a-c-$(".header-gblnav-default").height()+1;
$(this).css({top:c-1+"px",height:d})
})
}else{$(".header-gblnav-dflink").removeClass("header-gblnav-dflink-active");
$(".header-gblnav-container").stop(true,true).slideUp(100,function(){headerHeigh()
})
}}else{if(b<1024){$(".header-gblnav-dflink").addClass("header-gblnav-dflink-active");
$(".header-gblnav-container").stop(true,true).slideDown(200,function(){var c=$(".app-nav").height()-$(".second-navigation").height(),d=$("#header-v3").height()-$(".header-gblnav-default").height();
$(this).css({top:c-1+"px",height:d})
})
}else{$(".header-gblnav-dflink").addClass("header-gblnav-dflink-active");
$(".header-gblnav-container").stop(true,true).slideDown(200,function(){headerHeigh()
})
}}}function headerHeigh(){var c=$(window).width();
var d,b=0;
if($(".second-navigation").length>0){d=$(".second-navigation");
b=d.height()
}if(d!=undefined){if(c<1024){d.appendTo(".app-nav").not(".second-navigation-support").show();
var a=$(".app-nav").height();
$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",a-1+"px")
}else{d.appendTo("#header-v3").not(".second-navigation-support").show();
var a=$("#header-v3").height();
$(".content-v3,.conv3_wrap,.product-detail-container ").not("#More_Support").css("margin-top",a-1+"px")
}}else{if(c<1024){var a=$(".app-nav").height();
$(".content-v3,.conv3_wrap,.product-detail-container ").not("#More_Support").css("margin-top",a-1+"px")
}else{var a=$("#header-v3").height();
$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",a-1+"px")
}}if($(".product-detail-container").not("#More_Support").length>0){$("body").addClass("v3-suppro-detail")
}}function secondMenuScroll(){if($(".second-navigation").length>0){$(window).scroll(function(){if($(window).scrollTop()<1){if($(".second-ul").is(":hidden")||_scrollTop==0){$(".app-nav-wrap,.app-nav .ip-jump-wrap").show();
if(window.integrationJsInterface||window.integrationJsInterfaceWebview){$(".app-nav-wrap,.app-nav .ip-jump-wrap").hide()
}}$(".huawei-group,.header-wrap,#header-v3 .ip-jump-wrap").slideDown(100,function(){headerHeigh();
$(".second-navigation-support").hide()
})
}else{if($("#search_area").is(":hidden")){$(".huawei-group,.header-wrap,#header-v3 .ip-jump-wrap").slideUp(100,function(){$(".app-nav-wrap,.app-nav .ip-jump-wrap").hide();
headerHeigh();
$(".second-navigation-support").show()
})
}}if($(window).width()>1024){$(".huawei-group,.header-wrap").css("overflow","inherit")
}})
}}function twoHeight(){var a=$(".second-app-nav .second-title").height();
if(a>18){$(".second-app-nav .second-title").addClass("twoHeight");
if($(".second-app-nav .second-title").hasClass("twoHeight")&&a>24){$(".second-nav").addClass("threeHeight")
}}else{$(".second-app-nav .second-title").removeClass("twoHeight")
}}function setSessionuuid(d,b,a,c){$.ajax({type:"GET",async:false,url:deleteHttp(d),dataType:"jsonp",jsonp:"jsonp",data:{},success:function(f){a.val(f.sessionuuid);
c.attr("src",b+"?tm="+Math.random()+"&sessionuuid="+f.sessionuuid+"&timep="+Date().valueOf())
}})
}$(document).scroll(function(){if($(window).width()>=1024){if($(this).scrollTop()>=($(document).height()-$(window).height()-$("#footer-v3 .footer-bottom").outerHeight())){$(".custom-service").hide()
}else{$(".custom-service").show()
}if($(this).scrollTop()==0){$(".custom-service").show()
}}});
function IEVersion(){var h=navigator.userAgent;
var d=h.indexOf("compatible")>-1&&h.indexOf("MSIE")>-1;
var g=h.indexOf("Edge")>-1&&!d;
var j=h.indexOf("Trident")>-1&&h.indexOf("rv:11.0")>-1;
var c=h.indexOf("HUAWEIALP")>-1||h.indexOf("HUAWEISHT")>-1||h.indexOf("HUAWEICMR")>-1;
var a=0;
if(d){var b=new RegExp("MSIE (\\d+\\.\\d+);");
b.test(h);
var f=parseFloat(RegExp["$1"]);
if(f==7){a=1
}else{if(f==8){a=1
}else{if(f==9){a=1
}else{if(f==10){a=1
}else{a=1
}}}}}else{if(g){a=-1
}else{if(j){a=-1
}else{if(c){a=1
}}}}if(a==1){$(".huawei-ie-tips").slideDown(500)
}else{$(".huawei-ie-tips").remove()
}}function hasAppid(){var a=getUrlParam("appId")||sessionStorage.getItem("appId");
if(window.integrationJsInterface||window.integrationJsInterfaceWebview){$("body").addClass("hasAppid");
sessionStorage.setItem("appId",a)
}}function getUrlParam(f){var a=window.location.search.substring(1);
var c=a.split("&");
for(var b=0;
b<c.length;
b++){var d=c[b].split("=");
if(d[0]==f){return encodeURIComponent(d[1])
}}return(false)
}var EVENT_TYPE_EMAIL_SUBMIT_SUCCESS="emailSubSuccess";
var EVENT_TYPE_EMAIL_SUBMIT_FAIL="emailSubFail";
var EVENT_TYPE_SPAREPART_PRICE="supportSparepartPrice";
var EVENT_TYPE_M2M_DISTRIBUTOR="m2mDistributor";
var EVENT_TYPE_CONTACT_US_FEEDBACK="contactUsFeedback";
var EVENT_TYPE_CONTACT_US_HOTLINE="contactUsHotline";
var EVENT_TYPE_CONTACT_US_TECHNICAL="contactUsTechnical";
var EVENT_TYPE_APPOINTMENT_SERVICE="appointmentServiceSuccess";
var EVENT_TYPE_FIND_A_STORE="findAStore";
var EVENT_TYPE_SUPPORT_SEARCH_AND_RESULT="supportSearchAndResultSuccess";
var EVENT_TYPE_PRODUCT_FILTER="headerProductFilter";
var EVENT_TYPE_PRODUCT_COMPARE_ADD="productCompareAdd";
var EVENT_TYPE_PRODUCT_CANCEL_CLOSE="productCancelClose";
var EVENT_TYPE_PRESS_NEWS_LIST="pressNewsList";
var EVENT_TYPE_PRESS_NEWS_LIST_SEARCH="pressNewsListSearch";
var EVENT_TYPE_PRESS_AWARD_LIST="pressAwardList";
var EVENT_TYPE_PRESS_VIDEO_LIST="pressVideoList";
var EVENT_TYPE_PDP_FAQ_SEARCH="supportPdpFaqSearch";
var EVENT_TYPE_FAQ_PDP_FEEDBACK="faqDetailpageIsthisContentHelpful";
var EVENT_TYPE_POST_REPAIR="submitPostalRepairApointment";
var EVENT_TYPE_FIND_SERVICE_CENTER_COUNTRY_CITY="submitFindServiceByCountryCity";
var EVENT_TYPE_FIND_SERVICE_CENTER_DISTANCE="submitFindServiceByAddressDistance";
var EVENT_TYPE_VIDEO_CLOSED="videoClosed";
var EVENT_TYPE_SEARCH_RECYCLING_POINT="searchRecyclingPoint";
var EVENT_TYPE_SP_LANDING_PAGE_SEARCH="supportLandingPageSearch";
var EVENT_AUTO_SUGGEST_SEARCH="autoSuggestSearch";
var EVENT_PURE_SEARCH="pureSearch";
var EVENT_SEARCH_BY_DROPDOWN_FILTER="searchByDropdownFilter";
var EVENT_COMPARISON_FILTER="comparisonFilter";
var EVENT_CLICK_FIND_SERVICE_CENTER="clickOnSupportServiceCenterResult";
var EVENT_TYPE_SHOW_CONTENT="showContent";
var EVENT_TYPE_HIDE_CONTENT="hideContent";
var EVENT_TYPE_HOTSPOTS_CLICK="hotspotsClicked";
var EVENT_TYPE_PS_PRODUCT_LISTING_SEARCH="supportProductListingSearch";
var EVENT_TYPE_SUPPORT_PDP_DROPDOWN="supportPdpDropdown";
var EVENT_TYPE_HOT_SEARCH="HotSearch";
var EVENT_TYPE_SUPPORT_SEARCH="SupportSearch";
var EVENT_TYPE_OPEN_MENU_FIRST_LEVEL="openMenuFirstLevel";
var EVENT_TYPE_OPEN_MENU_SECOND_LEVEL="openMenuSecondLevel";
var EVENT_TYPE_SUPPORT_SEARCH_AUTO_SUGGEST="supportSearchAutoSuggest";
var EVENT_TYPE_NEWS_LIST_LOAD_MORE="newsListLoadMore";
var EVENT_TYPE_PRODUCT_MENU_MODULE_LOAD_MORE="productMenuModuleLoadMore";
var EVENT_TYPE_SEARCH_RECYCLING_STORE_CLICK="searchRecyclingStoreClick";
var EVENT_TYPE_EXPRESS_REPAIRE_SERVICE_MODIFY="expressRepaireServiceModify";
var EVENT_TYPE_EXPRESS_REPAIRE_SERVICE_SUBMIT="expressRepaireServiceSubmit";
var EVENT_TYPE_REPAIR_STATUS_INQUIRY_SUMBIT="repairStatusInquirySumbit";
var EVENT_TYPE_DOOR_TO_DOOR_SERVICE_SUBMIT="doorToDoorServiceSubmit";
var EVENT_TYPE_APPOINTMENT_SERVICE_MODIFY="appointmentServiceModify";
var EVENT_TYPE_APPOINTMENT_SERVICE_SUBMIT="appointmentServiceSubmit";
var EVENT_TYPE_WARRANTY_QUERY_SUBMIT="warrantyQuerySubmit";
var EVENT_TYPE_TOPIC_PAGE_INTERACTIONS="topicPageInteractions";
var EVENT_TYPE_TOPIC_LIST_SITE_SEARCH="topicListSiteSearch";
var EVENT_TYPE_MAIL_SERVICE_SUBMIT="mailServiceSubmit";
var EVENT_TYPE_HOME_PAGE_SITE_SEARCH="homePageSiteSearch";
var EVENT_TYPE_SPAREPARTS_PRICE_SUBMIT="sparePartsPriceSubmit";
var EVENT_TYPE_USER_CENTER_ADD="userCenterAdd";
var EVENT_TYPE_USER_CENTER_MODIFY="userCenterModify";
var EVENT_TYPE_USER_CENTER_DELETE="userCenterDelete";
function analyticsSubmit(a,b,g,f){if(!a||!b||!g){return
}var h={cat:a,act:b,lab:g,customEventType:f};
for(var d=4;
d<arguments.length;
d++){for(var c in arguments[d]){h[c]=arguments[d][c]
}}DataLayerUtil.addEvent(h);
DataLayerUtil.triggerEvent(f)
}var DataLayerUtil={addEvent:function(a){window.digitalData.event.push({eventInfo:a})
},getEvent:function(a,c){var f=null;
try{if(digitalData&&digitalData.event&&digitalData.event instanceof Array){for(i=digitalData.event.length-1;
i>=0;
i--){if(digitalData.event[i].eventInfo.customEventType==a&&digitalData.event[i].eventInfo[c]){var d=digitalData.event[i].eventInfo[c];
if(d){f=getContent(d.toString()).trim()
}break
}}}}catch(b){}return f
},triggerEvent:function(a){$(document).trigger(a)
}};
var storeFinderInNewPage="_self";
var defaultImgLogo=$(window).width()<1024?"/etc/designs/huawei-cbg-site/clientlib-v3/images/loading-40.png":"/etc/designs/huawei-cbg-site/clientlib-v3/images/loading-80.png";
var showStoreFinder=false;
if(!!$(".hide_showstorefinder").html()){showStoreFinder=JSON.parse($(".hide_showstorefinder").html().trim())
}var winPageType=window.digitalData.page.category.pageType;
var winPageTitle=window.digitalData.page.pageInfo.pageName;
var buyDiscailmerTxt="";
var buyBtnPageType="";
var getBuyBtnPageType=function(){if($(".plphidedata").length>0){buyBtnPageType="plp"
}else{if($(".pdpbuyhidedata").length>0){buyBtnPageType="detail"
}else{if(digitalData.page.category.pageType=="homepage"){buyBtnPageType="home"
}}}return buyBtnPageType
};
var tl_pn=tl_pn,tl_bis=tl_bis,tl_sf=tl_sf,showStoreFinder=showStoreFinder,tl_sc=tl_sc,tl_rb=tl_rb,tl_spc=tl_spc;
var buyBtnPage=function(q,h){var c=getBuyBtnPageType();
var j=h||$(this);
var u=j.attr("data-buybtntype");
var k=j.attr("data-pid");
var n=j.attr("data-pname");
var w=j.attr("data-targettype");
var g=window.digitalData.page.pageInfo.siteCode2;
if(j.hasClass("eCommerce-buy")){var d=j.attr("data-ecbtnlinkinfo");
fun_ecommerce(w,d,g);
return
}var x=pageType=="product-detail"?"product details interaction":"product list interaction";
var a=j.attr("data-ecbtnlinkinfo")||j.attr("data-btnlinkinfo");
dmpaCommon("trackEvent","click",x,getATChapter2(),a);
if(u=="partner"){var t=j.attr("data-pcountrybeal")=="true"?true:false;
var o=j.attr("data-pcountrytitle");
o=!!o?o:tl_spc;
creatBuyAlertModel(null,t,o);
if(!!$(".hide_storefinderinnewpage").html()){storeFinderInNewPage=!!JSON.parse($(".hide_storefinderinnewpage").html().trim())?"_blank":"_self"
}var b="";
if(c=="home"){b=q;
showStoreFinder=""
}else{b=JSON.parse($(".partnerhidedata").html().trim())
}var l="";
switch(c){case"plp":var r=j.siblings(".plp-item-imglink").attr("href")?j.siblings(".plp-item-imglink").attr("href"):j.parent().siblings(".plp-item-imglink").attr("href");
l=r+"/_jcr_content.partners.json";
break;
case"detail":var p=$(".second-title").attr("data-productpath");
if(!p){p=window.location.href.split("?")[0];
if(p.indexOf(".html")!=-1){p=p.split(".html")[0]
}if(p.indexOf("/specs")!=-1){p=p.split("/specs")[0]
}if(p.indexOf("/information")!=-1){p=p.split("/information")[0]
}if(p.indexOf("/support")!=-1){p=p.replace("/support","")
}}l=p+"/_jcr_content.partners.json";
break;
case"home":l=j.attr("data-detailLink")+"/_jcr_content.partners.json";
break
}fun_partner(l,b,n,w,showStoreFinder,t);
if($.isIos()){$("#pdbuypage").trigger("click")
}}else{if(u=="third-party-site"){var d=j.attr("data-btnlinkinfo");
fun_thirdParty(w,d,g)
}else{if(u=="price-spider"){var f=j.attr("ps-sku");
if(!!f){fun_priceSpider(f)
}}else{if(u=="global-buy"){if(!!k){creatBuyAlertModel();
fun_globalBuy(k,n,w,g);
if($.isIos()){$("#pdbuypage").trigger("click")
}}}else{if(u=="channel-advisor"){var v=j.attr("data-btnlinkinfo");
fun_channelAdvisor(v);
if($.isIos()){$("#pdbuypage").trigger("click")
}}}}}}};
var fun_partner=function(b,d,c,f,g,a){$.getJSON(b,function(t){var p="";
var h="";
if(a){h="pdbuypage-pcountry";
if(t[0]&&t[0].countryList){var r=t[0].countryList;
var x="";
for(var k=0;
k<r.length;
k++){x+='<li class="pcountry-list-li" value="'+r[k]+'" title="'+r[k]+'">'+r[k].charAt(0).toUpperCase()+r[k].slice(1)+"</li>"
}$(".pcountry-list").append(x)
}}if(t[0]&&t[0].chooseAPartners){var v=t[0].chooseAPartners;
for(var j=0;
j<v.length;
j++){$.each(d,function(A){var C=d[A];
if(C.path==v[j].partnerLink){var B=!!C.icon?C.icon:"#";
var n=v[j].url?v[j].url:"#";
var D=v[j].partnerCountry?v[j].partnerCountry:"";
if(n.indexOf("http")=="-1"){n="https://"+n
}p+='<li class="pdbuypage-listitem pdbuypage-listitem-partner '+h+'" data-pcountry="'+D+'"><a href="'+n+'" cat="Buy Clicks" act="Filter on '+C.name+'" lab="'+c+'" target="'+f+'" data-parterlink="'+n+'" class="a-common pdbuypage-listitem-link"><img src="'+B+'" onerror="javascript:this.src=\''+defaultImgLogo+'\'" alt="'+C.name+'" class="pdbuypage-listitem-img" /></a></li>'
}})
}$(".pdbuypage-box").addClass("pdbuypage-box-partner");
$(".pdbuypage-title-productname").html("");
$(".pdbuypage-title-productplane").html("");
$(".pdbuypage-title-tipinfo").html(tl_pn);
$(".pdbuypage-listul").html(p);
if(!!g){$(".pdbuypage-footinfo").show();
$(".pdbuypage-footinfo span").html(tl_bis);
$(".pdbuypage-footinfo a").text(tl_sf).attr({href:storeFinderLink,target:storeFinderInNewPage})
}else{$(".pdbuypage-footinfo").hide()
}if(buyBtnPageType=="plp"||buyBtnPageType=="detail"){buyDiscailmerTxt=$(".productBuyDisclaimer").text().trim()
}else{if(buyBtnPageType=="home"){buyDiscailmerTxt=buyDiscailmerTxt
}}if(buyDiscailmerTxt.length>0){$(".pdbuypage-disclaimer").html(buyDiscailmerTxt).show()
}var l=0;
if($(window).width()>=1024){if($(".pdbuypage-listul .pdbuypage-listitem").length>3){$(".pdbuypage-listul .pdbuypage-listitem").css("float","left")
}if($.isIos()){l=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}}else{if($(".pdbuypage-listul .pdbuypage-listitem").length>2){$(".pdbuypage-listul .pdbuypage-listitem").css("float","left")
}l=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}$("html,body.huawei-v3").css("overflow-y","hidden");
$("#pdbuypage").slideDown(300,function(){setTimeout(function(){$("#pdbuypage").trigger("click")
},200)
});
$(".pdbuypage-closebtn").on("click",function(){$("#pdbuypage").slideUp(300,function(){$("html,body.huawei-v3").css("overflow-y","auto");
$("html").removeClass("htmlbody_scroll");
if($(window).width()<1024||$.isIos()){$(window).scrollTop(l)
}$("#pdbuypage").remove()
})
})
}if(a){$(".pcountry-active").on("click",function(){var n=$(this);
if(n.attr("type")=="hide"){n.attr("type","show");
n.find(".pcountry-arrow").addClass("pcountry-arrowup");
n.parent().find(".pcountry-list").slideDown(300);
if($(window).width()<1024){$(".pcountry-bg").show();
$(".pdbuypage-listul").css("overflow-y","hidden")
}}else{n.attr("type","hide");
n.find(".pcountry-arrow").removeClass("pcountry-arrowup");
n.parent().find(".pcountry-list").slideUp(300);
$(".pcountry-bg").hide();
$(".pdbuypage-listul").css("overflow-y","auto")
}});
$(".pcountry-list-li").on("click",function(){$(".pcountry-list-liactive").removeClass("pcountry-list-liactive");
$(".pdbuypage-listitem-partner").hide();
var B=$(this);
B.addClass("pcountry-list-liactive");
var A=B.text();
var n=B.attr("value");
$(".pcountry-active .pcountry-countryname").text(A).attr("title",A);
$(".pcountry-active").attr({value:n,type:"hide"});
$(".pcountry-arrow").removeClass("pcountry-arrowup");
$(".pcountry-list").slideUp(300,function(){$(".pcountry-bg").hide();
$(".pdbuypage-listul").css("overflow-y","auto")
});
$(".pdbuypage-listitem-partner").each(function(E,C){var D=$(C);
if(D.attr("data-pcountry").split("/")[1]==n){D.show().css("float","left")
}else{D.hide()
}})
});
$(".pcountry-bg").on("click",function(){$(".pcountry-list").slideUp(300,function(){$(".pcountry-bg").hide();
$(".pdbuypage-listul").css("overflow-y","auto");
$(".pcountry-active").attr({type:"hide"});
$(".pcountry-arrow").removeClass("pcountry-arrowup")
})
})
}if($(window).width()<1024){$(".pdbuypage-box").height(parseInt($(window).height()*0.92)-20)
}var u=$(".pdbuypage-box").height();
var w=$(".pdbuypage-close").outerHeight();
var o=$(".pdbuypage-title").height();
var z=$(".pcountry-selbox").length>0?$(".pcountry-selbox").height():0;
var q=$(".pdbuypage-footinfo").height();
var y=!$(".pdbuypage-disclaimer").height()?40:$(".pdbuypage-disclaimer").height();
$(".pdbuypage-list").height(u-w-o-z-q-y-50)
})
};
var fun_thirdParty=function(c,d,b){if(d.indexOf("http")=="-1"){var a=window.location.href.split("/"+b+"/")[0];
if(d.indexOf("/")==0){d=a+d
}else{d=a+"/"+d
}}else{d=d
}if(c=="_self"){window.location.href=d
}else{window.open(d)
}};
var fun_priceSpider=function(a){console.log(a)
};
var fun_globalBuy=function(h,c,g,f){var a={};
var b=window.location.href.split("/"+f+"/")[0];
if(b==window.location.href){b=window.location.href.split("/"+f+".htm")[0]
}var d=b+"/en/hidden/product/"+h+"/_jcr_content/content.json";
$.getJSON(d,function(t){a=JSON.parse(t.buyInfo);
var l="";
for(var j in a){var o=a[j];
var q="";
for(var k in o){q+='<a href="'+o[k].buyLink+'" cat="Buy Clicks" act="Click on '+k+'" lab="'+c+" - "+winPageTitle+'" target="'+g+'" data-parterlink="" class="a-common pdbuypage-listitem-link"><span  class="pdbuypage-listitem-name">'+o[k].localSiteName+"</span></a>"
}l+='<li class="pdbuypage-listitem pdbuypage-listitem-global"><p class="pdbuypage-listitem-area">'+j+'</p><div class="pdbuypage-listitem-country">'+q+"</div></li>"
}$(".pdbuypage-box").addClass("pdbuypage-box-global");
$(".pdbuypage-title-productname").html(c);
$(".pdbuypage-title-productplane").html(tl_rb).css({"float":"left","margin-right":"10px"});
$(".pdbuypage-title-tipinfo").html(tl_sc);
$(".pdbuypage-listul").html(l);
$(".pdbuypage-footinfo").hide();
var n=0;
if($(window).width()<1024){$(".pdbuypage-box").height(parseInt($(window).height()*0.92)-20);
n=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}else{if($.isIos()){n=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}}var u=$(".pdbuypage-box").height();
var v=$(".pdbuypage-close").outerHeight();
var p=$(".pdbuypage-title").height();
var r=$(".pdbuypage-footinfo").height();
$(".pdbuypage-list").height(u-v-p-r-40-80);
$("html,body.huawei-v3").css("overflow-y","hidden");
$("#pdbuypage").slideDown(300,function(){setTimeout(function(){$("#pdbuypage").trigger("click")
},200)
});
$(".pdbuypage-closebtn").on("click",function(){$("#pdbuypage").slideUp(300,function(){$("html,body.huawei-v3").css("overflow-y","auto");
$("html").removeClass("htmlbody_scroll");
if($(window).width()<1024||$.isIos()){$(window).scrollTop(n)
}$("#pdbuypage").remove()
})
})
})
};
var fun_channelAdvisor=function(b){var c='<div id="channelAdvisorModal" class="channeladvisormodal"><div class="channeladvisor-content"><span class="channeladvisor-close"><svg  width="32" height="32" xmlns="http://www.w3.org/2000/svg"><g fill="#3C3C3C" fill-rule="evenodd"><path d="M8 7l17 17-1 1L7 8z"></path><path d="M7 24L24 7l1 1L8 25z"></path></g></svg></span><iframe id="channeladvisor_iframe" class="channeladvisor-iframe" style="width:100%;" src=""></iframe></div></div>';
$(".huawei-v3 #channelAdvisorModal").remove();
$(".huawei-v3").append(c);
var d=0;
$("html,body.huawei-v3").css("overflow-y","hidden");
if($(window).width()<1024){d=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}else{if($.isIos()){d=$(window).scrollTop();
$("html").addClass("htmlbody_scroll")
}}$("#channelAdvisorModal #channeladvisor_iframe").attr("src",b);
$("#channelAdvisorModal").show();
var a=document.getElementsByClassName("channeladvisor-close")[0];
$("#channelAdvisorModal .channeladvisor-close").on("click",function(){$("#channelAdvisorModal").hide().remove();
$("html,body.huawei-v3").css("overflow-y","auto");
$("html").removeClass("htmlbody_scroll");
if($(window).width()<1024||$.isIos()){$(window).scrollTop(d)
}});
$("#channelAdvisorModal").on("click",function(){$("#channelAdvisorModal").css("z-index",parseInt($("#channelAdvisorModal").css("z-index"))+1)
});
setTimeout(function(){$("#channelAdvisorModal").trigger("click")
},200)
};
var fun_ecommerce=function(b,c,a){if(c){if(!c.startsWith("http")&&!c.startsWith("https")){if(c.indexOf(".html")==-1){c+=".html"
}if(c.indexOf("/content/huawei-cbg-site")>-1){c=c.split("/content/huawei-cbg-site")[1]
}c=dialogLinkHandler(c)
}if(b=="_self"){window.location.href=c
}else{window.open(c)
}}};
var creatBuyAlertModel=function(c,b,g){var d="";
if(!!b){d='<div class="pcountry-selbox"><div class="pcountry-bg"></div><div class="pcountry-country"><p class="pcountry-active" type="hide"><b class="pcountry-countryname">'+g+'</b><b class="pcountry-arrow"></b></p><ul class="pcountry-list"></ul></div></div>'
}var f='<div id="pdbuypage"><div class="pdbuypage-bg"></div><div class="pdbuypage-box"><p class="pdbuypage-close"><span class="pdbuypage-closebtn"> <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><g fill="#3C3C3C" fill-rule="evenodd"><path d="M8 7l17 17-1 1L7 8z"></path><path d="M7 24L24 7l1 1L8 25z"></path></g></svg></span></p><div class="pdbuypage-title"><p class="pdbuypage-title-product"><span class="pdbuypage-title-productname"></span><span class="pdbuypage-title-productplane"></span></p><p class="pdbuypage-title-tipinfo"></p></div>'+d+'<div class="pdbuypage-list"><ul class="pdbuypage-listul"></ul></div><p class="pdbuypage-footinfo"><span></span><a href="javascript:;" class="pdbuypage-shopSearch"></a></p><p class="pdbuypage-disclaimer"></p>';
"</div></div>";
var a=c||".huawei-v3";
if($(a+" .pdbuypage").length>0){$(a+" .pdbuypage").remove()
}$(a).append(f);
if($(".pdbuypage-box").outerHeight()>$(window).height()){$(".pdbuypage-box").outerHeight($(window).height()).css("margin-top","-"+$(window).height()/2+"px")
}$("#pdbuypage").on("click",function(){$("#pdbuypage").css("z-index",parseInt($("#pdbuypage").css("z-index"))+1)
})
};
var home_buyPageFun=function(){if($(".related_product_true").length>0){var a=$(window.width)<1024?"mobile":"pc";
$(".related_product_true").each(function(h,p){tl_pn=$(p).find(".home_hidedata_i18n .tl_pn").val();
tl_bis=$(p).find(".home_hidedata_i18n .tl_bis").val();
tl_sf=$(p).find(".home_hidedata_i18n .tl_sf").val();
tl_sc=$(p).find(".home_hidedata_i18n .tl_sc").val();
tl_rb=$(p).find(".home_hidedata_i18n .tl_rb").val();
tl_spc=$(p).find(".home_hidedata_i18n .tl_spc").val();
var n="";
var d=JSON.parse($(p).find(".buybtnhidedata").html().trim().replace(/<[^>]+>/g,""));
var q=$(p).find(".plp-item-productbtn").attr("data-buybtntype");
var b=$(p).find(".plp-item-productbtn").attr("data-detailLink");
var c=$(p).find(".plp-item-productbtn");
var j=$(p).parent().parent().find("a.bnt-wrap");
var g="null";
var o=false;
var l="";
switch(q){case"none":break;
case"partner":var k=$(p).parent().parent().parent().find(".home_partnerhidedata .home_partnerhidedata_partItem");
var f="[";
k.each(function(t,r){f+=$(r).html().trim();
if(t<k.length-1){f+=","
}else{f+="]"
}});
g=JSON.parse(f);
if(!!d.partnerCountryFilterEffective&&d.partnerCountryFilterEffective=="true"){o=true;
if(!!d.partnerCountryFilterTitle){l=d.partnerCountryFilterTitle
}else{l=tl_spc
}}break;
case"third-party-site":n=!!d.thirdPartySiteLink?d.thirdPartySiteLink:"";
if(a=="mobile"){n=!!d.mobileThirdPartySiteLink?d.mobileThirdPartySiteLink:n
}break;
case"price-spider":n=!!d.priceSpiderSkuCode?d.priceSpiderSkuCode:"";
break;
case"global-buy":n="";
break;
case"channel-advisor":n=!!d.channeladvisorUrl?d.channeladvisorUrl:"";
break;
case"huawei-eCommerce":n=!!d.ecommerceSiteLink?d.ecommerceSiteLink:"";
break
}c.attr("data-btnlinkinfo",n);
if(q=="partner"){c.attr({"data-pcountrybeal":o,"data-pcountrytitle":l})
}if(!!d&&d.buttonType=="price-spider"&&!!d.priceSpiderSkuCode){c.attr({"class":"plp-item-productbtn a-common ps-widget","ps-button-label":"BUY","ps-sku":d.priceSpiderSkuCode})
}c.on("click",function(r){var t=arguments.callee.caller.arguments[0]||r;
if(window.event){t.cancelBubble=true
}else{if(t&&t.stopPropagation){t.stopPropagation()
}}buyDiscailmerTxt=$(p).find(".productBuyDisclaimer").text().trim();
buyBtnPage(g,c);
return false
});
j.on("click",function(r){var t=arguments.callee.caller.arguments[0]||window.event;
if(window.event){t.cancelBubble=true
}else{if(t&&t.stopPropagation){t.stopPropagation()
}}c.trigger("click");
return false
})
})
}};
$(document).ready(function(){if($(document).find(".support-v3-2-header-pc").length==0){return
}else{$(".support-v3-2-header-pc-products-item li").click(function(){$(this).addClass("active").siblings().removeClass("active");
var a=$(this).index();
$(".support-v3-2-header-pc-new-tab").eq(a).addClass("on").siblings().removeClass("on")
})
}});
setTimeout(function(){$(".app-nav-wrap .login-btn").bind("click",function(a){$(".v3-m-nav-popup-container").hide()
});
$(".app-nav-wrap .search-wrap-linkicon").bind("click",function(a){$(".v3-m-nav-popup-container").hide()
})
},300);
$(document).ready(function(){if($(document).find(".v3-m-nav-popup-container").length==0){return
}else{if(digitalData.page.category.primaryCategory=="support"){var g=$(".header-wrap>.nav-wrap>.left-box>ul>li");
for(var f=0;
f<g.length;
f++){if(g.eq(f).attr("wrap")=="support-v3"){g.eq(f).addClass("curpage");
break
}}}var c=$(window).width();
if(c<1023){var a=$(".v3-nav-hot-word").data("search-url");
var k=$(".v3-nav-suggest").data("search-url");
$(document).on("click",".support-v3 .support-search-box",function(){$(".v3-m-nav-popup-container").show();
$("#v3NavInput_1").val("");
$(".v3-nav-hot-word").show();
$(".v3-nav-suggest").hide();
$(".v3-nav-suggest-list").empty();
$(".v3-nav-suggest-no-result").hide();
var q=$(".v3-nav-hot-word li").length;
if(q==0){p(a)
}$(".v3-nav-search-content input").trigger("focus")
});
$(document).on("click",".support-v3-2-header-mobile .support-v3-2-header-mobile-search",function(){$(".v3-m-nav-popup-container").show();
$("#v3NavInput_1").val("");
$(".v3-nav-hot-word").show();
$(".v3-nav-suggest").hide();
$(".v3-nav-suggest-list").empty();
$(".v3-nav-suggest-no-result").hide();
var q=$(".v3-nav-hot-word li").length;
if(q==0){p(a)
}$(".v3-nav-search-content input").trigger("focus")
});
$(".v3-nav-popup-close").on("click",function(){$(".v3-m-nav-popup-container").hide()
});
$(document).on("click",".app-nav-icon",function(){$(".v3-nav-popup-close").trigger("click")
});
$("#v3NavInput_1").on("keyup",function(u){var w=$(this);
var t=u.keyCode;
var r=$(".v3-nav-hot-word");
var v=$(".v3-nav-suggest");
var q=w.val().trim();
if(q){if(t==13){window.location.href=k+"?keyword="+encodeURIComponent(q)+"&t=PureSearch"
}$(".v3-nav-suggest-no-result").hide();
r.hide();
v.show();
d(q,function(x){if(x.responseCode=="200"&&x.responseData.length>0){var y=x.responseData;
$(".v3-nav-suggest-no-result").hide();
o($(".v3-nav-suggest-list"),y,q,k)
}else{$(".v3-nav-suggest-list").empty();
$(".v3-nav-suggest-no-result").show()
}})
}else{r.show();
v.hide()
}});
function o(v,u,r,t){v.empty();
var q="";
u.forEach(function(w){q+='\n                        <li>\n                            <a href="'.concat(t,"/?keyword=").concat(r,'&t=PopupSuggestSearch"><span>').concat(w.key,"</span></a>\n                        </li>\n                    ")
});
v.append(q)
}function p(q){j(function(r){if(r.responseCode=="200"&&r.responseData.length>0){var v=r.responseData;
$(".v3-nav-hot-word-list").empty();
var t="";
for(var u=0;
u<5;
u++){t+='\n                                <li>\n                                    <a href="'.concat(q,"/?keyword=").concat(v[u].key,'&t=PopupHotSearch"><span>').concat(v[u].key,"</span></a>\n                                </li>\n                            ")
}$(".v3-nav-hot-word-list").append(t)
}})
}var b={complete:function(q,r){apiBase.request("/vsearch/complete/1000",q,r)
},hotWord:function(q,r){apiBase.request("/vsearch/hotWord/1000",q,r)
}};
function j(r){var q={qAppName:"ServiceOfficial",site:window.digitalData.page.pageInfo.siteCode2.toUpperCase(),language:getSiteLanguage()};
b.hotWord(q,function(t){r&&r(t)
})
}function d(t,r){var q={language:getSiteLanguage(),site:window.digitalData.page.pageInfo.siteCode2.toUpperCase(),q:t,qAppName:"ServiceOfficial"};
b.complete(q,function(u){r&&r(u)
})
}}function h(t){var r;
if(t.constructor==Object){r=new t.constructor()
}else{r=new t.constructor(t.valueOf())
}for(var q in t){if(r[q]!=t[q]){if(typeof(t[q])=="object"){r[q]=h(t[q])
}else{r[q]=t[q]
}}}r.toString=t.toString;
r.valueOf=t.valueOf;
return r
}function n(q,t){var v=h(q);
if(!v.channelCode){v.channelCode=requestConfig.channelCode
}if(!v.countryCode){v.countryCode=requestConfig.countryCode
}if(!v.country){v.country=requestConfig.country
}v.langCode=getSiteLanguage();
v.language=getSiteLanguage();
if(!v.siteCode){v.siteCode=requestConfig.siteCode
}if(sysConfig.countryCode=="Global"){v.countryCode="0";
v.country="0"
}else{if(digitalData.page.pageInfo.siteCode=="latin"){v.countryCode="CO";
v.country="CO"
}else{if(digitalData.page.pageInfo.siteCode=="latinen"){v.countryCode="US";
v.country="US"
}else{if(digitalData.page.pageInfo.siteCode=="levantar"){v.countryCode="EG";
v.country="EG";
v.langCode="ar-eg";
v.language="ar-eg"
}else{if(digitalData.page.pageInfo.siteCode=="levant"){v.countryCode="US";
v.country="US";
v.langCode="en-us";
v.language="en-us"
}}}}if((t=="findProblem"||t=="findProblemSecondary")&&v.offeringCode){v.countryCode+=",0"
}}var u={};
for(var r in v){if(r!="toString"&&r!="valueOf"){u[r]=v[r]
}}return u
}function l(q,r){apiBase.request("/tkb/findProblem/1000",n(q,"findProblem"),r)
}if($(document).find(".v3-support-header-faq-list.interface").length>0){l({curPage:"1",pageSize:"4",serviceFlag:"1",channelCode:"10004",brands:"CMCG10000001",Days:"1"},function(t){if(t.responseCode=="200"){var r=t.responseData.rList;
var q=$(".v3-support-header-faq-list.interface").attr("knowledge-url");
for(var v=0;
v<r.length;
v++){var w=r[v];
var u=handleKnowledgeDetailEntranceForSEO(q)+"/"+w.knowledgeId+"/";
$(".v3-support-header-faq-list.interface").append('<li><a class="a-support-common dmpa-click-dispach" title="'+w.knowledgeTitle+'" href="'+u+'" target="_blank"cat="FAQ" act="Click" lab="FAQ+'+w.knowledgeTitle+'">'+w.knowledgeTitle+"</a></li>")
}}})
}}});
function handleKnowledgeDetailEntranceForSEO(a){var b=a.charAt(a.length-1);
if(b==="/"){a=a.substring(0,a.length-1)
}return a
}function navRmdShow(d){$("html").removeClass("ban_scroll");
$("#search_area").hide();
d.find("img.rmd_img").each(function(){$(this).attr("src",$(this).attr("lazy-src")).removeClass("rmd_img").show()
});
var a=d.find(".products-wrap");
var b=$(window).width();
var c=(b<1024)?"mobile":"pc";
if(c=="pc"){if(d.hasClass("current")){a.animate({opacity:0},300,function(){d.removeClass("current");
a.hide();
d.find(".products-left li").css({"margin-top":0,opacity:"0"});
d.find(".products-right").css({"margin-top":0,opacity:"0"});
d.find(".v3-support-nav-animate").css({"margin-top":0,opacity:"0"})
});
$(".huawei-v3 #header-v3 .header-wrap .borbot").addClass("bot")
}else{$(".header-wrap").removeAttr("style");
d.addClass("current").siblings().removeClass("current");
d.siblings().find(".products-wrap .products-left li").animate({marginTop:0,opacity:0},300);
d.siblings().find(".products-wrap .products-right").animate({marginTop:0,opacity:0},300);
d.siblings().find(".v3-support-nav-animate").animate({marginTop:0,opacity:0},300);
d.find(".products-left li").animate({marginTop:0,opacity:0},100);
d.find(".products-right").animate({marginTop:0,opacity:0},100);
d.find(".v3-support-nav-animate").css({"margin-top":0,opacity:"0"});
a.fadeIn().animate({opacity:1},100,function(){if(d.attr("wrap")=="support-v3"||d.attr("wrap")=="support-v3-2"){d.find(".v3-support-nav-animate").each(function(f,g){setTimeout(function(){$(g).fadeIn().animate({marginTop:30,opacity:1},300)
},(f+1)*50)
})
}else{d.find(".products-left li").each(function(f,g){setTimeout(function(){$(g).fadeIn().animate({marginTop:30,opacity:1},300)
},(f+1)*50)
})
}d.find(".products-right").animate({marginTop:30,opacity:1},400);
d.siblings().find(".products-wrap").fadeOut(300+50*(d.find(".products-left li").length+1)).css({opacity:0})
});
$(".huawei-v3 #header-v3 .header-wrap .borbot").removeClass("bot")
}$(window).scroll(300,function(){$("#header-v3 .nav-wrap .left-box .close").trigger("click")
})
}else{if(d.hasClass("current")){d.removeClass("current");
a.removeClass("border-bot").slideUp(200)
}else{d.addClass("current").siblings().removeClass("current").find(".products-wrap").slideUp(200);
a.slideDown(200,function(){$(this).addClass("border-bot")
})
}}}var REGION_CODE_EN="EN";
var REGION_CODE_LEVANT="LEVANT";
var REGION_CODE_LATIN="LATIN";
var CBG_SITE_ROOT="/content/huawei-cbg-site/";
var CBG_SITE_EDITOR_ROOT="/editor.html/content/huawei-cbg-site/";
var API_HOST=(location.href.indexOf(".test.huawei.com")==-1&&location.href.indexOf("localhost")==-1)?"https://web.archive.org/web/20210506134650/https://consumer.huawei.com/cmkt":supportv2.cmktApiUrl;
var REGION_LOCATION_SERVICE_URL=API_HOST+"/services/service/webapi/location";
$(document).ready(function(){if($(".ip-jump-wrap").length==0){return
}if($.cookie("checkRegion")){return
}if(location.href.indexOf("/en/worldwide")!=-1){return
}$.ajax({type:"POST",url:REGION_LOCATION_SERVICE_URL,dataType:"json",contentType:"application/json",data:{},success:function(a){if(a.returnCode==0&&a.country&&window.digitalData.page.pageInfo.countryCode!=a.country){if(isWeuSite(a.country)){buildPromptRegion(a.country)
}}}})
});
var checkRegionArr=[{code:"UK",path:"uk",siteName:"United Kingdom",message:"You are visiting a website that is different from your current country or region, would you like to switch to your local site?",buttonText:"Continue",selectText:"Other country or region"},{code:"GB",path:"uk",siteName:"United Kingdom",message:"You are visiting a website that is different from your current country or region, would you like to switch to your local site?",buttonText:"Continue",selectText:"Other country or region"},{code:"IE",path:"ie",siteName:"Ireland",message:"You are visiting a website that is different from your current country or region, would you like to switch to your local site?",buttonText:"Continue",selectText:"Other country or region"},{code:"IT",path:"it",siteName:"Italia",message:"La pagina che stai per visitare è diversa dal tuo Paese o Regione attuale. Vuoi passare al tuo sito locale?",buttonText:"Continua",selectText:"Seleziona altro Paese o Regione"},{code:"ES",path:"es",siteName:"España",message:"Estas visitando un sitio web diferente de su país o región actual, ¿te gustaría cambiar a la web local?",buttonText:"Continuar",selectText:"Seleccionar otro país o región"},{code:"FR",path:"fr",siteName:"France",message:"Vous visitez un site Web différent de votre pays ou région actuelle, souhaitez-vous passer à votre site local?",buttonText:"Continuer",selectText:"Autre pays/région"},{code:"DE",path:"de",siteName:"Deutschland",message:"Du besuchst eine Website, die sich von deinem derzeitigen Land oder deiner Region unterscheidet, möchtest du zu der passenden lokalen Website wechseln?",buttonText:"Fortfahren",selectText:"Anderes Land oder andere Region"},{code:"NL",path:"nl",siteName:"Nederland",message:"U bezoekt een website die niet overeenkomt met uw huidige land of regio, wilt u veranderen naar uw lokale site?",buttonText:"Ga verder",selectText:"Ander land of andere regio"},{code:"BE",path:"be",siteName:"België(Dutch)",message:"U bezoekt een website die niet overeenkomt met uw huidige land of regio, wilt u veranderen naar uw lokale site?",buttonText:"Ga verder",selectText:" Ander land of andere regio"},{code:"BE",path:"be-fr",siteName:"Belgique(French)",message:"Vous êtes sur un site qui ne correspond pas à votre propre pays ou région. Voulez-vous accéder à votre site local?",buttonText:" Continuer",selectText:"Autre pays ou région"},{code:"CH",path:"ch",siteName:"Schweiz(Deutsch)",message:"Du besuchst eine Website, die sich von deinem derzeitigen Land oder deiner Region unterscheidet, möchtest du zu der passenden lokalen Website wechseln?",buttonText:"Fortfahren",selectText:"Anderes Land oder andere Region"},{code:"CH",path:"ch-fr",siteName:"Suisse(Français)",message:"Vous visitez un site Web différent de votre pays ou région actuelle, souhaitez-vous passer à votre site local?",buttonText:"Continuer",selectText:"Autre pays/région"},{code:"PT",path:"pt",siteName:"Portugal",message:"Está num site diferente do seu país ou região atual, gostaria de mudar para o seu site local?",buttonText:"Continuar",selectText:"Outro país ou região"},{code:"AU",path:"au",siteName:"Australia",message:"You are visiting a website that is different from your current country or region, would you like to switch to your local site?",buttonText:"Continue",selectText:"Other country or region"}];
function buildPromptRegion(b){var f=[];
for(var d=0;
d<checkRegionArr.length;
d++){if(checkRegionArr[d].code==b){f.push(checkRegionArr[d])
}}var a=getAreaSite(b);
var c=window.digitalData.page.pageInfo.countryCode;
if(f.length==0){if(a==c){return
}if(c!=REGION_CODE_EN){f.push({code:"EN",path:"en",siteName:"Worldwide",message:"You are visiting a store that is different to your current location,would you like to switch to your local store?",buttonText:"continue",selectText:"choose other region"})
}else{return
}}var h="";
h+='<div class="ip-jump-content">';
h+='<span class="ipJump-close"></span>';
h+='<div class="ipJump-cnt">';
h+='<div class="ipJump-copywriting">';
h+=f[0].message;
h+="</div>";
h+='<div class="ipJump-bnt clearfix">';
h+='<div class="ipJump-select">';
h+='<span class="ipJump-select-title">';
h+=f[0].siteName;
h+="</span>";
h+='<ul class="clearfix">';
for(var d=0;
d<f.length;
d++){h+='<li path="'+f[d].path+'" siteName="'+f[d].siteName+'">';
h+=f[d].siteName;
h+="</li>"
}h+='<li class="other-region" path="en" siteName="'+f[0].selectText+'">';
h+=f[0].selectText;
h+="</li>";
h+="</ul>";
h+="</div>";
h+='<a class="ip-jump-go" href="javascript:;" message="'+f[0].message+'" buttonText="';
h+=f[0].buttonText+'"  path="'+f[0].path+'" title="'+f[0].buttonText+'" >'+f[0].buttonText+"</a>";
h+="</div>";
h+="</div>";
h+="</div>";
$(".ip-jump-wrap").html("");
$(".ip-jump-wrap").html(h);
if(window.innerWidth>1023){$("#header-v3 .ip-jump-wrap").show();
$(".app-nav .ip-jump-wrap").hide()
}else{$("#header-v3 .ip-jump-wrap").hide();
$(".app-nav .ip-jump-wrap").show()
}$(".ipJump-select").off("click");
$(".ipJump-select").on("click",function(){if($(".ipJump-select ul").is(":visible")){$(this).removeClass("active")
}else{$(this).addClass("active")
}});
$(".ip-jump-wrap ul li").off("click");
$(".ip-jump-wrap ul li").on("click",function(){var j=$(this);
$(".ip-jump-wrap .ipJump-select-title").text(j.attr("siteName"));
$(".ip-jump-wrap .ip-jump-go").attr("path",j.attr("path"))
});
$(".ip-jump-wrap .ip-jump-go").off("click");
$(".ip-jump-wrap .ip-jump-go").on("click",function(){if($(this).attr("path")=="en"){if(location.href.indexOf("/content/huawei-cbg-site/")!=-1){location.href=location.origin+"/content/huawei-cbg-site/en/worldwide.html"
}else{location.href=location.origin+"/en/worldwide/"
}}else{redirectToRegionHref($(this).attr("path"))
}});
if(window.innerWidth>1023){var g=$("#header-v3").height();
$(".content-v3").css("margin-top",g);
$(".weu-wrap").css("padding-top",g)
}else{var g=$(".app-nav").height();
$(".content-v3").css("margin-top",g);
$(".weu-wrap").css("padding-top",g)
}$(".ip-jump-wrap .ipJump-close").click(function(){$(".ip-jump-wrap").hide().addClass("active");
setPromoteRegionCheck();
if($(window).width()>1023){var n=$("#header-v3").height();
$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",n);
$("#search_area").css("top",n);
$(".weu-wrap").css("padding-top",n)
}else{var j=$(".app-nav").height();
$(".weu-wrap").css("padding-top",j);
$(".content-v3,.conv3_wrap,.product-detail-container").not("#More_Support").css("margin-top",j);
var k=$(window).height()-$(".app-nav").height()-$(".huawei-bootom-cookie:visible").outerHeight(),l=$(".second-navigation:visible").height();
if($(".app-nav-icon").hasClass("clicked")){$(".header-wrap").height(k+l-$(".header-gblnav-default").height());
$("#header-v3").css({height:k+l,top:j-l+"px","z-index":151})
}if($(".app-login-icon").hasClass("clicked")){$(".app-login-bullet").css({height:k+l,top:j-l+"px","z-index":151})
}if($("#search_area").is(":visible")){$("#search_area").css({height:k+l,top:j-l+"px","z-index":151})
}}})
}function redirectToRegionHref(b){var d=location.origin+"/"+b.toLowerCase()+"/";
var a=digitalData.page.pageInfo.siteCode2||"";
var c=location.pathname;
var f="";
if(c.indexOf(CBG_SITE_EDITOR_ROOT)==0){c=c.replace(CBG_SITE_EDITOR_ROOT,"")
}else{if(c.indexOf(CBG_SITE_ROOT)==0){c=c.replace(CBG_SITE_ROOT,"");
if(c.indexOf("/")>-1){f=location.origin+location.pathname.replace("/"+a+"/","/"+b.toLowerCase()+"/")
}else{f=location.origin+location.pathname.replace("/"+a+".html","/"+b.toLowerCase()+".html")
}}else{f=location.origin+location.pathname.replace("/"+a+"/","/"+b.toLowerCase()+"/")
}}$.ajax({type:"get",cache:false,url:f+location.search,dataType:"html",complete:function(g){if(g.status==404){location.href=d
}else{location.href=f+location.search
}}})
}function getAreaSite(a){switch(a){case"LB":a="LEVANT";
break;
case"JO":a="LEVANT";
break;
case"IQ":a="LEVANT";
break;
case"GT":a="LATIN";
break;
case"DO":a="LATIN";
break;
case"UY":a="LATIN";
break;
case"EC":a="LATIN";
break;
case"BO":a="LATIN";
break;
case"HN":a="LATIN";
break;
case"PY":a="LATIN";
break;
case"VE":a="LATIN";
break;
case"CR":a="LATIN";
break;
case"SV":a="LATIN";
break;
case"NI":a="LATIN";
break;
case"jM":a="LATIN";
break
}return a
}function setPromoteRegionCheck(a){$.cookie("checkRegion","true",{path:"/",expires:7})
}function isWeuSite(a){var b=["UK","GB","IT","ES","FR","DE","NL","BE","CH","IE","PT","AU"];
return b.indexOf(a)>-1
};
}

/*
     FILE ARCHIVED ON 13:46:50 May 06, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:25 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.841
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.013
  esindex: 0.016
  cdx.remote: 34.5
  LoadShardBlock: 78.936 (3)
  PetaboxLoader3.datanode: 102.667 (5)
  load_resource: 808.648 (2)
  PetaboxLoader3.resolve: 747.069 (2)
*/