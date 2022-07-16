import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const postTask = async ({ userId, taskId, task }) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/${userId}/tasklists/${taskId}/tasks`,
      task
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};

export const deleteTask = async ({ userId, taskList, taskId }) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/users/${userId}/tasklists/${taskList}/tasks/${taskId}`
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};

export const putTask = async ({ userId, taskList, done, taskId }) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/${userId}/tasklists/${taskList}/tasks/${taskId}`,
      { done }
    );
    return response.data;
  } catch (e) {
    alert("deu erro, tente novamente");
  }
};
