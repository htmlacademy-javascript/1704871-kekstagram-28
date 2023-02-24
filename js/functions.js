// ФУНКЦИЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ

const checkLength = (currentPhrase, availableLength) => {
  const stringLength = currentPhrase.length;
  return stringLength <= availableLength ? 'true' : 'false';
};

checkLength('Введите Ваш текст', 20);

// ФУНКЦИЯ ПРОВЕРКИ СТРОКИ НА ПАЛИНДРОМ

const checkPhalindrome = (currentPhrase) => {
  const text = currentPhrase.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  let result = '';
  for (let i = (text.length - 1); i >= 0; i--) {
    result += text[i];
  }
  return text === result ? 'true' : 'false';
};

checkPhalindrome('Леша на полке клопа нашел');

// ФУНКЦИЯ ИЗВЛЕЧЕНИЯ ЦИФР ИЗ СТРОКИ

const extractNumber = (currentPhrase) => {
  if (typeof currentPhrase === 'number') {
    return currentPhrase;
  }

  return currentPhrase.replace(/[^0-9]/g,'');
};

extractNumber('19 февраля 2023 года');

// ФУНКЦИЯ ТРАНСФОРМАЦИИ СТРОКИ ДО МИНИМАЛЬНОЙ ДЛИНЫ ПРИ ПОМОЩИ ДОБАВЛЕНИЯ УКАЗАННОГО СИМВОЛА

const transformString = (a, b, c) => {
  let result = a;
  if (a.length < b) {
    for (let i = (a.length - 1); i < (b - 1); i++) {
      result += c;
    }
  }
  return result;
};

transformString('123', 5, 'q');
