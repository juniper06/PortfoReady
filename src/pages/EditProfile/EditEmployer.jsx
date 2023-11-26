import {
  Box,
  Typography,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Tabs,
  Tab,
  Input,
} from "@mui/material";
import { useState, useEffect } from "react";
import logo from "../../assets/portfoready-logo.png";
import { styled } from "@mui/material/styles";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditEmployer = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <>
      {/* Header */}
      <Box
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="100px"
          height="100px"
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
        <Typography variant="h4" fontWeight="bold">
          Edit Employer Profile
        </Typography>
      </Box>
      {/* Name Text */}
      <Box marginLeft="400px" marginTop="50px">
        <Typography variant="h4" fontWeight="bold">
          John Doe/Employer Profile
        </Typography>
      </Box>
      <Box marginTop="50px" display="flex">
        {/* Left-Side */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          paddingRight="50px"
          textAlign="justify"
          width="600px"
          height="560px"
          marginTop="50px"
          sx={{ borderRight: "2px solid #000000" }}
        >
          <Tabs
            value={currentTabIndex}
            orientation="vertical"
            onChange={handleTabChange}
          >
            <Tab label="Edit User" />
            <Tab label="Edit Student Profile" />
          </Tabs>
        </Box>
        {/* Right- Side */}
        <Box
          width="800px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap={1}
        >
          {currentTabIndex === 0 && <EditUserProfile />}
          {currentTabIndex === 1 && <EditStudentProfile />}
        </Box>
      </Box>
    </>
  );
};

