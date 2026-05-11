/* ═══════════════════════════════════════════════════════════════
   WEBER'S X WORLD — script.js
   Particles · Cursor · Loading · Navbar · Courses · Animations
═══════════════════════════════════════════════════════════════ */

'use strict';

// ═══════════════════════ APPS SCRIPT URL ═══════════════════════
// Replace with your deployed Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxtWi4JVG4HsvD9tZ3nbOATLq_wu1UozicFWLL5_aSJUcbMGTWNmeyeTPO7lhJkq3J6Tw/exec';
const SHEETS_API_URL = '18I53hW67If2xkVvohpPuGNXGQoprrCQbXFfnVziRHEg';

// ═══════════════════════ COURSE DATA ═══════════════════════
const FREE_COURSES = [
    {
        id: 'basic-computer',
        name: 'Basic of Computer',
        icon: '💻',
        duration: '10–15 Days',
        desc: 'Kickstart your digital journey. Learn computer fundamentals, OS basics, file management, and essential software skills used in everyday life.',
        teacher: 'Salik',
        teacherInitial: 'S',
        whatsapp: [{ label: 'Chat with Sir', num: '917069331761', type: 'sir' }]
    },
    {
        id: 'web-design',
        name: 'Web Design',
        icon: '🌐',
        duration: '12–15 Days',
        desc: 'Build beautiful websites from scratch. Covers HTML structure, CSS styling, responsive design principles, and hands-on project creation.',
        teacher: 'Salik',
        teacherInitial: 'S',
        whatsapp: [{ label: 'Chat with Sir', num: '917069331761', type: 'sir' }]
    },
    {
        id: 'graphic-design',
        name: 'Graphic Design',
        icon: '🎨',
        duration: '10–12 Days',
        desc: 'Unleash your creativity. Learn design fundamentals, color theory, typography, and industry-standard tools to create stunning visuals.',
        teacher: 'Munazza',
        teacherInitial: 'M',
        whatsapp: [{ label: 'Chat with Mam', num: '917069878373', type: 'mam' }]
    },
    {
        id: 'ai-tools',
        name: 'Exploring AI Tools',
        icon: '🤖',
        duration: '5–10 Days',
        desc: 'Navigate the AI revolution confidently. Explore ChatGPT, image generation, AI productivity tools, and practical real-world applications.',
        teacher: 'Salik & Munazza',
        teacherInitial: 'S',
        whatsapp: [
            { label: 'Chat with Sir', num: '917069331761', type: 'sir' },
            { label: 'Chat with Mam', num: '917069878373', type: 'mam' }
        ]
    },
    {
        id: 'video-editing',
        name: 'Video Editing',
        icon: '🎬',
        duration: '10–14 Days',
        desc: 'Transform raw footage into cinematic stories. Master cuts, transitions, color grading, audio syncing, and export for any platform.',
        teacher: 'Munazza',
        teacherInitial: 'M',
        whatsapp: [{ label: 'Chat with Mam', num: '917069878373', type: 'mam' }]
    }
];

const ADVANCED_COURSES = [
    { id: 'adv-computer', name: 'Advanced Basic of Computer', icon: '🖥️', teacher: 'Salik', teacherInitial: 'S', whatsapp: [{ label: 'Chat with Sir', num: '917069331761', type: 'sir' }] },
    { id: 'adv-web', name: 'Advanced Web Design', icon: '⚡', teacher: 'Salik', teacherInitial: 'S', whatsapp: [{ label: 'Chat with Sir', num: '917069331761', type: 'sir' }] },
    { id: 'adv-graphic', name: 'Advanced Graphic Design', icon: '✨', teacher: 'Munazza', teacherInitial: 'M', whatsapp: [{ label: 'Chat with Mam', num: '917069878373', type: 'mam' }] },
    {
        id: 'adv-ai', name: 'Advanced AI Tools', icon: '🧠', teacher: 'Salik & Munazza', teacherInitial: 'S', whatsapp: [
            { label: 'Chat with Sir', num: '917069331761', type: 'sir' },
            { label: 'Chat with Mam', num: '917069878373', type: 'mam' }
        ]
    },
    { id: 'adv-video', name: 'Advanced Video Editing', icon: '🎥', teacher: 'Munazza', teacherInitial: 'M', whatsapp: [{ label: 'Chat with Mam', num: '917069878373', type: 'mam' }] },
];

