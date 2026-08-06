/* FORGE data — PROVING GROUND block. Rebuilt 2026-07-17 on Michael's order:
   complete redesign, GROUNDWORK scratched. Content from the coach-interview
   (2026-07-17): A/B alternating weeks, weekly number-chasing anchors, one kill
   set per session, bench as the single weekly barbell boss fight (option C).
   update_forge.py rewrites `current:` values between the GOALS markers on every
   hevy-sync. Full cited protocol: Jarvis/context/training-protocol.md */

window.DATA = {

  meta: {
    codename: "PROVING GROUND",
    tagline: "Four locked weeks. Five iron days. No rewrites.",
    sub: "Built from 445 logged workouts and three interview answers: alternating weeks, a number to chase every session, and permission to empty the tank once per day.",
    start: "2026-07-20",
    end: "2026-08-16",
    testDay: "2026-08-15",
    vacation: "2026-08-20",
    generated: "2026-08-06",
    sessionsTarget: 20,
    floorPerWeek: 5
  },

  creed: "Locked for four weeks. Miss a day, run the next one as written. After the kill set, go home.",

  builtFrom: [
    { k: "A / B weeks", v: "A = HEAVY week (6-10 reps, top sets). B = PUMP week: 40-60% weights, 15-25 reps, 60s rests. Only the bench + deadlift top sets stay heavy." },
    { k: "Chase the number", v: "Every session opens with one number to beat from last time." },
    { k: "Empty the tank", v: "One kill set per session: failure, then drops or lengthened partials." }
  ],

  /* Weekly schedule. app.js picks today's card and the A/B menu by week.
     Weeks (Day 1 = Mon Jul 20): Jul 20-26 = A, Jul 27-Aug 2 = B, Aug 3-9 = A, Aug 10-16 = B. */
  days: [
    {
      dow: [1], id: "mon", title: "Push · Boss Fight", time: "~50 min", kind: "iron",
      anchors: [
        { name: "Bench Press (Barbell)", rule: "Top set of 5, heavy in BOTH weeks. +2.5 every week the 5 land. Target lives in the Hevy routine." },
        { name: "Incline Smith", rule: "A week: rep-chase anchor. B week: 3 x 12 volume. At 15 the bar moves up automatically." }
      ],
      menuA: [
        "OPENER: 10:00 stairs, ~40 floors easy",
        "Heavy backoffs 2 x 6",
        "Seated Shoulder Press (Smith) 2 x 8-10",
        "Single-Arm Cable Lateral 2 x 12",
        "ABS to close: rope crunch 2 x 15 + knee raises 2 x 12"
      ],
      menuB: [
        "OPENER: 10:00 stairs, ~40 floors easy, then the iron",
        "PUMP backoffs 40 x 15, 40 x 12",
        "Incline Smith 30 x 15, then beat 18 at 35 · Military Press 2 x 10",
        "Lateral (DB) 10 x 12, 7.5 x 15",
        "ABS to close: rope crunch 2 x 15 + knee raises 2 x 12"
      ],
      killA: "Chest Press machine: failure, then double drop.",
      killB: "Chest Fly last set @ 15: failure, then lengthened partials."
    },
    {
      dow: [2], id: "tue", title: "Strength + Engine", time: "~60 min", kind: "iron",
      anchors: [
        { name: "STAIR 15:00 MAX FLOORS — OPENS THE DAY", rule: "Fixed clock, floors are the score. Opening target 75; your first run resets it." },
        { name: "Deadlift (Barbell)", rule: "3 full minutes rest after the stairs, then ramp and pull. Top set of 5, +5 every clean week." }
      ],
      menuA: [
        "Leg Press 3 x 12 heavy · knee insurance",
        "Dead Hang 2 x max"
      ],
      menuB: [
        "Bent Over Row 3 x 15 @ 35 · same bar as the pull",
        "Close-Grip Pulldown 2 x 15 @ 50",
        "Hammer Curl 2 x 15 · the little bit of biceps",
        "Dead Hang 2 x max to close"
      ],
      killA: "The stair 15 opens the day. Floors are the score.",
      killB: "The stair 15 opens the day. Floors are the score."
    },
    {
      dow: [3], id: "wed", title: "Pull · Back Day 1", time: "~50 min", kind: "iron",
      anchors: [
        { name: "A weeks: Pull-Up total", rule: "4 working sets, sum the reps, beat the total in the routine note." },
        { name: "B weeks: Reverse-Grip Pulldown", rule: "Top set stays heavy. Beat the number in the routine note." }
      ],
      menuA: [
        "OPENER: 10:00 stairs, ~40 floors easy",
        "Seated Row (Machine) 85/80/80 x 10 · beat 85 x 10",
        "Close-Grip Pulldown 2 x 8 @ 60",
        "Straight-Arm Pulldown 2 x 13-15 · Preacher Curl (Machine) 2 x 8"
      ],
      menuB: [
        "OPENER: 10-12 min easy stairs, then the iron",
        "V-Grip Cable Row 3 x 18-20 @ 45 · your 58-session favorite",
        "Lat Pulldown 2 x 18-20 @ 40",
        "Reverse Fly 2 x 20 · Reverse Single-Arm Curl 2 x 18"
      ],
      killA: "Assisted Pull-Up @ 35: failure, then lengthened partials.",
      killB: "Band-Assisted Pull-Up: failure, then lengthened partials."
    },
    {
      dow: [4], id: "thu", title: "Delts + Chest", time: "~45-50 min", kind: "iron",
      anchors: [
        { name: "Incline DB Press", rule: "Ramped opener, heavy in BOTH weeks. At 12 reps the dumbbells move up automatically. The wall: 35 x 6." }
      ],
      menuA: [
        "OPENER: 10:00 stairs, ~40 floors easy",
        "Chest Press (Machine) 2 x 10 heavy",
        "Single-Arm Cable Lateral 3 x 12 + kill drop · lever #1",
        "Rear Delt Fly 2 x 15 · Chest Fly 2 x 12",
        "ABS to close: rope crunch 2 x 15 + knee raises 2 x 12"
      ],
      menuB: [
        "OPENER: 10-12 min easy stairs, then the iron",
        "Single-Arm Crossover 2 x 20 · Laterals (DB) 3 x 20",
        "Rear Delt Fly 2 x 20 · your addition, permanent",
        "Seated Shoulder Press (Smith) 2 x 18-20 @ 20",
        "ABS to close: rope crunch 2 x 15 + knee raises 2 x 12"
      ],
      killA: "Lateral-raise mechanical drop: lighter, partials.",
      killB: "Chest Fly: failure, then lengthened partials."
    },
    {
      dow: [5], id: "fri", title: "Back + Arms · Back Day 2", time: "~50 min", kind: "iron",
      anchors: [],
      menuA: [
        "OPENER: 10:00 stairs, ~40 floors easy",
        "Lat Pulldown heavy 3 x 8-10 · 67 lifetime sessions",
        "Inverted Row 3 x 8 · 49 lifetime sessions",
        "BICEPS block (kill on last curl set), THEN triceps block"
      ],
      menuB: [
        "OPENER: 10-12 min easy stairs, then the iron",
        "Straight-Arm Pulldown 3 x 18-20 @ 20 · your #1, 93 sessions",
        "Reverse-Grip Pulldown 3 x 15-18 @ 45",
        "BICEPS block 15-20s, THEN triceps block 20-25s",
        "Kill set at 25+ reps. Burn it all down."
      ],
      killA: "Cable bicep curl: failure, then drop and burn it out.",
      killB: "Triceps pushdown: failure, then drop and burn it out.",
      note: "Recovery valve: bench AND deadlift top sets falling two straight weeks turns this day into easy Z2. The log decides."
    },
    {
      dow: [6], id: "sat", title: "Optional 6th · Long Engine", time: "45-60 min", kind: "bonus",
      anchors: [],
      menuA: ["Long easy Z2 climb, talk-test pace, podcast on", "Dead Hang 2 x easy", "Or full rest. Both count."],
      menuB: ["Long easy Z2 climb, talk-test pace, podcast on", "Dead Hang 2 x easy", "Or full rest. Both count."],
      killA: "", killB: "",
      note: "Never required. Test day Aug 15 takes this slot in week 4."
    },
    {
      dow: [0], id: "sun", title: "Rest", time: "", kind: "rest",
      anchors: [],
      menuA: ["Sleep before 1 AM", "8-10k steps", "Three real meals"],
      menuB: ["Sleep before 1 AM", "8-10k steps", "Three real meals"],
      killA: "", killB: "",
      note: "The one true off day. The forge cools so Monday can burn. Non-negotiable."
    }
  ],

  /*GOALS_START*/
  goals: [
    { name: "Bench e1RM", start: 67, current: 75, goal: 76, unit: "kg", source: "hevy",
      note: "Monday top set of 5, starts 57.5, +2.5 every clean week. Block target 65 x 5. The 100 lives on the far side of this block." },
    { name: "Deadlift e1RM", start: 143, current: 158, goal: 175, unit: "kg", source: "hevy",
      note: "Saturday top set of 5, starts 135, +5 every clean week. Block target 150 x 5. All-time best is 150 x 2." },
    { name: "Incline Smith reps @ 50", start: 13, current: 15, goal: 15, unit: "reps", source: "hevy",
      note: "Your 77-session favorite. Beat 13. At 15 the bar gets heavier." },
    { name: "Incline DB e1RM", start: 39, current: 39, goal: 44, unit: "kg", source: "hevy",
      note: "Friday anchor. Rep chase at 30, then 32.5. The wall is 35 x 6." },
    { name: "Pull-up day total", start: 8, current: 20, goal: 16, unit: "reps", source: "hevy",
      note: "A-week anchor. Four sets, sum the reps, beat the total." },
    { name: "Stair 15:00 floors", start: 0, current: 0, goal: 0, unit: "floors", source: "manual",
      note: "Week 1 sets the baseline. Then beat it weekly. Test day target: baseline plus 20 percent." },
    { name: "Sessions logged", start: 0, current: 10, goal: 20, unit: "sessions", source: "hevy",
      note: "The adherence score. Five a week, Mon to Fri. 18 of 20 is a pass. This is the real test." },
    { name: "Bodyweight", start: 96, current: 96, goal: 91, unit: "kg", source: "manual",
      note: "Byproduct, not target. 2400 eaten, cut capped at 0.6 per week. Vacation marker: 90-91." }
  ],
  /*GOALS_END*/

  deal: [
    "Locked four weeks, Mon Jul 20 to Sun Aug 16. No rewrites, no plan-hopping. A missed day means the next scheduled day runs as written. Never doubled.",
    "Five iron days a week, Mon to Fri. Saturday is the optional 6th. Sunday is rest, full stop.",
    "One kill set per session. Everything after it is ego, not progress. Go home.",
    "Sleep before 1 AM. The diet's fat-vs-muscle split is decided in bed.",
    "Weekly audit from Hevy. Beaten numbers get celebrated. Dodged anchors get named."
  ],

  nutrition: {
    line: "2400 kcal · 180 g protein · three real meals · creatine 3-5 g daily",
    sub: "21 percent deficit off a ~3030 TDEE. Hard floor 2200. Faster than 0.6 kg a week means muscle is leaving: add food."
  },

  testday: {
    date: "Sat Aug 15",
    items: [
      "Deadlift: heavy single or triple. All-time is 150 x 2. Anything above is a PR.",
      "Bench: single ladder to a heavy single. The window: 75-85.",
      "Incline Smith @ 50: rep max. Beat 13.",
      "Pull-Up: one max set. Beat 8.",
      "Stair 15:00: beat week 1 by 20 percent.",
      "Next morning: photos, waist, weight. Against Day 0."
    ]
  },

  baseline: "Day 0, before the first session: photos front and side, waist at navel, morning weight. The mirror goal needs a starting mirror."
};
