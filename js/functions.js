const CURRENT_PHRASE = 'леша на полке клопа нашел';
const AVAILABLE_LENGTH = 20;

function checkLenght(stringLenght) {
  stringLenght = CURRENT_PHRASE.length;
  return stringLenght <= AVAILABLE_LENGTH ? 'Строка имеет допустимую длину' : 'Строка слишком длинная';
}

checkLenght();

function checkPhalindrome(enteredPrase) {
  enteredPrase = CURRENT_PHRASE.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  let result = '';
  for (let i = (enteredPrase.length - 1); i >= 0; i--) {
    result += enteredPrase[i];
  }
  return enteredPrase === result ? 'Строка является палиндромом' : 'Строка не является палиндромом';
}

checkPhalindrome(); // Вопрос: почему при сортировке программа не видит букву Ё?
