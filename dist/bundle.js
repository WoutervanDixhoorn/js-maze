!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n=document.querySelector("canvas");canWidth=window.innerWidth,canHeight=window.innerHeight-document.querySelector("header").offsetHeight,n.width=canWidth,n.height=canHeight;var r,i,o=n.getContext("2d"),u=new function(){this.Algorithm="",this.setAlgorithm=t=>{this.Algorithm=t,this.Algorithm.init()},this.draw=()=>{this.Algorithm&&this.Algorithm.draw()},this.update=()=>{this.Algorithm&&this.Algorithm.update()}},a=Date.now(),c=1;!function t(){window.requestAnimationFrame(t),r=Date.now(),(i=r-a)>c&&(a=r-i%c,o.clearRect(0,0,canWidth,canHeight),u&&u.draw(),u&&u.update(),console.log("Draw"))}()}]);