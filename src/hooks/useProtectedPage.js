import { useLayoutEffect } from "react";
import { useAppNavigate } from "../router/coordinator";

export const useProtectedPage = () => {
  const { goToLogin } = useAppNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin();
    }
  }, [goToLogin]);
};
