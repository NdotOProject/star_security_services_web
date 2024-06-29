import "bootstrap/dist/css/bootstrap.min.css";
//
import "./App.css";
//
import { Fragment, useEffect, useState } from "react";
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import { publicRoutes, privateRoutes } from "./routes/routes.js";

function App() {
  const [routes, setRoutes] = useState([...Object.values(publicRoutes)]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (
      role === "24722a9d-ad40-4324-a044-50825421cc6c" ||
      role === "97ce9bf7-6745-42d8-b6d0-e5f52f91a802"
    ) {
      setRoutes(Object.values(privateRoutes));
    } else {
      setRoutes(Object.values(publicRoutes));
    }
  }, []);

  return (
    <Router>
      <Routes>
        {Object.values(routes).map((route, index) => {
          const Page = route.component;

          let Layout = route.layout ?? Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
