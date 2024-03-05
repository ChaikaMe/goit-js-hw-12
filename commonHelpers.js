import{a as f,i as p,S as L}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const v="42676528-15736482ad411b0a23089de5b";f.defaults.baseURL="https://pixabay.com/";async function m(s,o){return await f.get("api/",{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:"15"}}).then(e=>(e.data.total===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data)).catch(e=>console.log(e))}function g(s){return s.map(e=>`
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
            </li>`).join("")}const c=document.querySelector(".images-list"),b=document.querySelector(".search-button"),u=document.querySelector(".search-settings"),n=document.querySelector(".loading-text"),r=document.querySelector(".load-more-button");let i=1,h="";const y=new L(".images-list a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:200});b.addEventListener("click",w);r.addEventListener("click",q);async function w(s){s.preventDefault(),n.classList.toggle("visually-hidden"),i=1;const o=u.value.trim();h=o,await m(o,i).then(e=>{n.classList.toggle("visually-hidden"),c.innerHTML="",c.insertAdjacentHTML("beforeend",g(e.hits)),y.refresh(),r.classList.contains("visually-hidden")&&r.classList.toggle("visually-hidden")}).catch(e=>{console.log(e)}),u.value=""}async function q(){i+=1,n.classList.toggle("visually-hidden"),await m(h,i).then(s=>{n.classList.toggle("visually-hidden"),c.insertAdjacentHTML("beforeend",g(s.hits)),y.refresh(),s.totalHits<i*15?(p.info({message:"We're sorry, but you've reached the end of search results."}),r.classList.toggle("visually-hidden")):S()}).catch(s=>{console.log(s)})}async function S(){const s=document.querySelector(".images-list-item");window.scrollBy({top:s.getBoundingClientRect().height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
