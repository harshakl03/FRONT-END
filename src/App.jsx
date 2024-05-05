import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PartBCat1 from "./pages/PartBCat1";
import PartBCat2 from "./pages/PartBCat2";
import PartBCat3 from "./pages/PartBCat3";
import PartC from "./pages/PartC";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Declaration from "./pages/Declaration";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import AppLayout from "./ui/AppLayout";
import AdminAccess from "./ui/AdminAccess";
import GloblaStyles from "./Styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ChangePasswordForm from "./features/Profile/ChangePasswordForm";
import SettingsLayout from "./ui/SettingsLayout";
import ForgotPasswordForm from "./features/Profile/ForgotPasswordForm";
import RegisterEmployee from "./features/Admin/RegisterEmployee";
import AssignRole from "./features/Admin/AssignRole";
import RegisterUser from "./features/Admin/RegisterUser";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GloblaStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="admin" element={<AdminAccess />}>
              <Route path="register-employee" element={<RegisterEmployee />} />
              <Route path="register-user" element={<RegisterUser />} />
              <Route path="assign-role" element={<AssignRole />} />
            </Route>
            <Route index element={<Navigate to="part-b" />} />
            <Route path="profile">
              <Route index element={<Navigate to="form" />} />
              <Route path="form" element={<Profile />} />
              <Route path="settings">
                <Route index element={<SettingsLayout />} />
                <Route
                  path="change-password"
                  element={<ChangePasswordForm />}
                />
              </Route>
            </Route>
            <Route path="part-b">
              <Route index element={<Navigate to="cat1" />} />
              <Route path="cat1" element={<PartBCat1 />} />
              <Route path="cat2" element={<PartBCat2 />} />
              <Route path="cat3" element={<PartBCat3 />} />
            </Route>
            <Route path="part-c" element={<PartC />} />
            <Route path="declaration" element={<Declaration />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPasswordForm />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "-var(--color-grey-0)",
            color: "-var(--color-grey-7000)",
          },
        }}
      />
    </QueryClientProvider>
  );
  //<Provider store={store}>
  //</Provider>
}
