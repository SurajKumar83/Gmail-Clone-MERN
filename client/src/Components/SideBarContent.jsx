import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import React, { useState } from "react";

import { SIDEBAR_DATA } from "../config/sidebarconfig";
import ComposeMail from "./ComposeMail";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../routes/routes.js";
// here we are using the useParams that basically works in finding the params from the url

const Container = styled(Box)`
  padding: 8px;
  & > ul {
    padding: 10px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    & > a {
      text-decoration: none;
      color: inherit;
    }
  }
  & > ul > a > li > svg {
    margin-right: 20px;
  }
`;
const ComposedButton = styled(Button)`
  background: #c2e7ff;
  color: #001d35;
  padding: 16px;
  border-radius: 0 16px;
  min-width: 140px;
  text-transform: none;
`;

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  const { type } = useParams();

  return (
    <Container>
      <ComposedButton onClick={onComposeClick}>
        <CreateOutlined />
        Compose
      </ComposedButton>

      <List>
        {SIDEBAR_DATA.map((data) => (
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
            <ListItem
              key={data.name}
              style={
                type === data.name.toLowerCase()
                  ? { backgroundColor: "#d3e3fd", borderRadius: "0 16px" }
                  : {}
              }
            >
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
