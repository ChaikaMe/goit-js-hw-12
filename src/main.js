import { getImages } from './js/pixabay-api.js';
import { render } from './js/render-functions.js'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const imagesList = document.querySelector(".images-list");
const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-settings');
const loading = document.querySelector('.loading-text');
const loadMoreButton = document.querySelector('.load-more-button');
let pageNumber = 1;
let searchOption = '';

const lightbox =
                new SimpleLightbox('.images-list a', {
                nav: true,
                captions: true,
                captionsData: 'alt',
                captionDelay: 200,
                })

searchButton.addEventListener('click', search);
loadMoreButton.addEventListener('click', loadMore);

async function search(event) {
    event.preventDefault();
    loading.classList.toggle('visually-hidden');
    pageNumber = 1;
    const query = searchBar.value.trim();
    searchOption = query;
    await getImages(query, pageNumber)
        .then(images => {
            loading.classList.toggle('visually-hidden');
            if (images.totalHits === 0) {return}
            imagesList.innerHTML = '';
            imagesList.insertAdjacentHTML("beforeend", render(images.hits));
            lightbox.refresh();

            if (loadMoreButton.classList.contains('visually-hidden')) {
                loadMoreButton.classList.toggle('visually-hidden');
            }
            limitCheck(images);
        })
        .catch (error => {
        console.log(error);
        });
    searchBar.value = '';
}

async function loadMore() {
    pageNumber += 1;
    loading.classList.toggle('visually-hidden');
    await getImages(searchOption, pageNumber)
        .then(images => {
            loading.classList.toggle('visually-hidden');
            imagesList.insertAdjacentHTML("beforeend", render(images.hits));
            lightbox.refresh();
            limitCheck(images);
            scroll()
        })
        .catch (error => {
            console.log(error);
        });
}

async function scroll() {
    const galleryItem = document.querySelector('.images-list-item');
    window.scrollBy({ top: galleryItem.getBoundingClientRect().height * 2, behavior: 'smooth' });
}

async function limitCheck(images) {
    if (images.totalHits < pageNumber * 15 && images.totalHits !== 0) {
        iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        });
        loadMoreButton.classList.toggle('visually-hidden');
        } 
}