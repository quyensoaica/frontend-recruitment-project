import { ConfigProvider } from "antd";

const CustomTheme = ({ children }: { children: JSX.Element }): JSX.Element => {
  const theme = {
    token: {
      // Seed Token
      colorPrimary: "#00b96b",
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },
  };
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default CustomTheme;
