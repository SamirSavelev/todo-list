import { Accordion, Text, ThemeSwitch } from "@shared/ui/components";
import { ReactComponent as CirclePlusIcon } from "@assets/icons/circle-plus.svg";
import styles from "../styles/Filters.module.scss";
import { FiltersType } from "../types/FiltersTypes";
import { useSearchParams } from "react-router-dom";
import { taskFiltersList } from "../data/constants";

export const Filters: FiltersType = ({ projects }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const formattedProjects = [
    {
      id: 0,
      title: `Все проекты (${projects.length})`,
    },
    ...projects,
  ];

  const selectedProjectId = searchParams.get("project_id");
  const selectedTaskStatusId = searchParams.get("status_id");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text variant="h2">Проекты</Text>
        <CirclePlusIcon className={styles.addProjectIcon} />
      </div>
      <div className={styles.filters}>
        <Accordion title="Проекты">
          <div className={styles.filters_container}>
            <div className={styles.filters_list}>
              {formattedProjects.map(({ id, title }) => {
                return (
                  <div
                    key={id}
                    className={styles.filters_item}
                    data-selected={selectedTaskStatusId === id.toString()}
                    onClick={() => {
                      setSearchParams({
                        ...searchParams,
                        status_id: id.toString(),
                      });
                    }}
                  >
                    <Text fontWeight={600}>{title}</Text>
                  </div>
                );
              })}
            </div>
          </div>
        </Accordion>
        <Accordion title="Задачи">
          <div className={styles.filters_container}>
            <div className={styles.filters_list}>
              {taskFiltersList.map(({ id, title }) => {
                return (
                  <div
                    key={id}
                    className={styles.filters_item}
                    data-selected={selectedProjectId === id.toString()}
                    onClick={() =>
                      setSearchParams({
                        ...searchParams,
                        project_id: id.toString(),
                      })
                    }
                  >
                    <Text fontWeight={600}>{title}</Text>
                  </div>
                );
              })}
            </div>
          </div>
        </Accordion>
      </div>
      <ThemeSwitch />
    </div>
  );
};
