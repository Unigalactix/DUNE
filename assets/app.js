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
