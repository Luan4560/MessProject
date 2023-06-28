import { Button } from "../ReactTest/components/Button";
import { Trash, CheckCircle } from "@phosphor-icons/react";
import { useTodo } from "./hook/useTodo";
import * as S from "./styles";

export const Todo = () => {
  const {
    tasks,
    newTask,
    handleAddTask,
    handleChange,
    handleDeleteTask,
    handleDoneTask,
  } = useTodo();

  return (
    <S.Container>
      <h1>Todo</h1>
      <S.Content>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={newTask}
            name="task"
            onChange={handleChange}
          />
          <Button type="submit">Add Task</Button>
        </form>

        {tasks?.map((item) => (
          <S.TaskContainer key={item.id}>
            <div>
              <p style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.name}
              </p>
            </div>

            <S.ButtonContainer>
              <button onClick={() => handleDoneTask(item.id)}>
                <CheckCircle color="#fff" size={24} />
              </button>

              <button onClick={() => handleDeleteTask(item.id)}>
                <Trash color="#fff" size={24} />
              </button>
            </S.ButtonContainer>
          </S.TaskContainer>
        ))}
      </S.Content>
    </S.Container>
  );
};
