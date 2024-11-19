import { Layout } from "@layouts/index";
import { SidebarProvider } from "@context/SidebarContext";

export default function MainApp() {
  return (
    <SidebarProvider>
      <Layout />
    </SidebarProvider>
  );
}
