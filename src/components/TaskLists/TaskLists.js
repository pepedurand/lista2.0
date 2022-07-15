import { CalendarIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { TaskListContext } from "../../context/taskListContext";

export const TaskLists = () => {
  const { taskList, newTaskList, setSelectedTaskList, loggedUser } =
    React.useContext(TaskListContext);

  return (
    <Box padding="4" textColor="gray.700">
      <List spacing={2}>
        {taskList.length ? (
          taskList.map((item) => {
            return (
              <ListItem key={item.id} display="flex" width="100%">
                <Button
                  leftIcon={<CalendarIcon />}
                  variant="ghost"
                  colorScheme="blue"
                  justifyContent="start"
                  width="100%"
                  onClick={() => {
                    setSelectedTaskList(item);
                  }}
                >
                  <Text>
                    {item.name.length > 24
                      ? item.name.substring(0, 24) + "..."
                      : item.name}
                  </Text>
                </Button>
              </ListItem>
            );
          })
        ) : (
          <ListItem>Nenhuma lista criada</ListItem>
        )}
      </List>
      <Divider my="4" />
      <Button
        width="100%"
        justifyContent="100%"
        leftIcon={<PlusSquareIcon />}
        variant="ghost"
        colorScheme="blue"
        onClick={() => newTaskList({ userId: loggedUser, name: "Nova Lista" })}
      >
        Adicionar Lista
      </Button>
    </Box>
  );
};
