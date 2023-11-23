import {
  Box,
  Input,
  OutlinedInput,
  Typography,
  styled,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import background from "../../assets/bg-img.png";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const [usernameValue, setUsernameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const registerUser = async () => {
    await axios.post("http://localhost:8080/user/register", {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      type: location.state
    }).then(() => {
      navigate("/login")
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
        Create New Account
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="1044px"
        height="500px"
        borderRadius="40px"
        rowGap={3}
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
          placeholder="Username"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          disableUnderline={true}
          sx={{ width: "662px", height: "56px" }}
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <InputStyled
          placeholder="Email"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          disableUnderline={true}
          sx={{ width: "662px", height: "56px" }}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          width="662px"
          height="56px"
        >
          <OutlinedInputStyled
            inputProps={{ min: 0, style: { textAlign: "center" } }}
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
          <OutlinedInputStyled
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            placeholder="Confirm Password"
            sx={{
              "& fieldset": { border: "none" },
            }}
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <RegisterBtnStyled onClick={registerUser}>
          <Typography variant="h6" fontWeight="bold">
            Create Account
          </Typography>
        </RegisterBtnStyled>
      </Box>
    </Box>
  );
};

const RegisterBtnStyled = styled(Button)({
  marginTop: "20px",
  width: "224px",
  height: "44px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "40px",
  textTransform: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
});

const InputStyled = styled(Input)({
  borderRadius: "40px",
  border: "1px solid #000000",
  backgroundColor: "#e0e2e2",
  fontSize: "18px",
});

const OutlinedInputStyled = styled(OutlinedInput)({
  width: "320px",
  height: "56px",
  borderRadius: "40px",
  border: "1px solid #000000",
  backgroundColor: "#e0e2e2",
  fontSize: "18px",
});

export default Register;
