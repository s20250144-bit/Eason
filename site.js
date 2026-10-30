(() => {
  "use strict";

  const translations = {
    en: {
      "meta.title": "Croc Jump — Endless Swamp Arcade",
      "meta.description": "Croc Jump is a handcrafted endless platformer starring a square crocodile. Climb procedural swamp platforms, stomp or slash mobs, and fire a rocket high jump. Play free in your browser.",
      "a11y.skip": "Skip to content",
      "a11y.home": "Croc Jump home",
      "a11y.nav": "Main navigation",
      "a11y.language": "Language",
      "a11y.menu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "a11y.mobileNav": "Mobile navigation",
      "a11y.play": "Play Croc Jump",
      "a11y.close": "Close game",
      "a11y.iframe": "Croc Jump playable game",
      "nav.features": "Features",
      "nav.play": "Play",
      "nav.how": "How to play",
      "nav.about": "About",
      "nav.playNow": "Play now",
      "hero.kicker": "A handcrafted web arcade",
      "hero.title1": "Croc",
      "hero.title2": "Jump",
      "hero.lede": "A square crocodile. A bottomless swamp. Climb procedurally generated platforms, stomp or slash the mobs, and fire a rocket when the gap looks too wide.",
      "hero.play": "Play free",
      "hero.explore": "Explore the game",
      "hero.stat1Label": "Endless",
      "hero.stat1Value": "One more run",
      "hero.stat2Label": "Hearts",
      "hero.stat2Value": "Three per run",
      "hero.stat3Label": "Install",
      "hero.stat3Value": "Nothing at all",
      "hero.imageAlt": "Croc Jump gameplay showing the square crocodile, rocket flame, mobs and platforms.",
      "hero.cardRun": "Endless run",
      "hero.cardHearts": "hearts",
      "hero.tagRocket": "Rocket jump",
      "hero.tagRocketSub": "R or touch",
      "hero.tagBlade": "Longer blade",
      "hero.tagBladeSub": "X · J · click",
      "hero.tagStomp": "Stomp",
      "hero.tagStompSub": "Land on a mob",
      "marquee.stomp": "Stomp",
      "marquee.slash": "Slash",
      "marquee.rocket": "Rocket",
      "marquee.climb": "Climb",
      "marquee.survive": "Survive",
      "marquee.replay": "One more run",
      "features.kicker": "Game features",
      "features.title": "Small game. Sharp claws.",
      "features.lede": "Every system is built around one idea: make the next jump feel good. Movement, combat and procedural platforms all feed into the climb.",
      "features.jump.title": "Jump on your terms",
      "features.jump.desc": "Land, breathe, then choose the moment. Manual jumping with coyote time and a small jump buffer keeps the controls forgiving.",
      "features.rocket.title": "Rocket boost",
      "features.rocket.desc": "Fire a high jump on a 4.2-second cooldown. Recover from a miss, skip a gap, or chase a platform that looks just out of reach.",
      "features.blade.title": "A longer blade",
      "features.blade.desc": "A wider slash arc and more reach. Cut through swamp mobs with X, J, a click, or the on-screen sword.",
      "features.stomp.title": "Stomp the mobs",
      "features.stomp.desc": "Drop on a mob from above to squash it and bounce. Or take the cleaner route and slash it to pieces.",
      "features.hearts.title": "Three hearts",
      "features.hearts.desc": "A hit costs a heart and grants a moment of invulnerability. Lose all three and the swamp wins this round.",
      "features.endless.title": "Never the same climb",
      "features.endless.desc": "Platforms, mobs and springs are generated as you go. Every run has a new layout; your best height is saved locally.",
      "play.kicker": "Play in your browser",
      "play.title": "No install. No account. Just one more jump.",
      "play.lede": "Croc Jump runs entirely in your browser. Open it here, or jump into the full-screen version for a cleaner run.",
      "play.check1": "Desktop and mobile controls",
      "play.check2": "Best height saved locally",
      "play.check3": "Built with vanilla HTML, CSS and JavaScript",
      "play.play": "Play now",
      "play.fullscreen": "Full screen",
      "play.imageAlt": "The crocodile slashing a swamp mob with a long blade.",
      "how.kicker": "How to play",
      "how.title": "Three buttons. One very square crocodile.",
      "how.lede": "Land on a platform, choose your moment, and keep climbing. The swamp does the rest.",
      "how.desktopTitle": "Keyboard",
      "how.desktopSub": "Click the game once to focus the controls.",
      "how.move": "Move",
      "how.jump": "Jump",
      "how.rocket": "Rocket",
      "how.slash": "Slash",
      "how.orClick": "or click",
      "how.pause": "Pause",
      "how.mute": "Mute",
      "how.mobileTitle": "Touch",
      "how.mobileSub": "Portrait orientation recommended.",
      "how.touchRocket": "Rocket",
      "how.touchBlade": "Sword",
      "how.touchPause": "Pause button",
      "how.tipLabel": "Rocket thinking",
      "how.tip": "Fire after a jump for extra height, or while falling to recover. The rocket meter refills in 4.2 seconds.",
      "how.imageAlt": "Croc Jump mobile controls with arrows, jump, rocket and blade buttons.",
      "tech.kicker": "Under the hood",
      "tech.title": "Built like a game. Shipped like a webpage.",
      "tech.desc": "One canvas, no game engine, no external art assets. The crocodile, platforms, mobs and rocket flames are drawn in code — and the site around it is just as lightweight.",
      "tech.metric1": "External dependencies",
      "tech.metric2": "Render scale",
      "tech.metric3": "Rocket cooldown",
      "tech.metric4": "Possible climbs",
      "about.kicker": "About the creator",
      "about.title": "Made by a student who wanted a bigger swamp.",
      "about.lede": "A small project with a simple brief: build a complete browser game from scratch — and make a square crocodile feel alive.",
      "about.role": "Creator · Designer · Developer",
      "about.bio": "Croc Jump was created by 2B 王彥燐 as a student project. The goal was to build a complete, polished browser game from scratch — no game engine, no external art assets, just code and a square crocodile.",
      "about.source": "View source",
      "about.play": "Play the game",
      "about.note": "A small game about timing, momentum, and one very square crocodile.",
      "project.title": "Project details",
      "project.genre": "Genre",
      "project.genreValue": "Endless platformer",
      "project.platform": "Platform",
      "project.platformValue": "Web browser",
      "project.release": "Release",
      "project.author": "Author",
      "project.price": "Price",
      "project.priceValue": "Free",
      "project.status": "Status",
      "project.statusValue": "Live",
      "project.imageAlt": "Croc Jump start screen with the author credit, 2B 王彥燐.",
      "faq.kicker": "FAQ",
      "faq.title": "Good questions, quick answers.",
      "faq.lede": "Everything you need to know before your first climb.",
      "faq.q1": "Is Croc Jump free?",
      "faq.a1": "Yes. It is completely free to play, with no account, ads or download.",
      "faq.q2": "Do I need to install anything?",
      "faq.a2": "No. It runs in a modern browser on desktop or phone. A recent version of Chrome, Safari, Edge or Firefox is recommended.",
      "faq.q3": "Does it work on mobile?",
      "faq.a3": "Yes. Use the on-screen arrows, the gold jump button, the rocket button and the sword button. Portrait orientation is recommended.",
      "faq.q4": "How is my best score saved?",
      "faq.a4": "Your best height is stored in your browser's local storage. Clearing site data or using a different browser resets it.",
      "faq.q5": "Is there an end?",
      "faq.a5": "No. Platforms are generated endlessly. The goal is simple: climb higher than your last run.",
      "faq.q6": "Who made it?",
      "faq.a6": "Croc Jump is a student project by 2B 王彥燐.",
      "cta.kicker": "Your turn",
      "cta.title": "The swamp is waiting.",
      "cta.lede": "One square crocodile. Three hearts. As many runs as you like.",
      "cta.play": "Start climbing",
      "footer.tagline": "An endless swamp platformer by 2B 王彥燐.",
      "footer.play": "Play",
      "footer.source": "Source",
      "footer.about": "About",
      "footer.rights": "© 2026 2B 王彥燐. All rights reserved.",
      "footer.built": "Built with HTML5 Canvas.",
      "modal.kicker": "Now playing",
      "modal.fullscreen": "Full screen",
      "modal.note": "The game interface is in English. Click or tap the game to start; use the close button to leave at any time.",
      "modal.loading": "Loading the swamp…",
      "modal.jump": "jump",
      "modal.rocket": "rocket",
      "modal.slash": "slash",
      "modal.pause": "pause"
    },
    "zh-Hant": {
      "meta.title": "Croc Jump — 無盡沼澤街機",
      "meta.description": "Croc Jump 是一款由學生親手打造的無盡平台遊戲。操控方形鱷魚攀上隨機生成的沼澤平台，踩扁或劈碎小怪，並用火箭高跳挑戰更高紀錄。免費在瀏覽器中遊玩。",
      "a11y.skip": "跳至主要內容",
      "a11y.home": "Croc Jump 首頁",
      "a11y.nav": "主要導覽",
      "a11y.language": "語言",
      "a11y.menu": "開啟選單",
      "a11y.closeMenu": "關閉選單",
      "a11y.mobileNav": "手機導覽",
      "a11y.play": "遊玩 Croc Jump",
      "a11y.close": "關閉遊戲",
      "a11y.iframe": "Croc Jump 遊戲畫面",
      "nav.features": "遊戲特色",
      "nav.play": "遊玩",
      "nav.how": "玩法",
      "nav.about": "關於",
      "nav.playNow": "立即遊玩",
      "hero.kicker": "親手打造的網頁街機",
      "hero.title1": "鱷魚",
      "hero.title2": "跳跳",
      "hero.lede": "一隻方形鱷魚，一片無底沼澤。攀上隨機生成的平台，踩扁或劈碎小怪；遇到太闊的缺口，就發射火箭。",
      "hero.play": "免費試玩",
      "hero.explore": "了解遊戲",
      "hero.stat1Label": "無盡",
      "hero.stat1Value": "再來一次",
      "hero.stat2Label": "生命",
      "hero.stat2Value": "每局三顆心",
      "hero.stat3Label": "安裝",
      "hero.stat3Value": "完全免安裝",
      "hero.imageAlt": "Croc Jump 遊戲畫面：方形鱷魚、火箭尾焰、小怪與平台。",
      "hero.cardRun": "無盡挑戰",
      "hero.cardHearts": "顆心",
      "hero.tagRocket": "火箭高跳",
      "hero.tagRocketSub": "R 或觸控",
      "hero.tagBlade": "更長劍鋒",
      "hero.tagBladeSub": "X · J · 點擊",
      "hero.tagStomp": "踩踏",
      "hero.tagStompSub": "落在小怪身上",
      "marquee.stomp": "踩踏",
      "marquee.slash": "劈砍",
      "marquee.rocket": "火箭",
      "marquee.climb": "攀升",
      "marquee.survive": "生存",
      "marquee.replay": "再來一次",
      "features.kicker": "遊戲特色",
      "features.title": "小遊戲，利爪十足。",
      "features.lede": "每個系統都圍繞同一件事：讓下一次跳躍更爽。移動、戰鬥與程序化平台，全部服務於攀升。",
      "features.jump.title": "跳躍時機，由你決定",
      "features.jump.desc": "站穩、呼吸，再選擇起跳時機。手動跳躍配合邊緣寬容與起跳緩衝，手感更友善。",
      "features.rocket.title": "火箭高跳",
      "features.rocket.desc": "4.2 秒冷卻的強力上升。用來挽回失誤、越過缺口，或追上看似搆不到的平台。",
      "features.blade.title": "更長的劍鋒",
      "features.blade.desc": "更寬的劈砍弧度與更遠距離。用 X、J、滑鼠點擊或手機寶劍按鈕，把小怪劈成碎片。",
      "features.stomp.title": "踩扁小怪",
      "features.stomp.desc": "從上方落下，把沼澤小怪踩扁並彈起；也可以選擇更乾淨的方式，一劍解決。",
      "features.hearts.title": "三顆心",
      "features.hearts.desc": "受傷會失去一顆心，並獲得短暫無敵。三顆心耗盡，這一局就結束。",
      "features.endless.title": "每次攀升都不同",
      "features.endless.desc": "平台、小怪與彈跳荷葉會隨攀升生成。每局地形都不同，最高高度會保存在本機。",
      "play.kicker": "在瀏覽器遊玩",
      "play.title": "免安裝、免登入，只需再跳一次。",
      "play.lede": "Croc Jump 完全在瀏覽器中運行。你可以直接在這裡開始，或開啟全螢幕版本專心挑戰。",
      "play.check1": "電腦與手機操作",
      "play.check2": "最高高度保存在本機",
      "play.check3": "以原生 HTML、CSS、JavaScript 打造",
      "play.play": "立即遊玩",
      "play.fullscreen": "全螢幕",
      "play.imageAlt": "鱷魚揮舞長劍劈向沼澤小怪。",
      "how.kicker": "玩法",
      "how.title": "三個按鈕，一隻非常方正的鱷魚。",
      "how.lede": "落在平台上，選好時機，然後繼續往上。剩下的交給沼澤。",
      "how.desktopTitle": "鍵盤",
      "how.desktopSub": "點擊遊戲畫面一次，讓鍵盤控制生效。",
      "how.move": "移動",
      "how.jump": "跳躍",
      "how.rocket": "火箭",
      "how.slash": "劈砍",
      "how.orClick": "或點擊",
      "how.pause": "暫停",
      "how.mute": "靜音",
      "how.mobileTitle": "觸控",
      "how.mobileSub": "建議使用直向螢幕。",
      "how.touchRocket": "火箭",
      "how.touchBlade": "寶劍",
      "how.touchPause": "暫停按鈕",
      "how.tipLabel": "火箭時機",
      "how.tip": "跳起後再發射可獲得額外高度；下落時發射則能救回失誤。火箭計量約 4.2 秒充滿。",
      "how.imageAlt": "Croc Jump 手機操作介面：左右、跳躍、火箭與寶劍按鈕。",
      "tech.kicker": "開發細節",
      "tech.title": "像遊戲一樣打造，像網頁一樣發佈。",
      "tech.desc": "一個 Canvas、沒有遊戲引擎、沒有外部美術素材。鱷魚、平台、小怪與火箭火焰全部由程式碼繪製，外層網站同樣輕量。",
      "tech.metric1": "外部依賴",
      "tech.metric2": "渲染倍率",
      "tech.metric3": "火箭冷卻",
      "tech.metric4": "可能的攀升次數",
      "about.kicker": "關於作者",
      "about.title": "由一位想要更大沼澤的學生製作。",
      "about.lede": "一個簡單的學生專案：從零完成一款完整的瀏覽器遊戲，並讓一隻方形鱷魚真正活起來。",
      "about.role": "作者 · 設計 · 開發",
      "about.bio": "Croc Jump 由 2B 王彥燐 以學生專案形式創作。目標是從零打造一款完整而精緻的瀏覽器遊戲——沒有遊戲引擎、沒有外部美術素材，只有程式碼和一隻方形鱷魚。",
      "about.source": "查看原始碼",
      "about.play": "遊玩遊戲",
      "about.note": "一款關於時機、動量，還有一隻非常方正鱷魚的小遊戲。",
      "project.title": "專案資料",
      "project.genre": "類型",
      "project.genreValue": "無盡平台遊戲",
      "project.platform": "平台",
      "project.platformValue": "網頁瀏覽器",
      "project.release": "推出年份",
      "project.author": "作者",
      "project.price": "價格",
      "project.priceValue": "免費",
      "project.status": "狀態",
      "project.statusValue": "已上線",
      "project.imageAlt": "Croc Jump 開始畫面，顯示作者 2B 王彥燐。",
      "faq.kicker": "常見問題",
      "faq.title": "好問題，快速回答。",
      "faq.lede": "第一次攀升前，你需要知道的事。",
      "faq.q1": "Croc Jump 是免費的嗎？",
      "faq.a1": "是，完全免費，不需要帳號、沒有廣告，也不用下載。",
      "faq.q2": "需要安裝什麼嗎？",
      "faq.a2": "不需要。只要使用支援的現代瀏覽器，電腦或手機都能玩。建議使用最新版 Chrome、Safari、Edge 或 Firefox。",
      "faq.q3": "手機可以玩嗎？",
      "faq.a3": "可以。使用畫面下方的左右箭頭、金色跳躍鍵、火箭鍵與寶劍鍵即可；建議使用直向螢幕。",
      "faq.q4": "最高分會保存在哪裡？",
      "faq.a4": "最高高度會保存在瀏覽器的本機儲存空間。清除網站資料或改用其他瀏覽器後，紀錄會重置。",
      "faq.q5": "遊戲有終點嗎？",
      "faq.a5": "沒有。平台會無限生成，目標很簡單：比上一局爬得更高。",
      "faq.q6": "這是誰做的？",
      "faq.a6": "Croc Jump 是 2B 王彥燐 的學生專案。",
      "cta.kicker": "輪到你了",
      "cta.title": "沼澤正在等你。",
      "cta.lede": "一隻方形鱷魚，三顆心，想玩多少次都可以。",
      "cta.play": "開始攀升",
      "footer.tagline": "由 2B 王彥燐 製作的無盡沼澤平台遊戲。",
      "footer.play": "遊玩",
      "footer.source": "原始碼",
      "footer.about": "關於",
      "footer.rights": "© 2026 2B 王彥燐．保留所有權利。",
      "footer.built": "以 HTML5 Canvas 製作。",
      "modal.kicker": "正在遊玩",
      "modal.fullscreen": "全螢幕",
      "modal.note": "遊戲介面為英文。點擊或輕觸遊戲即可開始；可隨時按右上角關閉。",
      "modal.loading": "正在載入沼澤…",
      "modal.jump": "跳躍",
      "modal.rocket": "火箭",
      "modal.slash": "劈砍",
      "modal.pause": "暫停"
    }
  };

  const supportedLangs = Object.keys(translations);
  const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
  const modal = document.getElementById("gameModal");
  const gameFrame = document.getElementById("gameFrame");
  const iframeLoading = document.getElementById("iframeLoading");
  const closeButton = modal ? modal.querySelector(".modal-close") : null;
  const openButtons = Array.from(document.querySelectorAll("[data-open-game]"));
  const pageRegions = Array.from(document.querySelectorAll("body > header, body > main, body > footer, .skip-link"));
  let lastFocused = null;
  let resetTimer = 0;

  function getInitialLanguage() {
    try {
      const saved = window.localStorage.getItem("crocSiteLang");
      if (supportedLangs.includes(saved)) return saved;
    } catch (error) { /* ignore */ }
    const browser = (navigator.language || "en").toLowerCase();
    return browser.startsWith("zh") ? "zh-Hant" : "en";
  }

  function t(lang, key) {
    return (translations[lang] && translations[lang][key]) ||
      (translations.en && translations.en[key]) ||
      key;
  }

  function applyLanguage(lang, persist) {
    if (!supportedLangs.includes(lang)) lang = "en";
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = t(lang, key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", t(lang, element.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.setAttribute("title", t(lang, element.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", t(lang, element.getAttribute("data-i18n-alt")));
    });

    const title = t(lang, "meta.title");
    document.title = title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t(lang, "meta.description"));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t(lang, "meta.description"));

    langButtons.forEach((button) => {
      const active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (persist) {
      try { window.localStorage.setItem("crocSiteLang", lang); } catch (error) { /* ignore */ }
    }

    if (menuToggle && mobileNav) {
      const open = mobileNav.classList.contains("is-open");
      menuToggle.setAttribute("aria-label", t(lang, open ? "a11y.closeMenu" : "a11y.menu"));
    }
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang"), true);
    });
  });

  // Mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");

  function setMenu(open) {
    if (!menuToggle || !mobileNav) return;
    mobileNav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", t(document.documentElement.lang, open ? "a11y.closeMenu" : "a11y.menu"));
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setMenu(!mobileNav.classList.contains("is-open"));
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
    document.addEventListener("click", (event) => {
      if (!mobileNav.classList.contains("is-open")) return;
      if (event.target.closest(".site-header")) return;
      setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });
  }

  // Sticky header state.
  const header = document.getElementById("siteHeader");
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // Reveal sections on scroll.
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    revealItems.forEach((item) => observer.observe(item));
  }

  // Playable game modal. The iframe is only loaded when opened.
  function openGame() {
    if (!modal || !gameFrame) return;
    lastFocused = document.activeElement;
    window.clearTimeout(resetTimer);
    pageRegions.forEach((region) => { region.inert = true; });
    modal.inert = false;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (iframeLoading) iframeLoading.classList.remove("is-hidden");
    gameFrame.src = "game.html";
    window.setTimeout(() => {
      if (closeButton) closeButton.focus();
    }, 40);
  }

  function closeGame() {
    if (!modal || !modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    pageRegions.forEach((region) => { region.inert = false; });
    window.setTimeout(() => { if (!modal.classList.contains("is-open")) modal.inert = true; }, 280);
    resetTimer = window.setTimeout(() => {
      if (!modal.classList.contains("is-open")) {
        gameFrame.src = "about:blank";
      }
    }, 320);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  openButtons.forEach((button) => button.addEventListener("click", openGame));

  if (modal) {
    modal.querySelectorAll("[data-close-game]").forEach((element) => {
      element.addEventListener("click", closeGame);
    });
    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGame();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = Array.from(modal.querySelectorAll("button, a[href], iframe"))
        .filter((element) => !element.disabled && element.getClientRects().length);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  if (gameFrame) {
    gameFrame.addEventListener("load", () => {
      if (iframeLoading && gameFrame.getAttribute("src") !== "about:blank") {
        iframeLoading.classList.add("is-hidden");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeGame();
    }
  });

  // Start in the saved language, or the browser language.
  applyLanguage(getInitialLanguage(), false);
  if (modal) modal.inert = true;
})();
