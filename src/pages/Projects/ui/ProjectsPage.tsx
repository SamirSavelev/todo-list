import { Modal } from "@shared/ui/components/Modal/Modal";
import styles from "../styles/ProjectsPage.module.scss";
import { Button } from "@shared/ui/components/Button/Button";
import { useState } from "react";
import { CreateTaskModalNew } from "src/features/Modals";
import { TaskFormInterface } from "src/features/Modals/CreateTaskModalNew/types";
import { Filters } from "./Filters";
import { Tasks } from "./Tasks";
import { ProjectListType, TaskInterface, TaskListType } from "../data/types";
import { mockProjectsList, mockTasksList } from "../data/mocks";
import { Header } from "@shared/ui/Header";

export const ProjectsPage = () => {
  const [projectsList] = useState<ProjectListType>(mockProjectsList);
  const [tasksList, setTasksList] = useState<TaskListType>(mockTasksList);

  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const saveTaskHandler = ({
    title,
    description,
    duration,
    startDate,
    endDate,
    project,
  }: TaskFormInterface) => {
    const ids = tasksList.map(({ id }) => id).sort((a, b) => b - a);
    const id = ids[0] + 1;
    const newTask: TaskInterface = {
      id,
      status: "to-do",
      name: title,
      description,
      duration: Number(duration),
      startDate,
      endDate,
      project: Number(project),
    };
    setTasksList((prev) => [...prev, newTask]);
    setCreateTaskModalOpen(false);
  };

  const openCreateTaskModal = () => {
    setCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setCreateTaskModalOpen(false);
  };

  const deleteTaskHandler = (id: number) => {
    setTasksList((prev) => prev.filter((task) => task.id !== id));
    console.log("Удалена задача с id:", id);
  };

  const editTaskHandler = (id: number) => {
    console.log("Редактирование задачи с id:", id);
  };

  return (
    <div className={styles.container}>
      <Filters projects={projectsList} tasks={tasksList} />
      <div className={styles.content_container}>
        <Header />
        <div className={styles.settings}>
          <Button type="primary" size="small" onClick={openCreateTaskModal}>
            Создать задачу
          </Button>
          <Modal isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal}>
            <CreateTaskModalNew
              onSave={saveTaskHandler}
              onClose={closeCreateTaskModal}
            />
          </Modal>
        </div>
        <Tasks
          projects={projectsList}
          tasks={tasksList}
          deleteTask={deleteTaskHandler}
          editTask={editTaskHandler}
        />
      </div>
    </div>
  );
};
