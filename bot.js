const myDiscriminator = ["0000", "0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "1337"];//حطا التاق هناconst bot = new(require("discord.js")).Client({fetchAllMembers: true});
//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes
const password = "password Here";//بسورد حسابك عليشن الكود يقدر يغير الاسم
const token = "TOKEN Here"; // توكن حسابك
//Toxic Codes
bot.login(token);//Toxic Codes
//Toxic Codes
function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {//Toxic Codes
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password).then((u) => {
      console.log(Date.now(), "Username: " + u.username, "Discriminator: " + u.discriminator);
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch((err) => {//Toxic Codes
      console.log(Date.now(), "An error occurred. Trying again in sixty (60) seconds.");
      setTimeout(changeDiscriminator, 60 * 1e3);
    });//Toxic Codes
  } catch(e) {//Toxic Codes
    console.log(Date.now(), `[${e}] Trying again in 30 seconds.`);
    setTimeout(changeDiscriminator, 30 * 1e3);
  }//Toxic Codes
}//Toxic Codes
 
bot.once("ready", () => {//Toxic Codes
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();//Toxic Codes
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`)
      process.exit();//Toxic Codes
  }//Toxic Codes
});//Toxic Codes
