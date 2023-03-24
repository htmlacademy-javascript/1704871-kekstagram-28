// ИМПОРТИРУЕМ МАССИВ ОПИСАНИЙ ИЗ DATA.JS
import {MASSIV_POST} from './data.js';


// СОЗДАЕМ ПЕРЕМЕННУЮ БЛОКА КАРТИНКИ
const pictureContainer = document.querySelector('.pictures');

// СОЗДАЕМ ПЕРЕМЕННУЮ ШАБЛОНА КАРТИНКИ
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// СОЗДАЕМ ПЕРЕМЕННУЮ, СОДЕРЖАЩУЮ ФУНКЦИЮ ГЕНЕРАЦИИ МАССИВА ОПИСАНИЙ (УЖЕ ИММЕТСЯ ТАКАЯ ФУНКЦИЯ)
const pictureThumbnails = MASSIV_POST;

// СОЗДАЕМ ПЕРЕМЕННУЮ ФРАГМЕНТА КАРТИНКИ
const pictureListFragment = document.createDocumentFragment();

pictureThumbnails.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true); // КЛОНИРУЕМ ШАБЛОН
  pictureElement.querySelector('.picture__img').src = url; // ПОДСТАВИТЬ URL КАК SRC ИЗОБРАЖЕНИЯ
  pictureElement.querySelector('.picture__likes').textContent = likes; // ПОДСТАВИТЬ LIKES В .picture__likes
  pictureElement.querySelector('.picture__comments').textContent = comments.length; // ПОДСТАВИТЬ comments В .picture__comments
  pictureListFragment.append(pictureElement);
});

pictureContainer.append(pictureListFragment);

export {pictureThumbnails};
