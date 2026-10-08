# Samuel M.K. — personal site (KRWC layout, soft neutral + charcoal + controlled gold, flat surfaces)
Type: Cormorant Garamond (display) + Inter (UI). Light by default (no dark surfaces), dark toggle. No glass. Email: Smaltalkis@gmail.com. School: Kenyatta University (BCom Finance).
Open `index.html`. Pages: Home, The Story (4 short chapters), The Thinking, The Work (LIGO://SPACE), Gallery, Contact, Admin.
- Logo: `assets/logo.png` (cropped, rounded) + `assets/favicon.png`; used in header, hero, splash, favicon.
- Photos: `assets/1.jpg … 10.jpg` (Samuel), `11.jpg` (SMK mark). Captions + order: `src/services/data.js` → `gallery`.
  Placement: hero = 6 · story chapters = 6, 1, 8, 3 · home teasers = 5, 3, 8 · moments strip = 10, 7, 4, 2 · contact = 9 · gallery = all.
  To add more: drop `12.jpg` into `assets/` and add a line to `gallery`.
- Contact: phone +254 791 236179. Email is blank — set `site.email` in data.js and it appears on Contact and in the footer.
- Admin: `#/admin`, demo login `samuel` / `synchronized` (change before going live).
