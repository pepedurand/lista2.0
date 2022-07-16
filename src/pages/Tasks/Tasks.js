import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { TaskListTitle } from "../../components/TaskListTitle/TaskListTitle";
import { AuthContext } from "../../context/authContext";
import { TaskContext } from "../../context/taskContext";
import { TaskListContext } from "../../context/taskListContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const Tasks = () => {
  useProtectedPage();
  const { selectedTaskList } = React.useContext(TaskListContext);
  const { loggedUser } = React.useContext(AuthContext);
  const { tasks, removeTask } = React.useContext(TaskContext);

  return (
    <Grid templateColumns="minmax(auto, 300px) 1fr">
      <Sidebar />
      <Box padding="8">
        <TaskListTitle />
        <CreateTask />

        {tasks &&
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              done={task.done}
              name={task.task}
              onClick={() => {
                removeTask({
                  userId: loggedUser,
                  taskList: selectedTaskList.id,
                  taskId: task.id,
                });
              }}
            />
          ))}
      </Box>
    </Grid>
  );
};
