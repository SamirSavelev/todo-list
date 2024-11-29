import styles from "../styles/Tasks.module.scss";
import { TasksType } from "../types/Tasks.types";
import { TasksBlock } from "./TasksBlock";

export const Tasks: TasksType = ({ projects, tasks }) => {
  return (
    <div className={styles.container}>
      <TasksBlock tasks={tasks} title="To do (4)" />
    </div>
  );
};
