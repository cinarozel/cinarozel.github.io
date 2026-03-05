var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var imageHost="";
var productId="";
var productName="";
var gtm_mainVariant="";
var productInfoData="";
var selectedOpitonObj={};
var productOptionMaps=[];
var skuInfoMaps=[];
var loginstatus=1;
var logincallback="";
var defaultSkuCode="";
var defaultSkuObj="";
var ec_siteCode=window.digitalData?window.digitalData.page.pageInfo.siteCode2:"";
var sub_localhref=location.href.split("/"+ec_siteCode+"/");
var dialogModle_pop=false;
var display_type="floatLayer";
var adminColor_data="";
var adminInfo_data="";
if($(".hide_popadmindata").text().trim().length>0){var aemAdminData=JSON.parse($(".hide_popadmindata").text().trim())||false
}var init_floatLayer_pop=function(d){$(".container-optionchoose,.container-gift,.container-packinglist").hide();
if(!d){return
}else{adminColor_data=colorsItemList[d];
var b="";
if(aemAdminData&&aemAdminData.length>0){$.each(aemAdminData,function(g,f){if(f.productId==d){adminInfo_data=f
}})
}b=floatlayer_promotionInfo(adminInfo_data);
if(dialogModle_pop){skuInfoMaps=[];
productOptionMaps=[];
productInfoData="";
$("#"+dialogModle_pop).remove()
}dialogModle_pop=hwPop.dialog({width:720,title:"",con:creatHtml_section(b)});
var c=$("#"+dialogModle_pop);
c.addClass("floatlayer-modal");
if(device=="mobile"){if($.isIos()){c.find(".modal-content").css({padding:"30px 0 20px 15px"});
c.find(".modal-header").css({position:"absolute",top:0});
c.find(".modal-header .close.hsvg-close").css({top:"15px"}).show()
}else{c.find(".modal-header .close.hsvg-close").addClass("hsvg-close-w").fadeIn(300)
}c.next(".modal-backdrop").show()
}else{var a=$(window).height();
var e=parseInt(c.find(".modal-dialog").css("margin-top"));
c.find(".modal-dialog").css({"margin-top":"65px"});
c.find(".modal-content").css({padding:"40px 8px 40px 25px","min-height":(((a-e-55)>300?(a-e-55):300)+"px"),height:(((a-e-55)>300?(a-e-55):300)+"px"),"box-sizing":"border-box"});
c.find(".modal-header").css("padding",0);
c.find(".modal-body").css({height:(((a-e-55)>300?(a-e-55):300)+"px"),width:"100%"})
}checkPromotion();
queryPrdDisplayDetailInfoAjax(d)
}};
var creatHtml_section=function(a){var b='<div id="floatlayer-pop" class="ec-content prdoption-content-floatlayer floatlayer-pop"><div id="ec_page_loading" class="ec_page_loading"><i class="hsvg60 hsvg-load-ani"></i></div><div id="prdoption-main" class="prdoption-main mx-0"><div id="prdoption-main-components" class="row mx-0">'+creatHtml_popMain(a)+creatHtml_templateScript()+"</div></div></div>";
return b
};
var creatHtml_popMain=function(c){var d='<div class="container container-optionchoose row mx-0"><!-- 颜色选中图片区域 --><div id="optcolor-selected" class="optcolor-selected optcolor-selected-color px-0"><div class="optcolor-selectedimg"><img class="optcolor-selcolorimg" src=""></div></div><!-- 产品选配区域 --><div id="optionchoose" class="optionchoose px-0"><!-- promotion Info-->'+c+'<!--1.4 option:gift&bundle --用bundle代替gift:gift --><div class="card optionchoose-giftbundle optionchoosedisabled" optmodel="gift" data-mainskucode="" data-hasbundle=0 data-selbundlesku=""><div class="card-header gray-font" data-oldtitle="'+ecCom.I18n.get("ec_choose_bundle")+'"><h5 class="optionchoose-txt fl text-overflow">'+ecCom.I18n.get("ec_please_set_gift")+'</h5></div><div id="collapsebundle" class="collapsebundle" data-parent="#optionchoose"><div class="card-body optiongiftbundle-grouplist"></div></div></div><!-- end bundle --><!--1.5 option:services--><div class="card optionchoose-services col-12" optmodel="service" data-mainskucode=""><div class="card-header gray-font"><h5 class="optionchoose-txt fl text-overflow">'+(device=="mobile"?ecCom.I18n.get("ec_service"):ecCom.I18n.get("ec_your_services"))+'</h5><button class="card-link btn-link fr optservice-change border-0" data-toggle="collapseservices"></button></div><div id="collapseservices" class="collapseservices" data-parent="#optionchoose"><div class="card-body"><div class="optservice-sel"><div class="optservice-default"><span class="optservice-default-icon hsvg48 hsvg-service"></span><h5 class="optservice-default-tip">'+ecCom.I18n.get("ec_extension_service")+'</h5></div></div><div class="optservice-selected"><ul class="optserice-sellist m-0"></ul></div></div></div></div></div></div>';
var g='<div id="prd_noresult" style="display:none"></div>';
var a='<div class="container container-btnsubmit pt-5"><div id="option-btnbox" class="optionbtnbox p-0 mx-0" data-btnabled="disabled"><div class="row justify-content-end mx-0"><div class="option-totalprice row justify-content-end px-0 mx-0"><span class="optprice-from">'+ecCom.I18n.get("ec_from")+'</span><span class="optprice-price-ori del-line"></span><span class="optprice-price-sale"></span></div><div class="option-totalbtn row justify-content-end  px-0 mx-0"><button act="cart_now" cat="product_purchase" lab="" disabled=true data-href="buy/added.html" id="optpage_addcart" data-btntype="addcart" class="a-common disabled option-totalbtn-item option-totalbtn-addcart btn btn-outline-secondary btn-lg">'+ecCom.I18n.get("ec_add_to_cart")+'</button><button act="order_now" cat="product_purchase" lab="" disabled=true data-href="buy/order-checkout-page.html" id="optpage_buynow" data-btntype="buynow" class="a-common disabled option-totalbtn-item option-totalbtn-buynow btn btn-primary bg-primary btn-lg">'+ecCom.I18n.get("ec_buy_now")+'</button></div><div class="hidedata-selectedskulist" style="display:none;"><p class="hidedataskulist hidedataskulist-option" itemtype="S0" data-oriprice=0  data-price=0 data-name="" data-img="" ></p><p class="hidedataskulist hidedataskulist-bundle" itemtype="DP" data-oriprice=0  data-price=0 data-name="" data-img="" ></p><p class="hidedataskulist hidedataskulist-service" data-oriprice=0  data-price=0 data-selskulist="" ></p><p class="hidedataskulist hidedataskulist-gift" itemtype="G" data-oriprice=0  data-price=0 data-selskulist=""></p><p class="hidedataskulist hidedataskulist-giftbundle" itemtype="DP" data-oriprice=0  data-price=0 data-selgrouplist=""></p></div></div></div></div>';
var f='<div class="container container-gift"><div class="card optionchoose-gift" optmodel="gift" data-mainskucode=""><div class="card-header"><h3 class="text-overflow giftlist-title">'+ecCom.I18n.get("ec_free_gift")+'</h3></div><div id="collapsegift" class="card-body collapsegift" data-parent="#optionchoose"><div class="collapsegiftlist card-body swiper-container"><ul class="optgift-ul optionchoose-ul swiper-wrapper"></ul><div class="swiper-pagination"></div><a class="swiper-button-prev" style="display:none" href="javascript:;" role="button"></a><a class="swiper-button-next" style="display:none" href="javascript:;" role="button"></a></div></div></div></div>';
var e='<div class="container container-packinglist"><div class="packinglist-product card"><h3 class="text-overflow packinglist-title"></h3></div></div>';
var b=g+d+a;
return b
};
var creatHtml_templateScript=function(){var e='<script id="optionchoosecolorlist-temp" type="text/html">{{each productOptionMaps_color as colorObj i}}<div class="card optionchoose-color col-12" optmodel="{{colorObj.attrClass}}" data-attr={{colorObj.attrCode}}-{{colorObj.attrName}} data-selskuList="" itemcount-show="" itemcount="{{colorObj.attrData.length}}"><div class="card-header" data-oldtitle="{{ colorObj.attrName}}" ><h5 class="optionchoose-txt fl text-overflow">{{colorObj.attrName}}</h5><button href="javascript:;" class="card-link btn-link fr border-0" data-toggle="collapsecolor"></button></div><div id="collapsecolor" class="collapsecolor" data-parent="#optionchoose"><div class="optcolor-selectlist"><div class="card-body card-body-colorval"><ul class="optcolor-ul optionchoose-ul optcolor-ul-colorval row" data-optionVal="color">{{each colorObj.attrData as item n}}<li class="optcolor-li" itemType="S0" data-skucodelist={{item.skuCode}} data-subskuprice={{item.subSkuPrice}} data-attrname={{item.attrValue}} data-attrnamecode={{item.attrValueCode}} data-imgpath={{item.skuMainPhoto}}><div class="optcolor-image"><div class="optcolor-image-color"><p class="optcolor-image-colorval" style="background-color:{{item.attrValue_color}}"></p></div></div><p class="optconfig-capac h3" style="display:none" >{{item.attrValue}}</p></li>{{/each}}</ul></div></div></div></div>{{/each}}<\/script>';
var b='<script id="optionchooseconfiglist-temp" type="text/html">{{each productOptionMaps_config as configObj i}}<div class="card col-12 optionchoosedisabled optionchoose-config optionconfig-{{configObj.attrClass}}" optmodel="{{configObj.attrClass}}" data-attr={{configObj.attrCode}}-{{configObj.attrName}} data-selskuList="" itemcount-show="" itemcount="{{configObj.attrData.length}}"><div class="card-header gray-font" data-oldtitle="{{ configObj.attrName}}" ><h5 class="optionchoose-txt fl text-overflow" >{{ configObj.attrName}}</h5><button class="card-link btn-link fr border-0" data-toggle=""></button></div><div id="" class="collapseconfig" data-parent="#optionchoose"><div class="card-body"><ul class="optconfig-ul optionchoose-ul row" data-optionVal="config">{{each configObj.attrData as item n}}<li class="optconfig-li col-6 col-sm-12 col-md-6 skushow" itemType="S0" data-skucodelist={{item.skuCode}} data-subskuprice={{item.subSkuPrice}} data-attrname={{item.attrValue}} data-attrnamecode={{item.attrValueCode}} data-lowestprice={{item.skuPrice_min}}><div class="optconfig-item borderline"><p class="optconfig-capac h3" >{{item.attrValue}}</p></div></li>{{/each}}</ul></div></div></div>{{/each}}<\/script>';
var d='<script id="optionbundlelist-temp" type="text/html">{{each bundleList as bundleObj i}}<li class="a-common optbundle-li borderline" itemType="DP" data-giftbundlesku={{bundleObj.sbomCode}} data-giftbundleprdid={{bundleObj.disPrdId}} data-attrname="{{bundleObj.sbomAbbr}}" data-giftbundleprice="{{bundleObj.packagePrice}}" data-oriPrice="{{bundleObj.originalPrice}}" data-packagecode="{{bundleObj.packageCode}}" data-groupId="{{bundleObj.groupId}}"  data-mainSkuPackagePrice="{{bundleObj.mainSkuPackagePrice}}" cat="product_purchase" act="product_bundle_selection" lab="{{bundleObj.sbomName}}"><div class="optbundle-item"><div class="optbundle-img px-0"><img src="{{bundleObj.photoPath}}100_100_{{bundleObj.photoName}}"/></div><div class="optbundle-nameprice px-0"><p class="optbundle-name text-overflow">{{bundleObj.sbomName}}</p><p class="optbundle-price"><span class="optbundle-price-old del-line">{{bundleObj.originalPrice | ecCurrency}}<i class="price-currencyUnit"></i></span><span class="optbundle-price-true">{{bundleObj.packagePrice | ecCurrency}}</span></p></div><p class="optconfig-capac h3" style="display:none" >{{bundleObj.sbomName}}</p></div></li>{{/each}}<\/script>';
var f='<script id="optionbundlelist-temp" type="text/html">{{each bundleListObj as bundleList i}}{{bundleList.length}}<div class="optiongiftbundle-subgroup optiongiftbundle-subgroup-{{bundleList.giftBundleType}}" id="giftbundle-groupid-{{bundleList.groupId}}" type="{{bundleList.giftBundleType}}" data-groupId="{{bundleList.groupId}}"><div class="optiongiftbundle-subgroup-selected subgroup-selected-{{bundleList.giftBundleType}} subgroup-sublistcount-{{bundleList.packmap_arr.length}}" ><div class="subgroup-selected-img"><img class="subgroup-selected-imginfo" src=""/></div><div class="subgroup-selected-name"><p class="subgroup-selected-nameinfo"></p><p class="subgroup-selected-nameprice"></p></div><div class="subgroup-selected-arrow" type="collapse"><i class="subgroup-selected-iconinfo hsvg16 hsvg-collapse-h"></i></div></div><ul class="optiongiftbundle-subgroup-ul optgiftbundle-ul" data-groupId="{{bundleList.groupId}}" data-optionVal="bundle" >{{each bundleList.packmap_arr as bundleObj i}}<li class="a-common optgiftbundle-li optgiftbundle-li-{{bundleObj.giftBundleType}}" itemType="DP" data-giftbundlesku={{bundleObj.sbomCode}} data-giftbundleprdid={{bundleObj.disPrdId}} data-attrname="{{bundleObj.sbomAbbr}}" data-giftbundleprice="{{bundleObj.packagePrice}}" data-oriPrice="{{bundleObj.originalPrice}}" data-packagecode="{{bundleObj.packageCode}}" data-groupId="{{bundleObj.groupId}}" data-mainSkuPackagePrice="{{bundleObj.mainSkuPackagePrice}}"data-mainSkuPackagePrice_ori="{{bundleObj.mainSkuPackagePrice_ori}}"cat="product_purchase" act="product_bundle_selection" lab="{{bundleObj.sbomName}}"><div class="optgiftbundle-item"><div class="optgiftbundle-img"><img src="{{bundleObj.photoPath}}100_100_{{bundleObj.photoName}}"/></div><div class="optgiftbundle-nameprice"><p class="optgiftbundle-name">{{bundleObj.sbomName}}</p><p class="optgiftbundle-price" style="display:none;"><span class="optgiftbundle-price-old del-line">{{bundleObj.originalPrice | ecCurrency}}</span><span class="optgiftbundle-price-true">{{bundleObj.unitPrice | ecCurrency}}</span></p><p class="optiongiftbundle-subgroup-link"><a class=" btn-link" target="_blank" href="javascript:;" data-groupId="{{bundleList.groupId}}" data-prdId="{{bundleObj.disPrdId}}"></a></p></div><p class="optconfig-capac h3" style="display:none" >{{bundleObj.sbomName}}</p></div></li>{{/each}}</ul></div><p class="optiongiftbundle-subgroup-link"><a target="_blank" class=" btn-link" href="javascript:;" data-groupId="{{bundleList.groupId}}"></a></p>{{/each}}<\/script>';
var a='<script id="optiongiftlist-temp" type="text/html">{{each giftList as giftObj i}}<li class="optgift-li swiper-slide" itemType="G" data-giftInventory="{{giftObj.sbomInventory}}" data-skuname="{{giftObj.sbomName}}" data-oriprice={{giftObj.price}} data-giftprice={{giftObj.price}} data-giftsku={{giftObj.sbomCode}} data-giftprdid={{giftObj.disPrdId}} ><a href="{{giftObj.pdpLink}}" class="optgift-item" title="{{giftObj.sbomName}}" data-giftprdid={{giftObj.disPrdId}}><p class="optgift-img"><img src="{{giftObj.photoPath}}100_100_{{giftObj.photoName}}" alt="{{giftObj.sbomName}}" class="optgift-image"></p><p class="optgift-name text-overflow"><span class="text-overflow" giftname="{{giftObj.sbomName}}">{{giftObj.sbomName}}</span></p></a></li>{{/each}}<\/script>';
var c=e+b+f+a;
return c
};
var floatlayer_promotionInfo=function(e){var a="";
var c="";
var b="";
var d="";
if(e){c=e.marketingName;
if(e.promotionInfos&&e.promotionInfos.length>0){d="promtioninfo-show";
$.each(e.promotionInfos,function(f,g){b+='<li class="optionchoose-promtioninfo-li"><span class="promtioninfo-icon '+g.promotionInfoIconType+'"></span><span class="promtioninfo-title  text-overflow">'+g.promotionInfoTitle+'</span><span class="promtioninfo-tips tooltip-test"data-container=".optionchoose-promtioninfo-ul" data-trigger="hover" data-toggle="popover" data-placement="top" data-content="'+g.promotionInfoTitle+'"><i class="hsvg16 hsvg-message"></i></span>';
"</li>"
})
}}a='<div class="card optionchoose-mainproducttitle pt-0"><div class="card-header"><h5 class="optionchoose-txt fl">'+c+'</h5></div><div class="card-body mainproduct-promtioninfo '+d+'"><ul class="optionchoose-promtioninfo-ul">'+b+"</ul></div></div>";
return a
};
var checkPromotion=function(){if($(".optionchoose-promtioninfo-li").length>0){$(".mainproduct-promtioninfo").show();
$("[data-toggle='popover']").popover()
}else{$(".mainproduct-promtioninfo").hide()
}};
var queryPrdDisplayDetailInfoAjax=function(a){productId=a;
var b={};
b.api="queryPrdDisplayDetailInfo";
b.type="GET";
b.data={};
b.data.productId=a;
b.success=function(c){if(c.resultCode==0){productInfoData=c.data;
imageHost=c.data.imageHost;
$(".option-config,option-color").remove();
setProductOptionMaps(c.data);
$("#ec_page_loading").remove()
}else{queryPrdNoResult();
console.log("err:查询sku信息：queryPrdDisplayDetailInfo:"+c.resultCode+" ("+c.message+")");
return
}};
ecCom.ajaxReq(b)
};
var queryPrdNoResult=function(){var a=$("#ec-url-goShopping").val();
var b='<div class="ec-mc-empty"><i class="hsvg40 hsvg-face"></i><p>'+ecCom.I18n.get("ec_sorry_can_not_find_the_goods")+'</p><a class="btn btn-lg btn-outline-secondary" href="'+dialogLinkHandler(a)+'" role="button" title="Go Shopping">'+ecCom.I18n.get("ec_go_shopping")+"</a></div>";
$(".container-optionchoose,.container-gift,.container-packinglist").hide();
if(dialogModle_pop){$("#"+dialogModle_pop).find(".modal-body").height(320)
}$("#prd_noresult").html(b).show()
};
var setProductOptionMaps=function(b){var c=[];
var a=[];
productName=b.name;
if(b.sbomList.length>0){$.each(b.sbomList,function(e,f){var l=f.sbomCode;
var g=f.name;
var m=f.priceMode==2?"noprice":f.price;
var j=l+"$%$"+m;
var d=imageHost+f.photoPath+"428_428_"+f.photoName;
var k={};
k.skuCode=l;
k.skuPrice=m;
k.skuOriPrice=m;
k.priceMode=f.priceMode;
k.skuMainPhoto=d;
k.skuName=g;
k.skuFullName=b.name;
k.gtm_variant="";
k.prdMarkingName=b.name;
k.defaultSku=f.defaultSbom==1?"true-1":"false-0";
k.buttonMode=f.buttonMode==1?"buy-1":"other-"+f.buttonMode;
k.extendList=f.extendList;
k.giftList=f.giftList;
k.combList=f.combList;
k.bundleList="";
k.hasBundle=false;
k.skuInventory=0;
k.imageHost=imageHost;
if(f.defaultSbom==1){defaultSkuCode=l;
defaultSkuObj=k
}if(f.gbomAttrList&&f.gbomAttrList.length>0){$.each(f.gbomAttrList,function(i,p){var o={};
o.attrData=[];
o.attrCode=p.attrCode;
o.attrName=p.attrName;
o.attrClass=p.attrName;
o.device=device||($(window).width()<1024?"mobile":"pc");
var q={};
q.attrValue=p.attrValue;
q.attrValueCode=p.attrValueCode;
q.skuCode=l;
q.skuPrice_min=m;
q.subSkuPrice=j;
q.skuMainPhoto=d;
k.skuFullName+=("_"+p.attrValue);
k.gtm_variant+=p.attrValue+" ";
if(i==0){q.attrValue_color="#000000";
if(adminColor_data&&i==0){$.each(adminColor_data,function(r,s){if(s.colorName.trim().toLocaleUpperCase()==p.attrValue.trim().toLocaleUpperCase()){q.attrValue_color=s.colorValue
}})
}}if($.inArray(p.attrCode,c)<0){o.attrData.push(q);
c.push(p.attrCode);
productOptionMaps.push(o);
a.push(p.attrValueCode)
}else{$.each(productOptionMaps,function(s,r){if(r.attrCode==p.attrCode){if($.inArray(p.attrValueCode,a)<0){a.push(p.attrValueCode);
r.attrData.push(q)
}else{$.each(r.attrData,function(t,u){if(u.attrValueCode==p.attrValueCode){if(u.skuCode.indexOf(l)<0){u.skuCode=u.skuCode+","+l;
u.subSkuPrice=u.subSkuPrice+","+j
}if(u.skuPrice_min=="noprice"){if(m!="onprice"){u.skuPrice_min=m
}}else{if(u.skuPrice_min>m){u.skuPrice_min=m
}}}})
}}})
}});
skuInfoMaps.push(k)
}else{var h={};
h.attrData=[];
h.attrCode=f.name;
h.attrName=f.name;
h.attrClass=f.name;
var n={};
n.attrValue=f.name;
n.attrValueCode=f.gbomCode;
n.skuCode=l;
n.skuPrice_min=m;
n.subSkuPrice=j;
n.skuMainPhoto=d;
k.skuFullName+=("_"+gbomItem.attrValue);
k.gtm_variant+=gbomItem.attrValue+" ";
h.attrData.push(n);
c.push(f.name);
productOptionMaps.push(h);
a.push(f.gbomCode);
skuInfoMaps.push(k)
}})
}else{queryPrdNoResult();
console.log("err:queryPrdDisplayDetailInfo:sbomList.length = "+b.sbomList.length)
}if(productOptionMaps.length>0){floatlayer_queryInventoryAndPrice(productOptionMaps)
}};
var floatlayer_queryInventoryAndPrice=function(){if(productOptionMaps.length>0){var b="";
var a="";
$.each(skuInfoMaps,function(d,c){if(d==0){b+=c.skuCode;
a+=b
}else{b+=","+c.skuCode;
a+=","+c.skuCode
}if(c.giftList&&c.giftList.length>0){$.each(c.giftList,function(e,f){if(a.indexOf(f.sbomCode)<0){a+=","+f.sbomCode
}})
}if(c.extendList&&c.extendList.length>0){$.each(c.extendList,function(e,f){if(a.indexOf(f.sbomCode)<0){a+=","+f.sbomCode
}})
}if(c.bundleList&&c.bundleList.length>0){$.each(c.bundleList,function(f,e){if(a.indexOf(e.sbomCode)<0){a+=","+e.sbomCode
}})
}});
$.when(floatlayer_queryInventory(a),floatlayer_querySalePrice(a)).done(function(){var e=0;
var f=0;
var d="";
var c=0;
$.each(skuInfoMaps,function(h,g){if(g.priceMode==2){c++
}else{if(h==0){e=g.skuPrice;
f=g.skuOriPrice;
d=g.skuCode
}if(g.skuOriPrice<=e){e=g.skuPrice;
f=g.skuOriPrice
}if(g.skuPrice<=e){d=g.skuCode;
e=g.skuPrice;
f=g.skuOriPrice
}}});
if(c==skuInfoMaps.length){$(".option-totalprice .optprice-price-sale").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-price-ori").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-from").hide();
$(".option-totalprice .optprice-price-ori").hide();
$(".option-totalbtn").attr({"data-oriprice":ecCom.I18n.get("ec_no_price"),"data-price":ecCom.I18n.get("ec_no_price"),"data-pricemode":2});
$(".hidedataskulist-option").attr({"data-oriprice":ecCom.I18n.get("ec_no_price"),"data-price":ecCom.I18n.get("ec_no_price"),"data-pricemode":2})
}else{$(".option-totalprice .optprice-price-sale").text(ecCurrency(e));
$(".option-totalprice .optprice-price-ori").text(ecCurrency(f));
$(".option-totalbtn").attr({"data-oriprice":f.toFixed(2),"data-price":e.toFixed(2),"data-pricemode":1});
$(".hidedataskulist-option").attr({"data-oriprice":f.toFixed(2),"data-price":e.toFixed(2),"data-pricemode":1});
if(f==e){$(".option-totalprice .optprice-price-ori").hide()
}else{$(".option-totalprice .optprice-price-ori").show()
}}creatOptionPageHtml(defaultSkuCode,defaultSkuObj)
}).fail(function(f){var d="";
switch(f.type){case"querySkuInventory":d="Error-库存（querySkuInventory）："+f.data;
break;
case"querySkuDetailDispInfo":d="Error-促销价（querySkuDetailDispInfo）："+f.data;
break;
case"queryPreferential":d="Error-加价购（queryPreferential）："+f.data;
break
}var g=0;
var h=0;
var e="";
var c=0;
$.each(skuInfoMaps,function(j,i){if(i.priceMode==2){c++
}else{if(j==0){g=i.skuPrice;
h=i.skuOriPrice;
e=i.skuCode
}if(i.skuOriPrice<=g){g=i.skuPrice;
h=i.skuOriPrice
}if(i.skuPrice<=g){e=i.skuCode;
g=i.skuPrice;
h=i.skuOriPrice
}}});
$(".option-totalprice .optprice-price-sale").text(ecCurrency(g));
$(".option-totalprice .optprice-price-ori").text(ecCurrency(h));
if(h==g){$(".option-totalprice .optprice-price-ori").hide()
}else{$(".option-totalprice .optprice-price-ori").show()
}creatOptionPageHtml(defaultSkuCode,defaultSkuObj)
})
}};
var floatlayer_queryInventory=function(b){var c=$.Deferred();
var a={};
a.api="querySkuInventory";
a.type="GET";
a.data={};
a.data.skuCodes=b;
a.success=function(e){if(e.resultCode==0){$.each(e.data.inventoryReqVOs,function(g,f){$.each(skuInfoMaps,function(h,i){if(i.skuCode==f.skuCode){skuInfoMaps[h].skuInventory=f.inventoryQty
}else{if(i.giftList&&i.giftList.length>0){$.each(i.giftList,function(k,j){if(j.sbomCode==f.skuCode){skuInfoMaps[h].giftList[k].sbomInventory=f.inventoryQty
}})
}if(i.extendList&&i.extendList.length>0){$.each(i.extendList,function(j,k){if(k.sbomCode==f.skuCode){skuInfoMaps[h].extendList[j].sbomInventory=f.inventoryQty
}})
}if(i.bundleList&&i.bundleList.length>0){$.each(i.bundleList,function(j,k){if(k.sbomCode==f.skuCode){skuInfoMaps[h].bundleList[j].sbomInventory=f.inventoryQty
}})
}}})
});
localStorage.skuInfoMaps=JSON.stringify(skuInfoMaps);
c.resolve()
}else{var d={type:"queryInventory",data:e.resultCode+e.message};
c.reject(d);
console.log("Err-查询库存-querySkuInventory: "+e.resultCode+e.message)
}};
ecCom.ajaxReq(a);
return c.promise()
};
var floatlayer_querySalePrice=function(a){var b=$.Deferred();
var c={};
c.api="querySkuDetailDispInfo";
c.type="GET";
c.data={};
c.data.skuCodes=a;
c.success=function(e){if(e.resultCode==0){if(e.data.detailDispInfos){$.each(e.data.detailDispInfos,function(g,f){$.each(skuInfoMaps,function(h,i){if(i.skuCode==f.skuPriceInfo.sbomCode){skuInfoMaps[h].skuOriPrice=f.skuPriceInfo.priceMode==2?"noprice":f.skuPriceInfo.orderPrice;
skuInfoMaps[h].skuPrice=f.skuPriceInfo.priceMode==2?"noprice":f.skuPriceInfo.unitPrice;
skuInfoMaps[h].promoRuleList=f.skuPriceInfo.promoRuleList
}})
})
}localStorage.skuInfoMaps=JSON.stringify(skuInfoMaps);
b.resolve()
}else{var d={type:"querySkuDetailDispInfo",data:e.resultCode+e.message};
b.reject(d);
console.log("Error-查询促销价&原价-querySkuDetailDispInfo: "+e.resultCode+e.message)
}};
ecCom.ajaxReq(c);
return b.promise()
};
var floatlayer_queryBundle=function(a,b){var d=$.Deferred();
var c={};
c.api="querySbomDIYPackage";
c.type="GET";
c.data={};
c.data.sbomCodes=a;
c.success=function(e){if(e.resultCode==0){if(e.data.packageInfos&&e.data.packageInfos.length>0){$.each(e.data.packageInfos,function(j,l){var g=l.sbomCode;
var n=l.unitPrice||l.packagePrice||l.originalPrice;
var k=l.originalPrice;
var h=l.packageCode;
var m=[];
if(l.groupList&&l.groupList.length>0){$.each(l.groupList,function(p,i){var o=[];
$.each(i.disPrdList,function(q,r){if(i.packageMap[r].length>0){o=o.concat(i.packageMap[r])
}});
if(o.length>0){m[p]={groupId:i.groupId,giftBundleType:b||"bundle",packmap_arr:o}
}});
if(m.length>0){$.each(m,function(o,i){$.each(i.packmap_arr,function(p,q){q.giftBundleType=b;
q.packageCode=h;
q.groupId=i.groupId;
q.mainSkuPackagePrice=n*1;
q.mainSkuPackagePrice_ori=k*1
})
});
$.each(skuInfoMaps,function(i,o){if(o.skuCode==g){skuInfoMaps[i].bundleList=m;
skuInfoMaps[i].hasBundle=true;
skuInfoMaps[i].packageCode=h;
skuInfoMaps[i].packageUnitPrice=n
}});
d.resolve(m)
}}else{d.resolve([])
}selectedOpitonObj.salePrice=n;
localStorage.skuInfoMaps=JSON.stringify(skuInfoMaps)
})
}else{d.resolve([])
}}else{var f={type:"queryPreferential",data:e.resultCode+e.message};
d.reject(f);
console.log("Error-查询bundle-queryPreferential: "+e.resultCode+e.message)
}};
ecCom.ajaxReq(c);
return d.promise()
};
var creatOptionPageHtml=function(e,c){var d={};
d.productOptionMaps_color=[];
d.productOptionMaps_config=[];
$.each(productOptionMaps,function(g,h){if(g==0){d.productOptionMaps_color.push(productOptionMaps[g])
}else{d.productOptionMaps_config.push(productOptionMaps[g])
}});
$("#prd_noresult").hide().empty();
$(".placehodlecolor").remove();
$(".container-optionchoose,.container-btnsubmit,.container-gift,.container-packinglist").show();
if(d.productOptionMaps_color.length>0){if($(".optionchoose-color").length>0){$(".optionchoose-color").remove()
}$(".optionchoose-giftbundle").before(template("optionchoosecolorlist-temp",d));
var b=$(".optionchoose-color .card-header");
b.attr("data-oldtitle",b.attr("data-oldtitle"));
b.find(".optionchoose-txt").html(b.find(".optionchoose-txt").html());
if(device=="mobile"){$(".optcolor-li:first").addClass("coloritem-incenterscroll")
}var f=$(".optionchoose-color .optcolor-li");
$(".optionchoose-color .optcolor-li").each(function(h,g){var i=true;
var k=$(g);
k.addClass("outofstock-color");
var j=k.attr("data-skucodelist").split(",");
$.each(j,function(m,l){$.each(skuInfoMaps,function(p,o){if(l==o.skuCode&&o.skuInventory>0){i=false;
k.removeClass("outofstock-color")
}})
});
k.attr("data-noinventory",i)
})
}if(d.productOptionMaps_config.length>0){if($(".optionchoose-config").length>0){$(".optionchoose-config").each(function(g,h){$(h).remove()
})
}$(".optionchoose-giftbundle").before(template("optionchooseconfiglist-temp",d));
if($(".optconfig-noprice").length>0){$(".optconfig-noprice").each(function(g,h){$(h).text(ecCom.I18n.get("ec_no_price"))
})
}$(".optionchoose-config .card-header").each(function(g,h){$(h).attr("data-oldtitle",$(h).attr("data-oldtitle"));
$(h).find(".optionchoose-txt").html($(h).find(".optionchoose-txt").html())
})
}if($(".optionchoose-color").length==0){$(".optionchoose-config:first").removeClass("optionchoosedisabled")
}$("#optcolor-selected .optcolor-selcolorimg").attr("src",c.skuMainPhoto);
if(localStorage.optpage_selOptionObj){var a=JSON.parse(localStorage.optpage_selOptionObj);
if(a.productId==productId){if(a.skuCode==e){creatBundleServiceGiftHtml(e,null,true)
}}else{creatBundleServiceGiftHtml(e,null,true)
}}else{creatBundleServiceGiftHtml(e,null,true)
}$(".container-btnsubmit,.container-packinglist").show();
pop_afterHtmlLoad()
};
var pop_afterHtmlLoad=function(){$(".optionchoose-ul li:not('.optgift-li')").on("click",function(b){var a=$(b.target);
if(a.parents(".card").hasClass("optionchoosedisabled")){return
}else{if(a.hasClass("optconfig-outstock-notifyme")){var c=a.attr("data-notifyskulist");
creatNotifymeDialog(c)
}else{optionChoose($(this))
}}});
if($(".optionchoose-color").length>0){$("#optionchoose .card-header .card-link").on("click",function(){changeOptionChoose($(this))
})
}$(".optservice-default,.optservice-change").on("click",function(){$(".optprice-from").hide();
var a=$(".hidedataskulist-option").text();
if(a.length>0){optionServiceFun($(this),a)
}});
$(".option-totalbtn .btn").on("click",function(){optionSubmitFun($(this),$(this).attr("data-btntype"))
});
if(localStorage.optpage_productId==productId&&localStorage.optpage_selOptionObj){lastChooseOption()
}else{defaultSkuSelect(defaultSkuCode)
}localStorage.optpage_productId=productId
};
var optionChoose=function(g){var h=g.parent("ul");
var p=g.parents(".card");
var k=p.find(".card-header .optionchoose-txt");
var d=p.find(".card-header .card-link");
var i=h.attr("data-optionVal");
var e=g.find(".optconfig-capac.h3").text();
g.addClass("active").siblings().removeClass("active");
var q=e;
if(device!="mobile"){q=e;
q=q.charAt(0).toUpperCase()+q.slice(1)
}if(h.find(".optconfig-li.skushow").length==1){q=e;
k.addClass("optionchoose-txt-only")
}k.html(q);
if(g.find(".outstock.outstocknotifyme").length>0||$(".outofstock-color.active").length>0){if($(".option-totalbtn-notifyme").length>0){$(".option-totalbtn-notifyme").remove()
}$(".optionbtnbox .option-totalbtn .option-totalbtn-item").hide().attr("disabled",true).addClass("disabled");
$(".row-optionfloatbtn .option-totalbtn .option-totalbtn-item").hide().attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
var f=g.attr("data-notifyMeskuCode");
var o=g.attr("notifyMesku_ga_lab");
var n='<button data-notifyskulist="'+f+'" cat="pop_cta_click" act="notify_me_button" lab="'+o+'"class="a-common btn btn-outline-secondary btn-lg option-totalbtn-notifyme">'+ecCom.I18n.get("ec_notify_me")+"</button>";
$(".optionbtnbox .option-totalbtn").append(n);
$(".option-totalbtn-notifyme").on("click",function(){creatNotifymeDialog(f)
})
}else{$(".option-totalbtn-notifyme").remove();
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").show();
$(".row-optionfloatbtn .option-totalbtn .option-totalbtn-item").show()
}p.attr("data-selskuList",g.attr("data-skucodelist"));
p.removeClass("optionchoosedisabled").addClass("optionchooseselected");
var a=[];
if(g.parents(".optionchoose-color").length>0){a=g.attr("data-skucodelist").split(",");
filterSkuList(a,$(".optionchoose-color"),"color")
}else{if(g.parents(".optionchoose-config").length>0){var m=g.attr("data-skucodelist").split(",");
var c="";
if($(".optionchoose-color").length==0){c=m
}else{if($(".optionchoose-color.optionchooseselected .optcolor-li.active").length>0){c=$(".optionchoose-color.optionchooseselected .optcolor-li.active").attr("data-skucodelist").split(",")
}}var j=g.parents(".optionchoose-config").prevAll(".optionchoose-config.optionchooseselected");
if(j.length==0){a=arrIntersect(c,m)
}else{j.each(function(t,s){var r=$(s).find(".optconfig-li.active").attr("data-skucodelist").split(",");
if(t==0){a=arrIntersect(c,r)
}else{a=arrIntersect(a,r)
}});
a=arrIntersect(a,m)
}filterSkuList(a,g.parents(".card"),"config")
}}p.next(".optionchoosedisabled:first").removeClass("optionchoosedisabled");
p.next(".optionchoosedisabled:first .card-header").removeClass("gray-font");
p.next(".optionchoosedisabled:first .card-body").show();
if($(".optionchooseselected").length>0){var b="";
$(".optionchooseselected").each(function(r,s){var t=$(s)||$(this);
b+=r>0?",":"";
b+=t.attr("optmodel");
t.find(".card-header").removeClass("gray-font")
});
localStorage.optpage_selModel=b
}localStorage.optpage_selMainPrdSkuCode=a;
var l=true;
switch(i){case"color":l=device=="mobile"?true:false;
optionColorSelected(g);
break;
case"config":break
}};
var changeOptionChoose=function(b){var b=b;
b.text("").attr("disabled",true);
if(b.parents(".card").hasClass("optionchoose-color")){if(device=="mobile"){$(".optcolor-selected-mobile").slideUp(300);
$(".container-optionchoose").removeClass("container-optionchoose-mobile");
$(window).scrollTop(0);
b.parents(".card").find(".optcolor-li-hide").removeClass("optcolor-li-hide").removeClass("active");
$(".optcolor-select-btn").show();
if($(".optionchooseselected.optionchoose-config").length==0){$(".optionchoose-config").removeClass("optionchooseselected").addClass("optionchoosedisabled")
}else{$(".optionchoose-config").each(function(d,c){if(!$(c).hasClass("optionchooseselected")&&!$(c).hasClass("optionchoosedisabled")){$(c).addClass("optionchoosedisabled")
}});
$(".optionchooseselected.optionchoose-config .card-header .card-link").each(function(c,d){$(d).attr("disabled",true)
})
}}}b.parents(".card").find(".card-body li.active").removeClass("active");
b.prev().text(b.parent().attr("data-oldtitle"));
b.parents(".card").removeClass("optionchooseselected").find(".card-body").slideDown(300);
if(b.parents(".card").hasClass("optionchoose-color")||b.parents(".card").hasClass("optionchoose-config")||b.parents(".card").hasClass("optionchoose-giftbundle")){if(!b.parents(".card").hasClass("optionchoose-giftbundle")){selectedOpitonObj={}
}$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
$(".optionchoose-services").removeClass("optselected-service");
$(".optservice-change").text("");
b.parents(".card").attr("data-selskulist","")
}$(".optprice-from").show();
if($(".optionchooseselected").length>0){var a="";
$(".optionchooseselected").each(function(c,d){var e=$(d)||$(this);
a+=c>0?",":"";
a+=e.attr("optmodel")
});
localStorage.optpage_selModel=a
}};
var filterSkuList=function(c,k,h){if(localStorage.optpage_selOptionObj){selectedOpitonObj=JSON.parse(localStorage.optpage_selOptionObj)
}selectedOpitonObj.productId=productId;
selectedOpitonObj.imageHost=imageHost;
localStorage.optpage_selOptionObj=JSON.stringify(selectedOpitonObj);
var d=true;
var i="";
if(h=="color"){i=$(".optionchoose-config:first");
$(".optionchoose-config:first .card-header").removeClass("gray-font")
}else{i=k.nextAll(".optionchoose-config:first");
k.nextAll(".optionchoose-config:first").find(".card-header").removeClass("gray-font")
}var j=true;
i.each(function(p,s){var q=$(s)||$(this);
var u=q.attr("data-selskulist");
var n=arrIntersect(u.split(","),c);
var o=false;
if(n.length>0&&h!="color"){o=false
}else{o=true
}var m=false;
var r=0;
$.each(c,function(w,v){$.each(skuInfoMaps,function(y,x){if(v==x.skuCode){if(x.skuInventory<=0){r++;
if(r==c.length){m=true
}}}})
});
q.find(".optconfig-li").each(function(z,w){var y=$(w)||$(this);
var v=y.attr("data-skucodelist");
var x=arrIntersect(v.split(","),c);
if(x.length>0){y.show().addClass("skushow")
}else{y.hide().removeClass("skushow")
}selSkuLowestPrice(y,x,m);
if(u==v&&y.find(".outstock").length>0){o=true
}});
var t=q.find(".optconfig-li.skushow").length;
q.attr("itemcount-show",t);
if(t==1){q.removeClass("optionchoosedisabled");
j=false;
q.find(".optconfig-li.skushow").trigger("click");
return false
}else{if(o){q.find(".card-header .card-link").removeAttr("disabled");
q.find(".card-header .card-link").trigger("click");
q.attr("data-selskulist","");
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
if(h=="color"){q.addClass("optionchoosedisabled")
}else{q.removeClass("optionchoosedisabled")
}}else{if(q.find(".card-header .optionchoose-txt .opt-only").length>0){q.find(".card-header .optionchoose-txt .opt-only").remove()
}q.find(".card-header .card-link").text(ecCom.I18n.get("ec_change")).removeAttr("disabled");
q.find(".optconfig-li.skushow.active").trigger("click");
c=arrIntersect(u.split(","),c)
}}});
if(j){if(c&&c.length>0){var a=0;
var g=0;
var b="";
var l=0;
$.each(c,function(n,m){$.each(skuInfoMaps,function(o,p){if(m==p.skuCode){if(p.priceMode==2){l++
}else{if(n==0){b=p.skuCode;
a=p.skuPrice;
g=p.skuOriPrice
}else{if(a>p.skuPrice){b=p.skuCode;
a=p.skuPrice;
g=p.skuOriPrice
}}}}})
});
if(l==c.length){$(".option-totalprice .optprice-price-sale").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-price-ori").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-from").hide();
$(".option-totalprice .optprice-price-ori").hide();
$(".option-totalbtn").attr({"data-oriprice":ecCom.I18n.get("ec_no_price"),"data-price":ecCom.I18n.get("ec_no_price"),"data-pricemode":2});
$(".hidedataskulist-option").attr({"data-oriprice":ecCom.I18n.get("ec_no_price"),"data-price":ecCom.I18n.get("ec_no_price"),"data-pricemode":2})
}else{$(".option-totalprice .optprice-price-ori").text(ecCurrency(g));
$(".option-totalprice .optprice-price-sale").text(ecCurrency(a));
$(".option-totalbtn").attr({"data-oriprice":g.toFixed(2),"data-price":a.toFixed(2),"data-pricemode":1});
$(".hidedataskulist-option").attr({"data-oriprice":g.toFixed(2),"data-price":a.toFixed(2),"data-pricemode":1});
if(g==a){$(".option-totalprice .optprice-price-ori").hide()
}else{$(".option-totalprice .optprice-price-ori").show()
}}}var f=$(".optionchoose-color,.optionchoose-config");
var e=0;
if(f.length>=1){f.each(function(o,m){if($(m).hasClass("optionchooseselected")){e++
}})
}if(f.length>e){$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}else{if(f.length<=e){f.each(function(p,m){var o=$(m).attr("data-selskulist").split(",");
c=arrIntersect(o,c)
});
if(c.length==1){$.each(skuInfoMaps,function(n,o){if(c[0]==o.skuCode){$(".hidedataskulist-option").text(c);
$(".hidedataskulist-option").attr({"data-oriprice":o.skuOriPrice,"data-price":o.skuPrice,"data-name":o.skuName,"data-img":o.skuMainPhoto,"data-fullname":o.skuFullName,"data-productid":localStorage.optpage_productId});
$(".optionchoose-mainproducttitle .optionchoose-txt").text(o.skuName);
gtm_mainVariant=o.gtm_variant;
selectedOpitonObj.itemName=o.skuName;
selectedOpitonObj.oriPrice=o.skuOriPrice;
selectedOpitonObj.salePrice=o.skuPrice;
selectedOpitonObj.skuCode=o.skuCode;
selectedOpitonObj.skuCodeList=o.skuCode;
selectedOpitonObj.combList=o.combList;
selectedOpitonObj.itemType="S0";
selectedOpitonObj.Gift=[];
if(!!localStorage.optpage_selOptionObj&&productId==JSON.parse(localStorage.optpage_selOptionObj).productId){selectedOpitonObj.Bundle=JSON.parse(localStorage.optpage_selOptionObj).Bundle;
selectedOpitonObj.Service=JSON.parse(localStorage.optpage_selOptionObj).Service
}else{selectedOpitonObj.Bundle=[];
selectedOpitonObj.Service=[]
}$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
creatBundleServiceGiftHtml(o.skuCode,o,false);
if(!o.extendList){selectedOpitonObj.Service=[];
$(".optservice-sel").show();
$(".optservice-selected").hide();
$(".optserice-sellist").empty();
$(".optservice-change").text("");
$(".optionchoose-services").css("margin-bottom","30px").removeClass("optselected-service");
$(".hidedataskulist-service").empty().attr({"data-oriprice":0,"data-price":0,"data-selskulist":""})
}if($(".optserice-selli").length>0){$(".optionchoose-services").addClass("optselected-service");
$(".optservice-change").text(ecCom.I18n.get("ec_change"))
}else{$(".optionchoose-services").removeClass("optselected-service");
$(".optservice-change").text("")
}localStorage.optpage_selMainPrdSkuCode=o.skuCode;
localStorage.optpage_selOptionObj=JSON.stringify(selectedOpitonObj);
countPriceOption()
}})
}else{$(".optprice-from").show()
}}}}};
var selSkuLowestPrice=function(f,a,c){if(a.length>0){var d=f.attr("data-subskuprice").split(",");
var b=parseFloat(f.attr("data-lowestprice"));
var e=0;
$.each(d,function(g,j){var h=j.split("$%$")[0];
if(j.split("$%$")[1]=="noprice"){var k=j.split("$%$")[1]
}else{var k=parseFloat(j.split("$%$")[1])
}if(a.indexOf(h)>-1){if(a.length>1){if(k!="noprice"){if(e==0){e=k
}else{e=e>k?k:e
}b=e
}}else{b=k
}}});
if(b=="noprice"){f.find(".optconfig-price .price-currencyUnit").hide();
f.find(".optconfig-price .optconfig-price-num").text(ecCom.I18n.get("ec_no_price"))
}else{f.find(".optconfig-price .price-currencyUnit").show();
f.find(".optconfig-price .optconfig-price-num").text(b)
}isShowOutofStock(f,a,c)
}};
var isShowOutofStock=function(g,j,b){g.find(".optconfig-item").removeClass("outstock").find(".optconfig-outstock").remove();
var a=0;
var c=g.attr("data-skucodelist").split(",");
var e=g.attr("data-attrname");
var f=arrIntersect(c,j);
var i="";
$.each(c,function(l,k){$.each(skuInfoMaps,function(o,m){if(k==m.skuCode){if(a==0){e=m.skuName;
i=m.skuFullName;
f=k;
if($.inArray(k,j)>=0){a=m.skuInventory
}}}})
});
if(a<=0){var h="";
if(!g.parents(".card").next(".card").hasClass("optionchoose-config")){g.attr({"data-notifyMeskuName":e,"data-notifyMeskuCode":f,notifyMesku_ga_lab:i});
g.find(".optconfig-item").addClass("outstocknotifyme");
if(b){if($(".option-totalbtn-notifyme").length>0){$(".option-totalbtn-notifyme").remove()
}$(".optionbtnbox .option-totalbtn .option-totalbtn-item").hide().attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
var h='<button data-notifyskulist="'+f+'" cat="pop_cta_click" act="notify_me_button" lab="'+i+'" class="a-common btn btn-outline-secondary btn-lg option-totalbtn-notifyme">'+ecCom.I18n.get("ec_notify_me")+"</button>";
$(".optionbtnbox .option-totalbtn").append(h);
$(".option-totalbtn-notifyme").on("click",function(){creatNotifymeDialog(f)
})
}else{$(".option-totalbtn-notifyme").remove();
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").show()
}}else{$(".option-totalbtn-notifyme").remove();
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").show()
}var d='<div class="optconfig-outstock"><p class="optconfig-outstock-txt">'+ecCom.I18n.get("ec_out_of_stock")+"</p></div>";
g.find(".optconfig-item").addClass("outstock").append(d)
}else{$(".option-totalbtn-notifyme").remove();
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").show()
}};
var creatBundleServiceGiftHtml=function(d,e,j){var l=$.Deferred();
var g=e;
var f=true;
$.each(skuInfoMaps,function(n,o){if(o.skuCode==d){if(!e){g=o
}f=parseInt(o.skuInventory)<=0?false:true
}});
$(".optionchoose-services,.optionchoose-gift,.optionchoose-giftbundle").attr("data-mainskucode",d);
if(!f){$(".optionchoose-services,.optionchoose-gift,.optionchoose-giftbundle").hide();
selectedOpitonObj.Bundle=[];
selectedOpitonObj.Gift=[];
selectedOpitonObj.Service=[]
}$(".optionchoose-services,.optionchoose-gift,.optionchoose-giftbundle").attr("data-mainskucode",d);
var k="gift";
floatlayer_queryBundle(d,k).then(function(p){var o={bundleListObj:p};
if(p&&p.length>0){$(".optiongiftbundle-grouplist").empty();
$(".hidedataskulist-giftbundle").attr({"data-price":0,"data-oriprice":0,"data-packageCode":"","data-groupId":"","data-productId":"","data-selgrouplist":""}).empty();
$("#option-btnbox .hidedataskulist-option").attr({"data-packageprice":"","data-packageprice_ori":""});
selectedOpitonObj.Bundle=[];
if($(".optionchoose-giftbundle").hasClass("optionchooseselected")){var n=$(".optionchoose-giftbundle").attr("data-selskulist");
var q=true;
$.each(p,function(v,w){if(w.sbomCode==n){q=false;
$(".optionchoose-giftbundle").find(".card-body").hide();
return
}});
if(q){$(".optgiftbundle-change").trigger("click")
}}$(".optionchoose-giftbundle .card-body").html(template("optionbundlelist-temp",o));
$(".optiongiftbundle-subgroup-link .btn-link").text(ecCom.I18n.get("ec_view_details"));
$(".optgiftbundle-item .optiongiftbundle-subgroup-link .btn-link").each(function(w,x){var v=$(x)||$(this);
v.attr("href",ecCom.getProductLinkByPID(v.attr("data-prdId"))||ec_getPublicPopLinkByPid(v.attr("data-prdId")))
});
var u="";
$(".optiongiftbundle-subgroup").each(function(v,w){if(v>0){u+=","
}u+=$(w).attr("data-groupId")
});
$(".optionchoose-giftbundle").attr({"data-hasbundle":$(".optiongiftbundle-subgroup").length,"data-groupIdList":u});
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled");
$(".optionchoose-giftbundle").slideDown(300);
$(".optionchoose-giftbundle .card-header").removeClass("gray-font");
$(".optionchoose-giftbundle .card-body").slideDown(300);
if(k=="bundle"){var t='<div class="optgiftbundle-li borderline optgiftbundle-cancle" data-giftbundleprice="0" data-oriPrice="0" data-attrname="'+ecCom.I18n.get("ec_i_dont_need")+" "+ecCom.I18n.get("ec_bundle")+'" data-giftbundlesku=""><p>'+ecCom.I18n.get("ec_i_dont_need")+"</p></div>";
$(".optionchoose-giftbundle .card-body").append(t)
}$(".optgiftbundle-img img").each(function(w,v){if($(v).attr("src").indexOf(imageHost)<0){$(v).attr("src",imageHost+$(v).attr("src"))
}});
$(".optiongiftbundle-subgroup-selected").on("click",function(){var w=$(this);
if(w.hasClass("subgroup-sublistcount-1")){return
}var y=w.find(".subgroup-selected-arrow");
var x=w.parents(".optiongiftbundle-subgroup");
if(y.attr("type")=="collapse"){if($(".optiongiftbundle-subgroup.subgroup-show").length>0){var v=$(".optiongiftbundle-subgroup.subgroup-show");
v.find(".subgroup-selected-arrow").attr("type","collapse");
v.find(".subgroup-selected-arrow i").removeClass("hsvg-packup-h").addClass("hsvg-collapse-h");
v.find(".optiongiftbundle-subgroup-ul").stop().slideUp(300);
if(device=="mobile"){v.next(".optiongiftbundle-subgroup-link").show()
}else{v.next(".optiongiftbundle-subgroup-link").hide()
}v.removeClass(".subgroup-show")
}x.find(".optiongiftbundle-subgroup-ul .optgiftbundle-li-hover").removeClass("optgiftbundle-li-hover");
x.find(".optiongiftbundle-subgroup-ul .optgiftbundle-li.active").addClass("optgiftbundle-li-hover");
x.addClass("subgroup-show");
y.attr("type","packup");
y.find("i").removeClass("hsvg-collapse-h").addClass("hsvg-packup-h");
x.next(".optiongiftbundle-subgroup-link").hide();
x.find(".optiongiftbundle-subgroup-ul").stop().slideDown(300,function(){$(".optgiftbundle-li").each(function(z,B){if($(B).find(".optgiftbundle-nameprice").length>0){var D=$(B).find(".optgiftbundle-nameprice").width();
var A=$(B).find(".optgiftbundle-price").width();
A=0;
var C=$(B).find(".optiongiftbundle-subgroup-link").width();
if(device=="mobile"){$(B).find(".optgiftbundle-name").css({"max-width":(D-A-10)})
}else{$(B).find(".optgiftbundle-name").css({"max-width":(D-A-C-10)})
}}})
})
}else{x.removeClass("subgroup-show");
y.attr("type","collapse");
y.find("i").removeClass("hsvg-packup-h").addClass("hsvg-collapse-h");
x.find(".optiongiftbundle-subgroup-ul").stop().slideUp(300);
x.next(".optiongiftbundle-subgroup-link").show();
if(device=="mobile"){x.next(".optiongiftbundle-subgroup-link").show()
}else{x.next(".optiongiftbundle-subgroup-link").hide()
}}});
$(".optiongiftbundle-subgroup-selected").on("mouseover",function(){var v=$(this);
var w=v.find(".subgroup-selected-arrow i");
w.removeClass("hsvg-packup-a").removeClass("hsvg-collapse-a");
if(w.hasClass("hsvg-packup-h")){w.addClass("hsvg-packup-a")
}else{if(w.hasClass("hsvg-collapse-h")){w.addClass("hsvg-collapse-a")
}}});
$(".optiongiftbundle-subgroup-selected").on("mouseout",function(){var v=$(this);
var w=v.find(".subgroup-selected-arrow i");
w.removeClass("hsvg-packup-a").removeClass("hsvg-collapse-a")
});
selectedOpitonObj.Bundle=[];
$(".optgiftbundle-li").on("click",function(){var E=$(this);
var G=E.attr("data-attrname");
var I=G;
var K=E.hasClass("optgiftbundle-cancle")?"":E.attr("data-giftbundleprice");
E.parents(".card").removeClass("optionchoosedisabled").addClass("optionchooseselected");
E.parents(".card").next(".card").removeClass("optionchoosedisabled");
if(!!E.attr("data-giftbundlesku")){E.addClass("active").siblings().removeClass("active");
var D=E.attr("data-groupId");
var y=E.find(".optgiftbundle-img img").attr("src");
var B='<span class="hidespan hidespan-giftbundle" id="group-'+D+'"groupId="'+D+'"data-packageCode="'+E.attr("data-packagecode")+'" data-productId="'+E.attr("data-giftbundleprdid")+'" itemtype="DP"data-oriprice="'+E.attr("data-oriPrice")+'" data-price="'+E.attr("data-giftbundleprice")+'" data-name="'+E.attr("data-attrname")+'" data-img="'+y+'">'+E.attr("data-giftbundlesku")+"</span>";
var M=$(".hidedataskulist-giftbundle").attr("data-selgrouplist");
if(M.indexOf("_"+D+"_")>-1){$(".hidedataskulist-giftbundle span#group-"+D).remove()
}else{if(M.length==0){$(".hidedataskulist-giftbundle").attr("data-selgrouplist","_"+D+"_")
}else{$(".hidedataskulist-giftbundle").attr("data-selgrouplist",M+"|_"+D+"_")
}}$(".hidedataskulist-giftbundle").append(B);
var F=0;
var H=0;
$(".hidedataskulist-giftbundle span").each(function(P,R){var Q=$(R);
F+=Q.attr("data-price")*1;
H+=Q.attr("data-oriprice")*1
});
$(".hidedataskulist-giftbundle").attr({"data-price":F,"data-oriprice":H});
selectedOpitonObj.Bundle=[];
$(".hidedataskulist-giftbundle .hidespan-giftbundle").each(function(P,R){var Q=$(R)||$(this);
var S={itemName:Q.attr("data-name"),imgSrc:Q.attr("data-img"),salePrice:Q.attr("data-price"),oriPrice:Q.attr("data-oriprice"),skuCode:Q.text(),itemType:Q.attr("itemtype"),packageCode:Q.attr("data-packageCode"),groupId:Q.attr("groupId"),productId:Q.attr("data-productId")};
selectedOpitonObj.Bundle.push(S)
});
$("#option-btnbox .hidedataskulist-option").attr({"data-packageprice":E.attr("data-mainSkuPackagePrice"),"data-packageprice_ori":E.attr("data-mainSkuPackagePrice_ori")})
}else{$(".hidedataskulist-giftbundle").attr({"data-price":0,"data-oriprice":0,"data-packageCode":"","data-groupId":"","data-productId":"","data-selgrouplist":""}).empty();
if(selectedOpitonObj.Bundle){delete (selectedOpitonObj.Bundle)
}$("#option-btnbox .hidedataskulist-option").attr({"data-packageprice":"","data-packageprice_ori":""})
}var N=E.find(".optgiftbundle-img img").attr("src");
var v=E.attr("data-attrname");
var A=E.attr("data-giftbundleprice")*1;
var J=E.attr("data-oriPrice")*1;
var O=E.attr("data-giftbundleprdid");
var L=E.parents(".optiongiftbundle-subgroup");
L.next(".optiongiftbundle-subgroup-link").find(".btn-link").attr("href",ecCom.getProductLinkByPID(O)||ec_getPublicPopLinkByPid(O));
L.next(".optiongiftbundle-subgroup-link").find(".btn-link").text(ecCom.I18n.get("ec_view_details"));
if(device=="mobile"){L.next(".optiongiftbundle-subgroup-link").show()
}else{L.next(".optiongiftbundle-subgroup-link").hide()
}L.find(".subgroup-selected-imginfo").attr("src",N);
L.find(".subgroup-selected-nameinfo").text(v);
L.find(".subgroup-selected-nameprice").html("");
var C=L.find(".subgroup-selected-name").width();
var x=L.find(".subgroup-selected-nameprice").width();
L.find(".subgroup-selected-nameinfo").css({"max-width":(C-x-10)});
L.find(".subgroup-selected-arrow").attr("type","collapse");
L.find(".subgroup-selected-arrow i").removeClass("hsvg-packup-h").addClass("hsvg-collapse-h");
L.find(".optiongiftbundle-subgroup-ul").slideUp(300,function(){L.find(".optiongiftbundle-subgroup-ul .optgiftbundle-li-hover").removeClass("optgiftbundle-li-hover");
E.addClass("optgiftbundle-li-hover")
});
localStorage.optpage_selOptionObj=JSON.stringify(selectedOpitonObj);
countPriceOption();
var w=$(".optionchoose-color,.optionchoose-config");
var z=0;
if(w.length>0){w.each(function(Q,P){if($(P).hasClass("optionchooseselected")){z++
}})
}if(w.length<=z){if($(".optionbtnbox .option-totalbtn").attr("data-pricemode")==2){$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$(".row-optionfloatbtn .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}else{$(".optionbtnbox .option-totalbtn .option-totalbtn-item").removeAttr("disabled").removeClass("disabled");
$(".row-optionfloatbtn .option-totalbtn .option-totalbtn-item").removeAttr("disabled").removeClass("disabled");
$("#option-btnbox").attr("data-btnabled","abled")
}}else{$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$(".row-optionfloatbtn .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}});
$(".optgiftbundle-li").on("mouseover",function(){var v=$(this);
var w=v.parent(".optiongiftbundle-subgroup-ul");
w.find(".optgiftbundle-li-hover").removeClass("optgiftbundle-li-hover");
v.addClass("optgiftbundle-li-hover")
});
if(localStorage.optpage_selOptionObj&&f){var r=JSON.parse(localStorage.optpage_selOptionObj);
if(r.Bundle&&r.Bundle.length>0){$.each(r.Bundle,function(w,x){var v=x.groupId;
$("#giftbundle-groupid-"+v+" .optgiftbundle-li").each(function(z,y){var A=$(y)||$(this);
if(A.attr("data-giftbundlesku")==x.skuCode){$("#giftbundle-groupid-"+v).attr("seltype","lastsave");
A.trigger("click")
}})
});
$(".optiongiftbundle-subgroup").each(function(v,w){var x=$(w);
if(!x.attr("seltype")){x.find(".optiongiftbundle-subgroup-ul .optgiftbundle-li:first").trigger("click")
}})
}else{$(".optiongiftbundle-subgroup-ul").each(function(w,v){$(v).find(".optgiftbundle-li:first").trigger("click")
})
}}else{$(".optiongiftbundle-subgroup-ul").each(function(w,v){$(v).find(".optgiftbundle-li:first").trigger("click")
})
}}else{var s=$(".optionchoose-giftbundle");
s.hide().attr("data-hasbundle",0).removeClass("optionchooseselected");
s.attr({"data-selskulist":""});
$(".optiongiftbundle-grouplist").empty();
$(".hidedataskulist-giftbundle").attr({"data-price":0,"data-oriprice":0,"data-packageCode":"","data-groupId":"","data-productId":"","data-selgrouplist":""}).empty();
$("#option-btnbox .hidedataskulist-option").attr({"data-packageprice":"","data-packageprice_ori":""});
selectedOpitonObj.Bundle=[];
if(localStorage.optpage_selOptionObj){var r=JSON.parse(localStorage.optpage_selOptionObj);
if(r.Bundle&&r.Bundle.length>0){delete (r.Bundle);
localStorage.optpage_selOptionObj=JSON.stringify(r)
}}countPriceOption()
}if(g.buttonMode=="buy-1"&&g.priceMode==1){if(!g.hasBundle){$(".optionbtnbox .option-totalbtn .option-totalbtn-item").removeAttr("disabled").removeClass("disabled");
$("#option-btnbox").attr("data-btnabled","abled")
}else{if($(".optionchoose-giftbundle").hasClass("optionchooseselected")){$(".optionbtnbox .option-totalbtn .option-totalbtn-item").removeAttr("disabled").removeClass("disabled");
$("#option-btnbox").attr("data-btnabled","abled")
}else{$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}}}else{$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled","disabled").addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}});
if(!g.extendList||g.extendList.length==0){selectedOpitonObj.Service=[];
$(".optionchoose-services").slideUp(300);
$(".optserice-sellist").empty();
$(".optservice-change").text("");
$(".optionchoose-services").css("margin-bottom","30px").removeClass("optselected-service");
$(".hidedataskulist-service").empty().attr({"data-oriprice":0,"data-price":0,"data-selskulist":""})
}else{if(!j){$(".optionchoose-services .card-header").removeClass("gray-font");
$(".optionchoose-services .collapseservices").show()
}var b=[];
$.each(g.extendList,function(p,o){b.push(o.sbomCode)
});
$(".optionchoose-services").slideDown(300);
if($(".optserice-sellist .optserice-selli").length>0){var c=[];
var i="";
var h=0;
var m=0;
$(".optserice-sellist .optserice-selli").each(function(n,o){var q=$(o).attr("data-serskucode");
if($.inArray(q,b)<0){$(o).remove()
}else{var p={};
p.itemType=$(o).attr("itemType");
p.skuCode=$(o).attr("data-serskucode");
p.oriPrice=$(o).attr("data-oriprice");
p.salePrice=$(o).attr("data-price");
p.itemName=$(o).attr("title");
if(c.length>0){i+=(","+$(o).attr("data-serskucode"))
}else{i+=$(o).attr("data-serskucode")
}c.push(p);
m+=1*parseInt($(o).attr("data-price"));
h+=1*parseInt($(o).attr("data-oriprice"))
}});
if(c.length>0){var a="";
selectedOpitonObj.Service=[];
$.each(c,function(p,o){selectedOpitonObj.Service.push(o);
a+='<span class="hidespan hidespan-service" itemType="'+o.itemType+'" data-oriprice="'+o.oriPrice+'" data-price="'+o.salePrice+'" data-name="'+o.itemName+'">'+o.skuCode+"</span>"
});
$(".hidedataskulist-service").html(a).attr({"data-selskulist":i,"data-oriprice":h,"data-price":m})
}else{selectedOpitonObj.Service=[];
$(".optservice-sel").show();
$(".optservice-selected").hide();
$(".optserice-sellist").empty();
$(".optservice-change").text("");
$(".optionchoose-services").css("margin-bottom","30px").removeClass("optselected-service");
$(".hidedataskulist-service").empty().attr({"data-oriprice":0,"data-price":0,"data-selskulist":""})
}}}return l.promise()
};
var creatPackingListAfterSalesServiceHtml=function(a){var b={};
b.api="querySkuSpecific";
b.type="GET";
b.data={};
b.data.skuCode=a;
b.success=function(c){if(c.resultCode==0){var d=c.data.specificationsList;
$.each(d,function(e,f){if(f.skuCode==a){$.each(f.specifications,function(k,j){if(j.name=="包装清单"||j.name=="Packing list"||j.name.indexOf("packing")>-1){var h="";
if($(".optcolor-selected").length==0){$.each(skuInfoMaps,function(l,m){if(m.skuCode==a){h=m.skuMainPhoto
}})
}else{h=$(".optcolor-selected .optcolor-selectedimg img").attr("src")
}$(".packinglist-product .packinglist-title").text(ecCom.I18n.get("ec_packing_list"));
if(j.value){var g='<div class="packinglist-box swiper-container">'+j.value+'<div class="swiper-pagination"></div><a class="swiper-button-prev swiper-button-prev-packinglist" style="display:none" href="javascript:;" role="button"></a><a class="swiper-button-next swiper-button-prev-packinglist" style="display:none" href="javascript:;" role="button"></a></div>';
if($(".packinglist-box").length>0){$(".packinglist-box").remove()
}$(".packinglist-product").append(g);
if($(".packinglist-ul .packinglist-li-mainprd").length==0){$(".packinglist-ul li:first").addClass("packinglist-li-mainprd")
}$(".packinglist-ul .packinglist-li-mainprd:first").find(".packinglist-li-pic img").attr("src",h);
$(".packinglist-ul").addClass("swiper-wrapper");
$(".packinglist-ul li").addClass("swiper-slide");
if($(".packinglist-ul li").length>3){$(".swiper-button-next-packinglist,.swiper-button-prev-packinglist").show()
}swiperListScroll(".packinglist-box")
}else{var i='<div class="packinglist-box swiper-container"><ul class="packinglist-ul swiper-wrapper"><li class="swiper-slide packinglist-li-mainprd"><div class="packinglist-li-pic"><img src="'+h+'" class="packinglist-li-img"></div><p class="packinglist-li-name">'+productInfoData.name+"</p></li></ul></div>";
if($(".packinglist-box").length>0){$(".packinglist-box").remove()
}$(".packinglist-product").append(i)
}}if(j.name=="售后信息"||j.name=="After-sales service"||j.name.indexOf("service")>-1){if(j.value){$("#faqpackser .option-package .card-header h3").text(ecCom.I18n.get("ec_after_sales_service"));
$(".option-package").show();
$("#faqpackage-packagelist").html(j.value)
}else{$("#faqpackage-packagelist").empty();
$(".option-package").hide()
}}})
}})
}else{console.log("err:查询包装信息-querySkuSpecific:"+c.resultCode+c.message)
}};
ecCom.ajaxReq(b)
};
var swiperListScroll=function(a){var c=3;
if($(window).width()<=1024){c=1
}else{if($(window).width()<=1366){c=3
}else{c=3
}}var b=new Swiper(a,{loop:false,watchOverflow:true,pagination:{el:".swiper-pagination",clickable:true,dynamicBullets:false},slidesPerView:c,slidesPerGroup:1,lazy:{loadPrevNext:true},pagination:{el:".swiper-pagination",clickable:true,dynamicBullets:false,dynamicMainBullets:3},breakpoints:{1024:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{dynamicBullets:false}},1366:{slidesPerView:c,slidesPerGroup:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{dynamicBullets:true}}}})
};
var optionColorSelected=function(g){g.parent().find(".optcolor-li-hide").removeClass("optcolor-li-hide");
var b=g.attr("data-imgpath");
var a=g.attr("data-skucodelist");
var f=g.find(".optconfig-capac").text();
var e=device=="mobile"?"optcolor-selected-mobile":"optcolor-selected-pc";
if($(".optcolor-li").length==1){e+=" optcolor-selected-onlyone";
$(".optionchoose-color").addClass("optionchoose-color-onlyone");
var d=g.find(".optconfig-capac.h3").text();
var c=d+" <span class='opt-only'>"+ecCom.I18n.get("ec_only")+"</span>";
$(".optionchoose-color").find(".card-header .optionchoose-txt").html(c);
$(".optionchoose-color").find(".card-header .card-link").text("").attr("disabled",true)
}$("#optcolor-selected").addClass(e);
$("#optcolor-selected .optcolor-selcolorimg").attr("src",b);
if(device=="mobile"){$(".container-optionchoose").addClass("container-optionchoose-mobile");
$(".optionchoose-config .card-header .card-link").each(function(h,j){$(j).removeAttr("disabled")
})
}else{if(!$("#collapsecolor").hasClass("selectedcolor")){$("#collapsecolor").addClass("selectedcolor");
$(".optcolor-arrow-left").hide();
$(".optcolor-ul").animate({left:0},300,function(){if($(".optcolor-li:not(.optcolor-li-hide)").length>2){$(".optcolor-arrow-right").show()
}})
}}if($(".packinglist-ul li").length>0){if($(".packinglist-ul .packinglist-li-mainprd").length==0){$(".packinglist-ul li:first").addClass("packinglist-li-mainprd")
}$(".packinglist-ul .packinglist-li-mainprd:first").find(".packinglist-li-pic img").attr("src",b)
}if(localStorage.optpage_selOptionObj){selectedOpitonObj=JSON.parse(localStorage.optpage_selOptionObj)
}selectedOpitonObj.imgSrc=b;
localStorage.optpage_selOptionObj=JSON.stringify(selectedOpitonObj)
};
var optionServiceFun=function(c,a){if(c.hasClass("optservice-change")){c.text("")
}var b;
if($(".hidedataskulist-service").attr("data-selskulist")){b=$(".hidedataskulist-service").attr("data-selskulist")
}else{b=null
}creatServiceDialog(a,productId,b,callback_service)
};
var callback_service=function(){var a="";
$(".optionchoose-services .card-header").removeClass("gray-font");
$("#dialoghtml-content-service .dialogcnt-btn-cancelno").on("click",function(){$("#dialoghtml-content-service").parents(".modal-content").find(".modal-header .close").trigger("click");
if(selectedOpitonObj.Service&&selectedOpitonObj.Service.length>0){$(".optservice-change").text(ecCom.I18n.get("ec_change")).removeAttr("disabled")
}else{$(".optservice-change").text("")
}$(".optprice-from").hide()
});
$(".dialogcnt-btn-confirmok").on("click",function(){selectedOpitonObj.Service=[];
var d=confirmService();
var b="";
var f="";
var e="";
var c=0;
var g=0;
$.each(d,function(k,l){var j=device=="mobile"?"":"/";
var m=device=="mobile"?"ml-auto":"";
b+='<li class="optserice-selli d-flex" itemType="'+l.serItemType+'" data-serskucode="'+l.serSkuCode+'" title="'+l.serName+'" data-oriprice="'+l.serOriPrice+'" data-price="'+l.serPrice+'"><span class="optservice-selected-icon hsvg24 hsvg-service"></span><span class="optserice-selname text-overflow">'+l.serName+"</span> </li>";
e+='<span class="hidespan hidespan-service" itemType="'+l.serItemType+'" data-oriprice="'+l.serOriPrice+'" data-price="'+l.serPrice+'" data-name="'+l.serName+'">'+l.serSkuCode+"</span>";
var h={};
h.itemName=l.serName;
h.itemType=l.serItemType;
h.salePrice=l.serPrice;
h.oriPrice=l.serOriPrice;
h.skuCode=l.serSkuCode;
selectedOpitonObj.Service.push(h);
c+=1*l.serOriPrice;
g+=1*l.serPrice;
f+=k==0?l.serSkuCode:(","+l.serSkuCode)
});
if(d.length>0){$(".optservice-sel").hide();
$(".optserice-sellist").html(b);
$(".optservice-selected").show();
$(".optionchoose-services").css("margin-bottom","10px").addClass("optselected-service");
$(".optservice-change").text(ecCom.I18n.get("ec_change")).removeAttr("disabled").show();
$(".hidedataskulist-service").html(e).attr({"data-selskulist":f,"data-oriprice":c,"data-price":g})
}else{selectedOpitonObj.Service=[];
$(".optservice-sel").show();
$(".optservice-selected").hide();
$(".optserice-sellist").empty();
$(".optservice-change").text("");
$(".optionchoose-services").css("margin-bottom","30px").removeClass("optselected-service");
$(".hidedataskulist-service").empty().attr({"data-oriprice":0,"data-price":0,"data-selskulist":""})
}localStorage.optpage_selOptionObj=JSON.stringify(selectedOpitonObj);
$("#dialoghtml-content-service").parents(".modal-content").find(".modal-header .close").trigger("click");
$("body").addClass("modal-open");
countPriceOption()
});
$("#dialoghtml-content-service").parents(".modal-content").find(".modal-header .close").on("click",function(){if(selectedOpitonObj.Service&&selectedOpitonObj.Service.length>0){$(".optservice-change").text(ecCom.I18n.get("ec_change")).removeAttr("disabled")
}else{$(".optservice-change").text("")
}$(".optprice-from").hide();
$("#"+dialogModle_pop).show();
$("body").addClass("modal-open-important");
setTimeout(function(){$("body").addClass("modal-open").removeClass("modal-open-important")
},200)
})
};
var creatServiceDialog=function(d,a,c,b){if(d){var e={};
e.api="queryPrdDisplayDetailInfo";
e.type="GET";
e.data={};
e.data.productId=a;
e.success=function(f){if(f.resultCode==0){$.each(f.data.sbomList,function(h,g){if(g.sbomCode==d){showServiceDialog(g.extendList,c,b)
}})
}else{console.log(f.resultCode+" ("+f.message+")")
}};
ecCom.ajaxReq(e)
}else{return
}};
var showServiceDialog=function(h,a,d){var e=creatHtmlSevice(h,a);
var f=600;
var b=ecCom.I18n.get("ec_please_choose_service");
var c=hwPop.dialog({width:f,title:b,con:e});
dialogMainAutoHeight();
$("#"+c).addClass("modal_dialog_service");
var g=parseInt($("#"+dialogModle_pop).css("z-index"));
$("#"+dialogModle_pop).css("z-index",g-10);
$("#"+dialogModle_pop).next(".modal-backdrop.show").css("z-index",g-20);
if(d&&d instanceof Function){d()
}$(".optser-seritem-li").on("click",function(){$(this).siblings(".optser-seritem-li").removeClass("active");
$(this).toggleClass("active")
});
$("#dialoghtml-content-service .dialogcnt-btn-cancelno").on("click",function(){$("#dialoghtml-content-service").parents(".modal-content").find(".modal-header .close").trigger("click")
})
};
var confirmService=function(){var a=[];
$(".dialoghtml-content-optservice .optser-seritem-li.active").each(function(c,b){var d={};
d.serName=$(b).attr("data-servicename");
d.serSkuCode=$(b).attr("data-servicesku");
d.serOriPrice=$(b).attr("data-oriprice");
d.serPrice=$(b).attr("data-price");
d.serItemType=$(b).attr("itemType");
if(!!$(b).attr("data-oriprice")){d.serOriPrice=$(b).attr("data-oriprice")
}else{d.serOriPrice=$(b).attr("data-price")
}a.push(d)
});
return a
};
var creatHtmlSevice=function(d,a){var c={};
c[1]={name:ecCom.I18n.get("ec_productType_s1"),html:"",itemType:"S1"};
c[6]={name:ecCom.I18n.get("ec_productType_s6"),html:"",itemType:"S6"};
var e="";
$.each(d,function(f,g){if(g.serviceType!=1&&g.serviceType!=6){if(c[g.serviceType]){c[g.serviceType]={name:g.sbomName,html:c[g.serviceType].html,itemType:"S"+g.serviceType}
}else{c[g.serviceType]={name:g.sbomName,html:"",itemType:"S"+g.serviceType}
}}var k="";
if(!!a&&a.length>0){var j=a.split(",");
if($.inArray(g.sbomCode,j)>=0){k="active"
}}g.oriPrice=g.oriPrice?g.oriPrice:g.price;
var h='<li class="optser-seritem-li borderline '+k+'" itemType="S'+g.serviceType+'" data-prdid="'+g.disPrdId+'" data-servicesku="'+g.sbomCode+'" data-servicename="'+g.sbomName+'" data-serviceId="'+g.sbomId+'" data-oriprice="'+g.oriPrice+'" data-price="'+g.price+'"><h5 class="optser-seritem-sername" data-sername="'+g.sbomName+'">'+g.sbomName+'<span class="optser-seritem-serprice fr" data-serprice="'+g.price+'">'+ecCurrency(g.price)+'</span></h5><p class="optser-seritem-serinfo mb-0" data-serdetail="'+g.sbomName+'">'+g.sbomName+"</p></li>";
c[g.serviceType].disPrdId=g.disPrdId;
c[g.serviceType].html+=h
});
$.each(c,function(g,f){if(f.html.length>0){e+='<div class="optser-cnt-seritem" serviceType="'+g+'"><p class="optser-seritem-title">'+f.name+'</p><ul class="optser-seritem-ul">'+f.html+'</ul><a href="'+ecCom.getProductLinkByPID(f.disPrdId)+'" class="optser-seritem-link  btn-link border-0" data-disprdId="'+f.disPrdId+'">'+ecCom.I18n.get("ec_view_details")+"</a></div>"
}});
var b='<div class="dialoghtml dialoghtml-content dialoghtml-content-optservice"  id="dialoghtml-content-service"><div class="dialogcnt-main dialogcnt-main-optservice" style="overflow-y:auto;">'+e+'</div><div class="dialogcnt-remark dialogcnt-remark-optservice"><p class="dialogcnt-remark-p optser-remark-info">'+ecCom.I18n.get("ec_service_remark")+'</p></div><div class="dialogcnt-btnbox dialogcnt-btnbox-optservice"><button class="dialogcnt-btn dialogcnt-btn-cancelno  btn btn-outline-secondary btn-lg mr-3">'+ecCom.I18n.get("ec_cancel")+'</button><button class="dialogcnt-btn dialogcnt-btn-confirmok btn btn-primary btn-lg">'+ecCom.I18n.get("ec_confirm")+"</button></div></div>";
return b
};
var countPriceOption=function(){var m=$(".hidedataskulist-option").attr("data-price")*1;
if($(".hidedataskulist-option").attr("data-packageprice")){m=$(".hidedataskulist-option").attr("data-packageprice")*1
}var c=$(".hidedataskulist-option").attr("data-pricemode")*1;
var b=$(".hidedataskulist-gift").attr("data-price")*1;
var r=$(".hidedataskulist-bundle").attr("data-price")*1;
var q=$(".hidedataskulist-service").attr("data-price")*1;
var n=$(".hidedataskulist-giftbundle").attr("data-price")*1;
var e=m+n+q;
var f=$(".hidedataskulist-option").attr("data-oriprice")*1;
if($(".hidedataskulist-option").attr("data-packageprice_ori")){f=$(".hidedataskulist-option").attr("data-packageprice_ori")*1
}var j=$(".hidedataskulist-gift").attr("data-oriprice")*1;
var h=$(".hidedataskulist-bundle").attr("data-oriprice")*1;
var g=$(".hidedataskulist-service").attr("data-oriprice")*1;
var i=$(".hidedataskulist-giftbundle").attr("data-oriprice")*1;
var p=f+i+g;
if(c==2){$(".option-totalprice .optprice-price-sale").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-price-ori").text(ecCom.I18n.get("ec_no_price"));
$(".option-totalprice .optprice-from").hide();
$(".option-totalprice .optprice-price-ori").hide();
$(".optionbtnbox .option-totalbtn .option-totalbtn-item").attr("disabled",true).addClass("disabled");
$("#option-btnbox").attr("data-btnabled","disabled")
}else{$(".option-totalprice .optprice-price-ori").text(ecCurrency(p));
$(".option-totalprice .optprice-price-sale").text(ecCurrency(e));
if(p==e){$(".option-totalprice .optprice-price-ori").hide();
$(".optprice-price-oribox").addClass("optprice-price-same")
}else{$(".optprice-price-oribox").removeClass("optprice-price-same");
$(".option-totalprice .optprice-price-ori").show()
}$(".optprice-from").hide();
$(".option-totalbtn").attr({"data-oriprice":p,"data-price":e})
}var l="",a="",d="",k="";
if($(".hidedataskulist-option").text()){l=$(".hidedataskulist-option").text()
}if($(".hidespan-giftbundle").length>0){$(".hidespan-giftbundle").each(function(u,s){var t=$(s);
a+=("|"+t.text())
})
}if($(".hidedataskulist-service").attr("data-selskulist")){var o=$(".hidedataskulist-service").attr("data-selskulist").split(",");
d="|"+o.join("|")
}if($(".hidedataskulist-gift").attr("data-selskulist")){var o=$(".hidedataskulist-gift").attr("data-selskulist").split(",");
k="|"+o.join("|")
}$("#optpage_addcart").attr("lab",l+a+d+k);
$("#optpage_buynow").attr("lab",l+a+d+k)
};
var optionSubmitFun=function(g,j){var p=1;
var q="itemCode";
var n=[];
if(j=="buynow"){q="itemId"
}var i=[];
var k=false;
var a="";
var m=$(".hidedataskulist-giftbundle .hidespan-giftbundle");
if(m.length>0){m.each(function(r,u){var t=$(u);
var s={};
s[q]=t.text();
s.itemType="DP";
s.qty=p;
if(j=="addcart"){s.attrs={dp_group:t.attr("groupId")}
}else{if(j=="buynow"){s.itemProp={dp_group:t.attr("groupId")}
}}i.push(s);
a=t.attr("data-packageCode");
k=true
})
}var c=[];
if($(".hidedataskulist-service span").length>0){$(".hidedataskulist-service span").each(function(s,r){sbm_service={};
sbm_service[q]=$(r).text();
sbm_service.itemType=$(r).attr("itemtype");
sbm_service.qty=p;
c.push(sbm_service)
})
}var b=j=="addcart"?"Add to cart":"Add to cart from buy now";
var f=[];
if(localStorage.optpage_selOptionObj){var d=JSON.parse(localStorage.optpage_selOptionObj);
var e={name:productName,id:productId,price:d.salePrice,brand:"Huawei",category:"",variant:gtm_mainVariant||d.itemName,quantity:p};
f.push(e);
if(d.Bundle&&d.Bundle.length>0){$.each(d.Bundle,function(r,t){var s={name:t.itemName,id:t.productId,price:t.salePrice,brand:"Huawei",category:"",variant:t.itemName,quantity:p};
f.push(s)
})
}}window.dataLayer.push({event:"fire_event",eventCategory:"Cart",eventAction:b,eventLabel:productName,ecommerce:{currencyCode:ecCurrencyCode||"",add:{products:f}}});
switch(j){case"addcart":var n=[];
if($(".hidedataskulist-gift span").length>0){$(".hidedataskulist-gift span").each(function(s,r){sbm_gift={};
sbm_gift[q]=$(r).text();
sbm_gift.itemType=$(r).attr("itemType");
sbm_gift.qty=p;
n.push(sbm_gift)
})
}var l={};
var h=ecCom.getCookie("cartId")||"";
l={mainItem:{itemCode:selectedOpitonObj.skuCode,itemType:selectedOpitonObj.itemType,selected:true,qty:p,subs:i.concat(c.concat(n))}};
if(k){l.mainItem.itemType="DP";
l.mainItem.attrs={dp_package_code:a}
}l.cartId=h;
submitAddtoCart(l);
break;
case"buynow":var n=[];
if($(".hidedataskulist-gift span").length>0){$(".hidedataskulist-gift span").each(function(s,r){sbm_gift={};
sbm_gift.sbomCode=$(r).text();
n.push(sbm_gift)
})
}var o={};
o.orderItemReqArgs=[{itemId:selectedOpitonObj.skuCode,itemType:selectedOpitonObj.itemType,mainSkuCode:selectedOpitonObj.skuCode,subOrderItemReqArgs:i.concat(c),gifts:n,qty:p}];
if(k){o.orderItemReqArgs[0].itemType="DP";
o.orderItemReqArgs[0].itemProp={dp_package_code:a}
}goToCheckOutPage(o.orderItemReqArgs);
break
}};
var submitAddtoCart=function(a){var b={};
b.api="addCartItem";
b.type="POST";
b.data=a;
b.success=function(f){if(f.resultCode==0){sessionStorage.addedItem=JSON.stringify(selectedOpitonObj);
if(f.data&&f.data.cartId){if(f.data.expires){document.cookie="cartId="+escape(f.data.cartId)+";expires="+f.data.expires+";path=/"
}else{ecCom.setCookie("cartId",escape(f.data.cartId),2)
}}ecCom.set("cartQty",f.data.cartInfo.originalTotalNumber);
var e=$("#optpage_addcart").attr("data-href");
var d=location.href.split("/"+ec_siteCode+"/");
var c=dialogLinkHandler($("#ec-url-addedLink").val());
if(!c){c=d[0]+"/"+ec_siteCode+"/"+e
}window.open(c,"_self")
}else{if(f.resultCode==1004001){console.log(f)
}else{console.log("err-添加购物车-addCartItem:"+f.resultCode+f.message)
}}};
ecCom.ajaxReq(b)
};
var lastChooseOption=function(){console.log("selectd by last choosed sku："+localStorage.optpage_selMainPrdSkuCode);
if(productId==JSON.parse(localStorage.optpage_productId)){var b="";
if(!!localStorage.optpage_selMainPrdSkuCode){b=localStorage.optpage_selMainPrdSkuCode
}if(!!localStorage.optpage_selModel&&localStorage.optpage_selModel.length>0){if(!b){return
}else{var f=localStorage.optpage_selModel.split(",");
var e=b.split(",");
$(".optcolor-li,.optconfig-li").each(function(q,j){var p=$(j)||$(this);
var m=p.attr("data-skucodelist").split(",");
var o=p.parents(".card").attr("optmodel");
var l=p.parent();
if($.inArray(o,f)>=0){var k=arrIntersect(m,e);
if(k.length>0){if(p.hasClass("optconfig-li")){if(p.parent().find(".optconfig-li.skushow").length>1){p.trigger("click")
}}else{if(p.hasClass("optcolor-li")){p.trigger("click")
}}}}})
}if(!!localStorage.optpage_selOptionObj){var h=JSON.parse(localStorage.optpage_selOptionObj);
if(h.Service&&h.Service.length>0){var d="",a="",c="";
var i=0;
var g=0;
$.each(h.Service,function(m,k){var j=device=="mobile"?"":"/";
var l=device=="mobile"?"ml-auto":"";
d+='<li class="optserice-selli  d-flex" itemType="'+k.itemType+'" data-serskucode="'+k.skuCode+'" title="'+k.itemName+'" data-oriprice="'+k.oriPrice+'" data-price="'+k.salePrice+'"><span class="optservice-selected-icon hsvg24 hsvg-service"></span><span class="optserice-selname text-overflow">'+k.itemName+"</span> </li>";
a+='<span class="hidespan hidespan-service" itemType="'+k.itemType+'" data-oriprice="'+k.oriPrice+'" data-price="'+k.salePrice+'" data-name="'+k.itemName+'">'+k.skuCode+"</span>";
i+=1*k.oriPrice;
g+=1*k.salePrice;
c+=m==0?k.skuCode:(","+k.skuCode)
});
$(".optservice-sel").hide();
$(".optionchoose-services").css("margin-bottom","10px").addClass("optselected-service");
$(".optserice-sellist").html(d);
$(".optservice-selected").show();
$(".hidedataskulist-service").html(a).attr({"data-selskulist":c,"data-oriprice":i,"data-price":g});
$(".optservice-change").text(ecCom.I18n.get("ec_change")).show();
countPriceOption()
}}}else{return
}}else{localStorage.optpage_selOptionObj="";
localStorage.optpage_selModel="";
localStorage.optpage_selMainPrdSkuCode=""
}};
var defaultSkuSelect=function(a){console.log("selectd by default sku:"+a);
$(".optcolor-li,.optconfig-li").each(function(e,b){var d=$(b)||$(this);
var c=d.attr("data-skucodelist");
if(c.indexOf(a)>-1){if(d.hasClass("optconfig-li")){if(d.parent().find(".optconfig-li.skushow").length>1){d.trigger("click")
}}else{if(d.hasClass("optcolor-li")){d.trigger("click")
}}}})
};
var checkLoginStatus=function(c,g,f){var b=$.Deferred();
var d={};
d.countryCode=siteCode;
var e="v1/login/info";
var h="v1/login/gotoLogin";
var i={};
var a="up_guest";
if(g=="buynow"||g=="checkout"){a="up_guest"
}else{a="up"
}if(g=="notifyme"&&ecCom.getCookie("g_t_s_s_e")=="1"){e="v2/login/info"
}$.ajax({url:loginApiHost+e,type:"GET",dataType:"json",cache:false,traditional:true,xhrFields:{withCredentials:true},crossDomain:true,success:function(n,j,k){if(n.data&&n.data.userId){i.login=true;
i.userId=n.data.userId;
ecCom.setCookie("login_status",true,168);
i.email="";
var m=n.data.userName;
if(ecCom.checkEmail(m)){i.email=m;
ecCom.setGlobalLoginEmail(m);
ecCom.set("login_email",ecCom.emailHide(m))
}else{ecCom.setGlobalLoginEmail("");
ecCom.set("login_email","")
}}else{var o=parseInt($("#"+dialogModle_pop).css("z-index"));
$("#"+dialogModle_pop).css("z-index",o-10);
$("#"+dialogModle_pop).next(".modal-backdrop.show").css("z-index",o-20);
i.login=false;
i.userId="";
var l=c.callBack||window.location.href;
getUPLoginUrl(l).then(function(p){if(ecCom.isPC){window.open(p.loginWebUrl,"_self")
}else{window.open(p.loginWapUrl,"_self")
}})
}b.resolve(n)
},error:function(l,j,k){b.reject(l)
}});
return b.promise()
};
var creatNotifymeDialog=function(h){var k="";
var j="";
var c=false;
var d=JSON.parse(localStorage.optpage_productId);
var i=location.href;
if(ec_pageUri&&ec_siteCode){var e=ec_pageUri;
if(location.href.indexOf("/content/huawei-cbg-site/")!=-1){var f=e.lastIndexOf("/");
if(f==e.length-1){e=e.substring(0,f)+".html"
}}var b=location.href.split("/"+ec_siteCode+"/");
if(location.href.indexOf("productId")!=-1){e="/"+ec_siteCode+"/"+b[1]
}if(location.search&&location.search.length>1){i=b[0]+e
}else{i=b[0]+e
}}i=encodeURIComponent(i);
var a={callBack:i};
var g=parseInt($("#"+dialogModle_pop).css("z-index"));
$("#"+dialogModle_pop).css("z-index",g-10);
$("#"+dialogModle_pop).next(".modal-backdrop.show").css("z-index",g-20);
checkLoginStatus(a,"notifyme","true").then(function(q){if(q.data&&q.data.userId){c=true;
var o=q.data.safeEmail;
if(o){ecCom.setCookie("g_t_s_s_e","0");
var n='<div class="notifyme_remark">'+ecCom.I18n.get("ec_notify_me_has_email_1")+'<span class="notifyme_hassafeemail">'+o+"</span>"+ecCom.I18n.get("ec_notify_me_has_email_2")+"</div>";
var m=ecCom.I18n.get("ec_ok");
var r=ecCom.I18n.get("ec_no");
hwPop.confirm({message:n,btnrd:m,btnwt:r}).on(function(s){if(s){submitNotiyMe(h,o)
}else{return
}})
}else{var n='<div class="notifyme_remark">'+ecCom.I18n.get("ec_notify_me_no_email")+"</div>";
var l=600;
var m=ecCom.I18n.get("ec_go");
var r=ecCom.I18n.get("ec_no");
hwPop.confirm({width:l,message:n,btnrd:m,btnwt:r}).on(function(s){if(s){ecCom.setCookie("g_t_s_s_e","1");
var t=window.location.href;
getUPLoginUrl(t).then(function(v){var u=v.upCenterUrl||upPersonalCenterLink;
window.open(u,"_blank")
})
}else{return
}})
}}else{var p=window.location.href;
getUPLoginUrl(p).then(function(s){if(device=="mobile"){window.open(s.loginWapUrl,"_self")
}else{window.open(s.loginWebUrl,"_self")
}})
}})
};
var submitNotiyMe=function(a,c){var b={};
b.api="subscribeInvRecoveryNotice";
b.type="POST";
b.data={email:c,pushToken:"",sbomCode:a,siteCode:siteCode};
b.success=function(e){if(e.resultCode==0){var d="";
if(e.data.isSet){d=ecCom.I18n.get("ec_notify_me_set_succ")
}else{d=ecCom.I18n.get("ec_notify_me_set_failed")
}$(".modal-header .close").trigger("click");
notifyMeSuccTips(d)
}};
ecCom.ajaxReq(b)
};
var notifyMeSuccTips=function(b){if($("#notifyMeSuccTips").length>0){$("#notifyMeSuccTips").remove()
}var a='<div id="notifyMeSuccTips" class="success-tips"><div class="succtip-box"><span class="succtip-icon hsvg40 hsvg-success-a"></span><span class="succtip-txt">'+b+"</span></div></div>";
$("body").append(a);
$("#notifyMeSuccTips").fadeIn(300);
setTimeout(function(){$("#notifyMeSuccTips").fadeOut(300);
$("#notifyMeSuccTips").remove()
},4000)
};
var dialogMainAutoHeight=function(a){var c=a||".dialoghtml-content";
var b=$(c);
var d=setInterval(function(){if(b.parents(".modal-body").height()>50){clearInterval(d);
var j=$(window).height();
var i=parseInt(b.parents(".modal").find(".modal-header").outerHeight())+70;
var h=parseInt(b.parents(".modal-body").css("padding-top"))+parseInt($(".modal-body").css("padding-bottom"));
var e=parseInt(b.find(".dialogcnt-btnbox").outerHeight()||0);
var g=parseInt(b.find(".dialogcnt-remark").outerHeight()||0);
var f=j-i-h-e-g-15;
b.find(".dialogcnt-main").css("max-height",f)
}},200)
};
}

/*
     FILE ARCHIVED ON 07:27:45 May 10, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:19:26 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.768
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 46.702
  LoadShardBlock: 286.18 (3)
  PetaboxLoader3.datanode: 328.448 (5)
  load_resource: 226.794 (2)
  PetaboxLoader3.resolve: 127.355 (2)
*/