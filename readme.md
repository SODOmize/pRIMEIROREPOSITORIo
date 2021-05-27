# Romanize names [![Travis CI](https://travis-ci.org/muan/romanize-names.svg?branch=master)](https://travis-ci.org/muan/romanize-names) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Romanizing Chinese names for Taiwan. [It's a :poop: show.](https://en.wikipedia.org/wiki/Chinese_language_romanization_in_Taiwan)

## Install

```
npm install romanize-names
```

## Usage

```javascript
var romanize = require('romanize-names')
romanize(name_in_zhTW, system)
```

`system` String
  - `WG` (default) https://en.wikipedia.org/wiki/Wade%E2%80%93Giles
  - `MPS-II` https://en.wikip