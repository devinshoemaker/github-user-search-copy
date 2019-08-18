# GitHub User Search

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A cross-platform Ionic implementation of the GitHub search API

This application uses the public [GitHub search API](https://developer.github.com/v3/search/) in order to search for users. It is built with the [Ionic Framework](https://ionicframework.com/docs) and uses [Capacitor](https://capacitor.ionicframework.com/docs/) to compile to Android and iOS. Protractor, the default end-to-end test runner has been replaced with Cypress. The [GitHub Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all) pattern has been implemented to make it easy to jump into the project and get bootstrapped. [Cypress](https://cypress.io) is used for e2e testing, and finally, this project has been formatted with [Prettier](https://prettier.io).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Test](#test)
- [Updating](#updating)
- [Deploy](#deploy)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

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
