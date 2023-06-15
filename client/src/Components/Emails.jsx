import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/apiurls";
import useApi from "../hooks/useApi";
import { Checkbox, Box, List } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./NoMails";
import { EMPTY_TABS } from "../constants/constant";
const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmail);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen]);

  const selecetAllEmails = (e) => {
    const emails = e.target.checked
      ? getEmailsService?.response?.map((email) => email._id)
      : [];
    setSelectedEmails(emails);
  };

  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
  deleteEmailService.call(selectedEmails);
    } else {
moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen((prevState) => !prevState);
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, marginTop: 62, width: "calc(100%-250px)" }
          : { marginTop: 62, width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selecetAllEmails(e)} />
        <DeleteOutline onClick={() => deleteSelectedEmails()} />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
      {getEmailsService?.response?.length === 0 && (
        <NoMails message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
};

export default Emails;
// error: cannot read property of undefined meaning we are try to use the property of an undefined variable
//  getEmailsService && getEmailsService.response
// or use optional chaning  getEmailsService?.response
