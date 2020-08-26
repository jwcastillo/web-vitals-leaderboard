import store from"./store.1c7bd93aec.js";export default class LeaderboardControl{constructor(){this.$node=document.querySelector("form"),this.$from=document.querySelector("#from"),this.$input=document.querySelector("#url"),this.$run=document.querySelector("#run"),this.$reset=document.querySelector("#reset")}toggleDisabled(){const{leaderboardLoaded:e,urls:t}=store.getState();return!1===e&&t.length>=1?(this.$run.removeAttribute("disabled"),void this.$reset.removeAttribute("disabled")):!1===e?(this.$run.setAttribute("disabled","disabled"),void this.$reset.setAttribute("disabled","disabled")):void 0}addEvents(){this.$node.addEventListener("submit",e=>{if(e.preventDefault(),"add"===e.submitter.id){const{leaderboardLoaded:e}=store.getState();e&&store.dispatch({type:"RESET"}),store.dispatch({type:"ADD_URL",value:this.$input.value})}else if("run"===e.submitter.id){store.dispatch({type:"LEADERBOARD_UPDATE"});const{from:e,urls:t}=store.getState(),r=new URLSearchParams(`from=${e}&competitors=${t.join(",")}`);window.history.replaceState({},"",`${location.pathname}?${r}`),ga("send",{hitType:"event",eventCategory:"Leaderboard",eventAction:"run",eventLabel:t.join(",")})}this.$input.value=""}),this.$reset.addEventListener("click",()=>store.dispatch({type:"RESET"})),this.$from.addEventListener("change",(function(){store.dispatch({type:"CHANGE_FROM",value:this.value})}))}init(){this.addEvents(),store.subscribe(this.toggleDisabled.bind(this))}}