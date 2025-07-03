import { useEffect, useRef } from "react";
import { initThreeJS, animate, handleResize } from "@/lib/three-setup";

export default function ThreeModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initializeThreeJS = async () => {
      const { scene, camera, renderer, wireframeCube, smallCubes, cleanup } = await initThreeJS(containerRef.current!);
      
      // Start animation loop
      const stopAnimation = animate(scene, camera, renderer, wireframeCube, smallCubes);

      // Handle window resize
      const handleWindowResize = () => {
        if (containerRef.current) {
          handleResize(camera, renderer, containerRef.current);
        }
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
        stopAnimation();
        cleanup();
      };
    };

    let cleanupFn: (() => void) | undefined;

    initializeThreeJS().then(cleanup => {
      cleanupFn = cleanup;
    }).catch(console.error);

    return () => {
      if (cleanupFn) {
        cleanupFn();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-container"
    />
  );
}
