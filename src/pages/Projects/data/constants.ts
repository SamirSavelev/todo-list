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
    title: "Завершенны",
  },
];

export const taskFiltersList = [
  {
    id: "all",
    title: "Все задачи",
  },
  ...taskStatusList,
];
