import { injectGlobal } from 'styled-components';
import QuickSandRegular from '../../../assets/fonts/QuickSand-Regular.otf';

injectGlobal`
  @font-face {
    font-family: 'QuickSand-Regular';
    src: url(${QuickSandRegular});
  }

  body {
    background: #fbf7f2;
    font-family: 'QuickSand-Regular', sans-serif;
  }
`;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello world';

  return element;
}

document.body.appendChild(component());