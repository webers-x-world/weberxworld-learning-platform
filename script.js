/* ═══════════════════════════════════════════════════════════════
   WEBER'S X WORLD — script.js (UPGRADED v2.0)
   Particles · Cursor · Loading · Navbar · Courses · FAQ
   Enroll System · GitHub Certs · Reviews · Animations
═══════════════════════════════════════════════════════════════ */

'use strict';

// ═══════════════════════ COURSE DATA ═══════════════════════

const FREE_COURSES = [
  {
    id: 'basic-computer',
    name: 'Basic of Computer',
    type: 'FREE',
    duration: 'Maximum 10 Days',
    teacher: 'Salik',
    teacherInitial: 'S',
    teacherWA: '917069331761',
    desc: 'Start your digital journey from scratch. Learn essential computer skills used in everyday professional life.',
    longDesc: 'Kickstart your digital journey with a solid foundation. This course covers everything you need to confidently use a computer — from basics to essential productivity tools, all taught live by an expert teacher.',
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80',
    topics: ['Computer Basics', 'Windows Basics', 'File Management', 'Internet Basics', 'MS Word', 'MS Excel', 'PowerPoint', 'Typing Basics'],
    outcomes: ['Confident computer usage', 'Professional file management', 'MS Office basics', 'Internet navigation skills']
  },
  {
    id: 'web-design',
    name: 'Web Design',
    type: 'FREE',
    duration: 'Maximum 10 Days',
    teacher: 'Salik',
    teacherInitial: 'S',
    teacherWA: '917069331761',
    desc: 'Build beautiful websites from scratch. HTML, CSS, responsive design — live and hands-on.',
    longDesc: 'Learn to build beautiful, functional websites from the ground up. This course teaches HTML structure, CSS styling, responsive design principles, and hands-on project creation — all live.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    topics: ['HTML Basics', 'CSS Styling', 'Responsive Design', 'Layout Techniques', 'Color Theory', 'Typography', 'Project Creation', 'Web Publishing'],
    outcomes: ['Build your own website', 'Understand HTML & CSS', 'Create responsive layouts', 'Publish a live website']
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    type: 'FREE',
    duration: 'Maximum 10 Days',
    teacher: 'Munazza',
    teacherInitial: 'M',
    teacherWA: '917069878373',
    desc: 'Unleash your creativity. Learn design fundamentals, color theory, typography, and pro tools.',
    longDesc: 'Discover the world of visual communication. Learn design fundamentals, color psychology, typography, composition, and industry-standard tools to create stunning visual content — all through live sessions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    topics: ['Design Principles', 'Color Theory', 'Typography', 'Composition', 'Logo Design Basics', 'Social Media Graphics', 'Tool Basics', 'Project Work'],
    outcomes: ['Design professional graphics', 'Understand visual principles', 'Create social media content', 'Build a basic portfolio']
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    type: 'FREE',
    duration: 'Maximum 10 Days',
    teacher: 'Munazza',
    teacherInitial: 'M',
    teacherWA: '917069878373',
    desc: 'Transform raw footage into cinematic stories. Cuts, transitions, color grading, and more.',
    longDesc: 'Learn the art of video editing and storytelling. Master cuts, transitions, color grading, audio syncing, and export for any platform — from YouTube to Instagram — all in live classes.',
    image: 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?w=600&q=80',
    topics: ['Editing Fundamentals', 'Cuts & Transitions', 'Color Grading', 'Audio Syncing', 'Text & Motion', 'Effects Basics', 'Export Settings', 'Project Editing'],
    outcomes: ['Edit professional videos', 'Apply cinematic color grades', 'Sync audio perfectly', 'Export for any platform']
  }
];

