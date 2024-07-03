//
import routes from "../configurations/routes";
//
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/Admin/Login/Page";
import Home from "../pages/Client/Page";
import RecruitmentNews from "../pages/Client/RecruitmentNews/RecruitmentNews";
import ServiceDetail from "../pages/Client/Services/ServiceDetail";
//
import Dashboard from "../pages/Admin/Page";
import { default as ClientList } from "../pages/Admin/Clients/Page";
import { default as EmployeeList } from "../pages/Admin/Employees/Page";
import { default as RecruitmentNewsList } from "../pages/Admin/RecruitmentNews/Page";
import { default as ServicesList } from "../pages/Admin/Services/Page";

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
  adminClients: {
    path: routes.admin.clients,
    component: ClientList,
    layout: AdminLayout,
  },
  adminRecruitmentNews: {
    path: routes.admin.recruitmentNews,
    component: RecruitmentNewsList,
    layout: AdminLayout,
  },
  adminServices: {
    path: routes.admin.services,
    component: ServicesList,
    layout: AdminLayout,
  },
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
