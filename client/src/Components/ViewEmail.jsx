import { useOutletContext, useLocation } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { dppic } from "../constants/constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/apiurls";
const IconWrapper = styled(Box)({
  padding: 15,
});
const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 20px 20px 75px",
  display: "flex",
});
const Indicator = styled(Box)`
  font-size: 12px;
  background-color: #ddd;
  color: #223;
  padding: 2px 4px;
  margin-left: 6px;
  border-radius: 4px;
  align-self: center;
`;

const Container = styled(Box)({
  marginLeft: 15,
  width: "100%",

  "&>div": {
    display: "flex",
    "&>p>span": {
      fontSize: 12,
      color: "#878787",
    },
  },
});

const Date = styled(Box)({
  margin: "0 50px 0 auto",
});
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmail = () => {
    moveEmailsToBinService.call([email._id]);
    window.history.back();
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, marginTop: 62 }
          : { marginTop: 62, width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete
          fontSize="small"
          color="action"
          style={{ marginLeft: 40 }}
          onClick={() => deleteEmail()}
        />
      </IconWrapper>
      <Subject>
        {email.subject}
        <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Box style={{ display: "flex" }}>
        <img
          src={dppic}
          alt="dppic"
          width="40px"
          height="40px"
          style={{
            borderRadius: "50%",
            background: "#FF8551",
            margin: "5px 10px 0 10px",
            padding: 2,
          }}
        />
        <Container>
          <Box>
            <Typography style={{ marginTop: "10px" }}>
              {email.name}
              <Box component="span"> &nbsp;&lt; {email.to} &#62;</Box>{" "}
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "long",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}&nbsp;
            </Date>
          </Box>
          <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmail;
