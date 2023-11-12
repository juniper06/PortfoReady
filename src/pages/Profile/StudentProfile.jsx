import React from "react";
import { useState } from "react";
import "./studentprofile.css";
import {
  Box,
  CardHeader,
  Avatar,
  CardContent,
  TextField,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FormControlLabel,
  FormLabel,
  CardActionArea,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "bootstrap";


const StudentProfile = () => {
  return (
    <>
      <div className="student-profile">
        <div className="student-details">
          <div className="profile-details">
            <Box
              sx={{
                width: "400px",
                height: "302px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "20px",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    sx={{ width: 70, height: 70, marginTop: "35px" }}
                  >
                    B
                  </Avatar>
                }
              />
              <CardContent sx={{ textAlign: "center" }}>
                <h1>John Doe</h1>
                <h2>Front-End Developer</h2>
              </CardContent>
            </Box>
            <Box
              sx={{
                width: "400px",
                height: "260px",
                margin: "20px",
                display: "flex",
                flexDirection: "column",
                rowGap: "13px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Skills
              </Typography>
              <Typography variant="p">
                Front-End Development, Graphic Design
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Education
              </Typography>
              <Typography variant="p">Cebu Institute of Technology</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Languages
              </Typography>
              <Typography variant="p">English, Japanese, Chinese</Typography>
              <button
                style={{
                  width: "110px",
                  height: "27px",
                  borderRadius: "15px",
                  backgroundColor: "transparent",
                  color: "#20A4E6",
                  border: "4px solid #20A4E6",
                  cursor: "pointer",
                }}
              >
                Edit Profile
              </button>
            </Box>
          </div>
          <div className="certificate-details">
            <Box sx={{ margin: "15px", display: "flex" }}>
              <h2>Certificates</h2>
              <div className="add-button">
                <AddCircleOutlineIcon sx={{ cursor: "pointer" }} />
              </div>
            </Box>
          </div>
          <div className="experience-details">
            <Box sx={{ margin: "15px", display: "flex" }}>
              <h2>Experiences</h2>
              <div className="add-button">
                <AddCircleOutlineIcon sx={{ cursor: "pointer" }} />
              </div>
            </Box>
          </div>
        </div>
        <div className="rightside-details">
          <AssessmentCard />
          <ApplicationCard />
          <div className="links-container">
            <h3>Contact Info</h3>
            <a className="contact-link" href="#">
              Facebook.com/profile
            </a>
            <a className="contact-link" href="#">
              Twitter.com/profile
            </a>
            <a className="contact-link" href="#">
              Email.com/profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const TextFieldStyled = styled(TextField)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

const OutlinedInputStyled = styled(OutlinedInput)({
  width: "809px",
  marginLeft: "20px",
  borderRadius: "20px",
  border: "1px solid #000000",
  outline: "none",
});

const ButtonStyled = styled(Button)({
  width: "160px",
  height: "42px",
  backgroundColor: "#000000",
});

const FormLabelStyled = styled(FormLabel)({
  fontsize: "20px",
  fontWeight: "bold",
});

const AssessmentCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="assessment-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ paddingTop: "20px" }}>Take Assessment Now</h2>
        <br />
        <br />
        <button
          onClick={handleOpen}
          style={{
            width: "110px",
            height: "27px",
            borderRadius: "15px",
            backgroundColor: "transparent",
            color: "#20A4E6",
            border: "4px solid #20A4E6",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Answer
        </button>
        <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
          <DialogTitle textAlign="center" borderBottom="2px solid #808080">
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Assesment
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box padding="20px">
              <FormControl
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  rowGap: "10px",
                }}
              >
                <FormLabelStyled>
                  1. How long have you been working as a Front End Developer?
                </FormLabelStyled>
                <OutlinedInputStyled onFocus="none" />
                <FormLabelStyled>
                  2. Do you have any experience when it comes to solving real
                  world problems in the IT Field?
                </FormLabelStyled>
                <OutlinedInputStyled onFocus="none" />
                <FormLabelStyled>
                  3. Do you have any experience when it comes to solving real
                  world problems in the IT Field?
                </FormLabelStyled>
                <OutlinedInputStyled onFocus="none" />
                <FormLabelStyled>
                  4. How long have you been working as a Front End Developer?
                </FormLabelStyled>
                <OutlinedInputStyled onFocus="none" />
                <FormLabelStyled>
                  5. How long have you been working as a Front End Developer?
                </FormLabelStyled>
                <OutlinedInputStyled onFocus="none" />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="end"
                  paddingTop="15px"
                >
                  <button
                    style={{
                      width: "160px",
                      height: "42px",
                      borderRadius: "20px",
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      fontSize: "24px",
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    Submit
                  </button>
                </Box>
              </FormControl>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
};

const ApplicationCard = () => {
  const [openApplication, setOpenApplication] = React.useState(false);
  const handleOpenApplication = () => setOpenApplication(true);
  const handleCloseApplication = () => setOpenApplication(false);

  return (
    <div className="application-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ paddingTop: "20px" }}>View Applications</h2>
        <br />
        <br />
        <button
          onClick={handleOpenApplication}
          style={{
            width: "110px",
            height: "27px",
            borderRadius: "15px",
            backgroundColor: "transparent",
            color: "#20A4E6",
            border: "4px solid #20A4E6",
            cursor: "pointer",
          }}
        >
          View
        </button>
        <Dialog
          fullWidth
          maxWidth="md"
          open={openApplication}
          onClose={handleCloseApplication}
        >
          <DialogTitle textAlign="center" borderBottom="2px solid #808080">
            <Typography variant="h4" fontWeight="bold">
              My Applications
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems="center"
              paddingTop="20px"
            >
              <Box
                width="800px"
                height="126px"
                border="2px solid #808080"
                borderRadius="20px"
                display="flex"
                alignItems="center"
                paddingLeft="30px"
              >
                <Stack direction="row" columnGap="180px" alignItems="center">
                  <Typography variant="h4" fontWeight="bold">
                    Application for Pixel Perfect
                  </Typography>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography color="#FF0000" variant="h5" fontWeight="bold">
                      Pending
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                width="800px"
                height="126px"
                border="2px solid #808080"
                borderRadius="20px"
                display="flex"
                alignItems="center"
                paddingLeft="30px"
              >
                <Stack direction="row" columnGap="180px" alignItems="center">
                  <Typography variant="h4" fontWeight="bold">
                    Application for Pixel Perfect
                  </Typography>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography color="#FF0000" variant="h5" fontWeight="bold">
                      Pending
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                width="800px"
                height="126px"
                border="2px solid #808080"
                borderRadius="20px"
                display="flex"
                alignItems="center"
                paddingLeft="30px"
              >
                <Stack direction="row" columnGap="180px" alignItems="center">
                  <Typography variant="h4" fontWeight="bold">
                    Application for Pixel Perfect
                  </Typography>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography color="#FF0000" variant="h5" fontWeight="bold">
                      Pending
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
};

const DialogStyled = styled(Dialog)({
  width: 900,
  height: 675,
  bgcolor: "#ffffff",
  border: "2px solid #000000",
  borderRadius: "15px",
});

export default StudentProfile;
