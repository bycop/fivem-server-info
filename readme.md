# fivem-server-info
<a href="https://www.npmjs.com/package/fivem-server-info"><img src="https://img.shields.io/npm/dt/fivem-server-info.svg?maxAge=3600" alt="NPM downloads" /></a>

## About

Package allowing to get information from a FiveM server using its ip

## Installation

```sh-session
npm install fivem-server-info
```

## usage

```js
const fivem = require('fivem-server-info');

fivem.connected_users("IP", "Optional port"); //Set to 30120 if null
fivem.max_users("IP", "Optional port"); //Set to 30120 if null
fivem.user_list("IP", "Optional port"); //Set to 30120 if null
```

### Example
```js
const fivem = require('fivem-server-info');

async function example() {
    const connect = await fivem.connected_users("extinction5.gtaliferp.fr");
    const max = await fivem.max_users("extinction5.gtaliferp.fr");
    console.log(connect + "/" + max);
    const list = await fivem.user_list("extinction5.gtaliferp.fr");
    console.log(list)
}

example();
```

### With port
```js
const fivem = require('fivem-server-info');

async function example() {
    const connect = await fivem.connected_users("extinction5.gtaliferp.fr", 30120);
    const max = await fivem.max_users("extinction5.gtaliferp.fr", 30120);
    console.log(connect + "/" + max);
    const list = await fivem.user_list("extinction5.gtaliferp.fr", 30120);
    console.log(list)
}

example();
```

## Support
If you have any idea or feature suggestion do not hesitate to open issue on the github page or contact me on Discord: <b>Bycop#4757</b>
