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

const createSnack = (
  text,
  { container, showAnimationClass = '', hideAnimationClass = '' }
) => {
  const element = document.createElement('div');
  element.className = 'oh-snack';
  const textElement = document.createElement('p');
  textElement.innerHTML = text;
  const content = document.createElement('div');
  content.appendChild(textElement);
  content.className = 'os-content';
  element.appendChild(content);
  container.appendChild(element);
  return {
    addTopping(htmlElement) {
      content.appendChild(htmlElement);
    },
    show() {
      element.classList.add(showAnimationClass);
    },
    hide() {
      element.classList.add(hideAnimationClass);
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

export const snack = (
  text,
  {
    timeout = 2800,
    closeable = !timeout,
    showAnimationClass = 'os-show-default',
    hideAnimationClass = 'os-hide-default',
  } = {}
) => {
  const toast = createSnack(text, {
    container: createOrGetContainer(),
    showAnimationClass,
    hideAnimationClass,
  });
  let currentTimeout;
  if (closeable) {
    const button = createButton('&times;', () => {
      clearTimeout(currentTimeout);
      toast.hide();
    });
    button.className = 'os-close';
    toast.addTopping(button);
  }
  toast.show();
  if (timeout)
    timeout = setTimeout(() => {
      toast.hide();
    }, timeout);
};
