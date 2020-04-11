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

const createSnack = (text, parent) => {
  const element = document.createElement('div');
  element.className = 'oh-snack';
  const textElement = document.createElement('p');
  textElement.innerHTML = text;
  const content = document.createElement('div');
  content.appendChild(textElement);
  content.className = 'os-content';
  element.appendChild(content);
  parent.appendChild(element);
  return {
    addTopping(htmlElement) {
      content.appendChild(htmlElement);
    },
    show() {
      element.className += ' os-show';
    },
    hide() {
      element.className = element.className.replace('os-show', '');
      setTimeout(() => {
        this.destroy();
      }, 500);
    },
    destroy() {
      element.parentElement.removeChild(element);
    },
  };
};

const createButton = (label, action) => {
  const button = document.createElement('button');
  button.innerHTML = label;
  button.addEventListener('click', action);
  return button;
};

export const snack = (text, duration) => {
  const toast = createSnack(text, createOrGetContainer());
  if (!duration) {
    const button = createButton('&times;', () => toast.hide());
    button.className = 'os-close';
    toast.addTopping(button);
  }
  setTimeout(() => {
    toast.show();
    if (duration)
      setTimeout(() => {
        toast.hide();
      }, duration);
  }, 10);
};
