import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Authenticated from "../../../../components/Authenticated";

import routes from "../../../../configurations/routes";

import httpClient from "../../../../utils/HttpClient";
import userService from "../../../../utils/UserService";

import "./page.css";

const emptyEmployee = {
  id: undefined,
  name: {
    value: "",
    error: "",
  },
  address: {
    value: "",
    error: "",
  },
  contactNumber: {
    value: "",
    error: "",
  },
  code: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  branchId: {
    value: "",
    error: "",
  },
  departmentId: {
    value: "",
    error: "",
  },
  educationalQualificationId: {
    value: "",
    error: "",
  },
  gradeId: {
    value: "",
    error: "",
  },
  roleId: {
    value: "",
    error: "",
  },
};

export default function Page() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(emptyEmployee);
  const [branches, setBranches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [educationalQualifications, setEducationalQualifications] = useState(
    []
  );
  const [grades, setGrades] = useState([]);
  const [roles, setRoles] = useState([]);

  const employeeEndpoint = httpClient.endpoints.employees;

  const fetchDepartments = async (branchId) => {
    const response = await httpClient.endpoints.branches.departments.get({
      pathParams: {
        id: branchId,
      },
    });

    setDepartments(response.data);
  };

  useEffect(() => {
    const fetchBranches = async () => {
      const response = await httpClient.endpoints.branches.list.get();

      setBranches(response.data);
    };

    const fetchEducationalQualifications = async () => {
      const response =
        await httpClient.endpoints.educationalQualifications.list.get();

      setEducationalQualifications(response.data);
    };

    const fetchGrades = async () => {
      const response = await httpClient.endpoints.grades.list.get();

      setGrades(response.data);
    };

    const fetchRoles = async () => {
      const response = await httpClient.endpoints.roles.list.get();

      setRoles(response.data);
    };

    fetchBranches();
    fetchEducationalQualifications();
    fetchGrades();
    fetchRoles();
  }, []);

  const role = userService.getUserRoleId();

  return role !== "24722a9d-ad40-4324-a044-50825421cc6c" ? (
    <Navigate to={routes.admin.employees} />
  ) : (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Add new employee</span>
        </div>
        <div className="page_body">
          <div className="form_container form-employee">
            <Form>
              <div className="basic_info_section">
                <div className="basic_info">
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={employee.name.value}
                      onChange={(event) => {
                        const value = event.target.value;

                        let error = "";
                        if (value === "") {
                          error = "Name is required.";
                        }

                        setEmployee({
                          ...employee,
                          name: { value, error },
                        });
                      }}
                    />
                    <span className={"form_error"}>{employee.name.error}</span>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={employee.address.value}
                      onChange={(e) => {
                        const value = e.target.value;

                        let error = "";
                        if (value === "") {
                          error = "Address is required.";
                        }

                        setEmployee({
                          ...employee,
                          address: { value, error },
                        });
                      }}
                    />
                    <span className={"form_error"}>
                      {employee.address.error}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={employee.contactNumber.value}
                      onChange={(e) => {
                        const value = e.target.value;

                        let error = "";

                        if (value === "") {
                          error = "Contact Number is required.";
                        } else if (
                          !value.match(
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                          )
                        ) {
                          error = "Contact Number format is invalid.";
                        }

                        setEmployee({
                          ...employee,
                          contactNumber: { value, error },
                        });
                      }}
                    />
                    <span className={"form_error"}>
                      {employee.contactNumber.error}
                    </span>
                  </Form.Group>
                </div>
                <div className="more_info">
                  <Form.Group className="mb-3">
                    <Form.Label>Educational Qualification</Form.Label>
                    <Form.Select
                      value={employee.educationalQualificationId.value}
                      onChange={(e) => {
                        const value = e.target.value;

                        let error = "";
                        if (value === "") {
                          error = "Educational Qualification is required.";
                        }

                        setEmployee({
                          ...employee,
                          educationalQualificationId: { value, error },
                        });
                      }}
                    >
                      <option value={""}>
                        Choose educational qualification
                      </option>
                      {educationalQualifications.map((e) => {
                        return (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <span className={"form_error"}>
                      {employee.educationalQualificationId.error}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Grade</Form.Label>
                    <Form.Select
                      value={employee.gradeId.value}
                      onChange={(e) => {
                        const value = e.target.value;

                        let error = "";
                        if (value === "") {
                          error = "Grade is required.";
                        }

                        setEmployee({
                          ...employee,
                          gradeId: { value, error },
                        });
                      }}
                    >
                      <option value={""}>Choose grade</option>
                      {grades.map((e) => {
                        return (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <span className={"form_error"}>
                      {employee.gradeId.error}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      value={employee.roleId.value}
                      onChange={(e) => {
                        const value = e.target.value;

                        let error = "";
                        if (value === "") {
                          error = "Role is required.";
                        }

                        setEmployee({
                          ...employee,
                          roleId: { value, error },
                        });
                      }}
                    >
                      <option value={""}>Choose role</option>
                      {roles.map((e) => {
                        return (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <span className={"form_error"}>
                      {employee.roleId.error}
                    </span>
                  </Form.Group>
                </div>
              </div>
              <div className="department_info_section">
                <Form.Group className="mb-3">
                  <Form.Label>Branch</Form.Label>
                  <Form.Select
                    value={employee.branchId.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Branch is required.";
                      }

                      setEmployee({
                        ...employee,
                        branchId: { value, error },
                      });

                      if (value !== "") {
                        fetchDepartments(value);
                      }
                    }}
                  >
                    <option value={""}>Choose branch</option>
                    {branches.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <span className="form_error">{employee.branchId.error}</span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    disabled={employee.branchId.value === ""}
                    value={employee.departmentId.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Department is required.";
                      }

                      setEmployee({
                        ...employee,
                        departmentId: { value, error },
                      });
                    }}
                  >
                    <option value={""}>Choose department</option>
                    {departments.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <span className="form_error">
                    {employee.departmentId.error}
                  </span>
                </Form.Group>
              </div>
              <div className="account_info_section">
                <Form.Group className="mb-3">
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={employee.code.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";

                      if (value === "") {
                        error = "Code is required.";
                      }

                      setEmployee({
                        ...employee,
                        code: { value, error },
                      });
                    }}
                  />
                  <span className={"form_error"}>{employee.code.error}</span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    value={employee.password.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";

                      if (value === "") {
                        error = "Password is required.";
                      }

                      setEmployee({
                        ...employee,
                        password: { value, error },
                      });
                    }}
                  />
                  <span className={"form_error"}>
                    {employee.password.error}
                  </span>
                </Form.Group>
              </div>
            </Form>
            <div className="btn_section">
              <div className="safe_range">
                <Button
                  disabled={employee === emptyEmployee}
                  onClick={() => {
                    setEmployee(emptyEmployee);
                  }}
                >
                  Clear
                </Button>
                <Button
                  variant="success"
                  disabled={employee === emptyEmployee}
                  onClick={() => {
                    if (
                      employee.name.value !== "" &&
                      employee.address.value !== "" &&
                      employee.contactNumber.value !== "" &&
                      employee.code.value !== "" &&
                      employee.password.value !== "" &&
                      employee.branchId.value !== "" &&
                      employee.departmentId.value !== "" &&
                      employee.educationalQualificationId.value !== "" &&
                      employee.gradeId.value !== "" &&
                      employee.roleId.value !== ""
                    ) {
                      employeeEndpoint.list
                        .post({
                          body: {
                            address: employee.address.value,
                            code: employee.code.value,
                            contactNumber: employee.contactNumber.value,
                            defaultPassword: employee.password.value,
                            departmentId: employee.departmentId.value,
                            educationalQualificationId:
                              employee.educationalQualificationId.value,
                            gradeId: employee.gradeId.value,
                            name: employee.name.value,
                            roleId: employee.roleId.value,
                          },
                        })
                        .then((response) => {
                          if (response.status === 201) {
                            setEmployee(emptyEmployee);
                            navigate(routes.admin.employees);
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
        </div>
      </div>
    </Authenticated>
  );
}
