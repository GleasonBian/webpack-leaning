
import _ from 'lodash';//引入咯大师
import './style.css'; // 引入css 文件
import Icon from './icon.png' 

function component() { 
  let element = document.createElement('div');

  //  Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  
  // 使用 引入 的 css 文件
  element.classList.add('hello'); 
  
  // 将图像添加到我们现有的 div.
  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());