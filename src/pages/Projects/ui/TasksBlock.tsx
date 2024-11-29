import { TasksBlockType } from "../types/TasksBlock.types";
import styles from "../styles/TasksBlock.module.scss";
import { Text } from "@shared/ui/components";

export const TasksBlock: TasksBlockType = ({ tasks, title }) => {
  return (
    <div className={styles.container}>
      <Text style={{ opacity: 0.5 }} variant="body2" fontWeight={700}>
        {title}
      </Text>
    </div>
  );
};
