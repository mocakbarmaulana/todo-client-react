import { IMenu } from "@typings/configs.type";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";
  import { createElement } from "react";
  
  const menus = (): IMenu[] => {
    return [
      {
        key: "home",
        icon: createElement(UserOutlined),
        label: "home",
        path: "/home",
      },
      {
        key: "todo",
        icon: createElement(VideoCameraOutlined),
        label: "todo",
        path: "/todo",
      },
      {
        key: "joke",
        icon: createElement(UploadOutlined),
        label: "joke",
        path: "/joke",
      },
    ];
  };
  
  export default menus;
  