import React, { Suspense, useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

import { Outlet } from "react-router-dom";
import SuspenseLoader from "../Components/common/SuspenseLoader";
import { Box } from "@mui/material";


const Main = () => {

  const [openDrawer, setDrawer] = useState(true);
  const toggleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <Box>
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{ openDrawer }} />
        </Suspense>
      </Box>
    </>
  );
};
export default Main;
/* outlet is used to render the child component of the component  whatever we write inside the opening and the closing route is called the outlet child component 

React Context allows you to share and manage state across your components without passing down props.

*/
