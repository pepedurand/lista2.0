import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditablePreview,
  Input,
  EditableInput,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { TaskListContext } from "../../context/taskListContext";
import { useForm } from "../../hooks/useForm";

const TaskListTitle = () => {
  const { editTaskListTitle } = React.useContext(TaskListContext);

  const { form, onChange } = useForm({
    name: "",
  });

  const { selectedTaskList, removeTaskList } =
    React.useContext(TaskListContext);

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup size="sm">
        <IconButton
          aria-label="confirmar edicao do titulo"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="cancelar edicao do titulo"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Editar titulo da lista"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
        <IconButton
          aria-label="deletar lista"
          size="sm"
          icon={<DeleteIcon />}
          onClick={() => removeTaskList()}
        />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="left"
      fontSize="2xl"
      isPreviewFocusable={false}
      display="flex"
      alignItems="center"
      flexDir="row"
      defaultValue={selectedTaskList.name}
      key={selectedTaskList.id}
      onSubmit={() => editTaskListTitle(form)}
    >
      <EditablePreview />
      <Input
        width="auto"
        name="name"
        value={form.name}
        onChange={onChange}
        as={EditableInput}
      />
      <Box marginLeft="4">
        <EditableControls />
      </Box>
    </Editable>
  );
};

export { TaskListTitle };
