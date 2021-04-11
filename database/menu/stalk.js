const stalk = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info (Info Del Bot)
  ├─ ❏ ${prefix}blocklist (Lista De Usuarios Bloqueados)
  ├─ ❏ ${prefix}chatlist (Lista De Chat)
  ├─ ❏ ${prefix}ping (Velocidad Del Bot)
  └─ ❏ ${prefix}bugreport (Reportar Bug)
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk`
}
exports.stalk = stalk
