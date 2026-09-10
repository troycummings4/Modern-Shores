# Product Image Checklist

6 products, each needs one real image URL from its Amazon listing. Use
SiteStripe (Amazon's official tool for approved Associates) rather than
saving/right-clicking images — it's the sanctioned way to embed Amazon
product photos and gives you a stable link. You already used SiteStripe to
get each product's affiliate link, so this is the same toolbar, just
clicking "Image" instead of "Text".

## How to grab each image (~15–20 sec per product)

1. Make sure you're logged into **amazon.com** with the account tied to
   your Associates ID (`051695-20`).
2. Click a product link below. The **SiteStripe toolbar** appears at the
   top of the page (only shows up when you're logged in as an approved
   Associate).
3. Click **Image** in that toolbar (sometimes under "Get Link" → "Image").
4. Copy the image URL it gives you (usually starts with
   `https://m.media-amazon.com/images/...`).
5. Paste it next to that product below.

If SiteStripe doesn't appear, your Associates account may need a moment
to fully activate, or check Account Settings → General → "SiteStripe" is
enabled.

## When you're done

Send the filled-in list back (however's easiest — paste it in chat, or
send the edited file) and it gets wired into `image` fields in
`src/data/products.ts` in one pass. Partial lists work too — anything left
blank just keeps the current placeholder image.

---

## Tech & Gadgets

- [ ] `unitree-robot-dog` — Unitree Quadruped Robot Dog
  https://www.amazon.com/Unitree-Quadruped-Robotics-Adults-Embodied/dp/B07TTRPFBT
  Image URL: ___

- [ ] `f1-racing-simulator-cockpit` — Formula Racing Simulator Cockpit
  https://www.amazon.com/Racing-Formula-Simulator-Cockpit-PC-Mac/dp/B0F3NNXQXZ
  Image URL: ___

- [ ] `awol-vision-aetherion-projector` — AWOL Vision Aetherion Max Laser Projector
  https://www.amazon.com/AWOL-VISION-Aetherion-Max-PixelLockTM/dp/B0GN3XX19L
  Image URL: ___

- [ ] `focal-utopia-headphones` — Focal Utopia Open-Back Headphones
  https://www.amazon.com/Focal-High-Fidelity-Over-Ear-Open-Back-Headphones/dp/B0B94139D6
  Image URL: ___

## Lifestyle & Leisure

- [ ] `creed-royale-exclusive-perfume` — Creed Royale Exclusive Eau de Parfum
  https://www.amazon.com/Royale-Exclusive-Flowers-Perfume-Fragrance/dp/B07N7DHGH7
  Image URL: ___

- [ ] `playcraft-georgetown-shuffleboard` — Playcraft Georgetown Shuffleboard Table
  https://www.amazon.com/Playcraft-Georgetown-Shuffleboard-Storage-Cabinet/dp/B0CLW43MZD
  Image URL: ___
