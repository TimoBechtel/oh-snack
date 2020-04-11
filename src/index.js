import './main.scss';
import './defaultTheme.scss';

let snackContainer;

const createOrGetContainer = () => {
  if (!snackContainer) {
    snackContainer = document.createElement('div');
    snackContainer.className = 'oh-snack-container';
    document.body.appendChild(snackContainer);
  }
  return snackContainer;
};

export const snack = (text, duration = 2800) => {
  let snackElement = document.createElement('div');
  snackElement.innerHTML = text;
  snackElement.className = 'oh-snack';
  createOrGetContainer().appendChild(snackElement);
  setTimeout(() => {
    snackElement.className += ' os-show';
    setTimeout(() => {
      snackElement.className = snackElement.className.replace('os-show', '');
      setTimeout(() => {
        createOrGetContainer().removeChild(snackElement);
      }, 500);
    }, duration);
  }, 10);
};
