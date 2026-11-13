// DUNE interactive app — vanilla JS
(function(){
"use strict";
const sagaData={
lynch1984:{title:"Dune (1984)",year:"1984 • Film • 2h 17m",director:"Director: David Lynch • Dino De Laurentiis",book:"Adapts: Dune (1965) — the whole novel, heavily condensed",story:"Paul Atreides travels to Arrakis, his family is betrayed, he joins the Fremen and rises against the Harkonnens — all in one film.",beats:"Gom jabbar test • Move to Arrakis • Harkonnen attack • Desert escape • Fremen alliance • Final duel and rain on Arrakis.",ending:"Paul defeats Feyd-Rautha and is recognised as Emperor; rain falls on Arrakis — a change invented for this film.",diff:"Condenses years into months, adds 'weirding modules' (sound weapons) not in the book, and makes Paul literally bring rain, which the book does not."},
miniseries2000:{title:"Frank Herbert's Dune (2000)",year:"2000 • TV Miniseries • 3 episodes",director:"Creator: John Harrison • Sci Fi Channel",book:"Adapts: Dune (1965) — full novel, more faithfully paced",story:"The same core story as the novel, told over three nights with more politics, more Irulan, and more time in the desert.",beats:"Betrayal of House Atreides • Paul and Jessica survive • Life among the Fremen • Spice agony • Battle for Arrakeen.",ending:"Paul becomes Emperor and marries Irulan for politics while Chani remains his true partner.",diff:"Expands Princess Irulan's role far beyond the book and keeps the weirding way as martial art rather than a device."},
children2003:{title:"Frank Herbert's Children of Dune (2003)",year:"2003 • TV Miniseries • 3 episodes",director:"Director: Greg Yaitanes • Sci Fi Channel",book:"Adapts: Dune Messiah + Children of Dune",story:"Paul's empire strains under jihad and conspiracy. Years later his children Leto II and Ghanima face a plot to seize the throne.",beats:"Conspiracy against Paul • Paul's exile • Alia's dangerous regency • Leto II's transformation begins.",ending:"Leto II accepts a destiny no one else dares — merging with sandtrout — setting up his 3,500-year reign.",diff:"Combines two novels, ages up the twins for screen, and streamlines Alia's possession storyline."},
partone2021:{title:"Dune: Part One (2021)",year:"2021 • Film • 2h 35m • PG-13",director:"Director: Denis Villeneuve",book:"Adapts: Dune (1965) — first half only",story:"House Atreides is ordered to take over Arrakis. It is a trap. Paul begins having visions of a desert girl and a holy war fought in his name.",beats:"Gom jabbar • Arrival on Arrakis • Spice harvester rescue • Harkonnen + Sardaukar attack • Death of Duke Leto • Escape into the deep desert.",ending:"Paul and Jessica are taken in by the Fremen after Paul kills Jamis in a duel. The story pauses — Paul has lost everything except his mother and his visions.",diff:"Lady Jessica gets a stronger focus, Liet-Kynes is gender-swapped, and the film ends mid-novel to give the politics room to breathe."},
parttwo2024:{title:"Dune: Part Two (2024)",year:"2024 • Film • 2h 46m • PG-13",director:"Director: Denis Villeneuve",book:"Adapts: Dune (1965) — second half",story:"Paul lives with the Fremen, learns their ways, falls in love with Chani, and must decide whether to become the messiah they believe he is — knowing it will unleash war.",beats:"Paul rides a sandworm • Love with Chani • Gurney returns • Feyd-Rautha's arena on Giedi Prime • Water of Life • Assault on Arrakeen.",ending:"Paul drinks the Water of Life, defeats Feyd-Rautha, forces the Emperor to yield, and demands Irulan's hand. Chani, heartbroken, leaves into the desert. Paul orders the holy war to begin — 'Send them to paradise.'",diff:"Chani opposes Paul's path (in the book she supports him), Alia is unborn and speaks from the womb, and the ending is deliberately darker and more warning than triumph."},
prophecy2024:{title:"Dune: Prophecy (2024– )",year:"2024– • HBO Series • Season 1: 6 episodes",director:"Showrunners: Diane Ademu-John / Alison Schapker",book:"Prequel — inspired by Sisterhood of Dune by Brian Herbert & Kevin J. Anderson",story:"About 10,000 years before Paul, sisters Valya and Tula Harkonnen build a secret sisterhood that will become the Bene Gesserit — breeding, spying and steering humanity from the shadows.",beats:"Aftermath of the Butlerian Jihad against thinking machines • Founding of the Sisterhood on Rossak • Court intrigue on Salusa Secundus • A mysterious soldier, Desmond Hart, gains terrifying power.",ending:"Season 1 ends with the Sisterhood fractured and its secrets exposed — the long game that will one day create Paul has only just begun.",diff:"Original prequel story, not a direct adaptation; explains origins the original novels only hint at."},
partthree:{title:"Dune: Part Three — UPCOMING",year:"Scheduled: December 18, 2026 • UNRELEASED — not yet out",director:"Director: Denis Villeneuve",book:"Adapts: Dune Messiah (1969)",story:"Twelve years later. Paul is Emperor, but his jihad has killed billions. A conspiracy of Bene Gesserit, Spacing Guild, Tleilaxu and Princess Irulan plots to destroy him. Chani, Alia and a returned face from the past are at the centre.",beats:"Expected: Paul torn between empire and Chani • Alia as regent and priestess • A ghola with Duncan Idaho's face • Paul's terrible choice.",ending:"Not released — no ending to spoil yet. In the book, the ending is tragic and humbling: Paul gives up power rather than becoming a tyrant forever.",diff:"Based on advance reporting and the novel Dune Messiah; details may change before release. Marked clearly as upcoming."},
jodorowsky:{title:"Jodorowsky's Dune — The Film That Never Was",year:"1970s • Unmade project • Bonus",director:"Director: Alejandro Jodorowsky",book:"Would have adapted: Dune (1965) — very loosely",story:"A legendary, wildly ambitious attempt with art by H.R. Giger and Moebius, music by Pink Floyd, and Salvador Dalí as the Emperor. Studios pulled funding before filming.",beats:"Pre-production art and storyboards became hugely influential on later sci-fi • Documented in the 2013 documentary Jodorowsky's Dune.",ending:"Never filmed — there is no ending. Its designs echoed into Alien, Star Wars-era sci-fi and beyond.",diff:"Jodorowsky planned major changes, including a very different, mystical ending for Paul."}
};
const timelineData={
t1:{title:"10,191 AG — The Trap Is Set",body:"The Emperor orders House Atreides to leave ocean-world Caladan and take over Arrakis from the brutal Harkonnens. Everyone knows it is a trap — the Atreides must go anyway. Paul, 15, is tested by the Bene Gesserit with the gom jabbar."},
t2:{title:"10,191 AG — The Fall of House Atreides",body:"With inside traitor Dr. Yueh and Imperial Sardaukar disguised as Harkonnens, Arrakeen falls in one night. Duke Leto dies. Paul and Jessica escape into the desert — presumed dead."},
t3:{title:"10,191–10,193 AG — Muad'Dib Rises",body:"Paul and Jessica live with the Fremen. Paul learns desert power, rides a sandworm, chooses the Fremen name Muad'Dib, and falls in love with Chani. His spice visions grow terrifying: a jihad in his name."},
t4:{title:"10,193 AG — Emperor Falls",body:"Paul, having taken the Water of Life and survived, leads Fremen and sandworms against the Emperor at Arrakeen, kills Feyd-Rautha in single combat, and takes the Imperial throne."},
t5:{title:"10,193–10,205 AG — The Jihad",body:"Fremen legions spread Paul's religion across the universe. Billions die. Paul rules as Emperor Muad'Dib but is trapped by the myth he created — this is Herbert's warning about charismatic heroes."},
t6:{title:"10,207 AG — Dune Messiah: Conspiracy",body:"A conspiracy offers Paul a ghola — a regrown Duncan Idaho named Hayt. Chani dies giving birth to twins Leto II and Ghanima. Blinded Paul walks into the desert, as Fremen custom demands."},
t7:{title:"10,210 AG — Children of Dune",body:"Alia rules as regent but is possessed by the memory of Baron Harkonnen inside her. Leto II escapes, merges with sandtrout, and gains superhuman strength and near-immortality."},
t8:{title:"10,210–13,710 AG — God Emperor (3,500 Years)",body:"Leto II rules as a human-sandworm hybrid for 3,500 years, enforcing peace and breeding humanity to survive and scatter — his 'Golden Path'. He controls all spice and all travel."},
t9:{title:"~13,710 AG — The Scattering",body:"Leto II allows his assassination, releasing humanity. People scatter to unknown space beyond any prescient control. New sandworms on Arrakis each carry a pearl of his consciousness."},
t10:{title:"~15,200 AG — Heretics of Dune",body:"1,500 years later: the Bene Gesserit, a new Duncan Idaho ghola, and a girl named Sheeana who can command worms are central, as returnees from the Scattering bring a terrifying enemy — the Honored Matres."},
t11:{title:"~15,250 AG — Chapterhouse: Dune",body:"The Bene Gesserit turn planet Chapterhouse into a new Arrakis. Their leader Odrade gambles everything on a plan involving Duncan, Sheeana and a baby worm. Herbert's final novel ends on a cliffhanger."},
t12:{title:"Before Everything — Prophecy Era (~10,000 years before Paul)",body:"After humanity's war against thinking machines (the Butlerian Jihad), Valya and Tula Harkonnen found the Sisterhood that becomes the Bene Gesserit and begins the breeding program that, 10,000 years later, produces Paul."}
};
const cycleData={
c1:{title:"1. The Maker — Sandworm / Shai-Hulud",body:"Giant sandworms, called Shai-Hulud by the Fremen, live deep in the desert. Their larvae (sandtrout) encase water underground. Where worms live, spice is created."},
c2:{title:"2. Spice Blow",body:"Deep underground, a pocket of spice erupts to the surface in a violent 'spice blow', scattering orange melange across the sand — and attracting a worm."},
c3:{title:"3. The Harvester Race",body:"Massive harvester factories crawl the sand scooping spice while spotters watch for wormsign. When a worm comes, a carryall must airlift the harvester away in seconds or it is swallowed whole."},
c4:{title:"4. Melange — The Spice",body:"Refined spice extends life, expands consciousness and, in high doses, gives glimpses of the future. It is the most valuable substance in the universe — and withdrawal is fatal for addicts."},
c5:{title:"5. Guild Navigator / Prescience",body:"Spacing Guild Navigators breathe spice gas constantly, mutating so they can see a safe path through folded space. Without spice, no interstellar travel. That is why Arrakis — the only source — controls everything."}
};
// Saga tabs
const sagaPanel=document.getElementById('saga-detail');
document.querySelectorAll('[data-saga]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-saga]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=sagaData[btn.dataset.saga]; if(!d||!sagaPanel) return;
  sagaPanel.innerHTML=`<h3>${d.title}</h3><p class="meta">${d.year} • ${d.director}<br>${d.book}</p><p><strong>Story in plain words:</strong> ${d.story}</p><p><strong>Key beats:</strong> ${d.beats}</p><div class="spoiler"><div class="spoiler-content"><p><strong>Ending:</strong> ${d.ending}</p></div></div><p><strong>Book differences:</strong> ${d.diff}</p>`;
 });
});
// Timeline
const tlPanel=document.getElementById('timeline-detail');
document.querySelectorAll('[data-timeline]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-timeline]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=timelineData[btn.dataset.timeline]; if(!d||!tlPanel) return;
  tlPanel.innerHTML=`<h3>${d.title}</h3><p>${d.body}</p>`;
 });
});
// Spice cycle
const cyclePanel=document.getElementById('cycle-detail');
document.querySelectorAll('[data-cycle]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-cycle]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=cycleData[btn.dataset.cycle]; if(!d||!cyclePanel) return;
  cyclePanel.innerHTML=`<h3>${d.title}</h3><p>${d.body}</p>`;
 });
});
// Character search + filter
const charSearch=document.getElementById('char-search');
const charFilter=document.getElementById('char-filter');
function filterChars(){
 const q=(charSearch?charSearch.value:'').toLowerCase();
 const f=charFilter?charFilter.value:'all';
 document.querySelectorAll('.char-card').forEach(card=>{
  const text=card.textContent.toLowerCase();
  const faction=card.dataset.faction||'';
  const show=(!q||text.includes(q))&&(f==='all'||faction.includes(f));
  card.classList.toggle('hidden',!show);
 });
}
if(charSearch) charSearch.addEventListener('input',filterChars);
if(charFilter) charFilter.addEventListener('change',filterChars);
// Glossary search
const glossSearch=document.getElementById('glossary-search');
if(glossSearch){ glossSearch.addEventListener('input',()=>{
 const q=glossSearch.value.toLowerCase();
 document.querySelectorAll('.gloss-item').forEach(item=>{ item.classList.toggle('hidden',!item.textContent.toLowerCase().includes(q)); });
});}
// Spoiler toggle
const spoilerToggle=document.getElementById('spoiler-toggle');
function applySpoilers(){ document.body.classList.toggle('spoilers-off', !(spoilerToggle&&spoilerToggle.checked)); }
if(spoilerToggle){ spoilerToggle.addEventListener('change',applySpoilers); applySpoilers(); }
// Mobile menu
const menuBtn=document.getElementById('menu-btn'); const mainNav=document.getElementById('main-nav');
if(menuBtn&&mainNav){ menuBtn.addEventListener('click',()=>{ const open=mainNav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',open?'true':'false'); }); mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open'))); }
// Set default panels
const firstSaga=document.querySelector('[data-saga="partone2021"]'); if(firstSaga) firstSaga.click();
const firstTl=document.querySelector('[data-timeline="t1"]'); if(firstTl) firstTl.click();
const firstCycle=document.querySelector('[data-cycle="c1"]'); if(firstCycle) firstCycle.click();
})();

