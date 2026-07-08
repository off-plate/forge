/* FORGE — all content. Synthesized from the 3-coach team analysis of 90 weeks of Hevy data. */
window.DATA = {
  meta: {
    callsign: "FORGE",
    subtitle: "GOGGINS PROTOCOL // 30-DAY FLOOR",
    athlete: "MICHAEL",
    block: "01",
    generated: "2026-07-08",
    stats: { age: 27, height_cm: 179, weight_kg: 96, bodyfat_est: "27-30%", clean_days: 60 },
  },

  mission: {
    codename: "THE 30-DAY FLOOR",
    theme: "You do not rise to the occasion. You fall to your floor. So we build a floor you cannot fall through.",
    creed: "I quit at my mental limit, not my physical one. Not today. Today I stay.",
  },

  // ---- the three coaches and their verdicts ----
  team: [
    {
      id: "goggins",
      name: "DAVID GOGGINS",
      role: "TEAM LEAD // MIND",
      accent: "amber",
      verdict: "You built a good-looking half of an athlete. Big upper body, real strength, and an engine that basically does not exist. Your consistency swings from 30 sessions to 8 because you go to war on day one and surrender by week three. Your bench is not stuck because of your chest. It is stuck because you quit at the mental limit. The one thing that makes or breaks the next 30 days is showing up on the days you feel like garbage.",
      decisions: [
        "Conditioning stops being optional. Legs and engine move from 4% to a minimum 25% of weekly volume.",
        "Feast/famine is dead. You are FORBIDDEN from adding extra sessions this month, even when week one feels unstoppable.",
        "The non-negotiable floor is 3. Twelve sessions minimum over 30 days. No exceptions, no 'life happened'.",
        "Bench gets attacked with volume in the 5-8 range, not ego singles. 100kg comes from the reps you hate.",
        "Log it the same day, honestly. Callus done or not done. The dashboard is your witness.",
      ],
      nonneg: "THE FLOOR IS 3. Minimum 3 sessions a week, 12 for the month. Not up for discussion, ever.",
    },
    {
      id: "nippard",
      name: "THE SCIENTIST",
      role: "HYPERTROPHY // PHYSIQUE",
      accent: "cyan",
      verdict: "You built a strong front on top of a soft, still-hidden midsection. Press and pull volume carry the show while side delts, rear delts, and upper back have been starved. That is good news: your fastest visual win is not more chest, it is width and shoulder cap. Build the V-taper illusion and your waist looks lean before it actually is. Prioritize side delts and upper-back width, hold everything else, and let the deficit reveal the abs on their own schedule.",
      decisions: [
        "Side delts: 16-20 hard sets/week, up from near zero. Biggest single change. Anchor: Incline Side Raise (lengthened lateral).",
        "Rear delt + upper back: 10-14 sets/week of face pulls and wide rows. Logged separately from lats.",
        "Chest and lats drop to maintenance (8-10 sets). Protect with heavy-ish work, do not grow in a cut.",
        "Arms hold at 6-8 sets each. They are not a weak point. Do not steal recovery from the delts.",
        "Isolation goes 0-1 RIR, compounds stay 1-2 RIR to protect the joints and hip while under-fueled.",
      ],
      nonneg: "16 side-delt sets every week, minimum. The lever your physique has missed for 90 weeks.",
    },
    {
      id: "hybrid",
      name: "THE HYBRID",
      role: "FUNCTIONAL // ENGINE",
      accent: "green",
      verdict: "You have a strength base most Spartan racers would kill for and an engine that is basically undocumented. A 160 deadlift with 4% lifetime conditioning means you are a strong man who gets folded by a 10k with 30 obstacles. Your December liability is not strength, it is that your aerobic base is too thin to keep your grip and legs alive across 90+ minutes. Fix the engine and the grip-under-fatigue and you podium your age group.",
      decisions: [
        "Aerobic base is the priority: 120-150 Zone-2 minutes/week, mostly stairmaster at a true conversational pace.",
        "The weekend session becomes a RUN, not stairs. Race day is on trail. Start 40 min easy, add 10%/week.",
        "Grip and carries every strength day: farmer + front-rack carries, dead hangs 3x/week. #2 race-day differentiator.",
        "Build the hinge within the hip limit: hip thrusts, light single-leg RDL, back extension to NEUTRAL only. No loaded rounding, ever.",
        "Cap true high-intensity intervals at 1x/week on a cut. Base first, sharpen later.",
      ],
      nonneg: "120+ Zone-2 minutes logged every week, like a lift. No base, no Spartan.",
    },
  ],

  // ---- top lifts: current vs goal ----
  lifts: [
    { name: "BENCH PRESS", metric: "e1RM", unit: "kg", current: 80, goal: 100, start: 52 },
    { name: "DEADLIFT", metric: "e1RM", unit: "kg", current: 160, goal: 200, start: 77 },
    { name: "PULL-UP", metric: "MAX", unit: "reps", current: 6, goal: 10, start: 2 },
    { name: "INCLINE SMITH", metric: "e1RM", unit: "kg", current: 83, goal: 95, start: 34 },
    { name: "CHEST PRESS", metric: "e1RM", unit: "kg", current: 93, goal: 105, start: 50 },
    { name: "CABLE ROW", metric: "e1RM", unit: "kg", current: 110, goal: 120, start: 62 },
  ],

  // ---- the 90-week diagnostic ----
  diagnostic: {
    span: "OCT 2024 - JUN 2026",
    training_days: 376,
    distribution: [
      { label: "VERT PULL", pct: 25, tone: "ok" },
      { label: "HORIZ PRESS", pct: 22, tone: "ok" },
      { label: "ARMS", pct: 16, tone: "ok" },
      { label: "HORIZ PULL", pct: 12, tone: "ok" },
      { label: "SHOULDERS", pct: 8, tone: "warn" },
      { label: "CONDITIONING", pct: 4, tone: "crit" },
      { label: "LEGS", pct: 4, tone: "crit" },
      { label: "HINGE", pct: 2, tone: "crit" },
    ],
    readout: "Bodybuilder upper body, almost no engine. Conditioning, legs and hinge are the whole problem in three numbers.",
  },

  // ---- goals by domain ----
  goals: [
    { domain: "STRENGTH", accent: "cyan", items: [
      "Bench 100kg", "Deadlift 200kg (Dec)", "10 clean pull-ups" ] },
    { domain: "PHYSIQUE", accent: "cyan", items: [
      "16+ side-delt sets/week x4", "Incline side raise 10kg -> 12.5kg", "Waist -2cm at navel", "Protein 165g/day floor" ] },
    { domain: "ENGINE", accent: "green", items: [
      "120+ Zone-2 min/week", "Stair test +12-15% floors", "Farmer carry 2x32kg / 60m", "60s unbroken dead hang", "Run 40 -> 60 min continuous" ] },
    { domain: "MIND", accent: "amber", items: [
      "3-session floor / 12 per month", "Daily Callus, logged", "No bonus sessions, cap the ceiling" ] },
  ],

  // ---- the Callus protocol (Goggins signature, climbs over 30 days) ----
  callus: [
    { days: "01-07", cold: "60s", hang: "2:00", plank: "60s", engine: "-", },
    { days: "08-14", cold: "90s", hang: "3:00", plank: "90s", engine: "10 min silent Z2", },
    { days: "15-21", cold: "2:00", hang: "4:00", plank: "2:00", engine: "15 min silent", },
    { days: "22-30", cold: "2-3m", hang: "5:00", plank: "2:30", engine: "20 min silent", },
  ],

  // ---- weekly template ----
  week: [
    { day: "D1", title: "PRESS & DELTS", tag: "STRENGTH", accent: "cyan", blocks: [
      "Warmup ramp -> Bench, heavy top set + 3x5-8 volume",
      "Incline press (maintenance)",
      "Smith Shoulder Press 3x8-10",
      "Incline Side Raise 4x12-20  // PRIORITY",
      "Rear delt + triceps",
      "FINISH: push-up Callus + 15 min farmer carries" ] },
    { day: "D2", title: "ENGINE + HINGE", tag: "Z2", accent: "green", blocks: [
      "Stair Zone-2, 35-45 min conversational",
      "Hip thrust 3x10-12",
      "Back extension to NEUTRAL 3x12",
      "KB swing (if SI ok) + dead hang" ] },
    { day: "D3", title: "PULL & DEADLIFT", tag: "STRENGTH", accent: "cyan", blocks: [
      "Warmup ramp -> Deadlift 4x3-4",
      "Pull-ups PRIORITY, toward 10",
      "Wide rows (upper-back width)",
      "Face pull + one-arm pulldown",
      "Biceps",
      "FINISH: carries + dead-hang Callus" ] },
    { day: "D4", title: "THRESHOLD + SHOULDERS", tag: "INTERVALS", accent: "green", blocks: [
      "Stair intervals 4-6 x 3 min hard / 2 min easy",
      "Incline Side Raise 3x15-20",
      "Rear delt + lateral pump",
      "Arms pump + push-up Callus" ] },
    { day: "WK", title: "LONG AEROBIC", tag: "BASE", accent: "green", blocks: [
      "RUN 40 -> 60 min easy continuous (build 10%/wk)",
      "Hip prehab + glute/ham/quad mobility",
      "Optional: swap for long stair if legs are cooked" ] },
  ],

  // ---- 4-week escalation ----
  phases: [
    { wk: "WEEK 1", sub: "ESTABLISH THE FLOOR", z2: "35 min", run: "40 min", intervals: "4 rounds", callus: "Tier 1" },
    { wk: "WEEK 2", sub: "ADD LOAD", z2: "40 min", run: "45 min", intervals: "5 rounds", callus: "Tier 2" },
    { wk: "WEEK 3", sub: "RACE-SPECIFIC", z2: "45 min", run: "50 min", intervals: "6 rounds + carries", callus: "Tier 3" },
    { wk: "WEEK 4", sub: "PEAK + RETEST", z2: "45 min +1 lvl", run: "60 min", intervals: "6 @ +1 lvl", callus: "Tier 4 + benchmark" },
  ],
};
