import { DeleteIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { TaskContext } from "../../context/taskContext";

export const TaskItem = (props) => {
  const { taskStatus } = React.useContext(TaskContext);

  return (
    <Grid gap="2" templateColumns="auto 1fr auto" alignItems="center">
      <Checkbox
        mx="4"
        type="checkbox"
        defaultChecked={props.done}
        onChange={taskStatus}
        value={props.id}
      />
      <Editable
        defaultValue={props.name}
        onSubmit={(updatedValue) => {
          console.log(updatedValue);
        }}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <IconButton
        onClick={props.onClick}
        aria-label="Search database"
        icon={<DeleteIcon />}
      />
    </Grid>
  );
};
