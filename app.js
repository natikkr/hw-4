//1.Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти.
//Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.


function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input. Array is expected.');
  }
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('Invalid input. Indices should be numbers.');
  }
  if (first < 0 || second < 0 || first > arr.length || second > arr.length) {
    throw new Error('Invalid input. Indices out of range.');
  }

  let sumNumbers = arr[first] + arr[second];
  return sumNumbers;
}
try {
  const arr = [9, 81, 16, 235, 7, 18, 25, 1, -7, 0.1, 3];
  const sumResult = sumSliceArray(arr, 0, 1);

  console.log('Sum:', sumResult);
}
catch (error) {
  console.error('Error:', error.message);
}


//2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
// якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
//користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
// У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
// У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
  try {
    let userName = prompt('Введіть Ваше імя', '');


    if (!userName) {
      throw new Error('Invalid value! Please enter your name');
    }
    let userAge = prompt('Введіть Ваш вік', '');
    userAge = parseInt(userAge);
    if (!userAge) {
      throw new Error('Invalid value! Please enter your age');
    }
    if (isNaN(userAge)) {
      throw new TypeError('Invalid value! Please enter your age');
    }
    if (userAge < 18 || userAge > 70) {
      throw new RangeError('Your age should be between 18 and 70 to watch the movie');
    }
    let userStatus = prompt('Ваш статус (admin, moderator, user):', '');
    if (!userStatus) {
      throw new Error('Invalid value! Please enter your status')
    }
    if (userStatus !== 'admin' && userStatus !== 'moderator' && userStatus !== 'user') {
      throw new EvalError('Invalid status.');
    }

    alert('You have access to watch the movie!');

  }
  catch (error) {
    alert(`Error: ${error.message}`);
  }

}
checkAge();




//3.Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || isNaN(width) || typeof height !== 'number' || isNaN(height)) {
    throw new Error('The field is empty! Please enter number')
  }

  const area = width * height;
  return area;
}
try {
  const widthInput = prompt('Введіть ширину прямокутника:');
  const heightInput = prompt('Введіть висоту прямокутника:');
  const width = parseFloat(widthInput);
  const height = parseFloat(heightInput);
  const rectangleArea = calcRectangleArea(width, height);

  alert(`Площа прямокутника: ${rectangleArea}`);

}
catch (error) {
  alert(`Error: ${error.message}`);
}

//4.Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//Приклад роботи програми:
//console.log(showMonthName(5));
//May
//console.log(showMonthName(14));
//MonthException Incorrect month number

class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}
function showMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }
  return months[month - 1];

}
try {
  console.log(showMonthName(5));
  console.log(showMonthName(13));

} catch (error) {
  if (error instanceof MonthException) {
    console.log(`${error.name} ${error.message}`);
  } else {
    console.log('Error:', error.message);
  }
}

//5.Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
//Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

//Приклад роботи програми:
//showUsers([7, -12, 44, 22]);
//Error: ID must not be negative: -12
//[ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
  if (id < 0) {
    throw new Error('Invalid value. Id must not be negative')
  }
  return { id: id };
}
function showUsers(ids) {
  const usersId = [];
  for (const id of ids) {
    if (id >= 0) {
      usersId.push({ id: id });
    } else {
      console.log('Error: ID must not be negative:', id);
    }
  }

  return usersId;
}

const users = showUsers([7, -12, 44, 22]);
console.log(users);