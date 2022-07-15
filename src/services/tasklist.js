import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const postTaskList = async (userId, name) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/${userId}/tasklists`,
      name
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};

export const deleteTaskList = async (userId, taskList) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/users/${userId}/tasklists/${taskList}`
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};

export const putTaskList = async ({ userId, taskList, name }) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/${userId}/tasklists/${taskList}`,
      name
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};
