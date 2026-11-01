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
    },
    "vol1-olympiad1": {
      "label": "Olympiad 1",
      "full": "MOEMS Vol 1 · Contest 1 (Division E Official)",
      "blurb": "The historic first MOEMS Division E contest from Vol 1, annotated with national accuracy rates. Features day cycles, stamp postage combinations, Gauss consecutive sums, stationery elimination, and work-crew duration."
},
    "vol1-olympiad2": {
      "label": "Olympiad 2",
      "full": "MOEMS Vol 1 · Contest 2 (Division E Official)",
      "blurb": "The historic second MOEMS Division E contest from Vol 1, annotated with national accuracy rates. Features double transaction profit, coin replacement, seamless card tiling, bowling score averages, and digit 1 frequency."
},
    "classic-vol1": {
      "label": "Master Set 1",
      "full": "MOEMS Vol 1–2 · Classic Master Problems 1",
      "blurb": "Essential classics from Kalman & Lenchner: Gauss sum, snail in a well, book page digits, clock hand angle, and fencepost cuts."
    },
    "classic-vol2": {
      "label": "Master Set 2",
      "full": "MOEMS Vol 3–4 · Classic Master Problems 2",
      "blurb": "Geometry & algebra master models: difference of squares, cube surface painting, travel meeting time, 3x3 magic square, and tournament games."
    },
    "classic-vol3": {
      "label": "Master Set 3",
      "full": "Creative Problem Solving · Master Set 3",
      "blurb": "Advanced reasoning from George Lenchner: worst-case pigeonhole, Venn diagram overlap, cryptarithm AB+BA, trapezoid butterfly wings, and power of 2 cycles."
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
    },
    "vol1-olympiad1": {
      "1a": {
            "title": "Day Cycle: 100 Days from Tuesday",
            "answerNote": "National Accuracy: 58% · Suggested Time: 4 min",
            "tip": "Day arithmetic rule: Days divided by 7 leaves a remainder. Advance that many days from the starting day.",
            "steps": [
                  {
                        "t": "Identify the 7-day cycle",
                        "d": "A week consists of <b>7 days</b>. Advancing any multiple of 7 days brings you back to the exact same day of the week."
                  },
                  {
                        "t": "Divide by 7 to find full weeks and remainder",
                        "d": "Divide 100 by 7:<br><b>100 ÷ 7 = 14 with a remainder of 2</b>.<br>This means 14 full weeks pass, plus <b>2 extra days</b>."
                  },
                  {
                        "t": "Count 2 days forward from Tuesday",
                        "d": "Starting from Tuesday:<br>1 day later is Wednesday;<br>2 days later is <b>Thursday</b>!"
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Multiples of 7",
                        "d": "98 is a multiple of 7 (14 × 7 = 98). In 98 days it is Tuesday again; 2 days later is Thursday."
                  }
            ],
            "follow": {
                  "q": "If today is Friday, what day of the week will it be 50 days from now?",
                  "hint": "50 ÷ 7 = 7 remainder 1. One day past Friday is Saturday.",
                  "a": "Saturday"
            }
      },
      "1b": {
            "title": "Postage Combination Without Duplication",
            "answerNote": "National Accuracy: 8% · Suggested Time: 5 min (Classic low-score trap problem)",
            "tip": "Combination counting: Calculate (a+1)(b+1)-1 first. Check whether the LCM (15¢) can be reached by either denomination to produce duplicates.",
            "steps": [
                  {
                        "t": "Theoretical combinations (multiplication principle)",
                        "d": "For 3¢ stamps: choose 0, 1, 2, 3, or 4 stamps (<b>5 choices</b>).<br>For 5¢ stamps: choose 0, 1, 2, or 3 stamps (<b>4 choices</b>).<br>Excluding 0 stamps (0¢), theoretical non-zero combinations = 5 × 4 − 1 = <b>19 combinations</b>."
                  },
                  {
                        "t": "Key check: Are there any duplicate amounts?",
                        "d": "To produce duplicate amounts, a multiple of 3 must equal a multiple of 5. The LCM is <b>15¢</b>.<br>15¢ requires <b>five 3¢ stamps</b>, but we only have 4 stamps! Therefore, no duplicate amounts can be formed with our available stamps."
                  },
                  {
                        "t": "Conclusion",
                        "d": "All 19 combinations yield distinct postage amounts! Thus, exactly <b>19 different amounts</b> can be made."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Systematic Table",
                        "d": "Group by number of 5¢ stamps: With 0 fives: 3,6,9,12 (4). With 1 five: 5,8,11,14,17 (5). With 2 fives: 10,13,16,19,22 (5). With 3 fives: 15,18,21,24,27 (5). Total: 4 + 5 + 5 + 5 = 19."
                  }
            ],
            "follow": {
                  "q": "With three 2¢ stamps and two 5¢ stamps, how many different amounts of postage can be made?",
                  "hint": "4 × 3 - 1 = 11. 10¢ requires five 2¢ stamps (we only have 3), so all 11 amounts are distinct.",
                  "a": "11"
            }
      },
      "1c": {
            "title": "Gauss Sum: Counting Numbers 1 to 25",
            "answerNote": "National Accuracy: 34% · Suggested Time: 5 min",
            "tip": "Mental math for × 25: Multiply by 100 and divide by 4. 13 × 25 = 1300 ÷ 4 = 325.",
            "steps": [
                  {
                        "t": "Pair first and last numbers",
                        "d": "Pair terms from outside in:<br>1 + 25 = <b>26</b><br>2 + 24 = <b>26</b><br>3 + 23 = <b>26</b> ... Each pair sums to 26."
                  },
                  {
                        "t": "Count pairs and middle term",
                        "d": "From 1 to 24 there are 12 pairs: 12 × 26 = 312.<br>The middle term is the 13th number (13):<br>312 + 13 = <b>325</b>."
                  },
                  {
                        "t": "Arithmetic progression formula",
                        "d": "Formula: Sum = (first + last) × n ÷ 2<br>S = (1 + 25) × 25 ÷ 2 = 26 × 25 ÷ 2 = 13 × 25 = <b>325</b>."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Average Value",
                        "d": "The average of the 25 numbers is 13. Total sum = average × count = 13 × 25 = 325."
                  }
            ],
            "follow": {
                  "q": "Find the sum 1 + 2 + 3 + ... + 30.",
                  "hint": "(1 + 30) × 30 ÷ 2 = 31 × 15 = 465.",
                  "a": "465"
            }
      },
      "1d": {
            "title": "Stationery Prices: Elimination by Sum and Difference",
            "answerNote": "National Accuracy: 16% · Suggested Time: 6 min",
            "tip": "Symmetric linear system trick: When coefficients are reversed (2,3 and 3,2), add both equations to find the combined unit price, and subtract to find the difference!",
            "steps": [
                  {
                        "t": "Add both purchases together",
                        "d": "(2 pencils + 3 pens) + (3 pencils + 2 pens) = 78¢ + 72¢ = <b>150¢</b>.<br>5 pencils + 5 pens = 150¢.<br>Divide by 5: <b>1 pencil + 1 pen = 30¢</b>."
                  },
                  {
                        "t": "Subtract to find price difference",
                        "d": "(2 pencils + 3 pens) − (3 pencils + 2 pens) = 78¢ − 72¢ = <b>6¢</b>.<br>This means: <b>1 pen costs 6¢ more than 1 pencil</b>!"
                  },
                  {
                        "t": "Solve for pencil price",
                        "d": "Pen + Pencil = 30¢, and Pen − Pencil = 6¢.<br>Pencil = (30 − 6) ÷ 2 = <b>12¢</b>.<br>(Pen = 12 + 6 = 18¢. Check: 2×12 + 3×18 = 24 + 54 = 78¢. Correct!)"
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Substitution",
                        "d": "Since 1 pencil + 1 pen = 30¢, 3 pencils + 3 pens = 90¢. Subtract 3 pencils + 2 pens = 72¢ to get 1 pen = 18¢, so 1 pencil = 12¢."
                  }
            ],
            "follow": {
                  "q": "If 4 apples and 3 pears cost $65, and 3 apples and 4 pears cost $61, how much does one apple cost?",
                  "hint": "Sum: 7 apples + 7 pears = 126 => 1 apple + 1 pear = 18. Diff: 1 apple - 1 pear = 4. Apple = (18+4)/2 = $11.",
                  "a": "11"
            }
      },
      "1e": {
            "title": "Work Crew & Person-Days",
            "answerNote": "National Accuracy: 10% · Suggested Time: 5 min",
            "tip": "Work-rate invariant: Total effort = Persons × Days. 4 people sharing 60 person-days: 60 ÷ 4 = 15 days.",
            "steps": [
                  {
                        "t": "Convert 3-person crew time to days",
                        "d": "Notice the note: <b>each week contains 6 work days</b>.<br>3 weeks and 2 days = 3 × 6 + 2 = <b>20 work days</b>."
                  },
                  {
                        "t": "Calculate total person-days required",
                        "d": "3 people working 20 days equals:<br>3 people × 20 days = <b>60 person-days</b>."
                  },
                  {
                        "t": "Calculate time for 4-person crew",
                        "d": "With 4 people working together:<br>Days required = 60 person-days ÷ 4 people = <b>15 days</b>."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Inverse Proportion",
                        "d": "Ratio of people is 4/3, so ratio of time required is 3/4. 20 days × 3/4 = 15 days."
                  }
            ],
            "follow": {
                  "q": "How many days would it take a crew of 5 people to finish the same job?",
                  "hint": "60 person-days ÷ 5 people = 12 days.",
                  "a": "12 days"
            }
      }
},
    "vol1-olympiad2": {
      "1a": {
            "title": "Double Transaction Profit",
            "answerNote": "National Accuracy: 36% · Suggested Time: 4 min (Famous brain-teaser trap)",
            "tip": "Profit golden rule: Profit = Total Revenue − Total Expenses. Track cash in and out cleanly!",
            "steps": [
                  {
                        "t": "Separate into two independent deals",
                        "d": "Deal 1: Bought for $10, sold for $15.<br>Profit on Deal 1 = 15 − 10 = <b>$5</b>."
                  },
                  {
                        "t": "Analyze second deal",
                        "d": "Deal 2: Bought for $20, sold for $25.<br>Profit on Deal 2 = 25 − 20 = <b>$5</b>."
                  },
                  {
                        "t": "Combine total profit",
                        "d": "Total profit = 5 + 5 = <b>made $10</b>.<br>Alternatively, Total spent = 10 + 20 = $30; Total received = 15 + 25 = $40. Net = 40 − 30 = <b>made $10</b>."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Bank Ledger",
                        "d": "Start with $20 in wallet. Buy dog (-$10) -> $10. Sell (+$15) -> $25. Buy (-$20) -> $5. Sell (+$25) -> $30. Net gain = $30 - $20 = $10."
                  }
            ],
            "follow": {
                  "q": "Bought for $50, sold for $60, bought back for $70, sold for $80. Made or lost how much?",
                  "hint": "(60-50) + (80-70) = 10 + 10 = made $20.",
                  "a": "made $20"
            }
      },
      "1b": {
            "title": "Supposition: Nickels and Quarters",
            "answerNote": "National Accuracy: 33% · Suggested Time: 5 min",
            "tip": "Supposition method: Deficit in cents ÷ value difference per coin = number of higher-value coins.",
            "steps": [
                  {
                        "t": "Assume all 30 coins are nickels",
                        "d": "Total amount = $4.10 = <b>410¢</b>. Coin count = 30.<br>If all 30 were 5¢ nickels: 30 × 5¢ = <b>150¢</b>."
                  },
                  {
                        "t": "Determine shortfall and single-coin delta",
                        "d": "Shortfall = 410¢ − 150¢ = <b>260¢</b>.<br>Replacing 1 nickel with 1 quarter gains 25¢ − 5¢ = <b>20¢</b>."
                  },
                  {
                        "t": "Find coin counts",
                        "d": "Quarters needed = 260¢ ÷ 20¢ = <b>13 quarters</b>.<br>Nickels = 30 − 13 = <b>17 nickels</b>.<br>(Check: 17×5 + 13×25 = 85 + 325 = 410¢. Correct!)"
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Assume all quarters",
                        "d": "30 × 25¢ = 750¢. Excess = 750 − 410 = 340¢. 340 ÷ 20 = 17 nickels."
                  }
            ],
            "follow": {
                  "q": "20 coins of dimes (10¢) and quarters (25¢) total $3.80. How many of each?",
                  "hint": "Assume all dimes: 200¢. Shortfall 180¢. 180 ÷ 15 = 12 quarters, 8 dimes.",
                  "a": "8 dimes, 12 quarters"
            }
      },
      "1c": {
            "title": "Grid Card Tiling and Unit Conversion",
            "answerNote": "National Accuracy: 9% · Suggested Time: 5 min",
            "tip": "Geometric cutting check: Area ratio only gives an upper bound. You must verify if length and width divide evenly without waste.",
            "steps": [
                  {
                        "t": "Convert feet to inches",
                        "d": "<b>1 foot = 12 inches</b>.<br>Large sheet dimensions:<br>Length: 3 feet = 3 × 12 = <b>36 inches</b>;<br>Width: 2 feet = 2 × 12 = <b>24 inches</b>."
                  },
                  {
                        "t": "Check perfect grid division",
                        "d": "Along 36 in side: 36 ÷ 3 in = <b>12 columns</b> (exact, no waste).<br>Along 24 in side: 24 ÷ 2 in = <b>12 rows</b> (exact, no waste)."
                  },
                  {
                        "t": "Multiply to find total cards",
                        "d": "Total cards = 12 × 12 = <b>144 cards</b>.<br>Area check: (36 × 24) ÷ (2 × 3) = 864 ÷ 6 = 144."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Square foot scaling",
                        "d": "1 sq ft = 144 sq in. Sheet is 6 sq ft = 6 × 144 sq in. Card is 6 sq in. (6 × 144) ÷ 6 = 144."
                  }
            ],
            "follow": {
                  "q": "How many 3 in by 4 in cards can be cut from a 1 ft by 1 ft sheet?",
                  "hint": "12 in by 12 in. 12 ÷ 3 = 4, 12 ÷ 4 = 3. 4 × 3 = 12 cards.",
                  "a": "12"
            }
      },
      "1d": {
            "title": "Target Average Baseline",
            "answerNote": "National Accuracy: 34% · Suggested Time: 5 min",
            "tip": "Deviation from average shortcut: 139 is -6, 143 is -2, 144 is -1. Total deficit = -9. Fourth game must be 145 + 9 = 154!",
            "steps": [
                  {
                        "t": "Calculate required 4-game total",
                        "d": "To average 145 across 4 games, total score must be:<br>4 × 145 = <b>580 points</b>."
                  },
                  {
                        "t": "Sum first three games",
                        "d": "First 3 games total = 139 + 143 + 144 = <b>426 points</b>."
                  },
                  {
                        "t": "Find required 4th game score",
                        "d": "Game 4 needed = 580 − 426 = <b>154 points</b>."
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Baseline Deviations",
                        "d": "Deficits from 145: (145-139) + (145-143) + (145-144) = 6 + 2 + 1 = 9. Needed = 145 + 9 = 154."
                  }
            ],
            "follow": {
                  "q": "Three test scores are 88, 92, and 94. What must the 4th score be to average 93?",
                  "hint": "Baseline 93: -5, -1, +1. Deficit is 5. 93 + 5 = 98.",
                  "a": "98"
            }
      },
      "1e": {
            "title": "Frequency of Digit 1 in 500 Pages",
            "answerNote": "National Accuracy: 8% · Suggested Time: 6 min (Classic Olympiad counting)",
            "tip": "Digit counting rule: Separate by place values (units, tens, hundreds). In 100 consecutive numbers, each digit appears 10 times in units and 10 times in tens.",
            "steps": [
                  {
                        "t": "Classify by place values",
                        "d": "Count the appearances of digit 1 separately in the <b>units digit</b>, <b>tens digit</b>, and <b>hundreds digit</b>."
                  },
                  {
                        "t": "Count units and tens digits",
                        "d": "• <b>Units digit 1</b>: Occurs once every 10 numbers (1, 11, 21 ... 491): 500 ÷ 10 = <b>50 times</b>.<br>• <b>Tens digit 1</b>: Occurs 10 times per century (10–19, 110–119, ...): 5 centuries × 10 = <b>50 times</b>."
                  },
                  {
                        "t": "Count hundreds digit and sum",
                        "d": "• <b>Hundreds digit 1</b>: Appears from page 100 to 199: exactly <b>100 times</b>.<br>• Total = 50 + 50 + 100 = <b>200 times</b>!"
                  }
            ],
            "methods": [
                  {
                        "title": "Method 2 · Symmetric Counting",
                        "d": "In numbers 000–499 (500 numbers): Hundreds place has 1 in 1/5 of numbers (100). Tens has 1 in 1/10 (50). Units has 1 in 1/10 (50). Total = 200."
                  }
            ],
            "follow": {
                  "q": "How many times does digit 1 appear in a 300-page book?",
                  "hint": "Units: 30. Tens: 30. Hundreds (100–199): 100. Total = 160.",
                  "a": "160"
            }
      }
},
    "classic-vol1": {
      "1a": {
        "title": "Gauss Pairing Sum 1 to 50",
        "answerNote": "50 × 51 ÷ 2 = 1,275",
        "answer": "1,275",
        "steps": [
          {
            "t": "Gauss Pairing",
            "d": "Pairs of 51: (1+50), (2+49)... 25 pairs. 25 × 51 = <b>1,275</b>."
          }
        ],
        "tip": "n(n+1)/2",
        "methods": [],
        "follow": {
          "q": "1 to 100?",
          "hint": "5050",
          "a": "5,050"
        }
      },
      "1b": {
        "title": "Snail in a 20-Foot Well",
        "answerNote": "Reaches top on Day 6 without sliding back down",
        "answer": "6",
        "steps": [
          {
            "t": "Day 6 Breakthrough",
            "d": "Day 5 ends at 15 ft. Day 6 climbs 5 ft to reach 20 ft: <b>Day 6</b>."
          }
        ],
        "tip": "Subtract final climb first.",
        "methods": [],
        "follow": {
          "q": "30 ft well (up 4, down 1)?",
          "hint": "10 days",
          "a": "10"
        }
      },
      "1c": {
        "title": "Digits in Pages 1 to 120",
        "answerNote": "9 + 180 + 63 = 252 digits",
        "answer": "252",
        "steps": [
          {
            "t": "By digits count",
            "d": "1–9: 9; 10–99: 180; 100–120: 21×3=63. Total = <b>252</b>."
          }
        ],
        "tip": "Count by digits range.",
        "methods": [],
        "follow": {
          "q": "Pages 1 to 100?",
          "hint": "192",
          "a": "192"
        }
      },
      "1d": {
        "title": "Clock Hands Angle at 3:30",
        "answerNote": "Minute at 6, hour at 3.5: 2.5 × 30° = 75°",
        "answer": "75",
        "steps": [
          {
            "t": "Hour hand moves",
            "d": "At 3:30 hour hand is at 3.5. Separation = 2.5 ticks = <b>75°</b>."
          }
        ],
        "tip": "Each hour tick is 30°.",
        "methods": [],
        "follow": {
          "q": "Angle at 4:00?",
          "hint": "4 × 30° = 120°",
          "a": "120°"
        }
      },
      "1e": {
        "title": "Sawing Wood Fencepost",
        "answerNote": "8 pieces requires 7 cuts: 7 × 3 = 21 minutes",
        "answer": "21",
        "steps": [
          {
            "t": "Cuts = Pieces − 1",
            "d": "8 pieces need 7 cuts. 7 × 3 = <b>21 minutes</b>."
          }
        ],
        "tip": "Cuts is one less than pieces.",
        "methods": [],
        "follow": {
          "q": "5 pieces in 12 min, 10 pieces?",
          "hint": "9 cuts × 3 = 27",
          "a": "27 min"
        }
      }
    },
    "classic-vol2": {
      "1a": {
        "title": "Difference of Squares 51² − 49²",
        "answerNote": "(51 − 49)(51 + 49) = 2 × 100 = 200",
        "answer": "200",
        "steps": [
          {
            "t": "a² − b²",
            "d": "(51−49)(51+49) = 2 × 100 = <b>200</b>."
          }
        ],
        "tip": "a² − b² = (a−b)(a+b)",
        "methods": [],
        "follow": {
          "q": "65² − 35²?",
          "hint": "30 × 100 = 3000",
          "a": "3,000"
        }
      },
      "1b": {
        "title": "Painted 3x3x3 Cube (2 Faces Painted)",
        "answerNote": "Middle of 12 edges: 12 × 1 = 12 cubes",
        "answer": "12",
        "steps": [
          {
            "t": "Edge pieces",
            "d": "2-face painted cubes sit on the 12 edges: 12 × 1 = <b>12</b>."
          }
        ],
        "tip": "Edges have 2 faces painted.",
        "methods": [],
        "follow": {
          "q": "1 face painted?",
          "hint": "6 centers",
          "a": "6"
        }
      },
      "1c": {
        "title": "Two Drivers Meeting Time",
        "answerNote": "90 miles ÷ (40 + 50) mph = 1 hour",
        "answer": "1",
        "steps": [
          {
            "t": "Speed sum",
            "d": "Combined speed = 90 mph. Time = 90 ÷ 90 = <b>1 hour</b>."
          }
        ],
        "tip": "Meeting time = distance ÷ speed sum.",
        "methods": [],
        "follow": {
          "q": "270 miles apart?",
          "hint": "3 hours",
          "a": "3 hours"
        }
      },
      "1d": {
        "title": "3x3 Magic Square Sum",
        "answerNote": "Sum = 9 × center = 9 × 5 = 45",
        "answer": "45",
        "steps": [
          {
            "t": "Center theorem",
            "d": "Magic sum = 3×5=15. Total = 3×15 = <b>45</b>."
          }
        ],
        "tip": "Total = 9 × center number.",
        "methods": [],
        "follow": {
          "q": "Center is 8?",
          "hint": "9 × 8 = 72",
          "a": "72"
        }
      },
      "1e": {
        "title": "Handshake Tournament 8 Players",
        "answerNote": "8 × 7 ÷ 2 = 28 games",
        "answer": "28",
        "steps": [
          {
            "t": "Combinations",
            "d": "8 × 7 ÷ 2 = <b>28 games</b>."
          }
        ],
        "tip": "n(n−1)/2",
        "methods": [],
        "follow": {
          "q": "Gift exchange (10 people)?",
          "hint": "10 × 9 = 90",
          "a": "90"
        }
      }
    },
    "classic-vol3": {
      "1a": {
        "title": "Pigeonhole Socks in the Dark",
        "answerNote": "2 colors + 1 = 3 socks guaranteed",
        "answer": "3",
        "steps": [
          {
            "t": "Worst case",
            "d": "First 2 socks different. 3rd sock must match: <b>3 socks</b>."
          }
        ],
        "tip": "Guarantee = categories + 1.",
        "methods": [],
        "follow": {
          "q": "3 colors?",
          "hint": "3 + 1 = 4",
          "a": "4"
        }
      },
      "1b": {
        "title": "Venn Diagram Overlap",
        "answerNote": "18 + 15 − 25 = 8 students play both",
        "answer": "8",
        "steps": [
          {
            "t": "Inclusion-Exclusion",
            "d": "30 − 5 = 25 sports players. 18 + 15 − 25 = <b>8</b>."
          }
        ],
        "tip": "A ∪ B = A + B − A ∩ B.",
        "methods": [],
        "follow": {
          "q": "28 students, 16 tea, 14 coffee, 3 neither?",
          "hint": "5",
          "a": "5"
        }
      },
      "1c": {
        "title": "Reversed Digits Sum AB + BA = 154",
        "answerNote": "11(A + B) = 154 → A + B = 14",
        "answer": "14",
        "steps": [
          {
            "t": "11 Multiplier",
            "d": "10A+B + 10B+A = 11(A+B) = 154 → A+B = <b>14</b>."
          }
        ],
        "tip": "AB + BA is always divisible by 11.",
        "methods": [],
        "follow": {
          "q": "AB + BA = 132?",
          "hint": "12",
          "a": "12"
        }
      },
      "1d": {
        "title": "Trapezoid Butterfly Wings Equal Area",
        "answerNote": "Left and right wings are equal: 12 cm²",
        "answer": "12",
        "steps": [
          {
            "t": "Same base & height",
            "d": "S(ACD) = S(BCD). Subtract COD from both → S(AOD) = S(BOC) = <b>12</b>."
          }
        ],
        "tip": "Butterfly wings in a trapezoid have equal areas.",
        "methods": [],
        "follow": {
          "q": "Wing 25 cm²?",
          "hint": "25 cm²",
          "a": "25 cm²"
        }
      },
      "1e": {
        "title": "Units Digit of 2²⁰²⁶",
        "answerNote": "Cycle [2, 4, 8, 6]; 2026 ÷ 4 remainder 2 → 4",
        "answer": "4",
        "steps": [
          {
            "t": "Cycle of 4",
            "d": "Units digits: 2, 4, 8, 6. 2026 ÷ 4 leaves remainder 2 → <b>4</b>."
          }
        ],
        "tip": "Divide exponent by cycle length.",
        "methods": [],
        "follow": {
          "q": "Units digit of 3²⁰²⁵?",
          "hint": "3",
          "a": "3"
        }
      }
    }
  }
};
