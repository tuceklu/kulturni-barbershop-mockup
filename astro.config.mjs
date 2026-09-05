import { defineConfig } from 'astro/config';

// GitHub Pages serves projektové stránky z podcesty /<název-repozitáře>/.
// Až založíš repozitář, over si, že se "base" shoduje s jeho názvem —
// jinak se po nasazení nenačtou styly ani obrázky. Pro repozitář typu
// <uzivatel>.github.io nastav base na '/'.
export default defineConfig({
  site: 'https://tuceklu.github.io',
  base: '/kulturni-barbershop-mockup/',
});
