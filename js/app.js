(function () {
  'use strict';

  const MONTHS = window.MONTHS;
  const CONTESTS = window.CONTESTS;
  const EN = window.EN_CONTENT || { contests: {}, questions: {} };
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const T = (key, vars) => window.I18N.t(key, vars);
  const isEn = () => window.I18N.get() === 'en';

  const Store = {
    KEY: 'moems-progress-v1',
    read() {
      try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
      catch (e) { return {}; }
    },
    isDone(id) { return !!this.read()[id]; },
    toggle(id) {
      const data = this.read();
      data[id] = !data[id];
      try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch (e) {}
      return data[id];
    }
  };

  const state = {
    month: 'nov',
    contest: '2024-25',
    qid: '1a',
    qIndex: 0,
    step: 0,
    playing: false,
    playTimer: null,
    scene: null
  };

  function getMonth(id) { return MONTHS.find((m) => m.id === id); }
  function getContest(monthId, contestId) {
    const m = getMonth(monthId);
    if (!m || !m.contests.includes(contestId)) return null;
    return CONTESTS.find((c) => c.id === contestId && c.month === monthId) || null;
  }
  function currentContest() { return getContest(state.month, state.contest); }
  function qKey(c, q) { return c.month + '/' + c.id + '/' + q.id; }
  function currentQuestion() {
    const c = currentContest();
    if (!c) return null;
    return c.questions.find((q) => q.id === state.qid) || c.questions[0] || null;
  }

  function cv(c, key) {
    if (isEn()) {
      const e = EN.contests[c.id];
      if (e && e[key] != null) return e[key];
    }
    return c[key];
  }
  function qv(c, q, key) {
    if (isEn()) {
      const qe = EN.questions[c.id] && EN.questions[c.id][q.id];
      if (qe && qe[key] != null) return qe[key];
    }
    return q[key];
  }
  function monthLabel(m) { return isEn() ? (m.label_en || m.label) : m.label; }

  function routeHref(monthId, contestId, qid) {
    return '#/' + [monthId, contestId, qid].filter(Boolean).join('/');
  }

  function readRoute() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    const parts = raw.split('/').filter(Boolean);
    if (parts[0] === 'resources') {
      return { isResources: true, month: 'nov', contest: '2025-26', qid: '1a' };
    }
    let month = parts[0];
    let contest = parts[1];
    let qid = parts[2];

    if (!getMonth(month)) month = 'nov';
    const monthObj = getMonth(month);

    if (!monthObj.contests.includes(contest)) contest = monthObj.contests[0];
    const c = getContest(month, contest);
    if (c && c.status === 'ready' && !c.questions.some((q) => q.id === qid)) {
      qid = c.questions[0].id;
    }
    return { month, contest, qid };
  }

  /* ---------------------------------------------------------------- */
  /* static copy                                                      */
  /* ---------------------------------------------------------------- */
  function applyStaticI18n() {
    const setText = (sel, value) => { const el = $(sel); if (el) el.textContent = value; };
    setText('#brandName', T('brand.name'));
    setText('#brandSub', T('brand.sub'));
    setText('#sideLabel', T('side.label'));
    setText('#gradePill', T('top.grade'));
    setText('#sideFoot', T('side.foot'));

    const note = $('#sideNote');
    if (note) note.innerHTML = T('side.note');
    const foot1 = $('#footP1');
    if (foot1) foot1.innerHTML = T('footer.p1');
    setText('#footP2', T('footer.p2'));

    const menuBtn = $('#menuBtn');
    if (menuBtn) menuBtn.setAttribute('aria-label', T('side.menu'));

    const toggle = $('#langToggle');
    if (toggle) {
      toggle.setAttribute('aria-label', T('lang.aria'));
      $$('button', toggle).forEach((b) => {
        const on = b.dataset.lang === window.I18N.get();
        b.textContent = T(b.dataset.lang === 'zh' ? 'lang.zh' : 'lang.en');
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    document.documentElement.lang = isEn() ? 'en' : 'zh-CN';
  }

  /* ---------------------------------------------------------------- */
  /* confetti                                                         */
  /* ---------------------------------------------------------------- */
  function celebrate(host) {
    if (!host || reduceMotion.matches) return;
    const box = document.createElement('div');
    box.className = 'confetti-host';
    const colors = ['#2f6df6', '#ff8a3d', '#12b886', '#ef5da8', '#ffcf5c', '#7c5cff'];
    for (let i = 0; i < 26; i++) {
      const p = document.createElement('i');
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 120;
      p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      p.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      p.style.background = colors[i % colors.length];
      p.style.left = '50%';
      p.style.top = '50%';
      p.style.width = (5 + Math.random() * 6) + 'px';
      p.style.height = (8 + Math.random() * 8) + 'px';
      p.style.animationDelay = (Math.random() * 120) + 'ms';
      box.appendChild(p);
    }
    host.appendChild(box);
    setTimeout(() => box.remove(), 1600);
  }

  /* ---------------------------------------------------------------- */
  /* nav + page chrome                                                */
  /* ---------------------------------------------------------------- */
  function renderNav() {
    const nav = $('#contestNav');
    const isResActive = state.isResources;
    const resLink = `
      <div class="nav-month">
        <span class="nm-label">${isEn() ? 'Resources' : '竞赛资源'}</span>
        <span class="nm-en">GUIDE</span>
      </div>
      <a class="nav-item ${isResActive ? 'is-active' : ''}" href="#/resources">
        <span class="nav-line">
          <span class="nav-title">${isEn() ? 'MOEMS Guide & Tips' : 'MOEMS 备考指南与题型'}</span>
          ${isResActive ? `<span class="nav-now">${T('nav.current')}</span>` : ''}
        </span>
        <span class="nav-meta">${isEn() ? 'Official links, book list & strategies' : '官方网址、备赛书单与高频题型'}</span>
      </a>`;

    const monthsHtml = MONTHS.map((m) => {
      const items = m.contests.map((cid) => {
        const c = getContest(m.id, cid);
        if (!c) return '';
        const active = !isResActive && cid === state.contest && m.id === state.month;
        const label = cv(c, 'label');
        if (c.status === 'soon') {
          return `
            <a class="nav-item is-soon" href="${routeHref(m.id, cid)}">
              <span class="nav-line"><span class="nav-title">${label} <em>${c.year}</em></span><span class="soon-badge">${T('nav.coming')}</span></span>
              <span class="nav-meta">${T('nav.metaSoon')}</span>
            </a>`;
        }
        const done = c.questions.filter((q) => Store.isDone(qKey(c, q))).length;
        return `
          <a class="nav-item ${active ? 'is-active' : ''}" href="${routeHref(m.id, cid, c.questions[0].id)}">
            <span class="nav-line"><span class="nav-title">${label} <em>${c.year}</em></span>${active ? `<span class="nav-now">${T('nav.current')}</span>` : ''}</span>
            <span class="nav-meta">${T('nav.meta', { n: done })}</span>
            <span class="nav-bar"><i style="width:${(done / c.questions.length) * 100}%"></i></span>
          </a>`;
      }).join('');
      return `<div class="nav-month"><span class="nm-label">${monthLabel(m)}</span><span class="nm-en">${m.en}</span></div>${items}`;
    }).join('');

    nav.innerHTML = monthsHtml + resLink;
  }

  function renderTopbar(c, q) {
    const crumb = $('#crumb');
    const month = getMonth(state.month);
    const qTitle = q ? qv(c, q, 'title') : '';
    crumb.innerHTML = `
      <a href="${routeHref(state.month, state.contest, c.questions[0] && c.questions[0].id)}">${monthLabel(month)}</a>
      <span class="sep">/</span>
      <span>${cv(c, 'label')} · ${c.year}</span>
      ${q ? `<span class="sep">/</span><span class="now">${q.label} ${qTitle}</span>` : ''}`;

    const done = c.questions.filter((x) => Store.isDone(qKey(c, x))).length;
    $('#progressPill').innerHTML = c.status === 'ready'
      ? `<span class="pp-dot"></span>${T('top.mastered', { n: done, total: c.questions.length })}`
      : `<span class="pp-dot"></span>${T('top.soon')}`;
  }

  /* ---------------------------------------------------------------- */
  /* question card                                                    */
  /* ---------------------------------------------------------------- */
  function questionCard(c, q) {
    const en = isEn();
    const main = en ? q.en : q.zh;
    const alt = en ? q.zh : q.en;
    const altLabel = T(en ? 'q.translation' : 'q.original');
    return `
      <section class="panel qcard" id="questionCard">
        <div class="qcard-top">
          <span class="qid">${q.label}</span>
          <div class="qcard-title">
            <h2>${qv(c, q, 'title')}</h2>
            <span class="qtag">${qv(c, q, 'answerNote')}</span>
          </div>
          <button class="answer-btn" id="answerBtn" aria-expanded="false">
            <span class="ab-eye">${T('q.showAnswer')}</span>
            <span class="ab-value">${qv(c, q, 'answer')}</span>
          </button>
        </div>

        <p class="q-zh">${main}</p>

        <details class="q-en">
          <summary>${altLabel}</summary>
          <p>${alt}</p>
        </details>

        <div class="q-hint">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.2.9 2h5.4c0-.8.3-1.5.9-2A6 6 0 0 0 12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
          <span>${qv(c, q, 'tip')}</span>
        </div>
      </section>`;
  }

  /* ---------------------------------------------------------------- */
  /* explainer                                                        */
  /* ---------------------------------------------------------------- */
  function buildExplainer(c, q) {
    if (state.scene && state.scene.dispose) state.scene.dispose();
    stopPlay();

    const steps = qv(c, q, 'steps');
    const host = $('#explainer');
    host.innerHTML = `
      <section class="panel explainer">
        <div class="explainer-head">
          <div>
            <span class="eyebrow">${T('explainer.eyebrow')}</span>
            <h3>${T('explainer.title')} <span class="best-tag">${T('explainer.best')}</span></h3>
          </div>
          <div class="step-meter">
            <span class="sm-now" id="stepNow">1</span><span class="sm-sep">/</span><span>${steps.length}</span>
          </div>
        </div>

        <div class="explainer-body">
          <div class="stage-wrap">
            <div class="stage" id="stage" data-scene="${q.scene}"></div>
          </div>

          <div class="narration">
            <ol class="dots" id="stepDots">
              ${steps.map((s, i) => `<li><button data-step="${i}" aria-label="${T('explainer.step', { n: i + 1 })}"></button></li>`).join('')}
            </ol>

            <div class="step-copy" aria-live="polite">
              <span class="step-no" id="stepNo">${T('explainer.step', { n: 1 })}</span>
              <h4 id="stepTitle"></h4>
              <p id="stepText"></p>
            </div>

            <div class="controls">
              <button class="btn ghost" id="prevBtn">${T('ctl.prev')}</button>
              <button class="btn play" id="playBtn"><span class="play-ico"></span><span class="play-txt">${T('ctl.play')}</span></button>
              <button class="btn primary" id="nextBtn">${T('ctl.next')}</button>
            </div>
            <p class="kbd-hint">${T('ctl.kbd')}</p>
          </div>
        </div>
      </section>`;

    const stage = $('#stage');
    state.scene = window.SCENES[q.scene].create(stage, { celebrate });

    $$('#stepDots button').forEach((b) => {
      b.addEventListener('click', () => {
        stopPlay();
        renderStep(Number(b.dataset.step));
      });
    });
    $('#prevBtn').addEventListener('click', () => { stopPlay(); renderStep(state.step - 1); });
    $('#nextBtn').addEventListener('click', () => { stopPlay(); renderStep(state.step + 1); });
    $('#playBtn').addEventListener('click', () => (state.playing ? stopPlay() : startPlay()));

    state.step = 0;
    renderStep(0, false);
  }

  function renderStep(step, animate) {
    const c = currentContest();
    const q = currentQuestion();
    if (!c || !q) return;
    const steps = qv(c, q, 'steps');
    const last = steps.length - 1;
    const target = Math.max(0, Math.min(last, step));
    const animateIt = animate !== false && target > state.step;
    state.step = target;

    const s = steps[target];
    $('#stepNo').textContent = T('explainer.step', { n: target + 1 });
    $('#stepTitle').textContent = s.t;
    $('#stepText').innerHTML = s.d;
    $('#stepNow').textContent = target + 1;

    $$('#stepDots button').forEach((b, i) => {
      b.classList.toggle('is-on', i === target);
      b.classList.toggle('is-past', i < target);
    });

    $('#prevBtn').disabled = target === 0;
    $('#nextBtn').disabled = target === last;
    $('#nextBtn').textContent = target === last ? T('ctl.done') : T('ctl.next');

    if (state.scene) state.scene.render(target, animateIt);

    const copy = $('.step-copy');
    if (copy && animateIt && !reduceMotion.matches) {
      copy.classList.remove('swap');
      void copy.offsetWidth;
      copy.classList.add('swap');
    }
  }

  function startPlay() {
    const c = currentContest();
    const q = currentQuestion();
    if (!c || !q) return;
    const steps = qv(c, q, 'steps');
    stopPlay();
    if (state.step >= steps.length - 1) {
      state.step = 0;
      renderStep(0, false);
    }
    state.playing = true;
    updatePlayUI();
    const tick = () => {
      if (!state.playing) return;
      const cur = currentQuestion();
      if (!cur) return;
      const curSteps = qv(c, cur, 'steps');
      if (state.step >= curSteps.length - 1) {
        stopPlay();
        return;
      }
      renderStep(state.step + 1, true);
      state.playTimer = setTimeout(tick, 3900);
    };
    state.playTimer = setTimeout(tick, 800);
  }

  function stopPlay() {
    state.playing = false;
    if (state.playTimer) {
      clearTimeout(state.playTimer);
      state.playTimer = null;
    }
    updatePlayUI();
  }

  function updatePlayUI() {
    const btn = $('#playBtn');
    if (!btn) return;
    btn.classList.toggle('is-playing', state.playing);
    $('.play-txt', btn).textContent = state.playing ? T('ctl.pause') : T('ctl.play');
    btn.setAttribute('aria-pressed', state.playing ? 'true' : 'false');
  }

  /* ---------------------------------------------------------------- */
  /* extras                                                           */
  /* ---------------------------------------------------------------- */
  function renderExtras(c, q) {
    const host = $('#extras');
    const methods = qv(c, q, 'methods').map((m, i) => `
      <article class="method">
        <span class="method-no">${i + 2}</span>
        <h4>${m.title}</h4>
        <p>${m.body}</p>
      </article>`).join('');

    const follow = qv(c, q, 'follow');
    const done = Store.isDone(qKey(c, q));
    const idx = c.questions.findIndex((x) => x.id === q.id);
    const next = c.questions[idx + 1];
    const nextTitle = next ? qv(c, next, 'title') : '';

    host.innerHTML = `
      <section class="panel methods">
        <div class="panel-head">
          <span class="eyebrow">${T('methods.eyebrow')}</span>
          <h3>${T('methods.title')}</h3>
        </div>
        <div class="method-grid">${methods}</div>
      </section>

      <section class="panel follow">
        <div class="follow-copy">
          <span class="eyebrow">${T('follow.eyebrow')}</span>
          <h3>${follow.q}</h3>
        </div>
        <div class="follow-actions">
          <button class="btn ghost" id="hintBtn">${T('follow.hintBtn')}</button>
          <button class="btn primary" id="followBtn">${T('follow.answerBtn')}</button>
          <div class="follow-out" id="followOut" hidden></div>
        </div>
      </section>

      <section class="mastery">
        <div class="mastery-copy">
          <span class="eyebrow">${T('mastery.eyebrow')}</span>
          <p>${done ? T('mastery.done') : T('mastery.todo')}</p>
        </div>
        <button class="check-btn ${done ? 'is-done' : ''}" id="masterBtn">
          <span class="check-box" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <span>${done ? T('mastery.marked') : T('mastery.mark')}</span>
        </button>
        ${next ? `<a class="next-q" href="${routeHref(state.month, state.contest, next.id)}">${T('next.next', { label: next.label })} <b>${nextTitle}</b><span>→</span></a>`
               : `<a class="next-q" href="${routeHref(state.month, state.contest, c.questions[0].id)}">${T('next.back', { label: c.questions[0].label })} <b>${qv(c, c.questions[0], 'title')}</b><span>→</span></a>`}
      </section>`;

    $('#hintBtn').addEventListener('click', () => {
      const out = $('#followOut');
      out.hidden = false;
      out.innerHTML = `<span class="fo-label">${T('follow.hintLabel')}</span>${follow.hint}`;
      out.classList.add('is-hint');
    });
    $('#followBtn').addEventListener('click', () => {
      const out = $('#followOut');
      out.hidden = false;
      out.classList.remove('is-hint');
      out.innerHTML = `<span class="fo-label">${T('follow.answerLabel')}</span><b>${follow.a}</b>`;
      celebrate(out);
    });
    $('#masterBtn').addEventListener('click', () => {
      const on = Store.toggle(qKey(c, q));
      const btn = $('#masterBtn');
      btn.classList.toggle('is-done', on);
      $('span:last-child', btn).textContent = on ? T('mastery.marked') : T('mastery.mark');
      $('.mastery-copy p').textContent = on ? T('mastery.done') : T('mastery.todo');
      if (on) celebrate(btn);

      const cur = currentContest();
      const chip = $(`.qchip[data-qid="${q.id}"]`);
      if (chip) chip.classList.toggle('is-done', on);
      const doneCount = cur.questions.filter((x) => Store.isDone(qKey(cur, x))).length;
      const fg = $('.ring-fg');
      if (fg) fg.setAttribute('stroke-dasharray', `${((2 * Math.PI * 24 * doneCount) / cur.questions.length).toFixed(1)} 150.8`);
      const ringNum = $('.ring-num b');
      if (ringNum) ringNum.textContent = doneCount;

      renderNav();
      renderTopbar(cur, q);
    });
  }

  /* ---------------------------------------------------------------- */
  /* pages                                                            */
  /* ---------------------------------------------------------------- */
  function renderHero(c) {
    const done = c.questions.filter((q) => Store.isDone(qKey(c, q))).length;
    const pct = c.questions.length ? done / c.questions.length : 0;
    const dash = (2 * Math.PI * 24 * pct).toFixed(1);
    const month = getMonth(state.month);
    return `
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-eyebrow">
            <span class="month-sticker">${monthLabel(month)}</span>
            <span>${month.en.toUpperCase()} · MOEMS</span>
            <span class="hero-src">${cv(c, 'full')}</span>
          </div>
          <h1>${cv(c, 'label')}${T('hero.suffix')} <span>${c.year}</span></h1>
          <p>${cv(c, 'blurb')}</p>
          <ul class="hero-stats">
            <li><b>${c.questions.length}</b> ${T('hero.problems', { n: '' }).trim()}</li>
            <li><b>${c.duration}</b> ${T('hero.minutes', { n: '' }).trim()}</li>
            <li><b>${c.questions.length}</b> ${T('hero.animations', { n: '' }).trim()}</li>
          </ul>
        </div>
        <div class="hero-progress">
          <svg viewBox="0 0 60 60" class="ring" aria-hidden="true">
            <circle class="ring-bg" cx="30" cy="30" r="24"/>
            <circle class="ring-fg" cx="30" cy="30" r="24" stroke-dasharray="${dash} 150.8"/>
          </svg>
          <div class="ring-num"><b>${done}</b><span>/ ${c.questions.length}</span></div>
          <p>${T('hero.mastered')}</p>
        </div>
      </section>`;
  }

  function renderQuestionRail(c, q) {
    return `
      <nav class="qrail" aria-label="${T('qrail.aria')}">
        ${c.questions.map((item) => {
          const active = item.id === q.id;
          const done = Store.isDone(qKey(c, item));
          return `
            <button class="qchip ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}" data-qid="${item.id}" ${active ? 'aria-current="step"' : ''}>
              <span class="qchip-id">${item.label}</span>
              <span class="qchip-title">${qv(c, item, 'title')}</span>
              <span class="qchip-tick" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </button>`;
        }).join('')}
      </nav>`;
  }

  function renderReadyPage(c, q) {
    const app = $('#app');
    app.innerHTML = `
      ${renderHero(c)}
      ${renderQuestionRail(c, q)}
      ${questionCard(c, q)}
      <div id="explainer"></div>
      <div id="extras"></div>`;

    $('#answerBtn').addEventListener('click', () => {
      const btn = $('#answerBtn');
      const open = btn.classList.toggle('revealed');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      $('.ab-eye', btn).textContent = open ? T('q.answerLabel') : T('q.showAnswer');
      if (open) celebrate(btn);
    });

    $$('.qchip').forEach((chip) => {
      chip.addEventListener('click', () => {
        navigate(state.month, state.contest, chip.dataset.qid);
      });
    });

    buildExplainer(c, q);
    renderExtras(c, q);
    renderTopbar(c, q);
  }

  function renderSoonPage(c) {
    document.title = `${cv(c, 'label')} ${c.year} · ${T('soon.stamp')} — ${T('brand.name')}`;
    const app = $('#app');
    const topics = cv(c, 'topics') || [];
    app.innerHTML = `
      <section class="hero hero-soon">
        <div class="hero-copy">
          <div class="hero-eyebrow">
            <span class="month-sticker">${monthLabel(getMonth(state.month))}</span>
            <span>${getMonth(state.month).en.toUpperCase()} · MOEMS</span>
            <span class="hero-src">${cv(c, 'full')}</span>
          </div>
          <h1>${cv(c, 'label')}${T('hero.suffix')} <span>${c.year}</span></h1>
          <p>${cv(c, 'blurb')}</p>
        </div>
        <div class="soon-stamp">${T('soon.stamp')}</div>
      </section>

      <section class="panel soon-panel">
        <span class="eyebrow">${T('soon.eyebrow')}</span>
        <h3>${T('soon.title')}</h3>
        <ul class="topic-list">${topics.map((t) => `<li>${t}</li>`).join('')}</ul>
        <p class="soon-note">${T('soon.note')}</p>
        <a class="btn primary" href="${routeHref('nov', '2024-25', '1a')}">${T('soon.cta')}</a>
      </section>`;
    renderTopbar(c, null);
  }

  function renderResourcesPage() {
    const en = isEn();
    document.title = en ? 'MOEMS Resources & Guide — Math Olympiad Studio' : 'MOEMS 备考指南与官方资源 — 奥数小工坊';
    const app = $('#app');
    app.innerHTML = `
      <section class="hero hero-resources">
        <div class="hero-copy">
          <div class="hero-eyebrow">
            <span class="month-sticker">MOEMS</span>
            <span>DIVISION E · GRADES 4–6</span>
            <span class="hero-src">${en ? 'Official Contest Info & Guide' : '官方竞赛说明与辅导资源'}</span>
          </div>
          <h1>${en ? 'MOEMS Resources & Study Guide' : 'MOEMS 备考指南与核心资源'}</h1>
          <p>${en 
            ? 'Complete guide for the Mathematical Olympiads for Elementary and Middle Schools (Division E). Everything you need to prepare for Contest 1 through Contest 5.'
            : '专为小学 4~6 年级（Division E 组）MOEMS 校队选手准备的备考总览。包含官方网站、出题大纲、必读书单与真题刷题策略。'}</p>
        </div>
      </section>

      <section class="panel resources-panel">
        <div class="res-grid">
          <div class="res-card">
            <div class="res-tag">${en ? 'Official Portal' : '官方网站'}</div>
            <h3>${en ? 'MOEMS Official Website' : 'MOEMS 官方门户'}</h3>
            <p>${en 
              ? 'Founded in 1977, MOEMS is one of the most prestigious math competitions in the US, with over 150,000 students participating annually.'
              : '创立于 1977 年的美国全美最具影响力的小学与初中数学奥林匹克竞赛，每年有超 15 万名选手参加。'}</p>
            <div class="res-actions">
              <a class="btn primary" href="https://www.moems.org" target="_blank" rel="noopener">Visit MOEMS.org ↗</a>
              <a class="btn ghost" href="https://store.moems.org" target="_blank" rel="noopener">Official Store ↗</a>
            </div>
          </div>

          <div class="res-card">
            <div class="res-tag">${en ? 'Must-Have Books' : '经典备考书单'}</div>
            <h3>${en ? 'Official Problem Books' : '历年官方真题卷全集'}</h3>
            <p>${en 
              ? 'Books authored by MOEMS committee with full solutions and extensions:'
              : 'MOEMS 命题组编著的历年真题分类集（带官方详解和拓展题）：'}</p>
            <ul class="book-list">
              <li><strong>Math Olympiad Contest Problems Vol 1–4</strong> (Richard Kalman & George Lenchner)</li>
              <li><strong>Creative Problem Solving in School Mathematics</strong> (George Lenchner)</li>
            </ul>
          </div>
        </div>

        <div class="res-section">
          <h3>${en ? 'Contest Format & Rules (Division E)' : '竞赛规则与考试要点 (Division E)'}</h3>
          <div class="rules-table">
            <div class="rule-col">
              <h4>${en ? 'Timing & Format' : '时长与题量'}</h4>
              <p>${en ? '5 events per year (Nov–Mar). Each test has 5 questions in 30 minutes.' : '每年 5 场考试（11月至次年3月）。每次 5 道题，考试时间严格为 30 分钟。'}</p>
            </div>
            <div class="rule-col">
              <h4>${en ? 'Calculators' : '计算器规定'}</h4>
              <p>${en ? 'Calculators are NOT permitted. Pencils and scratch paper only.' : '严禁使用计算器！只能使用铅笔和草稿纸，重点考查心算速算与逻辑。'}</p>
            </div>
            <div class="rule-col">
              <h4>${en ? 'Scoring' : '评分标准'}</h4>
              <p>${en ? '1 point per question (total 25 pts for the year). Exact final answer only.' : '每题 1 分（全年满分 25 分）。只填最终答案，不写过程，单位与格式务必看清。'}</p>
            </div>
          </div>
        </div>

        <div class="res-section">
          <h3>${en ? 'November Contest 1 · Five Master Patterns' : '11 月第 1 场 (Contest 1) 必须掌握的 5 大母题模型'}</h3>
          <div class="pattern-cards">
            <div class="pat-item">
              <span class="pat-no">1</span>
              <h4>${en ? 'Friendly Numbers & Place Value' : '找数字好朋友与数位位值'}</h4>
              <p>${en ? '2×5=10, 4×25=100, 8×125=1000. Reorder factors or sum repeating-digit columns without carries.' : '2×5=10，4×25=100，8×125=1000。换序凑整或按数位拆解重复数字。'}</p>
            </div>
            <div class="pat-item">
              <span class="pat-no">2</span>
              <h4>${en ? 'Work Backwards (Inverse Operations)' : '倒推法（逆运算）'}</h4>
              <p>${en ? 'Start from the final target year (e.g. 2026), undo addition with subtraction and multiplication with division.' : '从最终年份或结果倒着算，加变减、乘变除，一步一步退回原点。'}</p>
            </div>
            <div class="pat-item">
              <span class="pat-no">3</span>
              <h4>${en ? 'Supposition (Chicken & Rabbit)' : '假设法（鸡兔同笼 / 硬币互换）'}</h4>
              <p>${en ? 'Assume all tickets/coins are of one type, find the excess/shortfall, divide by the unit price difference.' : '假设全是 A，算出总额差，除以单价差算出 B 的数量。'}</p>
            </div>
            <div class="pat-item">
              <span class="pat-no">4</span>
              <h4>${en ? 'Arithmetic Progressions' : '等差数列与植树原理'}</h4>
              <p>${en ? 'Terms = (Last − First) ÷ Step + 1. Always remember to add 1 for the starting fencepost.' : '项数 = (末项 − 首项) ÷ 公差 + 1。牢记植树原理末尾必须加 1。'}</p>
            </div>
            <div class="pat-item">
              <span class="pat-no">5</span>
              <h4>${en ? 'Perimeter Projection & Dissection' : '几何图形拼接与周长投影'}</h4>
              <p>${en ? 'Stair-step and composite rectangular boundaries project to their bounding box: Perimeter = 2 × (Width + Max Height).' : '并排阶梯长方形与平放展开图，外圈周长可平移投影到外接矩形 2×(宽+高)。'}</p>
            </div>
          </div>
        </div>

        <div class="res-cta">
          <p>${en ? 'Ready to test your skills? Jump into our interactive walkthroughs!' : '准备好开始做题了吗？现在就去体验交互式动画真题讲解吧！'}</p>
          <a class="btn primary" href="#/nov/2025-26/1a">${en ? 'Start Practice (2025–26 Contest 1)' : '进入 2025–26 第 1 场真题'}</a>
        </div>
      </section>`;

    $('#crumb').innerHTML = `<span>${en ? 'Resources' : '竞赛资源'}</span> <span class="sep">/</span> <span class="now">${en ? 'MOEMS Guide' : '官方指南与题型总结'}</span>`;
    $('#progressPill').innerHTML = `<span class="pp-dot"></span>${en ? 'Official Guide' : '官方指南'}`;
  }

  function renderPage() {
    applyStaticI18n();

    const route = readRoute();
    if (route.isResources) {
      state.isResources = true;
      stopPlay();
      renderNav();
      renderResourcesPage();
      return;
    }
    state.isResources = false;

    state.month = route.month;
    state.contest = route.contest;

    const c = getContest(route.month, route.contest);
    if (!c) {
      navigate('nov', '2025-26', '1a');
      return;
    }

    stopPlay();
    if (state.scene && state.scene.dispose) {
      state.scene.dispose();
      state.scene = null;
    }

    renderNav();

    if (c.status !== 'ready') {
      state.qid = '';
      renderSoonPage(c);
      $('#progressPill').innerHTML = `<span class="pp-dot"></span>${T('top.soon')}`;
      return;
    }

    const q = c.questions.find((x) => x.id === route.qid) || c.questions[0];
    state.qid = q.id;
    state.qIndex = c.questions.findIndex((x) => x.id === q.id);
    document.title = `${q.label} ${qv(c, q, 'title')} · ${cv(c, 'label')} ${c.year} — ${T('brand.name')}`;
    renderReadyPage(c, q);
  }

  function navigate(month, contest, qid) {
    const href = routeHref(month, contest, qid);
    if (location.hash === href) {
      renderPage();
    } else {
      location.hash = href;
    }
  }

  window.addEventListener('hashchange', () => {
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('keydown', (e) => {
    if (!$('#explainer')) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') {
      const c = currentContest();
      const q = currentQuestion();
      if (!c || !q) return;
      const steps = qv(c, q, 'steps');
      if (state.step >= steps.length - 1) return;
      e.preventDefault();
      stopPlay();
      renderStep(state.step + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopPlay();
      renderStep(state.step - 1);
    } else if (e.key === ' ') {
      const b = document.activeElement;
      if (b && b.tagName === 'BUTTON') return;
      e.preventDefault();
      state.playing ? stopPlay() : startPlay();
    }
  });

  /* language toggle -------------------------------------------------- */
  $$('#langToggle button').forEach((b) => {
    b.addEventListener('click', () => {
      if (window.I18N.get() === b.dataset.lang) return;
      const keep = state.step;
      const c = currentContest();
      const wasReady = !!(c && c.status === 'ready');
      window.I18N.set(b.dataset.lang);
      applyStaticI18n();
      renderPage();
      if (wasReady && $('#explainer')) {
        const q = currentQuestion();
        if (q) {
          const steps = qv(currentContest(), q, 'steps');
          renderStep(Math.min(keep, steps.length - 1), false);
        }
      }
    });
  });

  /* mobile menu ------------------------------------------------------ */
  const menuBtn = $('#menuBtn');
  const scrim = $('#scrim');
  const sidebar = $('#sidebar');
  function setMenu(open) {
    sidebar.classList.toggle('is-open', open);
    menuBtn.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    scrim.hidden = !open;
  }
  menuBtn.addEventListener('click', () => setMenu(!sidebar.classList.contains('is-open')));
  scrim.addEventListener('click', () => setMenu(false));
  $('#contestNav').addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });

  /* init ------------------------------------------------------------- */
  if (!location.hash) {
    history.replaceState(null, '', '#/nov/2024-25/1a');
  }
  renderPage();
})();
