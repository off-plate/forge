/* FORGE data — GROUNDWORK block. Built 2026-07-09 from 437 logged Hevy workouts
   + three independent research briefs (strength / engine / body comp).
   Every weight anchored to the log. Every claim cited. update_forge.py rewrites
   the goals between the GOALS markers on each hevy-sync. */

window.DATA = {

  meta: {
    codename: "GROUNDWORK",
    oneLiner: "4 lifts + 3 climbs a week. Bench 100, deadlift 200, a 180-minute engine, abs via the kitchen.",
    approvedBy: "Built from 437 logged workouts + 3 research briefs",
    creed: "Easy days easy. Heavy days heavy. Meals eaten. Every day logged.",
    block: "1 · Jul 13 to Aug 11",
    generated: "2026-07-09",
    start: "2026-07-13",
    floor: 20
  },

  dayTypes: {
    pushA: { label: "Bench Heavy",  kind: "excite" },
    eng:   { label: "Engine + Core", kind: "grind" },
    pull:  { label: "Pull Volume",  kind: "excite" },
    pushB: { label: "Bench Volume", kind: "excite" },
    rest:  { label: "Rest",         kind: "rest" },
    dl:    { label: "Deadlift Day", kind: "excite" },
    long:  { label: "Long Climb",   kind: "grind" }
  },
  weekPattern: ["pushA", "eng", "pull", "pushB", "rest", "dl", "long"],

  weeks: {
    A: {
      name: "The Week",
      tag: "one template, rising numbers",
      blurb: "One repeating week. Progression is built into the rules: +2.5 kg bench and +5 kg deadlift when top sets land clean, +10-15% on the long climb. Week 4 of every month polarizes: maintenance calories, first Norwegian 4x4, shorter long climb. Nothing to decide on the day, just execute.",
      days: [
        {
          title: "Monday · Bench Heavy",
          tag: "IRON", kind: "excite",
          why: "Bench twice a week is the fastest evidence-backed route back to 78 and on toward 100 (pressing rewards frequency most, Grgic 2018). Heavy day comes first in the week, freshest.",
          warmup: "Full ramp on bench only: bar x10, 40 x5, 50 x3, 55 x1 primer, then the top set. Everything after bench: one lighter feeder set, no full ramps.",
          exercises: [
            { name: "Bench Press (Barbell)", sub: "top set, then backoffs. +2.5 kg when 5 land clean at RIR 2", prescr: "60 x5 @RIR2 + 3x6 @50" },
            { name: "Incline Bench Press (Smith)", sub: "your 74-session favorite, e1RM already 80", prescr: "3 x6-8 @60" },
            { name: "Chest Press (Machine)", sub: "hypertrophy feeder", prescr: "2 x12 @50" },
            { name: "Triceps Pushdown", sub: "lockout is triceps-limited", prescr: "3 x10-12 @27.5" },
            { name: "Lateral Raise (cable or DB)", sub: "side delts, visual lever #1", prescr: "3 x12-15 @7.5-10" },
            { name: "StairMaster Z2 (optional)", sub: "easy only, talk-test pace", prescr: "20-25 min", tag: "engine" }
          ]
        },
        {
          title: "Tuesday · Engine + Core",
          tag: "ENGINE", kind: "grind",
          why: "Zone 2 base: RPE 3-4, 115-135 bpm, full sentences possible. If it feels too easy, it is right (Seiler 80/20). From Week 4 this slot becomes the Norwegian 4x4 interval day. Core here is isometric only, zero spinal flexion: it protects the hip and braces the bar, it does not reveal abs.",
          warmup: "None needed. Start the climb slow, settle into the zone over 5 minutes.",
          exercises: [
            { name: "StairMaster Zone 2", sub: "wk1 30 / wk2 40 / wk3 45 min. Week 4: Norwegian 4x4 instead", prescr: "30-45 min @RPE 3-4", tag: "engine" },
            { name: "Norwegian 4x4 (from Week 4)", sub: "10 min easy, then 4 min hard (RPE 8-9) + 3 min easy, four rounds, 5 min down", prescr: "wk4+: 4x(4+3) min", tag: "wk4" },
            { name: "Side Plank", sub: "obliques + QL, waist stays braced not built", prescr: "3 x30-45s / side" },
            { name: "Dead Bug", sub: "anti-extension, low back pinned flat", prescr: "3 x10 / side" },
            { name: "Pallof Press", sub: "anti-rotation", prescr: "3 x12 / side" }
          ]
        },
        {
          title: "Wednesday · Pull Volume",
          tag: "IRON", kind: "excite",
          why: "Back is your strongest, best-recovering region and the visual taper (lats are lever #2). RDL opens fresh for hip safety and builds the posterior chain your 14-session deadlift history never did. Light hinge today, heavy pull Saturday: 1.5x pulling, exactly what recovery affords in a deficit.",
          warmup: "RDL: one ramp set, 60 x8, then work. Pull-ups: one easy band set. Nothing after that.",
          exercises: [
            { name: "Romanian Deadlift (Barbell)", sub: "neutral spine, technique first. +2.5-5 kg at top of range", prescr: "3 x8-10 @90 @RIR3" },
            { name: "Pull Up + Band Assisted", sub: "open fresh, full range", prescr: "4 sets @RIR1" },
            { name: "Seated Row (Machine)", sub: "you just PRd this, ride it", prescr: "3 x8-10 @70" },
            { name: "Straight Arm Lat Pulldown", sub: "your #1 exercise, 90 sessions. Lats keep the deadlift bar close", prescr: "3 x12-15 @25" },
            { name: "Reverse Fly (single arm cable)", sub: "rear delts", prescr: "2 x15 @7.5" },
            { name: "Hammer Curl (Cable)", sub: "biceps hit 1 of 2", prescr: "3 x10-12 @17.5" }
          ]
        },
        {
          title: "Thursday · Bench Volume + Delts",
          tag: "IRON", kind: "excite",
          why: "Second chest and delt hit inside the 48h growth window. Volume day: RIR 2-3, controlled reps, leave the grinding for Monday. Side delts and upper chest are the top visual levers at your frame: grow the top, the deficit cuts the waist, the ratio does the rest.",
          warmup: "Bench: bar x10, 40 x5, then straight into work sets. One feeder on the incline, nothing after.",
          exercises: [
            { name: "Bench Press (Barbell)", sub: "volume groove. +2.5 kg when all four sets hit 8", prescr: "4 x8 @50 @RIR2-3" },
            { name: "Incline Bench Press (Dumbbell)", sub: "83 sessions, your #2. Upper chest", prescr: "3 x8-10 @30" },
            { name: "Seated Shoulder Press (Smith)", sub: "you PRd it this week", prescr: "3 x8-10 @40" },
            { name: "Chest Fly (Machine)", sub: "stretch under control", prescr: "3 x12-15 @22.5" },
            { name: "Lateral Raise (cable or DB)", sub: "second side-delt hit", prescr: "3 x15 @7.5" },
            { name: "Triceps Pushdown (reverse or rope)", sub: "second triceps hit", prescr: "2 x12-15 @17.5" },
            { name: "StairMaster Z2 (optional)", sub: "easy only", prescr: "20-25 min", tag: "engine" }
          ]
        },
        {
          title: "Friday · Rest",
          tag: "REST", kind: "rest",
          why: "Full rest before the heaviest day of the week. Sleep is a fat-loss lever, not just recovery: dieters sleeping 5.5h lost 55% less fat than at 8.5h on identical calories (Nedeltcheva 2010). 7+ hours tonight is training.",
          exercises: [
            { name: "Sleep 7h+", sub: "the cheapest anabolic you own", prescr: "non-negotiable" },
            { name: "Steps", sub: "deficit that costs zero recovery", prescr: "8-10k" }
          ]
        },
        {
          title: "Saturday · Deadlift Day",
          tag: "IRON", kind: "excite",
          why: "The layup goal, in your freshest 2-hour slot after a rest day. 14 sessions in 90 weeks is why 200 is still far; one honest heavy pull a week is how it gets close (undertrained lifts progress even in a deficit, Helms 2014). Everything here serves the pull: back thickness keeps the bar tight, grip is the classic 200 limiter, leg press is the knee insurance from the squat verdict.",
          warmup: "Full ramp on deadlift only: 60 x5, 90 x3, 110 x2, 122.5 x1 primer, then top set. Everything after: one feeder set max.",
          exercises: [
            { name: "Deadlift (Barbell)", sub: "top set then backoffs. +5 kg when 5 land clean, undertrained lifts jump fast", prescr: "130 x5 @RIR2 + 2x5 @115" },
            { name: "Seated Cable Row (V-Grip)", sub: "mid-back keeps the bar close", prescr: "3 x10-12 @70" },
            { name: "Reverse Grip Lat Pulldown", sub: "77 sessions, lat strength", prescr: "3 x8-10 @57.5" },
            { name: "Leg Press (Machine)", sub: "knee insurance per the squat verdict. Find the 12-rep load week 1, RIR 3", prescr: "3 x12 light", tag: "verdict" },
            { name: "Hammer Curl (Cable)", sub: "biceps hit 2 of 2", prescr: "3 x12 @17.5" },
            { name: "Dead Hang", sub: "grip for the 200, you love these anyway", prescr: "2 x max" },
            { name: "Suitcase Hold", sub: "loaded brace, one side at a time", prescr: "2 x30-40s / side" }
          ]
        },
        {
          title: "Sunday · Long Climb",
          tag: "ENGINE", kind: "grind",
          why: "The durability builder: withstand longer starts here. One long easy climb growing 10-15% per week, 45 toward 90 minutes over eight weeks, 120 as the later stretch. Strictly conversational pace. Put a show on and climb. Ego does not set the pace, the talk test does.",
          warmup: "First 5 minutes at a crawl, then settle in.",
          exercises: [
            { name: "StairMaster Long Zone 2", sub: "wk1 45 / wk2 55 / wk3 70 / wk4 60 min. Never above talk-test pace", prescr: "45-70 min @RPE 3-4", tag: "engine" },
            { name: "Dead Hang", sub: "decompress after the climb", prescr: "2 x easy" },
            { name: "Glute + hip stretch", sub: "5 minutes, the hip thanks you", prescr: "5 min" }
          ]
        }
      ]
    }
  },

  arc: [
    { wk: "Week 1", iron: "Bench 60x5, deadlift 130x5, all top sets at RIR 2. Learn the feel, log everything.", engine: "~105 min Z2: Tue 30, optional 25 after a lift, Sun long 45." },
    { wk: "Week 2", iron: "+2.5 bench / +5 deadlift if week 1 landed clean (62.5 / 135).", engine: "~130 min: Tue 40, appends, Sun long 55." },
    { wk: "Week 3", iron: "+2.5 / +5 again if earned (65 / 140).", engine: "~150 min: Tue 45, appends, Sun long 70." },
    { wk: "Week 4", iron: "Hold loads, drop one backoff set. Eat at maintenance ~2800 all week, programmed.", engine: "Polarize ~135 min: first Norwegian 4x4 on Tuesday, Sun long 60 easy." }
  ],

  calls: [
    {
      t: "Squat 100 kg", verdict: "DEFER",
      body: [
        "None of your four goals needs it. Deadlift covers hinge and leg strength, the StairMaster hammers quad endurance, and heavy leg strength for endurance economy is delivered by any heavy lift, the deadlift included (Ronnestad & Mujika 2014).",
        "On a deficit with 4 lifts + 3 climbs, heavy squatting is the most expensive thing you could add for the least return, on a lift you hate.",
        "Reopened when three triggers are met: eating at maintenance, aerobic base built (~180 min/wk), deadlift stable at 160+. Until then: leg press 3x12 on Saturday is the knee insurance."
      ],
      src: "Wilson 2012 · Ronnestad & Mujika 2014 · Vikmoen 2017"
    },
    {
      t: "Stair beats running for your goals", verdict: "KEEP CLIMBING",
      body: [
        "Interference lives in eccentric muscle damage. Running caused strength and size losses in the meta-analysis, cycling did not, and stair-climbing is concentric-dominant like cycling. Your preferred tool is also the evidence-backed one.",
        "2026 umbrella review, 144 studies: recreational concurrent training costs no strength or muscle at all, only explosive power, which you do not train for.",
        "Rules that keep it free: Zone 2 at talk-test pace (115-135 bpm), lift first on shared days, no hard cardio in the 24h around deadlift day."
      ],
      src: "Wilson 2012 · Schumann 2022 · Sports Med umbrella 2026"
    },
    {
      t: "The 95 bench does not exist", verdict: "REBUILD, THEN BUILD",
      body: [
        "Peak logged bench: e1RM 80 in April (60x10). Current form: 67, after two four-week gaps. There is not a single logged set near 95.",
        "Phase 1 is reacquisition: 67 back to ~78 in 6-10 weeks of benching twice weekly. That part is fast.",
        "78 to 100 is a +28% intermediate build and a ~500 kcal deficit blunts new muscle (Murphy & Koehler 2022). Honest date: e1RM 100 lands in 2027, and it accelerates the day the cut ends. The block target is 72+."
      ],
      src: "Murphy & Koehler 2022 · Grgic 2018 · your own log"
    },
    {
      t: "Deadlift 200 is the layup", verdict: "PULL WEEKLY",
      body: [
        "14 deadlift sessions in 90 weeks makes this your most undertrained lift: the 160 e1RM came almost for free. Undertrained lifts keep progressing even in a deficit (Helms 2014).",
        "One heavy top set + backoffs every Saturday, +5 kg jumps when reps land clean. e1RM 200 in 6-12 months is the realistic corridor.",
        "The limiters at 200 are grip and upper-back tightness, not leg drive. Hence dead hangs, rows, and the suitcase hold on the same day."
      ],
      src: "Helms 2014 · Graham & Cleather 2021 (RIR autoregulation)"
    },
    {
      t: "1700-2000 kcal was a crash, not a cut", verdict: "EAT 2400",
      body: [
        "Your maintenance at this training load is roughly 2800-3100. Eating 1700-2000 is a 30-45% slash: the same collapse pattern as the energy-drink era, wearing a diet costume.",
        "2400 kcal, hard floor 2200, still loses ~0.5-0.6 kg/week while protecting the lifts and the eating habit. Every 4th week eats at maintenance ~2800: programmed breaks beat continuous dieting (MATADOR trial, Byrne 2018).",
        "Protein 180 g/day is the non-negotiable half. If weight drops faster than 0.6 kg/week, add 150-200 kcal: that speed is muscle leaving, not winning."
      ],
      src: "Byrne 2018 (MATADOR) · Helms 2014 · Garthe 2011"
    },
    {
      t: "Abs are a kitchen project with a date", verdict: "FEB-APR 2027",
      body: [
        "With waist-dominant storage, abs show last: first upper-ab lines around 13-14% bodyfat, which for you means roughly 80-82 kg. At 0.5-0.6 kg/week from 96, that is honestly 6-8 months out. A full six-pack is a 10-14 month project.",
        "No exercise reveals them: six weeks of daily ab training changed belly fat by exactly nothing in the trial (Vispute 2011). Fat leaves systemically and your waist is biologically last in line (alpha-2 receptor density).",
        "So the core work in this plan is isometric, hip-safe, and exists to protect the SI joint and brace the deadlift. The mirror is fed by the kitchen, the sleep, and the steps."
      ],
      src: "Vispute 2011 · Nedeltcheva 2010 · Helms 2014"
    },
    {
      t: "Every muscle twice a week, volume at MEV+", verdict: "THE TABLE",
      body: [
        "In a deficit, recovery is the budget: volumes sit at minimum-effective-plus (RP landmarks), not the old 20-25 sets. Frequency stays at 2x for every visible muscle because 48h growth windows stack better than one weekly blowout.",
        "Back keeps the most volume: it is your strongest region, it recovers fastest, and it is the taper."
      ],
      src: "Schoenfeld 2017 · Israetel/RP volume landmarks",
      table: true
    }
  ],

  volume: [
    { m: "Chest",        sets: 17,  freq: "2x", hot: false },
    { m: "Back + lats",  sets: 19,  freq: "2x", hot: true },
    { m: "Side delts",   sets: 9,   freq: "2x", hot: true },
    { m: "Upper chest",  sets: 6,   freq: "2x", hot: true },
    { m: "Biceps",       sets: 6,   freq: "2x", hot: false },
    { m: "Triceps",      sets: 8,   freq: "2x", hot: false },
    { m: "Hinge",        sets: 6,   freq: "1.5x", hot: false },
    { m: "Quads",        sets: "3 + stair", freq: "daily-ish", hot: false },
    { m: "Core (no flexion)", sets: 11, freq: "2x", hot: false }
  ],

  /*GOALS_START*/
  goals: [
    { name: "Bench Press e1RM", start: 67, current: 67, goal: 100, unit: "kg", kind: "accent", source: "hevy",
      note: "Peak was 80 in April. Phase 1: back to 78 by mid-September. The 100 is a 2027 lift and accelerates the day the cut ends. Block target: 72+." },
    { name: "Deadlift e1RM", start: 143, current: 143, goal: 200, unit: "kg", kind: "accent", source: "hevy",
      note: "The layup. One heavy pull every Saturday, +5 kg when clean. 160 by September, 200 in 6-12 months." },
    { name: "Engine Z2", start: 0, current: 0, goal: 180, unit: "min/wk", kind: "steel", source: "hevy",
      note: "Talk-test pace only. 105 in week 1, 150 by week 3, 180 by autumn. Auto-sums this week's stair minutes from Hevy." },
    { name: "Longest climb", start: 68, current: 68, goal: 90, unit: "min", kind: "steel", source: "hevy",
      note: "Grows 10-15% per week from an easy 45. 90 by September, 120 is the later stretch. Knees set the ceiling, not lungs." },
    { name: "Bodyweight", start: 96, current: 96, goal: 82, unit: "kg", kind: "good", source: "manual",
      note: "0.5-0.6 kg/week, no faster. First ab lines around 80-82 kg: honestly Feb-Apr 2027. Block marker: 94.5 by Aug 9." }
  ],
  /*GOALS_END*/

  checkpoints: [
    { t: "Week 1 complete: 6 sessions, ~105 Z2 minutes", d: "The floor is the win. Loads deliberately conservative, log everything.", when: "Jul 19" },
    { t: "Bench top set 62.5 x5", d: "First +2.5 on the rebuilt groove.", when: "~Jul 26" },
    { t: "Deadlift top set 140 x5", d: "+10 kg in two weeks. Undertrained lifts move fast.", when: "~Aug 2" },
    { t: "Long climb reaches 70 minutes", d: "Two thirds of the way to the 90-minute base.", when: "~Aug 2" },
    { t: "Maintenance week + first Norwegian 4x4", d: "Eat ~2800 for 7 days and hit one interval session. Programmed, not cheating.", when: "Aug 3-9" },
    { t: "Bodyweight 94.5 or lower", d: "On the 0.5-0.6 kg/week line from 96.", when: "Aug 9" },
    { t: "Block review: bench e1RM 72+, deadlift e1RM 152+", d: "Auto-checked from Hevy at sync. Then Block 2 loads.", when: "Aug 10" }
  ],

  nutrition: {
    head: "2400 a day, 180 protein, week 4 at maintenance. The abs are a byproduct of not skipping meals for a year.",
    protein: "180 g",
    calFloor: "2400 kcal (floor 2200)",
    water: "3 L",
    rules: [
      "Three real meals every day, non-negotiable. A mediocre eaten meal beats a perfect skipped one. This habit is the whole plan.",
      "Skeleton: tvaroh + oats (40g) / chicken or beef + rice (50g) / eggs or tuna + carbs (40g) / skyr + whey scoop (40g). That is ~180.",
      "Week 4 of every month: eat at maintenance, ~2800. Programmed diet break (MATADOR trial), not a failure.",
      "Sleep 7h+. Short sleep cost dieters 55% of their fat loss on identical calories (Nedeltcheva 2010).",
      "Alcohol parks itself in exactly the waist you are cutting, dose-dependent. Keep it rare.",
      "8-10k steps daily. The cheapest deficit you own, costs zero recovery.",
      "Scale check weekly, same morning. Dropping faster than 0.6 kg/week: add 150-200 kcal back."
    ]
  },

  team: [
    {
      name: "Strength",
      role: "Bench 100 / deadlift 200 roadmap",
      calls: [
        "Bench 2x weekly, one heavy one volume: pressing rewards frequency most (Grgic 2018)",
        "Deadlift once heavy plus a light RDL. Two heavy pull days in a deficit is where recovery breaks",
        "Every load anchored to the log: 60x5 bench, 130x5 pull, +2.5 / +5 double progression",
        "Bad day protocol: hold the weight, cut one backoff set. RIR beats fixed percentages (Graham & Cleather 2021)"
      ]
    },
    {
      name: "Engine",
      role: "Gym-only endurance, stair-first",
      calls: [
        "Stair is concentric like cycling: running hurt lifts in the meta-analysis, cycling did not (Wilson 2012)",
        "Zone 2 = talk test, 115-135 bpm. If it feels too easy it is right (Seiler 80/20)",
        "Three weeks pure base, then one Norwegian 4x4 per week from week 4 (Helgerud 2007)",
        "Squat: DEFER on evidence. Leg press 3x12 is the knee insurance until the triggers are met"
      ]
    },
    {
      name: "Body Comp",
      role: "Visible abs, honest timeline",
      calls: [
        "2400 kcal, 180g protein. The old 1700-2000 was the crash pattern wearing a diet costume",
        "First ab lines at ~80-82 kg, Feb-Apr 2027. Waist-dominant storage empties last, that is biology not failure",
        "No exercise reveals abs (Vispute 2011). Core work is for the hip and the bar",
        "Visual levers ranked: side delts, lats, upper chest. Grow the top, cut the waist, the ratio does the rest"
      ]
    }
  ],

  approval: {
    verdict: "Three independent research briefs, one plan. Every weight is from your log, every claim is cited, every timeline is honest even where it stings: the 95 bench is not in the log, the abs are a 2027 reveal, the squat is deferred on evidence and not on hate. The Goggins in this plan is not the intervals. It is eating 2400 every single day, climbing at a pace that feels embarrassingly easy, and showing up six times a week for months without an audience. Discipline over intensity.",
    signoff: "HEAD COACH · approved 2026-07-09 · block starts Monday Jul 13"
  }
};
