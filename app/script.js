// script.js
const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');

// Array to store items
let items = [];

// Add event listener for form submission
itemForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const itemNameInput = document.getElementById('itemName');
  const itemName = itemNameInput.value.trim();
  if (itemName !== '') {
    addItem(itemName);
    itemNameInput.value = '';
  }
});

// Function to add an item
function addItem(name) {
  const item = {
    id: Date.now().toString(),
    name: name
  };
  items.push(item);
  renderItems();
}

// Function to render items
function renderItems() {
  itemList.innerHTML = '';
  items.forEach(function(item) {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <button class="delete" onclick="deleteItem('${item.id}')">Delete</button>`;
    itemList.appendChild(li);
  });
}

// Function to delete an item
function deleteItem(id) {
  items = items.filter(function(item) {
    return item.id !== id;
  });
  renderItems();
}