const ADVANCED_COURSES = [
  {
    id: 'adv-computer',
    name: 'Advanced Computer & MS Office',
    type: 'ADVANCED',
    duration: 'Maximum 2 Months',
    teacher: 'Salik',
    teacherInitial: 'S',
    teacherWA: '917069331761',
    price: '₹2499',
    desc: 'Master-level computer skills, advanced MS Office, networking fundamentals and professional workflows.',
    longDesc: 'Take your computer skills to a professional level. This advanced program covers deep MS Office mastery, networking basics, system management, professional workflows, and real-world projects with assignment-based learning.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    topics: ['Advanced MS Word', 'Excel Formulas & Pivot', 'PowerPoint Pro', 'Networking Basics', 'System Management', 'Cloud Tools', 'Professional Projects', 'Certification Prep'],
    outcomes: ['Master-level MS Office skills', 'Understand networking basics', 'Manage files professionally', 'Earn a verified certificate']
  },
  {
    id: 'adv-web',
    name: 'Advanced Web Design & Development',
    type: 'ADVANCED',
    duration: 'Maximum 2 Months',
    teacher: 'Salik',
    teacherInitial: 'S',
    teacherWA: '917069331761',
    price: '₹2499',
    desc: 'Professional-level websites, JavaScript, animations, deployment — real projects from day one.',
    longDesc: 'Become a professional web designer. This advanced course covers modern HTML5/CSS3, JavaScript fundamentals, animations, responsive frameworks, real project builds, and live deployment — everything you need for a career in web.',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&q=80',
    topics: ['Advanced HTML5 & CSS3', 'JavaScript Basics', 'CSS Animations', 'Responsive Frameworks', 'UI/UX Principles', 'Live Projects', 'Portfolio Building', 'Deployment'],
    outcomes: ['Build professional websites', 'Write JavaScript code', 'Deploy live projects', 'Create a portfolio']
  },
  {
    id: 'adv-graphic',
    name: 'Advanced Graphic Design',
    type: 'ADVANCED',
    duration: 'Maximum 2 Months',
    teacher: 'Munazza',
    teacherInitial: 'M',
    teacherWA: '917069878373',
    price: '₹2499',
    desc: 'Brand identity, advanced typography, professional tools, client-ready portfolio work.',
    longDesc: 'Elevate your design career with advanced graphic design skills. Covers brand identity creation, advanced typography, professional tool mastery, client project workflows, and a complete portfolio of real-world work.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
    topics: ['Brand Identity Design', 'Advanced Typography', 'Logo Design Pro', 'Packaging Design', 'Print Design', 'Digital Illustration', 'Client Workflow', 'Portfolio Project'],
    outcomes: ['Design complete brand identities', 'Master professional tools', 'Handle client projects', 'Build a strong portfolio']
  },
  {
    id: 'adv-ai',
    name: 'Advanced AI Tools & Automation',
    type: 'ADVANCED',
    duration: 'Maximum 2 Months',
    teacher: 'Salik & Munazza',
    teacherInitial: 'S',
    teacherWA: '917069331761',
    price: '₹2499',
    desc: 'Master AI tools for productivity, content creation, automation, and career advancement.',
    longDesc: 'Navigate and master the AI revolution. This advanced course covers AI tools for productivity, content generation, image creation, automation workflows, prompt engineering, and building real AI-powered projects for your career.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    topics: ['Advanced ChatGPT & Prompts', 'AI Image Generation', 'AI Video Tools', 'Automation Workflows', 'AI for Business', 'Content Strategy', 'AI Ethics', 'Real Projects'],
    outcomes: ['Master advanced AI tools', 'Build automation workflows', 'Create AI-powered content', 'Future-proof your career']
  },
  {
    id: 'adv-video',
    name: 'Advanced Video Editing & Production',
    type: 'ADVANCED',
    duration: 'Maximum 2 Months',
    teacher: 'Munazza',
    teacherInitial: 'M',
    teacherWA: '917069878373',
    price: '₹2499',
    desc: 'Cinematic editing, motion graphics, advanced color grading, VFX basics, YouTube/Reels production.',
    longDesc: 'Become a professional video editor and content producer. This advanced course covers cinematic editing techniques, motion graphics, advanced color science, VFX basics, YouTube/Reels production, and building a real video portfolio.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=600&q=80',
    topics: ['Cinematic Editing', 'Motion Graphics', 'Advanced Color Science', 'VFX Basics', 'Sound Design', 'YouTube Production', 'Reels & Shorts', 'Portfolio Project'],
    outcomes: ['Edit cinematic videos', 'Create motion graphics', 'Master advanced color', 'Build a video portfolio']
  }
];

