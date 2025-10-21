import { useState, useEffect } from 'react';

export function useCountUp(end: number, start = 0, duration = 2000, isVisible: boolean) {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = performance.now();
    const endTime = startTime + duration;
    
    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);
      
      if (currentTime < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    const animationId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationId);
  }, [end, start, duration, isVisible]);
  
  return count;
}
