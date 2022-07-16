import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/criar-conta/");
  };

  const goToTasks = () => {
    navigate(`/tarefas/1`);
  };

  const goToSelectedTasksList = (tasklistId) => {
    navigate(`/tarefas/${tasklistId}`);
  };

  return { goToLogin, goToSignUp, goToTasks, goToSelectedTasksList };
};

export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToSignUp = (navigate) => {
  navigate("/criar-conta/");
};

export const goToTasks = (navigate) => {
  navigate(`/tarefas`);
};

export const goToSelectedTasksList = ({ navigate, tasklistId }) => {
  navigate(`/tarefas/${tasklistId}`);
};

export const goToTaskList = (navigate, userId, tasklistId) => {
  navigate(`/${userId}/tarefas/${tasklistId}`);
};
