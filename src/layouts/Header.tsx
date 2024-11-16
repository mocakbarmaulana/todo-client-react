import { useContext } from "react";
import { Layout, theme, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SidebarContext } from "@context/SidebarContext";

const { Header: HeaderAnt } = Layout;

export default function Header() {
  const { collapsed, toggleSidebar } = useContext(SidebarContext)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <HeaderAnt style={{ padding: 0, background: colorBgContainer, height: "4rem" }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          fontSize: "16px",
          width: 64,
          height: "4rem",
        }}
      />
    </HeaderAnt>
  );
}
