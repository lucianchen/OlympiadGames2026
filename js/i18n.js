(function () {
  'use strict';

  const UI = {
    zh: {
      'brand.name': '奥数小工坊',
      'brand.sub': 'MOEMS 备赛 · 五年级',
      'side.label': '练习册 · 按月份',
      'side.note': '先自己想 3 分钟，再看动画。用键盘 <kbd>←</kbd> <kbd>→</kbd> 也能切换讲解步骤。',
      'side.foot': '循序渐进 · 每天一套',
      'side.menu': '打开目录',

      'nav.current': '在读',
      'nav.coming': '即将上线',
      'nav.meta': '5 道题 · 已掌握 {n}',
      'nav.metaSoon': '5 道题 · 敬请期待',

      'top.mastered': '已掌握 {n} / {total}',
      'top.soon': '即将上线',
      'top.grade': '五年级 · 中文讲解',
      'top.lang': '语言',

      'hero.mastered': '已掌握',
      'hero.problems': '{n} 道题',
      'hero.minutes': '{n} 分钟',
      'hero.animations': '{n} 组动画',
      'hero.suffix': '练习',
      'qrail.aria': '题目切换',

      'q.showAnswer': '看答案',
      'q.answerLabel': '答案',
      'q.original': '英文原题 · English original',
      'q.translation': '中文翻译 · Chinese translation',

      'explainer.eyebrow': '动画讲解',
      'explainer.title': '跟着画面，一步一步想',
      'explainer.best': '最优解',
      'explainer.step': 'STEP {n}',

      'ctl.prev': '上一步',
      'ctl.play': '自动讲解',
      'ctl.pause': '暂停',
      'ctl.next': '下一步',
      'ctl.done': '已完成',
      'ctl.kbd': '也可以按键盘 <kbd>←</kbd><kbd>→</kbd> 切换',

      'methods.eyebrow': '换个角度',
      'methods.title': '同一道题，还有别的走法',

      'follow.eyebrow': '拓展一题',
      'follow.hintBtn': '先看提示',
      'follow.answerBtn': '看答案',
      'follow.hintLabel': '提示',
      'follow.answerLabel': '答案',

      'mastery.eyebrow': '学习打卡',
      'mastery.todo': '想通了就打个勾，进度会记在这台电脑上。',
      'mastery.done': '这道题已经标记为会做啦。',
      'mastery.mark': '标记为已掌握',
      'mastery.marked': '已掌握',
      'next.next': '下一题 {label}',
      'next.back': '回到 {label}',

      'footer.p1': '题目与答案版权归 <b>Mathematical Olympiads for Elementary and Middle Schools (MOEMS)</b> 所有，本站为家庭学习用的中文动画讲解。',
      'footer.p2': '讲解语言面向五年级同学：先看懂、再想巧、最后记住方法。',

      'soon.eyebrow': '下一套内容预告',
      'soon.title': '会讲这 5 道题',
      'soon.note': '每一套都会配上可以“一步一步播放”的动画讲解，以及适合五年级的第二、第三种思路。',
      'soon.cta': '先去练 2024–25 第 1 套',
      'soon.stamp': '即将上线',

      'lang.zh': '中文',
      'lang.en': 'EN',
      'lang.aria': '切换语言',

      'scene.q1a.answer': '答案 <b>15,000</b>',

      'scene.q1b.lucky': '幸运数',
      'scene.q1b.afterMul': '乘 3 之后',
      'scene.q1b.final': '最终结果',
      'scene.q1b.note': '从结果出发，一步一步往回走',
      'scene.q1b.answer': '幸运数 <b>643</b>',

      'scene.q1c.total': '总分',
      'scene.q1c.short': '还差 <b>{n}</b> 分',
      'scene.q1c.allCoins': '假设全是金币：8 × 100 = <b>{n}</b>',
      'scene.q1c.eachFlower': '每个花盒补 <b>{n}</b> 分',
      'scene.q1c.answer': '花盒 <b>{n}</b> 个',

      'scene.q1d.total': '共',
      'scene.q1d.swap': '互换',
      'scene.q1d.less': '（少 45¢）',
      'scene.q1d.moreQ': '→ 25¢ 比 10¢ 多 <b>{n}</b> 枚',
      'scene.q1d.pairHead': '把硬币配成对',
      'scene.q1d.pairUnit': '对',
      'scene.q1d.extra': '多出来：',
      'scene.q1d.pairNote': '每一对 = 25¢ + 10¢ = <b>35¢</b>，互换后价值不变',
      'scene.q1d.pairsEq': '420 ÷ 35 = <b>{n}</b> 对',
      'scene.q1d.coinsEq': '25¢：12 + 3 = <b>{n}</b> 枚',
      'scene.q1d.answer': '25¢ 硬币 <b>{n}</b> 枚',

      'scene.q1e.base': '底面积 = 8 × 12 = 96',
      'scene.q1e.height': '高 = 672 ÷ 96',
      'scene.q1e.unit': '英寸',
      'scene.q1e.bottom': '盒底',
      'scene.q1e.lid': '盖子',
      'scene.q1e.edge': '{len} 英寸 × {n} 条 = {sum}',
      'scene.q1e.perimeter': '周长 = 56 + 32 + 24 =',
      'scene.q1e.answer': '周长 <b>{n}</b> 英寸',

      'scene.q25_1a.tenThousand': '万位：1 × 70,000 = 70,000',
      'scene.q25_1a.thousand': '千位：2 × 7,000 = 14,000',
      'scene.q25_1a.hundred': '百位：3 × 700 = 2,100',
      'scene.q25_1a.ten': '十位：4 × 70 = 280',
      'scene.q25_1a.one': '个位：5 × 7 = 35',
      'scene.q25_1a.sum': '总和 = 70000 + 14000 + 2100 + 280 + 35',
      'scene.q25_1a.answer': '总和 <b>86,415</b>',

      'scene.q25_1b.areaNote': '每个小长方形面积 = 70 ÷ 7 = <b>10</b> cm²',
      'scene.q25_1b.heightMatch': '左边 5 个叠放高 = 右边 2 个立放高：5x = 2y = 10',
      'scene.q25_1b.dims': '小长方形：宽 x = <b>2</b> cm，长 y = <b>5</b> cm',
      'scene.q25_1b.largeDims': '大长方形：宽 = 5 + 2 = <b>7</b> cm，高 = <b>10</b> cm',
      'scene.q25_1b.answer': '周长 <b>34</b> cm',

      'scene.q25_1c.baseUnit': '以 Connie 为基准 1 份（C）',
      'scene.q25_1c.equation': 'C + (C+6) + (2C+12) + 3C = 7C + 18 = 46',
      'scene.q25_1c.solve': '7C = 28 → C = 4，Beth = 4 + 6 = <b>10</b>',
      'scene.q25_1c.answer': 'Beth 有 <b>10</b> 张贴纸',

      'scene.q25_1d.range': '三位数范围：100 ~ 999',
      'scene.q25_1d.bounds': '首个三位数 = <b>116</b>，末个三位数 = <b>980</b>',
      'scene.q25_1d.jumps': '间隔数 = (980 − 116) ÷ 24 = <b>36</b> 次跳跃',
      'scene.q25_1d.count': '数的个数 = 36 + 1 = <b>37</b> 个',
      'scene.q25_1d.answer': '三位数共 <b>37</b> 个',

      'scene.q25_1e.rule': '相邻及对角顶点均不能相连（8 邻域互斥）',
      'scene.q25_1e.cols': '15 列隔列涂：第 1, 3, 5, 7, 9, 11, 13, 15 列（共 <b>8</b> 列）',
      'scene.q25_1e.rows': '10 行隔行涂：第 1, 3, 5, 7, 9 行（共 <b>5</b> 行）',
      'scene.q25_1e.total': '最大涂黑数 = 8 × 5 = <b>40</b> 个',
      'scene.q25_1e.answer': '最多涂黑 <b>40</b> 个方格'
    },

    en: {
      'brand.name': 'Math Olympiad Studio',
      'brand.sub': 'MOEMS Prep · Grade 5',
      'side.label': 'Workbooks · by month',
      'side.note': 'Try it yourself for 3 minutes before watching. Use <kbd>←</kbd> <kbd>→</kbd> to move through the steps.',
      'side.foot': 'One set a day, step by step',
      'side.menu': 'Open menu',

      'nav.current': 'Current',
      'nav.coming': 'Coming soon',
      'nav.meta': '5 problems · {n} mastered',
      'nav.metaSoon': '5 problems · in the works',

      'top.mastered': 'Mastered {n} / {total}',
      'top.soon': 'Coming soon',
      'top.grade': 'Grade 5 · Bilingual',
      'top.lang': 'Language',

      'hero.mastered': 'mastered',
      'hero.problems': '{n} problems',
      'hero.minutes': '{n} minutes',
      'hero.animations': '{n} animated walkthroughs',
      'hero.suffix': '',
      'qrail.aria': 'Problem navigation',

      'q.showAnswer': 'Show answer',
      'q.answerLabel': 'Answer',
      'q.original': 'English original',
      'q.translation': 'Chinese translation · 中文翻译',

      'explainer.eyebrow': 'Animated walkthrough',
      'explainer.title': 'Think it through, step by step',
      'explainer.best': 'Best method',
      'explainer.step': 'STEP {n}',

      'ctl.prev': 'Back',
      'ctl.play': 'Auto-play',
      'ctl.pause': 'Pause',
      'ctl.next': 'Next',
      'ctl.done': 'Done',
      'ctl.kbd': 'Use <kbd>←</kbd><kbd>→</kbd> on the keyboard too',

      'methods.eyebrow': 'Another angle',
      'methods.title': 'Other ways to solve it',

      'follow.eyebrow': 'Try one more',
      'follow.hintBtn': 'Hint',
      'follow.answerBtn': 'Show answer',
      'follow.hintLabel': 'Hint',
      'follow.answerLabel': 'Answer',

      'mastery.eyebrow': 'Check-in',
      'mastery.todo': 'Got it? Tick the box — your progress is saved on this device.',
      'mastery.done': 'Marked as mastered.',
      'mastery.mark': 'Mark as mastered',
      'mastery.marked': 'Mastered',
      'next.next': 'Next {label}',
      'next.back': 'Back to {label}',

      'footer.p1': 'Problems and answers © <b>Mathematical Olympiads for Elementary and Middle Schools (MOEMS)</b>. This site is a bilingual home-learning guide.',
      'footer.p2': 'Explanations are written for fifth graders: understand first, then find the clever move.',

      'soon.eyebrow': 'Up next',
      'soon.title': 'Five problems, animated',
      'soon.note': 'Every set will get a step-by-step animated walkthrough, plus a second and third method that fit fifth grade.',
      'soon.cta': 'Practice Set 1 (2024–25)',
      'soon.stamp': 'Coming soon',

      'lang.zh': '中文',
      'lang.en': 'EN',
      'lang.aria': 'Language',

      'scene.q1a.answer': 'Answer <b>15,000</b>',

      'scene.q1b.lucky': 'Lucky number',
      'scene.q1b.afterMul': 'After × 3',
      'scene.q1b.final': 'Final result',
      'scene.q1b.note': 'Start at the result and work backwards',
      'scene.q1b.answer': 'Lucky number <b>643</b>',

      'scene.q1c.total': 'Total',
      'scene.q1c.short': 'Short by <b>{n}</b> pts',
      'scene.q1c.allCoins': 'All coins: 8 × 100 = <b>{n}</b>',
      'scene.q1c.eachFlower': 'Each flower adds <b>{n}</b> pts',
      'scene.q1c.answer': '<b>{n}</b> flower boxes',

      'scene.q1d.total': 'Total',
      'scene.q1d.swap': 'swap',
      'scene.q1d.less': '(−45¢)',
      'scene.q1d.moreQ': '→ <b>{n}</b> more quarters than dimes',
      'scene.q1d.pairHead': 'Pair the coins',
      'scene.q1d.pairUnit': 'pairs',
      'scene.q1d.extra': 'Extra:',
      'scene.q1d.pairNote': 'Each pair = 25¢ + 10¢ = <b>35¢</b>; swapping keeps its value',
      'scene.q1d.pairsEq': '420 ÷ 35 = <b>{n}</b> pairs',
      'scene.q1d.coinsEq': '25¢: 12 + 3 = <b>{n}</b> coins',
      'scene.q1d.answer': '<b>{n}</b> quarters',

      'scene.q1e.base': 'Base area = 8 × 12 = 96',
      'scene.q1e.height': 'Height = 672 ÷ 96',
      'scene.q1e.unit': 'in',
      'scene.q1e.bottom': 'Bottom',
      'scene.q1e.lid': 'Lid',
      'scene.q1e.edge': '{len}″ × {n} = {sum}',
      'scene.q1e.perimeter': 'Perimeter = 56 + 32 + 24 =',
      'scene.q1e.answer': 'Perimeter <b>{n}</b> in',

      'scene.q25_1a.tenThousand': 'Ten-thousands: 1 × 70,000 = 70,000',
      'scene.q25_1a.thousand': 'Thousands: 2 × 7,000 = 14,000',
      'scene.q25_1a.hundred': 'Hundreds: 3 × 700 = 2,100',
      'scene.q25_1a.ten': 'Tens: 4 × 70 = 280',
      'scene.q25_1a.one': 'Ones: 5 × 7 = 35',
      'scene.q25_1a.sum': 'Total = 70,000 + 14,000 + 2,100 + 280 + 35',
      'scene.q25_1a.answer': 'Sum <b>86,415</b>',

      'scene.q25_1b.areaNote': 'Each small rect area = 70 ÷ 7 = <b>10</b> cm²',
      'scene.q25_1b.heightMatch': 'Left 5 stacked = right 2 standing: 5x = 2y = 10',
      'scene.q25_1b.dims': 'Small rect: width x = <b>2</b> cm, length y = <b>5</b> cm',
      'scene.q25_1b.largeDims': 'Large rect: width = 5 + 2 = <b>7</b> cm, height = <b>10</b> cm',
      'scene.q25_1b.answer': 'Perimeter <b>34</b> cm',

      'scene.q25_1c.baseUnit': 'Let Connie’s stickers be C (1 unit)',
      'scene.q25_1c.equation': 'C + (C+6) + (2C+12) + 3C = 7C + 18 = 46',
      'scene.q25_1c.solve': '7C = 28 → C = 4, Beth = 4 + 6 = <b>10</b>',
      'scene.q25_1c.answer': 'Beth has <b>10</b> stickers',

      'scene.q25_1d.range': 'Three-digit range: 100 ~ 999',
      'scene.q25_1d.bounds': 'First 3-digit = <b>116</b>, Last 3-digit = <b>980</b>',
      'scene.q25_1d.jumps': 'Jumps = (980 − 116) ÷ 24 = <b>36</b>',
      'scene.q25_1d.count': 'Total numbers = 36 + 1 = <b>37</b>',
      'scene.q25_1d.answer': '<b>37</b> three-digit numbers',

      'scene.q25_1e.rule': 'No shared edges or corners (isolated 8-neighborhood)',
      'scene.q25_1e.cols': '8 odd columns of 15: 1, 3, 5, 7, 9, 11, 13, 15',
      'scene.q25_1e.rows': '5 odd rows of 10: 1, 3, 5, 7, 9',
      'scene.q25_1e.total': 'Max shaded = 8 × 5 = <b>40</b> squares',
      'scene.q25_1e.answer': 'Maximum <b>40</b> squares'
    }
  };

  const KEY = 'moems-lang-v1';
  let lang = 'en';
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'en' || saved === 'zh') lang = saved;
    const asked = new URLSearchParams(location.search).get('lang');
    if (asked === 'en' || asked === 'zh') {
      lang = asked;
      localStorage.setItem(KEY, lang);
    }
  } catch (e) {}

  function t(key, vars) {
    const dict = UI[lang] || UI.zh;
    let str = dict[key];
    if (str == null) str = UI.zh[key];
    if (str == null) return key;
    if (vars) {
      str = str.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    }
    return str;
  }

  function set(next) {
    lang = next === 'en' ? 'en' : 'zh';
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  }

  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  window.I18N = {
    t,
    set,
    get: () => lang,
    UI
  };
})();
