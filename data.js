/* FORGE — 30-day hybrid plan. Two rotating weeks. Approved by the team (Goggins lead, Nippard, Nick Bare).
   Every lift has an exact weight. Conditioning is stair / air bike / run only. Plain language, no notation. */
window.DATA = {
  meta: {
    athlete: "MICHAEL", block: "01", generated: "2026-07-08",
    codename: "BUILD THE FLOOR",
    oneLiner: "You already have a ceiling. You have no floor. Two rotating weeks so it never gets stale: Week A drives strength, Week B builds the engine and the pump.",
    approvedBy: "Approved by Goggins (Lead) · designed with Nippard (physique) + Nick Bare (engine)",
    creed: "Feelings don't get a vote. I bank today's deposit, I go one more, the streak stays alive.",
  },

  dayTypes: {
    push: { label:"Push", kind:"excite" },
    cond: { label:"Conditioning", kind:"grind" },
    pull: { label:"Pull", kind:"excite" },
    z2:   { label:"Zone-2", kind:"steady" },
    pump: { label:"Pump", kind:"light" },
    run:  { label:"Run", kind:"grind" },
    rest: { label:"Rest", kind:"rest" },
  },
  weekPattern: ["push","cond","pull","z2","pump","run","rest"],

  weeks: {
    A: {
      name:"Week A", tag:"STRENGTH",
      blurb:"Heavier, lower reps, drive the numbers. Stairmaster is the grind. This is the week you chase PRs.",
      days:[
        { id:"push", title:"Push · Chest, Delts, Triceps", kind:"excite", tag:"EXCITE",
          why:"Your favorite incline pressing, heavy, plus a bench you can PR and the side delts that widen your frame.",
          warmup:"Warm up ONLY here. Incline DB: do 15kg × 8, then 25kg × 5 to warm up. Bench: do one set of 40kg × 3. Then start working sets. Nothing after this gets warmup sets.",
          exercises:[
            { name:"Incline Dumbbell Press", sub:"your #1 press", prescr:"4 sets × 6-8 reps · 32.5 kg", wu:"warm up here" },
            { name:"Flat Barbell Bench", sub:"drives the 100kg goal", prescr:"4 sets × 5 reps · 60 kg", wu:"1 warm-up set" },
            { name:"Chest Fly (Machine)", sub:"stretch + squeeze", prescr:"3 sets × 12-15 reps · 20 kg" },
            { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT — widens your frame", prescr:"4 sets × 12-15 reps · 7.5 kg each arm", tag:"priority" },
            { name:"Cable Rear-Delt Fly", sub:"REAR DELT — the void", prescr:"3 sets × 15-20 reps · 7.5 kg", tag:"void" },
            { name:"Triceps Pushdown", sub:"", prescr:"3 sets × 10-12 reps · 27.5 kg" },
          ] },
        { id:"cond", title:"Conditioning · Stairmaster Grind", kind:"grind", tag:"GRIND",
          why:"No runner's high here. Just you and the machine. This is the deposit. Nobody's watching, do it anyway.",
          warmup:"",
          exercises:[
            { name:"Stairmaster", sub:"steady, conversational (you can talk in short sentences, HR ~135)", prescr:"35 minutes · level 7-8" },
            { name:"Dead Hang (finisher)", sub:"grip + decompress the spine", prescr:"3 sets · hold as long as you can (aim 45+ sec)" },
          ] },
        { id:"pull", title:"Pull · Back, Hinge, Biceps", kind:"excite", tag:"EXCITE",
          why:"Lats, pull-ups toward 10, and the trap-bar hinge that builds your deadlift. Straight-arm pulldown is your #1 lift.",
          warmup:"Warm up ONLY here. Trap-Bar Deadlift: do 60kg × 5, then 100kg × 3 to warm up. Then start working sets. Nothing after this gets warmup sets.",
          exercises:[
            { name:"Trap-Bar Deadlift", sub:"HINGE — neutral spine, hip-led, stop on any pinch", prescr:"4 sets × 5 reps · 130 kg", wu:"warm up here", tag:"void" },
            { name:"Weighted / Band Pull-Up", sub:"toward 10 clean", prescr:"4 sets × 5 reps · add weight, or 16 kg band", tag:"priority" },
            { name:"Seated Cable Row (V-grip)", sub:"upper-back thickness", prescr:"4 sets × 8-10 reps · 80 kg" },
            { name:"Straight-Arm Lat Pulldown", sub:"your #1 lift · lat width", prescr:"3 sets × 12-15 reps · 30 kg" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 reps · 20 kg", tag:"void" },
            { name:"Hammer Curl (Cable)", sub:"", prescr:"3 sets × 10-12 reps · 20 kg" },
          ] },
        { id:"z2", title:"Zone-2 · Air Bike", kind:"steady", tag:"STEADY",
          why:"Recovery cardio. Builds the aerobic base without touching your lifting recovery. Should feel almost too easy.",
          warmup:"",
          exercises:[
            { name:"Air Bike", sub:"easy, steady, conversational the whole time", prescr:"30 minutes easy" },
          ] },
        { id:"pump", title:"Pump · Delts & Arms", kind:"light", tag:"LIGHT",
          why:"Third delt hit of the week (that's how they grow) plus an arm pump. Light and quick, easy to show up for.",
          warmup:"Light, no heavy warmups needed.",
          exercises:[
            { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT, 3rd hit", prescr:"3 sets × 15-20 reps · 7.5 kg", tag:"priority" },
            { name:"Cable Rear-Delt Fly", sub:"", prescr:"3 sets × 15-20 reps · 7.5 kg", tag:"void" },
            { name:"Hammer Curl + Triceps Pushdown", sub:"superset, back to back", prescr:"3 rounds × 12-15 each · 20 kg / 25 kg" },
            { name:"Stairmaster finish", sub:"easy", prescr:"15 minutes easy" },
          ] },
        { id:"run", title:"Run · Weekend Base", kind:"grind", tag:"GRIND",
          why:"Get off the machine. This is the run that builds your December engine. Run/walk protects the hip and the rebuilding lungs.",
          warmup:"Brisk walk 5 minutes before you start running.",
          exercises:[
            { name:"Run / Walk", sub:"keep the running easy, HR under 150. Hip complains? add more walking", prescr:"Run 4 minutes, walk 1 minute. Repeat 6 times. (30 minutes total.)" },
          ] },
        { id:"rest", title:"Rest · Reset", kind:"rest", tag:"REST",
          why:"Recovery is training. Take care of the hip, move easy, and check Datová schránka.",
          warmup:"",
          exercises:[
            { name:"Mobility + hip care", sub:"glute / ham / quad stretch, back-extension to neutral", prescr:"15 minutes" },
            { name:"Easy walk", sub:"optional", prescr:"20-30 minutes" },
          ] },
      ],
    },
    B: {
      name:"Week B", tag:"ENGINE & PUMP",
      blurb:"Higher reps, different exercises, more conditioning variety. Air bike intervals replace the stair grind. This is the week you chase the pump and the engine.",
      days:[
        { id:"push", title:"Push · Chest, Delts, Triceps", kind:"excite", tag:"EXCITE",
          why:"Different from Week A on purpose: Smith incline for volume, machine press and cable flys for a brutal pump.",
          warmup:"Warm up ONLY here. Incline Smith: do 20kg × 8, then 40kg × 5 to warm up. Then start working sets. Nothing after this gets warmup sets.",
          exercises:[
            { name:"Incline Smith Press", sub:"volume, controlled", prescr:"4 sets × 8-10 reps · 45 kg", wu:"warm up here" },
            { name:"Machine Chest Press", sub:"safe to push near failure", prescr:"3 sets × 12-15 reps · 55 kg" },
            { name:"Cable Fly Crossover", sub:"constant tension", prescr:"3 sets × 15 reps · 12.5 kg" },
            { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT", prescr:"4 sets × 15-20 reps · 7.5 kg each arm", tag:"priority" },
            { name:"Reverse Pec-Deck", sub:"REAR DELT", prescr:"3 sets × 15-20 reps · 20 kg", tag:"void" },
            { name:"Triceps Pushdown", sub:"", prescr:"3 sets × 12-15 reps · 22.5 kg" },
          ] },
        { id:"cond", title:"Conditioning · Air Bike Intervals", kind:"grind", tag:"GRIND",
          why:"The hard one. Short, savage, and over fast. This is where you train the willingness to go one more.",
          warmup:"",
          exercises:[
            { name:"Air Bike Intervals", sub:"the sprint should leave you gasping", prescr:"Warm up 5 min. Then: 30 seconds ALL OUT, 90 seconds easy. Repeat 8 times. Cool down 4 min. (~24 min.)" },
            { name:"Dead Hang (finisher)", sub:"grip", prescr:"3 sets · hold as long as you can" },
          ] },
        { id:"pull", title:"Pull · Back, Hinge, Biceps", kind:"excite", tag:"EXCITE",
          why:"Romanian deadlift for the hamstrings and back, plus your favorite reverse-grip pulldown and high-rep pull-up volume.",
          warmup:"Warm up ONLY here. Romanian Deadlift: do 40kg × 6, then 60kg × 4 to warm up. Then start working sets. Nothing after this gets warmup sets.",
          exercises:[
            { name:"Romanian Deadlift", sub:"HINGE — flat back, feel the hamstrings, do NOT round", prescr:"4 sets × 8-10 reps · 70 kg", wu:"warm up here", tag:"void" },
            { name:"Band Pull-Up (high rep)", sub:"volume toward 10", prescr:"4 sets × 8-10 reps · 16 kg band", tag:"priority" },
            { name:"Reverse-Grip Lat Pulldown", sub:"your favorite", prescr:"3 sets × 10-12 reps · 55 kg" },
            { name:"Seated Cable Row (V-grip)", sub:"lighter, higher reps", prescr:"3 sets × 12-15 reps · 65 kg" },
            { name:"Face Pull", sub:"REAR DELT", prescr:"3 sets × 15-20 reps · 20 kg", tag:"void" },
            { name:"Preacher Hammer Curl", sub:"", prescr:"3 sets × 12 reps · 12.5 kg" },
          ] },
        { id:"z2", title:"Zone-2 · Stairmaster", kind:"steady", tag:"STEADY",
          why:"Easy aerobic base on the stair this week for variety. Conversational the whole time.",
          warmup:"",
          exercises:[
            { name:"Stairmaster", sub:"easy, steady, level 7", prescr:"35 minutes easy" },
          ] },
        { id:"pump", title:"Pump · Delts & Arms", kind:"light", tag:"LIGHT",
          why:"Dumbbell laterals this week for variety, plus arms. Finish on the bike.",
          warmup:"Light, no heavy warmups needed.",
          exercises:[
            { name:"Dumbbell Lateral Raise", sub:"SIDE DELT, 3rd hit", prescr:"3 sets × 15-20 reps · 10 kg", tag:"priority" },
            { name:"Cable Rear-Delt Fly", sub:"", prescr:"3 sets × 15-20 reps · 7.5 kg", tag:"void" },
            { name:"Bicep Curl + Triceps superset", sub:"back to back", prescr:"3 rounds × 15 each" },
            { name:"Air Bike finish", sub:"easy", prescr:"15 minutes easy" },
          ] },
        { id:"run", title:"Run · Weekend Base", kind:"grind", tag:"GRIND",
          why:"A little longer than Week A. Same rule: keep it easy, protect the hip.",
          warmup:"Brisk walk 5 minutes before you start running.",
          exercises:[
            { name:"Run / Walk", sub:"easy effort, HR under 150", prescr:"Run 5 minutes, walk 1 minute. Repeat 6 times. (36 minutes total.)" },
          ] },
        { id:"rest", title:"Rest · Reset", kind:"rest", tag:"REST",
          why:"Recovery is training. Hip care, easy movement, reset for Week A.",
          warmup:"",
          exercises:[
            { name:"Mobility + hip care", sub:"glute / ham / quad stretch, back-extension to neutral", prescr:"15 minutes" },
            { name:"Easy walk", sub:"optional", prescr:"20-30 minutes" },
          ] },
      ],
    },
  },

  // how the grind grows across the 30 days (plain language)
  arc:[
    { wk:"Week 1 (A)", run:"Run 4 min / walk 1 min × 6 (30 min)", cond:"Stairmaster 35 min steady" },
    { wk:"Week 2 (B)", run:"Run 5 min / walk 1 min × 6 (36 min)", cond:"Air bike: 8 × 30 sec all-out" },
    { wk:"Week 3 (A)", run:"Run 8 min / walk 1 min × 4 (36 min)", cond:"Stair intervals: 4 × 3 min hard / 2 min easy" },
    { wk:"Week 4 (B)", run:"Run 40 min continuous (walk only if needed)", cond:"Air bike: 10 × 30 sec all-out" },
  ],

  /*GOALS_START*/
  goals: [
    { name:"Bench e1RM", start:67, goal:73, current:67, unit:"kg", source:"hevy", note:"Reclaim the ground lost in June. 100kg is a December goal.", kind:"accent" },
    { name:"Deadlift e1RM", start:143, goal:160, current:143, unit:"kg", source:"hevy", note:"Reclaim your 150×2 PR. Trap-bar 130→140 for 4×5. On the 200 track.", kind:"accent" },
    { name:"Pull-Ups", start:6, goal:10, current:6, unit:"reps", source:"hevy", note:"Strict, or band 16kg down to 8kg.", kind:"accent" },
    { name:"Continuous Run", start:5, goal:20, current:5, unit:"min", source:"manual", note:"Unbroken, easy, HR under 150. From run/walk to real running.", kind:"steel" },
    { name:"Stair 20-min Test", start:0, goal:12, current:0, unit:"% floors", source:"manual", note:"+10-15% floors OR same floors at 8-10 bpm lower HR.", kind:"steel" },
    { name:"Bodyweight", start:96, goal:93, current:96, unit:"kg", source:"manual", note:"Waist beats the scale. Aim ~-2-3cm at the navel, strength held.", kind:"good" },
  ],
  /*GOALS_END*/

  checkpoints: [
    { when:"DAY 15", t:"Bench 57.5-60kg moving clean for reps", d:"Strength holding under the cut" },
    { when:"DAY 15", t:"Trap-bar 135kg · pull-up +1 rep or band down a level", d:"Hinge and pull trending up" },
    { when:"DAY 15", t:"12-15 min continuous run · stair HR trending down", d:"The engine is responding" },
    { when:"DAY 15", t:"11-13 of 13 sessions logged", d:"Under 10 = the problem is showing up, not the program" },
    { when:"DAY 30", t:"Bench e1RM 73+ · Trap-bar 140 for 4×5", d:"Reclaimed and building" },
    { when:"DAY 30", t:"Pull-ups 9-10 or band at 8kg", d:"Near the 10 goal" },
    { when:"DAY 30", t:"20-min stair test PR · 20+ min continuous run", d:"Full engine battery" },
    { when:"DAY 30", t:"Waist re-measure + progress photo", d:"The visual proof" },
  ],

  nutrition: {
    protein:"180-200g", calFloor:"1800", water:"3-3.5L",
    head:"You cannot out-train a mouth you don't control.",
    rules:[
      "Protein first, every meal: ~40-50g × 4 meals. Hit the 180g floor before carbs or fat fill the budget. This is your muscle-retention insurance in a deficit.",
      "Park carbs around training: ~40-60g before and after hard sessions (Push, Pull, intervals, run). Go lower-carb on easy Zone-2 and rest days so you still cut.",
      "Calorie floor 1800. That's already a ~700-1000 kcal deficit. If lifts or energy crater, float up to 2000-2100, never grind lower.",
      "Water 3-3.5L/day, add ~0.5-1g sodium before any session over 40 min or interval day.",
      "Weigh weekly, adjust only after a 2-week stall. Not day to day.",
    ],
  },

  team: [
    { name:"DAVID GOGGINS", role:"Team Lead · Mind", calls:[
      "Theme of the month: BUILD THE FLOOR. You have a ceiling, not a floor.",
      "Never skip a GRIND day (Conditioning, Run). Miss an excite day, make it up.",
      "Approved the trap-bar hinge. 'Legs = stairmaster only' was fear, not a doctor.",
      "Track the streak, not the feeling. Log every session, hit the weekly sync.",
    ] },
    { name:"THE SCIENTIST", role:"Nippard · Physique", calls:[
      "Force-feed side + rear delts 3×/week. Your biggest visual lever, starved for 90 weeks.",
      "Two rotating weeks: A heavy/low-rep, B volume/pump. Same muscles, fresh stimulus.",
      "Warmups: warm up the first lift only, 1-2 sets. Not on every lift.",
      "Double progression: hit the top of the rep range on all sets, then +2.5kg.",
    ] },
    { name:"NICK BARE", role:"Hybrid · Engine", calls:[
      "Aerobic base first: stair and bike Zone-2, 120+ easy minutes a week.",
      "Conditioning is stair, air bike, or running. No carries, your call, respected.",
      "Intervals only from week 3 on the stair, week 2 on the bike. Base first.",
      "Go One More: never negotiate the whole session, only the next rep.",
    ] },
  ],

  approval: {
    verdict:"Approved: two rotating weeks so it stays exciting, the delt force-feed, the Zone-2 base, and the trap-bar hinge toward 200kg. Conditioning is stair, bike, and run only. Every lift has a weight, no guessing. Excitement is the reward. Consistency is the rent.",
    signoff:"— Goggins, Team Lead",
  },
};
