let handler =  m => m.reply(`
╭─「 Donasi • Dana 」
│ • axis [6283813417529]
│ • Dana  [6283813417529]
│ • Ovo [082287750102]
│ • Gopay [082287750102]
│ • https://saweria.co/
╰────
╭─「 *NOTE* 」
│ > Ingin donasi/sewa? Wa.me/6282146218274
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24 jam tanpa kendala_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^sewa|dona(te|si)$/i

export default handler
