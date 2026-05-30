(function() {
  const topics = [{"slug":"basics","title":"The Basics","description":"Start here. The foundational concepts.","articles":["what-is-cybersecurity","threats-vulnerabilities-risks","cia-triad","what-is-encryption"]},{"slug":"attacks","title":"How Attacks Work","description":"Understanding the offense.","articles":["what-is-phishing","what-is-malware","what-is-ransomware","what-is-ddos","what-is-social-engineering","what-is-a-zero-day"]},{"slug":"defense","title":"How Defense Works","description":"The tools and practices that protect you.","articles":["what-is-a-firewall","what-is-antivirus","what-is-mfa","what-is-a-vpn","what-is-zero-trust","what-is-endpoint-detection"]},{"slug":"identity","title":"Identity & Access","description":"Who are you, and how does the system know?","articles":["what-is-authentication","what-are-credentials","what-is-identity-theft","what-is-privilege-escalation"]},{"slug":"data","title":"Data & Privacy","description":"What happens to your information.","articles":["what-is-a-data-breach","what-is-the-dark-web","what-is-gdpr","what-is-data-encryption-at-rest"]},{"slug":"organizations","title":"For Organizations","description":"How businesses handle security.","articles":["what-is-incident-response","what-is-a-security-audit","what-is-penetration-testing","what-is-compliance","what-is-devsecops","what-is-a-bug-bounty"]},{"slug":"advanced","title":"Advanced Concepts","description":"Deeper territory.","articles":["what-are-supply-chain-attacks","what-is-cyber-warfare","what-is-offensive-security","what-is-threat-intelligence"]}];

  const canvas = document.createElement('canvas');
  const container = document.getElementById('graph');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const colors = ['#6c5ce7', '#e17055', '#00b894', '#fdcb6e', '#0984e3', '#e84393', '#00cec9'];

  const nodes = [];
  topics.forEach((topic, ti) => {
    topic.articles.forEach((slug) => {
      const exists = true;
      nodes.push({
        id: slug,
        label: slug.replace(/-/g, ' ').replace(/what (is|are) /i, ''),
        color: colors[ti % colors.length],
        topic: topic.title,
        exists,
        x: canvas.width / 2 + (Math.random() - 0.5) * 400,
        y: canvas.height / 2 + (Math.random() - 0.5) * 350,
        vx: 0, vy: 0,
        radius: 8,
      });
    });
  });

  const links = [];
  topics.forEach(topic => {
    for (let i = 0; i < topic.articles.length - 1; i++) {
      links.push({ source: topic.articles[i], target: topic.articles[i + 1] });
    }
  });

  const crossLinks = [
    ['what-is-cybersecurity', 'threats-vulnerabilities-risks'],
    ['what-is-encryption', 'what-is-a-vpn'],
    ['what-is-phishing', 'what-is-social-engineering'],
    ['what-is-malware', 'what-is-ransomware'],
    ['what-is-authentication', 'what-is-mfa'],
    ['what-is-a-firewall', 'what-is-zero-trust'],
    ['what-is-a-data-breach', 'what-is-incident-response'],
    ['what-is-penetration-testing', 'what-is-a-security-audit'],
    ['what-is-a-zero-day', 'what-are-supply-chain-attacks'],
    ['what-is-identity-theft', 'what-are-credentials'],
    ['what-is-cyber-warfare', 'what-is-threat-intelligence'],
    ['what-is-antivirus', 'what-is-endpoint-detection'],
  ];

  crossLinks.forEach(([source, target]) => {
    if (nodes.find(n => n.id === source) && nodes.find(n => n.id === target)) {
      links.push({ source, target, cross: true });
    }
  });

  function simulate() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = 2000 / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        nodes[i].vx -= fx; nodes[i].vy -= fy;
        nodes[j].vx += fx; nodes[j].vy += fy;
      }
    }
    links.forEach(link => {
      const s = nodes.find(n => n.id === link.source);
      const t = nodes.find(n => n.id === link.target);
      if (!s || !t) return;
      const dx = t.x - s.x; const dy = t.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - 120) * 0.005;
      const fx = (dx / dist) * force; const fy = (dy / dist) * force;
      s.vx += fx; s.vy += fy; t.vx -= fx; t.vy -= fy;
    });
    nodes.forEach(n => {
      n.vx += (canvas.width / 2 - n.x) * 0.001;
      n.vy += (canvas.height / 2 - n.y) * 0.001;
    });
    nodes.forEach(n => {
      n.vx *= 0.9; n.vy *= 0.9;
      n.x += n.vx; n.y += n.vy;
      n.x = Math.max(40, Math.min(canvas.width - 40, n.x));
      n.y = Math.max(40, Math.min(canvas.height - 40, n.y));
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    links.forEach(link => {
      const s = nodes.find(n => n.id === link.source);
      const t = nodes.find(n => n.id === link.target);
      if (!s || !t) return;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(t.x, t.y);
      ctx.strokeStyle = link.cross ? 'rgba(100,100,120,0.12)' : 'rgba(100,100,120,0.25)';
      ctx.lineWidth = link.cross ? 1 : 1.5; ctx.stroke();
    });
    nodes.forEach(n => {
      ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = n.color; ctx.fill();
      ctx.font = '11px Inter, -apple-system, sans-serif';
      ctx.fillStyle = document.documentElement.classList.contains('light') ? 'rgba(26,26,46,0.8)' : 'rgba(232,232,240,0.8)';
      ctx.textAlign = 'center';
      ctx.fillText(n.label, n.x, n.y + n.radius + 14);
    });
  }

  let animating = true;
  function loop() {
    if (animating) { simulate(); draw(); requestAnimationFrame(loop); }
  }
  loop();
  setTimeout(() => { animating = false; draw(); }, 6000);

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left; const my = e.clientY - rect.top;
    for (const n of nodes) {
      if (Math.sqrt((mx-n.x)**2 + (my-n.y)**2) < 15) {
        window.location.href = '/articles/' + n.id; return;
      }
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left; const my = e.clientY - rect.top;
    let hovering = false;
    for (const n of nodes) {
      if (Math.sqrt((mx-n.x)**2 + (my-n.y)**2) < 15) { hovering = true; break; }
    }
    canvas.style.cursor = hovering ? 'pointer' : 'default';
  });
})();
