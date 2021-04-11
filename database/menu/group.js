const group = (prefix, ownerBot, botName) => {
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
◪ *GROUP*
  │
  ├─ ❏ ${prefix}opengc
  ├─ ❏ ${prefix}closegc
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}tagall3
  ├─ ❏ ${prefix}tagall4
  ├─ ❏ ${prefix}tagall5
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}listadmins
  ├─ ❏ ${prefix}linkgroup
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}welcome
  ├─ ❏ ${prefix}nsfw
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}delete
  ├─ ❏ ${prefix}simih
  └─ ❏ ${prefix}ownergroup`
}
exports.group = group