// ═══════════════════════ LOADING SCREEN ═══════════════════════
window.addEventListener('load', () => {
    setTimeout(() => {
        const ls = document.getElementById('loadingScreen');
        if (ls) ls.classList.add('hidden');
        // Try showing hero fallback logo if image fails
        const heroFallback = document.getElementById('heroFallback');
        const heroLogo = document.getElementById('heroLogo');
        if (heroLogo && heroLogo.naturalWidth === 0) {
            heroLogo.style.display = 'none';
            heroFallback.style.display = 'flex';
        }
    }, 2400);
});

// ═══════════════════════ CUSTOM CURSOR ═══════════════════════
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (cursorDot) {
        cursorDot.style.left = mx - 4 + 'px';
        cursorDot.style.top = my - 4 + 'px';
    }
});

function animateCursor() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    if (cursorRing) {
        cursorRing.style.left = rx - 16 + 'px';
        cursorRing.style.top = ry - 16 + 'px';
    }
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .course-card, .rule-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorRing) { cursorRing.style.width = '48px'; cursorRing.style.height = '48px'; }
    });
    el.addEventListener('mouseleave', () => {
        if (cursorRing) { cursorRing.style.width = '32px'; cursorRing.style.height = '32px'; }
    });
});

// ═══════════════════════ PARTICLES ═══════════════════════
(function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    window.addEventListener('resize', () => {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });

    const PARTICLES = 70;
    const particles = [];

    for (let i = 0; i < PARTICLES; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.5 + 0.1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p, i) => {
            // Drift
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;

            // Draw
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity})`;
            ctx.fill();

            // Connect nearby
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dist = Math.hypot(p.x - q.x, p.y - q.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(201, 162, 39, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
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
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('section[id], div[id]');
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

window.toggleMenu = function () {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
};

window.toggleUserMenu = function () {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('open');
};

document.addEventListener('click', e => {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown && !e.target.closest('.nav-user')) {
        dropdown.classList.remove('open');
    }
    const navLinks = document.getElementById('navLinks');
    if (navLinks && !e.target.closest('#navbar')) {
        navLinks.classList.remove('open');
    }
});

// ═══════════════════════ SCROLL REVEAL ═══════════════════════
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

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
            const step = Math.ceil(target / 50);
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
async function renderFreeCourses() {
    const grid = document.getElementById('freeCoursesGrid');
    if (!grid) return;

    // Try fetching batch statuses from Google Sheets (optional)
    let batchMap = {};
    try {
        const res = await fetch(SHEETS_API_URL + '?action=getBatches');
        if (res.ok) {
            const data = await res.json();
            data.forEach(b => { batchMap[b.course] = b; });
        }
    } catch (e) {
        // Sheets not configured yet — show default active
    }

    let html = '';
    FREE_COURSES.forEach((course, i) => {
        const batch = batchMap[course.name];
        const isActive = !batch || batch.status === 'ACTIVE';
        const batchLabel = batch ? batch.batchName : 'Batch 1';

        const waButtons = course.whatsapp.map(wa => `
      <a href="https://wa.me/${wa.num}?text=Hello!%20I%20want%20to%20join%20the%20${encodeURIComponent(course.name)}%20course%20at%20Weber's%20X%20World."
         target="_blank"
         class="wa-btn-${wa.type}">
        💬 ${wa.label}
      </a>`).join('');

        const statusHTML = isActive
            ? `<div class="batch-status status-active"><span class="status-dot"></span>${batchLabel} — Active</div>`
            : `<div class="batch-status status-inactive"><span class="status-dot"></span>Talk to Sir/Mam to Join</div>`;

        html += `
      <div class="course-card reveal" style="animation-delay:${i * 0.08}s">
        <div class="course-card-header">
          <div class="course-icon">${course.icon}</div>
          <div class="course-title-wrap">
            <div class="course-name">${course.name}</div>
            <div class="course-duration">⏱ ${course.duration}</div>
          </div>
        </div>
        <div class="course-body">
          <p class="course-desc">${course.desc}</p>
          <div class="course-teacher">
            <div class="ct-avatar">${course.teacherInitial}</div>
            <div class="ct-name">By ${course.teacher}</div>
          </div>
          ${statusHTML}
          <div class="course-price">
            <span class="price-strike">₹3000</span>
            <span class="price-free">FREE</span>
          </div>
          <div class="course-card-btns">
            ${waButtons}
          </div>
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
        const waButtons = course.whatsapp.map(wa => `
      <a href="https://wa.me/${wa.num}?text=Hello!%20I%20want%20to%20know%20about%20the%20${encodeURIComponent(course.name)}%20at%20Weber's%20X%20World."
         target="_blank"
         class="wa-btn-${wa.type}">
        💬 ${wa.label}
      </a>`).join('');

        html += `
      <div class="course-card reveal" style="animation-delay:${i * 0.08}s">
        <div class="course-card-header">
          <div class="course-icon">${course.icon}</div>
          <div class="course-title-wrap">
            <div class="course-name">${course.name}</div>
            <div class="course-duration">💎 Advanced Level</div>
          </div>
        </div>
        <div class="course-body">
          <div class="course-teacher">
            <div class="ct-avatar">${course.teacherInitial}</div>
            <div class="ct-name">By ${course.teacher}</div>
          </div>
          <div class="course-price">
            <span class="price-paid">₹6000</span>
          </div>
          <p class="adv-contact-note">📩 Contact Sir/Mam for joining & payment details</p>
          <div class="course-card-btns">
            ${waButtons}
          </div>
        </div>
      </div>`;
    });

    grid.innerHTML = html;
    observeReveal();
}

