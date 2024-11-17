import { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { SidebarContext } from "@context/SidebarContext";
import { LogoipsumShort, LogoipsumLong } from "@assets/index";

const { Sider } = Layout;

export default function Sidebar() {
  const { collapsed } = useContext(SidebarContext);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="flex justify-center p-3">
        <img src={collapsed ? LogoipsumShort : LogoipsumLong} alt="logo" className="w-36 h-7" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["5"]}
        // make sure text is not cut off
        style={{ overflow: "auto", textOverflow: "ellipsis" }}
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
          {
            key: "4",
            icon: <UserOutlined />,
            label: "nav 4",
            extra: "extra",
            children: [
              {
                key: "5",
                icon: <VideoCameraOutlined />,
                label: "nav 5",
              },
              {
                key: "6",
                icon: <UploadOutlined />,
                label: "nav 6",
                children: [
                  {
                    key: "7",
                    icon: <UserOutlined />,
                    label: "nav 7",
                    children: [
                      {
                        key: "8",
                        icon: <VideoCameraOutlined />,
                        label: "nav 8 test hello world",
                        children: [
                          {
                            key: "9",
                            icon: <UploadOutlined />,
                            label: "nav 9",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Sider>
  );
}
