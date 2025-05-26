class BrushBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.colors = [
            { r: 255, g: 215, b: 0, a: 0.005 },  // 类似金色的黄色 (#FFD700), 透明度极低
            { r: 244, g: 67, b: 54, a: 0.005 },  // 暖红色 (#F44336), 透明度极低
            { r: 139, g: 195, b: 74, a: 0.005 },  // 类似抹茶的绿色 (#8BC34A), 透明度极低
            { r: 255, g: 255, b: 240, a: 0.002 } // 类似背景色的淡黄色，模拟底色叠加，透明度极低
        ];
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particles = [];
        this.createParticles();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    createParticles() {
        const numParticles = 250000;
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        const sprayAreas = [
            { centerX: canvasWidth * 0.2, centerY: canvasHeight * 0.85, radiusX: canvasWidth * 0.20, radiusY: canvasHeight * 0.25, colorIndex: 1, densityPower: 2.5 },
            { centerX: canvasWidth * 0.8, centerY: canvasHeight * 0.3, radiusX: canvasWidth * 0.3, radiusY: canvasHeight * 0.3, colorIndex: 0, densityPower: 2.2 },
            { centerX: canvasWidth * 0.7, centerY: canvasHeight * 0.8, radiusX: canvasWidth * 0.35, radiusY: canvasHeight * 0.4, colorIndex: 0, densityPower: 1.8 },
            { centerX: canvasWidth * 0.9, centerY: canvasHeight * 0.9, radiusX: canvasWidth * 0.10, radiusY: canvasHeight * 0.18, colorIndex: 2, densityPower: 3.0 },
            { centerX: canvasWidth * 0.4, centerY: canvasHeight * 0.6, radiusX: canvasWidth * 0.4, radiusY: canvasHeight * 0.5, colorIndex: 3, densityPower: 1.0 }
        ];

        for (let i = 0; i < numParticles; i++) {
            let x, y, colorIndex;

            const area = sprayAreas[Math.floor(Math.random() * sprayAreas.length)];
            colorIndex = area.colorIndex;

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.pow(Math.random(), area.densityPower);
            x = area.centerX + Math.cos(angle) * area.radiusX * distance;
            y = area.centerY + Math.sin(angle) * area.radiusY * distance;

            x = Math.max(0, Math.min(canvasWidth, x));
            y = Math.max(0, Math.min(canvasHeight, y));

            const color = this.colors[colorIndex];
            const size = Math.random() * 0.3 + 0.05;

            this.particles.push({
                x,
                y,
                size,
                color,
                initialX: x,
                initialY: y
            });
        }
    }

    drawParticle(x, y, size, color) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        this.ctx.fill();
    }

    animate() {
        if (this.particles.length > 0 && !this.drawn) {
            this.particles.forEach(particle => {
                this.drawParticle(particle.x, particle.y, particle.size, particle.color);
            });
            this.drawn = true;
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'brush-background';
    document.body.prepend(canvas);
    const background = new BrushBackground(canvas);
}); 