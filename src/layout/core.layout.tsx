import { mountStore } from "@/store";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "@/types/types";

interface IProps {
  children: React.ReactNode;
}

const StateProvider: React.FC<IProps> = ({ children }: IProps) => {
  const store = mountStore();
  return <Provider store={store as Store<RootState>}>{children}</Provider>;
};

export const Layout: React.FC<IProps> = ({ children }: IProps) => (
  <StateProvider>{children}</StateProvider>
);
