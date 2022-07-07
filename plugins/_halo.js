let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://a.uguu.se/BeHAyoKM.mp4'', m, { packname: "FantasyBot", author: "FantasyBot " })
}

handler.customPrefix = /^(halo|hi|aloo)$/i
handler.command = new RegExp

module.exports = handler
