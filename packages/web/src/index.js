import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'QuickSand-Regular';
    src: url('../../../assets/fonts/QuickSand-Regular.otf');
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