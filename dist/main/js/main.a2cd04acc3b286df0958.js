!function(e){function t(t){for(var r,a,c=t[0],i=t[1],f=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==u[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},u={2:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=i;o.push([335,0]),n()}({100:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[this._v("App text start")]),this._v(" "),t("router-view")],1)},u=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}))},101:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:e.result}},[e._v(e._s(e.result))]),e._v(" "),n("qrcode-stream",{attrs:{paused:e.paused},on:{decode:e.onDecode,init:e.onInit}})],1)},u=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}))},102:function(e,t,n){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("App text start")])},u=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}))},103:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"addData",on:{click:function(t){return e.addData()}}},[e._v("getData")]),e._v(" "),n("button",{staticClass:"childremoveData",on:{click:function(t){return e.removeData()}}},[e._v("removeData")])])},u=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}))},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(347)),u=o(n(367));function o(e){return e&&e.__esModule?e:{default:e}}var a={f01:r.default,f02:u.default};t.default=a},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=(r=n(348))&&r.__esModule?r:{default:r};var o=u.default.create({baseURL:"local",timeout:0,withCredentials:!0}),a={token:"",setToken:function(e){this.token=e||""},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return t["X-CSRF-TOKEN"]=a.token,e.hasOwnProperty("contentType")&&(t["content-Type"]=e.contentType),t},post:function(e,t){var n=a.config();return o.post(e,t,{headers:n}).then((function(e){return e})).catch((function(e){console.log(e)}))},postFile:function(e,t){var n=a.config({contentType:"multipart/form-data"});return o.post(e,t,{setting:n}).then((function(e){return e})).catch((function(e){console.log(e)}))},downloadFile:function(e,t){return o.post(e,t).then((function(e){})).catch((function(e){console.log(e)}))},get:function(e){return o.get(e).then((function(e){return e}))},all:function(e){return u.default.all(e).then((function(e){return e})).catch((function(e){console.log(e)}))}};o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return 200==e.status?Promise.resolve(e):e}),(function(e){switch(e.response.status){case 400:console.log("URL ERROR");break;case 401:console.log("未登入");break;case 403:console.log("請重新登入");break;case 404:console.log("請求不存在")}return $("html").removeClass("black"),Promise.reject(e)}));var c=a;t.default=c},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(365)),u=o(n(366));function o(e){return e&&e.__esModule?e:{default:e}}var a={f01:r.default,f02:u.default};t.default=a},335:function(e,t,n){"use strict";var r=i(n(336)),u=i(n(345));n(369);var o=i(n(370)),a=i(n(99)),c=i(n(371));function i(e){return e&&e.__esModule?e:{default:e}}a.default.use(c.default);new a.default({router:r.default,store:u.default,render:function(e){return e(o.default)}}).$mount("#app")},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(99)),u=c(n(339)),o=c(n(340)),a=c(n(343));function c(e){return e&&e.__esModule?e:{default:e}}r.default.use(u.default);var i=[o.default,a.default],f=new u.default({history:"hash",routes:i.reduce((function(e,t){return e.concat(t)}))});t.default=f},340:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[{path:"/",name:"index",component:function(){return Promise.resolve().then((function(){return function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(341))}))}}];t.default=o},341:function(e,t,n){"use strict";n.r(t);var r=n(101),u=n(63);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var a=n(29),c=Object(a.a)(u.default,r.a,r.b,!1,null,null,null);t.default=c.exports},342:function(e,t,n){"use strict";n.r(t);var r=n(103),u=n(65);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var a=n(29),c=Object(a.a)(u.default,r.a,r.b,!1,null,null,null);t.default=c.exports},343:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[{path:"/about",name:"about",component:function(){return Promise.resolve().then((function(){return function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(344))}))}}];t.default=o},344:function(e,t,n){"use strict";n.r(t);var r=n(102),u=n(67);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var a=n(29),c=Object(a.a)(u.default,r.a,r.b,!1,null,null,null);t.default=c.exports},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(99)),u=c(n(138)),o=c(n(346)),a=c(n(368));function c(e){return e&&e.__esModule?e:{default:e}}r.default.use(u.default);var i=new u.default.Store({strict:!0,modules:{f01:o.default,f02:a.default}});t.default=i},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=(r=n(139))&&r.__esModule?r:{default:r};function o(e,t,n,r,u,o,a){try{var c=e[o](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,u)}var a={namespaced:!0,state:{jsonUsersData:[]},getters:{},mutations:{setJsonUsers:function(e,t){e.jsonUsersData=t||[]}},actions:{jsonUsers:function(e){return(t=regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.default.f01.jsonUsers();case 3:return r=t.sent,n("setJsonUsers",r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,u){var a=t.apply(e,n);function c(e){o(a,r,u,c,i,"next",e)}function i(e){o(a,r,u,c,i,"throw",e)}c(void 0)}))})();var t}}};t.default=a},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(140)),u=o(n(149));function o(e){return e&&e.__esModule?e:{default:e}}var a={jsonUsers:function(){return r.default.get(u.default.f01.jsonUsers)}};t.default=a},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={jsonUsers:"https://jsonplaceholder.typicode.com/users"};t.default=r},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={jsonPosts:"https://jsonplaceholder.typicode.com/posts"};t.default=r},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(140)),u=o(n(149));function o(e){return e&&e.__esModule?e:{default:e}}var a={jsonPosts:function(e){return r.default.post(u.default.f02.jsonPosts,e)}};t.default=a},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=(r=n(139))&&r.__esModule?r:{default:r};function o(e,t,n,r,u,o,a){try{var c=e[o](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,u)}var a={namespaced:!0,state:{jsonPostsData:[]},getters:{},mutations:{setJsonPosts:function(e,t){e.data=t||[]}},actions:{jsonPosts:function(e,t){return(n=regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,u.default.f02.jsonPosts(t);case 3:return o=n.sent,r("setJsonPosts",o.data),n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,u){var a=n.apply(e,t);function c(e){o(a,r,u,c,i,"next",e)}function i(e){o(a,r,u,c,i,"throw",e)}c(void 0)}))})();var n}}};t.default=a},369:function(e,t,n){"use strict";n.r(t)},370:function(e,t,n){"use strict";n.r(t);var r=n(100),u=n(69);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var a=n(29),c=Object(a.a)(u.default,r.a,r.b,!1,null,null,null);t.default=c.exports},63:function(e,t,n){"use strict";n.r(t);var r=n(64),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=u.a},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r;n(138);function u(e,t,n,r,u,o,a){try{var c=e[o](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))}}var a={components:{level1Component:((r=n(342))&&r.__esModule?r:{default:r}).default},data:function(){return{result:"",camera:"auto",torch:!0,paused:!1}},methods:{onInit:function(e){return o(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:n=t.sent,n.capabilities,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onDecode:function(e){var t=this;return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.result=e,t.paused=!0,n.next=5,t.redeem(e);case 5:t.paused=!1,n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},onCameraChange:function(e){var t=this;e.catch((function(e){e.name,t.camera}))},redeem:function(e){return new Promise((function(t,n){e?t("Success"):n("failed")}))}}};t.default=a},65:function(e,t,n){"use strict";n.r(t);var r=n(66),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=u.a},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{ary:{type:Array}},components:{},data:function(){return{}},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{addData:function(){},removeData:function(){this.ary.splice(0,1),this.$emit("updateData",this.ary)}}};t.default=r},67:function(e,t,n){"use strict";n.r(t);var r=n(68),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=u.a},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={}},69:function(e,t,n){"use strict";n.r(t);var r=n(70),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=u.a},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={}}});