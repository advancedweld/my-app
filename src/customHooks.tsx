import React, { useCallback, useEffect, useRef, useState } from "react";

type Iprops = {
  initCount: number;
  delay: number;
};
const useCountDown = ({ initCount, delay }: Iprops) => {
  const [count, setCount] = useState<any>(initCount);

  const timerRef = useRef<number | undefined>();

  const handler = () => {
    timerRef.current = setTimeout(() => {
      if (count === 100) {
        setCount(initCount);
      } else {
        setCount(count + 1);
      }
    }, delay * 1000);
  };

  useEffect(() => {
    // timerRef.current = setTimeout(() => {
    //   setCount(count + 1);
    // }, delay * 1000);
    handler();
    return () => clearTimeout(timerRef.current);
  }, [count]);

  const clear = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const goOn = useCallback(() => {
    handler();
  }, [count]);
  return { count, clear, goOn };
};

export { useCountDown };
