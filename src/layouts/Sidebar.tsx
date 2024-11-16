import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="flex justify-center">
        <h1 className="text-2xl text-white">Hello World</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
}
