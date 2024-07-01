import React, { useEffect, useState } from "react";
import Authenticated from "./Authenticated";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Table from "../../components/table/Table";
import Icons from "../../components/icons/Icons";

import routes from "../../configurations/routes";
import httpClient from "../../utils/HttpClient";

import "./Page.css";

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [recruitmentNewsList, setRecruitmentNewsList] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const response = await httpClient.endpoints.clients.list.get();

      setClients(response.data);
    };

    const getEmployees = async () => {
      const response = await httpClient.endpoints.employees.list.get();

      setEmployees(response.data);
    };

    const getRecruitmentNews = async () => {
      const response = await httpClient.endpoints.recruitments.list.get();

      setRecruitmentNewsList(response.data);
    };

    getClients();
    getEmployees();
    getRecruitmentNews();
  }, []);

  return (
    <Authenticated>
      <div className={clsx("dashboard")}>
        <div className={clsx("portfolio-performance")}>
          <div className={clsx("item")}>
            <Link
              to={routes.admin.clients}
              className={clsx("content-container")}
            >
              <div className={clsx("content")}>
                <Icons.Users className={clsx("icon")} />
                <span>{clients.length} Clients</span>
              </div>
            </Link>
          </div>
          <div className={clsx("item")}>
            <Link
              to={routes.admin.employees}
              className={clsx("content-container")}
            >
              <div className={clsx("content")}>
                <Icons.BuildingUser className={clsx("icon")} />
                <span>{employees.length} Employees</span>
              </div>
            </Link>
          </div>
          <div className={clsx("item")}>
            <Link
              to={routes.admin.recruitmentNews}
              className={clsx("content-container")}
            >
              <div className={clsx("content")}>
                <Icons.Newspaper className={clsx("icon")} />
                <span>{recruitmentNewsList.length} Recruitment News</span>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className={clsx("detail-list-container")}>
          <div className={clsx("left-content")}>
            <div className={clsx("list-title")}>
              <span>Clients</span>
              <Link to={routes.admin.clients}>View All</Link>
            </div>
            <Table
              height="calc(100% - 50px)"
              config={{
                email: "Email",
                name: "Name",
                phoneNumber: "Phone Number",
              }}
              content={clients.map((client) => ({
                key: client.id,
                ...client,
              }))}
            />
          </div>
          <div className={clsx("right-content")}>
            <div className={clsx("top-content")}>
              <div className={clsx("list-title")}>
                <span>Employees</span>
                <Link to={routes.admin.employees}>View All</Link>
              </div>
              <Table
                height="calc(100% - 50px)"
                config={{
                  code: "Code",
                  name: "Name",
                  department: "Department",
                  address: "Address",
                  contactNumber: "Contact Number",
                }}
                content={employees.map((employee) => ({
                  key: employee.id,
                  code: employee.code,
                  name: employee.name,
                  department: employee.department.name,
                  address: employee.address,
                  contactNumber: employee.contactNumber,
                }))}
              />
            </div>
            <div className={clsx("bottom-content")}>
              <div className={clsx("list-title")}>
                <span>Recruitment News</span>
                <Link to={routes.admin.recruitmentNews}>View All</Link>
              </div>
              <Table
                height="calc(100% - 50px)"
                config={{
                  title: "Title",
                  vacancies: "Vacancies",
                  manager: "Manager",
                  description: "Description",
                }}
                content={recruitmentNewsList.map((recruitmentNews) => ({
                  key: recruitmentNews.id,
                  manager: recruitmentNews.manager.name,
                  ...recruitmentNews,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
