---
layout: default
title: InkolorGames
---
<section class="intro">
  <div class="shell">
    <img class="avatar" src="{{ '/images/logo_inkolor_games.png' | relative_url }}" alt="Portrait of Your Name" width="200" height="200">
    <p class="tagline">
      Indie game developer building small games. Although I specialize in programming, I create my games from start to finish (concept, game design, art, balancing, marketing, and publishing).
    </p>
  </div>
</section>
<section class="section">
  <div class="shell">
    <h2>My Games</h2>
    <div class="project-grid">

      {% include project-card.html
        href="/projects/paper-tower.html"
        thumb="/images/paper-tower-thumb.gif"
        alt="Paper Tower: Idle Overlay"
        team="2"
        status="In development"
        engine="Unity"
        title="Paper Tower: Idle Overlay"
        role="Game Developer"
        desc="A desktop overlay idle autobattler that plays entirely on its own . Let it fight, collect your loot, buy upgrades, and merge your gear to keep your tower standing."
      %}

      {% include project-card.html
        href="/projects/inkremental.html"
        thumb="/images/inkremental-burst.gif"
        alt="Inkremental"
        team="1"
        status="Demo live"
        engine="Unity"
        title="Inkremental"
        role="Game Developer"
        desc="Inkremental is a short incremental game about splattering paint across canvases by bursting blobs of color. Revisit iconic artworks with a humorous twist, unlock upgrades, and take down quirky mini‑bosses as you bring each masterpiece to life."
      %}

      {% include project-card.html
        href="/projects/irezumi-defenders.html"
        thumb="/images/irezumi-combat.gif"
        alt="Irezumi Defenders"
        team="1"
        status="Shipped"
        engine="Unity"
        title="Irezumi Defenders"
        role="Game Developer"
        desc="Irezumi Defenders is a tower defense game where you craft your units in a world inspired by Japanese mythology. Stack cards to craft buildings, gather resources, and build up your defenses to protect your kingdom from Yokai! 👺"
      %}

    </div>
  </div>
</section>
