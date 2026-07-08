/* FORGE — 30-day hybrid plan. 4-day Push/Pull, EVERY muscle trained 2x/week (MPS is ~48h, 2x beats 1x).
   Two rotating weeks for variety. Exact weight on every lift. Conditioning = stair / air bike / run only. */

// ---- shared conditioning / run / rest days ----
const COND_STAIR = { id:"cond", title:"Conditioning · Stairmaster", kind:"grind", tag:"GRIND",
  why:"Engine day. Steady aerobic base that won't touch your lifting recovery. This is the deposit.",
  warmup:"",
  exercises:[
    { name:"Stairmaster", sub:"steady, conversational (talk in short sentences, HR ~135)", prescr:"35 minutes · level 7-8" },
    { name:"Dead Hang (finisher)", sub:"grip + spine decompress", prescr:"3 sets · hold as long as you can" },
  ] };
const COND_BIKE = { id:"cond", title:"Conditioning · Air Bike Intervals", kind:"grind", tag:"GRIND",
  why:"Short and savage. Trains the willingness to go one more, and it's over fast.",
  warmup:"",
  exercises:[
    { name:"Air Bike Intervals", sub:"the sprint should leave you gasping", prescr:"Warm up 5 min. Then 30 sec ALL OUT, 90 sec easy. Repeat 8 times. Cool down 4 min. (~24 min.)" },
    { name:"Dead Hang (finisher)", sub:"grip", prescr:"3 sets · hold as long as you can" },
  ] };
const RUN_A = { id:"run", title:"Run · Weekend Base", kind:"grind", tag:"GRIND",
  why:"Off the machine. This is the run that builds the December engine. Run/walk protects the hip and lungs.",
  warmup:"Brisk walk 5 minutes first.",
  exercises:[ { name:"Run / Walk", sub:"easy, HR under 150. Hip complains? add walking", prescr:"Run 4 minutes, walk 1 minute. Repeat 6 times. (30 minutes total.)" } ] };
const RUN_B = { id:"run", title:"Run · Weekend Base", kind:"grind", tag:"GRIND",
  why:"A little longer than Week A. Same rule: easy effort, protect the hip.",
  warmup:"Brisk walk 5 minutes first.",
  exercises:[ { name:"Run / Walk", sub:"easy effort, HR under 150", prescr:"Run 5 minutes, walk 1 minute. Repeat 6 times. (36 minutes total.)" } ] };
const REST_DAY = { id:"rest", title:"Rest · Reset", kind:"rest", tag:"REST",
  why:"Recovery is training. Hip care, easy movement, reset.",
  warmup:"",
  exercises:[
    { name:"Mobility + hip care", sub:"glute / ham / quad stretch, back-extension to neutral", prescr:"15 minutes" },
    { name:"Easy walk", sub:"optional", prescr:"20-30 minutes" },
  ] };

