import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { Close, DeleteOutline } from "@mui/icons-material";

import styled from "@emotion/styled";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/apiurls";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "&>p": {
    fontSize: 14,
    fontWeight: 600,
  },
});
const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&>div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});
const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: "10px 15px";
  align-items: center;
`;
const SendButton = styled(Button)({
  backgroundColor: "#0B57D0",
  color: "#FFFFFF",
  borderRadius: "20px",
  fontWeight: "bold",
  textTransform: "none",
  width: "100px",
});
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setdata] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "flexible83@yopmail.com",
    Password: "625CC157A2BD9BD2647C8671583C534851E7",
    Port: 2525,
  };

  const closeComposeMailDialog = (e) => {
    e.preventDefault(); //default action that belongs to the event will not occur.
    const payload = {
      to: data.to,
      from: "surajkumar834069@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Suraj Kumar",
      starred: false,
      type: "drafts",
    };
    saveDraftService.call(payload);
    if (!saveDraftService.error) {
      setOpenDialog(false);
      setdata({});
    } else {
    }
  };
  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "surajkumar834069@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => {
        if (message.includes("required")) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
    const payload = {
      to: data.to,
      from: "surajkumar834069@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Suraj Kumar",
      starred: false,
      type: "sent",
    };
    sentEmailService.call(payload);
    if (!sentEmailService.error) {
      setOpenDialog(false);
      setdata({});
    } else {
    }
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMailDialog(e)} />
      </Header>
      <RecipientsWrapper>
        <InputBase
          placeholder="Recipient"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </RecipientsWrapper>
      <Box>
        <TextField
          multiline
          rows={16}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
          name="body"
          onChange={(e) => onValueChange(e)}
        />
      </Box>
      <Footer>
        <SendButton variant="contained" onClick={(e) => sendMail(e)}>
          Send
        </SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
