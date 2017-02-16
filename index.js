const { Wechaty, Message } = require('wechaty');

const wechaty = Wechaty.instance();

wechaty.init();
wechaty.on('message', (message) => {
    console.log(message.from());
    const reply = new Message();
    reply.to(message.from());
    reply.content(`Message received: ${message}`);
    wechaty.send(reply);
});