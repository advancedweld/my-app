import React, { useRef, useState } from 'react';
import { Button, Drawer, Space } from 'antd';

const RefCom = () => {
  const ref = useRef(0);
  const changeRef = () => {
    ref.current = Math.random() * 100;
    console.log('ref-----', ref.current);
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>{`当前ref ${ref.current}`}</h1>

      <Space>
        <Button type="primary" onClick={changeRef}>
          改变ref
        </Button>

        <Button onClick={() => setOpen((open) => !open)}>抽屉</Button>
      </Space>

      <div style={{ height: '300px' }}>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>

      {/* <Drawer open={open}>
        <div>抽屉内容啦啦啦啦啦</div>
      </Drawer> */}
    </div>
  );
};

export default RefCom;
