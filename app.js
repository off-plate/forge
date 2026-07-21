/* FORGE · PROVING GROUND — render from data.js. No framework, no build. */
(function () {
  const D = window.DATA;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- time math ---------- */
  const DAY = 86400000;
  const midnight = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
  const start = midnight(new Date(D.meta.start + "T00:00:00"));
  const end = midnight(new Date(D.meta.end + "T00:00:00"));
  const today = midnight(new Date());
  const dayNum = Math.floor((today - start) / DAY) + 1; // day 1 = Mon Jul 20
  const total = Math.floor((end - start) / DAY) + 1;    // 28 (four weeks)
  const inBlock = dayNum >= 1 && dayNum <= total;

  // Weeks: Mon-based from Jul 20. A on odd weeks, B on even.
  const firstMon = midnight(new Date("2026-07-20T00:00:00"));
  let weekNum;
  if (today < firstMon) weekNum = 1;
  else weekNum = Math.min(4, Math.floor((today - firstMon) / (7 * DAY)) + 1);
  const isA = weekNum % 2 === 1;
  const menuKey = isA ? "menuA" : "menuB";
  const killKey = isA ? "killA" : "killB";

  /* ---------- header ---------- */
  $("#week-chip").textContent = inBlock
    ? `WEEK ${weekNum} · ${isA ? "A" : "B"}`
    : today < start ? "STARTS JUL 18" : "BLOCK COMPLETE";

  /* ---------- hero ---------- */
  const dow = today.getDay();
  const todayCard = D.days.find((d) => d.dow.includes(dow));

  if (inBlock) {
    $("#hero-kicker").textContent = `PROVING GROUND · DAY ${dayNum} OF ${total} · WEEK ${weekNum}${isA ? "A" : "B"}`;
  } else if (today < start) {
    $("#hero-kicker").textContent = "PROVING GROUND · STARTS SATURDAY JUL 18";
  } else {
    $("#hero-kicker").textContent = "PROVING GROUND · 30 DAYS DONE";
  }

  if (inBlock && todayCard && todayCard.kind === "iron") {
    $("#hero-title").textContent = todayCard.title;
    const a = todayCard.anchors[0];
    $("#hero-number").textContent = a ? a.name : "";
    $("#hero-sub").textContent = a ? a.rule : "";
  } else if (inBlock && todayCard && todayCard.kind === "bonus") {
    $("#hero-title").textContent = "Bonus Day";
    $("#hero-number").textContent = "Easy engine or full rest";
    $("#hero-sub").textContent = todayCard.note || "";
  } else if (inBlock && todayCard && todayCard.kind === "rest") {
    $("#hero-title").textContent = "Rest";
    $("#hero-number").textContent = "Sleep before 1 AM";
    $("#hero-sub").textContent = todayCard.note || "";
  } else if (today < start) {
    $("#hero-title").textContent = D.meta.codename;
    $("#hero-number").textContent = "Day 0 · Set the baseline";
    $("#hero-sub").textContent = D.baseline;
  } else {
    $("#hero-title").textContent = D.meta.codename;
    $("#hero-number").textContent = "Block complete";
    $("#hero-sub").textContent = D.meta.sub;
  }

  $("#built").innerHTML = D.builtFrom
    .map((b) => `<div class="built-row"><b>${esc(b.k)}</b><span>${esc(b.v)}</span></div>`)
    .join("");

  /* ---------- scoreboard ---------- */
  $("#goals-grid").innerHTML = D.goals
    .map((g) => {
      const hasGoal = g.goal > 0;
      const desc = hasGoal && g.goal < g.start; // descending goal (bodyweight)
      const span = hasGoal ? Math.max(Math.abs(g.goal - g.start), 0.0001) : 1;
      const walked = desc ? g.start - g.current : g.current - g.start;
      const pct = hasGoal ? Math.max(0, Math.min(100, (walked / span) * 100)) : 0;
      const done = hasGoal && (desc ? g.current <= g.goal : g.current >= g.goal);
      const target = hasGoal ? `/ ${g.goal} ${esc(g.unit)}` : esc(g.unit);
      return `<article class="goal${done ? " done" : ""}">
        <div class="goal-name"><span>${esc(g.name)}</span><span class="goal-src">${g.source === "hevy" ? "AUTO" : "MANUAL"}</span></div>
        <div class="goal-nums"><span class="goal-current">${esc(g.current)}</span><span class="goal-target">${target}</span></div>
        <div class="bar"><i data-w="${pct.toFixed(1)}"></i></div>
        <p class="goal-note">${esc(g.note)}</p>
      </article>`;
    })
    .join("");

  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      document.querySelectorAll(".bar i").forEach((i) => (i.style.width = i.dataset.w + "%"))
    )
  );

  /* ---------- week ---------- */
  const DOW_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const order = [1, 2, 3, 4, 5, 6, 0];
  $("#week-sub").textContent = `Week ${weekNum} runs the ${isA ? "A" : "B"} menus. ` + $("#week-sub").textContent;

  $("#days").innerHTML = order
    .map((n) => {
      const d = D.days.find((x) => x.dow.includes(n));
      if (!d) return "";
      const isToday = inBlock && n === dow;
      const kindLabel = d.kind === "iron" ? "IRON" : d.kind === "bonus" ? "BONUS" : "REST";
      const anchors = d.anchors
        .map((a) => `<div class="anchor"><b>${esc(a.name)}</b><span>${esc(a.rule)}</span></div>`)
        .join("");
      const menu = (d[menuKey] || [])
        .map((m) => `<li>${esc(m)}</li>`)
        .join("");
      const kill = d[killKey] ? `<div class="kill">${esc(d[killKey])}</div>` : "";
      const note = d.note ? `<p class="day-note">${esc(d.note)}</p>` : "";
      return `<article class="day ${d.kind}${isToday ? " today" : ""}">
        <div class="day-when">
          <span class="day-dow">${DOW_NAMES[n]}</span>
          <span class="day-kind">${kindLabel}</span>
          ${d.time ? `<span class="day-time">${esc(d.time)}</span>` : ""}
          ${isToday ? `<span class="today-tag">Today</span>` : ""}
        </div>
        <div>
          <h3 class="day-title">${esc(d.title)}</h3>
          ${anchors}
          <ul class="menu">${menu}</ul>
          ${kill}
          ${note}
        </div>
      </article>`;
    })
    .join("");

  /* ---------- test day + deal ---------- */
  $("#testday-date").textContent = D.testday.date;
  $("#testday-list").innerHTML = D.testday.items.map((t) => `<li>${esc(t)}</li>`).join("");
  $("#baseline").textContent = D.baseline;
  $("#deal-list").innerHTML = D.deal.map((t) => `<li>${esc(t)}</li>`).join("");
  $("#fuel-line").textContent = D.nutrition.line;
  $("#fuel-sub").textContent = D.nutrition.sub;

  /* ---------- footer ---------- */
  $("#foot-left").textContent = `${D.meta.codename} · ${D.meta.start} to ${D.meta.end} · test day ${D.meta.testDay}`;
  $("#foot-right").textContent = `refreshed ${D.meta.generated} from Hevy`;

  /* ---------- theme toggle ---------- */
  const SUN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const MOON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const root = document.documentElement;
  const btn = document.querySelector("[data-theme-toggle]");
  let theme = "dark"; // war room default
  try { theme = localStorage.getItem("forge_theme") || theme; } catch (e) {}
  const apply = () => {
    root.setAttribute("data-theme", theme);
    btn.innerHTML = theme === "dark" ? SUN : MOON;
    btn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
  };
  btn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("forge_theme", theme); } catch (e) {}
    apply();
  });
  apply();
})();
