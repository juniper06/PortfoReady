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
  Select
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
  width: 700,
  height: 600,
  bgcolor: "#f0f0f0",
  borderRadius: 3,
  p: 4,
};


const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const date = new Date(new Date().valueOf() - 1000 * 60 * 60);

  const handleChange = (event) => {
    setAge(event.target.value);
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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style}>
                  <Box
                    sx={{
                      textAlign: "center",
                      borderBottom: "2px solid #808080",
                      paddingBottom: "10px",
                    }}
                  >
                    <h1>Create Job Posting</h1>
                  </Box>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">B</Avatar>}
                    title="John Doe"
                    subheader="John.doe@cit.edu"
                  />
                  <Box
                    sx={{
                      width: "697px",
                      height: "450px",
                      border: "1px solid #808080",
                      overflowY: "auto",
                    }}
                  >
                    <form id="job-post" action="#">
                      <label className="post-labels" htmlFor="title">
                        Title
                      </label>
                      <input
                        id="input-title"
                        type="text"
                        name="title"
                        placeholder="Title"
                      />
                      <br />

                      <FormControl sx={{ width: "300px" }}>
                        <InputLabel id="demo-simple-select-label">
                          Job Type
                        </InputLabel>
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
                      <br />
                      <label className="post-labels" htmlFor="#">
                        Description
                      </label>
                      <textarea
                        name="descript"
                        id="job-description"
                        placeholder="Enter Job Description"
                      ></textarea>
                      <br />
                      <Card
                        sx={{
                          width: "563px",
                          height: "200px",
                          borderRadius: "12px",
                          border: "2px solid #bdbdbd",
                          overflowY: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            borderBottom: "2px solid #808080",
                          }}
                        >
                          <h1>Create Exam</h1>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <input
                            id="exam-input"
                            type="text"
                            name="question1"
                            placeholder="Question 1"
                          />
                          <input
                            id="exam-input"
                            type="text"
                            name="question2"
                            placeholder="Question 2"
                          />
                          <input
                            id="exam-input"
                            type="text"
                            name="question3"
                            placeholder="Question 3"
                          />
                          <input
                            id="exam-input"
                            type="text"
                            name="question4"
                            placeholder="Question 4"
                          />
                          <input
                            id="exam-input"
                            type="text"
                            name="question5"
                            placeholder="Question 5"
                          /><br/>
                        </Box>
                      </Card>
                      <br />
                      <br />
                      <CardActions
                        sx={{ display: "flex", justifyContent: "end" }}
                      >
                        <button type="submit" id="jobpost-btn">
                          Post
                        </button>
                      </CardActions>
                    </form>
                  </Box>
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
