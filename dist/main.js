!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=()=>{let e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("img"),d=document.createElement("p");n.setAttribute("src","glasses.jpg"),n.setAttribute("id","homepic"),d.textContent="We push the boundaries of fine dining. We don't provide food. We provide an experience.",t.appendChild(n),t.appendChild(d),e.appendChild(t)};var o=()=>{let e={Appetizers:["Avocado Toast Bites","Stuffed Mushrooms"],"Main Courses":["Salmon a la Reti","Wagyu: Deconstructed"],Dessert:["Italian Custard"]},t=document.getElementById("content"),n=document.createElement("div");Object.keys(e).forEach(t=>{let d=document.createElement("h2");d.textContent=t,n.appendChild(d);let o=document.createElement("div");o.classList.add("dot"),n.appendChild(o),e[t].forEach(e=>{let t=document.createElement("h3");t.textContent=e,n.appendChild(t)})}),t.appendChild(n)};var c=()=>{let e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2");n.textContent="Phone Number";let d=document.createElement("div");d.classList.add("dot");let o=document.createElement("p");o.textContent="714-880-5384";let c=document.createElement("div");c.classList.add("dot");let l=document.createElement("h2");l.textContent="Email";let i=document.createElement("p");i.textContent="erc.pham@gmail.com",t.appendChild(n),t.appendChild(d),t.appendChild(o),t.appendChild(l),t.appendChild(c),t.appendChild(i),e.appendChild(t)};var l=()=>{let e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2");n.textContent="Location";let d=document.createElement("div");d.classList.add("dot");let o=document.createElement("p");o.textContent="1509 Repoet Lane, Royal Valley, GU, 47832",t.appendChild(n),t.appendChild(d),t.appendChild(o),e.appendChild(t)};function i(){let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}function a(){document.querySelectorAll(".tab").forEach(e=>e.classList.remove("selected"))}document.getElementById("home").addEventListener("click",(function(){a(),this.classList.add("selected"),i(),d()})),document.getElementById("contact").addEventListener("click",(function(){a(),this.classList.add("selected"),i(),c()})),document.getElementById("menu").addEventListener("click",(function(){a(),this.classList.add("selected"),i(),o()})),document.getElementById("info").addEventListener("click",(function(){a(),this.classList.add("selected"),i(),l()})),o()}]);