import store from"./store.js";export default class LeaderboardControl{constructor(){this.t=document.querySelector("form"),this.s=document.querySelector("#from"),this.$input=document.querySelector("#url"),this.o=document.querySelector("#run"),this.i=document.querySelector("#reset")}l(){const{h:e,u:t}=store.m();return!1===e&&1===t.length?(this.o.removeAttribute("disabled"),void this.i.removeAttribute("disabled")):!1===e?(this.o.setAttribute("disabled","disabled"),void this.i.setAttribute("disabled","disabled")):void 0}v(){this.t.addEventListener("submit",e=>{if(e.preventDefault(),"add"===e.p.id){const{h:e}=store.m();e&&store.L({type:"RESET"}),store.L({type:"ADD_URL",value:this.$input.value})}else if("run"===e.p.id){store.L({type:"RUN_LEADERBOARD"});const{from:e,u:t}=store.m(),s=new URLSearchParams(`from=${e}&competitors=${t.join(",")}`);window.history.replaceState({},"",`${location.pathname}?${s}`),ga("send",{R:"event",g:"Leaderboard",A:"run",D:t.join(",")})}this.$input.value=""}),this.i.addEventListener("click",()=>store.L({type:"RESET"})),this.s.addEventListener("change",(function(){store.L({type:"CHANGE_FROM",value:this.value})}))}init(){this.v(),store.subscribe(this.l.bind(this))}}