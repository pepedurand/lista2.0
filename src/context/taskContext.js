import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../constants/baseUrl";
import { deleteTask, postTask, putTask } from "../services/tasks";
import { AuthContext } from "./authContext";
import { TaskListContext } from "./taskListContext";

export const TaskContext = React.createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]); //setar as tasks
  const { selectedTaskList, setSelectedTaskList } =
    React.useContext(TaskListContext);
  const { loggedUser } = React.useContext(AuthContext);
  const params = useParams();

  const taskStatus = (event) => {
    putTask({
      userId: loggedUser,
      taskList: selectedTaskList.id,
      done: event.target.checked,
      taskId: event.target.value,
    });
  };

  useEffect(() => {
    if (!tasks) return;
    const loadTaskList = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/users/${loggedUser}/tasklists/${selectedTaskList.id}/tasks`
        );
        setTasks(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    loadTaskList();
  }, [loggedUser, params.taskListId]);

  const newTask = async (props) => {
    const response = await postTask(props);
    setTasks([...tasks, response]);
  };

  const removeTask = async (props) => {
    const response = await deleteTask(props);
    const newTasks = tasks.filter((data) => data.id !== response.id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        removeTask,
        taskStatus,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
