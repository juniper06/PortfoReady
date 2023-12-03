import { Box, Button, Typography } from "@mui/material";
import React from "react";
import landingbg from "../../assets/landing-bg.png";
import logo from "../../assets/logo.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import palo from "../../assets/palo.png";
import nino from "../../assets/nino.png";
import gab from "../../assets/gab.png";
import bianca from "../../assets/bianca.png";

const LandingPage = () => {
  return (
    <Box>
      <Box display="flex" height="100vh">
        {/* Left-Container */}
        <Box
          position="absolute"
          borderBottom="3px solid #000000"
          top={0}
          left={0}
          width="100%"
          height="40px"
          zIndex="100"
        ></Box>
        <Box
          position="absolute"
          borderLeft="3px solid #000000"
          top={0}
          right={0}
          width="40px"
          height="100%"
          zIndex="100"
        ></Box>
        <Box
          width="40%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap={15}
        >
          <Box
            width="560px"
            height="255px"
            borderRadius="20px"
            display="flex"
            sx={{
              boxShadow: 3,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            }}
          >
            {/* Welcome Text */}
            <Box
              width="390px"
              height="255px"
              display="flex"
              alignItems="center"
              textAlign="center"
            >
              <Typography
                paddingLeft="10px"
                fontSize="60px"
                fontWeight="bold"
                color="#000000"
              >
                Welcome to PortfoReady
              </Typography>
            </Box>
            {/* Logo */}
            <Box
              width="230px"
              height="255px"
              sx={{
                backgroundPosition: "center",
                backgroundImage: `url(${logo})`,
              }}
            ></Box>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Explore Career Pathways
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Engage with Potential Employers
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Seize Oppurtunities
            </Typography>
          </Box>
          <LinkStyled to="/login">Get Started</LinkStyled>
        </Box>
        {/* Right-Container */}
        <Box
          width="60%"
          sx={{
            backgroundImage: `url(${landingbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>
      <Box
        height="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginLeft="100px"
        marginRight="100px"
        rowGap={5}
      >
        <Typography variant="h2">About Us</Typography>
        <Typography variant="h5" textAlign="center">
          Welcome to PortfoReady! We are a tight-knit team of four enthusiastic
          third-year students on a collective mission to venture into the world
          of development. Committed to honing our skills, we've embarked on the
          PortfoReady project, a small yet impactful endeavor that aims to make
          the Job Search much more accesible for Students. Each team member
          brings a unique blend of academic and technical backgrounds, and
          together, we're excited to harness the power of technology to turn our
          ideas into reality. Join us on this journey as we strive for
          excellence, share our progress, and connect with like-minded
          individuals passionate about the endless possibilities of
          development.Thank you for joining us on this exciting adventure!
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginBottom="50px"
      >
        <Typography variant="h2">Developers</Typography>
      </Box>
      <Box height="150vh" display="flex" justifyContent="center">
        <Box display="flex" justifyContent="center">
          <Box
            position="absolute"
            borderLeft="2px solid #b8b8b8"
            width="40px"
            height="130vh"
            zIndex="100"
          >
            <Box
              position="absolute"
              borderBottom="2px solid #b8b8b8"
              top="100px"
              left="-100px"
              width="200px"
              height="40px"
              zIndex="100"
            ></Box>
            <Box
              position="absolute"
              top="50px"
              left="-335px"
              width="235px"
              height="206px"
              borderRadius="50px"
              sx={{
                backgroundImage: `url(${palo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              position="absolute"
              top="20px"
              left="150px"
              width="350px"
              height="206px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap={5}
            >
              <Typography variant="h4">John Gabriele Palo</Typography>
              <Typography sx={{ color: "#b8b8b8" }}>
                “The best is yet to come.”
              </Typography>
            </Box>
            <Box
              position="absolute"
              borderBottom="2px solid #b8b8b8"
              top="400px"
              left="-100px"
              width="200px"
              height="40px"
              zIndex="100"
            ></Box>
            <Box
              position="absolute"
              top="320px"
              left="-500px"
              width="350px"
              height="206px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap={5}
            >
              <Typography variant="h4">Niño Angelo Bacaoco</Typography>
              <Typography sx={{ color: "#b8b8b8" }}>
                “When the sun rises, It's a nightmare”
              </Typography>
            </Box>
            <Box
              position="absolute"
              top="330px"
              left="100px"
              width="235px"
              height="206px"
              borderRadius="50px"
              sx={{
                backgroundImage: `url(${nino})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              position="absolute"
              borderBottom="2px solid #b8b8b8"
              top="700px"
              left="-100px"
              width="200px"
              height="40px"
              zIndex="100"
            ></Box>
            <Box
              position="absolute"
              top="650px"
              left="-335px"
              width="235px"
              height="206px"
              borderRadius="50px"
              sx={{
                backgroundImage: `url(${gab})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              position="absolute"
              top="630px"
              left="150px"
              width="350px"
              height="206px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap={5}
            >
              <Typography variant="h4">Juniper Gabriel</Typography>
              <Typography sx={{ color: "#b8b8b8" }} textAlign="center">
                "I'm a Barbie girl, in the Barbie world Life in plastic, it's
                fantastic"
              </Typography>
            </Box>
            <Box
              position="absolute"
              borderBottom="2px solid #b8b8b8"
              top="1000px"
              left="-100px"
              width="200px"
              height="40px"
              zIndex="100"
            ></Box>
            <Box
              position="absolute"
              top="930px"
              left="-500px"
              width="350px"
              height="206px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap={5}
            >
              <Typography variant="h4">Bhea Bianca Melicor</Typography>
              <Typography sx={{ color: "#b8b8b8" }} textAlign="center">
                “When the sun shines, we'll shine together”
              </Typography>
            </Box>
            <Box
              position="absolute"
              top="930px"
              left="100px"
              width="235px"
              height="206px"
              borderRadius="50px"
              sx={{
                backgroundImage: `url(${bianca})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <footer
        style={{
          height: "100px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          columnGap: "40px",
        }}
      >
        <Typography>©2023 PorfoReady</Typography>
        <Button>Terms</Button>
        <Button>Privacy</Button>
        <Button>Cookies</Button>
        <Button 
        component={Link}
        to="/contact">Contact Us</Button>
      </footer>
    </Box>
  );
};



const ButtonStlyed = styled(Button)({
  width: "377px",
  height: "74px",
  borderRadius: "10px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "35px",
  textTransform: "none",
});

const LinkStyled = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "377px",
  height: "74px",
  borderRadius: "10px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "35px",
  textDecoration: "none",
});

export default LandingPage;
