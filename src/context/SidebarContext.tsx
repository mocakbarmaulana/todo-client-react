import { createContext, useEffect, useMemo, useState } from "react";
import {
  ISidebarContextType,
  SidebarProviderProps,
} from "@typings/context.type";
import { useLocation } from "react-router-dom";

export const SidebarContext = createContext<ISidebarContextType>({
  collapsed: false,
  activeKey: "",
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: Readonly<SidebarProviderProps>) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    const paths = path.split("/");

    // check if path is not empty, then set active key
    if (paths.length > 0) {
      // get the last path
      const key = paths[paths.length - 1];
      // set active key
      setActiveKey(key);
    }

  }, [location]);

  // function to toggle sidebar
  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  // context value
  const value = useMemo(() => {
    return {
      collapsed,
      toggleSidebar,
      activeKey,
    };
  }, [collapsed, activeKey]);

  return (
    <SidebarContext.Provider
      value={value}
    >
      {children}
    </SidebarContext.Provider>
  );
}
