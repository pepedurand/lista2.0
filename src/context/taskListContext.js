import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../constants/baseUrl";
import {
  deleteTaskList,
  postTaskList,
  updateTaskListTitle,
} from "../services/tasklist";
import { AuthContext } from "./authContext";

export const TaskListContext = React.createContext();

export const TaskListContextProvider = (props) => {
  const params = useParams();
  const [taskList, setTaskList] = useState([]);
  const [selectedTaskList, setSelectedTaskList] = useState(params.taskListId);
  const { loggedUser } = React.useContext(AuthContext);

  useEffect(() => {
    const loadTaskList = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/users/${JSON.parse(
            localStorage.getItem("userId")
          )}/tasklists`
        ); //se colocar logged user, ao atualizar a pagina nao carrega as lists
        setTaskList(res.data);
        setSelectedTaskList(params.taskListId);
      } catch (e) {
        console.log(e);
      }
    };
    loadTaskList();
  }, []);

  const newTaskList = async ({ name }) => {
    const response = await postTaskList(loggedUser, { name });
    setTaskList([...taskList, response]);
  };

  const editTaskListTitle = async (title) => {
    const response = await updateTaskListTitle({
      userId: loggedUser,
      taskList: selectedTaskList.id,
      taskListTitle: title,
    });
    const updatedTasklist = [...taskList];
    const elementIndex = updatedTasklist.findIndex(
      (obj) => obj.id === response.id
    );
    updatedTasklist[elementIndex] = response;
    setTaskList(updatedTasklist);
  };

  const removeTaskList = async () => {
    const response = await deleteTaskList(
      localStorage.getItem("userId"),
      selectedTaskList.id
    );
    const newTaskList = taskList.filter((data) => data.id !== response.id);
    setTaskList(newTaskList);
    setSelectedTaskList();
  };

  return (
    <TaskListContext.Provider
      value={{
        editTaskListTitle,
        removeTaskList,
        newTaskList,
        taskList,
        selectedTaskList,
        setSelectedTaskList,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
