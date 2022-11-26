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
    // const li = document.createElement('li');
    // const div = document.createElement('div');
    // div.innerText = input;
    // li.appendChild(div);
    // todoList.appendChild(li);
    // textField.value = '';

    const newTodo = document.createElement('li');
    newTodo.innerText = input;
    newTodo.addEventListener('click', () => {
      // console.log('click', newTodo.innerText);
      toggleTodo(newTodo);
    });

    // newTodo.addEventListener('click', () => {
    //   console.log('click', newTodo.innerText);
    // });

    todoList.appendChild(newTodo);
    textField.value = '';
  } else {
    console.log('need input');
  }
};

// todoList.querySelectorAll('li').forEach((e) => {
//   e.addEventListener('click', checkTodo);
// });

// todoList.addEventListener('click', (event) => {
//   const todo = event.target;
//   console.log(todo);
//   todo.style.opacity = '0.5';
//   todo.style.textDecoration = 'line-through';

//   // console.log(event);
// });

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

// const checkTodo = () => {
//   console.log('clicked!');
// };

console.log('🚀 todo app started. welcome!', { appEl });
