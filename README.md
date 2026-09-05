# Kulturní Barbershop — statický mockup designu

Tohle je **jen ukázka designu** nové verze webu, pro Lukáše. Je to
samostatný statický web (Astro → čisté HTML/CSS), který nemá žádné
napojení na WordPress, databázi ani skutečnou rezervaci. Nejde
nahrát žádné skutečné údaje, nic se neodesílá.

Vychází z lokální vývojové kopie `Kulturnibarbershop/web` (šablona
`kulturni`, `kb-poukazy`) k 5. 9. 2026 — texty a vzhled jsou zkopírované,
ne odhadnuté.

## Co je uvnitř

Menu je stejné na každé stránce: **Světlá**, **Tmavá**, **Poukazy**
a **Aktuální web** (externí odkaz na `kulturnibarbershop.cz`).

- **Světlá / Tmavá** — stejný obsah (hero, ceník služeb, výběr holiče,
  „proč k nám", tým, kontakt), jen jinak přebarvený — Tmavá je blíž
  barvám současného ostrého webu. Výběr služby a holiče funguje
  (přepíná zvýraznění a lepící souhrn dole), tlačítko „Vybrat termín"
  otevře **maketu rezervace** (kalendář → čas → kontaktní údaje →
  potvrzení). Skutečnou rezervaci na webu obsluhuje systém Amelia.
- **Dárkové poukazy** — tři karty, tlačítko „Koupit poukaz" otevře
  objednávkový formulář a po odeslání náhled platební stránky s QR.
- **Zásady zpracování osobních údajů** — plný text, včetně
  nedopsaných míst v hranatých závorkách (návrh čeká na právní
  kontrolu, viz `PODMINKY.md` a `ROZHODNUTI.md` v hlavním repozitáři).
- Souhlasová lišta dole je čistě vizuální, tlačítka ji jen schovají.

## Jak si to spustit lokálně

```bash
npm install
npm run dev
```

## Jak to sestavit a nahrát na GitHub Pages

```bash
npm run build
```

Výstup je ve složce `dist/` — to je to, co se nahrává. Než založíš
repozitář na GitHubu:

1. V `astro.config.mjs` uprav `base` na `/<název-repozitáře>/`
   (nebo na `/`, pokud repozitář bude typu `<uživatel>.github.io`).
2. Založ repozitář, nastav v něm GitHub Pages na „GitHub Actions"
   nebo nahraj obsah `dist/` do větve `gh-pages`.

## Co v tom záměrně není

- žádná databáze, žádné přihlašování, žádné skutečné formuláře,
- žádné volání na cizí server (žádný Meta pixel, žádná analytika),
- žádný skutečný účet pro platbu ani skutečný QR kód,
- žádná osobní data — telefon a e-mail v kontaktu jsou veřejné
  provozní údaje z živého webu, ne údaje zákazníků.
