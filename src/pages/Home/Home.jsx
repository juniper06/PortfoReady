import React from "react";
import {
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Box,
  Typography,
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  FormLabel,
  styled,
  OutlinedInput,
  TextField,
  Input
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./home.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TimeAgo from "react-timeago";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PostCard } from "../Profile/EmployerProfile";


const postSettings = ["Edit", "Delete"];

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const date = new Date(new Date().valueOf() - 1000 * 60 * 60);

  const handleChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <>
      <div className="home">
        <div className="left-container">
          <div className="user-container">
            <h1 id="user">Hello, Juniper</h1>
            <br />
            <div className="post-container">
              <button
                onClick={handleOpen}
                id="post-design"
                type="text"
                placeholder="Share a post."
              >
                Share a post
              </button>
              <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
                <DialogTitle
                  textAlign="center"
                  borderBottom="2px solid #808080"
                >
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
            </div>
          </div>

          <div className="job-posts">
            <Card sx={{ maxWidth: 1200 }} variant="outlined">
              <CardHeader
                avatar={
                  <Avatar
                    alt="testing"
                    src={`https://ui-avatars.com/api/?background=random&name`}
                  />
                }
                title="John Doe"
              >
                Heading
              </CardHeader>
              <CardContent>
                <Box display="flex">
                  <Box width="1200px">
                    <Typography variant="h3">Human Resource</Typography>
                    <br />
                    <Typography variant="h5">Job Type:</Typography><br />
                  </Box>
                  <Box>
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
                <Typography variant="body1">
                  We are seeking a highly motivated and experienced Human
                  Resource Officer to join our dynamic team at AMNK FOODTEK
                  CHAIN, INC. As a Human Resource Officer, you will play a
                  critical role in supporting our organization's human resources
                  functions and ensuring the smooth operation of our workforce.
                  Responsibilities: • Implement and manage HR policies and
                  procedures in compliance with applicable laws and regulations.
                  • Handle employee onboarding, orientation, and off boarding
                  processes. • Maintain and update employee records, including
                  personal information, leave, and attendance records. •
                  Coordinate recruitment activities, including job posting,
                  screening resumes, conducting interviews, and making job
                  offers. • Administer employee benefits programs and handle
                  employee inquiries related to benefits. • Assist in
                  performance management processes, including conducting
                  performance reviews and providing guidance on employee
                  development. • Address employee relations issues and resolve
                  conflicts...
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="right-container">
          {/* Profile */}
          <div className="profile-container">
            <Card
              sx={{
                maxWidth: 600,
                height: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              variant="outlined"
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
                <h1>John Doe</h1>
                <h3>Front-End Developer</h3>
              </CardContent>
            </Card>
          </div>
          {/* People Suggestion */}
          <div className="people-suggestion">
            <Card sx={{ padding: "20px" }}>
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
              <CardActions>
                <button id="follow-btn">+ Follow</button>
              </CardActions>
              <CardHeader
                avatar={
                  <Avatar sx={{}} aria-label="recipe">
                    B
                  </Avatar>
                }
                title="John Smith"
                subheader="John.smith@cit.edu"
              />
              <CardActions>
                <button id="follow-btn">+ Follow</button>
              </CardActions>
            </Card>
          </div>
          {/* Recommended Companies */}
          <div className="recommended-companies">
            <Card sx={{ padding: "20px" }}>
              <Typography>Recommended Jobs for you</Typography>
              <Box sx={{ cursor: "pointer" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{}} aria-label="recipe">
                      B
                    </Avatar>
                  }
                  title="Human Resources"
                  subheader="John.doe@cit.edu"
                />
                <TimeAgo
                  date={new Date()}
                  component={Typography}
                  minPeriod={60}
                />
              </Box>
              <Box sx={{ cursor: "pointer" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{}} aria-label="recipe">
                      J
                    </Avatar>
                  }
                  title="John Smith"
                  subheader="John.smith@cit.edu"
                />
                <TimeAgo date={date} component={Typography} minPeriod={60} />
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default Home;
