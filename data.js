/* FORGE data — GROUNDWORK block. Built 2026-07-09 from 437 logged Hevy workouts
   + three independent research briefs (strength / engine / body comp).
   Every weight anchored to the log. Every claim cited. update_forge.py rewrites
   the goals between the GOALS markers on each hevy-sync. */

window.DATA = {

  meta: {
    codename: "GROUNDWORK",
    oneLiner: "Six weeks to the vacation cut. November is the 100 kg test. 4 lifts + 3 climbs, one groove, benched 3x a week.",
    approvedBy: "Built from 437 logged workouts + 3 research briefs",
    creed: "Easy days easy. Heavy days heavy. Meals eaten. Every day logged.",
    block: "1 · Jul 13 to Aug 11",
    generated: "2026-07-17",
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
      blurb: "One repeating week, ON PURPOSE: to bench 100 fast you press the same groove often, heavy. Strength is a skill and skill loves repetition (specificity). The excitement is the top-set number climbing every single week, not exercise roulette. Rules: bench +2.5 kg EVERY week the reps land, deadlift +5, long climb +10-15%. Week 4 of each month: maintenance calories, first Norwegian 4x4, shorter climb.",
      days: [
        {
          title: "Monday · Bench Heavy",
          tag: "IRON", kind: "excite",
          why: "The 100 campaign. You never trained heavy bench (zero logged singles, triples or fives), which means the fast novice window on heavy loads is still unspent. 3x weekly pressing + this heavy top set is how it gets spent (frequency drives pressing strength, Grgic 2018).",
          warmup: "Full ramp on bench only: bar x10, 40 x5, 52.5 x3, 57.5 x1 primer, then the top set. Everything after bench: one lighter feeder set, no full ramps.",
          exercises: [
            { name: "Bench Press (Barbell)", sub: "top set, then backoffs. +2.5 kg EVERY week the 5 land at RIR 2. Ride the run while it lasts", prescr: "62.5 x5 @RIR2 + 3x6 @52.5" },
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
            { name: "Deadlift (Barbell)", sub: "top set 3-5 reps: 3 keeps you on plan, 5 earns the +5 kg. Recent form is 130x3, so week 1 may be a triple, that is fine", prescr: "130 x3-5 @RIR2 + 2x5 @115" },
            { name: "Bench Press speed triples", sub: "third weekly groove hit. Bar moves FAST, nowhere near failure. Always 12.5 under Monday's top set", prescr: "4 x3 @50" },
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
    { wk: "Week 1", iron: "Bench 62.5x5, deadlift 130x5, top sets at RIR 2. Groove in, log everything.", engine: "~105 min Z2: Tue 30, optional 25 after a lift, Sun long 45." },
    { wk: "Week 2", iron: "Bench 65 / deadlift 135. The +2.5 / +5 train leaves weekly when reps land.", engine: "~130 min: Tue 40, appends, Sun long 55." },
    { wk: "Week 3", iron: "Bench 67.5 / deadlift 140.", engine: "~150 min: Tue 45, appends, Sun long 70." },
    { wk: "Week 4", iron: "Hold loads, drop one backoff set. Eat at maintenance ~2800 all week, programmed.", engine: "Polarize ~135 min: first Norwegian 4x4 on Tuesday, Sun long 60 easy." },
    { wk: "Weeks 5-6", iron: "Bench 70 then 72.5-75. Aug 18-19: ramp to a heavy SINGLE, 85-90. That is the bench you take on vacation.", engine: "Hold ~150 min, long climb 75-80. Aug 20: leanest you have been in years." }
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
      t: "Bench 100: the November test", verdict: "BENCH 3X A WEEK",
      body: [
        "The log truth stands: peak e1RM 80 (April, 60x10), no set near 95 ever. But the log shows something bigger: you have NEVER trained heavy bench. Zero singles, triples or fives in 90 weeks, only 8-16 rep work, with month-long gaps.",
        "That makes you a novice AT HEAVY LOADS with an intermediate muscle base, and novices on a new stimulus progress weekly, not yearly. Strength at low reps is half skill, and skill comes fast with frequency (Grgic 2018). So: three bench exposures a week (heavy Monday, volume Thursday, speed triples Saturday), +2.5 kg every week the reps land.",
        "The line this draws: single at 85-90 before vacation (Aug 20), then 100x1 TEST on Nov 30. Conditions attached, no negotiation: no training gaps, 2400 eaten daily, weight loss capped at 0.6 kg/week. Miss those and the date moves, that is physics, not mentality."
      ],
      src: "Grgic 2018 (frequency) · Graham & Cleather 2021 · your own log"
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
      t: "The vacation cut, then the November look", verdict: "AUG 20 · NOV 30",
      body: [
        "Vacation (Aug 20, 6 weeks): 90-91 kg on the scale (the first week drops fast, water and glycogen). Leanest you have been in years: tighter waist, face and shoulders pop, upper chest shows. That plus an 85-90 bench single is what you take to the beach.",
        "November 30 (20 weeks): 85-86 kg at the same rate. With your waist-dominant storage that is where the first upper-ab lines show in decent light. The deep-cut six-pack sits further down the same road (~82 kg), reached by simply not stopping.",
        "No exercise reveals any of it: six weeks of daily ab training changed belly fat by exactly nothing (Vispute 2011). The mirror is fed by 2400 eaten, 7h slept, 10k walked. Faster than 0.6 kg/week burns muscle and makes vacation look WORSE, not better."
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
    { m: "Chest",        sets: "19 + speed",  freq: "3x", hot: true },
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
      note: "3x a week, +2.5 every week. Vacation marker Aug 20: heavy single at 85-90. THE TEST: 100x1 on Nov 30. Conditions: no gaps, 2400 eaten, cut capped at 0.6/wk." },
    { name: "Deadlift e1RM", start: 143, current: 143, goal: 200, unit: "kg", kind: "accent", source: "hevy",
      note: "The layup. One heavy pull every Saturday, +5 kg when clean. Nov 30 marker: 180x1. The 200 falls in the months right after." },
    { name: "Engine Z2", start: 0, current: 0, goal: 180, unit: "min/wk", kind: "steel", source: "hevy",
      note: "Talk-test pace only. 105 in week 1, 150 by week 3, 180 by autumn. Auto-sums this week's stair minutes from Hevy." },
    { name: "Longest climb", start: 68, current: 68, goal: 90, unit: "min", kind: "steel", source: "hevy",
      note: "Grows 10-15% per week from an easy 45. 90 by September, 120 is the later stretch. Knees set the ceiling, not lungs." },
    { name: "Bodyweight", start: 96, current: 96, goal: 82, unit: "kg", kind: "good", source: "manual",
      note: "0.5-0.6 kg/week, no faster. Vacation Aug 20: 90-91, leanest in years. Nov 30: 85-86, first ab lines. 82 is where the full six-pack lives." }
  ],
  /*GOALS_END*/

  checkpoints: [
    { t: "Week 1 complete: 6 sessions, ~105 Z2 minutes", d: "The floor is the win. Log everything.", when: "Jul 19" },
    { t: "Bench top set 65 x5", d: "The weekly +2.5 train is rolling.", when: "~Jul 20" },
    { t: "Deadlift top set 140 x5", d: "+10 kg in two weeks. Undertrained lifts move fast.", when: "~Aug 1" },
    { t: "Long climb reaches 70 minutes", d: "Two thirds of the way to the 90-minute base.", when: "~Aug 2" },
    { t: "Maintenance week + first Norwegian 4x4", d: "Eat ~2800 for 7 days and hit one interval session. Programmed, not cheating.", when: "Aug 3-9" },
    { t: "VACATION CHECK: bodyweight 91 or less, bench single 85-90, climb 75+", d: "Six weeks of work you can see in the mirror and load on the bar. Test the single Aug 18-19, then go enjoy it.", when: "Aug 20" },
    { t: "NOVEMBER CHECK: bench 100 x1 TEST", d: "The main event. Taper the last week, then take it.", when: "Nov 30" },
    { t: "NOVEMBER CHECK: deadlift 180 x1, bodyweight 85-86, Z2 at 180 min/wk", d: "First ab lines territory. 200 deadlift and the deep cuts sit right behind it.", when: "Nov 30" }
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
    verdict: "Three research briefs, one plan, one correction. The first draft priced bench 100 like you were a trained intermediate; your log proved you never trained heavy bench at all, and an unspent novice window moves weekly, not yearly. So the campaign is: bench 3x a week, +2.5 every week, 85-90 single before vacation, 100 on the bar Nov 30. The rest holds: squat deferred on evidence, stair validated over running, 2400 eaten daily. The Goggins in this plan is not the intervals. It is doing the same boring week at full intent, six days out of seven, until the numbers have no choice.",
    signoff: "HEAD COACH · v2 approved 2026-07-09 · block starts Monday Jul 13 · Hevy updated"
  }
};
