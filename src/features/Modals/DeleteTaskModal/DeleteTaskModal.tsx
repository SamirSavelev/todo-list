import { Button, Modal, Text } from "@shared/ui/components";
import { DeleteTaskModalType } from "./types";
import styles from "./DeleteTaskModal.module.scss";

export const DeleteTaskModal: DeleteTaskModalType = ({
  isOpen,
  onClose,
  onDelete,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Вы уверены, что хотите удалить задачу?
      </Text>
      <div className={styles.button_container}>
        <Button onClick={onClose}>Отменить</Button>
        <Button type="primary" onClick={onDelete}>
          Удалить
        </Button>
      </div>
    </div>
  </Modal>
);
