import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Імпорт об'єктів галереї
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

function createGallery(images) {
  const makeLiItem = images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item" style="list-style:none" >
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`
    )
    .join('');

  galleryList.insertAdjacentHTML('afterbegin', makeLiItem);
}

createGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
