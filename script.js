const $=s=>document.querySelector(s);
const data={
hard:[
 {i:'🌐',t:'Pengembangan Web, Mobile & Desktop',w:1,c:['HTML','CSS','JavaScript','PHP','C#','Kotlin','Visual Basic','Laravel','SQLite/MySQL/MariaDB','Streamlit']},
 {i:'🤖',t:'AI',c:['Machine Learning','NLP','NLP-to-SQL','AI Application Development']},
 {i:'🔌',t:'Networking',c:['Linux/Debian','Network Configuration','Network Topology','Crimping']},
 {i:'🎨',t:'Design',c:['Canva','Figma']}],
soft:['Kepemimpinan','Public Speaking','Teamwork','Berpikir Kritis','Problem Solving','Komunikasi Efektif'],
projects:[
 ['LKS AI Provinsi Jawa Tengah 2026','NLP2SQL','Chatbot yang mengubah bahasa alami pengguna menjadi perintah SQL untuk menemukan data yang diminta, serta menyediakan visualisasi data sesuai dengan kebutuhan pengguna.'],
 ['Sosialisasi Promosi Sekolah','Chatbot Rekomendasi Jurusan','Chatbot rekomendasi yang membantu calon murid menentukan jurusan yang diminati di SMK Tunas Harapan Pati berdasarkan hobi mereka.'],
 ['LKS AI Nasional 2026','LERES AI','Chatbot pusat informasi layanan publik dalam satu aplikasi. Dengan bahasa sehari-hari, LERES AI membantu pengguna menemukan layanan yang sesuai, menyederhanakan prosedur resmi menjadi langkah mudah dipahami, serta memverifikasi informasi berdasarkan sumber resmi pemerintah.'],
 ['UI/UX Design - Technoday 2025','Remilque','Aplikasi ramah lingkungan yang membantu masyarakat mengelola sisa makanan layak konsumsi, menemukan ide masakan, serta menganalisis kandungan gizi dengan dukungan teknologi AI.'],
 ['UI/UX Design - Digifest 2026','TUNTAZ','Aplikasi manajemen tugas yang membantu murid mengatur dan menyelesaikan tugas lebih terstruktur, dilengkapi integrasi AI, penjadwalan, input suara dan gambar, fitur kolaborasi, serta pengingat melalui WhatsApp.'],
 ['Website Sekolah - JHIC 2026','Jagoan Hosting Innovation Competition','Kompetisi pengembangan website sekolah yang berfokus pada penyelesaian permasalahan dan peningkatan kualitas website sekolah berdasarkan kondisi serta kebutuhan saat ini.'],
 ['Machine Learning & AI - Beefest ARISE 2026','Beefest Machine Learning AI 2026','Kompetisi pengembangan solusi Machine Learning dan AI yang terdiri dari tiga level dengan penerapan algoritma dan database berbeda, seperti Random Forest, Logistic Regression, dan Convolutional Neural Network (CNN).']],
ach:[['🥈','Juara 2 LKS AI Tingkat Provinsi Jawa Tengah 2026'],['🏅','Top 10 LKS AI Tingkat Nasional 2026 (Terbaik di Provinsi Jawa Tengah)'],['🎯','Finalis UI/UX Digifest 2026'],['🥇','Juara 1 Lomba Poster LT3']],
orgs:['OSIS BHATARA sebagai Wakil Ketua Umum TP. 2025/2026','PMR sebagai anggota Divisi Informasi dan Komunikasi TP. 2025/2026','FOSKAP (Forum OSIS Kabupaten Pati) Generasi 5 sebagai anggota Divisi Informasi dan Komunikasi TP. 2025/2026'],
mcs:['Moderator Srawung Bareng FOSKAP 2025','MC Upacara 17 Agustus','MC Clasmeet (Kontes motor, Gerak Kreasi, Fashion Show)','MC Gelar Aksi lomba Flashmob','MC Peresmian Masjid Baitul Izzah SMK Tunas Harapan Pati','MC Gatra Fest 2026','MC Hari Anak Nasional 2025'],
certs:['BISAAI Academy Machine Learning for Beginner','BISAAI Academy Artificial Intelligence','BISAAI Academy Dasar-Dasar Python','RevoU Dasar Python','Seminar Public Speaking Bank Mandiri']};

// render
$('#hard').innerHTML=data.hard.map(s=>`<div class="card skill${s.w?' wide':''}"><div class="ic">${s.i}</div><h3>${s.t}</h3><div class="chips">${s.c.map(c=>`<span class="chip">${c}</span>`).join('')}</div></div>`).join('');
$('#soft').innerHTML=`<div class="chips">${data.soft.map(c=>`<span class="chip">${c}</span>`).join('')}</div>`;
$('#projects').innerHTML=data.projects.map(p=>`<article class="card proj tilt"><span class="tag">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join('');
$('#ach').innerHTML=data.ach.map(a=>`<div class="card ac"><span>${a[0]}</span><b>${a[1]}</b></div>`).join('');
$('#orgs').innerHTML=data.orgs.map(o=>`<li>${o}</li>`).join('');
$('#mcs').innerHTML=data.mcs.map(o=>`<li>${o}</li>`).join('');
$('#certs').innerHTML=data.certs.map(c=>`<div class="card"><span>📜</span>${c}</div>`).join('');

// nama muncul per huruf
const nm=$('#name');let d=0;
nm.innerHTML='Dianita Aira Diyastuti'.split(' ').map(w=>`<span class="w" aria-hidden="true">${[...w].map(ch=>`<span class="c" style="animation-delay:${(d++)*45}ms">${ch}</span>`).join('')}</span>`).join('');

// mengetik
const words=['Pelajar TJKT SMK Tunas Harapan Pati','Pengembang Web & Aplikasi','AI Enthusiast','MC & Public Speaker'];
let wi=0,ci=0,del=false;const ty=$('#typed');
(function type(){const w=words[wi];ty.textContent=w.slice(0,ci+=del?-1:1);
 let t=del?35:80;if(!del&&ci===w.length){del=true;t=1500}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=400}
 setTimeout(type,t)})();

// hitung angka
const cnt=el=>{const to=+el.dataset.to;let n=0;const iv=setInterval(()=>{el.textContent=++n;if(n>=to)clearInterval(iv)},180)};
setTimeout(()=>document.querySelectorAll('.count').forEach(cnt),900);

// muncul saat scroll (berurutan)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const s=e.target;s.classList.add('in');
 s.querySelectorAll('.card,.chip,li').forEach((el,i)=>el.style.transitionDelay=Math.min(i*60,700)+'ms');io.unobserve(s)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));

// scrollspy
const links=[...document.querySelectorAll('nav li a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('header[id],section[id]').forEach(s=>spy.observe(s));

// progress bar + tombol ke atas
addEventListener('scroll',()=>{const h=document.documentElement;
 $('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
 $('#top').classList.toggle('show',h.scrollTop>600)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0});

// efek miring 3D saat kursor bergerak
if(matchMedia('(hover:hover)').matches)document.addEventListener('mousemove',e=>{
 document.querySelectorAll('.tilt').forEach(el=>{const r=el.getBoundingClientRect();
  if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom){el.style.transform='';return}
  const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  el.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`})});
