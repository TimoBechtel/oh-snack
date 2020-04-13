declare module 'oh-snack';

interface SnackConfiguration {
  /**
   * Timeout in milliseconds after which notification is hidden.
   * Set to false to enable sticky notification.
   * @default 2800
   */
  timeout?: number | false;
  /**
   * Defines Whether a close button is shown
   * @default !timeout
   */
  closeable?: boolean;
  /**
   * Show animation class
   * @default 'os-show-default'
   */
  showAnimationClass?: string;
  /**
   * Hide animation class
   * @default 'os-hide-default'
   */
  hideAnimationClass?: string;
}

/**
 * Show a snackbar notification
 * @param message Message to display
 * @param config Configuration
 */
export function snack(message: string, config?: SnackConfiguration): void;
