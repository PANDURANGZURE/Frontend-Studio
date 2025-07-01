'use client';
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Footer from "../Components/Footer";

function App() {
  const [html, setHtml] = useState(`    <div class="container">
        <canvas id="particleCanvas"></canvas>
        <div class="content">
            <h1 class="title">Frontend Studio</h1>
            <p class="description">Start your journey with us and build your own website </p>
             <p class="description">Made with Love and Efforts By Saurav Zure</p>
            <div class="controls">
                <button id="colorBtn" class="btn">Change Colors</button>
                <button id="speedBtn" class="btn">Toggle Speed</button>
                <button id="resetBtn" class="btn">Reset</button>
            </div>
        </div>
    </div>`);
  const [css, setCss] = useState(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%);
    overflow: hidden;
    height: 100vh;
    cursor: crosshair;
}

.container {
    position: relative;
    width: 100%;
    height: 100vh;
}

#particleCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    pointer-events: none;
}

.title {
    font-size: 3.5rem;
    font-weight: 300;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease-in-out infinite;
    margin-bottom: 1rem;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.5s forwards;
}

.controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1s forwards;
}

.btn {
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    pointer-events: all;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}

.btn:active {
    transform: translateY(0);
}

@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }
    
    .description {
        font-size: 1rem;
    }
    
    .controls {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        padding: 10px 20px;
        font-size: 0.8rem;
    }
}
`);
  const [js, setJs] = useState(`class ParticleGalaxy {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.colorSchemes = [
            ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            ['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'],
            ['#ff3838', '#ff9500', '#ffdd59', '#32ff7e', '#7efff5'],
            ['#fd79a8', '#fdcb6e', '#6c5ce7', '#74b9ff', '#00b894'],
            ['#ff7675', '#fd79a8', '#fdcb6e', '#00b894', '#74b9ff']
        ];
        this.currentColorScheme = 0;
        this.speedMultiplier = 1;
        this.connectionDistance = 120;
        
        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.min(150, Math.floor((this.canvas.width * this.canvas.height) / 10000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: this.getRandomColor(),
                opacity: Math.random() * 0.8 + 0.2,
                originalVx: (Math.random() - 0.5) * 2,
                originalVy: (Math.random() - 0.5) * 2,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    getRandomColor() {
        const colors = this.colorSchemes[this.currentColorScheme];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        document.getElementById('colorBtn').addEventListener('click', () => {
            this.changeColorScheme();
        });

        document.getElementById('speedBtn').addEventListener('click', () => {
            this.toggleSpeed();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            this.reset();
        });
    }

    changeColorScheme() {
        this.currentColorScheme = (this.currentColorScheme + 1) % this.colorSchemes.length;
        this.particles.forEach(particle => {
            particle.color = this.getRandomColor();
        });
    }

    toggleSpeed() {
        this.speedMultiplier = this.speedMultiplier === 1 ? 3 : 1;
    }

    reset() {
        this.createParticles();
        this.speedMultiplier = 1;
        this.currentColorScheme = 0;
    }

    updateParticles() {
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                const angle = Math.atan2(dy, dx);
                particle.vx -= Math.cos(angle) * force * 0.5;
                particle.vy -= Math.sin(angle) * force * 0.5;
            } else {
                // Return to original velocity gradually
                particle.vx += (particle.originalVx - particle.vx) * 0.02;
                particle.vy += (particle.originalVy - particle.vy) * 0.02;
            }

            // Update position
            particle.x += particle.vx * this.speedMultiplier;
            particle.y += particle.vy * this.speedMultiplier;

            // Boundary wrapping
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Pulse effect
            particle.pulse += 0.02;
            particle.currentSize = particle.size + Math.sin(particle.pulse) * 0.5;
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = particle.color;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.currentSize, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const particle1 = this.particles[i];
                const particle2 = this.particles[j];
                
                const dx = particle1.x - particle2.x;
                const dy = particle1.y - particle2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const opacity = (this.connectionDistance - distance) / this.connectionDistance * 0.3;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = particle1.color;
                    this.ctx.lineWidth = 1;
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = particle1.color;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle1.x, particle1.y);
                    this.ctx.lineTo(particle2.x, particle2.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }

    drawMouseEffect() {
        if (this.mouse.x === -1000) return;

        const gradient = this.ctx.createRadialGradient(
            this.mouse.x, this.mouse.y, 0,
            this.mouse.x, this.mouse.y, 100
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        this.ctx.save();
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.mouse.x, this.mouse.y, 100, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        this.drawMouseEffect();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleGalaxy();
});

// Add some extra sparkle effects
class SparkleEffect {
    constructor() {
        this.sparkles = [];
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        setInterval(() => this.createSparkle(), 500);
        setInterval(() => this.updateSparkles(), 16);
    }

    createSparkle() {
        if (this.sparkles.length < 20) {
            this.sparkles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                opacity: 1,
                decay: Math.random() * 0.02 + 0.01
            });
        }
    }

    updateSparkles() {
        this.sparkles = this.sparkles.filter(sparkle => {
            sparkle.opacity -= sparkle.decay;
            
            if (sparkle.opacity > 0) {
                this.ctx.save();
                this.ctx.globalAlpha = sparkle.opacity;
                this.ctx.fillStyle = '#ffffff';
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = '#ffffff';
                
                this.ctx.beginPath();
                this.ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
                
                return true;
            }
            return false;
        });
    }
}

