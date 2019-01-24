'use strict';

const store = (function () {

  const foo = 'bar';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems = false;
  let searchTerm =  '';

  const findById = function (id) {

    return items.find((i) => { return i.id === id; });
  };

  const addItem = function (name) {

    try {
      Item.validateName(name);
      items.push(Item.create(name));
    } catch (err) {
      console.log('Cannot add item:', err.message);
    }
  };

  const findAndToggleChecked = function (id) {

    const item = findById(id);

    item.checked = !item.checked;
  };

  const findAndUpdateName = function (id, name) {

    try {
      Item.validateName(name);
      const item = findById(id);
      item.name = name;
    } catch (err) {
      console.log(`Cannot update name: ${err.message}`);
    }
  };

  const findAndDelete = function (id) {

    const index = items.findIndex((i) => { return i.id === id; });

    items.splice(index, 1);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName,
  };
}());
