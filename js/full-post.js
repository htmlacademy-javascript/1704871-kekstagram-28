import {fullPost, picture, closeButton} from './setup.js';

for (let i = 0; i < picture.length; i++) {
  picture[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    fullPost.classList.remove('hidden');
  });
}

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  fullPost.classList.add('hidden');
});
