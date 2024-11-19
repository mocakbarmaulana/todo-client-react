export interface ISidebarContextType {
  collapsed: boolean;
  activeKey: string;
  toggleSidebar: () => void;
}

export interface SidebarProviderProps {
  children: React.ReactNode;
}