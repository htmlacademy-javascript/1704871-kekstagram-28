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
  'Собрались со всей семьей дома #милыйдом #отдыхаем #уютный вечер'
];

const GET_ALL_COMMENTS = Array.from({length: COMMENTS_COUNT}, GET_COMMENT);

const GET_RANDOM_INTEGER = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const CREATE_PHOTO_URL = () => {
  const WAY = 'photos/';
  const ID = GET_RANDOM_INTEGER(1, 25);
  const EXTENSION = '.jpg';
  return WAY + ID + EXTENSION;
};

const CREATE_AVATAR_URL = () => {
  const WAY = 'img/avatar-';
  const ID = GET_RANDOM_INTEGER(1, 25);
  const EXTENSION = '.svg';
  return WAY + ID + EXTENSION;
};

function GET_COMMENT() {
  return {
    id: GET_RANDOM_INTEGER(0, 999999999),
    avatar: CREATE_AVATAR_URL(),
    message: COMMENTS[GET_RANDOM_INTEGER(0, COMMENTS.length - 1)],
    name: NAMES[GET_RANDOM_INTEGER(0, NAMES.length - 1)]
  };
}

GET_COMMENT();

function GET_USER_POST() {
  return {
    id: GET_RANDOM_INTEGER(1, 25),
    url: CREATE_PHOTO_URL(),
    description: DESCRIPTIONS[GET_RANDOM_INTEGER(0, DESCRIPTIONS.length - 1)],
    likes: GET_RANDOM_INTEGER(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: GET_ALL_COMMENTS
  };
}

GET_USER_POST();


const MASSIV_POST_WIZARD = Array.from({length: POST_COUNT}, GET_USER_POST);

function getFinalResult() {
  return MASSIV_POST_WIZARD;
}

getFinalResult();
