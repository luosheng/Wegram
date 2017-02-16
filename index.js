const { Wechaty, Message } = require('wechaty');

const wechaty = Wechaty.instance();

var me = null;

wechaty.init();
wechaty.on('login', (user) => {
    me = user;
});
wechaty.on('message', (message) => {
    const from = message.from();
    if (from.id !== me.id) {
        const reply = new Message();
        reply.to(from);
        reply.content(`Message received: ${message}`);
        wechaty.send(reply);
    }
});