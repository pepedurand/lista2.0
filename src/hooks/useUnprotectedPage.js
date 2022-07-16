import { useLayoutEffect } from "react";
import { useAppNavigate } from "../router/coordinator";

export const useUnprotectedPage = () => {
  const { goToTasks } = useAppNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToTasks();
    }
  }, [goToTasks]);
};
