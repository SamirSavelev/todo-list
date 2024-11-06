import React, { useState } from "react";
import styles from "./Select.module.scss";
import { SelectProps } from "./types";
import { Dropdown } from "../Dropdown";

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  disabled = false,
  onChange,
  value,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ""} ${
          disabled ? styles.disabled : ""
        }`}
        onClick={toggleDropdown}
      >
        <span className={styles.selected}>{selectedOption || placeholder}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option}
              className={`${styles.option} ${
                selectedOption === option ? styles.selectedOption : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};
