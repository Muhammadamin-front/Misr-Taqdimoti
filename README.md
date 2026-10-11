# Misr iqtisodiyoti — taqdimot

Iqtisodiyot fanidan universitet taqdimoti: Misr Arab Respublikasi iqtisodiyoti va Oʻzbekiston bilan taqqoslash.
16 slayd, React + Vite + Tailwind, rasmlar Wikimedia Commons'dan (erkin litsenziyalar).

## Ochish

**Internetsiz / serversiz:** `dist/index.html` ni brauzerda oching (ikki marta bosish kifoya).
`dist/` papkasini (ichidagi `images/` bilan birga) fleshkaga koʻchirib olib borish mumkin.
Shriftlar (Cinzel, Inter) Google Fonts'dan yuklanadi — internet boʻlmasa oddiy shrift chiqadi.

**Ishlab chiqish rejimi:**

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ ni qayta yigʻadi
```

## Boshqaruv

| Tugma | Amal |
|---|---|
| → / Space / PageDown | keyingi slayd |
| ← / PageUp | oldingi slayd |
| Home / End | birinchi / oxirgi slayd |
| F | toʻliq ekran |

Slayd raqami manzilda saqlanadi (`#5`), sahifani yangilasangiz shu slaydda qoladi.

## Tahrirlash

- Ism, guruh, ilmiy rahbar: `src/data.ts` → `AUTHOR`
- Barcha raqamlar va manbalar: `src/data.ts`
- Slaydlar tartibi: `src/slides/index.ts`

## Ishlatilgan komponentlar (loyihadagi promptlardan)

| Prompt | Komponent | Qayerda |
|---|---|---|
| `1-prompt.md` | `image-stream-hero` | Muqova — rasmlar koridori |
| `2-prompt.md` | `text-roll` | Barcha sarlavhalar |
| `prompt.md` | `3-d-coverflow-carousel` | Tarixiy meros (piramidalar, Sfinks…) |
| `4-prompt.md` | `orbit-flip-slider` | Mumiyolar va haykallar galereyasi |
| `flip-card.md` | `card-flip` | Daromad ustunlari |
| `prompt-background-light.md` | `aurora-background` | Misr va Oʻzbekiston jadvali |
# Misr-Taqdimoti
