let handler = async(m, { conn, text, participants }) => {
  let teks = ` ╭─❑ 〔 ıll 𝘛𝖺𝗀 𝘈𝗅𝗅 llı 〕❑─
═══════❍ 
*🌟 𝙋𝙀𝙎𝘼𝙉 𝘿𝘼𝙍𝙄 𝘼𝘿𝙈𝙄𝙉 :* 
*❑─(  ${text ? text : 'Tidak ada pesan'} )─❑*\n_______\n`
		      	for (let mem of participants) {
		            teks += `║┣❏🧋 @${mem.id.split('@')[0]}\n`
				}
                teks += `\n╰────────❑`
                conn.sendMessage(m.chat, {text: teks, mentions: participants.map(a => a.id)}, { quoted: m })
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|tagsemua)$/i

handler.group = true
handler.admin = true
handler.botadmin = true

module.exports = handler
