import { PlusSquareIcon } from "@chakra-ui/icons";
import { IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../../context/authContext";
import { TaskContext } from "../../context/taskContext";
import { TaskListContext } from "../../context/taskListContext";
import { useForm } from "../../hooks/useForm";
import { CreateTaskInputDiv } from "./styled";

export const CreateTask = () => {
  const { selectedTaskList } = React.useContext(TaskListContext);
  const { loggedUser } = React.useContext(AuthContext);
  const { newTask } = React.useContext(TaskContext);
  const { form, onChange, cleanFields } = useForm({
    task: "",
    done: false,
  });

  const onSubmitTask = (e) => {
    e.preventDefault();
    newTask({ userId: loggedUser, taskId: selectedTaskList.id, task: form });
    cleanFields();
  };

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <CreateTaskInputDiv>
          <IconButton
            type="submit"
            icon={<PlusSquareIcon />}
            variant="ghost"
            colorScheme="blue"
            aria-label={"Botao de adicionar nova tarefa"}
          />
          <Input name="task" value={form.task} onChange={onChange} />
        </CreateTaskInputDiv>
      </form>
    </div>
  );
};
