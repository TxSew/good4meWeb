import { Route, Routes } from "react-router-dom";

import { PublicRouter } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
function App() {
  return (
    <>
      <Routes>
        {/* Public Router client */}
        {PublicRouter.map((e, i) => {
          const Component = e.element;
          const Layout = DefaultLayout;
          return (
            <Route
              key={i}
              path={e.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
        {/* Private Router */}
         
        {/* code... */}
      </Routes>
    </>
  );
}

export default App;