// ═══════════════════════ FAQ DATA ═══════════════════════
const FAQ_DATA = [
  { q: 'Are classes live or recorded?', a: 'All classes at Weber\'s X World are conducted 100% LIVE via Google Meet. We do not provide recorded lectures under any circumstances. You must attend live to learn.' },
  { q: 'Are free courses really free?', a: 'Yes, absolutely! Our basic courses are completely free — no hidden fees, no subscriptions, no payment required. You only pay for advanced professional courses.' },
  { q: 'Will I get a certificate?', a: 'Certificates are awarded ONLY for advanced paid courses upon successful completion. Free courses do not include certificates as they are designed for basic knowledge and foundation building.' },
  { q: 'How are classes conducted?', a: 'All classes are held on Google Meet. You will receive a meeting link from your teacher. Classes are live, interactive, and require your active participation with your camera on.' },
  { q: 'Can beginners join?', a: 'Absolutely! Our free courses are designed for complete beginners. No prior knowledge is required. Advanced courses are for those who have completed or have equivalent knowledge of the basics.' },
  { q: 'What happens if I miss classes?', a: 'We do not provide recordings of missed classes. If you miss a session, you must catch up using your own notes or ask the teacher during the next session. Consistent attendance is mandatory.' },
  { q: 'Are assignments compulsory?', a: 'Yes. Homework and assignments are mandatory for all students. Completing assignments is how you learn and how we track your progress. Students who don\'t submit work may be removed.' },
  { q: 'How do advanced courses work?', a: 'Advanced courses run for a maximum of 2 months with live Google Meet sessions. They include assignments, real projects, teacher feedback, and a certificate upon successful completion.' },
  { q: 'Is there any age limit?', a: 'There is no strict age limit. We welcome learners of all ages who are serious about learning. However, our courses require basic reading ability and regular internet access.' },
  { q: 'Why should I login with Google?', a: 'Google login allows us to securely identify you, save your certificates, and personalize your experience. We only access your name, email, and profile photo — nothing else.' },
  { q: 'Can others see my certificate?', a: 'No. Your certificates are private and only visible to you when you log in with your Google account. No other student can see your certificates.' },
  { q: 'Is Weber\'s X World fully online?', a: 'Yes, 100% online. We are a fully digital organization with no physical office or offline classes. All communication and learning happens online via Google Meet and email.' },
  { q: 'Can I use mobile for classes?', a: 'Yes, you can attend classes on mobile using the Google Meet app. However, for assignments and practical work, a laptop or desktop computer is strongly recommended.' },
  { q: 'Do advanced courses include projects?', a: 'Yes! Advanced courses include real-world projects that you complete during the course. These projects form part of your portfolio and are evaluated before the certificate is issued.' },
  { q: 'Can I contact teachers directly?', a: 'Yes! You can contact Sir Salik via email at salikshaikh278@gmail.com or WhatsApp at +91 7069331761. For Mam Munazza: munazzashaikh531@gmail.com or +91 7069878373.' }
];

// ═══════════════════════ CURRENT ENROLL COURSE ═══════════════════════
let currentEnrollCourse = null;

// ═══════════════════════ LOADING SCREEN ═══════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loadingScreen');
    if (ls) ls.classList.add('hidden');
  }, 2400);
});

// ═══════════════════════ CUSTOM CURSOR ═══════════════════════
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursorDot) { cursorDot.style.left = mx - 4 + 'px'; cursorDot.style.top = my - 4 + 'px'; }
});

function animateCursor() {
  rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
  if (cursorRing) { cursorRing.style.left = rx - 16 + 'px'; cursorRing.style.top = ry - 16 + 'px'; }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mouseover', e => {
  if (e.target.matches('a, button, .course-card, .rule-card, .faq-item')) {
    if (cursorRing) { cursorRing.style.width = '48px'; cursorRing.style.height = '48px'; }
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches('a, button, .course-card, .rule-card, .faq-item')) {
    if (cursorRing) { cursorRing.style.width = '32px'; cursorRing.style.height = '32px'; }
  }
});