// ===== V2: transitions, Story Mode, quiz, dust, count-ups =====
(function(){
"use strict";
const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Scroll progress + header shrink
const prog=document.getElementById('scroll-progress'); const header=document.querySelector('header.site');
function onScroll(){ const st=window.scrollY||0; const max=document.documentElement.scrollHeight-window.innerHeight; if(prog) prog.style.width=(max>0?(st/max*100):0)+'%'; if(header) header.classList.toggle('scrolled',st>40); }
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
// Reveal on scroll (staggered)
const revealEls=document.querySelectorAll('.card,.char-card,.stat,.flow-step,.detail-panel,.litany,.sec-head,.gloss-item');
revealEls.forEach((el,i)=>{ el.classList.add('reveal'); el.style.transitionDelay=((i%4)*70)+'ms'; });
if('IntersectionObserver' in window && !reduced){ const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.1}); revealEls.forEach(el=>io.observe(el)); } else { revealEls.forEach(el=>el.classList.add('in')); }
// Active nav highlighting
const navLinks=document.querySelectorAll('nav.main a[href^="#"]');
if('IntersectionObserver' in window){ const secIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)); } }); },{rootMargin:'-40% 0px -55% 0px'}); document.querySelectorAll('section[id]').forEach(s=>secIO.observe(s)); }
// Animated detail panels: re-trigger on any tab/timeline/cycle click
function reanimate(panel){ if(!panel) return; panel.classList.remove('panel-in'); void panel.offsetWidth; panel.classList.add('panel-in'); }
document.querySelectorAll('[data-saga]').forEach(b=>b.addEventListener('click',()=>reanimate(document.getElementById('saga-detail'))));
document.querySelectorAll('[data-timeline]').forEach(b=>b.addEventListener('click',()=>reanimate(document.getElementById('timeline-detail'))));
document.querySelectorAll('[data-cycle]').forEach(b=>b.addEventListener('click',()=>reanimate(document.getElementById('cycle-detail'))));
// Count-up stats
function countUp(el){ const raw=el.textContent.trim(); const m=raw.match(/^([\d,]+)(.*)$/); if(!m) return; const target=parseInt(m[1].replace(/,/g,''),10); const suffix=m[2]||''; if(reduced||isNaN(target)) return; const t0=performance.now(),dur=1500; function tick(t){ const p=Math.min(1,(t-t0)/dur); const v=Math.round(target*(1-Math.pow(1-p,3))); el.textContent=v.toLocaleString('en-US')+suffix; if(p<1) requestAnimationFrame(tick); } requestAnimationFrame(tick); }
const statNums=document.querySelectorAll('.stat b');
if('IntersectionObserver' in window){ const sIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ countUp(e.target); sIO.unobserve(e.target); } }); },{threshold:.4}); statNums.forEach(el=>sIO.observe(el)); }
// Hero dust canvas — slow matte spice motes
const canvas=document.getElementById('dust');
if(canvas && !reduced){ const ctx=canvas.getContext('2d'); const hero=canvas.parentElement; let W,H,parts=[],running=true;
 function size(){ W=canvas.width=hero.clientWidth; H=canvas.height=hero.clientHeight; }
 function make(){ parts=[]; const n=Math.min(90,Math.floor(W/14)); for(let i=0;i<n;i++) parts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.4,s:Math.random()*.25+.06,d:Math.random()*Math.PI*2,o:Math.random()*.5+.15}); }
 function frame(){ if(running){ ctx.clearRect(0,0,W,H); parts.forEach(p=>{ p.y-=p.s; p.x+=Math.sin(p.d+=.002)*.15; if(p.y<-4){p.y=H+4;p.x=Math.random()*W;} ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fillStyle='rgba(166,141,91,'+p.o+')'; ctx.fill(); }); } requestAnimationFrame(frame); }
 size(); make(); frame(); window.addEventListener('resize',()=>{size();make();});
 if('IntersectionObserver' in window){ new IntersectionObserver(es=>{running=es[0].isIntersecting;}).observe(hero); }
}
// ===== STORY MODE =====
const scenes=[
{k:"Prologue — Why Everything Happens",t:"One Planet. One Substance.",b:"Far in the future, humanity spreads across thousands of worlds — but every ship needs spice melange to travel safely, and spice exists on exactly one planet: Arrakis. Control the desert, and you control the universe. Everything you are about to see — every betrayal, marriage and war — happens because of that single fact.",f:"The spice must flow"},
{k:"Chapter I — Caladan, 10,191 AG",t:"The Test",b:"On the ocean world Caladan, 15-year-old Paul Atreides is woken before dawn and tested by an ancient Bene Gesserit Reverend Mother: a poison needle at his throat, his hand in a box of pure pain. Endure, and prove he is human — pull away, and die. Paul endures. Something about this boy is not ordinary.",f:"The gom jabbar • Paul Atreides, age 15"},
{k:"Chapter II — The Gift That Is a Trap",t:"Arrakis Changes Hands",b:"The Emperor orders House Atreides to leave Caladan and take over Arrakis from their mortal enemies, House Harkonnen. It looks like promotion. Everyone — including Duke Leto, Paul's father — knows it is a trap. Honour and orders leave them no choice. They go to the desert to spring it on their own terms.",f:"House Atreides • House Harkonnen • The Emperor's design"},
{k:"Chapter III — One Night",t:"The Fall of House Atreides",b:"The trap closes in a single night: a traitor inside the house, shields down, and the Emperor's own Sardaukar — the finest killers alive — wearing Harkonnen colours. Duke Leto dies striking back with a poisoned tooth. Paul and his mother Jessica escape into the storm and the deep desert, given up for dead.",b2:"",f:"Betrayed by Dr. Yueh • Sardaukar in disguise"},
{k:"Chapter IV — The Deep Desert",t:"The Fremen",b:"In the desert, survival belongs to the Fremen — the planet's hidden people, tougher than any army and dreaming of a green Arrakis. Led by Stilgar, they test the two refugees. Jessica proves herself a Reverend Mother. Paul proves something stranger: he knows their ways without being taught. They begin to whisper a name from prophecy: Lisan al-Gaib — the Voice from the Outer World.",f:"Sietch Tabr • Stilgar • Water discipline"},
{k:"Chapter V — Muad'Dib",t:"Paul Becomes a Legend",b:"Paul takes the Fremen name Muad'Dib, learns to ride a sandworm — a creature longer than a starship — and falls in love with the warrior Chani. His raids stop spice production cold, and the whole empire feels it. But his visions show him the price: a holy war in his name, billions dead, no matter which path he chooses.",f:"He rode the maker • Chani • The visions begin"},
{k:"Chapter VI — Arrakeen",t:"The Duel for the Throne",b:"Paul survives the Water of Life and wakes able to see past and future. Riding sandworms, his Fremen break the Emperor's army at Arrakeen. Paul faces the Harkonnen heir Feyd-Rautha in a knife duel for the future of humanity — and wins. The Emperor abdicates. Paul Atreides takes the throne.",f:"Feyd-Rautha falls • Shaddam IV yields • A new Emperor"},
{k:"Interlude — Herbert's Warning",t:"This Is Not a Triumph",b:"Frank Herbert insisted Dune is a warning, not a celebration. Paul is likeable, gifted and sincere — and his followers still unleash a jihad that kills billions. 'No more terrible disaster,' Herbert wrote, than a hero backed by faith. Watch Paul win everything, and ask what it cost everyone else.",f:"The point of Dune • Beware charismatic heroes"},
{k:"Epilogue — Coming December 18, 2026",t:"Part Three: Messiah",b:"Twelve years later, in Dune Messiah — the book behind the upcoming Dune: Part Three — Emperor Paul is worshipped and hated in equal measure. Old powers conspire against him with a gift: a familiar face, regrown. At the centre stand Chani, his sister Alia, and Paul's final choice: hold absolute power, or walk away from it into the desert.",f:"Dune: Part Three • Adapting Dune Messiah (1969)"},
{k:"The End — For Now",t:"The Desert Is Yours",b:"You now hold the whole shape of Dune: one planet, one substance, one boy, one warning. Explore the rest of this archive — the films and series scene by scene, the 18 lives that drive the story, the houses, the timeline across 5,000 years, and the quiz that decides which House claims you.",f:"Explore ↓ Characters • Screen Saga • Timeline • Quiz"}
];
const sm=document.getElementById('story-mode');
if(sm){
 const kEl=document.getElementById('sm-kicker'),tEl=document.getElementById('sm-title'),bEl=document.getElementById('sm-body'),fEl=document.getElementById('sm-fact'),bar=document.getElementById('sm-bar'),counter=document.getElementById('sm-counter'),stage=document.getElementById('sm-stage'),dotsWrap=document.getElementById('sm-dots'),nextBtn=document.getElementById('sm-next'),prevBtn=document.getElementById('sm-prev'),autoBtn=document.getElementById('sm-auto');
 let idx=0,timer=null;
 scenes.forEach((s,i)=>{ const d=document.createElement('button'); d.className='sm-dot'; d.type='button'; d.setAttribute('aria-label','Go to scene '+(i+1)); d.addEventListener('click',()=>go(i)); dotsWrap.appendChild(d); });
 const dots=dotsWrap.querySelectorAll('.sm-dot');
 function render(){ const s=scenes[idx]; kEl.textContent=s.k; tEl.textContent=s.t; bEl.textContent=s.b; fEl.textContent=s.f; counter.textContent='Scene '+(idx+1)+' / '+scenes.length; bar.style.width=((idx+1)/scenes.length*100)+'%'; dots.forEach((d,i)=>{ d.classList.toggle('on',i===idx); d.classList.toggle('done',i<idx); }); prevBtn.disabled=idx===0; prevBtn.style.opacity=idx===0?.4:1; nextBtn.textContent=idx===scenes.length-1?'Finish ✕':'Next →'; stage.classList.remove('enter'); void stage.offsetWidth; stage.classList.add('enter'); }
 function go(i){ idx=Math.max(0,Math.min(scenes.length-1,i)); render(); }
 function open(){ sm.hidden=false; document.body.style.overflow='hidden'; go(0); }
 function close(){ sm.hidden=true; document.body.style.overflow=''; stopAuto(); }
 function stopAuto(){ if(timer){ clearInterval(timer); timer=null; autoBtn.textContent='Auto ▶'; } }
 autoBtn.addEventListener('click',()=>{ if(timer){ stopAuto(); } else { autoBtn.textContent='Pause ❚❚'; timer=setInterval(()=>{ if(idx>=scenes.length-1){ stopAuto(); return; } go(idx+1); },9000); } });
 nextBtn.addEventListener('click',()=>{ if(idx>=scenes.length-1){ close(); const q=document.getElementById('saga'); if(q) q.scrollIntoView({behavior:'smooth'}); } else go(idx+1); });
 prevBtn.addEventListener('click',()=>go(idx-1));
 document.getElementById('sm-close').addEventListener('click',close);
 const openBtn=document.getElementById('open-story'); if(openBtn) openBtn.addEventListener('click',open);
 document.addEventListener('keydown',e=>{ if(sm.hidden) return; if(e.key==='Escape') close(); if(e.key==='ArrowRight') nextBtn.click(); if(e.key==='ArrowLeft') go(idx-1); });
 let tx=null; sm.addEventListener('touchstart',e=>{ tx=e.touches[0].clientX; },{passive:true}); sm.addEventListener('touchend',e=>{ if(tx===null) return; const dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>48){ if(dx<0) nextBtn.click(); else go(idx-1); } tx=null; },{passive:true});
}
// ===== QUIZ: Which House claims you? =====
const quizStage=document.getElementById('quiz-stage');
if(quizStage){
 const houses={
  atreides:{name:"House Atreides",sigil:"The Red Hawk of Caladan",desc:"Power through loyalty, not fear. You lead from the front, keep your word when it costs you, and people follow you because they choose to. Your danger: honour can be a trap — ask Duke Leto. Your strength: in an empire of schemers, trust is the rarest weapon."},
  harkonnen:{name:"House Harkonnen",sigil:"The Griffin of Giedi Prime",desc:"You understand the oldest rule of Arrakis: he who can destroy a thing controls it. Wealth, leverage and patience are your weapons, and you are not sentimental about using them. Your danger: cruelty breeds the resistance that ends you. Spend fear wisely."},
  fremen:{name:"The Fremen",sigil:"People of the Deep Desert",desc:"No house claims you — the desert does. You value freedom over comfort, water over gold, and you can wait out any empire in the sands. You answer to your sietch and your own code. Your strength: nobody survives Arrakis like you do. Nobody."},
  bene:{name:"The Bene Gesserit",sigil:"The Sisterhood in Shadow",desc:"Why rule for a lifetime when you can steer a thousand years? You trade in secrets, patience and plans inside plans. Thrones bore you; outcomes do not. Your danger: even the Sisterhood's greatest plan produced a Kwisatz Haderach it could not control. Play the long game — humbly."}
 };
 const questions=[
  {q:"Your power comes from…",opts:[["Loyalty, honestly earned","atreides"],["Fear, wealth and leverage","harkonnen"],["The desert — and surviving it","fremen"],["Secrets and a thousand-year plan","bene"]]},
  {q:"Choose your home world.",opts:[["Caladan — rain, oceans, honour","atreides"],["Giedi Prime — industry and total control","harkonnen"],["Arrakis — deep desert, no masters","fremen"],["Wallach IX — quiet, hidden, watching","bene"]]},
  {q:"A crisis hits at midnight. You…",opts:[["Lead the response yourself, visibly","atreides"],["Crush it so completely no one tries again","harkonnen"],["Vanish into the sands and strike later","fremen"],["Were expecting it — your agent is already inside","bene"]]},
  {q:"Pick the motto you actually live by.",opts:[["Duty above self, always","atreides"],["Control the thing, or destroy it","harkonnen"],["Survive. Stay free. Owe no one.","fremen"],["Knowledge is power — shared with no one","bene"]]}
 ];
 let qi=0,score={atreides:0,harkonnen:0,fremen:0,bene:0};
 function renderQ(){ quizStage.innerHTML=''; const wrap=document.createElement('div'); wrap.className='quiz-stage-in';
  if(qi>=questions.length){ const win=Object.keys(score).reduce((a,b)=>score[a]>=score[b]?a:b); const h=houses[win];
   wrap.innerHTML='<p class="quiz-step">The sorting is complete</p><div class="quiz-result"><p class="sigil">'+h.sigil+'</p><h3>'+h.name+'</h3><p>'+h.desc+'</p></div>';
   const r=document.createElement('button'); r.className='btn'; r.type='button'; r.textContent='Retake the sorting'; r.style.marginTop='16px'; r.addEventListener('click',()=>{ qi=0; score={atreides:0,harkonnen:0,fremen:0,bene:0}; renderQ(); }); wrap.appendChild(r);
  } else { const cur=questions[qi]; const head=document.createElement('p'); head.className='quiz-step'; head.textContent='Question '+(qi+1)+' of '+questions.length; const qq=document.createElement('p'); qq.className='quiz-q'; qq.textContent=cur.q; const opts=document.createElement('div'); opts.className='quiz-opts';
   cur.opts.forEach(o=>{ const b=document.createElement('button'); b.className='quiz-opt'; b.type='button'; b.textContent=o[0]; b.addEventListener('click',()=>{ score[o[1]]++; qi++; renderQ(); }); opts.appendChild(b); });
   wrap.appendChild(head); wrap.appendChild(qq); wrap.appendChild(opts); }
  quizStage.appendChild(wrap); }
 renderQ();
}
})();