// ═══════════════════════ STAR RATING ═══════════════════════
document.addEventListener('click', e => {
    if (e.target.classList.contains('star')) {
        const val = parseInt(e.target.getAttribute('data-val'));
        document.getElementById('ratingValue').value = val;
        document.querySelectorAll('.star').forEach((s, i) => {
            s.classList.toggle('active', i < val);
        });
    }
});

// ═══════════════════════ DASHBOARD ═══════════════════════
window.showDashboard = function () {
    const user = window.currentUser;
    if (!user) { signInGoogle(); return; }

    document.getElementById('dashAvatar').src = user.photoURL || '';
    document.getElementById('dashName').textContent = user.displayName || 'Student';
    document.getElementById('dashEmail').textContent = user.email || '';

    document.getElementById('dashboardOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Load certificates into dashboard
    if (typeof window.loadCertificates === 'function') {
        window.loadCertificates(user.email);
    }
    if (typeof window.loadUserReviews === 'function') {
        window.loadUserReviews();
    }
};

window.hideDashboard = function () {
    document.getElementById('dashboardOverlay').style.display = 'none';
    document.body.style.overflow = '';
};

window.showDashTab = function (tab, btn) {
    document.querySelectorAll('.dash-pane').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('dash' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
    btn.classList.add('active');
};

// Close overlay on backdrop click
document.getElementById('dashboardOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('dashboardOverlay')) hideDashboard();
});

// ═══════════════════════ FLOATING WHATSAPP ═══════════════════════
window.toggleWA = function () {
    document.getElementById('fwaPanel').classList.toggle('open');
};

// ═══════════════════════ TOAST ═══════════════════════
window.showToast = function (msg, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show ' + type;
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.className = 'toast';
    }, 3500);
};

// ═══════════════════════ WELCOME EMAIL (Apps Script) ═══════════════════════
window.sendWelcomeEmail = async function (name, email) {
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_APPS')) return;
    try {
        await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'sendWelcomeEmail', name, email })
        });
    } catch (e) {
        console.warn('Email send skipped (Apps Script not configured)');
    }
};

