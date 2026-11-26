# Ashiqu & Dr. Jullasana — Wedding Invitation Website

Groom-side invitation. Lightweight, dependency-free (HTML5 + CSS3 + vanilla JS).

## Details

- **Groom:** Ashiqu — son of Mr. Abdul Nasir Ahsani & Mrs. Labeeba, Thumbakkuzhiyil (H), Vazhamburam P.O.
- **Bride:** Dr. Jullasana
- **Special compliments:** Jefrin
- **Event:** Nikah and Wedding Reception
- **Date / time:** Saturday, 26 December 2026 · 11:00 AM – 2:00 PM (IST, Asia/Kolkata) · 16 Rajab 1448
- **Venue:** Sara Convention Center

## Things to finish before publishing

1. **Share image** — `og.jpg` is still the old preview; replace it with a screenshot of the new cover.
2. **Map pin** — the Google Maps embed and the *Get Directions* button search for
   "Sara Convention Center" by name. For an exact pin, open the venue in Google
   Maps → Share → Embed a map, and paste that `src` into the iframe in
   `#venue` (and a precise link into `#directions-btn`).
3. **Domain** — `https://example.com` is a placeholder in `index.html`
   (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD), `sitemap.xml`
   and `robots.txt`. Replace it with the final domain. WhatsApp needs the
   absolute `og:image` URL to be live.
4. **Guest wishes** — `#wishes` currently carries three duas (no invented
   guest messages). Add real wishes by duplicating a `.wish-card` block.
5. **Music** — `assets/music.mp3` plays after the first tap/click.

## Structure (v3 — curtain opening + cover like Amar & Nena, Allura script)

```
index.html
css/     style.css
js/      main.js (opening/music/reveal) · countdown.js · wishes.js
fonts/   Allura.woff2
assets/  video/opening.mp4 (sage curtain) · img/ (cover, poster, backgrounds) · music.mp3
```
