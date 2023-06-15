import { Box, Typography, Checkbox, styled } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/apiurls";

const Wrapper = styled(Box)`
  padding: 0 0 0 10px;
  background: #f2f6fc;
  cursor: pointer;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    width: 100%;

    & > p {
      font-size: 14px;
    }
  }
`;

const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: 5,
  marginRight: 6,
  height: 20,
});

const Date = styled(Typography)`
  margin-left: auto;
  margin-right: 20px;
  color: #5f6368;
  font-size: 12px;
`;
const Email = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarred);
  const toggleStarredMails = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id !== email._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };
  return (
    <>
      <Wrapper>
        <Checkbox
          size="small"
          checked={selectedEmails.includes(email._id)}
          onChange={() => onValueChange()}
        />
        {email.starred ? (
          <Star
            fontSize="small"
            style={{
              marginRight: 10,
              color: "#D3D04F",
            }}
            onClick={() => toggleStarredMails()}
          />
        ) : (
          <StarBorder
            fontSize="small"
            style={{
              marginRight: 10,
            }}
            onClick={() => toggleStarredMails()}
          />
        )}

        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={() =>
            navigate(routes.view.path, { state: { email: email } })
          }
        >
          <Typography
            style={{
              width: 200,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {email.name}
          </Typography>
          <Indicator>Inbox</Indicator>
          <Typography
            style={{
              width: 400,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {email.subject} {email.body && "-"}
            {email.body}
          </Typography>
          <Date>
            {new window.Date(email.date).getDate()}
            {new window.Date(email.date).toLocaleString("default", {
              month: "long",
            })}
          </Date>
        </Box>
      </Wrapper>
    </>
  );
};

export default Email;
