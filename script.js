/* ===== EDIT YOUR CONTENT HERE ===== */
const STATS=[[10,'+','Projects'],[2,'+','Years learning'],[15,'+','Technologies'],[100,'%','Passion']];
const SKILLS=[['HTML','i-code',95],['CSS','i-pal',92],['JavaScript','i-spark',85],['React','i-box',80],['Bootstrap','i-layout',88],['Tailwind CSS','i-gauge',86],['Git','i-code',78],['GitHub','i-gh',82],['Responsive Design','i-layout',94],['UI/UX','i-pen',80],['Figma','i-pal',75]];
const PROJECTS=[
/* live: رابط الموقع الشغال (لو سبته '#' الكارت هيفتح نافذة التفاصيل)  |  gh: رابط الكود على GitHub */
{t:'Delicious',img:'images/delicious.webp',d:'Restaurant website with a dark/light theme toggle and table booking.',l:'A modern restaurant website with a bold hero, menu, gallery and reviews sections, a theme toggle and a clear booking call to action.',f:['Dark / light theme toggle','Menu, gallery and reviews','Booking call to action'],tech:['HTML','CSS','JavaScript'],live:'https://fathykh05.github.io/Delicious-site/',gh:'#'},
{t:'Ditto',img:'images/ditto.webp',d:'Real estate website for buying and renting homes.',l:'A real estate landing page with a full-screen hero, Buy and Rent paths, stories, and a Book a visit flow.',f:['Full-screen hero','Buy / Rent navigation','Book a visit button'],tech:['HTML','CSS','JavaScript'],live:'https://fathykh05.github.io/Ditto-site/',gh:'#'},
{t:'FK Portfolio',img:'images/fk-portfolio.webp',d:'My personal portfolio with a black and gold identity and smooth motion.',l:'My own portfolio: animated hero, particles, custom cursor, scroll reveals, project modal and a fully responsive layout.',f:['GSAP scroll animations','Custom cursor and particles','Fully responsive'],tech:['HTML','CSS','JavaScript','GSAP'],live:'https://fathykh05.github.io/Portfolio-/',gh:'#'},
{t:'F.M Food Restaurant',img:'images/fm-food.webp',d:'Restaurant website with a full-screen hero and table booking.',l:'A restaurant website with an immersive full-screen hero, menu, gallery and a Book a Table call to action.',f:['Full-screen image hero','Menu and gallery','Book a Table button'],tech:['HTML','CSS','JavaScript'],live:'https://fathykh05.github.io/Resturant/',gh:'#'}];
const EXP=[['2026 — Present','Freelance Front-End Developer','Self-employed','Building responsive websites and landing pages for small businesses and creators.',['HTML','CSS','JavaScript','React']],
['2024 — 2025','Front-End Intern / Self-Study','Personal Projects','Built a portfolio of practice projects focused on UI implementation and accessibility.',['Tailwind','Git','Figma']],
['2023 — 2024','Started learning web development','Online courses & bootcamps','Mastered the fundamentals of HTML, CSS and JavaScript.',['HTML','CSS','JS']]];
const SERV=[['Front-End Development','i-code','Clean, scalable interfaces built with modern tooling.'],['Responsive Web Design','i-layout','Layouts that feel designed for every screen, not shrunk.'],['Landing Pages','i-rocket','Fast, focused pages that turn visitors into customers.'],['Interactive Websites','i-spark','Motion and interaction that feel smooth and purposeful.'],['UI Implementation','i-pen','Pixel-faithful builds from Figma designs.'],['Website Optimization','i-gauge','Speed, accessibility and SEO improvements.']];
const TEST=[['Working with Fathy was effortless. He delivered a polished site ahead of schedule.','Client Name','Founder, Company'],['Great eye for detail and animation. The result looks far more expensive than it was.','Client Name','Creative Director'],['Clear communication, clean code and a design sense you rarely see in developers.','Client Name','Product Manager']];
const CONTACT=[['i-mail','fathy.kh05@gmail.com','mailto:hello@fathykhaild.dev'],['i-phone','+02 010 13 707 372','tel:+000000000000'],['i-in','LinkedIn','https://www.linkedin.com/in/fathy-khaild/'],['i-gh','GitHub','https://github.com/FATHYkh05'],['i-ig','Instagram','https://www.instagram.com/fathy_khaild20/']];
const SOCIAL=[['i-gh','GitHub','https://github.com/FATHYkh05'],['i-in','LinkedIn','https://www.linkedin.com/in/fathy-khaild/'],['i-ig','Instagram','https://www.instagram.com/fathy_khaild20/'],['i-fb','Facebook','https://www.facebook.com/fathy.khailed.2025']];
/* ================================== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ic=n=>`<svg class="ico" aria-hidden="true"><use href="#${n}"/></svg>`;
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches, FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const art=(c,id)=>`<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="#050505"/></linearGradient></defs><rect width="400" height="250" fill="url(#g${id})"/><circle cx="310" cy="70" r="90" fill="${c[1]}" opacity=".16"/><rect x="40" y="60" width="190" height="14" rx="7" fill="${c[1]}" opacity=".85"/><rect x="40" y="88" width="130" height="8" rx="4" fill="#F5F1E8" opacity=".4"/><rect x="40" y="130" width="90" height="60" rx="10" fill="none" stroke="${c[1]}" opacity=".7"/><rect x="145" y="130" width="90" height="60" rx="10" fill="${c[1]}" opacity=".25"/><rect x="250" y="130" width="90" height="60" rx="10" fill="none" stroke="${c[1]}" opacity=".7"/></svg>`;

/* render */
$('#stats').innerHTML=STATS.map(s=>`<div class="stat"><b data-n="${s[0]}" data-x="${s[1]}">0${s[1]}</b><span>${s[2]}</span></div>`).join('');
$('#sk').innerHTML=SKILLS.map(s=>`<div class="card sk">${ic(s[1])}<h3>${s[0]}</h3><div class="meter" role="progressbar" aria-label="${s[0]} proficiency" aria-valuenow="${s[2]}" aria-valuemin="0" aria-valuemax="100"><i data-w="${s[2]}"></i></div></div>`).join('');
const hasLive=p=>p.live&&p.live!=='#';
$('#pj').innerHTML=PROJECTS.map((p,i)=>{const inner=`<div class="mask"></div><div class="art"><img src="${p.img}" alt="${p.t} website preview" loading="lazy"></div><div class="pi"><h3>${p.t}${hasLive(p)?' <span class="go" aria-hidden="true">↗</span>':''}</h3><p>${p.d}</p><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
return hasLive(p)?`<a class="pc" data-tilt href="${p.live}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.t} live site">${inner}</a>`:`<button class="pc" data-i="${i}" data-tilt aria-label="Open ${p.t}">${inner}</button>`}).join('');
$('#tl').insertAdjacentHTML('beforeend',EXP.map(e=>`<article class="ti"><time>${e[0]}</time><h3>${e[1]}</h3><div class="co">${e[2]}</div><p>${e[3]}</p><ul class="tags">${e[4].map(t=>`<li>${t}</li>`).join('')}</ul></article>`).join(''));
$('#sv').innerHTML=SERV.map(s=>`<div class="card" data-tilt>${ic(s[1])}<h3>${s[0]}</h3><p>${s[2]}</p></div>`).join('');
$('#tt').innerHTML=TEST.map((t,i)=>`<figure class="tc" role="group" aria-label="${i+1} of ${TEST.length}"><q>${t[0]}</q><cite>${t[1]}<small>${t[2]}</small></cite></figure>`).join('');
$('#tn').innerHTML=TEST.map((_,i)=>`<button class="dot" aria-label="Show testimonial ${i+1}"></button>`).join('');
$('#ci').innerHTML=CONTACT.map(c=>`<li><a href="${c[2]}" ${c[2].startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${ic(c[0])}<span>${c[1]}</span></a></li>`).join('');
$('#so').innerHTML=SOCIAL.map(c=>`<a href="${c[2]}" target="_blank" rel="noopener noreferrer" aria-label="${c[1]}">${ic(c[0])}</a>`).join('');

/* nav */
const hd=$('#hd'),lk=$('#lk'),bg=$('#burger'),ind=$('#ind'),anchors=$$('.links a');
bg.onclick=()=>{const o=lk.classList.toggle('open');bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
anchors.forEach(a=>a.addEventListener('click',()=>{lk.classList.remove('open');bg.setAttribute('aria-expanded',false);document.body.style.overflow=''}));
function moveInd(a){if(!a||innerWidth<=860)return;ind.style.left=a.offsetLeft+14+'px';ind.style.width=a.offsetWidth-28+'px'}
const secs=$$('main section[id]');
const secObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id==='testimonials'?'services':e.target.id;anchors.forEach(a=>{const on=a.getAttribute('href')==='#'+id;a.classList.toggle('on',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current');on&&moveInd(a)})}}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>secObs.observe(s));addEventListener('resize',()=>moveInd($('.links a.on')));
const btnTop=$('#top'),prog=$('#prog');
addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle('s',y>40);btnTop.classList.toggle('show',y>700);prog.style.transform=`scaleX(${h>0?y/h:0})`},{passive:true});
btnTop.onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});

/* testimonials carousel */
let ti=0,tTimer;const dots=$$('.dot');
function showT(i){ti=(i+TEST.length)%TEST.length;$('#tt').style.transform=`translateX(${-ti*100}%)`;dots.forEach((d,j)=>j===ti?d.setAttribute('aria-current','true'):d.removeAttribute('aria-current'))}
dots.forEach((d,i)=>d.onclick=()=>{showT(i);clearInterval(tTimer)});showT(0);
if(!RM)tTimer=setInterval(()=>showT(ti+1),6000);

/* modal */
const modal=$('#modal');let lastFocus;
function openP(i){const p=PROJECTS[i];lastFocus=document.activeElement;
$('#mc').innerHTML=`<div class="art"><img src="${p.img}" alt="${p.t} website preview"></div><div class="mbody"><h3 id="mt" style="font-size:clamp(1.8rem,4vw,2.8rem)">${p.t}</h3><p class="lead">${p.l}</p><ul class="f">${p.f.map(x=>`<li>${x}</li>`).join('')}</ul><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join('')}</ul><div style="display:flex;gap:12px;flex-wrap:wrap">${hasLive(p)?`<a class="btn fill sm" href="${p.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>`:''}${p.gh&&p.gh!=='#'?`<a class="btn ghost sm" href="${p.gh}" target="_blank" rel="noopener noreferrer">GitHub</a>`:''}</div></div>`;
modal.classList.add('open');document.body.style.overflow='hidden';$('#mx').focus();
if(window.gsap&&!RM){gsap.fromTo('#mb',{y:60,scale:.94,opacity:0},{y:0,scale:1,opacity:1,duration:.6,ease:'power3.out'});gsap.fromTo(modal,{opacity:0},{opacity:1,duration:.3})}}
function closeP(){const d=()=>{modal.classList.remove('open');document.body.style.overflow='';lastFocus&&lastFocus.focus()};
window.gsap&&!RM?gsap.to('#mb',{y:40,opacity:0,duration:.3,onComplete:d}):d()}
$$('button.pc').forEach(c=>c.onclick=()=>openP(+c.dataset.i));
$('#mx').onclick=closeP;modal.addEventListener('click',e=>{if(e.target===modal)closeP()});
addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')closeP();if(e.key==='Tab'){const f=$$('a,button',modal),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});

/* form */
$('#f').addEventListener('submit',e=>{e.preventDefault();const f=e.target,st=$('#fs');const v=Object.fromEntries(new FormData(f));
const bad=['name','email','subject','message'].find(k=>!v[k].trim());
if(bad){st.textContent=`Please fill in your ${bad}.`;f.elements[bad].focus();return}
if(!/^\S+@\S+\.\S+$/.test(v.email)){st.textContent='Enter a valid email address.';f.elements.email.focus();return}
st.textContent='Opening your email app to send the message…';
location.href=`mailto:hello@fathykhaild.dev?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(v.message+'\n\n— '+v.name+' ('+v.email+')')}`;f.reset()});

/* hero canvas particles */
const cv=$('#cv'),cx=cv.getContext('2d');let P=[],W,H,mx=0,my=0;
function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,v:Math.random()*.25+.05,g:Math.random()>.45}))}
let running=false;
function draw(){if(running)return;running=true;frame()}
function frame(){cx.clearRect(0,0,W,H);for(const p of P){p.y-=p.v;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}
const dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy);if(d<120){p.x+=dx/d*.6;p.y+=dy/d*.6}
cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.3);cx.fillStyle=p.g?'rgba(212,175,55,.8)':'rgba(176,40,64,.7)';cx.shadowBlur=p.g?10:16;cx.shadowColor=p.g?'#D4AF37':'#8f1d33';cx.fill()}
if(!RM&&vis)requestAnimationFrame(frame);else running=false}
let vis=true;size();addEventListener('resize',size);
new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis)draw()}).observe(cv);draw();

/* split text */
const hn=$('#hn');const txt=hn.textContent;hn.textContent='';hn.setAttribute('aria-hidden','true');
txt.split(' ').forEach((w,i,a)=>{const ws=document.createElement('span');ws.className='w';[...w].forEach(ch=>{const c=document.createElement('span');c.className='c';c.textContent=ch;ws.appendChild(c)});hn.appendChild(ws);if(i<a.length-1)hn.appendChild(document.createTextNode(' '))});
$('#lg').innerHTML=[...'FK.'].map(c=>`<span>${c}</span>`).join('');

/* motion */
function counters(){$$('[data-n]').forEach(el=>{const n=+el.dataset.n,x=el.dataset.x;if(RM||!window.gsap){el.textContent=n+x;return}
const o={v:0};ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.to(o,{v:n,duration:1.8,ease:'power2.out',onUpdate:()=>el.textContent=Math.round(o.v)+x})})})}
function init(){
document.body.classList.add('cc');
if(FINE){let tx=innerWidth/2,ty=innerHeight/2,rx=tx,ry=ty,gx=tx,gy=ty;const cur=$('#cur'),ring=$('#ring'),gl=$('#glow');
addEventListener('mousemove',e=>{tx=mx=e.clientX;ty=e.clientY;my=e.clientY-scrollY+scrollY;const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
const tick=()=>{rx+=(tx-rx)*.16;ry+=(ty-ry)*.16;gx+=(tx-gx)*.07;gy+=(ty-gy)*.07;cur.style.transform=`translate(${tx}px,${ty}px)`;ring.style.transform=`translate(${rx}px,${ry}px)`;gl.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(tick)};tick();
document.addEventListener('mouseover',e=>ring.classList.toggle('big',!!e.target.closest('a,button,.card,input,textarea')))}
else $('#glow').style.display='none';
if(!window.gsap){const ld=$('#loader');ld&&ld.remove();counters();$$('.meter i').forEach(i=>i.style.width=i.dataset.w+'%');return}
gsap.registerPlugin(ScrollTrigger);
counters();
addEventListener('load',()=>ScrollTrigger.refresh());
if(!RM){
/* hero parallax with mouse */
if(FINE)addEventListener('mousemove',e=>{const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;$$('.par').forEach(p=>gsap.to(p,{x:nx*30*p.dataset.s,y:ny*30*p.dataset.s,duration:1.2,ease:'power3.out',overwrite:'auto'}))});
/* scroll reveals (headings & lead copy only) */
gsap.utils.toArray('main section:not(#home) .rv').forEach(el=>gsap.from(el,{y:36,opacity:0,duration:1,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
gsap.utils.toArray('.stat,.sk,.svc .card,.ti').forEach((el,i)=>{gsap.from(el,{y:40,opacity:0,duration:.9,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 92%',once:true}})});
/* image reveal */
$$('.pc .mask').forEach(m=>ScrollTrigger.create({trigger:m,start:'top 85%',once:true,onEnter:()=>gsap.to(m,{scaleX:0,duration:1.1,ease:'power4.inOut'})}));
/* parallax on section art */
gsap.to('.grid',{yPercent:18,ease:'none',scrollTrigger:{trigger:'#home',scrub:true,start:'top top',end:'bottom top'}});
gsap.to('.hero',{yPercent:-8,opacity:.2,ease:'none',scrollTrigger:{trigger:'#home',scrub:true,start:'center top',end:'bottom top'}});
/* timeline line */
gsap.to('#tlf',{height:'100%',ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 70%',scrub:.6}});
/* 3D tilt */
if(FINE)$$('[data-tilt]').forEach(c=>{const rx=gsap.quickTo(c,'rotationX',{duration:.5,ease:'power3'}),ry=gsap.quickTo(c,'rotationY',{duration:.5,ease:'power3'});
c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();ry(((e.clientX-r.left)/r.width-.5)*10);rx(-((e.clientY-r.top)/r.height-.5)*10)});
c.addEventListener('mouseleave',()=>{rx(0);ry(0)});gsap.set(c,{transformPerspective:900})});
/* magnetic buttons */
if(FINE)$$('.mag').forEach(b=>{const x=gsap.quickTo(b,'x',{duration:.5,ease:'power3'}),y=gsap.quickTo(b,'y',{duration:.5,ease:'power3'});
b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.3);y((e.clientY-r.top-r.height/2)*.4)});b.addEventListener('mouseleave',()=>{x(0);y(0)})});
/* entrance: navbar, hero */
gsap.from('header',{yPercent:-100,opacity:0,duration:1,ease:'power3.out'});
gsap.from('.hero h1 .c',{yPercent:110,rotate:6,opacity:0,duration:1.1,ease:'power4.out',stagger:.04,delay:.1});
gsap.from('.role',{y:24,opacity:0,duration:.9,delay:.7});
gsap.from('.hero .rv',{y:24,opacity:0,duration:.9,delay:.9,stagger:.12});
gsap.from('.frame',{scale:.92,opacity:0,duration:1.4,delay:.4,ease:'power3.out'});
gsap.from('.chip',{scale:.6,opacity:0,duration:.8,delay:1.3,stagger:.15,ease:'back.out(2)'})}
/* skill bars */
$$('.meter i').forEach(i=>ScrollTrigger.create({trigger:i,start:'top 92%',once:true,onEnter:()=>RM?i.style.width=i.dataset.w+'%':gsap.to(i,{width:i.dataset.w+'%',duration:1.4,ease:'power3.out'})}));
}
/* loader */
function run(){
const L=$('#loader');
if(RM||!window.gsap){L&&L.remove();init();return}
gsap.set('.hero h1 .c,.role,.hero .rv,.frame,.chip',{opacity:0});
const tl=gsap.timeline({onComplete:()=>{L.remove();document.body.style.overflow=''}});
document.body.style.overflow='hidden';
tl.from('#lg span',{yPercent:120,duration:.8,stagger:.12,ease:'power4.out'})
  .to('#lb',{width:'100%',duration:.9,ease:'power2.inOut'},.2)
  .to('#lg',{opacity:0,y:-20,duration:.4},'+=.1').to('#loader',{yPercent:-100,duration:.9,ease:'power4.inOut'})
  .add(()=>{gsap.set('.hero h1 .c,.role,.hero .rv,.frame,.chip',{clearProps:'opacity'});try{init()}catch(e){console.error(e)}},'-=.55');
}
run();
