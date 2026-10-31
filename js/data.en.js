window.EN_CONTENT = {
  "contests": {
    "2024-25": {
      "label": "Contest 1",
      "full": "November 2024 · Contest 1",
      "blurb": "Five problems on smart products, working backwards, supposition, pairing, and nets — each with a method a fifth grader can own."
    },
    "2025-26": {
      "label": "Contest 1",
      "full": "November 2025 · Contest 1",
      "blurb": "Five problems covering place-value sums, geometric dissection, multi-step word problems, arithmetic progression, and maximum grid shading."
    },
    "2023-24": {
      "label": "Contest 1",
      "full": "November 2023 · Contest 1",
      "blurb": "Official November 2023 contest problems: friendly sums, octagon grid area, common multiple ranges, money ratio transfers, and binary subset sums."
    },
    "2022-23": {
      "label": "Contest 1",
      "full": "November 2022 · Contest 1",
      "blurb": "Official November 2022 contest problems: repeating-digit place value, greedy donut box packaging, GCF factor exclusion, stair-step perimeter, and symmetric 4-digit counting."
    },
    "mock-1": {
      "label": "Mock 1",
      "full": "November 2026 · Practice Mock 1",
      "blurb": "Full-length 5-problem timed simulation for MOEMS Division E Contest 1. Designed for 30-minute exam conditions."
    },
    "mock-2": {
      "label": "Mock 2",
      "full": "November 2026 · Practice Mock 2",
      "blurb": "Full-length 5-problem timed simulation for MOEMS Division E Contest 1. Designed for 30-minute exam conditions."
    },
    "mock-3": {
      "label": "Mock 3",
      "full": "November 2026 · Practice Mock 3",
      "blurb": "Full-length 5-problem timed simulation for MOEMS Division E Contest 1. Designed for 30-minute exam conditions."
    },
    "dec-2025-26": {
      "label": "Contest 2",
      "full": "December 2025 · Contest 2",
      "blurb": "Coming after the November exam! Features fraction operations, polygon angle & area, speed/travel, logic puzzles, and parity."
    },
    "jan-2025-26": {
      "label": "Contest 3",
      "full": "January 2026 · Contest 3",
      "blurb": "The mid-season milestone contest: telescoping sums, Venn diagrams, work rates, and 3D surface painting."
    },
    "feb-2025-26": {
      "label": "Contest 4",
      "full": "February 2026 · Contest 4",
      "blurb": "Advanced problem solving: modular arithmetic, pigeonhole principle, geometric models, and optimal casework."
    },
    "mar-2025-26": {
      "label": "Contest 5",
      "full": "March 2026 · Contest 5",
      "blurb": "The grand finale championship contest! Comprehensive challenge for awards, pins, and perfect scores."
    }
  },
  "questions": {
    "2024-25": {
      "1a": {
        "title": "Grouping for Easy Products",
        "answerNote": "Make tens and hundreds first",
        "answer": "15,000",
        "steps": [
          {
            "t": "Don’t just multiply in order",
            "d": "Multiplying five numbers left to right is slow and easy to get wrong. Pause and look for “number friends” that make 10 or 100."
          },
          {
            "t": "Find two friendly pairs",
            "d": "<b>2 and 5</b> are a pair: 2 × 5 = 10. <b>4 and 25</b> are also a pair: 4 × 25 = 100. Put a bracket around each pair."
          },
          {
            "t": "Multiply in a new order",
            "d": "Multiplication can be reordered and regrouped: (2 × 5) × (4 × 25) × 15 = <b>10 × 100 × 15</b>."
          },
          {
            "t": "Tens and hundreds are easy",
            "d": "10 × 100 = 1000, then 1000 × 15 = 15000. The answer is <b>15,000</b>."
          },
          {
            "t": "Remember the pattern",
            "d": "When you see 2, look for 5. See 4, look for 25. See 8, look for 125. Make 10, 100, or 1000 first, and the rest becomes easy."
          }
        ],
        "tip": "Commutative + associative property: numbers can “line up” differently without changing the product.",
        "methods": [
          {
            "title": "Method 2 · Prime factorization",
            "body": "2 × 4 × 5 × 15 × 25 = 2 × 2² × 5 × 3 × 5 × 5² = (2 × 5)³ × (3 × 5) = 1000 × 15 = 15,000. Great if you like breaking numbers into small pieces."
          }
        ],
        "follow": {
          "q": "Compute 2 × 8 × 5 × 15 × 25.",
          "hint": "2 × 5 = 10 and 8 × 25 = 200, then multiply by 15.",
          "a": "30,000"
        }
      },
      "1b": {
        "title": "Work Backwards",
        "answerNote": "Undo each step: + ↔ −, × ↔ ÷",
        "answer": "643",
        "steps": [
          {
            "t": "Draw the process",
            "d": "Lucky number → <b>× 3</b> → <b>+ 95</b> → 2024. We know the finish line, but not the start."
          },
          {
            "t": "Step back once",
            "d": "The last step is “+ 95”, so undo it with “− 95”: <b>2024 − 95 = 1929</b>. That is the value after multiplying by 3."
          },
          {
            "t": "Step back again",
            "d": "The step before is “× 3”, so undo it with “÷ 3”: <b>1929 ÷ 3 = 643</b>. That is the lucky number."
          },
          {
            "t": "Check the answer",
            "d": "643 × 3 = 1929 and 1929 + 95 = 2024. It lands exactly on the given result, so the answer is right."
          },
          {
            "t": "The backwards rule",
            "d": "Add becomes subtract, subtract becomes add; multiply becomes divide, divide becomes multiply — and always work from the <b>last step to the first</b>."
          }
        ],
        "tip": "Working backwards (inverse operations) is often the fastest way when the forward path is blocked.",
        "methods": [
          {
            "title": "Method 2 · Use an equation",
            "body": "Let c be the lucky number. Then 3c + 95 = 2024. Subtract 95: 3c = 1929. Divide by 3: c = 643. An equation is just the backwards steps written down."
          }
        ],
        "follow": {
          "q": "Add 56 to the year Mary was born, then divide the sum by 25. The result is 80. In what year was Mary born?",
          "hint": "Multiply by 25 first, then subtract 56.",
          "a": "1944"
        }
      },
      "1c": {
        "title": "Make a Supposition",
        "answerNote": "Pretend all are coins, then close the gap",
        "answer": "3",
        "steps": [
          {
            "t": "Sort the facts",
            "d": "There are <b>8</b> boxes. A coin box is worth <b>100</b> points, a flower box <b>250</b> points, and the total is <b>1250</b>. Find the number of flower boxes."
          },
          {
            "t": "Suppose all are coins",
            "d": "Pretend all 8 boxes hold coins: 8 × 100 = <b>800</b> points."
          },
          {
            "t": "Compare with the total",
            "d": "The real total is 1250, which is 1250 − 800 = <b>450</b> points more than our guess. The gap comes from the flower boxes."
          },
          {
            "t": "Swap one at a time",
            "d": "Replacing a coin box with a flower box adds 250 − 100 = <b>150</b> points. To add 450 points, swap 450 ÷ 150 = <b>3</b> boxes."
          },
          {
            "t": "Check and answer",
            "d": "3 flower boxes and 5 coin boxes: 3 × 250 + 5 × 100 = 750 + 500 = 1250 points. So there are <b>3</b> flower boxes."
          }
        ],
        "tip": "The supposition method is the master key for “chickens and rabbits” problems: assume one kind, then replace by the gap.",
        "methods": [
          {
            "title": "Method 2 · Try a table",
            "body": "Start with 8 coin boxes and change one box at a time: 800 → 950 → 1100 → 1250. After 3 changes the total is exactly 1250, so there are 3 flower boxes."
          },
          {
            "title": "Method 3 · Use an equation",
            "body": "Let f be the number of flower boxes, so 8 − f are coin boxes. 100(8 − f) + 250f = 1250, which simplifies to 800 + 150f = 1250, so f = 3."
          }
        ],
        "follow": {
          "q": "Kaden buys keychains and hats for his friends. Each keychain costs $10 and each hat $25. He buys 8 items and spends $125. How many keychains did he buy?",
          "hint": "If all 8 items were hats, how much extra would he spend?",
          "a": "5"
        }
      },
      "1d": {
        "title": "Pairing and Differences",
        "answerNote": "Pair one of each; only the extras matter",
        "answer": "15 quarters",
        "steps": [
          {
            "t": "Read the swap",
            "d": "There is <b>$4.95</b> in total. After swapping, there is 4.95 − 0.45 = <b>$4.50</b>. The total went down, so there must be more quarters than dimes."
          },
          {
            "t": "Do the accounting",
            "d": "Turning one quarter into a dime loses 15¢. The total lost 45¢, so the “extra” quarters number 45 ÷ 15 = <b>3</b>. Why only the extras? The pairing step shows why."
          },
          {
            "t": "Pair the coins",
            "d": "Match each dime with a quarter. After all the pairs are made, the <b>3</b> extra quarters are left over."
          },
          {
            "t": "Value of each pair",
            "d": "Each pair = 25 + 10 = <b>35¢</b>. Remove the 3 extra quarters: 495 − 3 × 25 = 495 − 75 = <b>420¢</b>. Then 420 ÷ 35 = <b>12</b> pairs."
          },
          {
            "t": "Find the answer",
            "d": "There are 12 dimes and 12 + 3 = <b>15</b> quarters. Check: 15 × 25 + 12 × 10 = 495¢ ✓; after swapping: 15 × 10 + 12 × 25 = 450¢ ✓."
          }
        ],
        "tip": "When coins are swapped, a matched pair keeps the same value; only the unmatched extras change the total.",
        "methods": [
          {
            "title": "Method 2 · Narrow it down with a table",
            "body": "The number of quarters must be odd, otherwise the total could not end in 5¢. Try 19 quarters: 19×25 + 2×10 = $4.95, but after swapping it is 2×25 + 19×10 = $2.40, too little. Try 17: after swapping $3.45 — still short. Try 15: 15×25 + 12×10 = $4.95 and after swapping 12×25 + 15×10 = $4.50, exactly $0.45 less. So there are 15 quarters."
          },
          {
            "title": "Method 3 · Use letters",
            "body": "Let q be the number of quarters and d the number of dimes. Swapping loses $0.45, so 0.15(q − d) = 0.45 and q − d = 3. Also 0.25q + 0.10d = 4.95. Substitute d = q − 3: 0.35q = 5.25, so q = 15."
          }
        ],
        "follow": {
          "q": "Aaron has $4.00 in quarters and nickels. If the nickels were quarters and the quarters were nickels, he would have half as much money. How many quarters does Aaron have?",
          "hint": "After swapping he has $2.00, which is $2.00 less. One quarter → one nickel loses 20¢.",
          "a": "15 quarters"
        }
      },
      "1e": {
        "title": "Perimeter of a Net",
        "answerNote": "Find the height, then count edges by length",
        "answer": "112 in",
        "steps": [
          {
            "t": "Read the net",
            "d": "The box has <b>6 faces</b>: the bottom, the lid, and four sides. Dashed lines are folds — they are inside the shape and do not count. The perimeter is only the outer boundary."
          },
          {
            "t": "Find the height",
            "d": "Volume = length × width × height. The base area is 8 × 12 = 96, so the height is 672 ÷ 96 = <b>7 inches</b>. Every short edge on the net is 7 inches."
          },
          {
            "t": "Label the outer edges",
            "d": "Walk around the outer boundary. Every edge is either the bottom’s <b>12</b>, <b>8</b>, or the box’s height <b>7</b>. Color them by length."
          },
          {
            "t": "Count by length",
            "d": "Count them: there are <b>8</b> edges of length 7, <b>4</b> edges of length 8, and <b>2</b> edges of length 12."
          },
          {
            "t": "Add them up",
            "d": "Perimeter = 8 × 7 + 4 × 8 + 2 × 12 = 56 + 32 + 24 = <b>112 inches</b>. Counting by groups is safer than adding one edge at a time."
          }
        ],
        "tip": "Three steps for net problems: ① find the hidden height; ② look only at the outer boundary; ③ count edges by length.",
        "methods": [
          {
            "title": "Method 2 · Six rectangles minus the folds",
            "body": "The six faces have total perimeter 2 × (40 + 38 + 30) = 216 in, where 40, 38, and 30 are the perimeters of the 8×12, 12×7, and 8×7 rectangles. Each of the 5 fold edges is counted twice: 2 × (12 + 12 + 12 + 8 + 8) = 104 in. Outer perimeter = 216 − 104 = 112 in."
          },
          {
            "title": "A useful extra",
            "body": "The area of this net is the surface area of the box: 2 × (8×12 + 12×7 + 8×7) = 192 + 168 + 112 = 472 square inches."
          }
        ],
        "follow": {
          "q": "What is the surface area of this cardboard box?",
          "hint": "Six faces: two 8×12, two 12×7, two 8×7.",
          "a": "472 square inches"
        }
      }
    },
    "2025-26": {
      "1a": {
        "title": "Place Value & Smart Sums",
        "answerNote": "Calculate the contribution of 7 in each place value",
        "answer": "86,415",
        "steps": [
          {
            "t": "Examine the pattern",
            "d": "The sum has 5 numbers made entirely of 7s: 7, 77, 777, 7777, and 77777. Adding them left to right with cascading carries is easy to mess up. Let’s count the 7s by place value."
          },
          {
            "t": "Break down by place value",
            "d": "<b>Ones place</b>: all 5 numbers have a ones digit → five 7s.<br><b>Tens place</b>: 4 numbers have a tens digit → four 7s.<br><b>Hundreds</b>: three 7s; <b>Thousands</b>: two 7s; <b>Ten-thousands</b>: one 7."
          },
          {
            "t": "Compute each place value",
            "d": "Ten-thousands: 1 × 7 × 10,000 = <b>70,000</b><br>Thousands: 2 × 7 × 1,000 = <b>14,000</b><br>Hundreds: 3 × 7 × 100 = <b>2,100</b><br>Tens: 4 × 7 × 10 = <b>280</b><br>Ones: 5 × 7 × 1 = <b>35</b>."
          },
          {
            "t": "Add the place values",
            "d": "70,000 + 14,000 + 2,100 + 280 + 35 = <b>86,415</b>. Breaking by place value turns heavy column addition into mental math!"
          },
          {
            "t": "Double-check with carries",
            "d": "Ones: 35, write 5 carry 3. Tens: 28 + 3 = 31, write 1 carry 3. Hundreds: 21 + 3 = 24, write 4 carry 2. Thousands: 14 + 2 = 16, write 6 carry 1. Ten-thousands: 7 + 1 = 8. Result: <b>86,415</b>."
          }
        ],
        "tip": "Place value principle: for repeating-digit sums, counting how many digits contribute to each place is the cleanest method.",
        "methods": [
          {
            "title": "Method 2 · Standard vertical addition",
            "body": "Line up the numbers on the right. Sum the columns from right to left with standard carries: 5×7=35 (write 5, carry 3); 4×7+3=31; 3×7+3=24; 2×7+2=16; 1×7+1=8 → 86,415."
          },
          {
            "title": "Method 3 · Convert to multiples of 9",
            "body": "7 + 77 + 777 + 7777 + 77777 = 7/9 × (9 + 99 + 999 + 9999 + 99999) = 7/9 × (111105) = 86,415. A classic Olympiad technique."
          }
        ],
        "follow": {
          "q": "Is the sum 86,415 divisible by 15?",
          "hint": "A number divisible by 15 must be divisible by both 3 and 5.",
          "a": "Yes. It ends in 5 (divisible by 5), and the sum of digits 8+6+4+1+5=24 is divisible by 3."
        }
      },
      "1b": {
        "title": "Dissecting Rectangles & Perimeter",
        "answerNote": "Small rectangle is 5 × 2 cm; large rectangle perimeter is 2 × (7 + 10) = 34 cm",
        "answer": "34",
        "steps": [
          {
            "t": "Find the area of each small rectangle",
            "d": "Seven congruent rectangles form a large rectangle with total area 70 cm². Each small rectangle has area = <b>70 ÷ 7 = 10 cm²</b>."
          },
          {
            "t": "Whole-number dimension candidates",
            "d": "The dimensions are whole numbers with product 10. The only possibilities are <b>10 × 1</b> or <b>5 × 2</b>."
          },
          {
            "t": "Match the geometric edges",
            "d": "Look at the diagram: <b>5 small rectangles stacked horizontally</b> on the left give height = 5 short sides (5x). <b>2 small rectangles standing vertically</b> on the right give height = 2 long sides (2y). Both heights must be equal: <b>5x = 2y</b>!"
          },
          {
            "t": "Verify the dimensions",
            "d": "Testing 5 × 2: short side x = 2 cm, long side y = 5 cm. Left height = 5 × 2 = 10 cm; right height = 2 × 5 = 10 cm. Perfect match! Large rectangle: height = <b>10 cm</b>, width = 5 + 2 = <b>7 cm</b>."
          },
          {
            "t": "Calculate the perimeter",
            "d": "Perimeter = 2 × (width + height) = 2 × (7 + 10) = 2 × 17 = <b>34 cm</b>."
          }
        ],
        "tip": "Look for shared boundaries: when congruent shapes meet along a common edge, their total lengths along that seam must match.",
        "methods": [
          {
            "title": "Method 2 · Factorizing the large rectangle",
            "body": "A large rectangle of area 70 can only be 2×35, 5×14, or 7×10. Its height must be divisible by both 2 and 5 (formed by 2 lengths and 5 widths), so height is 10. That leaves width 7, small rectangles 5×2, and perimeter 2×(7+10) = 34 cm."
          },
          {
            "title": "Method 3 · Algebraic equations",
            "body": "Let x be the shorter side and y the longer side. 5x = 2y and (x + y)(2y) = 70 → (x + y)y = 35. Since x and y are integers and y < x+y, y = 5 and x = 2. Perimeter = 2(7 + 10) = 34 cm."
          }
        ],
        "follow": {
          "q": "How much greater is the sum of the perimeters of the 7 smaller rectangles than the perimeter of the larger rectangle?",
          "hint": "Each small rectangle has perimeter 2×(5+2)=14 cm; 7 of them make 98 cm.",
          "a": "64 cm (98 − 34 = 64 cm)"
        }
      },
      "1c": {
        "title": "Sticker Counts & Unit Modeling",
        "answerNote": "Let Connie be C; Beth = 4 + 6 = 10 stickers",
        "answer": "10",
        "steps": [
          {
            "t": "Choose the baseline person",
            "d": "Beth has 6 more than Connie, and Deb has triple Connie. Both connect directly to Connie. Let <b>Connie be the baseline unit: C</b>."
          },
          {
            "t": "Express everyone in terms of C",
            "d": "• Connie = <b>C</b><br>• Beth = <b>C + 6</b><br>• Ashley = 2 × Beth = 2 × (C + 6) = <b>2C + 12</b><br>• Deb = 3 × Connie = <b>3C</b>."
          },
          {
            "t": "Combine the total",
            "d": "Sum of all four: C + (C + 6) + (2C + 12) + 3C = <b>7C + 18</b>. We are given the total is 46 stickers."
          },
          {
            "t": "Solve for C",
            "d": "7C + 18 = 46 → 7C = 46 − 18 = 28 → <b>C = 28 ÷ 7 = 4</b>. Connie has 4 stickers."
          },
          {
            "t": "Find Beth’s stickers and verify",
            "d": "Beth = C + 6 = 4 + 6 = <b>10 stickers</b>.<br>Check: Connie=4, Beth=10, Ashley=20, Deb=12. Total = 4 + 10 + 20 + 12 = 46. Matches completely!"
          }
        ],
        "tip": "Word problem key: anchor the network at the person everyone compares against, turning multiple unknowns into a single unit.",
        "methods": [
          {
            "title": "Method 2 · Guess and check",
            "body": "Guess Beth=8: Connie=2, Ashley=16, Deb=6 → total 32 (too low by 14). Guess Beth=9: total 39 (increases by 7). Guess Beth=10: Connie=4, Ashley=20, Deb=12 → total 46. Beth has 10."
          }
        ],
        "follow": {
          "q": "Keeping the same ratios, what is the maximum total stickers if the total is less than 100?",
          "hint": "7C + 18 < 100, find the maximum integer C.",
          "a": "95 stickers (max C is 11, giving 7×11 + 18 = 95)"
        }
      },
      "1d": {
        "title": "Arithmetic Progression & Range Counting",
        "answerNote": "Range from 116 to 980; (980 − 116) ÷ 24 + 1 = 37 numbers",
        "answer": "37",
        "steps": [
          {
            "t": "Understand the rule & three-digit range",
            "d": "The list starts at 20, with each number 24 greater than the last (common difference d = 24). Three-digit numbers range from <b>100 to 999</b>."
          },
          {
            "t": "Find the first three-digit number",
            "d": "Generate the first few: 20, 44, 68, 92. The next one is 92 + 24 = <b>116</b>. This is the <b>first three-digit number</b>."
          },
          {
            "t": "Find the last three-digit number",
            "d": "The list ends at 1004 (four digits). Step back one: 1004 − 24 = <b>980</b>. Since 980 < 1000, 980 is the <b>last three-digit number</b>."
          },
          {
            "t": "Count the jumps",
            "d": "From 116 to 980 is a total increase of 980 − 116 = <b>864</b>. With jumps of 24, number of jumps = 864 ÷ 24 = <b>36 jumps</b>."
          },
          {
            "t": "Total count (fencepost principle)",
            "d": "With 36 jumps, the count of numbers is jumps + 1: 36 + 1 = <b>37 numbers</b>."
          }
        ],
        "tip": "Fencepost rule: Number of terms = (Last − First) ÷ Step + 1. Always remember to add 1!",
        "methods": [
          {
            "title": "Method 2 · Hundred-block counting",
            "body": "100s: 116, 140, 164, 188 (4); 200s–400s: 4 each; 500s: 500, 524, 548, 572, 596 (5); 600s–900s: 4 each. Total = 8×4 + 1×5 = 37."
          },
          {
            "title": "Method 3 · Algebraic inequality",
            "body": "The n-th term is 20 + 24(n−1) = 24n − 4. Set 100 ≤ 24n − 4 ≤ 999 → 4.33 ≤ n ≤ 41.79. Integer n goes from 5 to 41: 41 − 5 + 1 = 37."
          }
        ],
        "follow": {
          "q": "If the list began at 20 with steps of 12 (20, 32, 44...), how many three-digit numbers are there, and what is the last one?",
          "hint": "First 3-digit number is 104; last is 992.",
          "a": "75 numbers, last is 992 ((992 − 104) ÷ 12 + 1 = 75)"
        }
      },
      "1e": {
        "title": "Max Non-Adjacent Grid Shading",
        "answerNote": "5 odd rows × 8 odd columns = 40 squares",
        "answer": "40",
        "steps": [
          {
            "t": "Analyze the isolation rule",
            "d": "Shaded squares cannot share any edge or corner. That means every shaded square must have all <b>8 neighboring squares blank</b>."
          },
          {
            "t": "Column capacity",
            "d": "In any row, shaded squares must be separated by at least one blank square. In 15 columns, we can pick alternating columns: 1, 3, 5, 7, 9, 11, 13, 15 → <b>(15 + 1) ÷ 2 = 8 columns</b>."
          },
          {
            "t": "Row spacing constraint",
            "d": "Because corners cannot be shared, if a row contains shaded squares, the rows immediately above and below must be <b>completely empty</b>!"
          },
          {
            "t": "Row capacity",
            "d": "In 10 rows, shaded rows must alternate: rows 1, 3, 5, 7, 9 → <b>10 ÷ 2 = 5 rows</b>."
          },
          {
            "t": "Maximum shaded squares",
            "d": "Intersecting the 5 rows with the 8 columns yields isolated squares with no touching edges or corners: 5 × 8 = <b>40 squares</b>."
          }
        ],
        "tip": "Divide and conquer 2D constraints: split the 2D condition into independent 1D alternating selections, then multiply.",
        "methods": [
          {
            "title": "Method 2 · 2×2 block upper bound",
            "body": "Partition the 10×15 grid into 2×2 blocks. In each 2×2 block, all 4 cells touch each other by edge or corner, so at most 1 square can be shaded. 5×7 = 35 full blocks plus borders mathematically caps the upper bound at exactly 40."
          }
        ],
        "follow": {
          "q": "If the grid size was 15 by 25, what is the greatest number of shaded squares?",
          "hint": "15 rows give at most 8 rows; 25 columns give at most 13 columns.",
          "a": "104 squares (8 × 13 = 104)"
        }
      }
    },
    "2023-24": {
      "1a": {
        "title": "Grouping for Friendly Hundreds",
        "answerNote": "Use associative law: (73+27) + (34+66) + (28+12) = 240",
        "answer": "240",
        "steps": [
          {
            "t": "Find the friendly pairs",
            "d": "Looking at the ones digits: <b>73 and 27</b> make 100, <b>34 and 66</b> make 100, and <b>28 and 12</b> make 40."
          },
          {
            "t": "Regroup and add",
            "d": "Original sum = (73 + 27) + (34 + 66) + (28 + 12) = 100 + 100 + 40."
          },
          {
            "t": "Calculate total",
            "d": "100 + 100 + 40 = <b>240</b>. Mental math makes it fast and error-free!"
          }
        ],
        "tip": "Friendly number pairs: 3 & 7, 4 & 6, 8 & 2. Always group to make tens and hundreds first.",
        "methods": [
          {
            "title": "Method 2 · Column addition",
            "body": "Summing digits column by column: ones sum = 30 (write 0, carry 3); tens sum = 21 + 3 = 24 → 240."
          }
        ],
        "follow": {
          "q": "Compute 84 + 19 + 47 + 16 + 81 + 53.",
          "hint": "(84+16) + (19+81) + (47+53) = 300.",
          "a": "300"
        }
      },
      "1b": {
        "title": "Grid Corner Cuts & Octagon Area",
        "answerNote": "Total area 16 minus 4 corner triangles: 16 − 4 × 1 = 12",
        "answer": "12",
        "steps": [
          {
            "t": "Total grid area",
            "d": "The grid is 4 × 4, so total area = 4 × 4 = <b>16 square units</b>."
          },
          {
            "t": "Area of each corner triangle",
            "d": "Each corner triangle has base 2 and height 1. Area = (2 × 1) ÷ 2 = <b>1 square unit</b>."
          },
          {
            "t": "Subtract 4 corners",
            "d": "Combined 4 corners = 4 × 1 = 4. Octagon area = 16 − 4 = <b>12 square units</b>."
          }
        ],
        "tip": "Subtractive geometry: when an irregular shape lives inside a square, subtract the outer corners.",
        "methods": [
          {
            "title": "Method 2 · Interior block counting",
            "body": "Center 2×2 is 4; four surrounding trapezoids/rectangles add 8 square units = 12."
          }
        ],
        "follow": {
          "q": "If each corner cut has legs of length 1, what is the area of the octagon?",
          "hint": "4 triangles of 0.5 area each = 2. 16 − 2 = 14.",
          "a": "14 square units"
        }
      },
      "1c": {
        "title": "Common Multiples in 3-Digit Range",
        "answerNote": "LCM(20, 35) = 140; multiples from 140 × 1 to 140 × 7 = 7 numbers",
        "answer": "7",
        "steps": [
          {
            "t": "Find the Least Common Multiple (LCM)",
            "d": "20 = 2² × 5, 35 = 5 × 7. LCM(20, 35) = 2² × 5 × 7 = <b>140</b>."
          },
          {
            "t": "Find 3-digit multiples of 140",
            "d": "Three-digit numbers range from 100 to 999. Smallest: 140 × 1 = 140. Largest: 999 ÷ 140 = 7.13 → 140 × 7 = 980."
          },
          {
            "t": "Count the terms",
            "d": "k can be 1, 2, 3, 4, 5, 6, 7 → exactly <b>7 numbers</b>."
          }
        ],
        "tip": "Multiples of two numbers are multiples of their LCM. Divide 999 by the LCM to find the upper bound.",
        "methods": [
          {
            "title": "Method 2 · List multiples",
            "body": "140, 280, 420, 560, 700, 840, 980 (7 numbers). The next one is 1120."
          }
        ],
        "follow": {
          "q": "How many 3-digit numbers are multiples of both 15 and 25?",
          "hint": "LCM is 75. 75×2=150 to 75×13=975 → 12 numbers.",
          "a": "12 numbers"
        }
      },
      "1d": {
        "title": "Money Transfer & Ratio Inversion",
        "answerNote": "Michael started with $60 and Isabella with $12",
        "answer": "60",
        "steps": [
          {
            "t": "Model initial amounts",
            "d": "Let Isabella start with x dollars; Michael starts with <b>5x dollars</b>."
          },
          {
            "t": "Account for the transfer",
            "d": "Michael gives $36 → Michael has <b>5x − 36</b>, Isabella has <b>x + 36</b>."
          },
          {
            "t": "Solve the ratio equation",
            "d": "x + 36 = 2(5x − 36) = 10x − 72 → 9x = 108 → <b>x = 12</b>."
          },
          {
            "t": "Compute Michael's start",
            "d": "Michael = 5x = 5 × 12 = <b>$60</b>. Check: 60−36 = 24, 12+36 = 48 (48 is 2 × 24!)."
          }
        ],
        "tip": "Total money remains constant! Internal transfers change individual shares but keep the sum fixed.",
        "methods": [
          {
            "title": "Method 2 · Fraction of total",
            "body": "Michael had 5/6 of total, Isabella 1/6. Later Isabella has 2/3 = 4/6. The $36 transfer is 3/6 (half the total). Total = $72, Michael = 5/6 × 72 = $60."
          }
        ],
        "follow": {
          "q": "If Michael had 4 times Isabella, and giving $15 made them equal, what did Michael start with?",
          "hint": "Difference is $30, 3 units = 30 → 1 unit = 10, Michael = 40.",
          "a": "$40"
        }
      },
      "1e": {
        "title": "Powers of Two & Subset Sums",
        "answerNote": "Non-zero set {1, 2, 4, 8, 16} produces 2⁵ − 1 = 31 unique sums",
        "answer": "31",
        "steps": [
          {
            "t": "The role of 0",
            "d": "Adding 0 does not change the numeric sum, but allows any 1-element non-zero subset to become a valid 2-number sum (e.g., 0 + 8 = 8)."
          },
          {
            "t": "Binary uniqueness of {1, 2, 4, 8, 16}",
            "d": "These 5 numbers are 2⁰, 2¹, 2², 2³, 2⁴. Just like binary digits, every subset has a unique sum."
          },
          {
            "t": "Count the non-empty subsets",
            "d": "5 elements give 2⁵ − 1 = <b>31 distinct sums</b> from 1 to 31."
          }
        ],
        "tip": "Powers of 2 uniquely encode all integers up to their sum with zero redundancy.",
        "methods": [
          {
            "title": "Method 2 · Combinatorics",
            "body": "Every integer from 1 to 31 can be expressed uniquely as a sum of powers of 2."
          }
        ],
        "follow": {
          "q": "How many sums can be made with {0, 1, 2, 4, 8}?",
          "hint": "4 non-zero numbers: 2⁴ − 1 = 15.",
          "a": "15"
        }
      }
    },
    "2022-23": {
      "1a": {
        "title": "Place Value Pattern Addition",
        "answerNote": "Each place value contains three 2s: 3 × 2 = 6 in thousands, hundreds, tens, ones",
        "answer": "6,666",
        "steps": [
          {
            "t": "Count 2s in each place value",
            "d": "Thousands: 3 numbers have 2. Hundreds: 3 numbers. Tens: 3 numbers. Ones: 3 numbers."
          },
          {
            "t": "Sum each column",
            "d": "Each place column sums to 3 × 2 = 6, with zero carries!"
          },
          {
            "t": "Write the sum",
            "d": "Thousands=6, Hundreds=6, Tens=6, Ones=6 → <b>6,666</b>."
          }
        ],
        "tip": "Place value counting avoids column additions when numbers share repeating digits.",
        "methods": [
          {
            "title": "Method 2 · Add step by step",
            "body": "222 + 2022 = 2244; 2244 + 2202 = 4446; 4446 + 2220 = 6666."
          }
        ],
        "follow": {
          "q": "Compute 333 + 3033 + 3303 + 3330.",
          "hint": "Three 3s in every place value: 3 × 3 = 9.",
          "a": "9,999"
        }
      },
      "1b": {
        "title": "Greedy Packaging for Minimum Boxes",
        "answerNote": "Maximize 20-boxes: 4 × 20 + 1 × 10 + 1 × 5 = 6 boxes",
        "answer": "6",
        "steps": [
          {
            "t": "Use the largest box size",
            "d": "To minimize the number of boxes, maximize the 20-donut boxes: 95 ÷ 20 = 4 with 15 left."
          },
          {
            "t": "Cover the remainder",
            "d": "15 donuts remaining = 1 box of 10 + 1 box of 5."
          },
          {
            "t": "Count total boxes",
            "d": "4 (20-boxes) + 1 (10-box) + 1 (5-box) = <b>6 boxes</b>."
          }
        ],
        "tip": "Greedy choice: always pick the largest coin/box first to minimize total pieces.",
        "methods": [
          {
            "title": "Method 2 · Proof by contradiction",
            "body": "5 boxes of max size 20 hold at most 100, but cannot make 95 without taking smaller boxes; 4×20+1×10 = 90 < 95. So 5 boxes is impossible. Minimum is 6."
          }
        ],
        "follow": {
          "q": "What is the least number of boxes to buy 135 mini-donuts?",
          "hint": "6 × 20 + 1 × 10 + 1 × 5 = 8 boxes.",
          "a": "8"
        }
      },
      "1c": {
        "title": "GCF & Coprime Factor Sifting",
        "answerNote": "GCF(96, 120) = 24; remove factors sharing prime factors with 105 (3, 5, 7) → max is 8",
        "answer": "8",
        "steps": [
          {
            "t": "Find GCF of 96 and 120",
            "d": "96 = 2⁵ × 3, 120 = 2³ × 3 × 5. Common factor GCF = 2³ × 3 = <b>24</b>. Factors of 24: {1, 2, 3, 4, 6, 8, 12, 24}."
          },
          {
            "t": "Prime factors of 105",
            "d": "105 = 3 × 5 × 7. Sharing no factor other than 1 means the number <b>cannot be divisible by 3</b>."
          },
          {
            "t": "Filter factors of 24",
            "d": "Remove multiples of 3: {3, 6, 12, 24}. Remaining: {1, 2, 4, 8}. Greatest is <b>8</b>."
          }
        ],
        "tip": "Common factors of two numbers are factors of their GCF. Eliminate forbidden prime factors.",
        "methods": [
          {
            "title": "Method 2 · Direct prime elimination",
            "body": "GCF(96, 120) = 2³ × 3. Exclude 3 because 105 has factor 3. Largest remaining power is 2³ = 8."
          }
        ],
        "follow": {
          "q": "Greatest factor of 72 and 90 coprime to 35?",
          "hint": "GCF is 18. 35 = 5 × 7. 18 shares no factor with 35, so 18.",
          "a": "18"
        }
      },
      "1d": {
        "title": "Stair-Step Perimeter Projection",
        "answerNote": "Horizontal = 2 × 10 = 20 cm, Vertical = 2 × 8 = 16 cm, Perimeter = 36 cm",
        "answer": "36",
        "steps": [
          {
            "t": "Horizontal edges",
            "d": "Bottom base = 5 × 2 = 10 cm. Top steps project to 10 cm. Horizontal total = <b>20 cm</b>."
          },
          {
            "t": "Vertical edges",
            "d": "Left edge = 1 cm. Steps between adjacent heights: 1 + 2 + 2 + 2 = 7 cm. Right edge = 8 cm. Vertical total = 1 + 7 + 8 = <b>16 cm</b> (2 × 8 cm!)."
          },
          {
            "t": "Sum perimeter",
            "d": "Perimeter = 20 + 16 = <b>36 cm</b>."
          }
        ],
        "tip": "Stair-step projection: perimeter on a flat base equals the bounding rectangle = 2 × (width + max height).",
        "methods": [
          {
            "title": "Method 2 · Bounding box equivalence",
            "body": "Pushing inner steps out forms a 10 cm by 8 cm rectangle. Perimeter = 2 × (10 + 8) = 36 cm."
          }
        ],
        "follow": {
          "q": "Four rectangles of base 3 cm with heights 2, 5, 7, 10 cm?",
          "hint": "2 × (12 + 10) = 44 cm.",
          "a": "44 cm"
        }
      },
      "1e": {
        "title": "Symmetric 4-Digit Numbers & Midpoints",
        "answerNote": "20 numbers: a=d has 9 choices, b and a have same parity and b < a",
        "answer": "20",
        "steps": [
          {
            "t": "Examine midpoint condition",
            "d": "a = d and c = (b + d)/2 = (b + a)/2. Thus, <b>a and b must have the same parity</b> (both even or both odd)."
          },
          {
            "t": "Examine b < a",
            "d": "When b < a and both have the same parity, c automatically satisfies b < c < a."
          },
          {
            "t": "Count by value of a (2 to 9)",
            "d": "• a=2: b=0 (1)<br>• a=3: b=1 (1)<br>• a=4: b∈{0,2} (2)<br>• a=5: b∈{1,3} (2)<br>• a=6: b∈{0,2,4} (3)<br>• a=7: b∈{1,3,5} (3)<br>• a=8: b∈{0,2,4,6} (4)<br>• a=9: b∈{1,3,5,7} (4)."
          },
          {
            "t": "Total count",
            "d": "Total = 1 + 1 + 2 + 2 + 3 + 3 + 4 + 4 = <b>20 numbers</b>."
          }
        ],
        "tip": "Systematic casework: identify the leading variable (a) and sum choices by parity groups.",
        "methods": [
          {
            "title": "Method 2 · Parity split",
            "body": "Even a: 1+2+3+4 = 10; Odd a: 1+2+3+4 = 10. Total = 20."
          }
        ],
        "follow": {
          "q": "How many if a must be an even digit?",
          "hint": "1 + 2 + 3 + 4 = 10 numbers.",
          "a": "10"
        }
      }
    },
    "mock-1": {
      "1a": {
        "title": "Factoring for Thousands",
        "answerNote": "(8 × 125) × (15 × 6) = 1,000 × 90 = 90,000",
        "answer": "90,000",
        "steps": [
          {
            "t": "Spot the pairs",
            "d": "8 × 125 = 1,000 and 15 × 6 = 90."
          },
          {
            "t": "Multiply",
            "d": "1,000 × 90 = <b>90,000</b>."
          }
        ],
        "tip": "Remember 8 × 125 = 1000.",
        "methods": [],
        "follow": {
          "q": "4 × 35 × 25 × 2",
          "hint": "100 × 70",
          "a": "7,000"
        }
      },
      "1b": {
        "title": "Year 2026 Backwards",
        "answerNote": "(2026 − 110) ÷ 4 = 479",
        "answer": "479",
        "steps": [
          {
            "t": "Reverse steps",
            "d": "2026 − 110 = 1916; 1916 ÷ 4 = <b>479</b>."
          }
        ],
        "tip": "Work backwards from the final result.",
        "methods": [],
        "follow": {
          "q": "5x − 80 = 2025",
          "hint": "2105 ÷ 5",
          "a": "421"
        }
      },
      "1c": {
        "title": "Ticket Supposition Method",
        "answerNote": "Assume all adults: 300 − 228 = 72; 72 ÷ 8 = 9 student tickets",
        "answer": "9",
        "steps": [
          {
            "t": "Assume all adult",
            "d": "15 × 20 = $300. Excess = $300 − $228 = $72."
          },
          {
            "t": "Replace with student",
            "d": "Each saves $20 − $12 = $8. $72 ÷ $8 = <b>9 student tickets</b>."
          }
        ],
        "tip": "Classic chicken-and-rabbit supposition.",
        "methods": [],
        "follow": {
          "q": "20 tickets cost $160 ($6 child, $11 adult)",
          "hint": "60 ÷ 5 = 12",
          "a": "12"
        }
      },
      "1d": {
        "title": "Arithmetic Sequence Terms",
        "answerNote": "(987 − 105) ÷ 18 + 1 = 50 terms",
        "answer": "50",
        "steps": [
          {
            "t": "Find bounds",
            "d": "First 3-digit: 105. Last: 987."
          },
          {
            "t": "Count steps",
            "d": "(987 − 105) ÷ 18 = 49 steps. Terms = 49 + 1 = <b>50</b>."
          }
        ],
        "tip": "Add 1 for fenceposts!",
        "methods": [],
        "follow": {
          "q": "Sequence starts 10, step 15, last 985",
          "hint": "60 terms",
          "a": "60"
        }
      },
      "1e": {
        "title": "Perimeter of 6 Rectangles",
        "answerNote": "Each 8 × 2 cm; large rectangle 12 × 8 cm, perimeter 40 cm",
        "answer": "40",
        "steps": [
          {
            "t": "Small area",
            "d": "96 ÷ 6 = 16 cm² (8 × 2). Large rect = 12 × 8 cm."
          },
          {
            "t": "Perimeter",
            "d": "2 × (12 + 8) = <b>40 cm</b>."
          }
        ],
        "tip": "Match shared side lengths.",
        "methods": [],
        "follow": {
          "q": "Four 3×1 rectangles",
          "hint": "14 or 26 cm",
          "a": "14 or 26 cm"
        }
      }
    },
    "mock-2": {
      "1a": {
        "title": "Distributive Property Factoring",
        "answerNote": "37 × (48 + 52) = 37 × 100 = 3,700",
        "answer": "3,700",
        "steps": [
          {
            "t": "Factor out 37",
            "d": "37 × (48 + 52) = 37 × 100 = <b>3,700</b>."
          }
        ],
        "tip": "Look for numbers that sum to 100.",
        "methods": [],
        "follow": {
          "q": "64 × 73 + 64 × 27",
          "hint": "64 × 100",
          "a": "6,400"
        }
      },
      "1b": {
        "title": "Coin Swap Difference",
        "answerNote": "60¢ drop ÷ 15¢ difference = 4 more quarters; total 12 quarters",
        "answer": "12",
        "steps": [
          {
            "t": "Find unit diff",
            "d": "Each swap loses 15¢. 60 ÷ 15 = 4 more quarters. Pairing gives <b>12 quarters</b>."
          }
        ],
        "tip": "Total change ÷ single change = difference.",
        "methods": [],
        "follow": {
          "q": "3 more quarters, drop?",
          "hint": "3 × 15¢ = 45¢",
          "a": "45¢"
        }
      },
      "1c": {
        "title": "Track Lap Meeting Time",
        "answerNote": "LCM(60, 75, 90) = 900 seconds = 15 minutes",
        "answer": "15",
        "steps": [
          {
            "t": "Find LCM",
            "d": "LCM(60, 75, 90) = 900 seconds = <b>15 minutes</b>."
          }
        ],
        "tip": "Watch the units (seconds to minutes!).",
        "methods": [],
        "follow": {
          "q": "Only 60s and 90s?",
          "hint": "180s = 3 min",
          "a": "3 minutes"
        }
      },
      "1d": {
        "title": "8×8 Checkerboard Isolation",
        "answerNote": "4 odd rows × 4 odd columns = 16 squares",
        "answer": "16",
        "steps": [
          {
            "t": "Grid isolation",
            "d": "Pick 4 alternating rows and 4 alternating columns: 4 × 4 = <b>16</b>."
          }
        ],
        "tip": "Separate 2D into independent 1D alternates.",
        "methods": [],
        "follow": {
          "q": "7 × 7 board?",
          "hint": "4 × 4 = 16",
          "a": "16"
        }
      },
      "1e": {
        "title": "Unfolded Box Outer Perimeter",
        "answerNote": "8 edges of 5, 4 of 4, 4 of 6: 40 + 16 + 20 = 76 in",
        "answer": "76",
        "steps": [
          {
            "t": "Count outer edges",
            "d": "Sum outer edges by length: 8×5 + 4×4 + 4×6 = <b>76 inches</b>."
          }
        ],
        "tip": "Ignore interior fold creases.",
        "methods": [],
        "follow": {
          "q": "Cube net side 3?",
          "hint": "14 × 3 = 42",
          "a": "42 in"
        }
      }
    },
    "mock-3": {
      "1a": {
        "title": "Sum of Odd Numbers",
        "answerNote": "First 20 odd numbers sum to 20² = 400",
        "answer": "400",
        "steps": [
          {
            "t": "Square pattern",
            "d": "Sum of first n odd numbers is n². 20² = <b>400</b>."
          }
        ],
        "tip": "1+3+5...+ (2n-1) = n².",
        "methods": [],
        "follow": {
          "q": "First 15 odd numbers?",
          "hint": "15² = 225",
          "a": "225"
        }
      },
      "1b": {
        "title": "Age Multiples Equation",
        "answerNote": "Brian = 6 years old",
        "answer": "6",
        "steps": [
          {
            "t": "Set unit",
            "d": "Brian = B; B + (B+4) + 2(B+4) + 3B = 7B + 12 = 54 → <b>B = 6</b>."
          }
        ],
        "tip": "Anchor to the central comparator.",
        "methods": [],
        "follow": {
          "q": "Alex's age?",
          "hint": "6 + 4 = 10",
          "a": "10"
        }
      },
      "1c": {
        "title": "Making 50 Cents with Coins",
        "answerNote": "Case 25¢: 2 coins (1), 1 coin (3), 0 coins (6) → 10 ways",
        "answer": "10",
        "steps": [
          {
            "t": "Casework by 25¢",
            "d": "Two 25¢: 1 way. One 25¢: 3 ways. Zero 25¢: 6 ways. Total = <b>10 ways</b>."
          }
        ],
        "tip": "Systematic casework from highest denomination.",
        "methods": [],
        "follow": {
          "q": "Make 30¢ with 5¢ and 10¢?",
          "hint": "4 ways",
          "a": "4 ways"
        }
      },
      "1d": {
        "title": "Cross Shape Perimeter",
        "answerNote": "Corners push out to match original square: 4 × 8 = 32 cm",
        "answer": "32",
        "steps": [
          {
            "t": "Corner cut invariance",
            "d": "Cutting corner rectangles preserves outer perimeter: 4 × 8 = <b>32 cm</b>."
          }
        ],
        "tip": "Push inward cuts outward to see perimeter conservation.",
        "methods": [],
        "follow": {
          "q": "Cut from edge center?",
          "hint": "32 + 4 = 36 cm",
          "a": "36 cm"
        }
      },
      "1e": {
        "title": "Day of the Week Cycles",
        "answerNote": "100 ÷ 7 = 14 with remainder 2; Tuesday + 2 = Thursday",
        "answer": "Thursday",
        "steps": [
          {
            "t": "Cycle of 7",
            "d": "100 ÷ 7 = 14 weeks + 2 days remainder. Tuesday + 2 days = <b>Thursday</b>."
          }
        ],
        "tip": "Remainder tells the exact offset.",
        "methods": [],
        "follow": {
          "q": "50 days from Tuesday?",
          "hint": "50 = 7×7 + 1 → Wednesday",
          "a": "Wednesday"
        }
      }
    }
  }
};
