import { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useAppNavigate } from "../../router/coordinator";

export const RedirectPage = () => {
  useProtectedPage();
  const { goToTasks } = useAppNavigate();

  useEffect(() => {
    const redirect = () => {
      goToTasks();
    };
    redirect();
  }, []);
};
