import React, { useEffect, useState } from "react";
import { useCountDown } from "./customHooks.tsx";

export default () => {
  const {
    count: ct1,
    clear: cl1,
    goOn: goOn1,
  } = useCountDown({ initCount: 10, delay: 1 });
  const {
    count: ct2,
    clear: cl2,
    goOn: goOn2,
  } = useCountDown({
    initCount: 20,
    delay: 0.5,
  });

  return (
    <div>
      <p>{`当前计时-------${ct1}`}</p>
      <button onClick={cl1}>clear1</button>
      <button onClick={goOn1}>goon1</button>
      <p>{`当前计时-------${ct2}`}</p>
      <button onClick={cl2}>clear2</button>
      <button onClick={goOn2}>goon2</button>
    </div>
  );
};
