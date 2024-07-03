import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../configurations/routes";
import userService from "../utils/UserService";

export default function Authenticated({ children }) {
  const role = userService.getUserRoleId();

  if (
    role !== "24722a9d-ad40-4324-a044-50825421cc6c" &&
    role !== "97ce9bf7-6745-42d8-b6d0-e5f52f91a802"
  ) {
    return <Navigate to={routes.admin.login} replace={true} />;
  }

  return children;
}
