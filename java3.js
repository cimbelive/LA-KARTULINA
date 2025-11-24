document.addEventListener("DOMContentLoaded", () => {
  // Crear canvas con ID para mejor control
  const canvas = document.createElement("canvas");
  canvas.id = "bubbleCanvas";
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext("2d");
  let bubbles = [];
  let animationId;

  function setCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Ajustar para pantallas de alta resolución
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Escalar el contexto para pantallas de alta resolución
    ctx.scale(dpr, dpr);
    
    // Crear burbujas basadas en el ancho de pantalla
    const bubbleCount = Math.floor(width * 0.5); // Ajustado para mejor rendimiento
    bubbles = [];
    
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble(width, height));
    }
  }

  // Constructor de burbujas mejorado
  function Bubble(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + Math.random() * 100;
    this.radius = Math.random() * 3 + 1;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = `rgba(255, 255, 255, ${this.opacity})`;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = -Math.random() * 5 - 1;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Actualizar y dibujar cada burbuja
    bubbles.forEach((bubble) => {
      // Mover burbuja
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;
      
      // Reiniciar si sale por arriba
      if (bubble.y + bubble.radius < 0) {
        bubble.y = height + bubble.radius;
        bubble.x = Math.random() * width;
        bubble.vy = -Math.random() * 5 - 1;
      }
      
      // Rebotar en los bordes laterales
      if (bubble.x < 0 || bubble.x > width) {
        bubble.vx *= -1;
        bubble.x = bubble.x < 0 ? 0 : width;
      }
      
      // Dibujar burbuja
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = bubble.color;
      ctx.fill();
      
      // Borde sutil
      ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.closePath();
    });
    
    animationId = requestAnimationFrame(animate);
  }

  // Redimensionar canvas
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      cancelAnimationFrame(animationId);
      setCanvas();
      animate();
    }, 150);
  });

  // Inicializar
  setCanvas();
  animate();

  // Ajustes para Google Sites (solo si es necesario)
  function adjustForGoogleSites() {
    const siteContainers = [
      '.sites-canvas-main',
      '.sites-layout-hbox',
      '.sites-layout-vbox',
      '#sites-canvas'
    ];
    
    siteContainers.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.height = '100vh';
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.overflow = 'hidden';
      }
    });
  }

  // Solo ejecutar si estamos en Google Sites
  if (window.location.hostname.includes('sites.google.com')) {
    setTimeout(adjustForGoogleSites, 100);
    setInterval(adjustForGoogleSites, 3000);
  }
});
