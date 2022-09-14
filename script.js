let elForm = document.querySelector(".shopping-form");
let elInput = document.querySelector(".product-taker");
let elList = document.querySelector(".shopping-list");
let arrayList = [];
let resultArrList = [];

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let elInputValue = elInput.value;
  elInput.value = "";
  
  arrayList.push(elInputValue);
  localStorage.setItem('products', arrayList);

  let itemGetter = localStorage.getItem('products');
  resultArrList.push(itemGetter);
  
  let newLi = document.createElement("li");
  newLi.textContent = itemGetter;
  elList.innerHTML = '';
  elList.appendChild(newLi);
}) 
let itemGetter = localStorage.getItem('products');
  resultArrList.push(itemGetter);

let newLi = document.createElement("li");
  newLi.textContent = itemGetter;
  elList.innerHTML = '';
  elList.appendChild(newLi);