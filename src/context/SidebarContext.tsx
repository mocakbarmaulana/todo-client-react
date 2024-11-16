import { createContext, useMemo, useState } from "react";
import {
  ISidebarContextType,
  SidebarProviderProps,
} from "@typings/context.type";

export const SidebarContext = createContext<ISidebarContextType>({
  collapsed: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: Readonly<SidebarProviderProps>) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // function to toggle sidebar
  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  // context value
  const value = useMemo(() => {
    return {
      collapsed,
      toggleSidebar,
    };
  }, [collapsed]);

  return (
    <SidebarContext.Provider
      value={value}
    >
      {children}
    </SidebarContext.Provider>
  );
}
