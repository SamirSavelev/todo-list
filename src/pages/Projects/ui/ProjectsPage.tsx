import { Modal } from "@shared/ui/components/Modal/Modal";
import styles from "./ProjectsPage.module.scss";
import { Button } from "@shared/ui/components/Button/Button";
import { useState } from "react";
import { CreateTaskModalNew } from "src/features/Modals";
import { TaskFormInterface } from "src/features/Modals/CreateTaskModalNew/types";
// import { CreateTaskModal } from "src/features/Modal/CreateTaskModal";

export const ProjectsPage = () => {
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
        {/* <Modal isOpen={isModalOpen} onClose={handleClose}>
          <CreateTaskModal onClose={handleClose} onSave={handleSave} />
        </Modal> */}
      </div>
    </div>
  );
};
