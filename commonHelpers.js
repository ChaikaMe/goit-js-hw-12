import{a as f,i as p,S as v}from"./assets/vendor-64b55ca9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const b="42676528-15736482ad411b0a23089de5b";f.defaults.baseURL="https://pixabay.com/";async function h(t,a){return await f.get("api/",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:"15"}}).then(e=>(e.data.total===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data)).catch(e=>console.log(e))}function m(t){return t.map(e=>`
            <li class="images-list-item">
                <a class="item-link" href="${e.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${e.webformatURL}" 
                        alt="${e.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${e.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${e.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${e.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${e.downloads}</span></p>
                    </div>
                </a>
            </li>`).join("")}const c=document.querySelector(".images-list"),w=document.querySelector(".search-button"),d=document.querySelector(".search-settings"),n=document.querySelector(".loading-text"),r=document.querySelector(".load-more-button");let i=1,g="";const y=new v(".images-list a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:200});w.addEventListener("click",q);r.addEventListener("click",S);async function q(t){t.preventDefault(),n.classList.toggle("visually-hidden"),i=1;const a=d.value.trim();g=a,await h(a,i).then(e=>{n.classList.toggle("visually-hidden"),e.totalHits!==0&&(c.innerHTML="",c.insertAdjacentHTML("beforeend",m(e.hits)),y.refresh(),r.classList.contains("visually-hidden")&&r.classList.toggle("visually-hidden"),L(e))}).catch(e=>{console.log(e)}),d.value=""}async function S(){i+=1,n.classList.toggle("visually-hidden"),await h(g,i).then(t=>{n.classList.toggle("visually-hidden"),c.insertAdjacentHTML("beforeend",m(t.hits)),y.refresh(),L(t),O()}).catch(t=>{console.log(t)})}async function O(){const t=document.querySelector(".images-list-item");window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"})}async function L(t){t.totalHits<i*15&&t.totalHits!==0&&(p.info({message:"We're sorry, but you've reached the end of search results."}),r.classList.toggle("visually-hidden"))}
//# sourceMappingURL=commonHelpers.js.map
