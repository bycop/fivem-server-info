# fivem-server-info

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
```

### Example
```js
const fivem = require('fivem-server-info');

async function example() {
    const connect = await fivem.connected_users("extinction5.gtaliferp.fr");
    const max = await fivem.max_users("extinction5.gtaliferp.fr");
    console.log(connect + "/" + max);
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
}

example();
```

## Support
If you have any idea or feature suggestion do not hesitate to open issue on the github page or contact me on Discord: <b>Bycop#4757</b>