// ═══════════════════════ SMOOTH SCROLL ═══════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            // Close mobile menu
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// ═══════════════════════ INIT ═══════════════════════
(function init() {
    renderFreeCourses();
    renderAdvancedCourses();
    observeReveal();

    // Logo fallback setup
    ['heroLogo', 'navLogo', 'loaderLogo'].forEach(id => {
        const img = document.getElementById(id);
        if (!img) return;
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const fallbackId = id.replace('Logo', 'Fallback').replace('loader', 'loader');
            const fallback = document.getElementById(
                id === 'loaderLogo' ? 'loaderFallback' :
                    id === 'navLogo' ? 'navFallback' :
                        'heroFallback'
            );
            if (fallback) fallback.style.display = 'flex';
        });
    });
})();

// ═══════════════════════ REVIEW SYSTEM ═══════════════════════

window.submitReview = async function () {

    if (!window.currentUser) {
        showToast("Please login first ❌", "error");
        return;
    }

    const reviewText = document.getElementById("reviewText").value.trim();
    const rating = document.getElementById("ratingValue").value;

    if (!reviewText) {
        showToast("Write your review first ✍️", "error");
        return;
    }

    if (!rating || rating == "0") {
        showToast("Please select rating ⭐", "error");
        return;
    }

    const course = document.getElementById("reviewCourse").value;

    try {

        // CHECK DUPLICATE REVIEW
        const q = query(
            collection(window.db, "reviews"),
            where("email", "==", window.currentUser.email),
            where("course", "==", course)
        );

        const existing = await getDocs(q);

        if (!existing.empty) {
            showToast("You already reviewed this course ⚠️", "error");
            return;
        }

        // SAVE REVIEW
        await addDoc(collection(window.db, "reviews"), {

            name: window.currentUser.displayName,
            email: window.currentUser.email,
            photo: window.currentUser.photoURL,
            text: reviewText,
            rating: rating,
            course: course,
            createdAt: new Date()

        });

        showToast("Review Submitted Successfully ✅", "success");

        document.getElementById("reviewText").value = "";
        document.getElementById("ratingValue").value = "0";

        document.querySelectorAll(".star").forEach(s => {
            s.classList.remove("active");
        });

        loadReviews();

    } catch (error) {

        console.error(error);

        showToast(error.message, "error");

    }

};


// ═══════════════════════ LOAD REVIEWS ═══════════════════════

window.loadReviews = async function () {

    const reviewsGrid = document.getElementById("reviewsGrid");

    if (!reviewsGrid) return;

    try {

        const snapshot = await getDocs(collection(window.db, "reviews"));

        let html = "";

        snapshot.forEach(doc => {

            const r = doc.data();

            html += `
        <div class="review-card reveal">
          <div class="review-top">
            <img src="${r.photo}" class="review-avatar">
            <div>
              <h4>${r.name}</h4>
              <p>${r.course}</p>
            </div>
          </div>

          <div class="review-stars">
  ${"⭐".repeat(parseInt(r.rating) || 0)}
</div>

          <p class="review-text">${r.text}</p>
        </div>
      `;

        });

        reviewsGrid.innerHTML = html;

    } catch (error) {

  console.error("Review Load Error:", error);

}

};

// ═════════════════ PUBLIC REVIEWS ═════════════════

