
import _ from 'lodash';
import './style.css'; // 引入css 文件 

function component() { 
  let element = document.createElement('div');

  //  Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello'); // 使用 引入 的 css 文件 

  return element;
}

document.body.appendChild(component());