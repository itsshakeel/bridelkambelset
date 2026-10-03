# Bridal Kambal Set — Demo Website

A premium, fully responsive demo storefront for a bridal bedding business
(14-piece velvet & palachi razai sets, cash on delivery across Pakistan).

**Live demo:** enable GitHub Pages on `main` → served from the repo root.

## Structure

```
index.html   — page markup (hero, collection, set contents, reviews, FAQ, contact)
style.css    — maroon + gold bridal theme, responsive
script.js    — mobile menu, product filters, testimonial slider, FAQ, WhatsApp order links
images/      — hero + product photography (AI-generated placeholders)
```

No build step — open `index.html` directly or serve statically.

## Demo placeholders to replace before going live

| Placeholder | Where |
|---|---|
| WhatsApp number `923001234567` | `script.js` → `WHATSAPP_NUMBER` (all order buttons + float use it) |
| Phone `0300-1234567`, location "Rawalpindi, Pakistan" | `index.html` contact section |
| Prices, stats, testimonials | `index.html` (clearly sample content) |

Crafted by [AKCLNT](https://akclnt.com).
