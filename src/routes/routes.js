//
import routes from "../configurations/routes";
//
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Admin/Page";
import Login from "../pages/Client/Login/Page";
import Home from "../pages/Client/Page";

const publicRoutes = {
  home: {
    path: routes.client.home,
    component: Home,
    layout: DefaultLayout,
  },
  login: {
    path: routes.admin.login,
    component: Login,
  },
};

const privateRoutes = {
  home: {
    path: routes.admin.home,
    component: Dashboard,
  },
};

export { publicRoutes, privateRoutes };
