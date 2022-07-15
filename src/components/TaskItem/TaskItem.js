import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Grid,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
// import { deleteTask } from "../../services/tasks";

export const TaskItem = (props) => {
  const TaskControls = () => {
    const { getEditButtonProps } = useEditableControls();
    return <Box {...getEditButtonProps()}>{props.name}</Box>;
  };

  return (
    <Grid gap="2" templateColumns="auto 1fr auto" alignItems="center">
      <Checkbox mx="4" />
      <Editable defaultValue="task">
        <TaskControls>
          <EditablePreview />
          <EditableInput />
        </TaskControls>
      </Editable>
      <IconButton
        onClick={props.onClick}
        aria-label="Search database"
        icon={<DeleteIcon />}
      />
    </Grid>
  );
};
