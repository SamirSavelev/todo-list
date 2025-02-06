import styles from "../styles/ProjectsPage.module.scss";
import { Button } from "@shared/ui/components/Button/Button";
import { useState } from "react";
import {
  CreateTaskModalNew,
  DeleteTaskModal,
  EditTaskModal,
} from "src/features/Modals";
import { TaskFormInterface } from "src/features/Modals/CreateTaskModalNew/types";
import { Filters } from "./Filters";
import { Tasks } from "./Tasks";
import { TaskInterface } from "../data/types";
import { Header } from "@shared/ui/Header";
import { EditTaskFormInterface } from "src/features/Modals/EditTaskModal/types";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { setTasksList } from "../model/projectsSlice";

export const ProjectsPage = () => {
  const { tasksList } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState(false);

  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const saveTaskHandler = ({
    title,
    description,
    duration,
    startDate,
    endDate,
    project,
  }: TaskFormInterface) => {
    const ids = tasksList.map(({ id }) => id).sort((a, b) => b - a);
    const id = ids[0] + 1;
    const newTask: TaskInterface = {
      id,
      status: "to-do",
      name: title,
      description,
      duration: Number(duration),
      startDate,
      endDate,
      project: Number(project?.value),
    };

    const updatedTasks = [...tasksList, newTask];

    dispatch(setTasksList(updatedTasks));
    setCreateTaskModalOpen(false);
  };

  const openCreateTaskModal = () => {
    setCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setCreateTaskModalOpen(false);
  };

  const openDeleteTaskModal = (id: number) => {
    setDeleteTaskModalOpen(true);
    setDeleteTaskId(id);
  };

  const closeDeleteTaskModal = () => {
    setDeleteTaskModalOpen(false);
    setDeleteTaskId(null);
  };

  const openEditTaskModal = (id: number) => {
    setEditTaskModalOpen(true);
    setEditTaskId(id);
  };

  const closeEditTaskModal = () => {
    setEditTaskModalOpen(false);
    setEditTaskId(null);
  };

  const deleteTaskHandler = () => {
    const updatedTasks = tasksList.filter((task) => task.id !== deleteTaskId);
    dispatch(setTasksList(updatedTasks));
    setDeleteTaskModalOpen(false);
  };

  const editTaskHandler = ({
    title,
    description,
    duration,
    startDate,
    endDate,
    project,
  }: EditTaskFormInterface) => {
    const editedTask = tasksList.find((task) => task.id === editTaskId);

    if (!editTaskId) return;

    const updatedTask: TaskInterface = {
      id: editTaskId,
      name: title,
      description,
      duration: Number(duration),
      startDate,
      endDate,
      project: Number(project?.value),
      status: editedTask?.status ?? "to-do",
    };
    const updatedTasks = tasksList.map((task) => {
      if (task.id === editTaskId) {
        return updatedTask;
      }
      return task;
    });

    dispatch(setTasksList(updatedTasks));

    setEditTaskModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Filters />
        <div className={styles.content_container}>
          <Header />
          <div className={styles.settings}>
            <Button type="primary" size="small" onClick={openCreateTaskModal}>
              Создать задачу
            </Button>
            <CreateTaskModalNew
              isOpen={isCreateTaskModalOpen}
              onSave={saveTaskHandler}
              onClose={closeCreateTaskModal}
            />
          </div>
          <Tasks
            deleteTask={openDeleteTaskModal}
            editTask={openEditTaskModal}
          />
        </div>
      </div>
      <DeleteTaskModal
        isOpen={isDeleteTaskModalOpen}
        onClose={closeDeleteTaskModal}
        onDelete={deleteTaskHandler}
      />
      <EditTaskModal
        isOpen={isEditTaskModalOpen}
        onClose={closeEditTaskModal}
        onSave={editTaskHandler}
        task={tasksList.find((task) => task.id === editTaskId)}
      />
    </>
  );
};
