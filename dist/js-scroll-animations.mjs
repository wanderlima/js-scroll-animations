function t(){let t=!1,e=document.querySelectorAll("[data-jsscroll]");function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const l=t.getBoundingClientRect().top,s=window.innerHeight||document.documentElement.clientHeight;return l>=0&&l<=s/e}function s(){!function(e,l){if(t)return;t=!0,setTimeout((()=>{e(),t=!1}),l)}((()=>{e.forEach((t=>{const e=t.getAttribute("data-jsscroll-delay")||0,s=t.hasAttribute("data-jsscroll-reset"),o=t.getAttribute("data-jsscroll-threshold")||1.25;l(t,parseFloat(o))?setTimeout((()=>{t.classList.add("jsScroll__scrolled")}),e):s&&!l(t,0)&&t.classList.remove("jsScroll__scrolled")}))}),250)}function o(){e.forEach((t=>{t.classList.remove("jsScroll__scrolled"),t.classList.remove("jsScroll__disabled")}))}function n(){window.removeEventListener("scroll",s)}return{init:function(){0!==e.length&&(window.addEventListener("scroll",s),s())},pause:n,reset:o,disable:function(){n(),o(),e.forEach((t=>{t.classList.add("jsScroll__disabled")}))}}}export{t as default};