var __wpo = {"assets":{"main":["/vendor.2bb94bf8.js","/client.af2669b4.js","/manifest.91f5b328.js","/styles.468e7207.css","/","/fonts/pokemon/pokemon_solid-webfont.ttf","/favicon.ico","/fonts/pokemon/pokemon_solid-webfont.woff2","/fonts/pokemon/pokemon_solid-webfont.woff","/sass/animations.sass","/sass/mixins.sass","/sass/vars.sass","/images/vokedex_lg_opt.svg","/images/vpb-opt.svg","/images/bg_vokedex_opt.svg","/vue2-scrollbar.css"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"8ebf91f76b3b6e3f09b04470d9ce684c23df33f5":"/vendor.2bb94bf8.js","0133f6fb8490c168b79385b747eb168c2a3f6e85":"/client.af2669b4.js","783b0df428cfeed39daf4924044e4b5dfb3909c7":"/manifest.91f5b328.js","ee905faed39394c250a8fa3c83bd34dedf1350bd":"/styles.468e7207.css","0307f375eee3394b390f961c6ec76cdc032e4709":"/","0fb3333ec2eb1ebc2d88a6cf10b61dced7b96431":"/fonts/pokemon/pokemon_solid-webfont.ttf","1f88f14d959244697a68f619f52e622cbea8492b":"/favicon.ico","2b5a3bafcdcaf5d77be6b82ffa81d05bd0222314":"/fonts/pokemon/pokemon_solid-webfont.woff2","b73be127cc913bf7d02f3d2dbef0f7d5f523caf9":"/fonts/pokemon/pokemon_solid-webfont.woff","4749c8f761daceedd07cca0002e5af1b47666ea2":"/sass/animations.sass","c317f556824d219b0cd8374ab0e76849656406b2":"/sass/mixins.sass","921c650517b52d4484d29d5bd104ce1de633c85a":"/sass/vars.sass","61ff45443545a3248b6ad693b9b3e60b476c85d5":"/images/vokedex_lg_opt.svg","e3ce47138231e9fe6e576def65eb7526efe29505":"/images/vpb-opt.svg","97edd2872ebb6aba4f5bcceb4b135a4a800b2aa7":"/images/bg_vokedex_opt.svg","880280472d4c08f37aa99cd8d9938273f7a8385a":"/vue2-scrollbar.css"},"navigateFallbackURL":"/","navigateFallbackForRedirects":true,"strategy":"changed","responseStrategy":"cache-first","version":"2018-3-4 12:06:01","name":"webpack-offline","pluginVersion":"4.9.0","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1)}([function(e,n){},function(e,n,t){"use strict";function r(e,n){function t(){if(!j.additional.length)return Promise.resolve();l&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===S?c("additional"):r("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function r(n){var t=j[n];return caches.open(I).then(function(n){return U(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){f("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function c(n){return d().then(function(t){if(!t)return r(n);var o=t[0],i=t[1],a=t[2],c=a.hashmap,u=a.version;if(!a.hashmap||u===e.version)return r(n);var s=Object.keys(c).map(function(e){return c[e]}),l=i.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=j[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===s.indexOf(e)});Object.keys(C).forEach(function(e){var n=C[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=c[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),f("Changed assets: "+n,p),f("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return o.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(I).then(function(n){var t=v.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,U(n,p,{bust:e.version,request:e.prefetchRequest})])})})}function h(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(F)&&0!==e.indexOf(I))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function d(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(F)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(N,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function p(){return caches.open(I).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:C}));return n.put(new URL(N,location).toString(),t)})}function v(e,n,t){return m(e),o(t,I).then(function(r){return r?(l&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(l&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(I).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(l&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function g(e,n,t){return b(e).then(function(e){if(e.ok)return l&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return l&&console.log("[SW]:","URL ["+n+"] from cache if possible"),o(t,I)})}function m(e){if(W&&"function"==typeof W.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=W.map(new URL(e.request.url),e.request);n&&w(n,e)}}function w(e,n){var t=new URL(e,location),r=n.preloadResponse;$.set(r,{url:t,response:r});var o=function(){return $.has(r)},i=r.then(function(e){if(e&&o()){var n=e.clone();return caches.open(T).then(function(e){if(o())return e.put(t,n).then(function(){if(!o())return caches.open(T).then(function(e){return e.delete(t)})})})}});n.waitUntil(i)}function y(e){if($){var n=void 0,t=void 0;return $.forEach(function(r,o){r.url.href===e.href&&(n=r.response,t=o)}),n?($.delete(t),n):void 0}}function R(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&W&&W.test&&W.test(n,e.request)){var t=y(n),r=e.request;return t?(e.waitUntil(caches.open(T).then(function(e){return e.delete(r)})),t):o(r,T).then(function(n){return n&&e.waitUntil(caches.open(T).then(function(e){return e.delete(r)})),n||fetch(e.request)})}}function x(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!J?e:(l&&console.log("[SW]:","Loading navigation fallback ["+G+"] from cache"),o(G,I))})}function O(){Object.keys(j).forEach(function(e){j[e]=j[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===M.indexOf(e)&&(n.search=""),n.toString()})}),Object.keys(_).forEach(function(e){_[e]=_[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===M.indexOf(e)&&(n.search=""),n.toString()})}),C=Object.keys(C).reduce(function(e,n){var t=new URL(C[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),M=M.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}function U(e,n,t){var r=!1!==t.allowLoaders,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return o&&(e=i(e,o)),fetch(e,a).then(u)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(k(n[o],t)),e.put(n[o],t)});return i.length?function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(U(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function k(e,n){var t=Object.keys(_).map(function(t){if(-1!==_[t].indexOf(e)&&q[t])return q[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function P(e){var n=e.url,t=new URL(n),r=void 0;r=a(e)?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<L.length;o++){var i=L[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&c!==n)return c}}}function b(e){return e.preloadResponse&&!0===W?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}var q=n.loaders,L=n.cacheMaps,W=n.navigationPreload,S=e.strategy,E=e.responseStrategy,j=e.assets,_=e.loaders||{},C=e.hashesMap,M=e.externals,F=e.name,A=e.version,I=F+":"+A,T=F+"$preload",N="__offline_webpack__data";O();var D=[].concat(j.main,j.additional,j.optional),G=e.navigateFallbackURL,J=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===S?c("main"):r("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(p),n=n.then(h),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),W&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===M.indexOf(t)&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=-1!==D.indexOf(t),i=t;if(!o){var c=P(e.request);c&&(i=c,o=!0)}if(o||!r){if(!o||!r)return void(n.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var u=void 0;u="network-first"===E?g(e,t,i):v(e,t,i),G&&a(e.request)&&(u=x(u)),e.respondWith(u)}else{if(G&&a(e.request))return void e.respondWith(x(b(e)));if(!0===W)return void e.respondWith(b(e));if(W){var s=R(e);if(s)return void e.respondWith(s)}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var $=new Map}function o(e,n){return caches.match(e,{cacheName:n}).then(function(t){return c()?t:u(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function i(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function a(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){return c(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===l)var l=!1;r(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),e.exports=t(0)}]);