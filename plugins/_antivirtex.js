let handler = m => m

handler.before = function (m, { user, text }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antivirtex && text > 2000) {
    this.reply(m.chat `
*「 💀ANTI VIRTEX 」*

❗ Terdeteksi *${name}* telah mengirim virtex!

Maaf Kamu akan dikick dari grup ini!
`.trim(), m)

    this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.group = true
handler.register = true

module.exports = handler
