const Discord = require("discord.js");
const low = require("lowdb")
const fileSync = require("lowdb/adapters/FileSync")

const adapter = new fileSync("database.json")
const db = low(adapter);

db.defaults({ histoire: []});

var bot = new Discord.Client();
var prefix = ("k.");
var randnum = 0
bot.on("ready",() =>{
    bot.user.setPresence({ game: { name: "[k.help] [Dev]", type: 0}})
    console.log("Bot Ready !");
})

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "T ki ?"){
        message.reply("Ta mère pd. Alors maintenant retourne ranger ta chambre avant que j'appelle ton père.")
        console.log("C'pô kool");
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#E9E101")
        .addField("Commandes du KoroBoat :", "    - **k.help** : Affiche les commandes du Bot.")
        .addField("Interraction :", "    - *t ki ?* : Le bot répond quelque chose de drôle.\n- *Comment vas tu Koro ?* : Essayes et tu verras.")
       message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n - *!help* : Pour afficher les commandes du bot");
        console.log("Commande Help demandée !");
    }

    if (message.content === "Comment vas tu Koro ?"){
        random();

        if (randnum == 0){
            message.reply("Raaaah, ta gueule toi.")
            console.log(randnum);
        }

        if (randnum == 1){
            message.reply("Je vais bien, merci.")
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Non, je ne me sens pas très bien désolé...")
            console.log(randnum);
        }

        if (randnum == 3){
            message.reply("J'ai la flemme de te répondre, alors mon bot le fait à ma place c:")
            console.log(randnum);
        }
    }
});

function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
