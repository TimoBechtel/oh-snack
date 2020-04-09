import './main.scss';
import './defaultTheme.scss';

let snackElement;

export const snack = (text, duration = 2800) => {
  if (!snackElement) {
    snackElement = document.createElement('div');
    snackElement.className;
    document.body.appendChild(snackElement);
  }
  snackElement.innerHTML = text;
  snackElement.className = 'oh-snack os-show';
  setTimeout(() => {
    snackElement.className = snackElement.className.replace('os-show', '');
  }, duration);
};
