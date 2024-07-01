const routes = {
  client: {
    home: "/",
    serviceDetail: "/services/:serviceName",
    recruitmentNews: "/recruitment-news",
  },
  admin: {
    home: "/admin",
    login: "/login",
    employees: "/admin/employees",
    clients: "/admin/clients",
    recruitmentNews: "/admin/recruitmentNews",
  },
};

export default routes;
