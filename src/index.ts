import type { SnackConfiguration } from './configuration';
import './defaultTheme.scss';
import './main.scss';

/**
 * Show a snackbar notification
 * @param message Message to display
 * @param config Configuration
 */
export function snack(
  message: string,
  {
    position = 'bottomCenter',
    timeout = 2800,
    closeable = !timeout,
    showAnimationClass = 'os-show-default',
    hideAnimationClass = 'os-hide-default',
  }: SnackConfiguration = {}
): void {
  const toast = createSnack(message, {
    container: createOrGetContainer(position),
    showAnimationClass,
    hideAnimationClass,
  });
  let currentTimeout: number;
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
    setTimeout(() => {
      toast.hide();
    }, timeout);
}

const snackContainer = {
  topLeft: null,
  topCenter: null,
  topRight: null,
  bottomRight: null,
  bottomCenter: null,
  bottomLeft: null,
};

function createOrGetContainer(position = 'bottomCenter') {
  if (!snackContainer[position]) {
    snackContainer[position] = document.createElement('div');
    snackContainer[
      position
    ].className = `oh-snack-container os-${position.toLowerCase()}`;
    document.body.appendChild(snackContainer[position]);
  }
  return snackContainer[position];
}

function createSnack(
  text: string,
  { container, showAnimationClass = '', hideAnimationClass = '' }
) {
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
    addTopping(htmlElement: HTMLElement) {
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
}

const createButton = (
  label: string,
  action: (this: HTMLButtonElement, ev: MouseEvent) => any
) => {
  const button = document.createElement('button');
  button.innerHTML = label;
  button.addEventListener('click', action);
  return button;
};