window.DATA = {
  meta: {
    athlete: "MICHAEL", block: "01", generated: "2026-07-09",
    codename: "BUILD THE FLOOR",
    oneLiner: "4-day Push/Pull. Every muscle trained twice a week, because it recovers in ~48h, not a week. Two rotating weeks so it never gets stale.",
    approvedBy: "Approved by Goggins (Lead) · designed with Nippard (physique) + Nick Bare (engine)",
    creed: "Feelings don't get a vote. I bank today's deposit, I go one more, the streak stays alive.",
  },

  dayTypes: {
    push: { label:"Push", kind:"excite" },
    pull: { label:"Pull", kind:"excite" },
    cond: { label:"Conditioning", kind:"grind" },
    run:  { label:"Run", kind:"grind" },
    rest: { label:"Rest", kind:"rest" },
  },
  weekPattern: ["push","pull","cond","push","pull","run","rest"],

  // ---- the why (answers "why 2x, why not a bro split") ----
  frequencyWhy:{
    head:"Why every muscle 2× a week",
    body:[
      "Muscle protein synthesis, the actual growth signal, is elevated for roughly 24-48 hours after you train a muscle, then it's back to baseline. Training a muscle once a week leaves ~5 days doing nothing.",
      "The research is settled: training a muscle twice a week beats once a week for growth when volume is equal (Schoenfeld meta-analysis). That's why a Push/Pull split beats the old chest-and-triceps-once-a-week bro split, you get two growth windows instead of one.",
      "Biceps recover fast and handle 2-3× a week easily. One hammer curl per rotation is nothing. The sweet spot is 10-20 hard sets per muscle per week; biceps sit at 12-16.",
      "So this plan is 4 lifting days: Push, Pull, Push, Pull. Chest, back, delts, biceps, triceps and the hinge all get hit twice, spaced ~48-72h apart. Conditioning fills the other days.",
    ],
  },

  // ---- weekly sets per muscle (the proof) ----
  volume:[
    { m:"Chest", sets:13, freq:"2×" },
    { m:"Back / Lats", sets:14, freq:"2×" },
    { m:"Side Delts", sets:12, freq:"2-3×", hot:true },
    { m:"Rear Delts", sets:12, freq:"3-4×", hot:true },
    { m:"Biceps", sets:12, freq:"2×", hot:true },
    { m:"Triceps", sets:9, freq:"2×" },
    { m:"Hinge / Hams", sets:7, freq:"2×" },
    { m:"Legs / Engine", sets:"stair + run", freq:"3×/wk" },
  ],

  weeks: {
    A: {
      name:"Week A", tag:"STRENGTH",
      blurb:"Heavier, lower reps, drive the numbers. Push/Pull/Push/Pull hits everything twice. Stairmaster is the grind.",
      days:[
        { id:"push", title:"Push 1 · Chest-heavy", kind:"excite", tag:"EXCITE",
          why:"Heavy incline and bench, plus side/rear delts and triceps. First of two push days this week.",
          warmup:"Warm up ONLY here. Incline DB: 15kg × 8, then 25kg × 5. Bench: one set 40kg × 3. Then working sets. Nothing after gets warmup sets.",
          exercises:[
            { name:"Incline Dumbbell Press", sub:"your #1 press", prescr:"4 sets × 6-8 · 32.5 kg", wu:"warm up here" },
            { name:"Flat Barbell Bench", sub:"drives the 100kg goal", prescr:"3 sets × 5 · 60 kg", wu:"1 warm-up set" },
            { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT", prescr:"4 sets × 12-15 · 7.5 kg each arm", tag:"priority" },
            { name:"Cable Rear-Delt Fly", sub:"REAR DELT", prescr:"3 sets × 15-20 · 7.5 kg", tag:"void" },
            { name:"Triceps Pushdown", sub:"", prescr:"3 sets × 10-12 · 27.5 kg" },
            { name:"Overhead Cable Triceps Extension", sub:"long head", prescr:"2 sets × 12-15" },
          ] },
        { id:"pull", title:"Pull 1 · Vertical + Hinge + Biceps", kind:"excite", tag:"EXCITE",
          why:"Trap-bar hinge, pull-ups toward 10, lat width, and real bicep volume. First of two pull days.",
          warmup:"Warm up ONLY here. Trap-Bar: 60kg × 5, then 100kg × 3. Then working sets. Nothing after gets warmup sets.",
          exercises:[
            { name:"Trap-Bar Deadlift", sub:"HINGE — neutral spine, hip-led, stop on any pinch", prescr:"4 sets × 5 · 130 kg", wu:"warm up here", tag:"void" },
            { name:"Weighted / Band Pull-Up", sub:"toward 10 clean", prescr:"4 sets × 5-6 · add weight or 16 kg band", tag:"priority" },
            { name:"Straight-Arm Lat Pulldown", sub:"your #1 lift · lat width", prescr:"3 sets × 12-15 · 30 kg" },
            { name:"Incline Dumbbell Curl", sub:"BICEPS — stretched, long head", prescr:"3 sets × 10-12 · 12.5 kg", tag:"priority" },
            { name:"Hammer Curl (Cable)", sub:"BICEPS — brachialis, arm thickness", prescr:"3 sets × 12-15 · 20 kg", tag:"priority" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
          ] },
        COND_STAIR,
        { id:"push", title:"Push 2 · Shoulder-heavy", kind:"excite", tag:"EXCITE",
          why:"Second push of the week, shifted to shoulder pressing + a chest pump. Different from Push 1 on purpose.",
          warmup:"Warm up ONLY here. Smith Shoulder Press: 20kg × 8, then 40kg × 5. Then working sets. Nothing after gets warmup sets.",
          exercises:[
            { name:"Seated Smith Shoulder Press", sub:"delts, pressing strength", prescr:"4 sets × 8-10 · 35 kg", wu:"warm up here" },
            { name:"Machine Chest Press", sub:"chest, safe to push near failure", prescr:"3 sets × 10-12 · 55 kg" },
            { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT — 2nd hit of week", prescr:"4 sets × 15-20 · 7.5 kg each arm", tag:"priority" },
            { name:"Chest Fly (Machine)", sub:"chest 2nd hit", prescr:"3 sets × 12-15 · 20 kg" },
            { name:"Cable Rear-Delt Fly", sub:"REAR DELT", prescr:"3 sets × 15-20 · 7.5 kg", tag:"void" },
            { name:"Triceps Pushdown", sub:"", prescr:"3 sets × 12-15 · 25 kg" },
          ] },
        { id:"pull", title:"Pull 2 · Horizontal + Biceps", kind:"excite", tag:"EXCITE",
          why:"Second pull: horizontal rowing for back thickness, RDL for hamstrings, and biceps again (heavier this time).",
          warmup:"Warm up ONLY here. Seated Row: one light set 50kg × 8. RDL later needs no ramp (already warm). Then working sets.",
          exercises:[
            { name:"Seated Cable Row (V-grip)", sub:"back thickness", prescr:"4 sets × 8-10 · 80 kg", wu:"1 warm-up set" },
            { name:"Reverse-Grip Lat Pulldown", sub:"your favorite · lats + biceps", prescr:"3 sets × 10-12 · 55 kg" },
            { name:"Romanian Deadlift", sub:"HINGE — hamstrings, flat back, do NOT round", prescr:"3 sets × 10 · 70 kg", tag:"void" },
            { name:"EZ-Bar Curl", sub:"BICEPS — heavy, the mass builder", prescr:"3 sets × 8-10 · 25 kg", tag:"priority" },
            { name:"Preacher Hammer Curl", sub:"BICEPS — peak + brachialis", prescr:"3 sets × 12 · 12.5 kg", tag:"priority" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
          ] },
        RUN_A,
        REST_DAY,
      ],
    },
    B: {
      name:"Week B", tag:"PUMP & ENGINE",
      blurb:"Higher reps, different exercises, more conditioning variety. Still Push/Pull/Push/Pull, everything twice. Air bike replaces the stair grind.",
      days:[
        { id:"push", title:"Push 1 · Chest Pump", kind:"excite", tag:"EXCITE",
          why:"Same muscles as Week A but higher reps and a pump focus. Smith incline + cable work.",
          warmup:"Warm up ONLY here. Incline Smith: 20kg × 8, then 40kg × 5. Then working sets.",
          exercises:[
            { name:"Incline Smith Press", sub:"volume, controlled", prescr:"4 sets × 8-10 · 45 kg", wu:"warm up here" },
            { name:"Cable Fly Crossover", sub:"constant tension", prescr:"3 sets × 15 · 12.5 kg" },
            { name:"Dumbbell Lateral Raise", sub:"SIDE DELT", prescr:"4 sets × 15-20 · 10 kg", tag:"priority" },
            { name:"Reverse Pec-Deck", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
            { name:"Overhead Cable Triceps Extension", sub:"", prescr:"3 sets × 12-15" },
            { name:"Machine Chest Press", sub:"chest 2nd movement", prescr:"3 sets × 12-15 · 55 kg" },
          ] },
        { id:"pull", title:"Pull 1 · Vertical + Biceps", kind:"excite", tag:"EXCITE",
          why:"High-rep pull-up volume, unilateral lat work, and stretched bicep curls.",
          warmup:"Warm up ONLY here. One light lat pulldown set, then working sets.",
          exercises:[
            { name:"Band Pull-Up (high rep)", sub:"volume toward 10", prescr:"4 sets × 8-10 · 16 kg band", tag:"priority" },
            { name:"One-Arm Lat Pulldown", sub:"unilateral lat, you PR'd it", prescr:"3 sets × 12 · 22.5 kg" },
            { name:"Straight-Arm Lat Pulldown", sub:"your #1 lift", prescr:"3 sets × 15 · 27.5 kg" },
            { name:"Incline Dumbbell Curl", sub:"BICEPS — stretched", prescr:"3 sets × 12-15 · 10 kg", tag:"priority" },
            { name:"Cable Curl", sub:"BICEPS — constant tension", prescr:"3 sets × 15 · 15 kg", tag:"priority" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
          ] },
        COND_BIKE,
        { id:"push", title:"Push 2 · Shoulder Pump", kind:"excite", tag:"EXCITE",
          why:"Second push, machine shoulder press and delt-heavy pump. Fast and full.",
          warmup:"Warm up ONLY here. Machine Shoulder Press: one light set, then working sets.",
          exercises:[
            { name:"Machine Shoulder Press", sub:"delts", prescr:"4 sets × 10-12 · pick a 12-rep weight", wu:"1 warm-up set" },
            { name:"Incline Dumbbell Press", sub:"chest, higher rep", prescr:"3 sets × 10-12 · 27.5 kg" },
            { name:"Dumbbell Lateral Raise", sub:"SIDE DELT — 2nd hit", prescr:"4 sets × 15-20 · 10 kg", tag:"priority" },
            { name:"Cable Fly Crossover", sub:"chest pump", prescr:"3 sets × 15 · 12.5 kg" },
            { name:"Reverse Pec-Deck", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
            { name:"Triceps Pushdown", sub:"", prescr:"3 sets × 15 · 22.5 kg" },
          ] },
        { id:"pull", title:"Pull 2 · Horizontal + Biceps", kind:"excite", tag:"EXCITE",
          why:"Rowing for thickness, a hinge, and biceps a second time this week. High-rep burn.",
          warmup:"Warm up ONLY here. One light row set, then working sets.",
          exercises:[
            { name:"Seated Cable Row (V-grip)", sub:"back thickness, higher rep", prescr:"4 sets × 12-15 · 65 kg", wu:"1 warm-up set" },
            { name:"Reverse-Grip Lat Pulldown", sub:"your favorite", prescr:"3 sets × 12 · 50 kg" },
            { name:"Kettlebell Swing", sub:"HINGE — hip snap, hamstrings + conditioning", prescr:"4 sets × 15 · 24 kg", tag:"void" },
            { name:"EZ-Bar Curl", sub:"BICEPS", prescr:"3 sets × 12 · 20 kg", tag:"priority" },
            { name:"Preacher Hammer Curl", sub:"BICEPS — brachialis", prescr:"3 sets × 15 · 12.5 kg", tag:"priority" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 · 20 kg", tag:"void" },
          ] },
        RUN_B,
        REST_DAY,
      ],
    },
  },

  arc:[
    { wk:"Week 1 (A)", run:"Run 4 min / walk 1 min × 6 (30 min)", cond:"Stairmaster 35 min steady" },
    { wk:"Week 2 (B)", run:"Run 5 min / walk 1 min × 6 (36 min)", cond:"Air bike: 8 × 30 sec all-out" },
    { wk:"Week 3 (A)", run:"Run 8 min / walk 1 min × 4 (36 min)", cond:"Stair intervals: 4 × 3 min hard / 2 min easy" },
    { wk:"Week 4 (B)", run:"Run 40 min continuous (walk only if needed)", cond:"Air bike: 10 × 30 sec all-out" },
  ],

  /*GOALS_START*/
  goals: [
    { name:"Bench e1RM", start:67, goal:73, current:67, unit:"kg", source:"hevy", note:"Reclaim the ground lost in June. 100kg is a December goal.", kind:"accent" },
    { name:"Deadlift e1RM", start:143, goal:160, current:143, unit:"kg", source:"hevy", note:"Reclaim your 150×2 PR. Trap-bar 130→140. On the 200 track.", kind:"accent" },
    { name:"Pull-Ups", start:6, goal:10, current:6, unit:"reps", source:"hevy", note:"Strict, or band 16kg down to 8kg.", kind:"accent" },
    { name:"Continuous Run", start:5, goal:20, current:5, unit:"min", source:"manual", note:"Unbroken, easy, HR under 150.", kind:"steel" },
    { name:"Stair 20-min Test", start:0, goal:12, current:0, unit:"% floors", source:"manual", note:"+10-15% floors OR same floors at 8-10 bpm lower HR.", kind:"steel" },
    { name:"Bodyweight", start:96, goal:93, current:96, unit:"kg", source:"manual", note:"Waist beats the scale. Aim ~-2-3cm, strength held.", kind:"good" },
  ],
  /*GOALS_END*/

  checkpoints: [
    { when:"DAY 15", t:"Bench 57.5-60kg moving clean for reps", d:"Strength holding under the cut" },
    { when:"DAY 15", t:"Trap-bar 135kg · pull-up +1 rep or band down a level", d:"Hinge and pull trending up" },
    { when:"DAY 15", t:"Bicep pump + size trending up (both curls progressing)", d:"The frequency fix working" },
    { when:"DAY 15", t:"12-15 min continuous run · stair HR down", d:"Engine responding" },
    { when:"DAY 30", t:"Bench e1RM 73+ · Trap-bar 140 for 4×5", d:"Reclaimed and building" },
    { when:"DAY 30", t:"Pull-ups 9-10 or band at 8kg", d:"Near the 10 goal" },
    { when:"DAY 30", t:"20-min stair test PR · 20+ min continuous run", d:"Full engine battery" },
    { when:"DAY 30", t:"Waist re-measure + progress photo", d:"Visual proof" },
  ],

  nutrition: {
    protein:"180-200g", calFloor:"1800", water:"3-3.5L",
    head:"You cannot out-train a mouth you don't control.",
    rules:[
      "Protein first, every meal: ~40-50g × 4 meals. Hit the 180g floor before anything else. Muscle-retention insurance in a deficit.",
      "Park carbs around training: ~40-60g before and after hard sessions. Lower-carb on rest days so you still cut.",
      "Calorie floor 1800 (~700-1000 kcal deficit). If lifts or energy crater, float to 2000-2100, never lower.",
      "Water 3-3.5L/day, add ~0.5-1g sodium before sessions over 40 min or interval day.",
      "Weigh weekly, adjust only after a 2-week stall.",
    ],
  },

  team: [
    { name:"DAVID GOGGINS", role:"Team Lead · Mind", calls:[
      "Theme: BUILD THE FLOOR. You have a ceiling, not a floor.",
      "Never skip a GRIND day (Conditioning, Run). Miss a lift day, make it up.",
      "Approved the trap-bar hinge. 'Legs = stairmaster only' was fear, not a doctor.",
      "Track the streak, not the feeling. Log every session, hit the weekly sync.",
    ] },
    { name:"THE SCIENTIST", role:"Nippard · Physique", calls:[
      "Every muscle 2×/week. MPS is ~48h; once a week wastes 5 days. Biceps get 12 sets across 2 pull days, not 1 curl.",
      "Push/Pull/Push/Pull, not a bro split. Two growth windows per muscle.",
      "Side + rear delts on every push day + face pulls on every pull day. Your biggest visual gap.",
      "Warmups: warm up the first lift only, 1-2 sets. Never on every lift.",
    ] },
    { name:"NICK BARE", role:"Hybrid · Engine", calls:[
      "Aerobic base first: stair + bike Zone-2. Conditioning on the non-lifting days.",
      "Conditioning is stair, air bike, or running. No carries, your call, respected.",
      "Intervals from week 3 on the stair, week 2 on the bike. Base first.",
      "Go One More: never negotiate the whole session, only the next rep.",
    ] },
  ],

  approval: {
    verdict:"Rebuilt around frequency: 4-day Push/Pull, every muscle twice a week, because muscle recovers in ~48h. Biceps now get real volume (12 sets across two pull days), not one token curl. Two rotating weeks keep it fresh, every lift has a weight, conditioning is stair/bike/run only. Excitement is the reward. Consistency is the rent.",
    signoff:"— Goggins, Team Lead",
  },
};
