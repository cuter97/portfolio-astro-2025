import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Animation = () => {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;

    if (!layer1 || !layer2) return;

    // Timeline para la animación de entrada
    const tl = gsap.timeline();

    // Estado inicial
    gsap.set([layer1, layer2], {
      x: '100%',
      width: '100%',
    });

    // Animación de entrada (initial -> animate)
    tl.to(layer1, {
      x: '0%',
      width: '0%',
      duration: 0.6,
      ease: 'power2.inOut',
      delay: 0.2,
    })
      .to(layer2, {
        x: '0%',
        width: '0%',
        duration: 0.6,
        ease: 'power2.inOut',
      }, '-=0.4'); // Se superpone 0.4s con la animación anterior

    // Cleanup function para cuando el componente se desmonte
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div
        ref={layer1Ref}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-popover"
      />
      <div
        ref={layer2Ref}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-400 bg-orange-700"
      />
    </div>
  );
};
