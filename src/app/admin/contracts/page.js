import React, { useEffect, useState } from "react";
import Authenticated from "../../../components/Authenticated";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Table from "../../../components/table/Table";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import routes from "../../../configurations/routes";
import "./page.css";

export default function Page() {
  const [contracts, setContracts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState([]);

  const role = userService.getUserRoleId();

  const getContracts = async () => {
    const user = userService.getUser();

    if (user ?? false) {
      if (user.role.id === "24722a9d-ad40-4324-a044-50825421cc6c") {
        const response = await httpClient.endpoints.contracts.list.get();

        setContracts(response.data);
      } else {
        const response = await httpClient.endpoints.employees.contracts.get({
          pathParams: {
            id: user.id,
          },
        });

        setContracts(response.data);
      }
    }
  };

  useEffect(() => {
    getContracts();
  }, []);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Contracts</span>
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <Button
              as={Link}
              to={routes.admin.contractCreate}
              variant="success"
            >
              Create New
            </Button>
          )}
        </div>
        <div className="page_body">
          <div className="left_content">
            <Table
              height="calc(100% - 50px)"
              config={{
                id: "Id",
                name: "Name",
                email: "Email",
                phoneNumber: "Phone number",
              }}
              content={contracts.map((e) => ({
                key: e.id,
                id: e.id,
                name: e.client.name,
                email: e.client.email,
                phoneNumber: e.client.phoneNumber,
              }))}
              onRowSelect={(row) => {
                httpClient.endpoints.contracts.single
                  .get({
                    pathParams: {
                      id: row.id,
                    },
                  })
                  .then((response) => {
                    if (response.status === 200) {
                      const contract = response.data;

                      setEmployees(contract.employees);
                      setServices(contract.services);
                    }
                  });
              }}
            />
          </div>
          <div className="right_content">
            <Table
              className={"top_content"}
              height="calc(100% - 50px)"
              config={{
                code: "Code",
                name: "Name",
                contactNumber: "Contact Number",
                branch: "Branch",
                department: "Department",
              }}
              content={employees.map((e) => ({
                key: e.id,
                code: e.code,
                name: e.name,
                department: e.department.name,
                branch: e.department.branch.name,
                contactNumber: e.contactNumber,
              }))}
            />
            <Table
              className={"bottom_content"}
              height="calc(100% - 50px)"
              config={{
                name: "Name",
                description: "Description",
              }}
              content={services.map((e) => ({
                key: e.id,
                name: e.name,
                description: e.description,
              }))}
            />
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
