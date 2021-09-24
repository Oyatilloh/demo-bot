const token = '1885888296:AAF6trr3koU-TmJOkrfijTEMR-4wZ2q-J10'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, { polling: true})


bot.on('message', (event) => {
    let msg = event.text
   let chatId = event.chat.id
   let fName = event.from.first_name
   console.log(fName, msg);
   if(msg === '/start'){
       bot.sendMessage(chatId, `Assalomu Alaykum Va Rohmatullohi Va Barokatuh!
       O'zindiz haqingizda ma'lumot qoldiring!
       Ism:
       Qaysi masjidga borishingiz:
       Bog'lanish uchun telegram nomer yoki Useringiz:`)
    }
})