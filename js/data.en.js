window.EN_CONTENT = {
  contests: {
    '2024-25': {
      label: 'Set 1',
      full: 'November 2024 · Contest 1',
      blurb: 'Five problems on smart products, working backwards, supposition, pairing, and nets — each with a method a fifth grader can own.'
    },
    '2025-26': {
      label: 'Set 1',
      full: 'November 2025 · Contest 1',
      blurb: 'The next set is in production. It will use the same step-by-step animated approach.',
      topics: [
        '1A · Place-value addition with a wall of 7s',
        '1B · Seven congruent rectangles form a large rectangle',
        '1C · Sticker counts for four friends',
        '1D · Three-digit numbers in an arithmetic sequence',
        '1E · Spread-out shading on a 10 × 15 grid'
      ]
    }
  },

  questions: {
    '2024-25': {
      '1a': {
        title: 'Grouping for Easy Products',
        answerNote: 'Make tens and hundreds first',
        answer: '15,000',
        steps: [
          {
            t: 'Don’t just multiply in order',
            d: 'Multiplying five numbers left to right is slow and easy to get wrong. Pause and look for “number friends” that make 10 or 100.'
          },
          {
            t: 'Find two friendly pairs',
            d: '<b>2 and 5</b> are a pair: 2 × 5 = 10. <b>4 and 25</b> are also a pair: 4 × 25 = 100. Put a bracket around each pair.'
          },
          {
            t: 'Multiply in a new order',
            d: 'Multiplication can be reordered and regrouped: (2 × 5) × (4 × 25) × 15 = <b>10 × 100 × 15</b>.'
          },
          {
            t: 'Tens and hundreds are easy',
            d: '10 × 100 = 1000, then 1000 × 15 = 15000. The answer is <b>15,000</b>.'
          },
          {
            t: 'Remember the pattern',
            d: 'When you see 2, look for 5. See 4, look for 25. See 8, look for 125. Make 10, 100, or 1000 first, and the rest becomes easy.'
          }
        ],
        tip: 'Commutative + associative property: numbers can “line up” differently without changing the product.',
        methods: [
          {
            title: 'Method 2 · Prime factorization',
            body: '2 × 4 × 5 × 15 × 25 = 2 × 2² × 5 × 3 × 5 × 5² = (2 × 5)³ × (3 × 5) = 1000 × 15 = 15,000. Great if you like breaking numbers into small pieces.'
          }
        ],
        follow: {
          q: 'Compute 2 × 8 × 5 × 15 × 25.',
          hint: '2 × 5 = 10 and 8 × 25 = 200, then multiply by 15.',
          a: '30,000'
        }
      },

      '1b': {
        title: 'Work Backwards',
        answerNote: 'Undo each step: + ↔ −, × ↔ ÷',
        answer: '643',
        steps: [
          {
            t: 'Draw the process',
            d: 'Lucky number → <b>× 3</b> → <b>+ 95</b> → 2024. We know the finish line, but not the start.'
          },
          {
            t: 'Step back once',
            d: 'The last step is “+ 95”, so undo it with “− 95”: <b>2024 − 95 = 1929</b>. That is the value after multiplying by 3.'
          },
          {
            t: 'Step back again',
            d: 'The step before is “× 3”, so undo it with “÷ 3”: <b>1929 ÷ 3 = 643</b>. That is the lucky number.'
          },
          {
            t: 'Check the answer',
            d: '643 × 3 = 1929 and 1929 + 95 = 2024. It lands exactly on the given result, so the answer is right.'
          },
          {
            t: 'The backwards rule',
            d: 'Add becomes subtract, subtract becomes add; multiply becomes divide, divide becomes multiply — and always work from the <b>last step to the first</b>.'
          }
        ],
        tip: 'Working backwards (inverse operations) is often the fastest way when the forward path is blocked.',
        methods: [
          {
            title: 'Method 2 · Use an equation',
            body: 'Let c be the lucky number. Then 3c + 95 = 2024. Subtract 95: 3c = 1929. Divide by 3: c = 643. An equation is just the backwards steps written down.'
          }
        ],
        follow: {
          q: 'Add 56 to the year Mary was born, then divide the sum by 25. The result is 80. In what year was Mary born?',
          hint: 'Multiply by 25 first, then subtract 56.',
          a: '1944'
        }
      },

      '1c': {
        title: 'Make a Supposition',
        answerNote: 'Pretend all are coins, then close the gap',
        answer: '3',
        steps: [
          {
            t: 'Sort the facts',
            d: 'There are <b>8</b> boxes. A coin box is worth <b>100</b> points, a flower box <b>250</b> points, and the total is <b>1250</b>. Find the number of flower boxes.'
          },
          {
            t: 'Suppose all are coins',
            d: 'Pretend all 8 boxes hold coins: 8 × 100 = <b>800</b> points.'
          },
          {
            t: 'Compare with the total',
            d: 'The real total is 1250, which is 1250 − 800 = <b>450</b> points more than our guess. The gap comes from the flower boxes.'
          },
          {
            t: 'Swap one at a time',
            d: 'Replacing a coin box with a flower box adds 250 − 100 = <b>150</b> points. To add 450 points, swap 450 ÷ 150 = <b>3</b> boxes.'
          },
          {
            t: 'Check and answer',
            d: '3 flower boxes and 5 coin boxes: 3 × 250 + 5 × 100 = 750 + 500 = 1250 points. So there are <b>3</b> flower boxes.'
          }
        ],
        tip: 'The supposition method is the master key for “chickens and rabbits” problems: assume one kind, then replace by the gap.',
        methods: [
          {
            title: 'Method 2 · Try a table',
            body: 'Start with 8 coin boxes and change one box at a time: 800 → 950 → 1100 → 1250. After 3 changes the total is exactly 1250, so there are 3 flower boxes.'
          },
          {
            title: 'Method 3 · Use an equation',
            body: 'Let f be the number of flower boxes, so 8 − f are coin boxes. 100(8 − f) + 250f = 1250, which simplifies to 800 + 150f = 1250, so f = 3.'
          }
        ],
        follow: {
          q: 'Kaden buys keychains and hats for his friends. Each keychain costs $10 and each hat $25. He buys 8 items and spends $125. How many keychains did he buy?',
          hint: 'If all 8 items were hats, how much extra would he spend?',
          a: '5'
        }
      },

      '1d': {
        title: 'Pairing and Differences',
        answerNote: 'Pair one of each; only the extras matter',
        answer: '15 quarters',
        steps: [
          {
            t: 'Read the swap',
            d: 'There is <b>$4.95</b> in total. After swapping, there is 4.95 − 0.45 = <b>$4.50</b>. The total went down, so there must be more quarters than dimes.'
          },
          {
            t: 'Do the accounting',
            d: 'Turning one quarter into a dime loses 15¢. The total lost 45¢, so the “extra” quarters number 45 ÷ 15 = <b>3</b>. Why only the extras? The pairing step shows why.'
          },
          {
            t: 'Pair the coins',
            d: 'Match each dime with a quarter. After all the pairs are made, the <b>3</b> extra quarters are left over.'
          },
          {
            t: 'Value of each pair',
            d: 'Each pair = 25 + 10 = <b>35¢</b>. Remove the 3 extra quarters: 495 − 3 × 25 = 495 − 75 = <b>420¢</b>. Then 420 ÷ 35 = <b>12</b> pairs.'
          },
          {
            t: 'Find the answer',
            d: 'There are 12 dimes and 12 + 3 = <b>15</b> quarters. Check: 15 × 25 + 12 × 10 = 495¢ ✓; after swapping: 15 × 10 + 12 × 25 = 450¢ ✓.'
          }
        ],
        tip: 'When coins are swapped, a matched pair keeps the same value; only the unmatched extras change the total.',
        methods: [
          {
            title: 'Method 2 · Narrow it down with a table',
            body: 'The number of quarters must be odd, otherwise the total could not end in 5¢. Try 19 quarters: 19×25 + 2×10 = $4.95, but after swapping it is 2×25 + 19×10 = $2.40, too little. Try 17: after swapping $3.45 — still short. Try 15: 15×25 + 12×10 = $4.95 and after swapping 12×25 + 15×10 = $4.50, exactly $0.45 less. So there are 15 quarters.'
          },
          {
            title: 'Method 3 · Use letters',
            body: 'Let q be the number of quarters and d the number of dimes. Swapping loses $0.45, so 0.15(q − d) = 0.45 and q − d = 3. Also 0.25q + 0.10d = 4.95. Substitute d = q − 3: 0.35q = 5.25, so q = 15.'
          }
        ],
        follow: {
          q: 'Aaron has $4.00 in quarters and nickels. If the nickels were quarters and the quarters were nickels, he would have half as much money. How many quarters does Aaron have?',
          hint: 'After swapping he has $2.00, which is $2.00 less. One quarter → one nickel loses 20¢.',
          a: '15 quarters'
        }
      },

      '1e': {
        title: 'Perimeter of a Net',
        answerNote: 'Find the height, then count edges by length',
        answer: '112 in',
        steps: [
          {
            t: 'Read the net',
            d: 'The box has <b>6 faces</b>: the bottom, the lid, and four sides. Dashed lines are folds — they are inside the shape and do not count. The perimeter is only the outer boundary.'
          },
          {
            t: 'Find the height',
            d: 'Volume = length × width × height. The base area is 8 × 12 = 96, so the height is 672 ÷ 96 = <b>7 inches</b>. Every short edge on the net is 7 inches.'
          },
          {
            t: 'Label the outer edges',
            d: 'Walk around the outer boundary. Every edge is either the bottom’s <b>12</b>, <b>8</b>, or the box’s height <b>7</b>. Color them by length.'
          },
          {
            t: 'Count by length',
            d: 'Count them: there are <b>8</b> edges of length 7, <b>4</b> edges of length 8, and <b>2</b> edges of length 12.'
          },
          {
            t: 'Add them up',
            d: 'Perimeter = 8 × 7 + 4 × 8 + 2 × 12 = 56 + 32 + 24 = <b>112 inches</b>. Counting by groups is safer than adding one edge at a time.'
          }
        ],
        tip: 'Three steps for net problems: ① find the hidden height; ② look only at the outer boundary; ③ count edges by length.',
        methods: [
          {
            title: 'Method 2 · Six rectangles minus the folds',
            body: 'The six faces have total perimeter 2 × (40 + 38 + 30) = 216 in, where 40, 38, and 30 are the perimeters of the 8×12, 12×7, and 8×7 rectangles. Each of the 5 fold edges is counted twice: 2 × (12 + 12 + 12 + 8 + 8) = 104 in. Outer perimeter = 216 − 104 = 112 in.'
          },
          {
            title: 'A useful extra',
            body: 'The area of this net is the surface area of the box: 2 × (8×12 + 12×7 + 8×7) = 192 + 168 + 112 = 472 square inches.'
          }
        ],
        follow: {
          q: 'What is the surface area of this cardboard box?',
          hint: 'Six faces: two 8×12, two 12×7, two 8×7.',
          a: '472 square inches'
        }
      }
    }
  }
};
