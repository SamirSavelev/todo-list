import React from "react";
import styles from "./TasksInfo.module.scss";
import TasksInfoProps from "./types";

export const TasksInfo: React.FC<TasksInfoProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
