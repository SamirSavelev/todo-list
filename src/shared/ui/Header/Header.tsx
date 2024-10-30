import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { menu } from "../Sidebar/data/menu";
import { ThemeSwitch } from "../components";

export const Header = () => {
  const { pathname } = useLocation();

  const title = menu.find(({ href }) => href === pathname)?.title;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ThemeSwitch />
    </div>
  );
};
