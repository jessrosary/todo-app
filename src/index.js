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

    todoList.appendChild(newTodo);
    textField.value = '';
  } else {
    console.log('need input');
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
  } else {
    todoEl.classList.add('done');
  }
};

console.log('🚀 todo app started. welcome!', { appEl });
