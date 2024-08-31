import { ConfigProvider, theme } from "antd";

const CustomTheme = ({ children }: { children: JSX.Element }): JSX.Element => {
  const customeTheme = {
    token: {
      // Seed Token
      colorPrimary: "#00b96b",
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },
    // algorithm: theme.darkAlgorithm,
  };
  return <ConfigProvider theme={customeTheme}>{children}</ConfigProvider>;
};

export default CustomTheme;
