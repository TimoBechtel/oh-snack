import './main.scss';
import './defaultTheme.scss';

const snackContainer = {
  topLeft: null,
  topCenter: null,
  topRight: null,
  bottomRight: null,
  bottomCenter: null,
  bottomLeft: null,
};

const createOrGetContainer = (position = 'bottomCenter') => {
  if (!snackContainer[position]) {
    snackContainer[position] = document.createElement('div');
    snackContainer[
      position
    ].className = `oh-snack-container os-${position.toLowerCase()}`;
    document.body.appendChild(snackContainer[position]);
  }
  return snackContainer[position];
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
  content.className = 'os-content';
  const header = document.createElement('div');
  header.className = 'os-header';
  header.appendChild(textElement);
  content.appendChild(header);
  element.appendChild(content);
  const toppings = document.createElement('div');
  toppings.className = 'os-toppings';
  content.appendChild(toppings);
  container.appendChild(element);
  return {
    addTopping({ label, className, action }) {
      let htmlElement;
      if (typeof action === 'string') {
        htmlElement = document.createElement('a');
        htmlElement.href = action;
      } else {
        htmlElement = document.createElement('button');
        htmlElement.addEventListener('click', () => action(this));
      }
      htmlElement.innerHTML = label;
      htmlElement.className = className;
      if (className === 'os-close') {
        header.appendChild(htmlElement);
      } else {
        toppings.appendChild(htmlElement);
      }
    },
    show() {
      element.classList.add(showAnimationClass);
      element.classList.remove(hideAnimationClass);
    },
    hide(destroy) {
      element.classList.add(hideAnimationClass);
      element.classList.remove(showAnimationClass);
      if (destroy === true)
        setTimeout(() => {
          this.destroy();
        }, 500);
    },
    destroy() {
      element.parentElement.removeChild(element);
    },
  };
};

export const snack = (
  text,
  {
    position = 'bottomCenter',
    timeout = 2800,
    closeable = !timeout,
    showAnimationClass = 'os-show-default',
    hideAnimationClass = 'os-hide-default',
    toppings = [],
  } = {}
) => {
  const toast = createSnack(text, {
    container: createOrGetContainer(position),
    showAnimationClass,
    hideAnimationClass,
  });
  let currentTimeout;
  if (closeable) {
    toast.addTopping({
      label: '&times;',
      className: 'os-close',
      action: (toast) => {
        clearTimeout(currentTimeout);
        toast.hide(true);
      },
    });
  }
  toppings.forEach((topping) => {
    toast.addTopping(topping);
  });
  toast.show();
  if (timeout)
    currentTimeout = setTimeout(() => {
      toast.hide();
    }, timeout);
};
