let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let now = new Date() * 1
    
    m.reply(`
β *π¬Daftar Chat Terbanned*
β βTotal : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
β ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β ${jid}
`.trim()).join('\n') : ''}
βββββ

β *π¬Daftar User Terbanned*
β βTotal : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
β ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
β wa.me/${jid.split('@')[0]}
β ${(global.db.data.users[jid].bannedDate - now) > 1 ? msToDate(global.db.data.users[jid].bannedDate - now) : '*Permanen!*'}
`.trim()).join('\n') : ''}
βββββ
`.trim())
}
handler.help = ['listbanned']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
module.exports = handler


function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
