import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToTasks } from "../router/coordinator";

export const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToTasks(navigate);
    }
  }, [navigate]);
};
