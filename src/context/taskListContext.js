import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";
import {
  deleteTaskList,
  postTaskList,
  putTaskList,
} from "../services/tasklist";

export const TaskListContext = React.createContext();

export const TaskListContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]); //funcionando

  const [selectedTaskList, setSelectedTaskList] = useState(1); //selecionar a lista

  const [tasks, setTasks] = useState(); //setar as tasks

  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    axios
      .get(`${baseUrl}/users/${loggedUser}/tasklists`)
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  }, [loggedUser]);

  const newTaskList = async ({ name }) => {
    const response = await postTaskList(loggedUser, { name });
    setTaskList([...taskList, response]);
  };

  const editTaskListTitle = async (name) => {
    const response = await putTaskList({
      userId: loggedUser,
      taskList: selectedTaskList.id,
      name: name,
    });
    const elementIndex = taskList.findIndex((obj) => obj.id === response.id);
    taskList[elementIndex].name = name.name;
    console.log(taskList);
    setTaskList(taskList);
  };

  const removeTaskList = async () => {
    const response = await deleteTaskList(
      localStorage.getItem("userId"),
      selectedTaskList.id
    );
    const newTaskList = taskList.filter((data) => data.id !== response.id);
    setTaskList(newTaskList);
  };

  return (
    <TaskListContext.Provider
      value={{
        loggedUser,
        editTaskListTitle,
        setLoggedUser,
        removeTaskList,
        newTaskList,
        taskList,
        selectedTaskList,
        setSelectedTaskList,
        tasks,
        setTasks,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
