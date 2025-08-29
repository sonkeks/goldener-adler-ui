import type {FunctionComponent} from "react";
import {Outlet} from "react-router";

export const DashboardLayout: FunctionComponent = () => {
  return (
    <Outlet />
  )
}
