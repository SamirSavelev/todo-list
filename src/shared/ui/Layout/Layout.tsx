import { FC, PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";
// import { Header } from "../Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content_wrapper}>
        {/* <Header /> */}
        {children}
      </div>
    </div>
  );
};
