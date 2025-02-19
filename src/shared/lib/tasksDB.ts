import { TaskInterface, TaskListType } from "@pages/Projects/data/types";

const STORAGE_KEY = "tasks_db";

// Инициализация базы (если пусто)
const getTasks = (): TaskListType => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks: TaskListType) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// CRUD-функции для "базы данных"
export const tasksDB = {
  getAll: (): TaskInterface[] => getTasks(),

  add: (task: TaskInterface) => {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    return task;
  },

  update: (updatedTask: TaskInterface) => {
    let tasks = getTasks();
    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    saveTasks(tasks);
    return updatedTask;
  },

  delete: (id: number) => {
    let tasks = getTasks();
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks(tasks);
    return id;
  },
};
