//
import routes from "../configurations/routes";
//
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Admin/Page";
import Login from "../pages/Admin/Login/Page";
import Home from "../pages/Client/Page";
import RecruitmentNews from "../pages/Client/RecruitmentNews/RecruitmentNews";
import ServiceDetail from "../pages/Client/Services/ServiceDetail";
import AdminLayout from "../layouts/AdminLayout";
import EmployeeList from "../pages/Admin/Employee/Page";

const publicRoutes = {
  home: {
    path: routes.client.home,
    component: Home,
    layout: DefaultLayout,
  },
  services: {
    path: routes.client.serviceDetail,
    component: ServiceDetail,
    layout: DefaultLayout,
  },
  recruitmentNews: {
    path: routes.client.recruitmentNews,
    component: RecruitmentNews,
    layout: DefaultLayout,
  },
  login: {
    path: routes.admin.login,
    component: Login,
  },
  adminHome: {
    path: routes.admin.home,
    component: Dashboard,
    layout: AdminLayout,
  },
  adminEmployees: {
    path: routes.admin.employees,
    component: EmployeeList,
    layout: AdminLayout,
  },
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
