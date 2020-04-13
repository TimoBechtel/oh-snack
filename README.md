<h1 align="center">oh-snack</h1>
<h3 align="center">Simple snackbar notifications</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/oh-snack" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/oh-snack.svg">
  </a>
  <a href="https://github.com/TimoBechtel/oh-snack/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/TimoBechtel/oh-snack" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/TimoBechtel/oh-snack#readme">Homepage</a>
  ·
  <a href="https://timobechtel.github.io/oh-snack">View Demo</a>
  ·
  <a href="https://github.com/TimoBechtel/oh-snack/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## About

`oh-snack` displays stackable snackbar notifications.

## Install

### NPM:

```sh
npm install oh-snack
```

or:

### CDN:

```html
<script src="https://unpkg.com/oh-snack/dist/index.umd.js"></script>
```

## Usage

### Add bundled CSS:

#### Using a bundler:

```javascript
import 'oh-snack/dist/index.css';
```

or:

#### CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/oh-snack/dist/index.css" />
```

### Import module when using NPM:

```javascript
import { snack } from 'oh-snack';
```

### Example:

```javascript
snack("Hi, I'm a snackbar notification 👋");

snack("Hi, I'm a sticky notification.", { timeout: false });
```

### ✨ <a href="https://timobechtel.github.io/oh-snack">View Demo</a>

### API

```typescript
/**
 * Show a snackbar notification
 * @param message Message to display
 * @param config Configuration
 */
function snack(message: string, config?: SnackConfiguration): void;
```

SnackConfiguration:

```typescript
{
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
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/TimoBechtel/oh-snack/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/TimoBechtel/oh-snack/blob/master/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
