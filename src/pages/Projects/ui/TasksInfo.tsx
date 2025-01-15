import { TaskInfoType } from "../types/TasksInfo.types";
import styles from "../styles/TasksInfo.module.scss";
import { ReactComponent as MoreIconLight } from "@assets/icons/more.svg";
import { ReactComponent as MoreIconDark } from "@assets/icons/more_dark.svg";
import { Text } from "@shared/ui/components";
import { taskStatusList } from "../data/constants";
import moment from "moment";
import { useTheme } from "@app/providers/ThemeProvider/ThemeContext";

export const TasksInfo: TaskInfoType = ({
  name,
  projectName,
  status,
  endDate,
}) => {
  const { theme } = useTheme();
  const statusName =
    taskStatusList.find((item) => item.id === status)?.title || "";

  const deadline = moment(endDate).format("DD MMM YYYY");

  const isLight = theme === "light";

  const MoreIcon = isLight ? MoreIconLight : MoreIconDark;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.main}>
          <Text fontWeight={700}>{name}</Text>
          <Text style={{ opacity: 0.5 }}>{projectName}</Text>
          <Text>Статус: {statusName}</Text>
          <div className={styles.deadline}>
            <Text variant="body2" fontWeight={600}>
              {deadline}
            </Text>
          </div>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import styles from "../styles/TasksInfo.module.scss";
// import { TaskType } from "../types/TasksInfo.types";
// import { mockProjectsList } from "../data/mocks";
// import { ReactComponent as MenuIcon } from "@assets/icons/action-menu.svg";

// interface TasksInfoProps {
//   task: TaskType;
// }

// export const TasksInfo: React.FC<TasksInfoProps> = ({ task }) => {
//   const project = task.project
//     ? mockProjectsList.find((proj) => proj.id === task.project)
//     : undefined;
//   const projectTitle = project ? project.title : "Проект не указан";

//   const statusText =
//     task.status === "to-do"
//       ? "К выполнению"
//       : task.status === "done"
//       ? "Выполнено"
//       : "В процессе выполнения";

//   return (
//     <div className={styles.container}>
//       <div className={styles.icon}>
//         <h3 className={styles.taskName}>{task.name}</h3>
//         <MenuIcon />
//       </div>
//       <p className={styles.taskProject}>Проект: {projectTitle}</p>
//       <p className={styles.taskStatus}>Статус: {statusText}</p>
//       <p className={styles.taskEndDate}>Дата окончания: {task.endDate}</p>
//     </div>
//   );
// };

// export default TasksInfo;
