const { Wechaty, Message } = require('wechaty');
const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const wechaty = Wechaty.instance();
const telegram = new TelegramBot(config.get('telegram.token'), { polling: true });

var me = null;

wechaty.init();
wechaty.on('login', (user) => {
    me = user;
});
wechaty.on('message', (message) => {
    const from = message.from();
    if (from.id !== me.id) {
        telegram.sendMessage(config.get('telegram.userId'), `${ message }`);
    }
});

telegram.on('message', (message) => {
    console.log(message);
});