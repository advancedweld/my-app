import React, { useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const TableCustomer = () => {
  const components = {
    body: {
      row: (props) => {
        console.log("表格row props------", props);
        return (
          <>
            <div>这是一行</div>
            {props.children}
          </>
        );
      },
      cell: (props) => {
        console.log("表格cell props------", props);
        return (
          <span
            style={{
              display: "inline-block",
              width: "300px",
              background: "blue",
              border: "1px solid red",
            }}
          >
            cell
          </span>
        );
      },
    },
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // state = {
  //   selectedRowKeys: [], // Check here to configure the default column
  // };

  const onSelectChange = (selectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <>
      {!!selectedRowKeys.length && (
        <div>{`已选择${selectedRowKeys.length}项`}</div>
      )}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        components={components}
      />
    </>
  );
};

export default TableCustomer;
