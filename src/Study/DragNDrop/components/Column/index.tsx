import { Task } from "../Task";
import * as SC from "./styles";

interface ColumnDataProps {
  id?: string;
  taskIds: string[];
  title: string;
}

interface TasksProps {
  id: string;
  content: string;
}

interface ColumnProps {
  column: ColumnDataProps;
  tasks: any;
}

export const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <SC.Container>
      <SC.Title>{column.title}</SC.Title>
      <SC.TaskList>
        {tasks.map((task: any, index: number) => (
          <Task key={index} task={task} />
        ))}
      </SC.TaskList>
    </SC.Container>
  );
};