// ═══════════════════════ PARTICLES ═══════════════════════
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;

  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W; canvas.height = H;
  });

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
    o: Math.random() * 0.4 + 0.08
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,162,39,${p.o})`; ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(201,162,39,${0.05 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ═══════════════════════ NAVBAR ═══════════════════════
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  // Active link tracking
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

window.toggleMenu = function() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  links.classList.toggle('open');
  ham.classList.toggle('active');
};

window.toggleUserMenu = function() {
  document.getElementById('userDropdown').classList.toggle('open');
};

// Close dropdowns on outside click
document.addEventListener('click', e => {
  const dd = document.getElementById('userDropdown');
  if (dd && !e.target.closest('.nav-user')) dd.classList.remove('open');
  const nl = document.getElementById('navLinks');
  if (nl && !e.target.closest('#navbar')) nl.classList.remove('open');
});

// Close mobile menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  });
});

// ═══════════════════════ SCROLL REVEAL ═══════════════════════
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
observeReveal();

// ═══════════════════════ ANIMATED COUNTERS ═══════════════════════
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 50));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + (el.getAttribute('data-suffix') || '');
      }, 35);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));

// ═══════════════════════ RENDER FREE COURSES ═══════════════════════
function renderFreeCourses() {
  const grid = document.getElementById('freeCoursesGrid');
  if (!grid) return;
  let html = '';
  FREE_COURSES.forEach((course, i) => {
    html += `
      <div class="course-card reveal" style="animation-delay:${i * 0.09}s" onclick="openCourseDetail('${course.id}','free')">
        <div class="course-card-img-wrap">
          <img src="${course.image}" alt="${course.name}" class="course-card-img" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80'" />
          <div class="course-img-overlay"></div>
          <div class="course-type-badge free-badge">FREE</div>
          <div class="course-teacher-bubble">${course.teacherInitial}</div>
        </div>
        <div class="course-card-body">
          <div class="course-name">${course.name}</div>
          <div class="course-duration-tag">⏱ ${course.duration}</div>
          <p class="course-desc">${course.desc}</p>
          <div class="course-teacher-line">
            <div class="ct-avatar">${course.teacherInitial}</div>
            <span>By ${course.teacher}</span>
          </div>
          <div class="course-price-row">
            <span class="price-strike">₹3000</span>
            <span class="price-free">FREE</span>
          </div>
          <button class="btn-primary course-btn">View Course →</button>
        </div>
      </div>`;
  });
  grid.innerHTML = html;
  observeReveal();
}

// ═══════════════════════ RENDER ADVANCED COURSES ═══════════════════════
function renderAdvancedCourses() {
  const grid = document.getElementById('advancedCoursesGrid');
  if (!grid) return;
  let html = '';
  ADVANCED_COURSES.forEach((course, i) => {
    html += `
      <div class="course-card reveal" style="animation-delay:${i * 0.09}s" onclick="openCourseDetail('${course.id}','advanced')">
        <div class="course-card-img-wrap">
          <img src="${course.image}" alt="${course.name}" class="course-card-img" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80'" />
          <div class="course-img-overlay"></div>
          <div class="course-type-badge adv-badge">ADVANCED</div>
          <div class="course-teacher-bubble">${course.teacherInitial}</div>
        </div>
        <div class="course-card-body">
          <div class="course-name">${course.name}</div>
          <div class="course-duration-tag">💎 ${course.duration}</div>
          <p class="course-desc">${course.desc}</p>
          <div class="course-teacher-line">
            <div class="ct-avatar">${course.teacherInitial}</div>
            <span>By ${course.teacher}</span>
          </div>
          <div class="course-price-row">
            <span class="price-strike">₹6000</span>
            <span class="price-paid">${course.price}</span>
          </div>
          <button class="btn-primary course-btn">View Course →</button>
        </div>
      </div>`;
  });
  grid.innerHTML = html;
  observeReveal();
}

// ═══════════════════════ COURSE DETAIL PANEL ═══════════════════════
window.openCourseDetail = function(id, type) {
  const course = type === 'free'
    ? FREE_COURSES.find(c => c.id === id)
    : ADVANCED_COURSES.find(c => c.id === id);
  if (!course) return;

  currentEnrollCourse = course;

  const noticeHTML = type === 'free'
    ? `<div class="course-notice red-notice">
        ⚠️ These free courses are designed only for basic knowledge and learning foundations. 
        <strong>Certificates are NOT provided for free courses.</strong>
       </div>`
    : `<div class="course-notice green-notice">
        ✅ Students who successfully complete this advanced course will receive an 
        <strong>official certificate from Weber's X World.</strong>
        <br/><br/>
        📌 Depending on student performance and hard work, the course may be completed earlier than the maximum duration.
       </div>`;

  const topicsHTML = course.topics.map(t =>
    `<div class="cdp-topic"><span class="topic-dot">▸</span>${t}</div>`
  ).join('');

  const outcomesHTML = course.outcomes.map(o =>
    `<div class="cdp-outcome"><span class="outcome-check">✓</span>${o}</div>`
  ).join('');

  const priceHTML = type === 'free'
    ? `<div class="cdp-price-row"><span class="price-strike">₹3000</span><span class="price-free">FREE</span></div>`
    : `<div class="cdp-price-row"><span class="price-strike">₹6000</span><span class="price-paid">${course.price}</span></div>`;

  document.getElementById('cdpInner').innerHTML = `
    <div class="cdp-img-wrap">
      <img src="${course.image}" alt="${course.name}" class="cdp-img"
        onerror="this.src='https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'" />
      <div class="cdp-img-overlay"></div>
      <div class="cdp-type-badge ${type === 'free' ? 'free-badge' : 'adv-badge'}">${type === 'free' ? 'FREE COURSE' : 'ADVANCED COURSE'}</div>
    </div>
    <div class="cdp-content">
      <h2 class="cdp-title">${course.name}</h2>
      <div class="cdp-meta-row">
        <div class="cdp-meta-item">⏱ ${course.duration}</div>
        <div class="cdp-meta-item">👨‍🏫 ${course.teacher}</div>
        ${type === 'advanced' ? `<div class="cdp-meta-item gold-meta">${course.price}</div>` : ''}
      </div>
      <p class="cdp-longdesc">${course.longDesc}</p>

      <div class="cdp-section">
        <h4 class="cdp-section-title">📚 Course Content</h4>
        <div class="cdp-topics-grid">${topicsHTML}</div>
      </div>

      <div class="cdp-section">
        <h4 class="cdp-section-title">🎯 What You'll Learn</h4>
        <div class="cdp-outcomes-grid">${outcomesHTML}</div>
      </div>

      ${priceHTML}
      ${noticeHTML}

      <button class="btn-primary cdp-enroll-btn" onclick="openEnroll()">✉️ Enroll Now</button>
    </div>`;

  const overlay = document.getElementById('courseDetailOverlay');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
};

window.closeCourseDetail = function() {
  const overlay = document.getElementById('courseDetailOverlay');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; document.body.style.overflow = ''; }, 400);
};

// Close on backdrop click
document.getElementById('courseDetailOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('courseDetailOverlay')) closeCourseDetail();
});

// ═══════════════════════ ENROLL SYSTEM ═══════════════════════
window.openEnroll = function() {
  if (!currentEnrollCourse) return;
  closeCourseDetail();
  setTimeout(() => {
    document.getElementById('enrollCourseName').textContent =
      `📘 ${currentEnrollCourse.type === 'FREE' ? 'Free' : 'Advanced'} Course: ${currentEnrollCourse.name}`;
    document.getElementById('emailPreview').style.display = 'none';
    document.getElementById('enrollName').value = '';
    document.getElementById('enrollAge').value = '';
    document.getElementById('enrollWA').value = '';

    const overlay = document.getElementById('enrollOverlay');
    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }, 450);
};

window.closeEnroll = function() {
  const overlay = document.getElementById('enrollOverlay');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; document.body.style.overflow = ''; }, 400);
};

document.getElementById('enrollOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('enrollOverlay')) closeEnroll();
});

window.generateEnrollEmail = function() {
  const name = document.getElementById('enrollName').value.trim();
  const age = document.getElementById('enrollAge').value.trim();
  const wa = document.getElementById('enrollWA').value.trim();

  if (!name) { showToast('Please enter your name.', 'error'); return; }
  if (!age) { showToast('Please enter your age.', 'error'); return; }
  if (!wa) { showToast('Please enter your WhatsApp number.', 'error'); return; }

  const courseType = currentEnrollCourse.type === 'FREE' ? 'FREE' : 'ADVANCED';
  const courseName = currentEnrollCourse.name;

  const subject = `Enrollment Request – ${courseName} (${courseType})`;
  const body =
    `Hello Weber's X World,\n\n` +
    `I would like to enroll in your ${courseType} course.\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Student Name : ${name}\n` +
    `Age          : ${age} years\n` +
    `WhatsApp No. : ${wa}\n` +
    `Course Name  : ${courseName}\n` +
    `Course Type  : ${courseType}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `Please share the joining instructions.\n\nThank you.`;

  const previewHtml = `
    <strong>To:</strong> webersxworld@gmail.com<br/>
    <strong>Subject:</strong> ${subject}<br/><br/>
    ${body.replace(/\n/g, '<br/>').replace(/━/g, '─')}`;

  document.getElementById('emailPreviewBox').innerHTML = previewHtml;
  document.getElementById('emailPreview').style.display = 'block';

  const mailtoLink = `mailto:webersxworld@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Store for the button click handler
  const sendBtn = document.getElementById('sendEmailBtn');
  sendBtn.href = mailtoLink;
  sendBtn.onclick = function(e) {
    e.preventDefault();
    window.location.href = mailtoLink;
    return false;
  };

  showToast('Email ready! Click "Send Email" to open your mail app.', 'success');
};

