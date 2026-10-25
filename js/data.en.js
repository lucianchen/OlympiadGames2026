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
      blurb: 'Five problems covering place-value sums, geometric dissection, multi-step word problems, arithmetic progression, and maximum grid shading.'
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
    },

    '2025-26': {
      '1a': {
        title: 'Place Value & Smart Sums',
        answerNote: 'Calculate the contribution of 7 in each place value',
        answer: '86,415',
        steps: [
          {
            t: 'Examine the pattern',
            d: 'The sum has 5 numbers made entirely of 7s: 7, 77, 777, 7777, and 77777. Adding them left to right with cascading carries is easy to mess up. Let’s count the 7s by place value.'
          },
          {
            t: 'Break down by place value',
            d: '<b>Ones place</b>: all 5 numbers have a ones digit → five 7s.<br><b>Tens place</b>: 4 numbers have a tens digit → four 7s.<br><b>Hundreds</b>: three 7s; <b>Thousands</b>: two 7s; <b>Ten-thousands</b>: one 7.'
          },
          {
            t: 'Compute each place value',
            d: 'Ten-thousands: 1 × 7 × 10,000 = <b>70,000</b><br>Thousands: 2 × 7 × 1,000 = <b>14,000</b><br>Hundreds: 3 × 7 × 100 = <b>2,100</b><br>Tens: 4 × 7 × 10 = <b>280</b><br>Ones: 5 × 7 × 1 = <b>35</b>.'
          },
          {
            t: 'Add the place values',
            d: '70,000 + 14,000 + 2,100 + 280 + 35 = <b>86,415</b>. Breaking by place value turns heavy column addition into mental math!'
          },
          {
            t: 'Double-check with carries',
            d: 'Ones: 35, write 5 carry 3. Tens: 28 + 3 = 31, write 1 carry 3. Hundreds: 21 + 3 = 24, write 4 carry 2. Thousands: 14 + 2 = 16, write 6 carry 1. Ten-thousands: 7 + 1 = 8. Result: <b>86,415</b>.'
          }
        ],
        tip: 'Place value principle: for repeating-digit sums, counting how many digits contribute to each place is the cleanest method.',
        methods: [
          {
            title: 'Method 2 · Standard vertical addition',
            body: 'Line up the numbers on the right. Sum the columns from right to left with standard carries: 5×7=35 (write 5, carry 3); 4×7+3=31; 3×7+3=24; 2×7+2=16; 1×7+1=8 → 86,415.'
          },
          {
            title: 'Method 3 · Convert to multiples of 9',
            body: '7 + 77 + 777 + 7777 + 77777 = 7/9 × (9 + 99 + 999 + 9999 + 99999) = 7/9 × (111105) = 86,415. A classic Olympiad technique.'
          }
        ],
        follow: {
          q: 'Is the sum 86,415 divisible by 15?',
          hint: 'A number divisible by 15 must be divisible by both 3 and 5.',
          a: 'Yes. It ends in 5 (divisible by 5), and the sum of digits 8+6+4+1+5=24 is divisible by 3.'
        }
      },

      '1b': {
        title: 'Dissecting Rectangles & Perimeter',
        answerNote: 'Small rectangle is 5 × 2 cm; large rectangle perimeter is 2 × (7 + 10) = 34 cm',
        answer: '34',
        steps: [
          {
            t: 'Find the area of each small rectangle',
            d: 'Seven congruent rectangles form a large rectangle with total area 70 cm². Each small rectangle has area = <b>70 ÷ 7 = 10 cm²</b>.'
          },
          {
            t: 'Whole-number dimension candidates',
            d: 'The dimensions are whole numbers with product 10. The only possibilities are <b>10 × 1</b> or <b>5 × 2</b>.'
          },
          {
            t: 'Match the geometric edges',
            d: 'Look at the diagram: <b>5 small rectangles stacked horizontally</b> on the left give height = 5 short sides (5x). <b>2 small rectangles standing vertically</b> on the right give height = 2 long sides (2y). Both heights must be equal: <b>5x = 2y</b>!'
          },
          {
            t: 'Verify the dimensions',
            d: 'Testing 5 × 2: short side x = 2 cm, long side y = 5 cm. Left height = 5 × 2 = 10 cm; right height = 2 × 5 = 10 cm. Perfect match! Large rectangle: height = <b>10 cm</b>, width = 5 + 2 = <b>7 cm</b>.'
          },
          {
            t: 'Calculate the perimeter',
            d: 'Perimeter = 2 × (width + height) = 2 × (7 + 10) = 2 × 17 = <b>34 cm</b>.'
          }
        ],
        tip: 'Look for shared boundaries: when congruent shapes meet along a common edge, their total lengths along that seam must match.',
        methods: [
          {
            title: 'Method 2 · Factorizing the large rectangle',
            body: 'A large rectangle of area 70 can only be 2×35, 5×14, or 7×10. Its height must be divisible by both 2 and 5 (formed by 2 lengths and 5 widths), so height is 10. That leaves width 7, small rectangles 5×2, and perimeter 2×(7+10) = 34 cm.'
          },
          {
            title: 'Method 3 · Algebraic equations',
            body: 'Let x be the shorter side and y the longer side. 5x = 2y and (x + y)(2y) = 70 → (x + y)y = 35. Since x and y are integers and y < x+y, y = 5 and x = 2. Perimeter = 2(7 + 10) = 34 cm.'
          }
        ],
        follow: {
          q: 'How much greater is the sum of the perimeters of the 7 smaller rectangles than the perimeter of the larger rectangle?',
          hint: 'Each small rectangle has perimeter 2×(5+2)=14 cm; 7 of them make 98 cm.',
          a: '64 cm (98 − 34 = 64 cm)'
        }
      },

      '1c': {
        title: 'Sticker Counts & Unit Modeling',
        answerNote: 'Let Connie be C; Beth = 4 + 6 = 10 stickers',
        answer: '10',
        steps: [
          {
            t: 'Choose the baseline person',
            d: 'Beth has 6 more than Connie, and Deb has triple Connie. Both connect directly to Connie. Let <b>Connie be the baseline unit: C</b>.'
          },
          {
            t: 'Express everyone in terms of C',
            d: '• Connie = <b>C</b><br>• Beth = <b>C + 6</b><br>• Ashley = 2 × Beth = 2 × (C + 6) = <b>2C + 12</b><br>• Deb = 3 × Connie = <b>3C</b>.'
          },
          {
            t: 'Combine the total',
            d: 'Sum of all four: C + (C + 6) + (2C + 12) + 3C = <b>7C + 18</b>. We are given the total is 46 stickers.'
          },
          {
            t: 'Solve for C',
            d: '7C + 18 = 46 → 7C = 46 − 18 = 28 → <b>C = 28 ÷ 7 = 4</b>. Connie has 4 stickers.'
          },
          {
            t: 'Find Beth’s stickers and verify',
            d: 'Beth = C + 6 = 4 + 6 = <b>10 stickers</b>.<br>Check: Connie=4, Beth=10, Ashley=20, Deb=12. Total = 4 + 10 + 20 + 12 = 46. Matches completely!'
          }
        ],
        tip: 'Word problem key: anchor the network at the person everyone compares against, turning multiple unknowns into a single unit.',
        methods: [
          {
            title: 'Method 2 · Guess and check',
            body: 'Guess Beth=8: Connie=2, Ashley=16, Deb=6 → total 32 (too low by 14). Guess Beth=9: total 39 (increases by 7). Guess Beth=10: Connie=4, Ashley=20, Deb=12 → total 46. Beth has 10.'
          }
        ],
        follow: {
          q: 'Keeping the same ratios, what is the maximum total stickers if the total is less than 100?',
          hint: '7C + 18 < 100, find the maximum integer C.',
          a: '95 stickers (max C is 11, giving 7×11 + 18 = 95)'
        }
      },

      '1d': {
        title: 'Arithmetic Progression & Range Counting',
        answerNote: 'Range from 116 to 980; (980 − 116) ÷ 24 + 1 = 37 numbers',
        answer: '37',
        steps: [
          {
            t: 'Understand the rule & three-digit range',
            d: 'The list starts at 20, with each number 24 greater than the last (common difference d = 24). Three-digit numbers range from <b>100 to 999</b>.'
          },
          {
            t: 'Find the first three-digit number',
            d: 'Generate the first few: 20, 44, 68, 92. The next one is 92 + 24 = <b>116</b>. This is the <b>first three-digit number</b>.'
          },
          {
            t: 'Find the last three-digit number',
            d: 'The list ends at 1004 (four digits). Step back one: 1004 − 24 = <b>980</b>. Since 980 < 1000, 980 is the <b>last three-digit number</b>.'
          },
          {
            t: 'Count the jumps',
            d: 'From 116 to 980 is a total increase of 980 − 116 = <b>864</b>. With jumps of 24, number of jumps = 864 ÷ 24 = <b>36 jumps</b>.'
          },
          {
            t: 'Total count (fencepost principle)',
            d: 'With 36 jumps, the count of numbers is jumps + 1: 36 + 1 = <b>37 numbers</b>.'
          }
        ],
        tip: 'Fencepost rule: Number of terms = (Last − First) ÷ Step + 1. Always remember to add 1!',
        methods: [
          {
            title: 'Method 2 · Hundred-block counting',
            body: '100s: 116, 140, 164, 188 (4); 200s–400s: 4 each; 500s: 500, 524, 548, 572, 596 (5); 600s–900s: 4 each. Total = 8×4 + 1×5 = 37.'
          },
          {
            title: 'Method 3 · Algebraic inequality',
            body: 'The n-th term is 20 + 24(n−1) = 24n − 4. Set 100 ≤ 24n − 4 ≤ 999 → 4.33 ≤ n ≤ 41.79. Integer n goes from 5 to 41: 41 − 5 + 1 = 37.'
          }
        ],
        follow: {
          q: 'If the list began at 20 with steps of 12 (20, 32, 44...), how many three-digit numbers are there, and what is the last one?',
          hint: 'First 3-digit number is 104; last is 992.',
          a: '75 numbers, last is 992 ((992 − 104) ÷ 12 + 1 = 75)'
        }
      },

      '1e': {
        title: 'Max Non-Adjacent Grid Shading',
        answerNote: '5 odd rows × 8 odd columns = 40 squares',
        answer: '40',
        steps: [
          {
            t: 'Analyze the isolation rule',
            d: 'Shaded squares cannot share any edge or corner. That means every shaded square must have all <b>8 neighboring squares blank</b>.'
          },
          {
            t: 'Column capacity',
            d: 'In any row, shaded squares must be separated by at least one blank square. In 15 columns, we can pick alternating columns: 1, 3, 5, 7, 9, 11, 13, 15 → <b>(15 + 1) ÷ 2 = 8 columns</b>.'
          },
          {
            t: 'Row spacing constraint',
            d: 'Because corners cannot be shared, if a row contains shaded squares, the rows immediately above and below must be <b>completely empty</b>!'
          },
          {
            t: 'Row capacity',
            d: 'In 10 rows, shaded rows must alternate: rows 1, 3, 5, 7, 9 → <b>10 ÷ 2 = 5 rows</b>.'
          },
          {
            t: 'Maximum shaded squares',
            d: 'Intersecting the 5 rows with the 8 columns yields isolated squares with no touching edges or corners: 5 × 8 = <b>40 squares</b>.'
          }
        ],
        tip: 'Divide and conquer 2D constraints: split the 2D condition into independent 1D alternating selections, then multiply.',
        methods: [
          {
            title: 'Method 2 · 2×2 block upper bound',
            body: 'Partition the 10×15 grid into 2×2 blocks. In each 2×2 block, all 4 cells touch each other by edge or corner, so at most 1 square can be shaded. 5×7 = 35 full blocks plus borders mathematically caps the upper bound at exactly 40.'
          }
        ],
        follow: {
          q: 'If the grid size was 15 by 25, what is the greatest number of shaded squares?',
          hint: '15 rows give at most 8 rows; 25 columns give at most 13 columns.',
          a: '104 squares (8 × 13 = 104)'
        }
      }
    }
  }
};
