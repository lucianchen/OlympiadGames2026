(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fmtInt = (v) => Math.round(v).toLocaleString('en-US');
  const T = (key, vars) => window.I18N.t(key, vars);

  function countUp(el, to, opts) {
    if (!el) return;
    opts = opts || {};
    const duration = opts.duration || 720;
    const delay = opts.delay || 0;
    const format = opts.format || fmtInt;
    const from = typeof el._val === 'number' ? el._val : 0;
    el._val = to;
    if (el._raf) cancelAnimationFrame(el._raf);
    if (reduceMotion.matches || duration <= 0 || from === to) {
      el.textContent = format(to);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start - delay) / duration));
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = format(from + (to - from) * e);
      if (p < 1) el._raf = requestAnimationFrame(tick);
      else {
        el.textContent = format(to);
        el._raf = null;
      }
    };
    el._raf = requestAnimationFrame(tick);
  }

  function setClass(el, cls, on) {
    if (el) el.classList.toggle(cls, !!on);
  }

  const COIN_Q = '<span class="coin coin-q" aria-hidden="true">25¢</span>';
  const COIN_D = '<span class="coin coin-d" aria-hidden="true">10¢</span>';

  const ICON_COIN = `
    <svg viewBox="0 0 48 48" class="ico" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#ffd75e" stroke="#e0a400" stroke-width="2.4"/>
      <circle cx="24" cy="24" r="14.5" fill="none" stroke="#fff3bf" stroke-width="2.6"/>
      <path d="M24 15.5v17M20 20.5h6.4a3.4 3.4 0 0 1 0 6.8H20" stroke="#a06a00" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`;
  const ICON_FLOWER = `
    <svg viewBox="0 0 48 48" class="ico" aria-hidden="true">
      <g fill="#ff9ecb">
        <circle cx="24" cy="13" r="7"/><circle cx="35" cy="21" r="7"/>
        <circle cx="31" cy="34" r="7"/><circle cx="17" cy="34" r="7"/>
        <circle cx="13" cy="21" r="7"/>
      </g>
      <circle cx="24" cy="24" r="6" fill="#ffe27a" stroke="#f5b800" stroke-width="1.7"/>
    </svg>`;

  const SCENES = {};

  /* ------------------------------------------------------------------ *
   * 1A — 凑整巧算
   * ------------------------------------------------------------------ */
  SCENES.q1a = {
    create(stage, ctx) {
      const values = [2, 4, 5, 15, 25];
      const xs = [94, 188, 282, 376, 470];
      const tiles = values.map((v, i) => `
        <g class="tile" data-i="${i}" transform="translate(${xs[i]},88)">
          <rect class="tile-bg" width="76" height="76" rx="18"/>
          <text class="tile-num" x="38" y="49" text-anchor="middle">${v}</text>
        </g>`).join('');
      const xs2 = values.slice(0, -1).map((v, i) => xs[i] + 76 + 9);
      const times = xs2.map((x) => `<text class="times" x="${x}" y="132" text-anchor="middle">×</text>`).join('');

      stage.innerHTML = `
        <div class="scene scene-q1a" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 380" preserveAspectRatio="xMidYMid meet">
            <g class="tiles">${tiles}</g>
            <g class="times-row">${times}</g>

            <g class="bracket bracket-a">
              <path d="M132 178 v16 H320 v-16"/>
              <rect class="lbl-bg" x="168" y="184" width="116" height="26" rx="13"/>
              <text class="br-lbl" x="226" y="202" text-anchor="middle">2 × 5 = 10</text>
            </g>
            <g class="bracket bracket-b">
              <path d="M226 220 v16 H508 v-16"/>
              <rect class="lbl-bg" x="295" y="226" width="144" height="26" rx="13"/>
              <text class="br-lbl" x="367" y="244" text-anchor="middle">4 × 25 = 100</text>
            </g>

            <g class="eq-group">
              <text class="eq-line" x="320" y="330" text-anchor="middle">10 × 100 × 15 = <tspan class="eq-res">0</tspan></text>
            </g>
          </svg>
          <div class="stamp">${T('scene.q1a.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q1a');
      const tileEls = Array.from(root.querySelectorAll('.tile'));
      const res = root.querySelector('.eq-res');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          setClass(root, 'pairs-on', step >= 1);
          tileEls.forEach((el, i) => {
            setClass(el, 'pair-a', step >= 1 && (i === 0 || i === 2));
            setClass(el, 'pair-b', step >= 1 && (i === 1 || i === 4));
            setClass(el, 'dim', step >= 3);
          });
          if (step >= 3 && (animate || last < 3)) {
            countUp(res, 15000, { duration: 820, delay: 120 });
          }
          if (step < 3) {
            res._val = 0;
            res.textContent = '0';
          }
          if (step === 4 && last < 4) {
            ctx.celebrate(root.querySelector('.stamp'));
          }
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 1B — 倒推法
   * ------------------------------------------------------------------ */
  SCENES.q1b = {
    create(stage, ctx) {
      const boxes = [
        { x: 40, title: T('scene.q1b.lucky'), val: '?' },
        { x: 250, title: T('scene.q1b.afterMul'), val: '?' },
        { x: 460, title: T('scene.q1b.final'), val: '2024' }
      ];
      const boxSvg = boxes.map((b) => `
        <g class="vbox" transform="translate(${b.x},90)">
          <rect width="140" height="96" rx="20"/>
          <text class="vb-title" x="70" y="30" text-anchor="middle">${b.title}</text>
          <text class="vb-val" x="70" y="72" text-anchor="middle">${b.val}</text>
        </g>`).join('');

      stage.innerHTML = `
        <div class="scene scene-q1b" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 380" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrowF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#20242e"/>
              </marker>
              <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#ff8a3d"/>
              </marker>
            </defs>

            ${boxSvg}

            <g class="fwd">
              <line x1="180" y1="138" x2="250" y2="138" marker-end="url(#arrowF)"/>
              <line x1="390" y1="138" x2="460" y2="138" marker-end="url(#arrowF)"/>
            </g>
            <g class="op op-mul"><rect x="188" y="120" width="54" height="36" rx="12"/><text x="215" y="145" text-anchor="middle">× 3</text></g>
            <g class="op op-add"><rect x="398" y="120" width="54" height="36" rx="12"/><text x="425" y="145" text-anchor="middle">+ 95</text></g>

            <path class="rev rev-1" d="M530 188 v30 q0 12 -12 12 H332 q-12 0 -12 -12 v-30" marker-end="url(#arrowR)"/>
            <g class="rev-lbl rev-lbl-1"><rect x="398" y="238" width="54" height="30" rx="11"/><text x="425" y="259" text-anchor="middle">− 95</text></g>

            <path class="rev rev-2" d="M320 188 v58 q0 12 -12 12 H122 q-12 0 -12 -12 v-58" marker-end="url(#arrowR)"/>
            <g class="rev-lbl rev-lbl-2"><rect x="188" y="266" width="54" height="30" rx="11"/><text x="215" y="287" text-anchor="middle">÷ 3</text></g>

            <text class="q1b-note" x="320" y="348" text-anchor="middle">${T('scene.q1b.note')}</text>
          </svg>
          <div class="stamp">${T('scene.q1b.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q1b');
      const vals = Array.from(root.querySelectorAll('.vb-val'));
      const check = root.querySelectorAll('.op');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 1) countUp(vals[1], 1929, { duration: animate ? 700 : 0 });
          if (step >= 2) countUp(vals[0], 643, { duration: animate ? 700 : 0 });
          if (step < 2) {
            vals[0]._val = 0;
            vals[0].textContent = '?';
          }
          if (step < 1) {
            vals[1]._val = 0;
            vals[1].textContent = '?';
          }
          check.forEach((el) => setClass(el, 'ok', step >= 3));
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 1C — 假设法
   * ------------------------------------------------------------------ */
  SCENES.q1c = {
    create(stage, ctx) {
      stage.innerHTML = `
        <div class="scene scene-q1c" data-step="0">
          <div class="c-boxes" id="q1cBoxes"></div>
          <div class="c-readout">
            <div class="c-total">${T('scene.q1c.total')} <b id="q1cTotal">?</b> <span>/ 1250</span></div>
            <div class="c-gap" id="q1cGap">${T('scene.q1c.short', { n: 450 })}</div>
          </div>
          <div class="c-formula" id="q1cFormula">
            <span class="cf cf-1">${T('scene.q1c.allCoins', { n: 800 })}</span>
            <span class="cf cf-2">${T('scene.q1c.eachFlower', { n: 150 })}</span>
            <span class="cf cf-3">800 + 3 × 150 = <b>1250</b></span>
          </div>
          <div class="stamp">${T('scene.q1c.answer', { n: 3 })}</div>
        </div>`;

      const root = stage.querySelector('.scene-q1c');
      const host = root.querySelector('#q1cBoxes');
      const totalEl = root.querySelector('#q1cTotal');
      const gapEl = root.querySelector('#q1cGap');
      const boxes = [];
      for (let i = 0; i < 8; i++) {
        const el = document.createElement('div');
        el.className = 'mbox';
        el.dataset.kind = 'unknown';
        el.innerHTML = `
          <div class="mbox-inner">
            <span class="mbox-q">?</span>
            <span class="mbox-body">
              <span class="mbox-icon"></span>
              <span class="mbox-val"></span>
            </span>
          </div>
          <span class="mbox-bubble">+150</span>`;
        host.appendChild(el);
        boxes.push(el);
      }

      let timers = [];
      const clearTimers = () => {
        timers.forEach((t) => clearTimeout(t));
        timers = [];
      };

      function setKind(el, kind, delay) {
        timers.push(setTimeout(() => {
          el.dataset.kind = kind;
          const icon = el.querySelector('.mbox-icon');
          const val = el.querySelector('.mbox-val');
          if (kind === 'coin') {
            icon.innerHTML = ICON_COIN;
            val.textContent = '100';
            el.classList.remove('is-flower');
          } else if (kind === 'flower') {
            icon.innerHTML = ICON_FLOWER;
            val.textContent = '250';
            el.classList.add('is-flower', 'bump');
            timers.push(setTimeout(() => el.classList.remove('bump'), 500));
          }
        }, delay || 0));
      }

      let last = -1;

      return {
        render(step, animate) {
          clearTimers();
          root.dataset.step = step;

          const flowerIdx = [7, 4, 1];

          if (step === 0) {
            boxes.forEach((b) => { b.dataset.kind = 'unknown'; b.classList.remove('is-flower', 'bump'); });
            totalEl._val = 0;
            totalEl.textContent = '?';
          }

          if (step >= 1) {
            boxes.forEach((b, i) => {
              if (step >= 3 && flowerIdx.includes(i)) return;
              setKind(b, 'coin', i * 55);
            });
            if (step < 3) {
              countUp(totalEl, 800, { duration: animate ? 700 : 0, delay: animate ? 200 : 0 });
            }
          }

          if (step === 3) {
            totalEl._val = 800;
            totalEl.textContent = '800';
            flowerIdx.forEach((idx, k) => {
              const b = boxes[idx];
              b.dataset.kind = 'coin';
              b.querySelector('.mbox-icon').innerHTML = ICON_COIN;
              b.querySelector('.mbox-val').textContent = '100';
              b.classList.remove('is-flower');
              setKind(b, 'flower', 420 + k * 420);
              timers.push(setTimeout(() => {
                countUp(totalEl, 950 + k * 150, { duration: 420 });
              }, 420 + k * 420));
            });
          } else if (step === 4) {
            flowerIdx.forEach((idx) => setKind(boxes[idx], 'flower', 0));
            countUp(totalEl, 1250, { duration: 0 });
          }

          gapEl.classList.toggle('show', step === 2);
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        },
        dispose: clearTimers
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 1D — 配对与差额
   * ------------------------------------------------------------------ */
  SCENES.q1d = {
    create(stage, ctx) {
      const pairs = Array.from({ length: 12 }).map((_, i) => `
        <div class="pair" style="--i:${i}">
          <span class="coin coin-q sm">25¢</span>
          <span class="coin coin-d sm">10¢</span>
        </div>`).join('');

      stage.innerHTML = `
        <div class="scene scene-q1d" data-step="0">
          <div class="d-block d-intro" data-min="0">
            <div class="d-piles">
              <div class="d-pile">${COIN_Q}<span>25¢ × ?</span></div>
              <div class="d-pile">${COIN_D}<span>10¢ × ?</span></div>
            </div>
            <div class="d-swaprow">
              <span class="d-total">${T('scene.q1d.total')} <b>$4.95</b></span>
              <span class="d-arrow">${T('scene.q1d.swap')}</span>
              <span class="d-total dim">→ <b>$4.50</b><em>${T('scene.q1d.less')}</em></span>
            </div>
          </div>

          <div class="d-block d-insight" data-min="1">
            <div class="d-swapone">${COIN_Q}<span class="d-to">→</span>${COIN_D}<span class="minus">−15¢</span></div>
            <div class="d-eq">45 ÷ 15 = <b>3</b> <span class="d-eq-note">${T('scene.q1d.moreQ', { n: 3 })}</span></div>
          </div>

          <div class="d-block d-pairing" data-min="2">
            <div class="d-pairs-head">
              <span>${T('scene.q1d.pairHead')}</span>
              <span class="d-paircount"><b id="q1dPairNum">?</b> ${T('scene.q1d.pairUnit')}</span>
            </div>
            <div class="d-pairs">${pairs}</div>
            <div class="d-extra">
              <span class="d-extra-lbl">${T('scene.q1d.extra')}</span>${COIN_Q}<span class="d-x">× 3</span>
            </div>
            <div class="d-pairnote">${T('scene.q1d.pairNote')}</div>
          </div>

          <div class="d-block d-math" data-min="3">
            <code>495 − 3×25 = 420</code>
            <code>${T('scene.q1d.pairsEq', { n: 12 })}</code>
            <code>${T('scene.q1d.coinsEq', { n: 15 })}</code>
          </div>

          <div class="stamp">${T('scene.q1d.answer', { n: 15 })}</div>
        </div>`;

      const root = stage.querySelector('.scene-q1d');
      const blocks = Array.from(root.querySelectorAll('[data-min]'));
      const pairNum = root.querySelector('#q1dPairNum');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          blocks.forEach((b) => {
            const min = Number(b.dataset.min);
            const show = step >= min && !(min === 0 && step >= 1);
            b.classList.toggle('show', show);
          });
          if (step >= 3) countUp(pairNum, 12, { duration: animate ? 650 : 0 });
          if (step < 3) {
            pairNum._val = 0;
            pairNum.textContent = '?';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 1E — 展开图周长
   * ------------------------------------------------------------------ */
  SCENES.q1e = {
    create(stage, ctx) {
      const S = 12, X0 = 310, Y0 = 30;
      const X = (x) => X0 + x * S;
      const Y = (y) => Y0 + y * S;

      const faces = [
        { x: 0, y: 0, w: 12, h: 7, cls: 'f-front' },
        { x: 0, y: 7, w: 12, h: 8, cls: 'f-bottom' },
        { x: 0, y: 15, w: 12, h: 7, cls: 'f-back' },
        { x: 0, y: 22, w: 12, h: 8, cls: 'f-lid' },
        { x: -7, y: 7, w: 7, h: 8, cls: 'f-side' },
        { x: 12, y: 22, w: 7, h: 8, cls: 'f-side' }
      ];
      const faceSvg = faces.map((f) => `
        <rect class="face ${f.cls}" x="${X(f.x)}" y="${Y(f.y)}" width="${f.w * S}" height="${f.h * S}"/>`).join('');

      const folds = [
        [0, 7, 12, 7], [0, 15, 12, 15], [0, 22, 12, 22],
        [0, 7, 0, 15], [12, 22, 12, 30]
      ].map(([x1, y1, x2, y2]) =>
        `<line class="fold" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"/>`).join('');

      const segs = [
        [0, 0, 12, 0, 12],
        [12, 0, 12, 7, 7],
        [12, 7, 12, 15, 8],
        [12, 15, 12, 22, 7],
        [12, 22, 19, 22, 7],
        [19, 22, 19, 30, 8],
        [19, 30, 12, 30, 7],
        [12, 30, 0, 30, 12],
        [0, 30, 0, 22, 8],
        [0, 22, 0, 15, 7],
        [0, 15, -7, 15, 7],
        [-7, 15, -7, 7, 8],
        [-7, 7, 0, 7, 7],
        [0, 7, 0, 0, 7]
      ];

      const segSvg = segs.map((s, i) => {
        const [x1, y1, x2, y2, len] = s;
        const mx = (X(x1) + X(x2)) / 2;
        const my = (Y(y1) + Y(y2)) / 2;
        const dx = x2 - x1, dy = y2 - y1;
        const nx = dy, ny = -dx;
        const off = 15;
        return `
          <line class="seg seg-${len}" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}" style="--d:${i * 0.045}s"/>
          <g class="seg-label seg-label-${len}" transform="translate(${mx + (nx ? (nx > 0 ? off : -off) : 0)},${my + (ny ? (ny > 0 ? off : -off) : 0)})" style="--d:${i * 0.045}s">
            <rect x="-13" y="-10" width="26" height="20" rx="8"/>
            <text x="0" y="4" text-anchor="middle">${len}</text>
          </g>`;
      }).join('');

      const tally = [
        { len: 7, n: 8, sum: 56, x: 26, color: '#12b886' },
        { len: 8, n: 4, sum: 32, x: 228, color: '#ff8a3d' },
        { len: 12, n: 2, sum: 24, x: 430, color: '#2f6df6' }
      ].map((t) => `
        <g class="tally tally-${t.len}">
          <rect x="${t.x}" y="418" width="184" height="42" rx="14" class="tally-bg"/>
          <circle cx="${t.x + 22}" cy="439" r="6" fill="${t.color}"/>
          <text x="${t.x + 38}" y="444" class="tally-text">${T('scene.q1e.edge', { len: t.len, n: t.n, sum: t.sum })}</text>
        </g>`).join('');

      stage.innerHTML = `
        <div class="scene scene-q1e" data-step="0">
          <svg class="scene-svg" viewBox="0 0 620 520" preserveAspectRatio="xMidYMid meet">
            <g class="faces">${faceSvg}</g>
            <g class="folds">${folds}</g>
            <g class="seg-base">${segs.map(([x1, y1, x2, y2]) =>
              `<line x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"/>`).join('')}</g>
            <g class="segs">${segSvg}</g>

            <text class="face-cap" x="${X(6)}" y="${Y(11.4)}" text-anchor="middle">${T('scene.q1e.bottom')}</text>
            <text class="face-cap" x="${X(6)}" y="${Y(26.5)}" text-anchor="middle">${T('scene.q1e.lid')}</text>

            <g class="e-panel">
              <rect x="12" y="22" width="196" height="88" rx="16"/>
              <text x="28" y="50" class="e-line">${T('scene.q1e.base')}</text>
              <text x="28" y="76" class="e-line">${T('scene.q1e.height')}</text>
              <text x="28" y="100" class="e-line strong">= <tspan class="e-h">?</tspan> ${T('scene.q1e.unit')}</text>
            </g>

            <g class="tallies">${tally}</g>
            <text class="e-total" x="320" y="497" text-anchor="middle">${T('scene.q1e.perimeter')} <tspan class="e-ans">0</tspan> ${T('scene.q1e.unit')}</text>
          </svg>
          <div class="stamp">${T('scene.q1e.answer', { n: 112 })}</div>
        </div>`;

      const root = stage.querySelector('.scene-q1e');
      const hEl = root.querySelector('.e-h');
      const ansEl = root.querySelector('.e-ans');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 1) {
            countUp(hEl, 7, { duration: animate ? 650 : 0 });
          } else {
            hEl._val = 0;
            hEl.textContent = '?';
          }
          if (step >= 4) countUp(ansEl, 112, { duration: animate ? 700 : 0 });
          if (step < 4) {
            ansEl._val = 0;
            ansEl.textContent = '0';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 2025-26 1A — 数位与位值巧算 (7 + 77 + 777 + 7777 + 77777)
   * ------------------------------------------------------------------ */
  SCENES.q25_1a = {
    create(stage, ctx) {
      // 5 numbers lined up right
      // rows: 7 (ones), 77 (tens,ones), 777 (hun,tens,ones), 7777 (th,hun,tens,ones), 77777 (t-th,th,hun,tens,ones)
      // columns: col 0 (ten-thousands), col 1 (thousands), col 2 (hundreds), col 3 (tens), col 4 (ones)
      const colX = [140, 200, 260, 320, 380];
      const rows = [
        { y: 55, digits: [null, null, null, null, '7'] },
        { y: 95, digits: [null, null, null, '7', '7'] },
        { y: 135, digits: [null, null, '7', '7', '7'] },
        { y: 175, digits: [null, '7', '7', '7', '7'] },
        { y: 215, digits: ['7', '7', '7', '7', '7'] }
      ];

      const rowSvgs = rows.map((r, ri) => {
        return r.digits.map((d, ci) => {
          if (!d) return '';
          return `<g class="d-cell col-${ci} row-${ri}" transform="translate(${colX[ci]}, ${r.y})">
            <rect class="d-bg" x="-20" y="-18" width="40" height="36" rx="8"/>
            <text class="d-text" x="0" y="8" text-anchor="middle">${d}</text>
          </g>`;
        }).join('');
      }).join('');

      stage.innerHTML = `
        <div class="scene scene-q25-1a" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
            <g class="col-highlight col-hl-4"><rect x="355" y="32" width="50" height="230" rx="12"/></g>
            <g class="col-highlight col-hl-3"><rect x="295" y="72" width="50" height="190" rx="12"/></g>
            <g class="col-highlight col-hl-2"><rect x="235" y="112" width="50" height="150" rx="12"/></g>
            <g class="col-highlight col-hl-1"><rect x="175" y="152" width="50" height="110" rx="12"/></g>
            <g class="col-highlight col-hl-0"><rect x="115" y="192" width="50" height="70" rx="12"/></g>

            <text class="plus-sign" x="96" y="222">+</text>
            <g class="digits-grid">${rowSvgs}</g>
            <line class="sum-divider" x1="85" y1="246" x2="420" y2="246" stroke="#c0c8d8" stroke-width="2.5" stroke-linecap="round"/>

            <!-- place values panel -->
            <g class="pv-panel" transform="translate(450, 48)">
              <rect class="pv-bg" width="175" height="210" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
              <text class="pv-title" x="18" y="28">Place Values</text>
              <text class="pv-item pv-0" x="18" y="58">10k: 1 × 70k = 70,000</text>
              <text class="pv-item pv-1" x="18" y="88">1k: 2 × 7k = 14,000</text>
              <text class="pv-item pv-2" x="18" y="118">100: 3 × 700 = 2,100</text>
              <text class="pv-item pv-3" x="18" y="148">10: 4 × 70 = 280</text>
              <text class="pv-item pv-4" x="18" y="178">1: 5 × 7 = 35</text>
            </g>

            <g class="final-sum" transform="translate(320, 310)">
              <text class="sum-text" text-anchor="middle">
                Total = <tspan class="total-val">0</tspan>
              </text>
            </g>
          </svg>
          <div class="stamp">${T('scene.q25_1a.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q25-1a');
      const totalEl = root.querySelector('.total-val');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 4) {
            countUp(totalEl, 86415, { duration: animate ? 800 : 0 });
          } else if (step === 3) {
            countUp(totalEl, 84000, { duration: animate ? 500 : 0 });
          } else if (step === 2) {
            countUp(totalEl, 2415, { duration: animate ? 500 : 0 });
          } else if (step === 1) {
            countUp(totalEl, 35, { duration: animate ? 400 : 0 });
          } else {
            totalEl._val = 0;
            totalEl.textContent = '0';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 2025-26 1B — 长方形拼接与周长 (7 congruent rectangles, area 70)
   * ------------------------------------------------------------------ */
  SCENES.q25_1b = {
    create(stage, ctx) {
      // Large rectangle: width = 7 units (e.g. 7 * 32 = 224), height = 10 units (10 * 24 = 240)
      // Left part: width = 5 units (160), 5 rectangles stacked each height = 2 units (48)
      // Right part: width = 2 units (64), 2 rectangles stacked each height = 5 units (120)
      const ox = 208, oy = 55;
      const wSmall = 160, hStack = 48; // left 5: width 160 (5x), height 48 each (x) -> wait, width is y=5, height is x=2!
      const wRight = 64, hRight = 120; // right 2: width x=2 (64), height y=5 (120)!
      // total width = 160 + 64 = 224 (7 units: 7 * 32)
      // total height = 5 * 48 = 240 (10 units: 10 * 24) = 2 * 120 = 240!

      const leftRects = [0, 1, 2, 3, 4].map((i) => `
        <g class="sub-rect left-rect l-${i}" transform="translate(${ox}, ${oy + i * hStack})">
          <rect width="${wSmall}" height="${hStack}" rx="4"/>
          <text class="sub-rect-lbl" x="${wSmall / 2}" y="${hStack / 2 + 5}" text-anchor="middle">10 cm²</text>
        </g>`).join('');

      const rightRects = [0, 1].map((i) => `
        <g class="sub-rect right-rect r-${i}" transform="translate(${ox + wSmall}, ${oy + i * hRight})">
          <rect width="${wRight}" height="${hRight}" rx="4"/>
          <text class="sub-rect-lbl" x="${wRight / 2}" y="${hRight / 2 + 5}" text-anchor="middle">10 cm²</text>
        </g>`).join('');

      stage.innerHTML = `
        <div class="scene scene-q25-1b" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
            <g class="large-rect-outline">
              <rect x="${ox}" y="${oy}" width="${wSmall + wRight}" height="${5 * hStack}" rx="8" class="main-border"/>
            </g>

            <g class="rects-group">${leftRects}${rightRects}</g>

            <!-- Dim labels -->
            <g class="dim-labels">
              <!-- Top width: 5 cm + 2 cm = 7 cm -->
              <path class="dim-dim dim-w-l" d="M${ox} ${oy - 12} h${wSmall}"/>
              <text class="dim-txt dim-w-l-txt" x="${ox + wSmall / 2}" y="${oy - 18}" text-anchor="middle">y = 5 cm</text>

              <path class="dim-dim dim-w-r" d="M${ox + wSmall} ${oy - 12} h${wRight}"/>
              <text class="dim-txt dim-w-r-txt" x="${ox + wSmall + wRight / 2}" y="${oy - 18}" text-anchor="middle">x = 2 cm</text>

              <!-- Left height: 5x = 10 cm -->
              <path class="dim-dim dim-h-l" d="M${ox - 14} ${oy} v${5 * hStack}"/>
              <text class="dim-txt dim-h-l-txt" x="${ox - 24}" y="${oy + 120}" text-anchor="end">Height = 5x = 10 cm</text>

              <!-- Right height: 2y = 10 cm -->
              <path class="dim-dim dim-h-r" d="M${ox + wSmall + wRight + 14} ${oy} v${5 * hStack}"/>
              <text class="dim-txt dim-h-r-txt" x="${ox + wSmall + wRight + 24}" y="${oy + 120}" text-anchor="start">Height = 2y = 10 cm</text>

              <!-- Total width label at bottom -->
              <text class="dim-txt dim-total-w" x="${ox + (wSmall + wRight) / 2}" y="${oy + 5 * hStack + 32}" text-anchor="middle">
                Total Width = 5 + 2 = <b>7 cm</b>
              </text>
            </g>

            <g class="b-panel" transform="translate(320, 360)">
              <text class="b-calc" text-anchor="middle">
                Perimeter = 2 × (7 + 10) = <tspan class="p-ans">0</tspan> cm
              </text>
            </g>
          </svg>
          <div class="stamp">${T('scene.q25_1b.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q25-1b');
      const pAnsEl = root.querySelector('.p-ans');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 4) {
            countUp(pAnsEl, 34, { duration: animate ? 600 : 0 });
          } else {
            pAnsEl._val = 0;
            pAnsEl.textContent = '0';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 2025-26 1C — 贴纸数量与和倍关系 (Ashley, Beth, Connie, Deb = 46)
   * ------------------------------------------------------------------ */
  SCENES.q25_1c = {
    create(stage, ctx) {
      // Four friends: Connie (C), Beth (C+6), Ashley (2C+12), Deb (3C)
      // Visual bar models for each person
      stage.innerHTML = `
        <div class="scene scene-q25-1c" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
            <!-- Connie -->
            <g class="person-row p-connie" transform="translate(60, 50)">
              <text class="p-name" x="0" y="24">Connie</text>
              <rect class="bar bar-c" x="90" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="120" y="23" text-anchor="middle">C</text>
              <text class="val-lbl v-c" x="165" y="24">? stickers</text>
            </g>

            <!-- Beth -->
            <g class="person-row p-beth" transform="translate(60, 100)">
              <text class="p-name" x="0" y="24">Beth</text>
              <rect class="bar bar-c" x="90" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="120" y="23" text-anchor="middle">C</text>
              <rect class="bar bar-extra" x="156" y="4" width="90" height="28" rx="6"/>
              <text class="bar-lbl" x="201" y="23" text-anchor="middle">+ 6</text>
              <text class="val-lbl v-b" x="260" y="24">? stickers</text>
            </g>

            <!-- Ashley -->
            <g class="person-row p-ashley" transform="translate(60, 150)">
              <text class="p-name" x="0" y="24">Ashley</text>
              <rect class="bar bar-c" x="90" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="120" y="23" text-anchor="middle">C</text>
              <rect class="bar bar-c" x="154" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="184" y="23" text-anchor="middle">C</text>
              <rect class="bar bar-extra" x="218" y="4" width="130" height="28" rx="6"/>
              <text class="bar-lbl" x="283" y="23" text-anchor="middle">+ 12</text>
              <text class="val-lbl v-a" x="360" y="24">? stickers</text>
            </g>

            <!-- Deb -->
            <g class="person-row p-deb" transform="translate(60, 200)">
              <text class="p-name" x="0" y="24">Deb</text>
              <rect class="bar bar-c" x="90" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="120" y="23" text-anchor="middle">C</text>
              <rect class="bar bar-c" x="154" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="184" y="23" text-anchor="middle">C</text>
              <rect class="bar bar-c" x="218" y="4" width="60" height="28" rx="6"/>
              <text class="bar-lbl" x="248" y="23" text-anchor="middle">C</text>
              <text class="val-lbl v-d" x="295" y="24">? stickers</text>
            </g>

            <!-- Sum block -->
            <g class="c-sum-block" transform="translate(60, 260)">
              <rect class="sum-box" width="520" height="75" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
              <text class="sum-eq-1" x="260" y="30" text-anchor="middle">
                Total = 7C + 18 = 46 stickers
              </text>
              <text class="sum-eq-2" x="260" y="58" text-anchor="middle">
                7C = 28 → <tspan class="c-val">C = 4</tspan> | Beth = 4 + 6 = <tspan class="b-val">10</tspan>
              </text>
            </g>
          </svg>
          <div class="stamp">${T('scene.q25_1c.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q25-1c');
      const vCEl = root.querySelector('.v-c');
      const vBEl = root.querySelector('.v-b');
      const vAEl = root.querySelector('.v-a');
      const vDEl = root.querySelector('.v-d');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 4) {
            vCEl.textContent = '= 4';
            vBEl.textContent = '= 10 (Answer!)';
            vAEl.textContent = '= 20';
            vDEl.textContent = '= 12';
          } else {
            vCEl.textContent = '? stickers';
            vBEl.textContent = '? stickers';
            vAEl.textContent = '? stickers';
            vDEl.textContent = '? stickers';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 2025-26 1D — 等差数列与三位数区间 (20, 44, 68... 1004)
   * ------------------------------------------------------------------ */
  SCENES.q25_1d = {
    create(stage, ctx) {
      // Number line visualization
      stage.innerHTML = `
        <div class="scene scene-q25-1d" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
            <!-- Shaded range [100, 999] -->
            <rect class="range-zone" x="145" y="90" width="370" height="70" rx="8" fill="#e8f4ff" stroke="#bcd8fc" stroke-dasharray="4 4"/>
            <text class="range-tag" x="330" y="112" text-anchor="middle">Three-Digit Zone [100 ~ 999]</text>

            <!-- Main axis -->
            <line class="axis-line" x1="40" y1="180" x2="600" y2="180" stroke="#718096" stroke-width="3" stroke-linecap="round"/>

            <!-- Points on the axis -->
            <!-- 20 -->
            <g class="pt pt-start" transform="translate(60, 180)">
              <circle r="6" fill="#718096"/>
              <text class="pt-lbl" y="28" text-anchor="middle">20</text>
              <text class="pt-sub" y="-14" text-anchor="middle">Start</text>
            </g>

            <!-- 92 -->
            <g class="pt pt-92" transform="translate(130, 180)">
              <circle r="5" fill="#a0aec0"/>
              <text class="pt-lbl" y="28" text-anchor="middle">92</text>
            </g>

            <!-- Jump from 92 to 116 -->
            <path class="jump-arc j-first" d="M130 172 Q150 140 170 172" fill="none" stroke="#e53e3e" stroke-width="2.5" marker-end="url(#arrow)"/>
            <text class="jump-txt" x="150" y="145" text-anchor="middle">+24</text>

            <!-- 116 (First 3-digit) -->
            <g class="pt pt-first" transform="translate(170, 180)">
              <circle r="7" fill="#3182ce"/>
              <text class="pt-lbl strong" y="28" text-anchor="middle">116</text>
              <text class="pt-sub col-blue" y="-14" text-anchor="middle">First 3-digit</text>
            </g>

            <!-- Jumps in middle -->
            <path class="jump-big-arc" d="M170 170 Q325 80 480 170" fill="none" stroke="#3182ce" stroke-width="3" stroke-dasharray="6 4"/>
            <text class="jump-big-lbl" x="325" y="95" text-anchor="middle">36 jumps of 24 (864 total span)</text>

            <!-- 980 (Last 3-digit) -->
            <g class="pt pt-last" transform="translate(480, 180)">
              <circle r="7" fill="#3182ce"/>
              <text class="pt-lbl strong" y="28" text-anchor="middle">980</text>
              <text class="pt-sub col-blue" y="-14" text-anchor="middle">Last 3-digit</text>
            </g>

            <!-- Jump from 980 to 1004 -->
            <path class="jump-arc j-last" d="M480 172 Q515 140 550 172" fill="none" stroke="#e53e3e" stroke-width="2.5"/>
            <text class="jump-txt" x="515" y="145" text-anchor="middle">+24</text>

            <!-- 1004 -->
            <g class="pt pt-end" transform="translate(550, 180)">
              <circle r="6" fill="#718096"/>
              <text class="pt-lbl" y="28" text-anchor="middle">1004</text>
              <text class="pt-sub" y="-14" text-anchor="middle">End</text>
            </g>

            <!-- Formula panel -->
            <g class="calc-panel" transform="translate(120, 255)">
              <rect width="400" height="95" rx="14" fill="#ffffff" stroke="#cbd5e0" stroke-width="1.5"/>
              <text class="calc-row-1" x="200" y="32" text-anchor="middle">
                Span = 980 − 116 = 864
              </text>
              <text class="calc-row-2" x="200" y="58" text-anchor="middle">
                Number of Jumps = 864 ÷ 24 = 36
              </text>
              <text class="calc-row-3" x="200" y="82" text-anchor="middle">
                Terms = 36 + 1 = <tspan class="terms-count">0</tspan> numbers
              </text>
            </g>
          </svg>
          <div class="stamp">${T('scene.q25_1d.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q25-1d');
      const termsEl = root.querySelector('.terms-count');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 4) {
            countUp(termsEl, 37, { duration: animate ? 600 : 0 });
          } else {
            termsEl._val = 0;
            termsEl.textContent = '0';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  /* ------------------------------------------------------------------ *
   * 2025-26 1E — 10 × 15 网格互斥涂黑 (8 columns × 5 rows = 40)
   * ------------------------------------------------------------------ */
  SCENES.q25_1e = {
    create(stage, ctx) {
      // 10 rows (0..9), 15 cols (0..14)
      const numRows = 10;
      const numCols = 15;
      const cellSize = 22;
      const ox = 70, oy = 60;

      let cellsSvg = '';
      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const isShaded = (r % 2 === 0) && (c % 2 === 0);
          const x = ox + c * cellSize;
          const y = oy + r * cellSize;
          cellsSvg += `<rect class="grid-cell r-${r} c-${c} ${isShaded ? 'is-target' : ''}" 
            x="${x}" y="${y}" width="${cellSize - 2}" height="${cellSize - 2}" rx="3"/>`;
        }
      }

      // Col header indicators (1, 3, 5, 7, 9, 11, 13, 15)
      let colIndicators = '';
      for (let c = 0; c < numCols; c += 2) {
        colIndicators += `<text class="c-ind" x="${ox + c * cellSize + 10}" y="${oy - 8}" text-anchor="middle">${c + 1}</text>`;
      }

      // Row header indicators (1, 3, 5, 7, 9)
      let rowIndicators = '';
      for (let r = 0; r < numRows; r += 2) {
        rowIndicators += `<text class="r-ind" x="${ox - 12}" y="${oy + r * cellSize + 15}" text-anchor="end">${r + 1}</text>`;
      }

      stage.innerHTML = `
        <div class="scene scene-q25-1e" data-step="0">
          <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
            <g class="col-inds">${colIndicators}</g>
            <g class="row-inds">${rowIndicators}</g>
            <g class="grid-cells">${cellsSvg}</g>

            <!-- Explanation side block -->
            <g class="e-calc-box" transform="translate(425, 70)">
              <rect width="185" height="195" rx="14" fill="#ffffff" stroke="#cbd5e0" stroke-width="1.5"/>
              <text class="ec-head" x="20" y="32">Maximum Shading</text>
              <text class="ec-line el-1" x="20" y="66">15 Columns:</text>
              <text class="ec-sub es-1" x="20" y="88">→ 8 odd cols</text>
              <text class="ec-line el-2" x="20" y="122">10 Rows:</text>
              <text class="ec-sub es-2" x="20" y="144">→ 5 odd rows</text>
              <line x1="20" y1="158" x2="165" y2="158" stroke="#e2e8f0" stroke-width="1.5"/>
              <text class="ec-total" x="20" y="182">8 × 5 = <tspan class="shaded-count">0</tspan></text>
            </g>

            <text class="rule-hint" x="235" y="315" text-anchor="middle">
              No two shaded squares touch by edge or corner
            </text>
          </svg>
          <div class="stamp">${T('scene.q25_1e.answer')}</div>
        </div>`;

      const root = stage.querySelector('.scene-q25-1e');
      const countEl = root.querySelector('.shaded-count');
      let last = -1;

      return {
        render(step, animate) {
          root.dataset.step = step;
          if (step >= 4) {
            countUp(countEl, 40, { duration: animate ? 600 : 0 });
          } else if (step === 3) {
            countUp(countEl, 40, { duration: animate ? 700 : 0 });
          } else {
            countEl._val = 0;
            countEl.textContent = '0';
          }
          if (step === 4 && last < 4) ctx.celebrate(root.querySelector('.stamp'));
          last = step;
        }
      };
    }
  };

  
  /* ------------------------------------------------------------------ *
   * Generic Animated Math Diagram Helper
   * ------------------------------------------------------------------ */
  function makeBasicScene(config) {
    return {
      create(stage, ctx) {
        stage.innerHTML = `
          <div class="scene scene-math-card" data-step="0">
            <svg class="scene-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet">
              <rect x="40" y="30" width="560" height="340" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
              <text class="sc-title" x="320" y="70" text-anchor="middle">${config.title || 'Interactive Step'}</text>
              <g class="sc-steps">${config.svgContent || ''}</g>
              <g class="sc-ans-box" transform="translate(320, 325)">
                <text class="sc-ans-txt" text-anchor="middle">
                  ${config.ansLabel || 'Result'}: <tspan class="sc-ans-val">0</tspan>
                </text>
              </g>
            </svg>
            <div class="stamp">${config.stamp || 'Answer'}</div>
          </div>`;
        const root = stage.querySelector('.scene-math-card');
        const ansEl = root.querySelector('.sc-ans-val');
        let last = -1;
        return {
          render(step, animate) {
            root.dataset.step = step;
            const items = root.querySelectorAll('.step-item');
            items.forEach((item, idx) => {
              item.classList.toggle('is-visible', idx <= step);
            });
            if (step >= (config.finalStep || 2)) {
              if (config.numericAnswer != null) {
                countUp(ansEl, config.numericAnswer, { duration: animate ? 600 : 0 });
              } else {
                ansEl.textContent = config.answerStr || '';
              }
            } else {
              ansEl._val = 0;
              ansEl.textContent = '0';
            }
            if (step >= (config.finalStep || 2) && last < (config.finalStep || 2)) {
              ctx.celebrate(root.querySelector('.stamp'));
            }
            last = step;
          }
        };
      }
    };
  }

  // 2023-24 Scenes
  SCENES.q23_1a = makeBasicScene({
    title: 'Friendly Pairs to 100',
    svgContent: `
      <g class="step-item step-0" transform="translate(80, 110)">
        <rect width="480" height="42" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="240" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#1e293b">73 + 34 + 28 + 27 + 66 + 12</text>
      </g>
      <g class="step-item step-1" transform="translate(80, 170)">
        <rect x="0" y="0" width="150" height="46" rx="10" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
        <text x="75" y="28" text-anchor="middle" font-weight="800" fill="#0369a1">73 + 27 = 100</text>
        <rect x="165" y="0" width="150" height="46" rx="10" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
        <text x="240" y="28" text-anchor="middle" font-weight="800" fill="#0369a1">34 + 66 = 100</text>
        <rect x="330" y="0" width="150" height="46" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="405" y="28" text-anchor="middle" font-weight="800" fill="#b45309">28 + 12 = 40</text>
      </g>
      <g class="step-item step-2" transform="translate(80, 240)">
        <text x="240" y="25" text-anchor="middle" font-size="20" font-weight="800" fill="#2563eb">100 + 100 + 40 = 240</text>
      </g>
    `,
    ansLabel: 'Sum',
    numericAnswer: 240,
    stamp: 'Answer <b>240</b>',
    finalStep: 2
  });

  SCENES.q23_1b = makeBasicScene({
    title: '4×4 Grid Area − 4 Corner Triangles',
    svgContent: `
      <g transform="translate(140, 100)">
        <!-- 4x4 Grid -->
        <rect width="160" height="160" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <line x1="40" y1="0" x2="40" y2="160" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="80" y1="0" x2="80" y2="160" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="120" y1="0" x2="120" y2="160" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="0" y1="40" x2="160" y2="40" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="0" y1="80" x2="160" y2="80" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="0" y1="120" x2="160" y2="120" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Octagon polygon -->
        <polygon points="80,0 160,40 160,120 80,160 0,120 0,40" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" opacity="0.85"/>
        <!-- 4 cut corners -->
        <polygon points="0,0 80,0 0,40" fill="#fee2e2" stroke="#ef4444"/>
        <polygon points="80,0 160,0 160,40" fill="#fee2e2" stroke="#ef4444"/>
        <polygon points="160,120 160,160 80,160" fill="#fee2e2" stroke="#ef4444"/>
        <polygon points="0,120 80,160 0,160" fill="#fee2e2" stroke="#ef4444"/>
      </g>
      <g transform="translate(340, 120)">
        <text class="step-item step-0" x="0" y="24" font-size="14" font-weight="700" fill="#334155">Total Grid = 4 × 4 = 16</text>
        <text class="step-item step-1" x="0" y="60" font-size="14" font-weight="700" fill="#dc2626">Each Corner = (2 × 1) ÷ 2 = 1</text>
        <text class="step-item step-1" x="0" y="86" font-size="14" font-weight="700" fill="#dc2626">4 Corners Total = 4 × 1 = 4</text>
        <text class="step-item step-2" x="0" y="125" font-size="16" font-weight="800" fill="#2563eb">Octagon = 16 − 4 = 12</text>
      </g>
    `,
    ansLabel: 'Octagon Area',
    numericAnswer: 12,
    stamp: 'Area <b>12</b> sq units',
    finalStep: 2
  });

  SCENES.q23_1c = makeBasicScene({
    title: 'Multiples of LCM(20, 35) = 140',
    svgContent: `
      <g transform="translate(80, 110)">
        <rect width="480" height="50" rx="10" fill="#f1f5f9" stroke="#cbd5e1"/>
        <text x="240" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">20 = 2² × 5 | 35 = 5 × 7 → LCM = 140</text>
      </g>
      <g class="step-item step-1" transform="translate(60, 185)">
        <text x="260" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">
          140, 280, 420, 560, 700, 840, 980
        </text>
      </g>
      <g class="step-item step-2" transform="translate(60, 235)">
        <text x="260" y="25" text-anchor="middle" font-size="16" font-weight="800" fill="#1e293b">
          Range [100 ~ 999]: 140 × 1 to 140 × 7 → 7 numbers
        </text>
      </g>
    `,
    ansLabel: 'Count',
    numericAnswer: 7,
    stamp: 'Count <b>7</b>',
    finalStep: 2
  });

  SCENES.q23_1d = makeBasicScene({
    title: 'Money Transfer: Michael (5x) & Isabella (x)',
    svgContent: `
      <g transform="translate(80, 110)">
        <text x="0" y="20" font-weight="800" fill="#1e293b">Start:</text>
        <rect x="90" y="2" width="250" height="26" rx="6" fill="#3b82f6"/>
        <text x="215" y="20" text-anchor="middle" fill="#fff" font-weight="800">Michael (5x)</text>
        <rect x="360" y="2" width="50" height="26" rx="6" fill="#f59e0b"/>
        <text x="385" y="20" text-anchor="middle" fill="#fff" font-weight="800">I (x)</text>
      </g>
      <g class="step-item step-1" transform="translate(80, 165)">
        <text x="0" y="20" font-weight="800" fill="#1e293b">Transfer:</text>
        <text x="90" y="20" font-size="14" font-weight="700" fill="#dc2626">Michael gives $36 → Isabella</text>
        <text x="90" y="44" font-size="14" font-weight="700" fill="#2563eb">New: Isabella (x + 36) = 2 × (5x − 36)</text>
      </g>
      <g class="step-item step-2" transform="translate(80, 240)">
        <text x="240" y="20" text-anchor="middle" font-size="16" font-weight="800" fill="#059669">
          9x = 108 → x = 12 → Michael = 5 × 12 = $60
        </text>
      </g>
    `,
    ansLabel: 'Michael Started With',
    numericAnswer: 60,
    stamp: 'Michael has <b>$60</b>',
    finalStep: 2
  });

  SCENES.q23_1e = makeBasicScene({
    title: 'Unique Subset Sums of {0, 1, 2, 4, 8, 16}',
    svgContent: `
      <g transform="translate(70, 110)">
        <rect width="500" height="45" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="250" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#334155">Non-zero elements: 1, 2, 4, 8, 16 (Powers of 2)</text>
      </g>
      <g class="step-item step-1" transform="translate(70, 175)">
        <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">
          Subsets sum uniquely to every integer from 1 to 31 (2⁵ − 1 = 31)
        </text>
      </g>
      <g class="step-item step-2" transform="translate(70, 225)">
        <text x="250" y="25" text-anchor="middle" font-size="16" font-weight="800" fill="#059669">
          Adding 0 allows every single number to be a sum of 2+ numbers: 31 unique sums
        </text>
      </g>
    `,
    ansLabel: 'Different Sums',
    numericAnswer: 31,
    stamp: 'Unique Sums <b>31</b>',
    finalStep: 2
  });

  // 2022-23 Scenes
  SCENES.q22_1a = makeBasicScene({
    title: 'Symmetric Place Values: 222 + 2022 + 2202 + 2220',
    svgContent: `
      <g transform="translate(100, 105)">
        <text x="0" y="22" font-weight="700" fill="#334155">Thousands: 2022, 2202, 2220 → 3 × 2 = 6</text>
        <text x="0" y="52" font-weight="700" fill="#334155">Hundreds: 222, 2202, 2220 → 3 × 2 = 6</text>
        <text x="0" y="82" font-weight="700" fill="#334155">Tens: 222, 2022, 2220 → 3 × 2 = 6</text>
        <text x="0" y="112" font-weight="700" fill="#334155">Ones: 222, 2022, 2202 → 3 × 2 = 6</text>
      </g>
      <g class="step-item step-1" transform="translate(100, 245)">
        <text x="220" y="20" text-anchor="middle" font-size="18" font-weight="800" fill="#2563eb">
          Each place has 6 (no carries!) → 6,666
        </text>
      </g>
    `,
    ansLabel: 'Sum',
    numericAnswer: 6666,
    stamp: 'Sum <b>6,666</b>',
    finalStep: 1
  });

  SCENES.q22_1b = makeBasicScene({
    title: 'Greedy Packaging for 95 Donuts (20, 10, 5)',
    svgContent: `
      <g transform="translate(100, 110)">
        <rect x="0" y="0" width="160" height="45" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="28" text-anchor="middle" font-weight="800" fill="#0369a1">4 × 20 = 80</text>
        <rect x="180" y="0" width="110" height="45" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="235" y="28" text-anchor="middle" font-weight="800" fill="#b45309">1 × 10 = 10</text>
        <rect x="310" y="0" width="110" height="45" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
        <text x="365" y="28" text-anchor="middle" font-weight="800" fill="#15803d">1 × 5 = 5</text>
      </g>
      <g class="step-item step-1" transform="translate(100, 185)">
        <text x="210" y="25" text-anchor="middle" font-size="16" font-weight="700" fill="#334155">
          80 + 10 + 5 = 95 mini-donuts
        </text>
      </g>
      <g class="step-item step-2" transform="translate(100, 235)">
        <text x="210" y="25" text-anchor="middle" font-size="18" font-weight="800" fill="#2563eb">
          Total Boxes = 4 + 1 + 1 = 6 boxes
        </text>
      </g>
    `,
    ansLabel: 'Minimum Boxes',
    numericAnswer: 6,
    stamp: 'Least <b>6</b> boxes',
    finalStep: 2
  });

  SCENES.q22_1c = makeBasicScene({
    title: 'GCF(96, 120) = 24 vs Coprime to 105 (3 × 5 × 7)',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Factors of 24: {1, 2, 3, 4, 6, 8, 12, 24}</text>
        <text class="step-item step-1" x="0" y="60" font-weight="700" fill="#dc2626">105 = 3 × 5 × 7 → Eliminate multiples of 3!</text>
        <text class="step-item step-1" x="0" y="90" font-weight="700" fill="#64748b">Crossed out: 3, 6, 12, 24</text>
        <text class="step-item step-2" x="0" y="130" font-size="16" font-weight="800" fill="#059669">Remaining: {1, 2, 4, 8} → Greatest is 8</text>
      </g>
    `,
    ansLabel: 'Greatest Factor',
    numericAnswer: 8,
    stamp: 'Greatest factor <b>8</b>',
    finalStep: 2
  });

  SCENES.q22_1d = makeBasicScene({
    title: 'Stair-Step Perimeter Projection (Base 2 cm each)',
    svgContent: `
      <g transform="translate(120, 100)">
        <rect x="0" y="112" width="40" height="16" fill="#e2e8f0" stroke="#64748b"/>
        <rect x="40" y="96" width="40" height="32" fill="#e2e8f0" stroke="#64748b"/>
        <rect x="80" y="64" width="40" height="64" fill="#e2e8f0" stroke="#64748b"/>
        <rect x="120" y="32" width="40" height="96" fill="#e2e8f0" stroke="#64748b"/>
        <rect x="160" y="0" width="40" height="128" fill="#e2e8f0" stroke="#64748b"/>
      </g>
      <g transform="translate(360, 115)">
        <text x="0" y="24" font-weight="700" fill="#1e293b">Horizontal = 2 × 10 = 20 cm</text>
        <text x="0" y="60" font-weight="700" fill="#1e293b">Vertical = 2 × 8 = 16 cm</text>
        <text class="step-item step-1" x="0" y="110" font-size="16" font-weight="800" fill="#2563eb">Perimeter = 20 + 16 = 36 cm</text>
      </g>
    `,
    ansLabel: 'Perimeter',
    numericAnswer: 36,
    stamp: 'Perimeter <b>36</b> cm',
    finalStep: 1
  });

  SCENES.q22_1e = makeBasicScene({
    title: '4-Digit abcd: a=d, b < a, c = (b + a)/2',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Parity Rule: a and b must have the same parity</text>
        <text class="step-item step-1" x="0" y="60" font-weight="700" fill="#2563eb">Even a ∈ {2, 4, 6, 8}: 1 + 2 + 3 + 4 = 10 numbers</text>
        <text class="step-item step-1" x="0" y="90" font-weight="700" fill="#2563eb">Odd a ∈ {3, 5, 7, 9}: 1 + 2 + 3 + 4 = 10 numbers</text>
        <text class="step-item step-2" x="0" y="130" font-size="16" font-weight="800" fill="#059669">Total Valid Numbers = 10 + 10 = 20</text>
      </g>
    `,
    ansLabel: 'Total Numbers',
    numericAnswer: 20,
    stamp: 'Total <b>20</b> numbers',
    finalStep: 2
  });

  // Mock Scenes Generic Handlers
  const mockConfigs = [
    { id: 'mock1_1a', title: '8 × 15 × 125 × 6', ans: 90000, txt: '(8 × 125) × (15 × 6) = 1,000 × 90 = 90,000' },
    { id: 'mock1_1b', title: 'Liam: 4x + 110 = 2026', ans: 479, txt: '(2026 − 110) ÷ 4 = 1916 ÷ 4 = 479' },
    { id: 'mock1_1c', title: 'Museum Tickets ($12 & $20, 15 tickets = $228)', ans: 9, txt: 'Excess $72 ÷ $8 = 9 student tickets' },
    { id: 'mock1_1d', title: 'Step 18 from 15 to 987', ans: 50, txt: '(987 − 105) ÷ 18 + 1 = 50 terms' },
    { id: 'mock1_1e', title: '6 Rectangles Area 96', ans: 40, txt: 'Large rect 12 × 8 cm → Perimeter 40 cm' },

    { id: 'mock2_1a', title: '37 × 48 + 37 × 52', ans: 3700, txt: '37 × (48 + 52) = 37 × 100 = 3,700' },
    { id: 'mock2_1b', title: 'Coin Swap: $0.60 less', ans: 12, txt: '60¢ ÷ 15¢ = 4 more quarters → 12 quarters' },
    { id: 'mock2_1c', title: 'Runners 60s, 75s, 90s', ans: 15, txt: 'LCM = 900 seconds = 15 minutes' },
    { id: 'mock2_1d', title: '8×8 Checkerboard Isolation', ans: 16, txt: '4 rows × 4 cols = 16 squares' },
    { id: 'mock2_1e', title: 'Box Net 4×6×5', ans: 76, txt: 'Outer perimeter = 40 + 16 + 20 = 76 in' },

    { id: 'mock3_1a', title: 'First 20 Odd Numbers Sum', ans: 400, txt: 'Sum = n² = 20² = 400' },
    { id: 'mock3_1b', title: 'Ages: Brian B, Total 54', ans: 6, txt: '7B + 12 = 54 → B = 6 years old' },
    { id: 'mock3_1c', title: 'Making 50¢ with 25¢, 10¢, 5¢', ans: 10, txt: '1 + 3 + 6 = 10 ways' },
    { id: 'mock3_1d', title: 'Corner Cuts Perimeter Invariance', ans: 32, txt: 'Perimeter equals 8×8 square = 32 cm' },
    { id: 'mock3_1e', title: '100 Days from Tuesday', ans: null, str: 'Thursday', txt: '100 = 14 × 7 + 2 → Tuesday + 2 = Thursday' }
  ];

  mockConfigs.forEach(m => {
    SCENES['q_' + m.id] = makeBasicScene({
      title: m.title,
      svgContent: `
        <g transform="translate(100, 130)">
          <text x="220" y="40" text-anchor="middle" font-size="18" font-weight="800" fill="#2563eb">${m.txt}</text>
        </g>
      `,
      ansLabel: 'Answer',
      numericAnswer: m.ans,
      answerStr: m.str,
      stamp: m.ans != null ? `Answer <b>${m.ans.toLocaleString()}</b>` : `Answer <b>${m.str}</b>`,
      finalStep: 1
    });
  });

  
  // ------------------------------------------------------------------
  // Classics Scenes (Vol 1 - 4 & Creative Problem Solving)
  // ------------------------------------------------------------------
  SCENES.q_cls_1a = makeBasicScene({
    title: 'Gauss Pairing: 1 + 2 + 3 + ... + 50',
    svgContent: `
      <g transform="translate(80, 110)">
        <rect width="480" height="42" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="240" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#1e293b">1 + 2 + 3 + ... + 48 + 49 + 50</text>
      </g>
      <g class="step-item step-0" transform="translate(80, 175)">
        <text x="240" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">Pairs: (1+50)=51, (2+49)=51, (3+48)=51 ...</text>
      </g>
      <g class="step-item step-1" transform="translate(80, 235)">
        <text x="240" y="25" text-anchor="middle" font-size="17" font-weight="800" fill="#059669">25 Pairs × 51 = 1,275</text>
      </g>
    `,
    ansLabel: 'Sum',
    numericAnswer: 1275,
    stamp: 'Sum <b>1,275</b>',
    finalStep: 1
  });

  SCENES.q_cls_1b = makeBasicScene({
    title: 'Snail in a 20-Foot Well (Up 5, Down 2)',
    svgContent: `
      <g transform="translate(100, 105)">
        <text x="0" y="22" font-size="14" font-weight="700" fill="#dc2626">Trap: 20 ÷ (5 − 2) = 6.67 days is WRONG!</text>
        <text class="step-item step-0" x="0" y="58" font-size="14" font-weight="700" fill="#2563eb">Last Day: Climes 5 ft directly to the top (no slide down!)</text>
        <text class="step-item step-1" x="0" y="94" font-size="14" font-weight="700" fill="#334155">Days 1–5: Climbs 15 ft (3 ft/day net)</text>
        <text class="step-item step-2" x="0" y="130" font-size="16" font-weight="800" fill="#059669">Day 6: Reaches 15 + 5 = 20 ft (Top!)</text>
      </g>
    `,
    ansLabel: 'Reached on Day',
    numericAnswer: 6,
    stamp: 'Day <b>6</b>',
    finalStep: 2
  });

  SCENES.q_cls_1c = makeBasicScene({
    title: 'Printed Digits for Pages 1 to 120',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Pages 1–9: 9 pages × 1 digit = 9</text>
        <text class="step-item step-0" x="0" y="58" font-weight="700" fill="#334155">Pages 10–99: 90 pages × 2 digits = 180</text>
        <text class="step-item step-1" x="0" y="92" font-weight="700" fill="#334155">Pages 100–120: 21 pages × 3 digits = 63</text>
        <text class="step-item step-2" x="0" y="132" font-size="16" font-weight="800" fill="#2563eb">Total Digits: 9 + 180 + 63 = 252</text>
      </g>
    `,
    ansLabel: 'Total Digits',
    numericAnswer: 252,
    stamp: 'Total <b>252</b> digits',
    finalStep: 2
  });

  SCENES.q_cls_1d = makeBasicScene({
    title: 'Clock Hands Angle at 3:30',
    svgContent: `
      <g transform="translate(90, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Minute hand points exactly at 6</text>
        <text class="step-item step-0" x="0" y="58" font-weight="700" fill="#2563eb">Hour hand moves 30 min × 0.5° = 15° → at 3.5</text>
        <text class="step-item step-1" x="0" y="92" font-weight="700" fill="#334155">Separation: 6 − 3.5 = 2.5 hour ticks</text>
        <text class="step-item step-2" x="0" y="132" font-size="16" font-weight="800" fill="#059669">Angle: 2.5 × 30° = 75°</text>
      </g>
    `,
    ansLabel: 'Angle in Degrees',
    numericAnswer: 75,
    stamp: 'Angle <b>75°</b>',
    finalStep: 2
  });

  SCENES.q_cls_1e = makeBasicScene({
    title: 'Sawing 12-Foot Board into 1.5-Foot Pieces',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Pieces = 12 ÷ 1.5 = 8 pieces</text>
        <text class="step-item step-0" x="0" y="60" font-weight="700" fill="#dc2626">Cuts = Pieces − 1 = 8 − 1 = 7 cuts</text>
        <text class="step-item step-1" x="0" y="98" font-size="16" font-weight="800" fill="#2563eb">Total Time: 7 cuts × 3 min = 21 minutes</text>
      </g>
    `,
    ansLabel: 'Total Minutes',
    numericAnswer: 21,
    stamp: 'Total <b>21</b> min',
    finalStep: 1
  });

  SCENES.q_cls_2a = makeBasicScene({
    title: 'Difference of Squares: 51² − 49²',
    svgContent: `
      <g transform="translate(80, 115)">
        <text x="240" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#334155">Formula: a² − b² = (a − b)(a + b)</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="16" font-weight="800" fill="#2563eb">(51 − 49) × (51 + 49) = 2 × 100</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">= 200</text>
      </g>
    `,
    ansLabel: 'Value',
    numericAnswer: 200,
    stamp: 'Value <b>200</b>',
    finalStep: 1
  });

  SCENES.q_cls_2b = makeBasicScene({
    title: 'Painted 3×3×3 Cube: Two Faces Painted',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">3 faces: 8 corners</text>
        <text class="step-item step-0" x="0" y="58" font-weight="800" fill="#2563eb">2 faces: Middle of the 12 edges</text>
        <text class="step-item step-1" x="0" y="92" font-weight="700" fill="#334155">Each edge has 3 − 2 = 1 middle cube</text>
        <text class="step-item step-2" x="0" y="130" font-size="16" font-weight="800" fill="#059669">Total = 12 edges × 1 = 12 cubes</text>
      </g>
    `,
    ansLabel: 'Cubes with 2 Painted Faces',
    numericAnswer: 12,
    stamp: 'Cubes <b>12</b>',
    finalStep: 2
  });

  SCENES.q_cls_2c = makeBasicScene({
    title: 'Travel: Tom (40 mph) & Jerry (50 mph), 90 Miles',
    svgContent: `
      <g transform="translate(80, 115)">
        <text x="240" y="24" text-anchor="middle" font-weight="700" fill="#334155">Combined Speed = 40 + 50 = 90 mph</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">Time = Total Distance ÷ Combined Speed</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">90 miles ÷ 90 mph = 1 hour</text>
      </g>
    `,
    ansLabel: 'Meeting Time',
    numericAnswer: 1,
    stamp: 'Time <b>1</b> hour',
    finalStep: 1
  });

  SCENES.q_cls_2d = makeBasicScene({
    title: '3×3 Magic Square with Center Number 5',
    svgContent: `
      <g transform="translate(80, 110)">
        <text x="240" y="24" text-anchor="middle" font-weight="700" fill="#334155">Magic Line Sum = 3 × Center = 3 × 5 = 15</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">Total of 9 squares = 3 rows × 15 = 45</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">Or simply: 9 × Center (5) = 45</text>
      </g>
    `,
    ansLabel: 'Sum of 9 Numbers',
    numericAnswer: 45,
    stamp: 'Sum <b>45</b>',
    finalStep: 1
  });

  SCENES.q_cls_2e = makeBasicScene({
    title: 'Chess Tournament (8 Players Single Round-Robin)',
    svgContent: `
      <g transform="translate(80, 110)">
        <text x="240" y="24" text-anchor="middle" font-weight="700" fill="#334155">Each player plays 7 opponents: 8 × 7 = 56 pair-games</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">Each game involves 2 players (counted twice!)</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">Total Games = 8 × 7 ÷ 2 = 28 games</text>
      </g>
    `,
    ansLabel: 'Total Games',
    numericAnswer: 28,
    stamp: 'Games <b>28</b>',
    finalStep: 1
  });

  SCENES.q_cls_3a = makeBasicScene({
    title: 'Pigeonhole: 10 Black & 10 White Socks',
    svgContent: `
      <g transform="translate(80, 110)">
        <text x="240" y="24" text-anchor="middle" font-weight="700" fill="#334155">Worst Case: Pull 1 Black and 1 White sock</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">3rd sock MUST match either Black or White!</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">At least 3 socks to guarantee a pair</text>
      </g>
    `,
    ansLabel: 'Minimum Socks',
    numericAnswer: 3,
    stamp: 'Least <b>3</b> socks',
    finalStep: 1
  });

  SCENES.q_cls_3b = makeBasicScene({
    title: 'Venn Diagram: 30 Students (18 Soccer, 15 Basketball, 5 Neither)',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">Active students = 30 − 5 = 25 students</text>
        <text class="step-item step-0" x="0" y="58" font-weight="700" fill="#334155">Combined signups = 18 + 15 = 33</text>
        <text class="step-item step-1" x="0" y="92" font-size="15" font-weight="700" fill="#2563eb">Overlap (Both) = 33 − 25 = 8</text>
        <text class="step-item step-2" x="0" y="130" font-size="16" font-weight="800" fill="#059669">8 students play both sports</text>
      </g>
    `,
    ansLabel: 'Both Sports',
    numericAnswer: 8,
    stamp: 'Both <b>8</b> students',
    finalStep: 2
  });

  SCENES.q_cls_3c = makeBasicScene({
    title: 'Cryptarithm: AB + BA = 154',
    svgContent: `
      <g transform="translate(80, 110)">
        <text x="240" y="24" text-anchor="middle" font-weight="700" fill="#334155">(10A + B) + (10B + A) = 11(A + B)</text>
        <text class="step-item step-0" x="240" y="65" text-anchor="middle" font-size="16" font-weight="700" fill="#2563eb">11 × (A + B) = 154</text>
        <text class="step-item step-1" x="240" y="110" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">A + B = 154 ÷ 11 = 14</text>
      </g>
    `,
    ansLabel: 'A + B',
    numericAnswer: 14,
    stamp: 'A + B = <b>14</b>',
    finalStep: 1
  });

  SCENES.q_cls_3d = makeBasicScene({
    title: 'Trapezoid Butterfly Wings: Area S(AOD) = S(BOC)',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">S(ACD) = S(BCD) (same base CD, same height)</text>
        <text class="step-item step-0" x="0" y="58" font-weight="700" fill="#2563eb">Subtract bottom COD: S(ACD) − COD = S(BCD) − COD</text>
        <text class="step-item step-1" x="0" y="98" font-size="16" font-weight="800" fill="#059669">Left Wing = Right Wing → S(BOC) = 12 cm²</text>
      </g>
    `,
    ansLabel: 'Area BOC',
    numericAnswer: 12,
    stamp: 'Area <b>12</b> cm²',
    finalStep: 1
  });

  SCENES.q_cls_3e = makeBasicScene({
    title: 'Units Digit of 2²⁰²⁶ (Cycle: 2, 4, 8, 6)',
    svgContent: `
      <g transform="translate(80, 105)">
        <text x="0" y="24" font-weight="700" fill="#334155">2¹=2, 2²=4, 2³=8, 2⁴=6 → Period = 4</text>
        <text class="step-item step-0" x="0" y="58" font-weight="700" fill="#2563eb">2026 ÷ 4 = 506 remainder 2</text>
        <text class="step-item step-1" x="0" y="98" font-size="16" font-weight="800" fill="#059669">2nd number in the cycle is 4</text>
      </g>
    `,
    ansLabel: 'Units Digit',
    numericAnswer: 4,
    stamp: 'Units Digit <b>4</b>',
    finalStep: 1
  });

  window.SCENES = SCENES;
})();