// ═══════════════════════ FAQ SYSTEM ═══════════════════════
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item" onclick="toggleFAQ(${i})">
      <div class="faq-q">
        <span>${item.q}</span>
        <span class="faq-arrow" id="faqArrow${i}">▸</span>
      </div>
      <div class="faq-a" id="faqA${i}">${item.a}</div>
    </div>`).join('');
}

window.toggleFAQ = function(i) {
  const ans = document.getElementById('faqA' + i);
  const arrow = document.getElementById('faqArrow' + i);
  const isOpen = ans.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('rotated'));
  // Open clicked (if wasn't open)
  if (!isOpen) { ans.classList.add('open'); arrow.classList.add('rotated'); }
};

window.openFAQ = function() {
  renderFAQ();
  const overlay = document.getElementById('faqOverlay');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
};

window.closeFAQ = function() {
  const overlay = document.getElementById('faqOverlay');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; document.body.style.overflow = ''; }, 400);
};

document.getElementById('faqOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('faqOverlay')) closeFAQ();
});

// ═══════════════════════ STAR RATING ═══════════════════════
(function initStarRating() {
  const starRating = document.getElementById('starRating');
  if (!starRating) return;

  const stars = starRating.querySelectorAll('.star');

  function setRating(val) {
    document.getElementById('ratingValue').value = val;
    stars.forEach((s, i) => {
      s.classList.toggle('active', i < val);
    });
  }

  function previewRating(val) {
    stars.forEach((s, i) => {
      s.classList.toggle('hover-preview', i < val);
    });
  }

  function clearPreview() {
    stars.forEach(s => s.classList.remove('hover-preview'));
  }

  stars.forEach(star => {
    const val = parseInt(star.getAttribute('data-val'));

    star.addEventListener('click', (e) => {
      e.stopPropagation();
      setRating(val);
      // Burst animation
      star.classList.add('star-burst');
      setTimeout(() => star.classList.remove('star-burst'), 400);
    });

    star.addEventListener('mouseenter', () => previewRating(val));
    star.addEventListener('mouseleave', clearPreview);

    // Also handle clicks on the inner <i> element
    const icon = star.querySelector('i');
    if (icon) {
      icon.style.pointerEvents = 'none'; // forward clicks to parent span
    }
  });
})();

// ═══════════════════════ DASHBOARD ═══════════════════════
window.showDashboard = function() {
  const user = window.currentUser;
  if (!user) { signInGoogle(); return; }

  document.getElementById('dashAvatar').src = user.photoURL || '';
  document.getElementById('dashName').textContent = user.displayName || 'Student';
  document.getElementById('dashEmail').textContent = user.email || '';

  document.getElementById('dashboardOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  if (typeof window.loadCertificates === 'function') window.loadCertificates(user.email);
  if (typeof window.loadUserReviews === 'function') window.loadUserReviews();
};

window.hideDashboard = function() {
  document.getElementById('dashboardOverlay').style.display = 'none';
  document.body.style.overflow = '';
};

window.showDashTab = function(tab, btn) {
  document.querySelectorAll('.dash-pane').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('dash' + tab).style.display = 'block';
  btn.classList.add('active');
};

document.getElementById('dashboardOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('dashboardOverlay')) hideDashboard();
});

// ═══════════════════════ FLOATING WHATSAPP ═══════════════════════
window.toggleWA = function() {
  document.getElementById('fwaPanel').classList.toggle('open');
};

// ═══════════════════════ TOAST ═══════════════════════
window.showToast = function(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => { toast.className = 'toast'; }, 3500);
};

// ═══════════════════════ ESC KEY CLOSE PANELS ═══════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCourseDetail();
    closeEnroll();
    closeFAQ();
    hideDashboard();
  }
});

// ═══════════════════════ ABOUT SECTION PARALLAX ═══════════════════════
(function initAboutParallax() {
  const aboutSection = document.getElementById('about');
  const aboutVisual = aboutSection ? aboutSection.querySelector('.about-visual') : null;
  if (!aboutSection || !aboutVisual) return;

  let targetY = 0;
  let currentY = 0;
  let ticking = false;

  function updateParallax() {
    const rect = aboutSection.getBoundingClientRect();
    const winH = window.innerHeight;
    const sectionH = aboutSection.offsetHeight;

    // Only animate when about section is visible
    const inView = rect.top < winH && rect.bottom > 0;
    if (!inView) { ticking = false; return; }

    // Calculate progress through the section (-1 to 1)
    const progress = (winH / 2 - rect.top) / (sectionH + winH);
    targetY = progress * 60; // max 60px shift, subtle

    ticking = false;
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animFrame() {
    currentY = lerp(currentY, targetY, 0.06);
    aboutVisual.style.transform = `translateY(${currentY.toFixed(2)}px)`;
    requestAnimationFrame(animFrame);
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  animFrame();
})();

// ═══════════════════════ WEB3FORMS CONTACT SUBMIT ═══════════════════════
window.submitContactForm = async function() {
  const btn = document.getElementById('contactSubmitBtn');
  const msg = document.getElementById('contactFormMsg');
  const fields = {
    name: document.getElementById('contactName').value.trim(),
    phone: document.getElementById('contactPhone').value.trim(),
    email: document.getElementById('contactEmail').value.trim(),
    course: document.getElementById('contactCourse').value,
    message: document.getElementById('contactMessage').value.trim()
  };

  // Validate
  if (!fields.name) { showContactMsg('Please enter your name.', 'error'); return; }
  if (!fields.phone) { showContactMsg('Please enter your phone number.', 'error'); return; }
  if (!fields.email || !fields.email.includes('@')) { showContactMsg('Please enter a valid email.', 'error'); return; }
  if (!fields.course) { showContactMsg('Please select a course.', 'error'); return; }
  if (!fields.message) { showContactMsg('Please write a message.', 'error'); return; }

  // Loading state
  btn.disabled = true;
  btn.innerHTML = '<span class="contact-btn-spinner"></span> Sending...';
  msg.style.display = 'none';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: '26ea9f63-491e-47f2-8949-527c9fea1128',
        subject: `New Enquiry from ${fields.name} – ${fields.course}`,
        from_name: 'Weber\'s X World Website',
        name: fields.name,
        phone: fields.phone,
        email: fields.email,
        course: fields.course,
        message: fields.message
      })
    });

    const data = await response.json();

    if (data.success) {
      showContactMsg('✅ Message sent! We\'ll contact you soon.', 'success');
      // Reset form
      ['contactName','contactPhone','contactEmail','contactMessage'].forEach(id => {
        document.getElementById(id).value = '';
      });
      document.getElementById('contactCourse').value = '';
    } else {
      showContactMsg('❌ Something went wrong. Please try again.', 'error');
    }
  } catch (e) {
    showContactMsg('❌ Network error. Please check your connection.', 'error');
  }

  btn.disabled = false;
  btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
};

function showContactMsg(text, type) {
  const msg = document.getElementById('contactFormMsg');
  if (!msg) return;
  msg.textContent = text;
  msg.className = 'contact-form-msg ' + type;
  msg.style.display = 'block';
}

// ═══════════════════════ INIT ═══════════════════════
(function init() {
  renderFreeCourses();
  renderAdvancedCourses();
  observeReveal();
})();
