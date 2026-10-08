# Samuel M.K. (Smaltal): Founder Site

Single-page site, hash-routed, vanilla JS. Built with the same technique as the
Kelly Lemayian portfolio: one HTML shell, a small JS kernel, pure render functions,
a mock-login admin panel. No build step, no bundler, no framework.

**Look:** every surface is a gradient of greys (no flat grey fills), light and dark
mode, with the gold from the L.I.G.O. SPACE logo as the single accent.

## Run it

Double-click `index.html`, or serve the folder (`npx serve .`). Every script is a
plain classic `<script>` tag, so it works straight from the file system.

## Pages

| Route | What it is |
|---|---|
| `#/` | Hero, facts, the journey, the central proposition, teasers |
| `#/story` | The full founder story, 13 chapters, with a chapter list |
| `#/story/loud` | Jump straight to one chapter (ids are in `data.js`) |
| `#/framework` | The Synchronized Human System™ and its six dimensions |
| `#/ligo` | L.I.G.O. SPACE: the vision, motto, "what crowns us: Love" |
| `#/faith-family` | Faith and family chapters |
| `#/contact` | Team phone and ligospace.co.ke |
| `#/admin` | Edit chapters, phone, tagline (after signing in) |

## File map

```
index.html                 shell
favicon.svg                L.I.G.O. SPACE mark
assets/                    logo SVGs (transparent, and on navy)
css/tokens.css             colour tokens, reset, base type
css/styles.css             header, footer, pages, components
css/admin.css              admin screens
src/app.js                 kernel: header/footer + delegated click/submit events
src/router.js              hash parsing, route dispatch, admin gate
src/pages/*.js             one render function per page (return {title, html})
src/components/*.js        logo, header, footer
src/services/data.js       the founder story and site details (seed content)
src/services/store.js      reads content; layers admin edits over data.js
src/utilities/helpers.js   escaping, story-text formatter, toast, reveal, theme
src/utilities/auth.js      mock login
```

## Editing the story

Either edit `src/services/data.js` directly, or use the admin panel.
Text format for a chapter body: a blank line starts a new paragraph, a line starting
with `>` is a quote, lines starting with `- ` form a list. All text is HTML-escaped.

## Admin panel

Go to `#/admin` (or the "Admin" link in the footer).

```
username: samuel
password: synchronized
```

**This is a placeholder, not security.** The password sits in `src/utilities/auth.js`
where anyone can read it, and edits are saved only in the editor's own browser
(`localStorage`), so visitors will not see them. To publish edits for everyone, put the
changes in `data.js`, or swap `store.js` and `auth.js` for a real backend
(e.g. Cloudflare Worker + D1). Only those two files need to change.

## Things to check before publishing

- **Family details.** The Family chapter names his wife and three children. That is
  in the story you supplied, but it will be public. Remove it in `data.js` if you
  would rather keep their names private.
- **Phone number.** `0182809790` was taken from the L.I.G.O. SPACE loader's error
  message (the "contact the team" line). Confirm it is the right public number.
- **No email, social links or photos** were supplied, so none are shown. Add photos to
  `assets/` and a hero/portrait slot in `src/pages/home.js` when you have them.
- **Learning chapter.** One sentence ("The university itself continues to list
  Bachelor of Commerce...") reads like a research note rather than part of the
  story. It is kept exactly as written; consider trimming it.
- **Sources.** Story text is the founder's own, unchanged. The six dimension cards show
  names only, because no descriptions were supplied.
