import { Button } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Com = (props: any) => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState("");
  const ref = useRef<number | undefined>();

  // useEffect(() => {
  //   console.log("count is -----", count);
  //   console.log("str is -----", str);
  //   console.log("ref is -------", ref.current);
  // }, [count]);

  useEffect(() => {
    myFn();
  });

  const myFn = useCallback(() => {
    console.log("count is -----", count);
    console.log("str is -----", str);
    console.log("ref is -------", ref.current);
  }, [str]);
  const clickHandler = () => {
    setCount(count + 1);
    ref.current = count;
  };
  return (
    <>
      <div>内容</div>
      <Button onClick={clickHandler}>count++</Button>
      <Button
        onClick={() => {
          setStr(str + "h");
        }}
      >
        str++
      </Button>
    </>
  );
};

export default Com;
