import { AuthPage } from "@/pages";
import { App } from "@/pages/App";
import { Route, Routes } from "react-router";

// const AuthorIdPage = lazy(() => import("@/pages/AuthorIdPage"));

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
