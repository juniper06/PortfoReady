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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./home.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TimeAgo from "react-timeago";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 360,
  bgcolor: "#f0f0f0",
  borderRadius: 3,
  p: 4,
};

const settings = ["Profile", "Logout"];

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


  return (
    <>
      <div className="navbar">
        <div className="search-bar">
          <SearchIcon />
          <input id="search-design" type="text" placeholder="Explore" />
        </div>
        <div className="btn-links">
          <Link className="link-btns">Home</Link>
          <Link className="link-btns">Profile</Link>
          <Link className="link-btns">Contact Us</Link>
          <Link className="link-btns">Notification</Link>
          <Link className="link-btns">Job List</Link>
        </div>
        <div className="profile-logo">
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </div>

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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style}>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="testing"
                        src={`https://ui-avatars.com/api/?background=random&name`}
                      />
                    }
                    title="Temporary"
                  />
                  <CardContent>
                    <input id="title-input" type="text" placeholder="Title" />
                    <textarea
                      id="description-input"
                      type="text"
                      placeholder="Description"
                    />
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <button id="post-btn">Post</button>
                  </CardActions>
                </Card>
              </Modal>
            </div>
          </div>

          <div className="job-posts">
            <Card sx={{ maxWidth: 1200 }} variant="outlined">
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Human Resource
                </Typography>
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
                    alt="testing"
                    src={`https://ui-avatars.com/api/?background=random&name`}
                  />
                }
              />
              <CardContent>
                <h1>John Doe</h1>
                <br />
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

export default Home;
