(function(){var I,S;I=this.jQuery||window.jQuery,S=I(window),I.fn.stick_in_parent=function(t){var v,_,s,o,$,i,C,T,x,j,Q;for(null==t&&(t={}),Q=t.sticky_class,$=t.inner_scrolling,j=t.recalc_every,x=t.parent,T=t.offset_top,C=t.spacer,_=t.bottoming,null==T&&(T=0),null==x&&(x=void 0),null==$&&($=!0),null==Q&&(Q="is_stuck"),v=I(document),null==_&&(_=!0),s=function(e,n,r,c,l,a,u,d){var f,t,p,h,g,m,k,y,s,b,w,i;if(!e.data("sticky_kit")){if(e.data("sticky_kit",!0),g=v.height(),k=e.parent(),null!=x&&(k=k.closest(x)),!k.length)throw"failed to find stick parent";if(f=p=!1,(w=null!=C?C&&e.closest(C):I("<div />"))&&w.css("position",e.css("position")),(y=function(){var t,s,o;if(!d&&(g=v.height(),t=parseInt(k.css("border-top-width"),10),s=parseInt(k.css("padding-top"),10),n=parseInt(k.css("padding-bottom"),10),r=k.offset().top+t+s,c=k.height(),p&&(f=p=!1,null==C&&(e.insertAfter(w),w.detach()),e.css({position:"",top:"",width:"",bottom:""}).removeClass(Q),o=!0),l=e.offset().top-(parseInt(e.css("margin-top"),10)||0)-T,a=e.outerHeight(!0),u=e.css("float"),w&&w.css({width:e.outerWidth(!0),height:a,display:e.css("display"),"vertical-align":e.css("vertical-align"),float:u}),o))return i()})(),a!==c)return h=void 0,m=T,b=j,i=function(){var t,s,o,i;if(!d&&(o=!1,null!=b&&(--b<=0&&(b=j,y(),o=!0)),o||v.height()===g||y(),o=S.scrollTop(),null!=h&&(s=o-h),h=o,p?(_&&(i=c+r<o+a+m,f&&!i&&(f=!1,e.css({position:"fixed",bottom:"",top:m}).trigger("sticky_kit:unbottom"))),o<l&&(p=!1,m=T,null==C&&("left"!==u&&"right"!==u||e.insertAfter(w),w.detach()),t={position:"",width:"",top:""},e.css(t).removeClass(Q).trigger("sticky_kit:unstick")),$&&((t=S.height())<a+T&&!f&&(m-=s,m=Math.max(t-a,m),m=Math.min(T,m),p&&e.css({top:m+"px"})))):l<o&&(p=!0,(t={position:"fixed",top:m}).width="border-box"===e.css("box-sizing")?e.outerWidth()+"px":e.width()+"px",e.css(t).addClass(Q),null==C&&(e.after(w),"left"!==u&&"right"!==u||w.append(e)),e.trigger("sticky_kit:stick")),p&&_&&(null==i&&(i=c+r<o+a+m),!f&&i)))return f=!0,"static"===k.css("position")&&k.css({position:"relative"}),e.css({position:"absolute",bottom:n,top:"auto"}).trigger("sticky_kit:bottom")},s=function(){return y(),i()},t=function(){if(d=!0,S.off("touchmove",i),S.off("scroll",i),S.off("resize",s),I(document.body).off("sticky_kit:recalc",s),e.off("sticky_kit:detach",t),e.removeData("sticky_kit"),e.css({position:"",bottom:"",top:"",width:""}),k.position("position",""),p)return null==C&&("left"!==u&&"right"!==u||e.insertAfter(w),w.remove()),e.removeClass(Q)},S.on("touchmove",i),S.on("scroll",i),S.on("resize",s),I(document.body).on("sticky_kit:recalc",s),e.on("sticky_kit:detach",t),setTimeout(i,0)}},o=0,i=this.length;o<i;o++)t=this[o],s(I(t));return this}}).call(this),$(function(){$('a[href="#searchfs"]').on("click",function(t){t.preventDefault(),$("#searchfs").addClass("open"),$('#searchfs > form > input[type="search"]').focus()}),$("#searchfs, #searchfs button.close").on("click keyup",function(t){t.target!=this&&"close"!=t.target.className&&27!=t.keyCode||$(this).removeClass("open")})}),function(i){i.fn.menumaker=function(t){var s=i(this),o=i.extend({format:"dropdown",sticky:!1},t);return this.each(function(){i(this).find(".button").on("click",function(){i(this).toggleClass("menu-opened");var t=i(this).next("ul");t.hasClass("open")?t.slideToggle(150).removeClass("open"):(t.slideToggle(150).addClass("open"),"dropdown"===o.format&&t.find("ul").show())}),s.find("li ul").parent().addClass("has-sub"),multiTg=function(){s.find(".has-sub").prepend('<span class="submenu-button"></span>'),s.find(".submenu-button").on("click",function(){i(this).toggleClass("submenu-opened"),i(this).siblings("ul").hasClass("open")?i(this).siblings("ul").removeClass("open").slideToggle(150):i(this).siblings("ul").addClass("open").slideToggle(150)})},"multitoggle"===o.format?multiTg():s.addClass("dropdown"),!0===o.sticky&&s.css("position","fixed")})}}(jQuery),function(t){t(document).ready(function(){t("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery),jQuery(document).ready(function(){var t=jQuery(window).width();function s(){jQuery("#sidebar-sticky").stick_in_parent({parent:"#wrapper",offset_top:70})}t<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):s(),jQuery(window).resize(function(){(t=jQuery(window).width())<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):s()})}),800<window.innerWidth&&($(window).scroll(function(){200<$(this).scrollTop()?$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$("#back-to-top").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1}),$("#go-to-bot").click(function(){return $("html, body").animate({scrollTop:$(document).height()},1e3),!1}));var lastScrollTop=0;$(window).scroll(function(t){var s=$(this).scrollTop();lastScrollTop+200<s?($(" #header - container").css(" transform"," translateY(-48px) "),lastScrollTop=s):s<lastScrollTop&&($(" #header - container ").css(" transform "," translateY(0) "),lastScrollTop=s)});