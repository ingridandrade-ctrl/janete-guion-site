# Janete Guion — Landing Page

Site institucional de **Janete Guion** · Psicóloga · Psicoterapeuta Psicanalítica · Equoterapeuta (CRP 06/153652).

Atendimento online para todo o Brasil e presencial em Pirassununga, SP.

## Stack

- HTML5 + CSS3 puro (sem frameworks)
- JavaScript vanilla (menu mobile, nav com blur, reveal on scroll)
- Tipografia: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (títulos) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (corpo)
- Totalmente responsivo (desktop · tablet · mobile com menu hambúrguer)

## Estrutura

```
.
├── index.html      # todas as seções da landing page
├── styles.css      # design system completo + responsivo
├── script.js       # interações (nav, menu, animações)
├── vercel.json     # config de deploy (static, headers de segurança)
└── README.md
```

## Rodar localmente

É um site estático — basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Paleta

| Cor | Hex | Uso |
|---|---|---|
| Creme | `#F0EBE1` | Fundo principal |
| Bordô | `#7A1F2E` | Cor primária |
| Verde | `#3B5E3A` | Detalhes |
| Tinta | `#1A0A06` | Texto |
| Marrom | `#5C4A3A` | Texto secundário |

## Itens para personalizar

- **Fotos:** atualmente placeholders do Unsplash (hero e seção "Sobre"). Substituir pelas fotos reais da Janete em `index.html`.
- **WhatsApp:** todos os botões apontam para `https://wa.me/55`. Adicionar o número completo (ex.: `https://wa.me/5519999999999`).

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e clique em **Add New → Project**.
2. Importe o repositório `janete-guion-site`.
3. Framework Preset: **Other** (site estático — sem build).
4. Clique em **Deploy**. A cada `git push` na branch principal, a Vercel publica automaticamente.
