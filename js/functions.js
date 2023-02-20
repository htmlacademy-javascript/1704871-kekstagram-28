// Функция проверки длины строки

function checkLength(currentPhrase, availableLength) {
  const stringLength = currentPhrase.length;
  return stringLength <= availableLength ? 'Строка имеет допустимую длину' : 'Строка слишком длинная';
}

checkLength('Введите Ваш текст', 20);

// Функция проверки строки на палиндром
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

// Функция извлечения цифр их строки

function extractNumber(currentPhrase) {
  const phrase = currentPhrase.replace(/[^0-9]/g,'');
  return phrase;
}

extractNumber('19 февряла 2023 года');

// Функция трансформации строки до минимальной длины при помощи добавления указанного символа
