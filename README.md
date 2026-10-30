# Croc Jump — Endless Swamp Arcade

**Author / 作者:** 2B 王彥燐 (Wong Yin Lun)

A bilingual commercial-style website and a playable browser game starring a very square crocodile.

雙語商業形象網站，以及一款可直接在瀏覽器遊玩的方形鱷魚平台遊戲。

**Live site / 網站:** https://s20250144-bit.github.io/Eason/  
**Play direct / 直接遊玩:** https://s20250144-bit.github.io/Eason/game.html

---

## Overview / 專案簡介

Croc Jump is a handcrafted endless platformer built with vanilla HTML, CSS and JavaScript. Climb procedurally generated swamp platforms, stomp or slash the mobs, and use a rocket boost to recover from a missed jump. The project now includes a full commercial landing page with English and Traditional Chinese content, while keeping the original game fully playable.

Croc Jump 是一款以原生 HTML、CSS、JavaScript 製作的無盡平台遊戲。玩家需要攀上隨機生成的沼澤平台，踩扁或劈砍小怪，並用火箭高跳挽回失誤。專案現已加入完整商業形象網站，提供英文及繁體中文內容，同時保留原有遊戲的完整功能。

## Website sections / 網站內容

- Hero introduction and instant play CTA / 首頁介紹與立即遊玩
- Game features / 遊戲特色
- Browser play section / 瀏覽器遊玩區
- Keyboard and touch controls / 鍵盤與觸控操作
- Technical details / 開發細節
- Creator profile and project metadata / 作者介紹與專案資料
- FAQ / 常見問題
- Responsive layout, reduced-motion support and accessible controls / 響應式版面、減少動態效果支援與無障礙控制

## Game features / 遊戲特色

- Manual jumping with coyote time and jump buffering / 手動跳躍、邊緣寬容與起跳緩衝
- Rocket high jump with a 4.2-second cooldown / 4.2 秒冷卻的火箭高跳
- Extended sword range and slash arc / 更遠的劍鋒與劈砍弧度
- Stomp or slash swamp mobs / 踩扁或劈砍沼澤小怪
- Three hearts and invulnerability frames / 三顆心與短暫無敵
- Procedural platforms, moving logs, fragile logs and bouncy lily pads / 程序化平台、移動木頭、脆弱木頭與彈跳荷葉
- High-DPI canvas rendering and local best-score storage / 高解析度 Canvas 與本機最高分記錄

## Controls / 操作

| Action | Keyboard | Touch |
| --- | --- | --- |
| Move | `←` `→` or `A` `D` | Left / right arrows |
| Jump | `Space`, `↑` or `W` | Gold `↑` button |
| Rocket | `R` | Rocket button |
| Slash | `X`, `J` or click | Sword button |
| Pause | `P` or `Esc` | Pause button |
| Mute | `M` | Speaker button |

## Project structure / 專案結構

```text
.
├── index.html                  # Bilingual commercial website
├── game.html                   # Original playable game
├── site.css                    # Website styles
├── site.js                     # Language switch, modal, reveal, accessibility
├── assets/                     # Website imagery and favicon
├── assets/og.jpg               # Social preview image
├── .github/workflows/deploy.yml
├── .nojekyll
└── README.md
```

## Local development / 本機預覽

The website has no build step or external dependencies.

```bash
python3 -m http.server 8766
```

Open `http://127.0.0.1:8766/`. The game is also available directly at `http://127.0.0.1:8766/game.html`.

網站不需要建置步驟，也沒有外部依賴。以上指令會在本機啟動靜態伺服器。

## Deployment / 部署

Every push or merge to `main` runs `.github/workflows/deploy.yml` and publishes the static site to GitHub Pages.

每次推送或合併到 `main`，`.github/workflows/deploy.yml` 都會自動將網站發佈到 GitHub Pages。

To enable it for a fork or a new repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually.

## Technology / 技術

- HTML5 Canvas game, no game engine
- Vanilla JavaScript, CSS and HTML
- Responsive layout and touch controls
- `prefers-reduced-motion` support
- Language preference stored in `localStorage`
- GitHub Actions + GitHub Pages deployment

## Credits / 鳴謝

Created by **2B 王彥燐 (Wong Yin Lun)**.

All game visuals are drawn procedurally in the canvas. The website is designed to match the game's dark swamp-at-night palette.
