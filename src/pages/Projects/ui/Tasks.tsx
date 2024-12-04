import { useSearchParams } from "react-router-dom";
import { taskStatusList } from "../data/constants";
import styles from "../styles/Tasks.module.scss";
import { TasksType } from "../types/Tasks.types";
import { TasksBlock } from "./TasksBlock";

export const Tasks: TasksType = ({ projects, tasks }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isProjects = searchParams.get("project") !== null;
  const filteredTasks = tasks;

  const blocksArray = isProjects
    ? taskStatusList.map(({ id, title }) => {
        const tasks = filteredTasks.filter(({ status }) => status === id);
        return {
          id,
          title: `${title} (${tasks.length})`,
          tasks,
        };
      })
    : projects.map((id, title) => {
        const tasks = filteredTasks.filter(({ project }) => project === id);
        return {
          id,
          title: `${title} (${tasks.length})`,
          tasks,
        };
      });

  return (
    <div className={styles.container}>
      {blocksArray.map(({ id, title, tasks }) => (
        <TasksBlock key={id} tasks={tasks} title={title} />
      ))}
    </div>
  );
};
