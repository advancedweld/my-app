import React, { useRef, useState } from 'react';
import { Button, Drawer, Space, Modal } from 'antd';

const ModalButton: React.FC = () => {
  const onpen = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
    });
  };
  return <Button onClick={onpen}>弹框</Button>;
};

export default ModalButton;
