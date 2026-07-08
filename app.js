/* FORGE app — render + local persistence. No framework, no build. */
(function(){
  const D = window.DATA, $ = s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  const el = h=>{const t=document.createElement('template');t.innerHTML=h.trim();return t.content.firstChild;};
  const store = {
    get:(k,d)=>{try{return JSON.parse(localStorage.getItem('forge_'+k))??d}catch(e){return d}},
    set:(k,v)=>localStorage.setItem('forge_'+k,JSON.stringify(v)),
  };

  // header
  $('#h-title').innerHTML = `FORGE <span>· ${D.meta.codename}</span>`;
  $('#h-sub').textContent = D.meta.oneLiner;
  $('#h-approve').innerHTML = `✓ ${D.meta.approvedBy}`;
  $('#foot').innerHTML = `"${D.meta.creed}"<br>Block ${D.meta.block} · updated ${D.meta.generated}`;

  // ---- week toggle + cards ----
  const plan = $('#plan'), wk = $('#week');
  const toggle = el(`<div class="wktoggle"></div>`);
  Object.keys(D.weeks).forEach(k=>{
    const b = el(`<button data-k="${k}">${D.weeks[k].name} · ${D.weeks[k].tag}</button>`);
    b.addEventListener('click',()=>renderWeek(k));
    toggle.appendChild(b);
  });
  const blurb = el(`<p class="wkblurb"></p>`);
  plan.insertBefore(toggle, wk);
  plan.insertBefore(blurb, wk);

  function renderWeek(k){
    [...toggle.children].forEach(b=>b.classList.toggle('on',b.dataset.k===k));
    blurb.textContent = D.weeks[k].blurb;
    wk.innerHTML='';
    D.weeks[k].days.forEach((d,i)=>{
      const rows = d.exercises.map(e=>`
        <tr>
          <td class="name">${e.name}${e.tag?`<span class="pill ${e.tag==='void'?'void':''}">${e.tag}</span>`:''}
            ${e.sub?`<small>${e.sub}</small>`:''}
            ${e.wu?`<div class="wu">↑ ${e.wu}</div>`:''}</td>
          <td class="prescr">${e.prescr}</td>
        </tr>`).join('');
      const card = el(`
        <div class="card day ${d.kind} ${i===0?'open':''}">
          <div class="dhead">
            <span class="tagdot"></span>
            <span class="dtitle">${d.title}</span>
            <span class="dkind">${d.tag}</span>
            <span class="chev">▸</span>
          </div>
          <div class="dbody">
            ${d.why?`<p class="why">${d.why}</p>`:''}
            ${d.warmup?`<p class="wu" style="font-size:12px;color:var(--steel);margin:0 0 10px">${d.warmup}</p>`:''}
            <table class="ex"><thead><tr><th>Exercise</th><th>Prescription</th></tr></thead><tbody>${rows}</tbody></table>
          </div>
        </div>`);
      card.querySelector('.dhead').addEventListener('click',()=>card.classList.toggle('open'));
      wk.appendChild(card);
    });
  }
  renderWeek('A');
  $('#plan-note').textContent = "Two rotating weeks. Tap a day to expand.";

  // ---- volume & frequency ----
  const wf = D.frequencyWhy;
  $('#why-freq').innerHTML = `<div style="font-weight:700;font-size:15px;margin-bottom:10px">${wf.head}</div>`
    + wf.body.map(p=>`<p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:9px">${p}</p>`).join('');
  $('#vol-table').innerHTML = `<div style="font-weight:700;font-size:15px;margin-bottom:12px">Weekly sets per muscle</div>`
    + D.volume.map(v=>`
      <div class="cp" style="padding:9px 0">
        <div class="txt" style="flex:1"><div class="t" style="${v.hot?'color:var(--accent)':''}">${v.m}</div></div>
        <div class="bignum" style="font-size:15px;${v.hot?'color:var(--accent)':''}">${v.sets}${typeof v.sets==='number'?' sets':''}</div>
        <div class="when" style="color:var(--muted);min-width:52px;text-align:right">${v.freq}</div>
      </div>`).join('');

  // ---- how it grows (4-week arc) ----
  const arc = el(`<div class="card arc"></div>`);
  arc.innerHTML = `<div class="arc-h">How the grind grows over 30 days</div>` +
    D.arc.map(a=>`<div class="arc-row"><div class="wk">${a.wk}</div>
      <div class="ac"><span class="lbl">RUN</span> ${a.run}</div>
      <div class="ac"><span class="lbl">CARDIO</span> ${a.cond}</div></div>`).join('');
  plan.appendChild(arc);

  // ---- 30-day calendar ----
  const cal = $('#cal'), DAYS=30;
  const checks = new Set(store.get('cal',[]));
  const startDate = new Date(D.meta.generated+'T00:00:00');
  const today = new Date();
  const dayNow = Math.floor((today - startDate)/86400000)+1;
  let restTotal=0, sessTotal=0;
  for(let i=0;i<DAYS;i++){
    const type = D.weekPattern[i % D.weekPattern.length];
    const dt = D.dayTypes[type];
    const isRest = type==='rest';
    if(isRest) restTotal++; else sessTotal++;
    const done = checks.has(i);
    const wl = Math.floor(i/7)%2===0 ? 'A' : 'B';
    const cell = el(`
      <div class="cell ${dt.kind} ${isRest?'rest':''} ${done?'done':''} ${(i+1)===dayNow?'today':''}" data-i="${i}">
        <span class="d">${i+1}${isRest?'':` <b>${wl}</b>`}</span><span class="k">${dt.label}</span>
      </div>`);
    if(!isRest){
      cell.addEventListener('click',()=>{
        if(checks.has(i)){checks.delete(i);cell.classList.remove('done');}
        else{checks.add(i);cell.classList.add('done');}
        store.set('cal',[...checks]); updateProgress();
      });
    }
    cal.appendChild(cell);
  }
  function updateProgress(){
    const done=[...checks].filter(i=>D.weekPattern[i%7]!=='rest').length;
    $('#p-frac').textContent = `${done} / ${sessTotal}`;
    $('#p-fill').style.width = Math.round(done/sessTotal*100)+'%';
    const floorEl=$('#p-floor');
    floorEl.textContent = `${done} / 12 ${done>=12?'✓':''}`;
    floorEl.style.color = done>=12 ? 'var(--good)' : (done<6?'var(--accent)':'var(--ink)');
  }
  updateProgress();

  // ---- goals ----
  const gl = $('#goals-list');
  D.goals.forEach(g=>{
    const rng = (g.goal-g.start)||1;
    const pct = Math.max(0,Math.min(100, ((g.current-g.start)/rng)*100));
    const dir = g.goal<g.start ? 'down' : 'up';
    const pctDown = dir==='down' ? Math.max(0,Math.min(100,((g.start-g.current)/(g.start-g.goal))*100)) : pct;
    const shown = dir==='down'?pctDown:pct;
    gl.appendChild(el(`
      <div class="card goal">
        <div class="gt"><span class="n">${g.name}</span>
          <span class="v"><b>${g.current}</b> / ${g.goal} ${g.unit}</span></div>
        <div class="track"><div class="fill ${g.kind==='good'?'good':g.kind==='steel'?'steel':''}" data-w="${shown}"></div></div>
        <div class="cap"><span>start ${g.start}</span><span>${g.source==='hevy'?'auto from Hevy':'manual'} · ${Math.round(shown)}%</span></div>
        <div class="note">${g.note}</div>
      </div>`));
  });

  // ---- checkpoints ----
  const cpc = $('#checkpoints');
  const cpChecks = new Set(store.get('cp',[]));
  D.checkpoints.forEach((c,i)=>{
    const row = el(`
      <div class="cp">
        <input type="checkbox" class="chk" ${cpChecks.has(i)?'checked':''}>
        <div class="txt"><div class="t">${c.t}</div><div class="d">${c.d}</div></div>
        <div class="when">${c.when}</div>
      </div>`);
    row.querySelector('.chk').addEventListener('change',e=>{
      if(e.target.checked)cpChecks.add(i);else cpChecks.delete(i);
      store.set('cp',[...cpChecks]);
    });
    cpc.appendChild(row);
  });

  // ---- nutrition ----
  const n = D.nutrition;
  $('#nut-head').textContent = n.head;
  $('#nutrition-card').innerHTML =
    `<div class="rule"><span class="ic">◆</span><div><b>Protein ${n.protein}/day</b> · <b>Calorie floor ${n.calFloor}</b> · <b>Water ${n.water}</b></div></div>`
    + n.rules.map(r=>`<div class="rule"><span class="ic">→</span><div>${r}</div></div>`).join('');

  // ---- team ----
  const tl = $('#team-list');
  D.team.forEach(c=>tl.appendChild(el(`
    <div class="card coach"><div class="cn">${c.name}</div><div class="cr">${c.role}</div>
      <ul>${c.calls.map(x=>`<li>${x}</li>`).join('')}</ul></div>`)));
  $('#approval').innerHTML = `<div style="font-weight:700;margin-bottom:6px">Final ruling</div>
    <div style="font-size:13.5px;color:var(--muted);line-height:1.6">${D.approval.verdict}</div>
    <div style="margin-top:8px;font-weight:700;color:var(--accent)">${D.approval.signoff}</div>`;

  // ---- animate bars on view ----
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.fill[data-w]').forEach(f=>f.style.width=f.dataset.w+'%');
        io.unobserve(e.target);
      }
    });
  },{threshold:.2});
  $$('#goals-list .goal').forEach(x=>io.observe(x));

  // ---- nav active on scroll ----
  const links=[...$$('nav a')], secs=links.map(a=>$(a.getAttribute('href')));
  const nio=new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(e.isIntersecting){const id='#'+e.target.id;links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')===id));}
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  secs.forEach(s=>s&&nio.observe(s));
})();
