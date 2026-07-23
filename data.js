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
    generated: "2026-07-23",
    sessionsTarget: 20,
    floorPerWeek: 5
  },

  creed: "Locked for four weeks. Miss a day, run the next one as written. After the kill set, go home.",

  builtFrom: [
    { k: "A / B weeks", v: "No two weeks feel the same. Anchors repeat, menus alternate." },
    { k: "Chase the number", v: "Every session opens with one number to beat from last time." },
    { k: "Empty the tank", v: "One kill set per session: failure, then drops or lengthened partials." }
  ],

  /* Weekly schedule. app.js picks today's card and the A/B menu by week.
     Weeks (Day 1 = Mon Jul 20): Jul 20-26 = A, Jul 27-Aug 2 = B, Aug 3-9 = A, Aug 10-16 = B. */
  days: [
    {
      dow: [1], id: "mon", title: "Push · Boss Fight", time: "~50 min", kind: "iron",
      anchors: [
        { name: "Bench Press (Barbell)", rule: "Top set of 5. +2.5 every week the 5 land. Current target lives in the Hevy routine." },
        { name: "Incline Smith", rule: "Rep chase. Beat the number in the routine note. At 15, the bar moves up automatically." }
      ],
      menuA: [
        "Seated Shoulder Press (Smith) 2 x 8-12",
        "Lateral Raise (DB) 2 x 12-15"
      ],
      menuB: [
        "Shoulder Press (DB) 2 x 8-12 · PR is 27.5 x 8",
        "Lateral Raise (Cable) 2 x 12-15"
      ],
      killA: "Chest Press machine: one set to failure, double drop.",
      killB: "Cable Fly Crossovers: failure, then lengthened partials."
    },
    {
      dow: [2], id: "tue", title: "Strength + Engine", time: "~60 min", kind: "iron",
      anchors: [
        { name: "Deadlift (Barbell)", rule: "Top set of 5. +5 every week it lands clean. Ramp in the routine." },
        { name: "Stair Scoreboard", rule: "15 minutes. Count floors. Beat last week." }
      ],
      menuA: [
        "Leg Press 3 x 12 · knee insurance",
        "Dead Hang 2 x max"
      ],
      menuB: [
        "Leg Press 3 x 12 · knee insurance",
        "Dead Hang 2 x max"
      ],
      killA: "The stair 15 is the kill. All of it.",
      killB: "The stair 15 is the kill. All of it."
    },
    {
      dow: [3], id: "wed", title: "Pull", time: "~45-50 min", kind: "iron",
      anchors: [
        { name: "A weeks: Pull-Up total", rule: "4 sets bodyweight. Sum the reps. Beat the total in the routine note." },
        { name: "B weeks: Reverse-Grip Pulldown", rule: "Top set. Beat the number in the routine note." }
      ],
      menuA: [
        "Seated Row (Machine) 3 x 8-12 · you did 70 x 16, go heavier",
        "Straight-Arm Pulldown 2 x 12-15",
        "Preacher Curl (Barbell) 2 x 8-12"
      ],
      menuB: [
        "Bent Over Row (Barbell) 3 x 6-10 · start 45-50",
        "Reverse Fly Single Arm (Cable) 2 x 12-15",
        "Seated Incline Curl (DB) 2 x 8-12"
      ],
      killA: "Band-Assisted Pull-Up: failure, then lengthened partials.",
      killB: "Band-Assisted Pull-Up: failure, then lengthened partials."
    },
    {
      dow: [4], id: "thu", title: "Delts + Upper Chest", time: "~45 min", kind: "iron",
      anchors: [
        { name: "Incline DB Press", rule: "Rep chase. At 12 reps the dumbbells move up automatically. The wall: 35 x 6." }
      ],
      menuA: [
        "Chest Fly (Machine) 2 x 10-15",
        "Lateral Raise (Cable) 3 x 12-20 · side delts, lever #1",
        "Triceps Pushdown 2 x 10-15"
      ],
      menuB: [
        "Single-Arm Cable Crossover 2 x 12-15",
        "Lateral Raise (DB) 3 x 12-20 · side delts, lever #1",
        "Single-Arm Pushdown 2 x 10-15"
      ],
      killA: "Lateral-raise mechanical drop: cable, lighter, partials.",
      killB: "Chest Fly: failure, then lengthened partials."
    },
    {
      dow: [5], id: "fri", title: "Arms + Engine", time: "~45 min", kind: "iron",
      anchors: [],
      menuA: [
        "Hammer Curl + Pushdown superset, 3 rounds",
        "Preacher Curl (Barbell) 2 x 8-12",
        "Finisher: 20 min easy Z2 stairs"
      ],
      menuB: [
        "Preacher Curl + Single-Arm Pushdown superset, 3 rounds",
        "Seated Incline Curl (DB) 2 x 8-12",
        "Finisher: 20 min easy Z2 stairs"
      ],
      killA: "Single-arm pushdown: failure, then drop and burn it out.",
      killB: "Triceps pushdown: failure, then drop and burn it out.",
      note: "If bench AND deadlift top sets fall two weeks straight, this day becomes easy Z2 until they climb. The log decides."
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
    { name: "Bench e1RM", start: 67, current: 70, goal: 76, unit: "kg", source: "hevy",
      note: "Monday top set of 5, starts 57.5, +2.5 every clean week. Block target 65 x 5. The 100 lives on the far side of this block." },
    { name: "Deadlift e1RM", start: 143, current: 143, goal: 175, unit: "kg", source: "hevy",
      note: "Saturday top set of 5, starts 135, +5 every clean week. Block target 150 x 5. All-time best is 150 x 2." },
    { name: "Incline Smith reps @ 50", start: 13, current: 15, goal: 15, unit: "reps", source: "hevy",
      note: "Your 77-session favorite. Beat 13. At 15 the bar gets heavier." },
    { name: "Incline DB e1RM", start: 39, current: 39, goal: 44, unit: "kg", source: "hevy",
      note: "Friday anchor. Rep chase at 30, then 32.5. The wall is 35 x 6." },
    { name: "Pull-up day total", start: 8, current: 17, goal: 16, unit: "reps", source: "hevy",
      note: "A-week anchor. Four sets, sum the reps, beat the total." },
    { name: "Stair 15:00 floors", start: 0, current: 0, goal: 0, unit: "floors", source: "manual",
      note: "Week 1 sets the baseline. Then beat it weekly. Test day target: baseline plus 20 percent." },
    { name: "Sessions logged", start: 0, current: 2, goal: 20, unit: "sessions", source: "hevy",
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
