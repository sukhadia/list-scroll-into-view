// Import stylesheets
import './style.css';
let i = 0;
// Write TypeScript code!
const buttonEl: HTMLElement = document.getElementById('scroll-btn');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
buttonEl.addEventListener('click', scrollItemDown);

const buttonElUp: HTMLElement = document.getElementById('scroll-btn-up');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
buttonElUp.addEventListener('click', scrollItemUp);


function scrollItemDown() {
  let listItemsColl = document.getElementsByClassName('list-item');
  let listItems = Array.prototype.slice.call(listItemsColl);
  i = (i < listItems.length - 1)? (i+1) : 0;
  listItems.forEach(li => li.classList.remove('active'));
  listItems[i].classList.add('active');
  listItems[i].scrollIntoView();
}

function scrollItemUp() {
  let listItemsColl = document.getElementsByClassName('list-item');
  let listItems = Array.prototype.slice.call(listItemsColl);
  i = (i > 0)? (i-1) : (listItems.length - 1);
  listItems.forEach(li => li.classList.remove('active'));
  listItems[i].classList.add('active');
  listItems[i].scrollIntoView();
}
