// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Sidenav from "./Sidenav";
// import {Routes, Route, BrowserRouter} from "react-router-dom"
// import Home from "./Home";
// import { Box } from "@mui/material";
export default function Dashboard() {
  return (
    <>
      <Sidenav />

      {/* <Box>
        <Box
          height="480px"
          sx={{
            backgroundColor: "black",
            borderBottomLeftRadius: "80px",
            borderBottomRightRadius: "80px",
          }}
        >
          <Sidenav />
        </Box>
      </Box> */}
      {/* <BrowserRouter>
    <Routes>
      <Route path="/home" exact element={<Home/>}></Route>
    </Routes>
    </BrowserRouter> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DASHBOARD
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
}
