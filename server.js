const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
var spamtoggle = false;
var spamtimer = setInterval(spam, 1000);
var channel;

bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {    
  console.log('message!');// When a message is created
  if (msg.content === '!son') {                 // If the message content includes "1337"
    spamtoggle = true; 
    console.log('true!');
    //bot.createMessage(msg.channel.id, 'true');
    channel = msg.channel.id;
    console.log(channel);
  } else if (msg.content === '!soff') {
    clearInterval();
    spamtoggle = false;
    clearInterval(spamtimer);
    console.log('false!');
    //bot.createMessage(msg.channel.id, 'false');
  } else if (msg.content === '!status') {
    bot.createMessage(msg.channel.id, spamtoggle);
    bot.createMessage(msg.channel.id, msg.channel.id);
  } else {
    clearInterval(spamtimer);
  }
  
  if (spamtoggle == false) {
    clearInterval(spamtimer);
  } else if (spamtoggle == true) {
    spamtimer = setInterval(spam, 500);
  }
});
 
bot.connect();                                         // Get the bot to connect to Discord
clearInterval(spamtimer);

function spam() {
  console.log(channel);
  bot.createMessage(channel, 'spawn');
}