const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.prefix;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('RedSton Code Youtube').setStyle('LINK').setURL('https://www.youtube.com/channel/UCdaJ0CECNiIo5puJny4Htdw');
  const dc = new MessageButton().setLabel('Xertz Code Discord').setStyle('LINK').setURL('https://discord.gg/Se7ZqJyMRP');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`Xertz Code - RedSton v13 Kayıt Botu`)
  .addField(`> .kayıt`,`Kayıt kanalındaki kullanıcıları kayıt eder.`,false)
  .addField(`> .yetkili-rol ayarla/sıfırla`,`kayıt yetkili rolü ayarlar/sıfırlar.`,false)
  .addField(`> .kayıt-rol ayarla/sıfırla`,`kayıt edilince verilecek rolü ayarlar/sıfırlar.`,false)
  .addField(`> .kayıtsız-rol ayarla/sıfırla`,`kayıtsız rolünü ayarlar/sıfırlar.`,false)
  .addField(`> .kayıt-kanal ayarla/sıfırla`,`kaydın yapılacağı kanalı ayarlar/sıfırlar.`,false)
  .addField(`> .kayıt-log ayarla/sıfırla`,`logların gideceği kanalı ayarlar/sıfırlar.`,false)
  .addField(`> .jail-rol ayarla/sıfırla`,`jail rolünü ayarlar/sıfırlar.`,false)
  .addField(`> .jail al`,`jail rolünü alır.`,false)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setColor('YELLOW')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "yardım";