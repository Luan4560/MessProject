import { ChangeEvent, useEffect, useState } from "react";

export type ITaskProps = {
  id: number;
  name?: string;
  done?: boolean;
};

export const useTodo = () => {
  const [newId, setNewId] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<ITaskProps[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("@tasks") as any);
    if (storedTodos) {
      setTasks(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("@tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("@task");
    }
  }, [tasks]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTask(value);
  };

  const handleAddTask = (event: any) => {
    event.preventDefault();
    if (!newTask) return;

    const newTodo = { id: newId, name: newTask, done: false };

    setTasks([...tasks, newTodo]);

    setNewId(newId + 1);
    setNewTask("");
  };

  const handleDeleteTask = (id: number) => {
    const deleteItem = tasks.filter((item) => item.id !== id);
    setTasks(deleteItem);
  };

  const handleDoneTask = (id: number) => {
    const isDone = tasks.map((item) => {
      if (item.id === id && item.done === false) {
        return { ...item, done: true };
      }
      return item;
    });
    setTasks(isDone);
  };

  return {
    tasks,
    newTask,
    handleAddTask,
    handleChange,
    handleDeleteTask,
    handleDoneTask,
  };
};
