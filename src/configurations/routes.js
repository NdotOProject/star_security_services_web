const routes = {
  client: {
    home: "/",
    services: "/#services",
    serviceDetail: "/services/:id",
    recruitmentNews: "/recruitment-news",
  },
  admin: {
    home: "/admin",
    login: "/admin/login",
    employees: "/admin/employees",
    employeeCreate: "/admin/employees/create",
    employeeDetail: "/admin/employees/:id",
    clients: "/admin/clients",
    clientDetail: "/admin/clients/:id",
    recruitmentNews: "/admin/recruitment-news",
    recruitmentNewsDetail: "/admin/recruitment-news/:id",
    services: "/admin/services",
    serviceDetail: "/admin/services/:id",
    contracts: "/admin/contracts",
    contractCreate: "/admin/contracts/create",
  },
};

export default routes;
