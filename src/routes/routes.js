//
import routes from "../configurations/routes";
//
import { default as ClientLayout } from "../app/layout";
import { default as ClientHome } from "../app/page";
import { default as ClientRecruitmentNewsList } from "../app/recruitment-news/page";
import { default as ServiceDetail } from "../app/services/[id]/page";
//
import { default as LoginPage } from "../app/admin/login/page";
import { default as AdminLayout } from "../app/admin/layout";
import { default as AdminDashboard } from "../app/admin/page";
import { default as ClientList } from "../app/admin/clients/page";
import { default as ContractList } from "../app/admin/contracts/page";
import { default as EmployeeList } from "../app/admin/employees/page";
import { default as RecruitmentNewsList } from "../app/admin/recruitment-news/page";
import { default as ServicesList } from "../app/admin/services/page";

const publicRoutes = {
  home: {
    path: routes.client.home,
    component: ClientHome,
    layout: ClientLayout,
  },
  services: {
    path: routes.client.serviceDetail,
    component: ServiceDetail,
    layout: ClientLayout,
  },
  recruitmentNews: {
    path: routes.client.recruitmentNews,
    component: ClientRecruitmentNewsList,
    layout: ClientLayout,
  },
  login: {
    path: routes.admin.login,
    component: LoginPage,
  },
  adminHome: {
    path: routes.admin.home,
    component: AdminDashboard,
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
  adminContracts: {
    path: routes.admin.contracts,
    component: ContractList,
    layout: AdminLayout,
  },
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
