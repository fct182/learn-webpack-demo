import _ from 'lodash';
import './assets/style/style.css';
import demoImg from './assets/img/demo.jpg';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  const img = new Image();
  img.src = demoImg;
  img.className = 'img'

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
