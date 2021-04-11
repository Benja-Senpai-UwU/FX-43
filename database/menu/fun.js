const fun = (prefix, ownerBot, botName) => {
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
◪ *FUN*
  │
  ├─ ❏ ${prefix}alay
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}game
  ├─ ❏ ${prefix}bucin
  ├─ ❏ ${prefix}trust
  ├─ ❏ ${prefix}dare
  └─ ❏ ${prefix}simi`
}
exports.fun = fun
