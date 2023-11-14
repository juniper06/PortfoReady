import {
  Box,
  Input,
  Typography,
  styled,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import background from "../../assets/bg-img.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        Log In
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="510px"
        height="540px"
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
        <InputStyled disableUnderline={true} placeholder="Username" />
        <br />
        <OutlinedInputStyled
          placeholder="Password"
          sx={{
            "& fieldset": { border: "none" },
          }}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <ButtonStyled>
          <Typography variant="h5" fontWeight="bold">
            Log In
          </Typography>
        </ButtonStyled>
        <br />
        or
        <br />
        <Link><Typography variant="h6" fontWeight="bold" color="#000000" sx={{textDecoration:"underline"}}>Sign Up</Typography></Link>
      </Box>
    </Box>
  );
};

const InputStyled = styled(Input)({
  width: "400px",
  height: "60px",
  borderRadius: "40px",
  border: "2px solid #000000",
  backgroundColor: "#dddee0",
  fontSize: "20px",
  paddingLeft: "25px",
});

const OutlinedInputStyled = styled(OutlinedInput)({
  width: "400px",
  height: "60px",
  borderRadius: "40px",
  border: "2px solid #000000",
  backgroundColor: "#dddee0",
  fontSize: "20px",
  paddingLeft: "12px",
});


const ButtonStyled = styled(Button)({
  marginTop:"70px",
  width: "400px",
  height: "60px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "40px",
  textTransform: "none",
  "&:hover": { backgroundColor: "#000000" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity:"1"
});



export default Login;
