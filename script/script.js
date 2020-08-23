'use strict'


// Восстановить порядок книг.
const book = document.querySelectorAll('.book');
const books = document.querySelectorAll('.books');

books[0].prepend(book[1]);
book[2].before(book[4]);
books[0].append(book[2]);

console.log(book);

//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage='url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
const removeAdv =document.querySelector('.adv');
removeAdv.remove();

//Восстановить порядок глав во второй и пятой книге 
const list = book[0].querySelectorAll('ul');
const elemsLi = book[0].querySelectorAll('li');

elemsLi[1].remove();
list[0].prepend(elemsLi[1]);
elemsLi[3].after(elemsLi[6]);
elemsLi[4].before(elemsLi[8]);
elemsLi[10].before(elemsLi[2]);

const list5 = book[5].querySelectorAll('ul');
const elemsLi5 = book[5].querySelectorAll('li');

list5[0].prepend(elemsLi5[1]);
elemsLi5[2].after(elemsLi5[9]);
elemsLi5[5].after(elemsLi5[2]);
elemsLi5[8].before(elemsLi5[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
//добавить 8ю главу в шестой книге

const elemsLi6 = book[2].querySelectorAll('li');
const newElem = document.createElement('li');

newElem.textContent = 'Глава 8: За пределами ES6';
elemsLi6[8].after(newElem);