import { Accordion, Text, ThemeSwitch } from "@shared/ui/components";
import { ReactComponent as CirclePlusIcon } from "@assets/icons/circle-plus.svg";
import styles from "../styles/Filters.module.scss";
import { FiltersType } from "../types/Filters.types";
import { useSearchParams } from "react-router-dom";
import { taskFiltersList } from "../data/constants";

export const Filters: FiltersType = ({ projects, tasks }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const formattedProjects = [
    {
      id: "all",
      title: "Все проекты",
      count: projects.length,
    },
    ...projects.map(({ id, title }) => ({
      id: id,
      title: title,
      count: tasks.filter((task) => task.project === id).length,
    })),
  ];

  const formattedTaskFiltersList = taskFiltersList.map(({ id, title }) => ({
    id: id,
    title: title,
    count:
      id === "all"
        ? tasks.length
        : tasks.filter((task) => task.status === id).length,
  }));

  const selectedProjectId = searchParams.get("project");
  const selectedTaskStatusId = searchParams.get("status");

  return (
    <div className={styles.container}>
      <div className={styles.top_content}>
        <div className={styles.header}>
          <Text variant="h2">Проекты</Text>
          <CirclePlusIcon className={styles.addProjectIcon} />
        </div>
        <div className={styles.filters}>
          <Accordion title="Проекты">
            <div className={styles.filters_container}>
              <div className={styles.filters_list}>
                {formattedProjects.map(({ id, title, count }) => {
                  return (
                    <div
                      key={id}
                      className={styles.filters_item}
                      data-selected={selectedProjectId === id.toString()}
                      onClick={() => {
                        setSearchParams({
                          ...searchParams,
                          project: id.toString(),
                        });
                      }}
                    >
                      <Text fontWeight={600}>
                        {title} ({count})
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion>
          <Accordion title="Задачи">
            <div className={styles.filters_container}>
              <div className={styles.filters_list}>
                {formattedTaskFiltersList.map(({ id, title, count }) => {
                  return (
                    <div
                      key={id}
                      className={styles.filters_item}
                      data-selected={selectedTaskStatusId === id.toString()}
                      onClick={() =>
                        setSearchParams({
                          ...searchParams,
                          status: id.toString(),
                        })
                      }
                    >
                      <Text fontWeight={600}>
                        {title} ({count})
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion>
        </div>
      </div>
      <ThemeSwitch />
    </div>
  );
};
