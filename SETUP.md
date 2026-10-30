# GitHub Pages setup / GitHub Pages 設定

**Author / 作者:** 2B 王彥燐 (Wong Yin Lun)

This project deploys automatically from `main` with GitHub Actions. No build step is required.

本專案會透過 GitHub Actions 從 `main` 自動部署，不需要建置步驟。

## One-time setup / 首次設定

1. Push the project to the repository's `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm that **Deploy Croc Jump site to GitHub Pages** succeeds.
5. Visit `https://s20250144-bit.github.io/Eason/`.

## Every update / 每次更新

```bash
git add .
git commit -m "Update Croc Jump"
git push origin main
```

The workflow runs on every push to `main` and can also be started manually from **Actions → Deploy Croc Jump site to GitHub Pages → Run workflow**.

每次推送至 `main` 都會自動部署，也可以在 Actions 頁面手動執行。

## What gets deployed / 部署內容

The workflow copies these files into the Pages artifact:

- `index.html`
- `game.html`
- `site.css`
- `site.js`
- `assets/`
- `preview.jpg`
- `.nojekyll`

If you add a new top-level static asset, add it to the **Prepare static site** step in `.github/workflows/deploy.yml`. In particular, `site.css` and `site.js` must be copied for the website to render and the language switch to work.

## Troubleshooting / 疑難排解

- **404 after deployment:** confirm Pages source is **GitHub Actions**, and that the deploy job completed successfully.
- **Game missing or unstyled:** confirm `game.html`, `site.css`, `site.js` and `assets/` are included in `_site`.
- **Old version still showing:** wait for the Pages deployment to finish, then hard-refresh the browser.
- **Language does not change:** JavaScript must be enabled; the site stores the selected language in `localStorage`.
