import React from "react";
import background from "../../assets/bg-img.png";
import { Box, Typography } from "@mui/material";

const UserRole = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" paddingBottom="30px">
        Select User Type
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="755px"
        height="450px"
        borderRadius="40px"
        sx={{
          opacity: ".8",
          boxShadow: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        }}
      >
        {/* Left-Side */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="377px"
          height="220px"
        >
          {/* Student Box */}
          <Box
            width="250px"
            height="200px"
            border="1px solid #000000"
            borderRadius="40px"
            sx={{ backgroundColor: "#dee0e1" }}
          ></Box>
          <br />
          <Typography variant="h6" fontWeight="bold">
            Student
          </Typography>
        </Box>
        {/* Right-Side */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="377px"
          height="220px"
        >
          {/* Employer Box */}
          <Box
            width="250px"
            height="200px"
            border="1px solid #000000"
            borderRadius="40px"
            sx={{ backgroundColor: "#dee0e1" }}
          ></Box>
          <br />
          <Typography variant="h6" fontWeight="bold">
            Employer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserRole;
