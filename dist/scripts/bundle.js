!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){var n=r(1),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function c(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:b(f,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,h=0;function b(e,t){var r,n,o;if(t.singleton){var i=h++;r=m||(m=u(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);a[o].references--}for(var i=s(e,t),u=0;u<r.length;u++){var l=c(r[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var n=JSON.stringify({cakes:[{type:"cakes",author:"John Smith",title:"Deliciously Decadent",ingredients:["chocolate","milk","flour","vegetable oil","sugar","butter"],image:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg"},{type:"cakes",author:"Jane Doe",title:"Ridiculous Raspberry",ingredients:["raspberries","milk","flour","vegetable oil","sugar","butter"],image:"https://thecakeblog.com/wp-content/uploads/2017/01/chocolate-raspberry-cake-thumb-sm.jpg"},{type:"cakes",author:"Tim Thomas",title:"Famous NY Cheese Cake",ingredients:["cream cheese","milk","flour","sugar","butter","biscuits"],image:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Vanilla-Cheesecake_EXPS_THLS17_205125_D02_23_3b-1.jpg"}],biscuits:[{type:"biscuits",author:"Vincent Grey",title:"Ginger Snaps",ingredients:["ginger","flour","butter","sugar"],image:"https://image.shutterstock.com/image-photo/this-photo-symbol-internet-cookies-600w-1626058816.jpg"},{type:"biscuits",author:"Earl Senseo",title:"Short Bread",ingredients:["sugar","flour","butter"],image:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/butter_shortbread_74896_16x9.jpg"},{type:"biscuits",author:"Lily Shanes",title:"Millionaires",ingredients:["sugar","flour","butter","condensed milk","milk chocolate"],image:"https://i0.wp.com/everydaycooks.co.uk/wp-content/uploads/2017/10/millionaire-shortbread-h2.jpg?fit=1800%2C1360&ssl=1"}],bread:[{type:"bread",author:"Martin Zammit",title:"Sourdough",ingredients:["water","flour","salt","yeast"],image:"https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg"},{type:"bread",author:"Pia Falzon",title:"Beautiful Baguettes",ingredients:["water","flour","salt","yeast"],image:"https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg"},{type:"bread",author:"Maria Mifsud",title:"The best thing since sliced bread",ingredients:["water","flour"],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA"}]});function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}for(var c=JSON.parse(n),s=document.querySelector(".container"),u=0,l=Object.entries(c);u<l.length;u++){var d=o(l[u],2),f=d[0];p(d[1],f)}function p(e,t){var r,n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}(e);try{for(n.s();!(r=n.n()).done;){var o=r.value,a=document.createElement("div");a.classList.add("card"),a.style.width="18rem",a.style.marginRight="2rem";var c=document.createElement("img");c.classList.add("card-img-top","img-fluid"),c.src=o.image,c.style.height="14rem";var u=document.createElement("div");u.classList.add("card-body");var l=document.createElement("h5");l.classList.add("card-title"),l.textContent=o.title;var d=document.createElement("p");d.classList.add("card-text","border-bottom"),d.textContent=o.author;var f=document.createElement("p");f.classList.add("card-text"),f.textContent=o.ingredients,a.append(c,u),u.append(l,d,f),s.querySelector("#".concat(o.type)).append(a)}}catch(e){n.e(e)}finally{n.f()}}}]);