// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



const galleryEl = document.querySelector(`.gallery`);
const galleryItemsEl = createdGalleryItemsEl(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, galleryItemsEl);
 
function createdGalleryItemsEl(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    }).join(``);
}


console.log(galleryItemsEl);

const lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: `alt`,
  captionSelector: `img`,
  captionType: 'img alt="${description}"',
  captionPosition:`bottom`,
  captionDelay: 250,
});



    
    
