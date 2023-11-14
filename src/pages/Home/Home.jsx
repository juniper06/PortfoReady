import React from "react";
import {
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Typography,
  CardHeader,
  CardContent,
  Button,
  styled,
  Card,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PostCard } from "../Profile/EmployerProfile";
import { Link, useNavigate } from "react-router-dom";

const postSettings = ["Edit", "Delete"];

const Home = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {/* Container */}
      <Box
        display="flex"
        justifyContent="center"
        columnGap={5}
        marginTop="30px"
        marginBottom="30px"
      >
        
        {/* Left-Container */}
        <Box width="1100px" display="flex" flexDirection="column" rowGap={13}>
          <Box
            display="flex"
            justifyContent="start"
            flexDirection="column"
            rowGap={3}
          >
            <Typography variant="h2">Hello, John</Typography>
            <Box>
              <PostCard />
            </Box>
          </Box>
          {/* Job-Container */}
          <Box display="flex" flexDirection="column" rowGap={5}>
            <JobContainer>
              <Box
                display="flex"
                flexDirection="column"
                paddingLeft="40px"
                paddingTop="20px"
                rowGap={1}
              >
                <Box display="flex">
                  <Box
                    onClick={() => navigate("/jobpage")}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography variant="h3" width="900px">
                      Title:
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="end" width="120px">
                    <IconButton onClick={handleOpenUserMenu}>
                      <MoreHorizIcon />
                    </IconButton>
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
                      onClose={handleCloseUserMenu}
                    >
                      {postSettings.map((postSettings) => (
                        <MenuItem
                          key={postSettings}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign="center">
                            {postSettings}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
                <Typography variant="h5">Job Type:</Typography>
                <CardHeader
                  avatar={
                    <Avatar sx={{}} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  title="Human Resources"
                  subheader="John.doe@cit.edu"
                />
                <Box width="1020px">
                  <Typography variant="body1" textAlign="start">
                    We are seeking a highly motivated and experienced Human
                    Resource Officer to join our dynamic team at AMNK FOODTEK
                    CHAIN, INC. As a Human Resource Officer, you will play a
                    critical role in supporting our organization's human
                    resources functions and ensuring the smooth operation of our
                    workforce. Responsibilities: • Implement and manage HR
                    policies and procedures in compliance with applicable laws
                    and regulations. • Handle employee onboarding, orientation,
                    and off boarding processes. • Maintain and update employee
                    records, including personal information, leave, and
                    attendance records. • Coordinate recruitment activities,
                    including job posting, screening resumes, conducting
                    interviews, and making job offers. • Administer employee
                    benefits programs and handle employee inquiries related to
                    benefits. • Assist in performance management processes,
                    including conducting performance reviews and providing
                    guidance on employee development. • Address employee
                    relations issues and resolve conflicts...
                  </Typography>
                </Box>
              </Box>
            </JobContainer>
          </Box>
        </Box>

        {/* Right-Container */}
        <Box width="500px" display="flex" flexDirection="column" rowGap={5}>
          <SmallContainer
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="testing"
                  src={`https://ui-avatars.com/api/?background=random&name`}
                />
              }
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" fontWeight="bold">
                John Doe
              </Typography>
              <Typography variant="h6">Front-End Developer</Typography>
            </CardContent>
          </SmallContainer>
          <SmallContainer sx={{ height: "270px" }}>
            <Box sx={{ padding: "20px" }}>
              <Typography>People You May Know</Typography>
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="recipe">
                    B
                  </Avatar>
                }
                title="John Doe"
                subheader="John.doe@cit.edu"
              />
              <Button
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50px",
                  border: "2px solid #000000",
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                + Follow
              </Button>
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="recipe">
                    B
                  </Avatar>
                }
                title="John Doe"
                subheader="John.doe@cit.edu"
              />
              <Button
                sx={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50px",
                  border: "2px solid #000000",
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                + Follow
              </Button>
            </Box>
          </SmallContainer>
          <SmallContainer>
            <Box
              padding="20px"
              display="flex"
              flexDirection="column"
              rowGap={1}
            >
              <Typography>Recommended Jobs</Typography>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{}} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  title="Job Title"
                  subheader="Job Type"
                />
              </Card>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{}} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  title="Job Title"
                  subheader="Job Type"
                />
              </Card>
            </Box>
          </SmallContainer>
        </Box>
      </Box>
    </>
  );
};

const JobContainer = styled(Box)({
  width: "1100px",
  height: "540px",
  border: "1px solid #000000",
  borderRadius: "5px",
});

const SmallContainer = styled(Box)({
  width: "450px",
  height: "220px",
  borderRadius: "5px",
  border: "1px solid #000000",
});

export default Home;
