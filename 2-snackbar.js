import"./assets/styles-BSk5vKbh.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(c){c.preventDefault();const t=document.querySelector('[name="delay"]').value,s=document.querySelector('input[name="state"]:checked').value;new Promise((e,i)=>{s==="fulfilled"?setTimeout(()=>e(t),t):s==="rejected"&&setTimeout(()=>i(t),t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});const m=document.createElement("style");document.head.appendChild(m);
//# sourceMappingURL=2-snackbar.js.map
