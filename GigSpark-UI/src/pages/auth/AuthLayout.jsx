import React from "react";
import { Outlet } from "react-router-dom";
import LoginSignupLayout from "../loginSignUpLayout/LoginSignupLayout";

const AuthLayout = () => {
  return (
    <div>
      <LoginSignupLayout>
        <Outlet />
      </LoginSignupLayout>
    </div>
  );
};

export default AuthLayout;
