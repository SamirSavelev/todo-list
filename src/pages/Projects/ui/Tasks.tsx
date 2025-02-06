import { useSearchParams } from "react-router-dom";
import { taskStatusList } from "../data/constants";
import styles from "../styles/Tasks.module.scss";
import { TasksType } from "../types/Tasks.types";
import { TasksBlock } from "./TasksBlock";
import { useAppSelector } from "@app/hooks";

export const Tasks: TasksType = (props) => {
  const { projectsList, tasksList } = useAppSelector((state) => state.projects);
  const [searchParams] = useSearchParams();
  const isProjects = searchParams.get("project") !== null;

  const getFilteredTasks = () => {
    if (isProjects) {
      const selectedProject = searchParams.get("project");
      if (selectedProject === "all") {
        return tasksList;
      } else {
        return tasksList.filter(
          ({ project }) => project?.toString() === selectedProject
        );
      }
    } else {
      const selectedStatus = searchParams.get("status");
      if (selectedStatus === "all") {
        return tasksList;
      } else {
        return tasksList.filter(
          ({ status }) => status?.toString() === selectedStatus
        );
      }
    }
    return tasksList;
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
    : projectsList.map(({ id, title }) => {
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
          projects={projectsList}
          key={id}
          tasks={tasks}
          title={title}
          {...props}
        />
      ))}
    </div>
  );
};
