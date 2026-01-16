let width = window.innerWidth;
let height = window.innerHeight;
let stars = [];

class Star {
    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 2;
        this.size = this.finalSize * 2;
        this.alpha = 1;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.turbulence = () => Math.random() * 0.5 - 0.25;
        this.timeElapsed = 0;
    }

    draw() {
        ctx.fillStyle = `#956a25`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(deltaTime) {
        this.x += this.velocityX + this.turbulence();
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.alpha = Math.max(0, this.alpha - 0.005);

        this.timeElapsed += deltaTime;
        if (this.timeElapsed < 2000) {
            this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 2000);
        } else {
            this.size = this.finalSize;
        }
    } 
}


let lastMouseX = 0;
let lastMouseY = 0;
let mouseVelocityX = 0;
let mouseVelocityY = 0;

function addStar(e) {
    mouseVelocityX = e.clientX - lastMouseX;
    mouseVelocityY = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    let randomOffsetX = (Math.random() - 0.5) * 100;
    let randomOffsetY = (Math.random() - 0.5) * 100;

    stars.push(new Star(e.clientX, e.clientY, mouseVelocityX + randomOffsetX, mouseVelocityY + randomOffsetY));
}

canvas.addEventListener('mousemove', addStar);

let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    stars.forEach(star => star.update(deltaTime));
    stars.forEach(star => star.draw());
    stars = stars.filter(star => star.alpha > 0 && star.y < height && star.x > 0 && star.x < width);
    requestAnimationFrame(update);
}

update();