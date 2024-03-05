export function render(images) {
    const markup = images
        .map(image => `
            <li class="images-list-item">
                <a class="item-link" href="${image.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${image.webformatURL}" 
                        alt="${image.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${image.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${image.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${image.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${image.downloads}</span></p>
                    </div>
                </a>
            </li>`)
        .join("");
    return markup;   
}

