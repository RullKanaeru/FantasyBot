let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'Halo👋', wm, 'NEXT', '.cevanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = 5

module.exports = handler