async function loadPublicReviews() {

    const reviewsGrid = document.getElementById('reviewsGrid');

    if (!reviewsGrid) {
        console.log("reviewsGrid not found");
        return;
    }

    try {

        const snapshot = await window.getDocs(
            window.collection(window.db, "reviews")
        );

        console.log("Reviews Found:", snapshot.size);

        if (snapshot.empty) {

            reviewsGrid.innerHTML = `
                <div class="no-reviews">
                    No Reviews Yet
                </div>
            `;

            return;
        }

        let html = '';

        snapshot.forEach(doc => {

            const r = doc.data();

            const rating = parseInt(r.rating) || 0;

            html += `
                <div class="review-card">

                    <div class="review-top">
                        <img src="${r.photo}" class="review-avatar">

                        <div>
                            <h4>${r.name}</h4>
                            <p>${r.course}</p>
                        </div>
                    </div>

                    <div class="review-stars">
                        ${'⭐'.repeat(rating)}
                    </div>

                    <p class="review-text">
                        ${r.text}
                    </p>

                </div>
            `;
        });

        reviewsGrid.innerHTML = html;

        console.log("Reviews Rendered Successfully ✅");

    } catch (error) {

        console.error("Public Review Error:", error);

    }
}


// AUTO LOAD
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        loadPublicReviews();

    }, 1500);

});

// ═════════════════ CERTIFICATES ═════════════════

async function loadCertificates() {

    if (!window.currentUser) return;

    const certGrid = document.getElementById("certificateGrid");

    if (!certGrid) return;

    try {

        const q = window.query(
            window.collection(window.db, "certificates"),
            window.where("email", "==", window.currentUser.email)
        );

        const snapshot = await window.getDocs(q);

        if (snapshot.empty) {

            certGrid.innerHTML = `
                <div class="no-certificates">
                    No Certificates Found
                </div>
            `;

            return;
        }

        let html = '';

        snapshot.forEach(doc => {

            const cert = doc.data();

            html += `
                <div class="certificate-card">

                    <img 
                        src="${cert.certificateURL}" 
                        class="certificate-image"
                    >

                    <h3>${cert.course}</h3>

                    <a 
                        href="${cert.certificateURL}" 
                        target="_blank"
                        class="download-btn"
                    >
                        View Certificate
                    </a>

                </div>
            `;
        });

        certGrid.innerHTML = html;

    } catch (error) {

        console.error("Certificate Error:", error);

    }
}

