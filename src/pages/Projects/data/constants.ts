import { Option } from "@shared/ui/components/Dropdown/types";

export const taskStatusList = [
  {
    id: "to-do",
    title: "К выполнению",
  },
  {
    id: "in-progress",
    title: "В процессе",
  },
  {
    id: "done",
    title: "Завершено",
  },
];

export const taskFiltersList = [
  {
    id: "all",
    title: "Все задачи",
  },
  ...taskStatusList,
];

export const taskInfoDropdownOptions: Array<Option> = [
  {
    value: "edit",
    label: "Редактировать",
  },
  {
    value: "delete",
    label: "Удалить",
  },
];
