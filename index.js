const { Wechaty } = require('wechaty');

Wechaty.instance()
.on('message', (message) => {
    console.log(message);
})
.init();