import { Modal } from "@shared/ui/components/Modal/Modal";
import styles from "../styles/ProjectsPage.module.scss";
import { Button } from "@shared/ui/components/Button/Button";
import { useState } from "react";
import { CreateTaskModalNew } from "src/features/Modals";
import { TaskFormInterface } from "src/features/Modals/CreateTaskModalNew/types";
import { Filters } from "./Filters";
import { Tasks } from "./Tasks";
import { ProjectListType, TaskListType } from "../data/types";
import { mockProjectsList, mockTasksList } from "../data/mocks";

export const ProjectsPage = () => {
  const [projectsList, setProjectsList] =
    useState<ProjectListType>(mockProjectsList);
  const [tasksList, setTasksList] = useState<TaskListType>(mockTasksList);

  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const saveTaskHandler = (form: TaskFormInterface) => {
    console.log("Сохранено название задачи:", form);
    setCreateTaskModalOpen(false);
  };

  const openCreateTaskModal = () => {
    setCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setCreateTaskModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Filters />
      <Tasks />

      {/* <div className={styles.settings}>
        <Button type="primary" size="small" onClick={openCreateTaskModal}>
          Создать задачу
        </Button>
        <Modal isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal}>
          <CreateTaskModalNew
            onSave={saveTaskHandler}
            onClose={closeCreateTaskModal}
          />
        </Modal>
      </div> */}
    </div>
  );
};
