/* global shoppingList, cuid */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();


  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();



});

console.log(store);
console.log(foo);

console.log(Item);
console.log(foo);
