import "bootstrap/dist/css/bootstrap.min.css";
//
import { Fragment } from "react";
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import { publicRoutes } from "./routes/routes.js";

function App() {
  return (
    <Router>
      <Routes>
        {Object.values(publicRoutes).map((route, index) => {
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
