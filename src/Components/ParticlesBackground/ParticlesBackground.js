
"use strict";

// import { useRef, useEffect } from 'react';
// import styles from './ParticlesBackground.module.css';

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ParticlesBackground_module_css_1 = require("./ParticlesBackground.module.css");



var createParticle = function () {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
    };
};

var ParticlesBackground = function (_a) {
    var className = _a.className;
    console.log("it was rendered");
    var canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!canvasRef.current)
            return;
        var canvas = canvasRef.current;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var particles = Array.from({ length: 100 }, createParticle);
        var draw = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(function (particle) {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
            });
        };
        var update = function () {
            particles.forEach(function (particle) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.speedX *= -1;
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.speedY *= -1;
                }
            });
        };
        var loop = function () {
            draw();
            update();
            requestAnimationFrame(loop);
        };
        var animationFrameId = requestAnimationFrame(loop);
        return function () {
            // Clean up the animation loop when the component is unmounted
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return <canvas ref={canvasRef} className={"".concat(ParticlesBackground_module_css_1.default.particles, " ").concat(className)}></canvas>;
};

// export default ParticlesBackground;

// const colors = ['blue', 'green', 'red', 'yellow', 'purple'];

// const ParticlesBackground = ({ className = '' }) => {
//     const canvasRef = useRef(null);
//     const colorIndex = useRef(0);

//     useEffect(() => {
//         if (!canvasRef.current) return;
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;
//         canvas.width = 200;
//         canvas.height = 200;

//         const update = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillStyle = colors[colorIndex.current % colors.length];
//             ctx.fillRect(0, 0, 50, 50);

//             colorIndex.current += 1;
//         };

//         update();

//         const intervalId = setInterval(update, 1000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     return <canvas ref={canvasRef} className={`${styles.particles} ${className}`}></canvas>;
// };

export default ParticlesBackground;

