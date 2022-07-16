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
