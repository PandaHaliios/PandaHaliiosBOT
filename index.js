const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "."; 

Client.on("ready", () =>{
    console.log("Bot ON");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return; 
    //.mora
    if(message.content === prefix + "mora"){
         message.reply("La princesse des chouchous !")
    }
    else if(message.content === prefix + "help"){
        message.channel.send("**__Les commandes du bot__**\n - .mora ")
    }
});

Client.login(process.env.TOKEN); 