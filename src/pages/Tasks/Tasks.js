import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CreateTask } from "../../components/CreateTask/CreateTask";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TaskItem } from "../../components/TaskItem/TaskItem";
import { TaskListTitle } from "../../components/TaskListTitle/TaskListTitle";
import { baseUrl } from "../../constants/baseUrl";
import { TaskListContext } from "../../context/taskListContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { deleteTask } from "../../services/tasks";

export const Tasks = () => {
  useProtectedPage();
  const { selectedTaskList, tasks, setTasks, loggedUser, setLoggedUser } =
    React.useContext(TaskListContext);

  useEffect(() => {
    setLoggedUser(localStorage.getItem("userId"));
  }, [setLoggedUser]);

  const loadedTaskList = useRequestData(
    [],
    `${baseUrl}/users/${localStorage.getItem("userId")}/tasklists/${
      selectedTaskList.id
    }/tasks`
  );

  setTasks(loadedTaskList);

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
              name={task.task}
              onClick={() => {
                deleteTask(loggedUser, selectedTaskList.id, task.id);
              }}
            />
          ))}
      </Box>
    </Grid>
  );
};
