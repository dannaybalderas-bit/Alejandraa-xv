const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
const enterBtn = document.getElementById('enterBtn');
let playing = false;
async function toggleMusic(){
  try{
    if(!playing){ await music.play(); playing=true; musicBtn.textContent='♪ Pausar'; }
    else{ music.pause(); playing=false; musicBtn.textContent='♪ Música'; }
  }catch(e){ console.log(e); }
}
musicBtn.addEventListener('click', toggleMusic);
enterBtn.addEventListener('click', async ()=>{ await toggleMusic(); document.querySelector('.intro').scrollIntoView({behavior:'smooth'}); });

const target = new Date('2026-07-24T19:30:00-06:00').getTime();
const boxes = document.querySelectorAll('#countdown strong');
function pad(n){return String(n).padStart(2,'0')}
function updateCountdown(){
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff/(1000*60*60*24)); diff -= d*1000*60*60*24;
  const h = Math.floor(diff/(1000*60*60)); diff -= h*1000*60*60;
  const m = Math.floor(diff/(1000*60)); diff -= m*1000*60;
  const s = Math.floor(diff/1000);
  [d,h,m,s].forEach((v,i)=> boxes[i].textContent = i===0 ? v : pad(v));
}
updateCountdown(); setInterval(updateCountdown,1000);

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.18});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
