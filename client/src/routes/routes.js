// lazy loading  allows you to load parts of your application on-demand to reduce the initial load time.
import { lazy } from "react";
// lazy loading workd with default export and also it need to wrap in suspense
const Main = lazy(() => import("../pages/Main"));
const Emails = lazy(() => import("../Components/Emails"));
const ViewEmail = lazy(() => import("../Components/ViewEmail"));

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  // this invalid case comes when we hit any invalid address afterward /
  invalid: {
    path: "/*",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
};
export { routes };
