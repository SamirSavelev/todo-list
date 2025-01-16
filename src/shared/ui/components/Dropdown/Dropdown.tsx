import { useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import { DropdownType } from "./types";
import { useOutsideClick } from "@shared/hooks";

export const Dropdown: DropdownType = ({
  children,
  options,
  onSelect,
  position = "bottom",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.wrapper} ${className}`} ref={dropdownRef}>
      <div onClick={toggleDropdown} className={styles.trigger}>
        {children}
      </div>
      {isOpen && (
        <div
          className={`${styles.dropdown} ${
            position === "top" ? styles.top : styles.bottom
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
