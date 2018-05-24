import { injectGlobal } from 'styled-components';
import QuickSandRegular from '../../../assets/fonts/QuickSand-Regular.otf';

injectGlobal`
  @font-face {
    font-family: 'QuickSand-Regular';
    src: url(${QuickSandRegular});
  }

  body {
    background: #fbf7f2;
    font-family: 'QuickSand-Regular';
  }
`;

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello world';

  return element;
}

document.body.appendChild(component());