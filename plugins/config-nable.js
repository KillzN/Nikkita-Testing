let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.bienvenida = isEnable
      break

    case 'document':
    case 'documento':
      isUser = true
      user.useDocument = isEnable
      break

    case 'modoadmin': case 'soloadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.modoadmin = isEnable
      break

    case 'mododios':
    case 'modogod':
    case 'modorey':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyGod = isEnable
      break

    case 'antibot':
    case 'antibots':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiBot = isEnable;
      break;

    case 'antispam':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.antiSpam = isEnable
      break

    case 'antifake':
    case 'antifakes':
    case 'antiarabes':
    case 'antiarab':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break

    case 'detect': case 'avisos':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break

    case 'autobiografia': case 'bio': case 'biografia': case 'status':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autobio = isEnable
      break

    case 'antiprivado':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.antiPrivate = isEnable
      break

    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.audios = isEnable
      break

    case 'nsfw':
    case 'modohorny':
    case 'modocaliente':
    case 'selajaloaNIKKITA BOT':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
*𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘶𝘯𝘢 𝘰𝘱𝘤𝘪𝘰́𝘯 𝘱𝘢𝘳𝘢 𝘈𝘤𝘵𝘪𝘷𝘢𝘳 𝘰 𝘋𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘳*

「 𝘌𝘯𝘢𝘣𝘭𝘦/𝘋𝘪𝘴𝘢𝘣𝘭𝘦 」 ⚠️

𝘖𝘯/𝘖𝘧𝘧 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 
𝘖𝘯/𝘖𝘧𝘧 𝘥𝘦𝘵𝘦𝘤𝘵 
𝘖𝘯/𝘖𝘧𝘧 𝘯𝘴𝘧𝘸  
𝘖𝘯/𝘖𝘧𝘧 𝘮𝘰𝘥𝘰𝘥𝘪𝘰𝘴
𝘖𝘯/𝘖𝘧𝘧 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯
𝘖𝘯/𝘖𝘧𝘧 𝘮𝘰𝘥𝘰𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬  
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘧𝘢𝘬𝘦𝘴
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘱𝘳𝘪𝘷𝘢𝘥𝘰  
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘣𝘰𝘵𝘴
𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘴𝘱𝘢𝘮

*• 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:*
*- ${usedPrefix + command}* welcome
`.trim())
      throw false
  }
  m.reply(`⚠️ 「 𝘼𝙫𝙞𝙨𝙤 」\n\n> 👾 𝘾𝙤𝙢𝙖𝙣𝙙𝙤: *_${type}_*\n> 👾 *${isEnable ? '𝘈𝘤𝘵𝘪𝘷𝘢𝘥𝘰' : '𝘋𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘥𝘰'}* ${isAll ? '*𝘌𝘯 𝘦𝘴𝘵𝘦 𝘉𝘰𝘵*' : isUser ? '' : '*𝘌𝘯 𝘦𝘴𝘵𝘦 𝘊𝘩𝘢𝘵*'}`)
}

handler.help = ['enable', 'disable']
handler.tags = ['nable']
handler.command = /^(enable|disable|on|off|1|0)$/i

export default handler
