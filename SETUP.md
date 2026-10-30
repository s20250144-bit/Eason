# GitHub Pages setup

**Author:** 2B Wong Yin Lun

This repository currently has only `main` and a README, so this is the first project commit rather than a merge from another branch.

1. **Revoke the token that was pasted into chat.** Do not reuse it.
2. Upload the **contents** of this folder to the repository root on `main` (not the folder itself):
   - `index.html`
   - `preview.jpg`
   - `.nojekyll`
   - `README.md`
   - `.github/workflows/deploy.yml`
3. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open **Actions → Deploy to GitHub Pages → Run workflow**.
5. The site will be published at:

   https://s20250144-bit.github.io/Eason/

After that, every push or merge to `main` runs the same workflow automatically.

If the hidden `.github` folder cannot be uploaded from the browser, use **Add file → Create new file**, enter `.github/workflows/deploy.yml` as the filename, and paste the workflow contents.
