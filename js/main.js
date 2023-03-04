const POST_COUNT = 25;
const COMMENTS_COUNT = 2;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const NAMES = [
  'Дарья',
  'Вадим',
  'Екатерина',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Софья',
  'Константин',
  'Зоя',
  'Александр'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Эту фотографию я сделал сам! #me',
  'С друзьями на шашлыках #отдых',
  'Это мы на отдыхе #отдыхаемхорошо #веселоидружно',
  'Собрались со всей семьей дома #милыйдом #отдыхаем #уютныйвечер',
  'Еду домой! #милыйдом #уютныйвечер',
  'Как здорово получилось! #Супер'
];

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
  const ID = getRandomInteger(1, 25);
  const EXTENSION = '.jpg';
  return WAY + ID + EXTENSION;
};

// Функция-генератор пути к аватару
const createAvatarUrl = () => {
  const WAY = 'img/avatar-';
  const ID = getRandomInteger(1, 25);
  const EXTENSION = '.svg';
  return WAY + ID + EXTENSION;
};

// Функция-генератор объекта комментария
const createComment = () => ({
  id: getRandomInteger(0, 999999999),
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

// eslint-disable-next-line no-console
console.log(MASSIV_POST);

