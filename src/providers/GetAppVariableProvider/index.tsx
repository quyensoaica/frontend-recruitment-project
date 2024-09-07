import { AppAction } from "@/stores/appStore/appReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface GetAppVariableProviderProps {
  children: React.ReactNode;
}

const GetAppVariableProvider = ({ children }: GetAppVariableProviderProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(AppAction.getAllGroupRoles());
  }, []);
  return <>{children}</>;
};
export default GetAppVariableProvider;
