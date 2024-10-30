import styles from "./Sidebar.module.scss";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";
export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <LogoIcon className={styles.logo} />
    </div>
  );
};
