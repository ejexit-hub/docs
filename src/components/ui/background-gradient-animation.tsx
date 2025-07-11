'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const BackgroundGradientAnimation = ({
  firstColor = '129, 186, 84', // Your green color
  secondColor = '39, 100, 173', // Your blue color
  thirdColor = '129, 186, 84', // Your green color  
  fourthColor = '39, 100, 173', // Your blue color
  fifthColor = '129, 186, 84', // Your green color
  pointerColor = '39, 100, 173', // Your blue color
  size = '50%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const secondaryBlobRef = useRef<HTMLDivElement>(null);

  // Use refs to store animation values instead of state
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  // Set up gradient background colors for dark theme
  const gradientBackgroundStart = '#1a1e23';
  const gradientBackgroundEnd = '#23272f';

  // Set up CSS variables
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.setProperty(
        '--gradient-background-start',
        gradientBackgroundStart,
      );
      document.body.style.setProperty(
        '--gradient-background-end',
        gradientBackgroundEnd,
      );
      document.body.style.setProperty('--first-color', firstColor);
      document.body.style.setProperty('--second-color', secondColor);
      document.body.style.setProperty('--third-color', thirdColor);
      document.body.style.setProperty('--fourth-color', fourthColor);
      document.body.style.setProperty('--fifth-color', fifthColor);
      document.body.style.setProperty('--pointer-color', pointerColor);
      document.body.style.setProperty('--size', size);
      document.body.style.setProperty('--blending-value', blendingValue);
    }
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Set up Safari detection
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

  // Set up animation loop and initialize center position
  useEffect(() => {
    if (!interactive) return;

    // Initialize spotlight in center of component
    tgXRef.current = 0;
    tgYRef.current = 0;
    curXRef.current = 0;
    curYRef.current = 0;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }

      // Calculate new position with easing
      curXRef.current =
        curXRef.current + (tgXRef.current - curXRef.current) / 20;
      curYRef.current =
        curYRef.current + (tgYRef.current - curYRef.current) / 20;

      // Apply transform to main blob
      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;

      // Apply transform to secondary blob with slight offset for layered effect
      if (secondaryBlobRef.current) {
        secondaryBlobRef.current.style.transform = `translate(${Math.round(curXRef.current * 0.8)}px, ${Math.round(curYRef.current * 0.8)}px)`;
      }

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animateMovement);

    // Clean up animation loop on unmount
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    // Update target position directly in ref (no state update)
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      className={classNames(
        'absolute inset-0 w-full h-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
        'animate-[fadeIn_1.5s_ease-out]',
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Interactive mouse tracking area - at top level */}
      {interactive && (
        <div
          onMouseMove={handleMouseMove}
          className="absolute inset-0 w-full h-full z-50 pointer-events-auto"
        >
          <div
            ref={interactiveRef}
            className="absolute w-96 h-96 -top-48 -left-48 pointer-events-none z-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(39, 100, 173, 0.8) 0%, rgba(39, 100, 173, 0.4) 30%, rgba(39, 100, 173, 0) 70%)',
              mixBlendMode: 'screen',
              opacity: 0.9,
              // border: '2px solid red', // Remove debug border
            }}
          />
          {/* Secondary blue glow for more prominent effect */}
          <div
            ref={secondaryBlobRef}
            className="absolute w-64 h-64 -top-32 -left-32 pointer-events-none z-25"
            style={{
              background: 'radial-gradient(circle at center, rgba(39, 100, 173, 1) 0%, rgba(39, 100, 173, 0.6) 40%, rgba(39, 100, 173, 0) 80%)',
              mixBlendMode: 'screen',
              opacity: 0.7,
            }}
          />
        </div>
      )}
      
      <div className={classNames(className)}>{children}</div>
      
      <div
        className={classNames(
          'gradients-container h-full w-full blur-lg',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]',
        )}
      >
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_1)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-100px)_calc(50%-400px)]`,
            `animate-fifth`,
            `opacity-100`,
          )}
        ></div>
      </div>
    </div>
  );
};