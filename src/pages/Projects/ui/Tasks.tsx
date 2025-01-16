import { useSearchParams } from "react-router-dom";
import { taskStatusList } from "../data/constants";
import styles from "../styles/Tasks.module.scss";
import { TasksType } from "../types/Tasks.types";
import { TasksBlock } from "./TasksBlock";

export const Tasks: TasksType = ({ projects, tasks, ...props }) => {
  const [searchParams] = useSearchParams();
  const isProjects = searchParams.get("project") !== null;

  const getFilteredTasks = () => {
    if (isProjects) {
      const selectedProject = searchParams.get("project");
      if (selectedProject === "all") {
        return tasks;
      } else {
        return tasks.filter(
          ({ project }) => project?.toString() === selectedProject
        );
      }
    } else {
      const selectedStatus = searchParams.get("status");
      if (selectedStatus === "all") {
        return tasks;
      } else {
        return tasks.filter(
          ({ status }) => status?.toString() === selectedStatus
        );
      }
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  const blocksArray = isProjects
    ? taskStatusList.map(({ id, title }) => {
        const tasks = filteredTasks.filter(({ status }) => status === id);
        return {
          id,
          title: `${title} (${tasks.length})`,
          tasks,
        };
      })
    : projects.map(({ id, title }) => {
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
        <TasksBlock
          projects={projects}
          key={id}
          tasks={tasks}
          title={title}
          {...props}
        />
      ))}
    </div>
  );
};
