const services=[
  {id:'nat',name:'National Emergency Number',nameBn:'National Emergency',number:'999',category:'All',emoji:'🚨'},
  {id:'pol',name:'Police Helpline Number',nameBn:'Police Helpline',number:'999',category:'Police',emoji:'👮‍♂️'},
  {id:'fire',name:'Fire Service Number',nameBn:'Fire Service',number:'999',category:'Fire',emoji:'🚒'},
  {id:'amb',name:'Ambulance Service',nameBn:'Ambulance',number:'1994-999999',category:'Health',emoji:'🚑'},
  {id:'women',name:'Women & Child Helpline',nameBn:'Women & Child Helpline',number:'109',category:'Help',emoji:'👩‍👧'},
  {id:'anti',name:'Anti-Corruption Helpline',nameBn:'Anti-Corruption',number:'106',category:'Govt.',emoji:'🏛️'},
  {id:'elec',name:'Electricity Helpline',nameBn:'Electricity Outage',number:'16216',category:'Electricity',emoji:'💡'},
  {id:'brac',name:'Brac Helpline',nameBn:'Brac',number:'16445',category:'NGO',emoji:'🤝'},
  {id:'rail',name:'Bangladesh Railway Helpline',nameBn:'Bangladesh Railway',number:'163',category:'Travel',emoji:'🚆'}
];

let heartCount=0,copyCount=0,coins=100;
const history=[];

const $=sel=>document.querySelector(sel);
function updateNavbar(){
  $('#hearts').textContent=heartCount;
  $('#coins').textContent=coins;
  $('#copies').textContent=copyCount;
}
function timeNow(){
  const d=new Date();
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
}
function addHistoryItem(service){
  const when=timeNow();
  history.push({name:service.name,number:service.number,time:when});
  const li=document.createElement('li');
  li.className='history-item';
  li.innerHTML=`<div><div class="name">${service.name}</div><div class="sub">${service.number}</div></div><div class="sub">${when}</div>`;
  $('#historyList').prepend(li);
}
function copyText(text){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text);
  }else{
    const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);
    return Promise.resolve();
  }
}
function renderCards(){
  const wrap=$('#cards');wrap.innerHTML='';
  services.forEach(s=>{
    const card=document.createElement('article');
    card.className='card';
    card.dataset.id=s.id;
    card.innerHTML=`<div class="card-top"><div class="icon">${s.emoji}</div><button class="heart-btn">❤</button></div><h3>${s.name}</h3><p class="subtitle">${s.nameBn}</p><div class="big-number">${s.number}</div><div class="badges"><span class="badge">${s.category}</span></div><div class="card-actions"><button class="btn copy" data-action="copy">📋 Copy</button><button class="btn call" data-action="call">📞 Call</button></div>`;
    wrap.appendChild(card);
  });
}
function wireEvents(){
  $('#cards').addEventListener('click',e=>{
    const heart=e.target.closest('.heart-btn');
    if(heart){
      if(!heart.classList.contains('active')){
        heart.classList.add('active');
        heartCount++;updateNavbar();
      }return;
    }
    const btn=e.target.closest('.btn');
    if(!btn)return;
    const card=e.target.closest('.card');
    const id=card.dataset.id;
    const service=services.find(x=>x.id===id);
    if(btn.dataset.action==='copy'){
      copyText(service.number).then(()=>{copyCount++;updateNavbar();alert(`Number copied: ${service.name} — ${service.number}`);});
    }
    if(btn.dataset.action==='call'){
      if(coins<20){alert('Not enough coins to make a call. You need 20 coins.');return;}
      alert(`Calling ${service.name} at ${service.number}...`);
      coins-=20;updateNavbar();addHistoryItem(service);
    }
  });
  $('#clearHistory').addEventListener('click',()=>{$('#historyList').innerHTML='';history.length=0;});
}
renderCards();wireEvents();updateNavbar();
