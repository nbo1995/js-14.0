'use strict';
const DomElement = function(selector, height, width, bg, fontSize, text){
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize,
  this.text = text,
  this.newElem = function(){
    if (selector[0] === '.') {
      let newElement = document.createElement('div');
      newElement.setAttribute("class", this.selector.substr(1));
      newElement.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
      newElement.textContent = this.text;
      document.body.append(newElement);
    } else if (selector[0] === '#') {
      let newElement = document.createElement('p');
      newElement.setAttribute("id", this.selector.substr(1));
      newElement.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
      newElement.textContent = text;
      document.body.append(newElement);
    } else {
        alert('В DomElement selector должен начинаться или с . или с #')
    }
  }
}
const point = new DomElement('.point', 200, 500, 'green', 40, 'selector начинается с точки, создаем div с классом');
const lattice = new DomElement('#lattice', 300, 1200, 'red', 50, 'selector  начинается с решетки # то создаем параграф с id');
point.newElem();
console.log(point);
lattice.newElem();
console.log(lattice);