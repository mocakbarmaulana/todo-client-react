import { Layout as LayoutAntd } from 'antd';
import { Sidebar, Header, Content } from '@layouts/index';

export default function Layout() {
  return (
    <LayoutAntd>
      <Sidebar />
      <LayoutAntd>
        <Header />
        <Content />
      </LayoutAntd>
    </LayoutAntd>
  );
}