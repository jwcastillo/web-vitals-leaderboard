const initialState={urls:[],from:"urls",running:!1,results:null,leaderboardLoaded:!1,leaderboardError:!1,filters:{device:"PHONE",connection:"4G"}};function leaderboard(r={},e){const l={...r};switch(e.type){case"RUN_LEADERBOARD":return l.running=!0,e.urls&&(l.urls=e.urls),e.from&&(l.from=e.from),l;case"LEADERBOARD_LOADED":return l.running=!1,l.leaderboardLoaded=!0,l.results=e.results||null,l.leaderboardError=e.error||!1,l;case"CHANGE_DEVICE":return l.running=!0,l.results=null,l.filters.device=e.value,l;case"CHANGE_CONNECTION":return l.running=!0,l.results=null,l.filters.connection=e.value,l;case"CHANGE_FROM":return{...initialState,from:e.value};case"ADD_URL":const n=Array.isArray(e.value)?e.value:[e.value];return l.urls=[...r.urls,...n],l.running=!1,l.results=null,l.leaderboardLoaded=!1,l;case"REMOVE_URL":return l.urls=r.urls.filter(r=>r!==e.value),l.running=!1,l.results=null,l.leaderboardLoaded=!1,l;case"RESET":return initialState;default:return l}}export default Redux.createStore(leaderboard,initialState);