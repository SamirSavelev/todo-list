import { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.scss";
import { AccordionType } from "./types";
import { ReactComponent as ArrowDownIcon } from "@assets/icons/arrow-down.svg";

export const Accordion: AccordionType = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleContent = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
      setTimeout(() => {
        setFinishedAnimation(true);
      }, 300);
    } else {
      setFinishedAnimation(false);
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div
        data-isOpen={isOpen}
        className={styles.header}
        onClick={toggleContent}
      >
        <span>{title}</span>
        <span data-isOpen={isOpen} className={styles.icon}>
          <ArrowDownIcon />
        </span>
      </div>
      <div
        ref={contentRef}
        className={`${styles.content} ${isOpen ? styles.open : ""}`}
        style={{
          maxHeight: contentHeight,
          overflow: finishedAnimation ? "visible" : "hidden",
        }} // Плавное изменение высоты
      >
        {children}
      </div>
    </div>
  );
};
