import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Authenticated from "../../../components/Authenticated";
import Table from "../../../components/table/Table";

import routes from "../../../configurations/routes";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import "./page.css";

export default function Page() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const endpoint = httpClient.endpoints.employees;

  const role = userService.getUserRoleId();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await endpoint.list.get();

      setEmployees(response.data);
    };

    fetchEmployees();
  }, [endpoint]);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Employees</span>
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <Button
              as={Link}
              to={routes.admin.employeeCreate}
              variant="success"
            >
              Add New
            </Button>
          )}
        </div>
        <div className="page_body">
          <Table
            height="70vh"
            config={{
              id: "Id",
              code: "Code",
              name: "Name",
              contactNumber: "Contact Number",
              branch: "Branch",
              department: "Department",
            }}
            content={employees.map((e) => ({
              ...e,
              key: e.id,
              branch: e.department.branch.name,
              department: e.department.name,
            }))}
            onRowSelect={(row) => {
              navigate(`/admin/employees/${row.id}`);
            }}
          />
        </div>
      </div>
    </Authenticated>
  );
}
