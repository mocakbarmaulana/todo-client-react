export interface ISidebarContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export interface SidebarProviderProps {
  children: React.ReactNode;
}