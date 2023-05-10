import _ from 'lodash';
import './assets/style/style.css';
import demoImg from './assets/img/demo.jpg';
// 默认支持JSON文件
import jsonData from './assets/json/demo.json';

// csv
import csvData from './assets/test.csv';
// xml
import xmlData from './assets/test.xml';

import printMe from './print';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const img = new Image();
  img.src = demoImg;
  img.className = 'img';
  element.appendChild(img);

  const btn = document.createElement('button');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

console.log('jsonData', jsonData);
console.log('csvData', csvData);
console.log('xmlData', xmlData);
