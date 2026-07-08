/* FORGE — 30-day hybrid plan. Approved by the team (Goggins lead, Nippard physique, Nick Bare engine).
   Auto-updated numbers live between the markers. Edit copy freely elsewhere. */
window.DATA = {
  meta: {
    athlete: "MICHAEL", block: "01", generated: "2026-07-08",
    codename: "BUILD THE FLOOR",
    oneLiner: "You already have a ceiling. You have no floor. No aerobic base, no consistency. Everything this month serves the floor.",
    approvedBy: "Approved by Goggins (Lead) · designed with Nippard (physique) + Nick Bare (engine)",
    creed: "Feelings don't get a vote. I bank today's deposit, I go one more, the streak stays alive.",
  },

  // ---- weekly template ----
  dayTypes: {
    push:  { label: "Push",        kind: "excite" },
    stair: { label: "Stair+Carry", kind: "grind"  },
    pull:  { label: "Pull",        kind: "excite" },
    z2:    { label: "Zone-2",      kind: "steady" },
    pump:  { label: "Pump",        kind: "light"  },
    run:   { label: "Run",         kind: "grind"  },
    rest:  { label: "Rest",        kind: "rest"   },
  },
  weekPattern: ["push","stair","pull","z2","pump","run","rest"],

  week: [
    { id:"push", title:"Monday · Push", kind:"excite", tag:"EXCITE",
      why:"Your favorite incline pressing + a bench you can PR, then the delt caps you actually see in the mirror. This is a day you show up for.",
      warmup:"Warm up ONLY here: 2 ramp sets on Incline DB (15kg×6, 25kg×4), 1 optional ramp on Bench (40kg×3). No warmup sets on anything after lift #2.",
      exercises:[
        { name:"Incline DB Press", sub:"anchor press · your most-used lift", prescr:"3×8-10 @ 32.5kg", wu:"2 ramp sets" },
        { name:"Flat Barbell Bench", sub:"serves the 100kg goal", prescr:"3×5-8 @ 57.5kg", wu:"1 ramp set" },
        { name:"Chest Fly (Machine)", sub:"isolation, no warmup", prescr:"3×12-15" },
        { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT — your #1 visual lever", prescr:"3-4×12-20 /arm @ 10kg", tag:"priority" },
        { name:"Cable Rear-Delt Fly / Reverse Pec Deck", sub:"REAR DELT — the true void", prescr:"3×15-20", tag:"void" },
        { name:"Triceps Pushdown", sub:"arms, no warmup", prescr:"3×10-15 @ 27.5kg" },
      ] },
    { id:"stair", title:"Tuesday · Stair + Carries", kind:"grind", tag:"GRIND",
      why:"No runner's high here. The stairmaster and heavy carries. This is the deposit. Nobody's watching, do it anyway. From week 3, the Zone-2 becomes intervals.",
      warmup:"5 min easy stair to warm up, then work.",
      exercises:[
        { name:"Stair Zone-2", sub:"conversational pace, HR 130-145, nasal breathing", prescr:"30→45 min" },
        { name:"Farmer Carries", sub:"grip + trunk, hip-safe, chest tall", prescr:"4×40m → 5×50m" },
        { name:"WEEK 3-4: swap Z2 for intervals", sub:"only if base has 2 weeks in it", prescr:"4-5 × 3min hard / 2min easy" },
      ] },
    { id:"pull", title:"Wednesday · Pull + Hinge", kind:"excite", tag:"EXCITE",
      why:"Lats, pull-ups, and the trap-bar hinge that's been missing. Straight-arm pulldown is your #1 lift, pull-ups are the goal. Fun and progress on the same day.",
      warmup:"Warm up ONLY here: 2 ramp sets on Trap-Bar DL (60kg×5, 100kg×3), 1 optional light band pull-up. No warmup sets after lift #2.",
      exercises:[
        { name:"Trap-Bar Deadlift", sub:"HINGE — SI-safe, serves the 200kg goal. Neutral spine, hip-led, kill the set on any pinch", prescr:"3×4-6 @ 130kg · RPE 7-8", tag:"void" },
        { name:"Band-Assisted / Weighted Pull-Up", sub:"toward 10 clean · cut band 16→12→8kg", prescr:"4×4-8", tag:"priority" },
        { name:"Seated Cable Row V-Grip", sub:"upper-back thickness", prescr:"3-4×8-12 @ 80kg" },
        { name:"Straight-Arm Lat Pulldown", sub:"your #1 lift · lat width", prescr:"3×12-15 @ 30kg" },
        { name:"Face Pull", sub:"REAR DELT 2nd weekly hit + shoulder health", prescr:"3×15-20", tag:"void" },
        { name:"Hammer Curl (Cable)", sub:"arms, no warmup", prescr:"3×10-15" },
      ] },
    { id:"z2", title:"Thursday · Zone-2 Base", kind:"steady", tag:"STEADY",
      why:"The connective tissue of the whole plan. Low-stress aerobic base that will NOT eat your gains. Supposed to feel almost too easy. That is the point.",
      warmup:"",
      exercises:[
        { name:"Stair Zone-2", sub:"conversational, HR 130-145. Hip cranky? bike or incline walk instead", prescr:"30→45 min" },
      ] },
    { id:"pump", title:"Friday · Delt & Arm Pump", kind:"light", tag:"LIGHT",
      why:"3rd delt hit of the week (that's how delts grow) plus arms. Light, fun, and you finish with a short Zone-2. Easy to show up for.",
      warmup:"Light, no heavy ramps needed.",
      exercises:[
        { name:"Single-Arm Cable Lateral Raise", sub:"SIDE DELT 3rd hit", prescr:"3×15-20", tag:"priority" },
        { name:"Cable Rear-Delt Fly", sub:"REAR DELT", prescr:"3×15-20", tag:"void" },
        { name:"Hammer Curl + Triceps Pushdown", sub:"superset the arms", prescr:"3×12-15 each" },
        { name:"Optional light bench technique", sub:"groove the pattern, not heavy", prescr:"3×3 @ easy" },
        { name:"Zone-2 finisher", sub:"stair or walk", prescr:"15 min" },
      ] },
    { id:"run", title:"Saturday · Weekend Run", kind:"grind", tag:"GRIND",
      why:"The one you don't want to do is the one that builds the December engine. Get off the machine. Run/walk to protect the hip and the rebuilding lungs. This is identity work.",
      warmup:"5 min brisk walk before you start running.",
      exercises:[
        { name:"Run / Walk progression", sub:"Zone-2, HR under 150. Hip talks louder than a whisper? back to run/walk", prescr:"Wk1 4:1×6 · Wk2 5:1×6 · Wk3 8:1×4-5 · Wk4 40-45min continuous" },
      ] },
    { id:"rest", title:"Sunday · Reset", kind:"rest", tag:"REST",
      why:"Recovery is training. Mobility, hip care, an easy walk. And check Datová schránka while you're at it.",
      warmup:"",
      exercises:[
        { name:"Mobility + hip care", sub:"glute/ham/quad stretch, back-extension to neutral", prescr:"15 min" },
        { name:"Easy walk", sub:"optional Zone-1", prescr:"20-30 min" },
      ] },
  ],

  /*GOALS_START*/
  goals: [
    { name:"Bench e1RM", start:67, goal:73, current:67, unit:"kg", source:"hevy", note:"Reclaim the ground lost in June. 100kg is a December goal.", kind:"accent" },
    { name:"Deadlift e1RM", start:143, goal:160, current:143, unit:"kg", source:"hevy", note:"Reclaim your 150×2 PR. Trap-bar 130→140 for 3×4-6. On the 200 track.", kind:"accent" },
    { name:"Pull-Ups", start:6, goal:10, current:6, unit:"reps", source:"hevy", note:"Strict, or band 16kg down to 8kg on 4×6-8.", kind:"accent" },
    { name:"Continuous Run", start:5, goal:20, current:5, unit:"min", source:"manual", note:"Unbroken, Zone-2, HR under 150. From run/walk to real running.", kind:"steel" },
    { name:"Stair 20-min Test", start:0, goal:12, current:0, unit:"% floors", source:"manual", note:"+10-15% floors OR same floors at 8-10 bpm lower HR.", kind:"steel" },
    { name:"Bodyweight", start:96, goal:93, current:96, unit:"kg", source:"manual", note:"Waist beats the scale. Aim ~-2-3cm at the navel, strength held.", kind:"good" },
  ],
  /*GOALS_END*/

  checkpoints: [
    { when:"DAY 15", t:"Bench 57.5kg moving clean for 6-8", d:"Strength holding under the cut" },
    { when:"DAY 15", t:"Trap-bar 135kg · pull-up +1 rep or band down a level", d:"Hinge and pull trending up" },
    { when:"DAY 15", t:"12-15 min continuous run · stair HR trending down", d:"The engine is responding" },
    { when:"DAY 15", t:"11-13 of 13 sessions logged", d:"Under 10 = the problem is showing up, not the program" },
    { when:"DAY 30", t:"Bench e1RM 73+ · Trap-bar 140 for 3×4-6", d:"Reclaimed and building" },
    { when:"DAY 30", t:"Pull-ups 9-10 or band at 8kg", d:"Near the 10 goal" },
    { when:"DAY 30", t:"20-min stair test · 20+ min continuous run · carry +50%", d:"Full engine battery" },
    { when:"DAY 30", t:"Waist re-measure + progress photo", d:"The visual proof" },
  ],

  nutrition: {
    protein:"180-200g", calFloor:"1800", water:"3-3.5L",
    head:"You cannot out-train a mouth you don't control.",
    rules:[
      "Protein first, every meal: ~40-50g × 4 meals. Hit the 180g floor before carbs or fat fill the budget. This is your muscle-retention insurance in a deficit.",
      "Park carbs around training: ~40-60g before and after hard sessions (Push, Pull, intervals, run). Go lower-carb on easy Zone-2 and rest days so you still cut.",
      "Calorie floor 1800. That's already a ~700-1000 kcal deficit. If lifts or energy crater, float up to 2000-2100, never grind lower.",
      "Water 3-3.5L/day, add ~0.5-1g sodium before any session over 40 min or interval day. Rebuilding lungs + dehydration = a garbage session.",
      "Weigh weekly, adjust only after a 2-week stall. Not day to day.",
    ],
  },

  team: [
    { name:"DAVID GOGGINS", role:"Team Lead · Mind", calls:[
      "Theme of the month: BUILD THE FLOOR. You have a ceiling, not a floor.",
      "Never skip a GRIND day (Tue, Sat). Miss an excite day, make it up.",
      "Approved the trap-bar hinge. 'Legs = stairmaster only' was fear, not a doctor.",
      "Track the streak, not the feeling. Log every session, hit the weekly sync.",
    ] },
    { name:"THE SCIENTIST", role:"Nippard · Physique", calls:[
      "Force-feed side + rear delts 2-3×/week. Your biggest visual lever, starved for 90 weeks.",
      "Keep your favorite incline + straight-arm lat as the emotional anchors.",
      "Warmups: 2 ramps on lift 1, 1 on lift 2, none after. Not on every lift.",
      "Double progression: hit the top of the rep range on all sets, then +2.5kg.",
    ] },
    { name:"NICK BARE", role:"Hybrid · Engine", calls:[
      "Build the aerobic base first: 120-150 Zone-2 min/week. It won't eat your gains.",
      "Break the zero-run streak. Get off the machine, run/walk to protect the hip.",
      "Intervals only from week 3, 1×/week max. Base first, sharpen second.",
      "Go One More: never negotiate the whole session, only the next rep.",
    ] },
  ],

  approval: {
    verdict:"Approved: the delt force-feed, the Zone-2 base as the spine of the month, and the trap-bar hinge toward 200kg. Overruled: no carries stacked on the 6-lift days, no conventional deadlift until it's earned. Excitement is the reward. Consistency is the rent. You don't get to feel like a savage on Push day if you skipped the deposit on Tuesday.",
    signoff:"— Goggins, Team Lead",
  },
};
