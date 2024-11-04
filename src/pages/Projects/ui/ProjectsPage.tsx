import { Modal } from "@shared/ui/components/Modal/Modal";
import styles from "./ProjectsPage.module.scss";
import { Button } from "@shared/ui/components/Button/Button";
import { useState } from "react";

export const ProjectsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <Button type="primary" size="small" onClick={() => setModalOpen(true)}>
          Создать задачу
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Модальное окно</h2>
          <p>Это содержимое модального окна</p>
        </Modal>
      </div>
    </div>
  );
};
