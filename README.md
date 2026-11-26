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

1. **Share image** — `og.jpg` is regenerated on the curtain cover; replace the domain too.
1b. **Photos (optional)** — drop real photos into `images/` and point the `src` of the two
   profile images in the "The Couple" section at them (currently
   `images/groom.svg` and `images/bride.svg`, 4:5 portrait works best).
2. **Map pin** — the Google Maps embed and the *Get Directions* button search for
   "Sara Convention Center" by name. For an exact pin, open the venue in Google
   Maps → Share → Embed a map, and paste that `src` into the iframe in
   `#venue` (and a precise link into `#directions-btn`).
3. **Domain** — set to https://ashiqu-jullasana.vercel.app (change it if the final domain differs).
   (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD), `sitemap.xml`
   and `robots.txt`. Replace it with the final domain. WhatsApp needs the
   absolute `og:image` URL to be live.
4. **Guest wishes** — `#wishes` currently carries three duas (no invented
   guest messages). Add real wishes by duplicating a `.wish-card` block.
5. **Music** — `assets/music.mp3` plays after the first tap/click.

## Structure (v3)
Curtain opening video + cover (Amar & Nena style): `css/opening.css`, `js/opening.js`, `assets/video/`, `assets/img/`.
Sections below the cover follow the Irfan & Kadeeja layout, with Allura (`fonts/Allura.woff2`) for script text.
