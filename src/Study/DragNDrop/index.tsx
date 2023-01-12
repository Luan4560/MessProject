import { useState } from "react";
import { Column } from "./components/Column";
import { initialData } from "./initialData";

export const DragNDrop = () => {
  const [initialTasks, setIninitalTasks] = useState<any>(initialData);
  return (
    <>
      {initialTasks?.columnOrder.map((columnId: any) => {
        const column = initialTasks.columns;
        const tasks = column.taskIds.map((taskId: any) => initialTasks.tasks);
        return <Column key={column} column={column} tasks={tasks} />;
      })}
    </>
  );
};
