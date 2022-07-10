let handler = async (m, { conn,isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    for (let i of anu) {
    conn.send3ButtonImg(i, 'https://telegra.ph/file/3a6a2e2fd837a8c692706.jpg', pesan, wm, 'Menu', '.menu', 'Owner', '.owner', 'Sewa', '.sewabot')
    }
  m.reply(`✅Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgc2 <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc2|bcgc2)$/i

handler.owner = true

module.exports = handler
