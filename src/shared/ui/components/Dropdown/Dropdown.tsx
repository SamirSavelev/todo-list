import styles from "./Dropdown.module.scss";
import { DropdownProps } from "./types";

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdown} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
