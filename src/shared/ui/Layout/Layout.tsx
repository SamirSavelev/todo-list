import { FC, PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
};
