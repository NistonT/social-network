import { AuthorizationPage, RegistrationPage } from "@/pages";
import { App } from "@/pages/App";
import { pageRouter } from "@/shared/constants/page-router";
import { Route, Routes } from "react-router";

// const AuthorIdPage = lazy(() => import("@/pages/AuthorIdPage"));

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path={pageRouter.AUTHORIZATION} element={<AuthorizationPage />} />
      <Route path={pageRouter.REGISTRATION} element={<RegistrationPage />} />
    </Routes>
  );
};
