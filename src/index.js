import './styles.scss';

const appEl = document.querySelector('div.app');
const headingEl = document.createElement('h2');
headingEl.innerText = 'My Todos';

appEl.innerText = '';
appEl.appendChild(headingEl);

const textField = document.createElement('input');
const submitButton = document.createElement('button');
submitButton.innerText = 'Add Todo';
const todoList = document.createElement('ul');

appEl.appendChild(textField);
appEl.appendChild(submitButton);
appEl.appendChild(todoList);

const addTodo = () => {
  let input = textField.value;
  if (input) {
    const newTodo = document.createElement('li');
    newTodo.innerText = input;
    newTodo.addEventListener('click', () => {
      toggleTodo(newTodo);
    });

    todoList.insertBefore(newTodo, todoList.children[0]);
    textField.value = '';
  } else {
    console.log('no input given');
  }
};

submitButton.addEventListener('click', addTodo);
textField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

const toggleTodo = (todoEl) => {
  if (todoEl.classList.contains('done')) {
    todoEl.classList.remove('done');
    todoList.removeChild(todoEl);
    todoList.insertBefore(todoEl, todoList.children[0]);
  } else {
    todoEl.classList.add('done');
    todoList.removeChild(todoEl);
    todoList.insertBefore(todoEl, todoList.children[todoList.length]);
  }
};

console.log('🚀 todo app started. welcome!', { appEl });
