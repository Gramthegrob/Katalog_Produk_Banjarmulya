import React, { forwardRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
  className = '',
  ...props
}, ref) => {
  const { ref: intersectionRef, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce,
  });

  const animationClasses = {
    'fade-up': 'animate-on-scroll',
    'fade-down': 'opacity-0 translate-y-[-50px] transition-all duration-800 ease-out',
    'fade-left': 'slide-left-on-scroll',
    'fade-right': 'slide-right-on-scroll',
    'scale': 'scale-on-scroll',
    'slide-left': 'slide-left-on-scroll',
    'slide-right': 'slide-right-on-scroll',
  };

  const activeClasses = {
    'fade-up': 'in-view',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'in-view',
    'fade-right': 'in-view',
    'scale': 'in-view',
    'slide-left': 'in-view',
    'slide-right': 'in-view',
  };

  const baseClass = animationClasses[animation];
  const activeClass = isIntersecting ? activeClasses[animation] : '';
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        if (typeof ref === 'function') {
          ref(node as HTMLDivElement);
        } else if (ref) {
          ref.current = node as HTMLDivElement;
        }
        if (intersectionRef) {
          (intersectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      }}
      className={`${baseClass} ${activeClass} ${className}`}
      style={delayStyle}
      {...props}
    >
      {children}
    </Component>
  );
});

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;