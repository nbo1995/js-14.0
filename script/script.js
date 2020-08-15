'use strict';
// Весь функционал что был ранее оставляем, если что то необходимо удалить, об этом будет написано в задании;
let income = 'Фриланс'
  , mission = 2000000
  , period = 3;



console.log(typeof income);

console.log(income.length);

console.log('Период ' + period + ' месяца');
console.log(`Цель заработать ${mission} Рублей`);

// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money;
let money = +prompt('Ваш месячный доход?', 40000);
console.log(typeof money);

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);


// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные ;
/*
  1. Введите обязательную статью расходов ? ”(например expenses1, expenses2)
  2 Во сколько это обойдется ? ”(например amount1, amount2)
    в итоге 4 вопроса и 4 разные переменных
*/
let expenses1 = +prompt('Введите обязательную статью расходов?')
  , expenses2 = +prompt('Введите обязательную статью расходов?')
  , amount1 = prompt('Во сколько это обойдется ?')
  , amount2 = prompt('Во сколько это обойдется ?');



// Написать конструкцию условий (расчеты приведены в рублях)
/*
1. Если budgetDay больше 1200, то“ У вас высокий уровень дохода”
2. Если budgetDay больше 600 и меньше 1200, то сообщение“ У вас средний уровень дохода”
3. Если budgetDay меньше 600 то в консоль вывести сообщение“ К сожалению у вас уровень дохода ниже среднего”
4. Если отрицательное значение то вывести“ Что то пошло не так”
5. Учесть варианты 0, 600 и 1200
*/


// Урок 3 Начало
let showTypeOf = function(data) {
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц;
let getExpensesMonth = function (spending) {
  console.log(spending, typeof (spending));
};
getExpensesMonth(expenses1 + expenses2);

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы);
// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth ;
let getAccumulatedMonth = function (accumulatedMonth) {
  console.log(accumulatedMonth, typeof (accumulatedMonth));
};
getAccumulatedMonth(money - expenses1 - expenses2);


// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат;
let accumulatedMonth = function (purpose) {
  console.log(Math.ceil(purpose), ' месяца необходимо для достижения цели');
};
accumulatedMonth((money - expenses1 - expenses2) / period);

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth);
let budgetDay = function (budget) {
  console.log(budget, ' ежедневный доход');
}
budgetDay(Math.floor((money - expenses1 - expenses2) / 30));


// Урок 3 Конец

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 600) {
  console.log('К сожалению, у Вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что то пошло не так');
};


// Результаты
console.log('Заработная плата за месяц: ' + money); // Месячный доход
console.log('Дополнительный доход: ' + income); 
console.log('Расходы: ' + addExpenses); // Перечислите возможные расходы за рассчитываемый период через запятую
console.log('Наличие депозита в банке: ' + deposit); // Есть ли у вас депозит в банке?
console.log('Финансовая цель: ' + mission); // Финансовая цель
console.log('Цель будет достигнута за: ' + period); // за сколько месяцев будет достигнута цель округляя в большую сторону
console.log(expenses1); // обязательная статья расходов
console.log(expenses2); // обязательная статья расходов
console.log(amount1); // Во сколько это обойдется
console.log(amount2); // Во сколько это обойдется





