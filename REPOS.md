# Repository & Hosting Setup

## Two-Repo Structure

| Repo | URL | Connected To |
|---|---|---|
| `premium-armor-glass` | `git@github.com:jpnarchi/premium-armor-glass.git` | Local machine + Vercel |
| `premium-armor-glass-657ef6f4` | `git@github.com:jpnarchi/premium-armor-glass-657ef6f4.git` | Lovable |

---

## How Changes Flow

```
Your Local ──push──> premium-armor-glass ──auto-deploy──> Vercel (live site)

Lovable ──push──> premium-armor-glass-657ef6f4 (NOT auto-deployed)
```

> Vercel only watches `premium-armor-glass`. Changes made in Lovable do NOT go live automatically — they need to be merged into the main repo manually (see below).

---

## Daily Workflow — Local Development

```bash
# Always pull before starting work
git pull origin main

# Do your work, then commit
git add <files>
git commit -m "your message"

# Push to Vercel repo (goes live via auto-deploy)
git push origin main
```

---

## When the IT Guy Makes Changes in Lovable

1. He makes changes in Lovable (images, content, etc.)
2. Lovable pushes to `premium-armor-glass-657ef6f4` on the `content-updates` branch
3. You pull those changes locally:

```bash
# Add the Lovable repo as a second remote (only need to do this once)
git remote add lovable git@github.com:jpnarchi/premium-armor-glass-657ef6f4.git

# Pull his changes from Lovable repo
git fetch lovable
git merge lovable/content-updates

# Review, then push to Vercel repo to go live
git push origin main
```

---

## Pushing to Both Repos at Once (Optional)

If you want a single `git push` to update both repos, run this once:

```bash
git remote set-url --add origin git@github.com:jpnarchi/premium-armor-glass-657ef6f4.git
```

After that, `git push origin main` will push to both simultaneously.

> **Caution:** Only do this if both repos are in sync. If they diverge, this can cause conflicts.

---

## Remotes Reference

```bash
# Check your current remotes
git remote -v

# Add Lovable repo as separate remote
git remote add lovable git@github.com:jpnarchi/premium-armor-glass-657ef6f4.git

# Push to Vercel repo only
git push origin main

# Push to Lovable repo only
git push lovable main
```

---

## Image Workflow (WebP)

All images in `public/` are now `.webp` format (converted April 2026).

- Quality: 85 (visually lossless)
- Tool: `cwebp` (install via `brew install webp`)
- When adding new images, convert before committing:

```bash
cwebp -q 85 your-image.png -o your-image.webp
rm your-image.png
```

Then update the reference in code from `.png` to `.webp`.

---

## Vercel

- Auto-deploys on every push to `main` on `premium-armor-glass`
- No manual action needed — push to main = live site updates
