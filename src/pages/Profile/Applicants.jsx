import React from "react";
import {
  Box,
  CardHeader,
  Avatar,
  Typography,
  InputLabel,
  Stack,
  Input,
  styled,
  Button,
} from "@mui/material";

const Applicants = () => {
  return (
    //   container
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* PROFILE */}
      <Box width="1200px" height="100px" marginTop="50px">
        <CardHeader
          avatar={<Avatar aria-label="recipe">B</Avatar>}
          title="John Doe"
          subheader="John.doe@cit.edu"
        />
      </Box>
      {/* ASSESSMENT ANSWERS */}
      <Box
        width="1200px"
        height="500px"
        borderRadius="10px"
        border="2px solid #000000"
        display="flex"
        flexDirection="column"
      >
        <Box sx={{ overflowY: "auto" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            borderBottom="1px solid #000000"
          >
            Applicant Answers
          </Typography>
          <Stack
            display="flex"
            justifyContent="start"
            paddingLeft="50px"
            paddingTop="20px"
          >
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                1. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                2. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                3. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                4. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                5. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
          </Stack>
        </Box>
      </Box>
      <Box width="1200px" display="flex" height="120px">
        {/* download resume */}
        <Box
          sx={{
            width: "200px",
            height: "200px",
            paddingTop: "40px",
            display: "flex",
          }}
        >
          <Button
            sx={{
              width: "315px",
              height: "40px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              borderRadius: "20px",
            }}
          >
            <Typography fontWeight="bold">Download Resume</Typography>
          </Button>
        </Box>
        {/* Approve or Reject */}
        <Box
          display="flex"
          width="1000px"
          justifyContent="end"
          paddingTop="40px"
        >
          <Button
            sx={{
              width: "137px",
              height: "50px",
              borderRadius: "15px",
              border: "3px solid #44B2EA",
              color: "#44B2EA",
            }}
          >
            <Typography fontWeight="bold">Approve</Typography>
          </Button>
          <Button
            sx={{
              width: "137px",
              height: "50px",
              borderRadius: "15px",
              border: "3px solid #FF0000",
              color: "#FF0000",
              marginLeft: "20px",
            }}
          >
            <Typography fontWeight="bold">Reject</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const InputStyled = styled(Input)({
  width: "1000px",
  height: "60px",
  borderRadius: "20px",
  border: "1px solid #c4c4c4",
  paddingLeft: "10px",
});

export default Applicants;
