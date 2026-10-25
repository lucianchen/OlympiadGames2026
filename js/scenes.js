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

  window.SCENES = SCENES;
})();
