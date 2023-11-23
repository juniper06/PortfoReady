import {
  Box,
  Input,
  Typography,
  styled,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import background from "../../assets/bg-img.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [usernameValue, setUsernameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const { onLogin } = useAuth();
  const navigate = useNavigate()

  // function to login
  const loginUser = async () => {
    await axios
      .post("http://localhost:8080/user/login", {
        username: usernameValue,
        password: passwordValue
      })
      .then((response) => {
          const data = response.data.data
          onLogin(data.username, data.userId, data.id, data.type);
          navigate("/");
      });
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
          backdropFilter: "blur(5px)",
          boxShadow: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#FFF" : "rgb(255, 255, 255,0.5)",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        }}
      >
        <InputStyled
          disableUnderline={true}
          placeholder="Username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <br />
        <OutlinedInputStyled
          placeholder="Password"
          sx={{
            "& fieldset": { border: "none" },
          }}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
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
        <LoginBtnStyled onClick={loginUser}>
          <Typography variant="h5" fontWeight="bold">
            Log In
          </Typography>
        </LoginBtnStyled>
        <br />
        or
        <br />
        <Link to="/userrole">
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#000000"
            sx={{ textDecoration: "underline" }}
          >
            Sign Up
          </Typography>
        </Link>
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

const LoginBtnStyled = styled(Button)({
  marginTop: "70px",
  width: "400px",
  height: "60px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
});

export default Login;