// Initialize sparkle effect
setTimeout(() => {
    new SparkleEffect();
}, 1000);
`);
  const [srcDoc, setSrcDoc] = useState("");
  const [activeTab, setActiveTab] = useState('html');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const getEditorValue = () => {
    if (activeTab === 'html') return html;
    if (activeTab === 'css') return css;
    if (activeTab === 'js') return js;
  };

  const handleEditorChange = (value) => {
    if (!value) return;
    if (activeTab === 'html') setHtml(value);
    if (activeTab === 'css') setCss(value);
    if (activeTab === 'js') setJs(value);
  };

  const handleDownloadZip = () => {
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("style.css", css);
    zip.file("script.js", js);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "saurav.zip");
    });
  };

  return (
    <div className="bg-black w-full min-h-screen relative overflow-x-hidden">
      
      {/* Header & Title */}
      <Header />
      <div className="md:m-8 m-3">
        <p className="text-white text1 text-xl md:text-3xl p-2">HTML, CSS & JS Compiler</p>
        <p className="text-white px-2 text2 text-xs md:text-sm">Made with Love and Efforts By Saurav Zure</p>
      </div>

      {/* Tab Bar + Download Button */}
      <div className="bg-[#181818] md:m-10 m-5 rounded-xl z-50 ">
        <div className="flex gap-2 p-2 ">
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
        </div>
        <div className=" bg-[#202020] m-2  rounded-xl">

        <div className="flex flex-col z-50 md:flex-row md:justify-between md:items-center px-2 md:px- pt-2 md:pt-4 gap-2 md:gap-0">
        <div className="flex text-white font-mono space-x-2 md:space-x-4 justify-center md:justify-start">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 rounded-t-md text-xs md:text-base ${
                activeTab === tab
                  ? 'bg-[#181818] border-b-2 border-blue-500'
                  : 'bg-[#3c3c3c] hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'html' && 'index.html'}
              {tab === 'css' && 'style.css'}
              {tab === 'js' && 'script.js'}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownloadZip}
          className="before:ease text-white relative z-50 md:h-12 md:w-40 overflow-hidden bg-[#181818] border border-white bg-[#3c3c3c] mb-1 text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-700 hover:before:-translate-x-40 rounded-3xl"
        >
          Download ZIP
        </button>
      </div>

      {/* Editor & Output Responsive Layout */}
      <div className="flex z-50 flex-col md:flex-row w-full h-[80vh] md:h-[70vh] border-t border-gray-800 mt-2 md:mt-0">
        {/* Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-700">
          <Editor
            theme="vs-dark"
            language={activeTab === 'js' ? 'javascript' : activeTab}
            value={getEditorValue()}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
            }}
            height="100%"
          />
        </div>

        {/* Output */}
        <div className="w-full z-50 md:w-1/2 h-1/2 md:h-full border-t md:border-t-0 border-gray-700">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="bg-white"
          />
        </div>
      </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
