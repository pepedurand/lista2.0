import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const postTask = async (userId, taskId, task) => {
  console.log(userId, taskId, task);
  await axios
    .post(`${baseUrl}/users/${userId}/tasklists/${taskId}/tasks`, task)
    .then((res) => {
      console.log(res);
      alert("tarefa adicionada com sucesso");
    })
    .catch(() => alert("Erro na Criação da tarefa"));
};

export const deleteTask = async (userId, taskListId, taskId) => {
  await axios
    .delete(
      `${baseUrl}/users/${userId}/tasklists/${taskListId}/tasks/${taskId}`
    )
    .then((res) => {
      console.log(res);
      alert("tarefa deletada com sucesso");
    })
    .catch(() => alert("Erro ao excluir a tarefa"));
};
