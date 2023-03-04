import {
  POST_COUNT,
  COMMENTS_COUNT,
  LIKES_MIN_COUNT,
  LIKES_MAX_COUNT,
  ID_MIN_COUNT,
  ID_MAX_COUNT,
  ID_COMMENT_MIN_COUNT,
  ID_COMMENT_MAX_COUNT,
  NAMES,
  COMMENTS,
  DESCRIPTIONS
} from './const.js';

// Функция-генератор случайного числа
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция-генератор пути к фотографии
const createPhotoUrl = () => {
  const WAY = 'photos/';
  const ID = getRandomInteger(ID_MIN_COUNT, ID_MAX_COUNT);
  const EXTENSION = '.jpg';
  return WAY + ID + EXTENSION;
};

// Функция-генератор пути к аватару
const createAvatarUrl = () => {
  const WAY = 'img/avatar-';
  const ID = getRandomInteger(ID_MIN_COUNT, ID_MAX_COUNT);
  const EXTENSION = '.svg';
  return WAY + ID + EXTENSION;
};

// Функция-генератор объекта комментария
const createComment = () => ({
  id: getRandomInteger(ID_COMMENT_MIN_COUNT, ID_COMMENT_MAX_COUNT),
  avatar: createAvatarUrl(),
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

// Функция-генератор объекта публикации
const createUserPost = () => ({
  id: getRandomInteger(1, 25),
  url: createPhotoUrl(),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: COMMENTS_COUNT}, createComment)
});

// Финальный массив
const MASSIV_POST = Array.from({length: POST_COUNT}, createUserPost);

export {MASSIV_POST};
