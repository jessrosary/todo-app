import './styles.scss';

const appEl = document.querySelector('div.app');
const headingEl = document.createElement('h2');
headingEl.innerText = 'My Todos';

appEl.innerText = '';
appEl.appendChild(headingEl);

const textField = document.createElement('input');
const submitButton = document.createElement('button');
submitButton.innerText = 'Add Todo';

appEl.appendChild(textField);
appEl.appendChild(submitButton);

console.log('🚀 todo app started. welcome!', { appEl });
