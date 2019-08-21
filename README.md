# GitHub User Search

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A cross-platform Ionic implementation of the GitHub search API

This application uses the public [GitHub search API](https://developer.github.com/v3/search/) in order to search for users, and is best viewed on mobile.

- Built with the [Ionic Framework](https://ionicframework.com/docs)
- [Capacitor](https://capacitor.ionicframework.com/docs/) is used to compile to Android and iOS and offer native features such as the in-app browser which is demoed in this project
- Protractor, the default end-to-end test runner, has been replaced with [Cypress](https://cypress.io)
- The [GitHub Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all) pattern has been implemented to make it easy to jump into the project and get bootstrapped
- This project has been formatted with [Prettier](https://prettier.io)
- [Firebase](https://firebase.google.com) is used for hosting (you must generate your own `.firebaserc`)

Future enhancements I would make:

- Responsive web design with utilization of whitespace
- Break down UI into components for pagination, the result list, etc.
- Karma unit tests

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Test](#test)
- [Updating](#updating)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

- Replace basic auth config in `src/environments/environment.ts` and `src/environments/environment.prod.ts` to increase API rate limit

```
script/bootstrap
```

## Usage

### PWA

```
script/server
```

### iOS

```
script/ios
```

### Android

```
script/android
```

## Test

```
script/test
```

## Updating

### NPM Dependencies

```
npm update
```

### Angular Dependencies

```
ng update
```

### iOS

https://capacitor.ionicframework.com/docs/ios/updating

### Android

https://capacitor.ionicframework.com/docs/android/updating

## Maintainers

[@devinshoemaker](https://github.com/devinshoemaker)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 Devin Shoemaker
