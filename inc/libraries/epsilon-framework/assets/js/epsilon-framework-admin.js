!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/assets/js/",n(n.s=38)}({0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e){this.args=e}return e.prototype.request=function(){var e=this;jQuery.ajax({type:"POST",data:{action:"epsilon_framework_ajax_action",args:e.args},dataType:"json",url:EpsilonWPUrls.ajaxurl,success:function(n){e.result=n,jQuery(e).trigger("epsilon-received-success")},error:function(e,n,t){console.log(e+" :: "+n+" :: "+t)}})},e}();n.EpsilonAjaxRequest=i},10:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e){this.api=e,this.context=jQuery("#epsilon-section-navigation-menu"),this.handleEvents()}return e.prototype.handleEvents=function(){var e=this;jQuery("#submit-epsilon-section").on("click",function(n){var t=e,i={label:e.context.find("#epsilon-section-label").val(),value:e.context.find("#epsilon-section-id").val()};n.preventDefault(),e.context.find(".spinner").addClass("is-active"),e.api.addItemToMenu({"-1":{"menu-item-type":"custom","menu-item-extra":"epsilon-frontpage-section","menu-item-url":"#"+i.value,"menu-item-section":i.value,"menu-item-title":i.label}},t.api.addMenuItemToBottom,t.menuAdded)})},e.prototype.menuAdded=function(){var e=jQuery("#epsilon-section-navigation-menu");e.find(".spinner").removeClass("is-active"),e.find("#epsilon-section-navigation-menu #epsilon-section-id").val(0).blur(),e.find("#epsilon-section-navigation-menu #epsilon-section-label").val("").blur()},e}();n.EpsilonNavMenus=i},11:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=function(){function e(){}return e.prototype.init=function(){var e,n,t,o=jQuery(".epsilon-framework-notice");jQuery.each(o,function(){jQuery(this).on("click",".notice-dismiss",function(){e=jQuery(this).parent().attr("data-unique-id"),n={action:["Epsilon_Notifications","dismiss_notice"],nonce:EpsilonWPUrls.ajax_nonce,args:{notice_id:jQuery(this).parent().attr("data-unique-id"),user_id:userSettings.uid}},t=new i.EpsilonAjaxRequest(n),t.request()})})},e}();n.EpsilonNotices=o},38:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(11),o=t(10);jQuery(document).ready(function(){(new i.EpsilonNotices).init(),"undefined"!=typeof wpNavMenu&&new o.EpsilonNavMenus(wpNavMenu)})}});
//# sourceMappingURL=epsilon-framework-admin.js.map