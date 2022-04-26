import React, { useRef, useState } from "react";
import _ from "lodash";
import "./App.css";

const ChildScroll = (props: any) => {
  const { children, itemHeight = 50 } = props;

  console.log("滚动子组件-----", props);

  const containerRef = useRef();
  const [virtualParam, setVirtual] = useState({
    startIndex: 0,
    endIndex: 9,
  });

  const scrollHandle = (e) => {
    console.log("滚动事件------", e);
    console.log("滚动事件current------", containerRef.current);

    const length = children?.length || 0;
    // 容器高度
    const containerHeight = containerRef.current?.clientHeight || 600;
    // 内容总高度
    const contentHeight = length * itemHeight;
    // 可视区展示数量
    const viewNums = Math.ceil(containerHeight / itemHeight);

    const _startIndex = Math.floor(
      (containerRef?.current?.scrollTop || 0) / itemHeight
    );

    const startIndex = Math.max(_startIndex - Math.floor(viewNums / 2), 0);
    const endIndex = _startIndex + Math.floor(viewNums / 2) + viewNums;

    // const startIndex = _startIndex;
    // const endIndex = _startIndex + viewNums;

    console.log("开始下标-----", startIndex, "结束下标------", endIndex);
    setVirtual({
      startIndex,
      endIndex,
    });
  };

  const renderLIst = () => {
    return children.slice(virtualParam.startIndex, virtualParam.endIndex + 1);
  };

  const length = children?.length || 0;
  const paddingTop = virtualParam.startIndex * itemHeight;
  const paddingBotttom = (length - virtualParam.endIndex - 1) * itemHeight;

  return (
    <div
      style={{
        height: "500px",
        overflow: "scroll",
      }}
      onScroll={(e) => {
        scrollHandle(e);
      }}
      ref={containerRef}
    >
      <div
        className="childScroll"
        style={{
          padding: `${paddingTop}px 0 ${paddingBotttom}px 0`,
        }}
      >
        {/* {children} */}
        {renderLIst()}
      </div>
    </div>
  );
};

export default ChildScroll;
