"use strict";var precacheConfig=[["/present/devops/index.html","f52359f5f9e12b816cb9c8d8c64b9405"],["/present/devops/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/present/devops/static/js/main.37fbb853.js","094f9091fc49346c4e691bf74ac817e5"],["/present/devops/static/media/accept.90952531.png","909525310be3310e641fff486b09e7b3"],["/present/devops/static/media/ballMachine.4ed68bfc.gif","4ed68bfc7c70c590f01f7e8e9ac5a3ce"],["/present/devops/static/media/born.13e9caf8.png","13e9caf8604c0dc14d32c13325e21dd1"],["/present/devops/static/media/factory.e7a05d1d.png","e7a05d1d74dce5af65cbeb6f0e7a8ab6"],["/present/devops/static/media/firstWay.6af09aff.png","6af09aff9235279f9eb190a752b2cb67"],["/present/devops/static/media/journey.3b603081.png","3b603081542b9f7a43ce00741927bf89"],["/present/devops/static/media/machine1.860ba23d.png","860ba23d3faad0e9c6d559c52593536c"],["/present/devops/static/media/machine10.832224e1.png","832224e11153a4f3a588d170cfcab83c"],["/present/devops/static/media/machine2.ec78f314.png","ec78f314acb78a9d4a39210e299ccc84"],["/present/devops/static/media/machine3.d4a3a8cb.png","d4a3a8cb90c916d31f1647d00abab127"],["/present/devops/static/media/machine4.74806540.png","74806540e61366282abf88571a651d6d"],["/present/devops/static/media/machine5.24aa6074.png","24aa60744ac31d690e14de3b6cccf2f7"],["/present/devops/static/media/machine6.12c10b82.png","12c10b82aca4652a3b2d17bde64b7acd"],["/present/devops/static/media/machine7.77685a59.png","77685a594c1fec2e1ae81091365ed871"],["/present/devops/static/media/machine8.a1238c49.png","a1238c4940c6ae7d0782d481850caabe"],["/present/devops/static/media/machine9.1179b8f9.png","1179b8f9f759f7dc6e05477e0d23ae7a"],["/present/devops/static/media/reject.b0ea9803.png","b0ea98035a1754828cfc6b7e4c0425e3"],["/present/devops/static/media/secondWay.e5b645af.png","e5b645af6afc34c947be93424b4a6bcd"],["/present/devops/static/media/shock.5fad421b.png","5fad421b0af787ae4e62dd0d7a3f35ff"],["/present/devops/static/media/sleep.b733eb56.png","b733eb56562079fb188e16b97190c315"],["/present/devops/static/media/time.bbd94d0c.png","bbd94d0c25b751d1719c0342da4333e4"],["/present/devops/static/media/visible.da5feafd.png","da5feafd0b73a7fcef3eb014dd02e042"],["/present/devops/static/media/winner.34c5add4.png","34c5add403ea71b571fdc9ba1b7c5bbe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/present/devops/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});