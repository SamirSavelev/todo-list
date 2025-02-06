// TasksBlock.tsx
import { TasksBlockType } from "../types/TasksBlock.types";
import styles from "../styles/TasksBlock.module.scss";
import { Text } from "@shared/ui/components";
import { TasksInfo } from "./TasksInfo";

export const TasksBlock: TasksBlockType = ({
  tasks,
  projects,
  title,
  ...props
}) => (
  <div className={styles.container}>
    <Text style={{ opacity: 0.5 }} variant="body2" fontWeight={700}>
      {title}
    </Text>
    <div className={styles.task__list}>
      {tasks.map((task) => (
        <>
          <TasksInfo
            projectName={
              projects.find(({ id }) => id === task.project)?.title || ""
            }
            key={task.id}
            {...task}
            {...props}
          />
        </>
      ))}
    </div>
  </div>
);
