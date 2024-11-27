import { Accordion, Text } from "@shared/ui/components";
import { ReactComponent as CirclePlusIcon } from "@assets/icons/circle-plus.svg";
import styles from "../styles/Filters.module.scss";

export const Filters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text variant="h2">Проекты</Text>
        <CirclePlusIcon className={styles.addProjectIcon} />
      </div>
      <Accordion title="Проекты">
        <div>Здесь будет список проектов</div>
      </Accordion>
      <Accordion title="Задачи">
        <div>Здесь будет список задач</div>
      </Accordion>
    </div>
  );
};
