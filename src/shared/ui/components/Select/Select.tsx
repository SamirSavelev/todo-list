import { useState, useRef, forwardRef } from "react";
import { Input } from "../Input/Input";
import styles from "./Select.module.scss";
import { SelectProps, Option } from "./types";
import { IoIosArrowDown } from "react-icons/io";
import { useOutsideClick } from "@shared/hooks";

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      description,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || "");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Обработчик выбора опции
    const handleSelect = (option: Option) => {
      setSelectedValue(option.label);
      if (onChange) onChange(option.value); // Условие if вместо &&
      setIsOpen(false);
    };

    useOutsideClick(dropdownRef, () => setIsOpen(false));

    return (
      <div className={styles.wrapper}>
        <div className={styles.container} ref={dropdownRef}>
          <Input
            {...props}
            ref={ref}
            value={selectedValue}
            onClick={() => setIsOpen(!isOpen)}
            readOnly
            disabled={disabled}
            inputSuffix={
              <IoIosArrowDown
                className={`${styles.arrow} ${isOpen && styles.arrow__isOpen}`}
              />
            }
            description={{ type: description?.type }}
            inputClassName={styles.input}
            label={label}
          />
          {isOpen && (
            <div className={styles.dropdown}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={styles.option}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        {description?.message && (
          <div
            className={`${styles.description} ${
              styles[description?.type || "info"]
            }`}
          >
            {description.message}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
