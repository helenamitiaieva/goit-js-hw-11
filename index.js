import{a as p,S as m,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51455411-f57f23fa62a07ae8b27dc37d3",y="https://pixabay.com/api/";async function h(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const l=document.querySelector(".gallery"),f=document.querySelector("span.loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${a}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){l.innerHTML=""}function S(){f.classList.remove("is-hidden")}function q(){f.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}S(),w();try{const o=await h(r);if(!o.hits.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"});return}L(o.hits)}catch{n.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
