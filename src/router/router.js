import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp.js/SignUp";
import { Tasks } from "../pages/Tasks/Tasks";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="tarefas" element={<Tasks />} />
        <Route path="criar-conta" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
