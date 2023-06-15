// import Main from "./pages/Main";

import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { routes } from "./routes/routes.js";
import SuspenseLoader from "./Components/common/SuspenseLoader.jsx";

const ErrorComponent = lazy(() =>
import("./Components/common/ErrorComponent.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* as we reach to the home page then at the starting it should navigate to the index page */}
      <Route
        path={routes.main.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />

      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route
          path={`${routes.emails.path}/:type`}
          element={<routes.emails.element />}
          errorElement={<ErrorComponent />}
        />

        <Route
          path={routes.view.path}
          element={<routes.view.element />}
          errorElement={<ErrorComponent />}
        />
      </Route>

      <Route
        path={routes.invalid.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
    </Route>
  )
);

function App() {
  return (
    // whenever components are loading then one spinner starts revolving that comes with the help of suspense
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
