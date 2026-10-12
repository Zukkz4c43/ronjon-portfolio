// ==========================================================================
// RONJON COVITA IBANEZ - PRO DYNAMIC PORTFOLIO INTERACTION LOGIC
// Grade 11 - ASSH HOMER | SOC Analyst & Cyber Defense Pathway
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 0. Pro Cyber Splash Screen Preloader Controller
  const cyberSplash = document.getElementById('cyberSplash');
  const splashBar = document.getElementById('splashBar');
  const splashStatus = document.getElementById('splashStatus');
  const splashPercent = document.getElementById('splashPercent');
  const splashSkipBtn = document.getElementById('splashSkipBtn');

  if (cyberSplash) {
    document.body.style.overflow = 'hidden';
    let progress = 0;
    let isDismissed = false;

    const statusMilestones = [
      { at: 0, text: 'SYSTEM BOOT: INITIALIZING SOC HUD...' },
      { at: 22, text: 'MOUNTING CREDENTIALS: ASSH HOMER...' },
      { at: 48, text: 'CALIBRATING BLUE TEAM DEFENSE MATRIX...' },
      { at: 75, text: 'VERIFYING IDENTITY: RONJON COVITA IBANEZ...' },
      { at: 96, text: 'SECURITY INTEGRITY VERIFIED // 100%' },
      { at: 100, text: 'SYSTEM SECURE &bull; ACCESS GRANTED' }
    ];

    function updateSplashStatus(val) {
      if (!splashStatus) return;
      for (let i = statusMilestones.length - 1; i >= 0; i--) {
        if (val >= statusMilestones[i].at) {
          splashStatus.innerHTML = statusMilestones[i].text;
          break;
        }
      }
    }

    function dismissSplash() {
      if (isDismissed) return;
      isDismissed = true;
      document.body.style.overflow = '';
      if (splashBar) splashBar.style.width = '100%';
      if (splashPercent) splashPercent.textContent = '100%';
      if (splashStatus) splashStatus.innerHTML = 'SYSTEM SECURE &bull; ACCESS GRANTED';

      setTimeout(() => {
        cyberSplash.classList.add('splash-exit');
        setTimeout(() => {
          cyberSplash.style.display = 'none';
        }, 550);
      }, 220);
    }

    if (splashSkipBtn) {
      splashSkipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dismissSplash();
      });
    }

    cyberSplash.addEventListener('click', () => {
      dismissSplash();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        dismissSplash();
      }
    });

    const splashStartTime = performance.now();
    const splashDuration = 1600;

    function tickSplash(now) {
      if (isDismissed) return;
      const elapsed = now - splashStartTime;
      const rawProgress = Math.min(elapsed / splashDuration, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 2.5);
      progress = Math.round(eased * 100);

      if (splashBar) splashBar.style.width = `${progress}%`;
      if (splashPercent) splashPercent.textContent = `${progress}%`;
      updateSplashStatus(progress);

      if (rawProgress < 1) {
        requestAnimationFrame(tickSplash);
      } else {
        dismissSplash();
      }
    }

    requestAnimationFrame(tickSplash);
  }

  // Elements
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('main section');
  const studentCard = document.getElementById('studentCard');
  const printBtns = document.querySelectorAll('.print-btn, .print-btn-callout');
  const shareBtn = document.getElementById('shareBtn');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const liveClock = document.getElementById('liveClock');
  const runScanBtn = document.getElementById('runScanBtn');
  const terminalBody = document.getElementById('terminalBody');
  const cyberCanvas = document.getElementById('cyberCanvas');

  // 1. Dynamic Top Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // 2. Real-time Live HUD Clock
  function updateLiveClock() {
    if (!liveClock) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    liveClock.textContent = `LIVE HUD // ${hours}:${minutes}:${seconds} PHT`;
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // 3. Pro Cyber Defense Operations Canvas (Telemetry Nodes, Dynamic Packets & Radar Scan)
  if (cyberCanvas) {
    const ctx = cyberCanvas.getContext('2d', { alpha: true });
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isMobile = false;
    let particles = [];
    let packets = [];
    let sonarRadius = 0;
    let sonarActive = true;
    let animId = null;

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      cyberCanvas.width = width * dpr;
      cyberCanvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      isMobile = width <= 768;
      initNetwork();
    }

    function initNetwork() {
      particles = [];
      packets = [];
      const count = isMobile ? 26 : Math.min(Math.floor(width / 26), 55);

      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        let role = 'cyan';
        let color = '#00f2fe';
        let baseRadius = 1.6;

        if (rand > 0.92) {
          role = 'gold'; // SOC Command Hub
          color = '#fbbf24';
          baseRadius = 2.4;
        } else if (rand > 0.78) {
          role = 'purple'; // Threat Anomaly Monitor
          color = '#a855f7';
          baseRadius = 2.0;
        } else if (rand > 0.55) {
          role = 'blue'; // Packet Filter
          color = '#38bdf8';
          baseRadius = 1.8;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
          vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
          baseRadius: baseRadius,
          radius: baseRadius,
          role: role,
          color: color,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          flash: 0
        });
      }
    }

    resizeCanvas();
    window.addEventListener('resize', () => {
      clearTimeout(window._resizeTimer);
      window._resizeTimer = setTimeout(resizeCanvas, 150);
    });

    // Pointer tracker (desktop mouse & mobile touch)
    let pointer = {
      x: -1000,
      y: -1000,
      active: false,
      radius: isMobile ? 90 : 130
    };

    window.addEventListener('mousemove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
        pointer.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    });

    let lastPacketTime = 0;

    function renderCanvas(timestamp) {
      ctx.clearRect(0, 0, width, height);

      const maxDistance = isMobile ? 95 : 130;
      const now = timestamp || performance.now();

      // 1. Sonar Radar Pulse Wave
      if (sonarActive) {
        sonarRadius += isMobile ? 1.6 : 2.2;
        const maxSonar = Math.hypot(width, height) * 0.7;
        const sonarAlpha = Math.max(0, 0.22 * (1 - sonarRadius / maxSonar));

        if (sonarAlpha > 0.005) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.45, sonarRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 242, 254, ${sonarAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.restore();
        } else {
          sonarRadius = 0;
        }
      }

      // 2. Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 10) { p.x = 10; p.vx *= -1; }
        else if (p.x > width - 10) { p.x = width - 10; p.vx *= -1; }
        if (p.y < 10) { p.y = 10; p.vy *= -1; }
        else if (p.y > height - 10) { p.y = height - 10; p.vy *= -1; }

        p.pulse += p.pulseSpeed;
        const pulseEffect = (Math.sin(p.pulse) + 1) * 0.5;

        // Sonar detection wave trigger
        const distToCenter = Math.hypot(p.x - width * 0.5, p.y - height * 0.45);
        if (Math.abs(distToCenter - sonarRadius) < 15) {
          p.flash = 1.0;
        }
        if (p.flash > 0) p.flash -= 0.03;

        // Interactive pointer interaction
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < pointer.radius && dist > 1) {
            const force = (pointer.radius - dist) / pointer.radius;
            p.x += (dx / dist) * force * (isMobile ? 1.5 : 2.5);
            p.y += (dy / dist) * force * (isMobile ? 1.5 : 2.5);
          }
        }

        // Draw Node Glow Halo
        const glowRadius = p.baseRadius * (1.8 + pulseEffect * 1.2 + p.flash * 2.0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.role === 'gold' 
          ? `rgba(251, 191, 36, ${0.25 + pulseEffect * 0.2 + p.flash * 0.4})`
          : p.role === 'purple'
          ? `rgba(168, 85, 247, ${0.25 + pulseEffect * 0.2 + p.flash * 0.4})`
          : `rgba(0, 242, 254, ${0.25 + pulseEffect * 0.2 + p.flash * 0.4})`;
        ctx.fill();

        // Draw Core Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius + (p.flash > 0 ? 0.8 : 0), 0, Math.PI * 2);
        ctx.fillStyle = p.flash > 0.4 ? '#ffffff' : p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Extra Command Hub ring
        if (p.role === 'gold') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.baseRadius * 2.8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.4 + pulseEffect * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // 3. Draw Connecting Edges and Spawn Data Packets
      const activeConnections = [];

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(0, 242, 254, ${alpha})`);
            grad.addColorStop(1, p2.role === 'purple' ? `rgba(168, 85, 247, ${alpha})` : `rgba(56, 189, 248, ${alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.85;
            ctx.stroke();

            activeConnections.push({ from: p1, to: p2, dist: dist });
          }
        }

        // Draw Tether to Active Pointer if close
        if (pointer.active) {
          const pDist = Math.hypot(p1.x - pointer.x, p1.y - pointer.y);
          if (pDist < pointer.radius * 1.1) {
            const pAlpha = (1 - pDist / (pointer.radius * 1.1)) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${pAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.setLineDash([2, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // 4. Spawn & Animate Live Cyber Data Packets (Photon pulses)
      if (activeConnections.length > 0 && now - lastPacketTime > (isMobile ? 550 : 350)) {
        if (packets.length < (isMobile ? 6 : 14)) {
          const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
          const forward = Math.random() > 0.5;
          packets.push({
            p1: forward ? conn.from : conn.to,
            p2: forward ? conn.to : conn.from,
            progress: 0,
            speed: (0.012 + Math.random() * 0.018) * (isMobile ? 1.2 : 1.0),
            color: conn.from.color
          });
          lastPacketTime = now;
        }
      }

      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          pkt.p2.flash = 0.8;
          packets.splice(k, 1);
          continue;
        }

        const currX = pkt.p1.x + (pkt.p2.x - pkt.p1.x) * pkt.progress;
        const currY = pkt.p1.y + (pkt.p2.y - pkt.p1.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, isMobile ? 2.0 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(renderCanvas);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
        animId = null;
      } else {
        if (!animId) animId = requestAnimationFrame(renderCanvas);
      }
    });

    animId = requestAnimationFrame(renderCanvas);
  }

  // 4. Cursor Spotlight Tracker
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  // 5. Card Border Spotlight Tracker (Linear / Vercel style)
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 6. Mobile Navigation Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 7. Active Section Spy
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' }
  );
  sections.forEach(sec => sectionObserver.observe(sec));

  // 8. Scroll Reveal Animations & Number Counter Trigger
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Check if this element contains animated numbers
          const numbers = entry.target.querySelectorAll('.hl-number[data-target]');
          numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'), 10);
            const isPercent = num.textContent.includes('%');
            const hasPlus = num.textContent.includes('+');
            let current = 0;
            const step = Math.ceil(target / 25);
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              num.textContent = `${current}${isPercent ? '%' : hasPlus ? '+' : ''}`;
            }, 35);
          });

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach(el => revealObserver.observe(el));

  // 9. Interactive 3D Holographic Card Movement
  if (studentCard) {
    const shine = studentCard.querySelector('.card-glass-shine');

    const handleMouseMove = (e) => {
      const rect = studentCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 14;

      studentCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      if (shine) {
        const moveX = (x / rect.width) * 100;
        const moveY = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255, 255, 255, 0.22) 0%, rgba(0, 242, 254, 0.15) 30%, transparent 65%)`;
      }
    };

    const handleMouseLeave = () => {
      studentCard.style.transform = '';
      if (shine) {
        shine.style.background = `linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.08) 40%, rgba(0, 242, 254, 0.15) 50%, transparent 70%)`;
      }
    };

    studentCard.addEventListener('mousemove', handleMouseMove);
    studentCard.addEventListener('mouseleave', handleMouseLeave);
  }

  // 10. Print / Save to PDF Trigger
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // 11. Share Portfolio Button
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('🔗 Portfolio link copied to clipboard!');
        }).catch(() => {
          showToast('🔗 Ronjon Covita Ibanez Portfolio');
        });
      } else {
        showToast('🔗 Ronjon Covita Ibanez Portfolio');
      }
    });
  }

  // 12. Dynamic Attribute Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const attrCards = {
    interests: document.querySelector('.attr-group-interests'),
    talents: document.querySelector('.attr-group-talents'),
    softskills: document.querySelector('.attr-group-softskills')
  };

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      Object.entries(attrCards).forEach(([key, card]) => {
        if (!card) return;
        if (filter === 'all' || filter === key) {
          card.classList.remove('dimmed');
        } else {
          card.classList.add('dimmed');
        }
      });
    });
  });

  // 13. Interactive SOC Cyber Console Diagnostic Run
  if (runScanBtn && terminalBody) {
    let isScanning = false;
    runScanBtn.addEventListener('click', () => {
      if (isScanning) return;
      isScanning = true;
      runScanBtn.disabled = true;
      runScanBtn.querySelector('span').textContent = 'SCANNING IN PROGRESS...';

      const scanSteps = [
        { text: '[INIT] Calibrating SOC perimeter sensors...', class: 'term-info', delay: 300 },
        { text: '[VERIFY] Student Profile: Ronjon Covita Ibanez &bull; Section: ASSH HOMER... MATCH 100%', class: 'term-success', delay: 700 },
        { text: '[ANALYZE] Core Competencies: Teamwork [95%], Time Management [90%], Responsibility [96%]... OPTIMAL', class: 'term-success', delay: 1200 },
        { text: '[INSPECT] Roadmap Checkpoint: Finish Senior High School with Honors... ON TRACK', class: 'term-info', delay: 1700 },
        { text: '[CLEARANCE] Verified for higher studies in BSIT / Cybersecurity... GRANTED ✔', class: 'term-highlight', delay: 2200 }
      ];

      scanSteps.forEach(step => {
        setTimeout(() => {
          const p = document.createElement('p');
          p.className = `term-line ${step.class}`;
          p.innerHTML = step.text;
          terminalBody.insertBefore(p, terminalBody.lastElementChild);
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }, step.delay);
      });

      setTimeout(() => {
        isScanning = false;
        runScanBtn.disabled = false;
        runScanBtn.querySelector('span').textContent = 'RE-RUN INTEGRITY SCAN';
        showToast('🛡️ Security Diagnostic Complete: 0 Vulnerabilities');
      }, 2500);
    });
  }

  // 14. Interactive Timeline Steps
  const timelineSteps = document.querySelectorAll('.timeline-step');
  timelineSteps.forEach(step => {
    step.addEventListener('click', () => {
      timelineSteps.forEach(s => s.classList.remove('active-step'));
      step.classList.add('active-step');
      const stepNum = step.getAttribute('data-step');
      const title = step.querySelector('.step-title')?.textContent || 'Roadmap Step';
      showToast(`🎯 Step ${stepNum}: ${title}`);
    });
  });

  // 15. Soft Skills Click Toast
  const softTags = document.querySelectorAll('.soft-tag');
  softTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const skillName = tag.querySelector('strong')?.textContent || 'Skill';
      showToast(`🛡️ Core Value: ${skillName}`);
      tag.style.transform = 'scale(0.95)';
      setTimeout(() => tag.style.transform = '', 150);
    });
  });

  // 16. Competency Meter Animation on Scroll
  const meterBars = document.querySelectorAll('.meter-bar');
  const meterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.style.getPropertyValue('--level') || '85%';
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  meterBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    meterObserver.observe(bar);
  });

  // 17. Interactive Cyber Toast Notification
  function showToast(message) {
    let toast = document.getElementById('portfolioToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolioToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: rgba(14, 25, 53, 0.95);
        color: #f8fafc;
        border: 1px solid rgba(0, 242, 254, 0.4);
        border-radius: 12px;
        padding: 12px 20px;
        font-family: var(--font-main);
        font-size: 0.82rem;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(0,242,254,0.25);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateY(30px);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
        backdrop-filter: blur(14px);
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      toast.style.transform = 'translateY(30px)';
      toast.style.opacity = '0';
    }, 2800);
  }
});
