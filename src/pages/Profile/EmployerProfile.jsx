import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  OutlinedInput,
  Typography,
  styled,
  Dialog,
  CardHeader,
  Avatar,
  Stack,
  FormLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Input,
  IconButton,
  Menu,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const postSettings = ["Edit", "Delete"];

const EmployerProfile = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verflowY: "auto",
          marginTop: "70px",
          marginLeft: "200px",
        }}
      >
        {/* Company Profile */}
        <Box width="1500px" display="flex" flexDirection="column" rowGap="40px">
          <Box display="flex">
            <Box
              width="812px"
              height="302px"
              borderRadius="15px"
              border="2px solid #000000"
              marginRight="40px"
              display="flex"
            >
              {/* Profile Details */}
              <Box width="400px" display="flex" justifyContent="center">
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
                    <Typography variant="h4">Employer Name</Typography>
                  </CardContent>
                </Box>
              </Box>
              <Box
                width="400px"
                display="flex"
                flexDirection="column"
                rowGap="10px"
                textAlign="start"
                paddingLeft="20px"
                paddingTop="20px"
              >
                <Typography variant="h5" fontWeight="bold">
                  About Us
                </Typography>
                <Typography variant="p" paddingBottom="15px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dictum, nisi vel dapibus cursus, nulla nibh iaculis felis, a
                  cursus arcu diam eu arcu. Vestibulum facilisis, diam at
                  eleifend fringilla, justo lorem porta mi, ac hendrerit nunc
                  massa ut quam.
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  Employer Email
                </Typography>
                <Typography variant="p" paddingBottom="10px">
                  John.Doe@email.com
                </Typography>
                <Button
                  sx={{
                    maxWidth: "200px",
                    height: "27px",
                    borderRadius: "15px",
                    border: "3px solid #20A4E6",
                    color: "#20A4E6",
                  }}
                >
                  <Typography variant="p">Edit Profile</Typography>
                </Button>
              </Box>
            </Box>

            {/* Application Status */}
            <Box
              borderRadius="15px"
              border="2px solid #000000"
              width="320px"
              height="128px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h6" fontWeight="bold">
                Number of Applicants
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#FF0404">
                2
              </Typography>
              <ApplicantsCard />
            </Box>
          </Box>
          <Box
            borderRadius="15px"
            border="2px solid #000000"
            width="1300px"
            height="164px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PostCard />
          </Box>

          <Box
            borderRadius="15px"
            border="2px solid #000000"
            width="1300px"
            maxHeight="1000px"
            display="flex"
            marginBottom="20px"
            flexDirection="column"
            paddingLeft="30px"
            paddingBottom="20px"
          >
            <Box display="flex">
              <CardHeader
                avatar={<Avatar aria-label="recipe">B</Avatar>}
                title="John Doe"
                subheader="John.doe@cit.edu"
              />
              <Box marginLeft="1020px">
                <IconButton onClick={handleOpenMenu}>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex">
              <Box width="1200px" paddingTop="20px" paddingLeft="20px">
                <Typography variant="h4">Human Resources</Typography>
                <br />
                <Typography variant="h5">Job Type:</Typography>
                <br />
              </Box>
              <Box>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseMenu}
                >
                  {postSettings.map((postSettings) => (
                    <MenuItem key={postSettings} onClick={handleCloseMenu}>
                      <Typography textAlign="center">{postSettings}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box paddingLeft="20px" paddingRight="40px">
              <Typography variant="h6" textAlign="justify">
                We are seeking a highly motivated and experienced Human Resource
                Officer to join our dynamic team at AMNK FOODTEK CHAIN, INC. As
                a Human Resource Officer, you will play a critical role in
                supporting our organization's human resources functions and
                ensuring the smooth operation of our workforce.
                Responsibilities: • Implement and manage HR policies and
                procedures in compliance with applicable laws and regulations. •
                Handle employee onboarding, orientation, and off boarding
                processes. • Maintain and update employee records, including
                personal information, leave, and attendance records. •
                Coordinate recruitment activities, including job posting,
                screening resumes, conducting interviews, and making job offers.
                • Administer employee benefits programs and handle employee
                inquiries related to benefits. • Assist in performance
                management processes, including conducting performance reviews
                and providing guidance on employee development. • Address
                employee relations issues and resolve conflicts...
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const ApplicantsCard = () => {
  const [openApplicants, SetOpenApplicants] = React.useState(false);
  const handleOpenApplicant = () => SetOpenApplicants(true);
  const handleCloseApplicant = () => SetOpenApplicants(false);

  return (
    <>
      <Button
        onClick={handleOpenApplicant}
        sx={{
          maxWidth: "200px",
          height: "27px",
          borderRadius: "15px",
          border: "3px solid #20A4E6",
          color: "#000000",
        }}
      >
        <Typography variant="p" color="#20A4E6">
          View Applicants
        </Typography>
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={openApplicants}
        onClose={handleCloseApplicant}
      >
        <DialogTitle textAlign="center" borderBottom="2px solid #808080">
          <Typography variant="h4" fontWeight="bold">
            Applicants
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
                <Box width="400px">
                  <Typography variant="h4" fontWeight="bold">
                    John Palo
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <Button
                    sx={{
                      width: "190px",
                      height: "42px",
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      borderRadius: "20px",
                      "&:hover": { backgroundColor: "#000000" },
                    }}
                  >
                    <Typography fontWeight="bold">
                      <Link to="applicants">testing</Link>
                    </Typography>
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const PostCard = () => {
  const [openPost, setOpenPost] = React.useState(false);
  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);
  const handleChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <>
      <ButtonStyled onClick={handleOpenPost}>Post a Job</ButtonStyled>
      <Dialog fullWidth maxWidth="md" open={openPost} onClose={handleClosePost}>
        <DialogTitle textAlign="center" borderBottom="2px solid #808080">
          <Typography variant="h4" fontWeight="bold">
            Create Job Posting
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
            <CardHeader
              avatar={<Avatar aria-label="recipe">B</Avatar>}
              title="John Doe"
              subheader="John.doe@cit.edu"
            />
            <Stack justifyContent="center" alignItems="center">
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                }}
              >
                <Box display="flex" flexDirection="column">
                  <FormLabel>
                    <Typography
                      variant="h7"
                      fontWeight="bold"
                      paddingLeft="13px"
                    >
                      Title
                    </Typography>
                  </FormLabel>
                  <OutlinedInputStyled onFocus="none" />
                </Box>
                <Box>
                  <FormControl sx={{ width: "300px" }}>
                    <InputLabel>Job Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Job Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>UI/UX Designer</MenuItem>
                      <MenuItem value={2}>Front-End Developer</MenuItem>
                      <MenuItem value={3}>Back-End Developer</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column">
                  <FormLabel>
                    <Typography
                      variant="h7"
                      fontWeight="bold"
                      paddingLeft="13px"
                    >
                      Description
                    </Typography>
                  </FormLabel>
                  <TextField
                    multiline
                    onFocus="none"
                    rows={5}
                    maxRows={5}
                    InputProps={{ sx: { borderRadius: 6 } }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  width="800px"
                  height="300px"
                  border="1px solid #c4c4c4"
                  borderRadius="20px"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      textAlign="center"
                      borderBottom="1px solid #c4c4c4"
                    >
                      Create Exam
                    </Typography>
                    <Box sx={{ height: "260px", overflowY: "auto" }}>
                      <Stack
                        spacing={3}
                        alignItems="center"
                        paddingTop="20px"
                        paddingBottom="20px"
                      >
                        <InputStyled
                          onFocus="none"
                          disableUnderline={true}
                          placeholder="Question 1"
                        />
                        <InputStyled
                          onFocus="none"
                          disableUnderline={true}
                          placeholder="Question 2"
                        />
                        <InputStyled
                          onFocus="none"
                          disableUnderline={true}
                          placeholder="Question 3"
                        />
                        <InputStyled
                          onFocus="none"
                          disableUnderline={true}
                          placeholder="Question 4"
                        />
                        <InputStyled
                          onFocus="none"
                          disableUnderline={true}
                          placeholder="Question 5"
                        />
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="end">
                  <Button
                    sx={{
                      width: "160px",
                      height: "42px",
                      borderRadius: "20px",
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      "&:hover": { backgroundColor: "#000000" },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      Post
                    </Typography>
                  </Button>
                </Box>
              </FormControl>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ButtonStyled = styled(Button)({
  width: "950px",
  height: "60px",
  borderRadius: "20px",
  border: "1px solid #000000",
  display: "flex",
  justifyContent: "start",
  paddingLeft: "30px",
  color: "#808080",
});

const OutlinedInputStyled = styled(OutlinedInput)({
  width: "800px",
  height: "55px",
  borderRadius: "20px",
});

const InputStyled = styled(Input)({
  width: "700px",
  height: "60px",
  borderRadius: "20px",
  border: "1px solid #c4c4c4",
  paddingLeft: "10px",
});

export default EmployerProfile;
