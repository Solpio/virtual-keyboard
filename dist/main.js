(()=>{"use strict";var t={99:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(81),o=n.n(a),s=n(645),i=n.n(s)()(o());i.push([t.id,".body{background:linear-gradient(122.63deg, rgba(194, 64, 125, 0.75) 6.56%, rgba(122, 90, 248, 0.85) 62.02%, #2E966F 98.72%)}.main{position:fixed;transform:translate(calc(50vw - 50%), calc(50vh - 50%))}.main__wrapper{max-width:1280px}.area{max-width:1280px;width:100%;height:150px}button{border:none;background:none;padding:0}.keyboard{padding:60px 41px 115px 33px;background-color:#1a1a1a}.keyboard__buttons_line{display:flex;gap:0 6px;margin-top:7px}.keyboard__button{display:flex;align-items:center;justify-content:center;height:63px;width:78px;background-color:#2e2e2e;cursor:pointer}.keyboard__button--active{background-color:green}.keyboard__button--caps{width:119px}.keyboard__button--shift{width:157px}.keyboard__button--space{width:576px}.keyboard__button--arrow{width:63px}.keyboard__button--backspace{width:114px}.keyboard__button--hidden{width:63px;opacity:0;cursor:default}.keyboard__button .text{display:block;color:#fff}",""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);a&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var s={},i=[],r=0;r<t.length;r++){var d=t[r],c=a.base?d[0]+a.base:d[0],u=s[c]||0,h="".concat(c," ").concat(u);s[c]=u+1;var l=n(h),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var b=o(p,a);a.byIndex=r,e.splice(r,0,{identifier:h,updater:b,references:1})}i.push(h)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=a(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var r=n(s[i]);e[r].references--}for(var d=a(t,o),c=0;c<s.length;c++){var u=n(s[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}s=d}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={id:a,exports:{}};return t[a](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),a=n(795),o=n.n(a),s=n(569),i=n.n(s),r=n(565),d=n.n(r),c=n(216),u=n.n(c),h=n(589),l=n.n(h),p=n(99),b={};b.styleTagTransform=l(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),e()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const f=function(t,e,n=""){const a=document.createElement(t);return a.classList.add(e),n&&(a.id=n),a},v=async function(){const t=[];return await fetch("../../dist/assets/buttons/keys.json").then((t=>t.json())).then((e=>Object.keys(e).forEach((n=>t.push(e[n].map((t=>new class{constructor(t){this.buttonCode=t.code,this.button=t}CreateButton(t,e){return this.block=function(t){const e=f("button","keyboard__button");return"ShiftLeft"===t&&e.classList.add("keyboard__button--shift"),"ShiftRight"===t&&e.classList.add("keyboard__button--shift"),"Space"===t&&e.classList.add("keyboard__button--space"),"ArrowLeft"===t&&e.classList.add("keyboard__button--arrow"),"ArrowDown"===t&&e.classList.add("keyboard__button--arrow"),"ArrowRight"===t&&e.classList.add("keyboard__button--arrow"),"ArrowUp"===t&&e.classList.add("keyboard__button--arrow"),"CapsLock"===t&&e.classList.add("keyboard__button--caps"),"Backspace"===t&&e.classList.add("keyboard__button--backspace"),"Nothing"===t&&(e.classList.add("keyboard__button--hidden"),e.disabled=!0),e}(this.buttonCode),this.CreateEvent(),this.SetSymbol(t,e),this.AppendSymbol(),this.block}SetSymbol(t,e){"eng"===t?this.symbol=e?this.button.lang.eng.shift.on:this.button.lang.eng.shift.off:"ru"===t&&(this.symbol=e?this.button.lang.ru.shift.on:this.button.lang.ru.shift.off)}UpdateSymbol(){this.span.textContent=this.symbol}AppendSymbol(){const t=f("span","text");this.span=t,t.textContent=this.symbol,this.block.append(t)}CreateEvent(){var t;return this.event=(t=this.buttonCode,new CustomEvent("buttonpressed",{detail:{keyCode:t}})),this.event}DispatchEvent(){this.block.dispatchEvent(this.event)}EndEvent(){this.block.classList.remove("keyboard__button--active")}}(t)))))))),t};!async function(){const{body:t}=document,e=f("main","main"),n=f("div","main__wrapper"),a=f("textarea","area","textarea"),o=f("div","keyboard"),s=f("div","keyboard__wrapper");e.append(n),n.append(a),n.append(o),o.append(s),t.append(e);const i=[],r=window.localStorage.getItem("keyboard-language"),d=new class{constructor(t,e,n){this.lang=t,this.shift=e,this.area=n}SaveLang(){window.localStorage.setItem("keyboard-language",this.lang)}SwithLang(){"ru"===this.lang?this.lang="eng":this.lang="ru",this.UpdateButtons(),this.SaveLang()}SwithShift(){this.shift?this.shift=!1:this.shift=!0,this.UpdateButtons()}EnableShift(){this.shift||(this.shift=!0),this.UpdateButtons()}DisableShift(){this.shift&&(this.shift=!1),this.UpdateButtons()}SetupButtons(t){this.buttons=t}UpdateButtons(){this.buttons.map((t=>(t.SetSymbol(this.lang,this.shift),t.UpdateSymbol(),0)))}CheckOnChangeLanguage(){this.alt&&this.control&&(this.SwithLang(),this.DisableAltAndCtrl())}DisableAltAndCtrl(){this.alt=!1,this.control=!1}SetupEventListeners(){this.buttons.map((t=>(t.block.addEventListener("buttonpressed",(()=>{t.block.classList.add("keyboard__button--active"),t.button.special?("Backspace"===t.buttonCode&&(this.area.value=this.area.value.slice(0,-1)),"Tab"===t.buttonCode&&(this.area.value+=" "),"Enter"===t.buttonCode&&(this.area.value+="\n"),"ShiftLeft"!==t.buttonCode&&"ShiftRight"!==t.buttonCode||(this.EnableShift(),this.DisableAltAndCtrl()),"ChangeLanguage"===t.buttonCode&&(this.SwithLang(),this.DisableAltAndCtrl()),"CapsLock"===t.buttonCode&&(this.SwithShift(),this.DisableAltAndCtrl()),"AltLeft"===t.buttonCode&&(this.alt=!0,this.CheckOnChangeLanguage()),"ControlLeft"===t.buttonCode&&(this.control=!0,this.CheckOnChangeLanguage())):(this.area.value+=t.symbol,this.DisableAltAndCtrl())})),t.block.addEventListener("mousedown",(()=>{t.block.dispatchEvent(t.event)})),t.block.addEventListener("mouseup",(()=>{t.block.classList.remove("keyboard__button--active"),"ShiftLeft"!==t.buttonCode&&"ShiftRight"!==t.buttonCode&&"CapsLock"!==t.buttonCode&&this.DisableShift()})),0))),document.addEventListener("keydown",(t=>{this.area.blur(),this.buttons.map((e=>e.buttonCode===t.code?(e.DispatchEvent(),0):0))})),document.addEventListener("keyup",(t=>{this.area.focus(),this.buttons.map((e=>e.buttonCode===t.code?(e.EndEvent(),"ShiftLeft"!==e.buttonCode&&"ShiftRight"!==e.buttonCode||this.DisableShift(),0):0))}))}}(r||"eng",!1,a);await async function(t){await t.then((t=>t.map((t=>{const e=f("div","keyboard__buttons_line");return t.map((t=>(i.push(t),e.append(t.CreateButton(d.lang,d.shift))))),o.append(e)}))))}(v(d.lang,d.shift)),d.SetupButtons(i),d.SetupEventListeners(),a.focus()}()})()})();