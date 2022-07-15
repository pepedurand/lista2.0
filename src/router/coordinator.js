export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToSignUp = (navigate) => {
  navigate("/criar-conta/");
};

export const goToTasks = (navigate) => {
  navigate(`/tarefas`);
};

export const goToTaskTaskList = (navigate, userId, tasklistId) => {
  navigate(`/${userId}/tarefas/${tasklistId}`);
};
