import _ from 'lodash';
import './main.scss';

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.addEventListener('click', () => console.log('click'))
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());