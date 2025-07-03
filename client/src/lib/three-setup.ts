declare global {
  interface Window {
    THREE: any;
  }
}

// Load Three.js from CDN
const loadThreeJS = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.THREE) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export const initThreeJS = async (container: HTMLElement) => {
  await loadThreeJS();
  
  const THREE = window.THREE;
  
  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFFFFFF);
  
  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  
  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);
  
  // Create wireframe architectural structure
  const geometry = new THREE.BoxGeometry(2, 3, 1.5);
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
  const wireframeCube = new THREE.LineSegments(edges, lineMaterial);
  scene.add(wireframeCube);
  
  // Additional geometric elements
  const smallGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const smallEdges = new THREE.EdgesGeometry(smallGeometry);
  const smallCubes: any[] = [];
  
  for (let i = 0; i < 3; i++) {
    const smallCube = new THREE.LineSegments(smallEdges, lineMaterial);
    smallCube.position.set(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 2
    );
    scene.add(smallCube);
    smallCubes.push(smallCube);
  }
  
  const cleanup = () => {
    if (container && renderer.domElement && container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    renderer.dispose();
  };
  
  return { scene, camera, renderer, wireframeCube, smallCubes, cleanup };
};

export const animate = (scene: any, camera: any, renderer: any, wireframeCube: any, smallCubes: any[]) => {
  let animationId: number;
  
  const animateLoop = () => {
    animationId = requestAnimationFrame(animateLoop);
    
    if (wireframeCube) {
      // Slow rotation for brutalist aesthetic
      wireframeCube.rotation.x += 0.005;
      wireframeCube.rotation.y += 0.01;
    }
    
    // Rotate small cubes as well
    smallCubes.forEach((cube, index) => {
      if (cube) {
        cube.rotation.x += 0.002 * (index + 1);
        cube.rotation.y += 0.003 * (index + 1);
      }
    });
    
    renderer.render(scene, camera);
  };
  
  animateLoop();
  
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
};

export const handleResize = (camera: any, renderer: any, container: HTMLElement) => {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
};