/* ════════════════════════════════════════════════════════════════
   GOOGLE APPS SCRIPT — REFERENCE CODE
   Deploy this as a separate Google Apps Script Web App
   ════════════════════════════════════════════════════════════════

   CODE.GS (copy this into your Apps Script project):

   function doPost(e) {
     const data = JSON.parse(e.postData.contents);

     if (data.action === 'sendWelcomeEmail') {
       sendWelcomeEmailFn(data.name, data.email);
     }

     return ContentService
       .createTextOutput(JSON.stringify({ status: 'ok' }))
       .setMimeType(ContentService.MimeType.JSON);
   }

   function doGet(e) {
     if (e.parameter.action === 'getBatches') {
       return getBatches();
     }
     return ContentService.createTextOutput('OK');
   }

   function sendWelcomeEmailFn(name, email) {
     const subject = "Welcome to Weber's X World 🌟";
     const html = `
     <div style="background:#020510;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
       <div style="text-align:center;padding:30px;background:linear-gradient(135deg,#0a1535,#0f1d4a);border:1px solid rgba(201,162,39,0.3);border-radius:16px;margin-bottom:24px;">
         <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#c9a227,#a88218);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#020510;">WX</div>
         <h1 style="color:#c9a227;font-size:28px;margin:0 0 8px;">Weber's X World</h1>
         <p style="color:#6a7a9b;font-size:14px;margin:0;">Premium Online Education</p>
       </div>
       <div style="background:rgba(10,21,53,0.8);border:1px solid rgba(201,162,39,0.15);border-radius:12px;padding:32px;">
         <h2 style="color:#ffffff;font-size:22px;margin:0 0 16px;">Welcome, ${name}! 🎉</h2>
         <p style="color:#a0aec0;line-height:1.7;margin:0 0 20px;">You have successfully logged into <strong style="color:#c9a227;">Weber's X World</strong>. We're thrilled to have you as part of our growing learning community.</p>
         <div style="background:rgba(201,162,39,0.06);border:1px solid rgba(201,162,39,0.2);border-radius:8px;padding:20px;margin-bottom:20px;">
           <h3 style="color:#c9a227;margin:0 0 12px;font-size:15px;">📋 Important Reminders</h3>
           <ul style="color:#a0aec0;margin:0;padding-left:20px;line-height:1.8;">
             <li>All classes are conducted <strong style="color:#ffffff;">LIVE on Google Meet</strong></li>
             <li>No recorded lectures are provided</li>
             <li>Homework must be completed on time</li>
             <li>Active participation is required</li>
             <li>Serious learning environment only</li>
           </ul>
         </div>
         <p style="color:#a0aec0;line-height:1.7;margin:0 0 24px;">If you have any questions, contact us directly on WhatsApp.</p>
         <div style="display:flex;gap:12px;flex-wrap:wrap;">
           <a href="https://wa.me/917069331761" style="background:#25d366;color:#ffffff;padding:10px 20px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:700;">💬 Contact Sir</a>
           <a href="https://wa.me/917069878373" style="background:#c9a227;color:#020510;padding:10px 20px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:700;">💬 Contact Mam</a>
         </div>
       </div>
       <p style="text-align:center;color:#4a5a7b;font-size:12px;margin-top:24px;">© 2026 Weber's X World. All Rights Reserved.<br/>Online Learning · Live Classes · Real Skills</p>
     </div>`;

     MailApp.sendEmail({ to: email, subject: subject, htmlBody: html });
   }

   function getBatches() {
     const ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
     const sheet = ss.getSheetByName('Batches');
     const rows = sheet.getDataRange().getValues();
     const result = [];
     for (let i = 1; i < rows.length; i++) {
       result.push({
         course:     rows[i][0],
         courseType: rows[i][1],
         status:     rows[i][2],
         batchName:  rows[i][3]
       });
     }
     return ContentService
       .createTextOutput(JSON.stringify(result))
       .setMimeType(ContentService.MimeType.JSON);
   }

   ════════════════════════════════════════════════════════════════
   FIREBASE RULES — FIRESTORE (paste in Firebase Console)
   ════════════════════════════════════════════════════════════════

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {

       // Students can only read/write their own doc
       match /students/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }

       // Certificates: only owner can read their own
       match /certificates/{certId} {
         allow read: if request.auth != null && request.auth.token.email == resource.data.email;
         allow write: if false; // Admin only via Firebase Console
       }

       // Reviews: anyone can read; logged-in users can create (not update)
       match /reviews/{reviewId} {
         allow read: if true;
         allow create: if request.auth != null;
         allow update, delete: if false;
       }

       // Batches: read-only for everyone
       match /batches/{batchId} {
         allow read: if true;
         allow write: if false;
       }
     }
   }

   ════════════════════════════════════════════════════════════════
   FIREBASE RULES — STORAGE
   ════════════════════════════════════════════════════════════════

   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /certificates/{allPaths=**} {
         allow read: if request.auth != null;
         allow write: if false;
       }
     }
   }

   ════════════════════════════════════════════════════════════════
   DEPLOYMENT INSTRUCTIONS
   ════════════════════════════════════════════════════════════════

   1. Upload all 3 files (index.html, style.css, script.js) to
      Firebase Hosting or any static host.

   2. In Firebase Console:
      - Enable Google Authentication
      - Create Firestore collections: certificates, reviews, students
      - Apply Firestore and Storage rules above

   3. Create Google Apps Script:
      - New project at script.google.com
      - Paste the CODE.GS above
      - Deploy as Web App (Execute as: Me, Who has access: Anyone)
      - Copy the URL and replace APPS_SCRIPT_URL in script.js

   4. Create Google Sheet for batches:
      - Columns: Course Name | Course Type | Status | Batch Name
      - Share with your Apps Script
      - Replace YOUR_SPREADSHEET_ID in Apps Script

   5. To add certificates:
      - Upload PDF to Firebase Storage: certificates/course-name/file.pdf
      - Copy download URL
      - Add Firestore doc to 'certificates' collection:
        { email: "student@gmail.com", course: "Web Design", certificateURL: "..." }
   ════════════════════════════════════════════════════════════════
*/
