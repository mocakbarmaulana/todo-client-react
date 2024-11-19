import { useContext } from "react";
import { Layout, Menu } from "antd";
import { SidebarContext } from "@context/SidebarContext";
import { LogoipsumShortWhite, LogoipsumLongWhite } from "@assets/index";
import { menus } from "@configs/index";
import { useNavigate } from "react-router-dom";

import "@assets/styles/sidebar.css";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();
  const { collapsed, activeKey } = useContext(SidebarContext);
  const menu = menus();

  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: "#027DFC",
      }}
    >
      <div className="flex justify-center p-3">
        <img
          src={collapsed ? LogoipsumShortWhite : LogoipsumLongWhite}
          alt="logo"
          className="w-36 h-7"
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ background: "#027DFC", color: "white" }}
        selectedKeys={[activeKey]}
        items={menu}
        onClick={({ key }) => handleClick(key)}
      />
    </Sider>
  );
}
