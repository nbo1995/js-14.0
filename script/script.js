'use strict'

const start = document.getElementById('start'),//Кнопку "Рассчитать"
    button1 = document.getElementsByTagName('button')[0],//Кнопки “+” (плюс)
    button2 = document.getElementsByTagName('button')[1],//Кнопки “+” (плюс)
    depositCheck = document.querySelector('#deposit-check'),//Чекбокс
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),//Возможный доход(Наименование)

    budgetMonthValue = document.querySelector('.budget_month-value'),//Срок достижения цели в месяцах
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],//Доход за месяц
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],//Дневной бюджет
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],//Расход за месяц
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],//Возможные доходы
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],//Возможные расходы
    targetMonthValue = document.getElementsByClassName('target_month-value')[0];//Накопления за период


const salaryAmount = document.querySelector('.salary-amount');//Месячный доход*(Сумма)
const incomeTitle = document.querySelector('.income-title');//Дополнительный доход(Наименование)
const incomeAmount = document.querySelector('.income-amount');//Дополнительный доход(Сумма)
const expensesTitle = document.querySelector('.expenses-title');//Обязательные расходы(Наименование)
const expensesAmount = document.querySelector('.expenses-amount');//Обязательные расходы(Сумма)
const additionalExpensesItem = document.querySelector('.additional_expenses-item');//Возможные расходы (перечислите через запятую)(Название)
const targetAmount = document.querySelector('.target-amount');//Цель(Сумма)
const periodSelect = document.querySelector('.period-select');//Период расчета

console.log(start);
console.log(button1);
console.log(button2);
console.log(depositCheck);
console.log(additionalIncomeItem);
console.log(budgetMonthValue);
console.log(budgetDayValue);
console.log(expensesMonthValue);
console.log(additionalIncomeValue);
console.log(additionalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);
console.log(salaryAmount);
console.log(incomeTitle);
console.log(incomeAmount);
console.log(expensesTitle);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);



// let isNumber = function (n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let money;

// let startMoney = function () {
//     do {
//         money = prompt('Ваш месячный доход?');
//     }
//     while (!isNumber(money));
// };

// startMoney();


// let appData = {
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 500000,
//     period: 3,
//     budget: +money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function () {

//         if (confirm('Есть ли у Вас доп заработок?')) {
//             let itemIncome;
//             do {
//                 itemIncome = prompt('Какой у Вас дополнительный заработок?', 'таксую');
//             }
//             while (!isNaN(itemIncome) || typeof itemIncome === 'number' || itemIncome === null);

//             let cashIncome;
//             do {
//                 cashIncome = prompt('Сколько в месяц Вы зарабатываете на этом?', 10000);
//             } while (!isNumber(cashIncome));
//             appData.income[itemIncome] = cashIncome;
//         }


//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'оплата квартиры, еда');
//         appData.addExpenses = addExpenses.split(', ').map(word => word[0].toUpperCase() + word.substring(1)).join(', ');
//         appData.deposit = confirm('Есть ли у Вас депозит в банке?');    
//         console.log(addExpenses);

          
          

//         for (let i = 0; i < 2; i++) {
//             let expenses;
//             do {
//                 expenses = prompt('Введите обязательную статью расходов?');
//             }
//             while (!isNaN(expenses) || typeof expenses === 'number' || expenses === null);

//             let amount;

//             do {
//                 amount = prompt('Во сколько это обойдется?');
//             } while (!isNumber(amount));

//             appData.expenses[expenses] = +amount;

//         }
//     },
//     getExpensesMonth: function () {
//         for (let key in appData.expenses) {
//             appData.expensesMonth += appData.expenses[key];
//             console.log(typeof appData.expenses[key]);
//         }

//     },

//     getBudget: function () {
//         appData.budgetMonth = appData.budget - appData.expensesMonth;
//         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     },

//     getTargetMonth: function () {
//         let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
//         if (targetMonth < 0) {
//             console.log('Цель не будет достигнута');
//         } else {
//             console.log('Цель будет достигнута за: ' + targetMonth + ' мес');
//         }
//     },
// Садик, Школа, Институт
//     getStatusIncome: function () {
//         if (appData.budgetDay >= 1200) {
//             console.log('У Вас высокий уровень дохода');
//         } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
//             console.log('У Вас средний уровень дохода');
//         } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
//             console.log('К сожалению, у Вас уровень дохода ниже среднего');
//         } else if (appData.budgetDay <= 0) {
//             console.log('Что-то пошло не так');
//         }
//     },
//     getInfoDeposit: function () {
//         if (appData.deposit) {
//             do {
//                 appData.percentDeposit = prompt('Какой годовой процент?', '10');
//             } while (!isNumber(appData.moneyDeposit));

//             do {
//                 appData.moneyDeposit = prompt('Какой годовой депозит?', 10000);
//             } while (!isNumber(appData.moneyDeposit));
//         }
//     },
//     calcSavedMoney: function () {
//         return appData.budgetMonth * appData.period;
//     }

// };


// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getTargetMonth();
// appData.getStatusIncome();

// console.log('Расходы за месяц: ' + appData.expensesMonth);
// console.log('Бюджет за день: ', appData.budgetDay);

// console.log('Наша программа включает в себя данные: ');


// for (let key in appData) {
//     console.log('Ключ: ', key, ' ', 'Значение: ', appData[key]);
//     if (typeof appData[key] === 'object') {
//         for (let j in appData[key])
//             console.log('Ключ: ', j, ' ', 'Значение: ', appData[key][j]);
//     }
// }
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());