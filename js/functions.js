// ФУНКЦИЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ

function checkLength(currentPhrase, availableLength) {
  const stringLength = currentPhrase.length;
  return stringLength <= availableLength ? 'Строка имеет допустимую длину' : 'Строка слишком длинная';
}

checkLength('Введите Ваш текст', 20);

// ФУНКЦИЯ ПРОВЕРКИ СТРОКИ НА ПАЛИНДРОМ
// ВОПРОС: почему при сортировке программа не видит букву Ё?

function checkPhalindrome(currentPhrase) {
  const text = currentPhrase.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  let result = '';
  for (let i = (text.length - 1); i >= 0; i--) {
    result += text[i];
  }
  return text === result ? 'Строка является палиндромом' : 'Строка не является палиндромом';
}

checkPhalindrome('Леша на полке клопа нашел');

// ФУНКЦИЯ ИЗВЛЕЧЕНИЯ ЦИФР ИЗ СТРОКИ

function extractNumber(currentPhrase) {
  const phrase = currentPhrase.replace(/[^0-9]/g,'');
  return phrase;
}

extractNumber('19 февряла 2023 года');

// ФУНКЦИЯ ТРАНСФОРМАЦИИ СТРОКИ ДО МИНИМАЛЬНОЙ ДЛИНЫ ПРИ ПОМОЩИ ДОБАВЛЕНИЯ УКАЗАННОГО СИМВОЛА

function transformString(a, b, c) {
  let result = a;
  if (a.length < b) {
    for (let i = (a.length - 1); i < (b - 1); i++) {
      result += c;
    }
  }
  return result;
}

transformString('123', 5, 'q');
