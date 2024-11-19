import { Layout as LayoutAntd } from 'antd';
import { Sidebar, Header, Content, Footer } from '@layouts/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const paths = path.split("/");

    // check all paths is empty then navigate to home
    if (paths.every((path) => path === "")) {
      navigate("/home");
    }

  }, [location]);

  return (
    <LayoutAntd>
      <Sidebar />
      <LayoutAntd>
        <Header />
        <Content />
        <Footer />
      </LayoutAntd>
    </LayoutAntd>
  );
}