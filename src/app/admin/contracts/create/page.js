import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Authenticated from "../../../../components/Authenticated";
import Table from "../../../../components/table/Table";

import httpClient from "../../../../utils/HttpClient";
import userService from "../../../../utils/UserService";

import routes from "../../../../configurations/routes";

import "./page.css";

const emptyContract = {
  client: {
    value: "",
    error: "",
  },
  employees: {
    value: [],
    error: "",
  },
  services: {
    value: [],
    error: "",
  },
};

export default function Page() {
  const role = userService.getUserRoleId();

  const navigate = useNavigate();

  const [contract, setContract] = useState(emptyContract);
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const response = await httpClient.endpoints.clients.list.get();

      setClients(response.data);
    };

    const getEmployees = async () => {
      const response = await httpClient.endpoints.employees.list.get();

      setEmployees(response.data);
    };

    const getServices = async () => {
      const response = await httpClient.endpoints.services.list.get();

      setServices(response.data);
    };

    getClients();
    getEmployees();
    getServices();
  }, []);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Create Contract</span>
        </div>
        <div className="page_body">
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <div className="form_container form_contract">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Client</Form.Label>
                  <Form.Select
                    type="text"
                    value={contract.client.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Client is required.";
                      }

                      setContract({
                        ...contract,
                        client: { value, error },
                      });
                    }}
                  >
                    <option value={""}>Choose client</option>
                    {clients.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <span className="form_error">{contract.client.error}</span>
                </Form.Group>
                <div className="checkbox_section">
                  <Form.Group className="mb-3">
                    <Form.Label>Employees</Form.Label>
                    <Table
                      height="calc(100% - 50px)"
                      config={{
                        checkbox: "",
                        code: "Code",
                        name: "Name",
                        contactNumber: "Contact Number",
                        branch: "Branch",
                        department: "Department",
                      }}
                      content={employees.map((employee) => ({
                        key: employee.id,
                        checkbox: (
                          <Form.Check
                            name="employees"
                            checked={contract.employees.value.includes(
                              employee.id
                            )}
                            onChange={(event) => {
                              const checked = event.target.checked;

                              const value = checked
                                ? [...contract.employees.value, employee.id]
                                : contract.employees.value.filter(
                                    (v) => v !== employee.id
                                  );

                              let error = "";
                              if (value.length === 0) {
                                error = "Please choose at least 1 employee.";
                              }

                              setContract({
                                ...contract,
                                employees: {
                                  value,
                                  error,
                                },
                              });
                            }}
                          />
                        ),
                        code: employee.code,
                        name: employee.name,
                        department: employee.department.name,
                        branch: employee.department.branch.name,
                        contactNumber: employee.contactNumber,
                      }))}
                    />
                    <span className="form_error">
                      {contract.employees.error}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Services</Form.Label>
                    <Table
                      height="calc(100% - 50px)"
                      config={{
                        checkbox: "",
                        name: "Name",
                      }}
                      content={services.map((service) => ({
                        key: service.id,
                        checkbox: (
                          <Form.Check
                            name="services"
                            checked={contract.services.value.includes(
                              service.id
                            )}
                            onChange={(event) => {
                              const checked = event.target.checked;

                              const value = checked
                                ? [...contract.services.value, service.id]
                                : contract.services.value.filter(
                                    (v) => v !== service.id
                                  );

                              let error = "";
                              if (value.length === 0) {
                                error = "Please choose at least 1 service.";
                              }

                              setContract({
                                ...contract,
                                services: {
                                  value,
                                  error,
                                },
                              });
                            }}
                          />
                        ),
                        name: service.name,
                      }))}
                    />
                    <span className="form_error">
                      {contract.services.error}
                    </span>
                  </Form.Group>
                </div>
              </Form>
              <div className="btn_section">
                <div className="safe_range">
                  <Button
                    disabled={contract === emptyContract}
                    onClick={() => {
                      setContract(emptyContract);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="success"
                    disabled={contract === emptyContract}
                    onClick={() => {
                      if (
                        contract.client.value !== "" &&
                        contract.employees.value.length !== 0 &&
                        contract.services.value.length !== 0
                      ) {
                        httpClient.endpoints.contracts.list
                          .post({
                            body: {
                              client: contract.client.value,
                              employees: contract.employees.value,
                              services: contract.services.value,
                            },
                          })
                          .then((response) => {
                            if (response.status === 201) {
                              setContract(emptyContract);
                              navigate(routes.admin.contracts);
                            }
                          });
                      }
                    }}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Authenticated>
  );
}
