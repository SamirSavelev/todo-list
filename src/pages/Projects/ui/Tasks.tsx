// Tasks.tsx
import styles from "../styles/Tasks.module.scss";
import { TasksType } from "../types/Tasks.types";
import { TasksBlock } from "./TasksBlock";

export const Tasks: TasksType = ({ projects, tasks }) => {
  const statuses = [
    { status: "to-do", title: "К выполнению" },
    { status: "in-progress", title: "В процессе" },
    { status: "done", title: "Выполнено" },
  ];

  return (
    <div className={styles.container}>
      {statuses.map(({ status, title }) => {
        const filteredTasks = tasks.filter((task) => task.status === status);
        return (
          <TasksBlock
            key={status}
            tasks={filteredTasks}
            title={`${title} (${filteredTasks.length})`}
          />
        );
      })}
    </div>
  );
};
