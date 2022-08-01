import { react } from "@babel/types";
import { Button } from "antd";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

let Subcom: React.FC<{ data: { pname: string }; index: string }> = (props) => {
  const { pname } = props.data;

  useEffect(() => {
    console.log("子组件更新----", props);
  });
  return (
    <>
      <h2>{`${props.index}`}</h2>
      <h2>{`my name is ${pname}`}</h2>;
    </>
  );
};

// React.memo包裹的子组件会通过对props进行浅比较来判断是否更新
Subcom = React.memo(Subcom);

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

  const pro = useMemo(() => {
    return { pname: "xiangshjangzjio" };
  }, []);

  return (
    <>
      <div>内容</div>
      <Button onClick={clickHandler}>count++(父组件更新)</Button>
      {/* <Button
        onClick={() => {
          setStr(str + "h");
        }}
      >
        str++
      </Button> */}

      {/* 每次传入一个新对象，子组件一定会更新 */}
      <Subcom index="1" data={{ pname: "xiangshjangzjio" }} />
      {/* usememo包裹后指向同一个地址，子组件不会更新 */}
      <Subcom index="2" data={pro} />
    </>
  );
};

export default Com;
