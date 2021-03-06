import { Routes, Route } from "react-router-dom";
import { TaskContextProvider } from "../context/taskContext";
import { TaskListContextProvider } from "../context/taskListContext";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Login } from "../pages/Login/Login";
import { RedirectPage } from "../pages/RedirectPage/RedirectPage";
import { SignUp } from "../pages/SignUp/SignUp";
import { Tasks } from "../pages/Tasks/Tasks";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="tarefas" element={<RedirectPage />} />
        <Route
          path="tarefas/:taskListId"
          element={
            <TaskListContextProvider>
              <TaskContextProvider>
                <Tasks />
              </TaskContextProvider>
            </TaskListContextProvider>
          }
        />
        <Route path="criar-conta" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
