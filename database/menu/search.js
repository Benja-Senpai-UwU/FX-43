const search = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info (Info Del Bot)
  ├─ ❏ ${prefix}blocklist (Lista De Usuarios Bloqueados)
  ├─ ❏ ${prefix}chatlist (Lista De Chat)
  ├─ ❏ ${prefix}ping (Velocidad Del Bot)
  └─ ❏ ${prefix}bugreport (Reportar Bug)
◪ *Search*
  │
  ├─ ❏ ${prefix}wait
  ├─ ❏ ${prefix}ytsearch
  ├─ ❏ ${prefix}trendtwit
  ├─ ❏ ${prefix}wikien
  ├─ ❏ ${prefix}wiki
  └─ ❏ ${prefix}neonime`
}
exports.search = search
