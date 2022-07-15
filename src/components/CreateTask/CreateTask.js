import { PlusSquareIcon } from "@chakra-ui/icons";
import { IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { TaskListContext } from "../../context/taskListContext";
import { useForm } from "../../hooks/useForm";
import { postTask } from "../../services/tasks";
import { CreateTaskInputDiv } from "./styled";

export const CreateTask = () => {
  const params = useParams();
  const { selectedTaskList } = React.useContext(TaskListContext);
  const { form, onChange, cleanFields } = useForm({
    task: "",
    done: false,
  });

  const onSubmitTask = (e) => {
    e.preventDefault();
    cleanFields();
    postTask(params.userId, selectedTaskList.id, form);
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
