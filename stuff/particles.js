const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let particleCount = document.body.clientWidth / 15;
const maxDistance = 30;
const lineDistance = 25;
const mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = document.body.clientWidth / 15;
    createParticles();
    drawParticles();
}

function createParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 1.3
    });
  }
}

function drawParticles() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(40, 40, 40, 0.3)';
    ctx.fill();
    });
}

function updateParticles() {
    particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    p.vx += (Math.random() - 0.5) * 0.1;
    p.vy += (Math.random() - 0.5) * 0.1;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < maxDistance) {
      const angle = Math.atan2(dy, dx);
      p.vx += Math.cos(angle);
      p.vy += Math.sin(angle);
    }

    if (Math.abs(p.vx) > 0.01) {
      p.vx *= 0.99;
    }
    if (Math.abs(p.vy) > 0.01) {
      p.vy *= 0.99;
    }
    });
}

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
    let linesDrawn = 0;
    for (let j = i + 1; j < particles.length && linesDrawn < 2; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < lineDistance) {
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[j].x, particles[j].y);
      ctx.strokeStyle = `rgba(60, 60, 60, 0.1)`;
      ctx.stroke();
      linesDrawn++;
      }
    }
    }
}
  
function animate() {
  updateParticles();
  drawParticles();
  drawLines();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

resizeCanvas();
createParticles();
animate();