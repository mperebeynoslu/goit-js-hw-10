import"./assets/styles-Ds_UuQPd.js";import{f as p,i as l}from"./assets/vendor-BbSUbo7J.js";const a=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},S=document.createElement("style");document.head.appendChild(S);let c=null,s=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}};p(d,C);a.addEventListener("click",b);function b(){s&&clearInterval(s),s=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(s),i({days:0,hours:0,minutes:0,seconds:0}),l.success({title:"Success",message:"Countdown finished!"}),d.disabled=!1;return}const n=q(t);i(n)},1e3),a.disabled=!0,d.disabled=!0}function q(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function i({days:e,hours:t,minutes:n,seconds:u}){o.days.textContent=r(e),o.hours.textContent=r(t),o.minutes.textContent=r(n),o.seconds.textContent=r(u)}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
