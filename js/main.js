// МЕНЯ МОЖЕТ НЕ БЫТЬ НА СОЗВОНЕ, ПОЭТОМУ ОСТАВЛЮ СВОИ ВОПРОСЫ ЗДЕСЬ.

// Касательно стрелочного вида функций - еще не успел привести к нужному виду. Не забыл.

// ВОПРОСЫ К НАСТАВНИКУ:

// 1. Как сделать так, чтобы функция генерации случайного id выдавала каждый раз новое число?
// А то у меня получается, что авторы комментариев - "Вадим" и "Дарья". И к каждому посту авторы одни и те же.
// С остальным то же самое: id, комментарии и прочее генерируются по шаблону каждый раз одни и те же.
// А нужно чтобы не повторялись.

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
  'Эту фотографию я сделал сам!',
  'Моя семья.',
  'Это я на отдыхе.',
  'Мой дом.'
];

const MASSIV_COMMENT_WIZARD = Array.from({length: COMMENTS_COUNT}, createCommentWizard); // Эта функция генерирует массив комментариев

function GET_RANDOM_INTEGER(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createPostUrl () {
  const a = 'photos/';
  const b = GET_RANDOM_INTEGER(1, 25);
  const c = '.jpg';
  return a + b + c;
}

function createCommentUrl () {
  const a = 'img/avatar-';
  const b = GET_RANDOM_INTEGER(1, 25);
  const c = '.svg';
  return a + b + c;
}

function createCommentWizard() { // Эта функция генерирует комментарий к каждому посту
  return {
    id: GET_RANDOM_INTEGER(0, 999999999),
    avatar: createCommentUrl(),
    message: COMMENTS[GET_RANDOM_INTEGER(0, COMMENTS.length - 1)],
    name: NAMES[GET_RANDOM_INTEGER(0, NAMES.length - 1)]
  };
}

createCommentWizard();

function userPostsWizard() { // Эта функция генерирует объекты постов
  return {
    id: GET_RANDOM_INTEGER(1, 25),
    url: createPostUrl(),
    description: DESCRIPTIONS[GET_RANDOM_INTEGER(0, DESCRIPTIONS.length - 1)],
    likes: GET_RANDOM_INTEGER(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: MASSIV_COMMENT_WIZARD
  };
}

userPostsWizard();


const MASSIV_POST_WIZARD = Array.from({length: POST_COUNT}, userPostsWizard); // Эта функция генерирует массив постов

function getFinalResult() {
  return MASSIV_POST_WIZARD;
}

getFinalResult();
