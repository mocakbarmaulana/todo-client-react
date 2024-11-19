import { Layout as LayoutAntd, theme } from "antd";
import { Outlet } from "react-router-dom";

export default function Content() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutAntd.Content
      style={{
        margin: "1.5rem 1rem",
        padding: "1rem",
        minHeight: "calc(100vh - 10rem)",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </LayoutAntd.Content>
  );
}
