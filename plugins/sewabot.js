let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6285785845416@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 30.000
Rp. 35.000 Pulsa

2. Premium / 30 Hari
Rp. 40.000 Dana
Rp. 45.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 60.000 Dana
Rp. 65.000 Pulsa

4.Permanent Sewa
Rp. 100.000 Pulsa/Dana

wa.me/${owner[0]}
*❌Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sewa Bot',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'0'}]}],
  headerImage: { productId: '0',
  jpegThumbnail: baper },
  businessOwnerJid: `6285785845416@s.whatsapp.net`
  },
  footerText: 'https://wa.me/6285785845416',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|nyewabot)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }