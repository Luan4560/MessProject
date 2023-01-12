import * as SC from "./styles";

export const Task = ({ task }: any) => {
  console.log();
  return <SC.Container>{task.map((item: any) => item.content)}</SC.Container>;
};
