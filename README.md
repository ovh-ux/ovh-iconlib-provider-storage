# Icon Library - Storage Provider

[![Build Status](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-storage.svg?branch=master)](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-storage)
[![Coverage Status](https://coveralls.io/repos/github/ovh-ux/ovh-iconlib-provider-storage/badge.svg?branch=readme)](https://coveralls.io/github/ovh-ux/ovh-iconlib-provider-storage?branch=readme)

[![NPM](https://nodei.co/npm/ovh-iconlib-provider-storage.png)](https://nodei.co/npm/ovh-iconlib-provider-storage/)

Storage Provider used to define a contract for all storage process in the Icon Library project.

## StorageBaseProvider

### Methods to implement

- `abstract` `class` StorageBaseProvider
    - `abstract` `function` list(`string` path)
    - `abstract` `function` upload(`Stream` stream, `Object` options)
    - `abstract` `function` download(`string` filepath)
    - `abstract` `function` remove(`string` filepath)

### Implementations

- [oss](https://github.com/ovh-ux/ovh-iconlib-provider-storage-oss#readme) (ovh-iconlib-provider-storage-oss)

## License

See [`LICENSE`](LICENSE) file

---

# OSS example

## Installation

```sh
npm install --save ovh-iconlib-provider-storage ovh-iconlib-provider-storage-oss
```

## Configuration

```yaml
# config.yml
---
connections:
    -
        name: test
        authUrl: ${OSS_AUTH_URL}
        username: ${OSS_USERNAME}
        password: ${OSS_PASSWORD}
        region: ${OSS_REGION}
        container: ${OSS_CONTAINER}
storage:
   default: oss
   providers:
     -
       name: oss
       type: ovh-iconlib-provider-storage-oss
       connection: test
```

## Usage

```js
// default provider instance loaded according to the configuration
const storage = require('ovh-iconlib-provider-storage').getInstance(); 
```

```js
// get files
storage.list()
    .then(files => {
        files.forEach(file =>  {
            ...
        });
    });
```

```js
// upload file
let stream = ...;
storage.upload(stream, {name: 'example.txt'})
    .then(fileInfo => {
        ...
    });
```

```js
// remove file
storage.remove('example.txt')
    .then(removed => {
        ...
    });
```
