import styles from "./Sidebar.module.scss";
import { ReactComponent as LogoIcon } from "@assets/icons/logo.svg";
import { menu } from "./data/menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "@assets/icons/logout.svg";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => navigate("/auth");

  return (
    <div className={styles.container}>
      <div className={styles.menu_wrapper}>
        <LogoIcon className={styles.logo} />
        <div className={styles.menu}>
          {menu.map(({ Icon, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link to={href} key={href}>
                <div
                  className={`${styles.menu_item} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <Icon className={styles.menu_item_icon} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={`${styles.menu_item} ${styles.logout}`} onClick={logout}>
        <LogoutIcon className={styles.menu_item_icon} />
      </div>
    </div>
  );
};
