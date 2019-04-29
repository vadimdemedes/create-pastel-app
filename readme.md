# create-pastel-app [![Build Status](https://travis-ci.com/vadimdemedes/create-pastel-app.svg?branch=master)](https://travis-ci.com/vadimdemedes/create-pastel-app)

> Generate a starter Pastel app


## Install

```
$ npm install create-pastel-app
```


## Usage

```js
const createPastelApp = require('create-pastel-app');

createPastelApp('unicorns');
//=> 'unicorns & rainbows'
```


## API

### createPastelApp(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global create-pastel-app
```

```
$ create-pastel-app --help

  Usage
    create-pastel-app [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ create-pastel-app
    unicorns & rainbows
    $ create-pastel-app ponies
    ponies & rainbows
```


## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