const EditUserProfile = () => {
  const { user, isLoading } = useAuth();
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const getPosts = async () => {
    await axios
      .get(`http://localhost:8080/post/posts?userId=${user.userId}`)
      .then((response) => {
        setPosts(response.data.data.content);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      getPosts();
      getImageFile();
    }
  }, [isLoading, user]);

  const handleAddProfile = async () => {
    try {
      const formDataForImage = new FormData();
      formDataForImage.append("file", images);
      const image = await axios.put(
        `http://localhost:8080/user/uploadImage/${user.userId}`,
        formDataForImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (image.status === 200) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Error uploading image:", image.statusText);
      }
    } catch (error) {
      console.error("Error adding profile picture", error.message);
    }
  };

  const getImageFile = async () => {
    await axios
      .get(`http://localhost:8080/user/getUser?userId=${user.userId}`)
      .then((response) => {
        setImageFile(response.data.data.imageFile.name);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        columnGap={2}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          columnGap={2}
        >
          <Avatar sx={{ height: "70px", width: "70px" }}>B</Avatar>
          <ButtonStyled>
            <Typography>
              <Input
                type="file"
                onChange={(e) => setImages(e.target.files[0])}
              />
            </Typography>
          </ButtonStyled>
          <ButtonStyled sx={{ width: "120px" }}>
            <Typography>Delete</Typography>
          </ButtonStyled>
        </Box>
        <br />
        <FormControl>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            rowGap={3}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabelStyled sx={{ paddingRight: "95px" }}>
                Name:
              </FormLabelStyled>
              <TextField
                placeholder="firstname"
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{
                  width: "205px",
                  "& fieldset": { border: "none" },
                  paddingRight: "15px",
                }}
              />
              <TextField
                placeholder="lastname"
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "205px", "& fieldset": { border: "none" } }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabelStyled sx={{ paddingRight: "50px" }}>
                Username:
              </FormLabelStyled>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "425px", "& fieldset": { border: "none" } }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabelStyled sx={{ paddingRight: "93px" }}>
                Email:
              </FormLabelStyled>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "425px", "& fieldset": { border: "none" } }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabelStyled sx={{ paddingRight: "56px" }}>
                Password:
              </FormLabelStyled>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "425px", "& fieldset": { border: "none" } }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabelStyled sx={{ paddingRight: "10px" }}>
                Phone Number:
              </FormLabelStyled>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "425px", "& fieldset": { border: "none" } }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabelStyled sx={{ paddingRight: "20px" }}>
                Contact Links:
              </FormLabelStyled>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: 20,
                    height: "39px",
                    border: "1px solid #000000",
                  },
                }}
                sx={{ width: "425px", "& fieldset": { border: "none" } }}
              />
            </Box>
          </Box>
          <Box marginTop="20px" display="flex" justifyContent="space-between">
            <Button
              onClick={handleAddProfile}
              sx={{
                width: "200px",
                height: "43px",
                borderRadius: "20px",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              <Typography>Save</Typography>
            </Button>
            <Button
              sx={{
                width: "200px",
                height: "43px",
                borderRadius: "20px",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              <Typography>Cancel</Typography>
            </Button>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

const EditStudentProfile = () => {
  const [images, setImages] = useState(null);
  const { user, isLoading } = useAuth();
  const [posts, setPosts] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const getPosts = async () => {
    await axios
      .get(`http://localhost:8080/post/posts?userId=${user.userId}`)
      .then((response) => {
        setPosts(response.data.data.content);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      getPosts();
      getImageFile();
    }
  }, [isLoading, user]);

  const handleAddProfile = async () => {
    try {
      const formDataForImage = new FormData();
      formDataForImage.append("file", images);
      const image = await axios.put(
        `http://localhost:8080/user/uploadImage/${user.userId}`,
        formDataForImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (image.status === 200) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Error uploading image:", image.statusText);
      }
    } catch (error) {
      console.error("Error adding profile picture", error.message);
    }
  };

  const getImageFile = async () => {
    await axios
      .get(`http://localhost:8080/user/getUser?userId=${user.userId}`)
      .then((response) => {
        setImageFile(response.data.data.imageFile.name);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        columnGap={2}
      >
        <Avatar sx={{ height: "70px", width: "70px" }}>
          <img src={images} alt="Profile Picture" />
        </Avatar>
        <Button
          component="label"
          color="primary"
          variant="contained"
          startIcon={<AddPhotoIcon />}
          sx={{
            backgroundColor: "white",
            color: "#27374D",
            "&:hover": { backgroundColor: "#142132", color: "white" },
            borderRadius: "20px",
            border: ".1px solid #27374D",
            display: "flex",
            width: 150,
            whiteSpace: "nowrap",
            fontSize: "10",
          }}
        >
          add photo
          <VisuallyHiddenInput
            name="images"
            type="file"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </Button>
        <ButtonStyled sx={{ width: "120px" }}>
          <Typography>Delete</Typography>
        </ButtonStyled>
      </Box>
      <FormControl>
        <FormLabelStyled>Company Name:</FormLabelStyled>
        <TextField
          InputProps={{
            sx: {
              borderRadius: 20,
              height: "39px",
              border: "1px solid #000000",
            },
          }}
          sx={{ width: "425px", "& fieldset": { border: "none" } }}
        />
        <br />
        <FormLabelStyled>Company Email:</FormLabelStyled>
        <TextField
          InputProps={{
            sx: {
              borderRadius: 20,
              height: "39px",
              border: "1px solid #000000",
            },
          }}
          sx={{ width: "425px", "& fieldset": { border: "none" } }}
        />
        <br />
        <FormLabelStyled>Company Description:</FormLabelStyled>
        <textarea
          style={{
            height: "130px",
            resize: "none",
            borderRadius: "20px",
            border: "1px solid #000000",
          }}
        />
        <br />
        <Box marginTop="20px" display="flex" justifyContent="space-between">
          <Button
            onClick={handleAddProfile}
            sx={{
              width: "200px",
              height: "43px",
              borderRadius: "20px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              width: "200px",
              height: "43px",
              borderRadius: "20px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

const ButtonStyled = styled(Button)({
  width: "190px",
  height: "38px",
  borderRadius: "20px",
  border: "1px solid #000000",
  color: "#000000",
  textTransform: "none",
});

const FormLabelStyled = styled(FormLabel)({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#000000",
});



export default EditEmployer;
