!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){var n=document.querySelector("canvas");n.width=window.innerWidth,n.width=window.innerHeight;var r=n.getContext("2d");let o,l;var s,a,u,h=40,f=[],c=[],d=Date.now(),w=1;function v(t,e){this.i=t,this.j=e,this.walls=[!0,!0,!0,!0],this.visited=!1,this.show=function(){var t=window.innerWidth/2-o*h/2,e=window.innerHeight/2-o*h/2,i=Math.floor(this.i*h+t),n=Math.floor(this.j*h+e);this.walls[0]&&F(i,n,i+h,n,"#FFFFFF"),this.walls[1]&&F(i+h,n,i+h,n+h,"#FFFFFF"),this.walls[2]&&F(i+h,n+h,i,n+h,"#FFFFFF"),this.walls[3]&&F(i,n+h,i,n,"#FFFFFF"),this.visited&&p(i,n,h,"rgba(255,0,255,0.6)"),s==this&&p(i,n,h,"rgba(255,255,255,0.5)")},this.checkNeighbours=function(){var i=[],n=f[g(t,e-1)],r=f[g(t+1,e)],o=f[g(t,e+1)],l=f[g(t-1,e)];return n&&!n.visited&&i.push(n),r&&!r.visited&&i.push(r),o&&!o.visited&&i.push(o),l&&!l.visited&&i.push(l),i.length>0?i[Math.floor(Math.random()*i.length)]:void 0}}function F(t,e,i,n,o){r.beginPath(),r.strokeStyle=o,r.moveTo(t,e),r.lineTo(i,n),r.lineWidth=2,r.stroke(),r.closePath()}function p(t,e,i,n){r.fillStyle=n,r.fillRect(t,e,i,i)}function g(t,e){return t<0||e<0||t>o-1||e>l-1?-1:t+e*o}!function(){for(o=Math.floor(innerHeight/h),l=o,j=0;j<l;j++)for(i=0;i<o;i++){var t=new v(i,j);f.push(t)}s=f[0]}(),function t(){window.requestAnimationFrame(t),a=Date.now(),(u=a-d)>w&&(d=a-u%w,function(){r.clearRect(0,0,window.innerWidth,window.innerHeight),f.forEach((function(t){t.show()})),s.visited=!0;var t=s.checkNeighbours();t?(t.visited=!0,c.push(s),function(t,e){var i=t.i-e.i;1==i?(t.walls[3]=!1,e.walls[1]=!1):-1==i&&(t.walls[1]=!1,e.walls[3]=!1);var n=t.j-e.j;1==n?(t.walls[0]=!1,e.walls[2]=!1):-1==n&&(t.walls[2]=!1,e.walls[0]=!1)}(s,t),s=t):c.length>0&&(s=c.pop())}())}()}]);