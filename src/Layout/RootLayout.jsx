import React, { useEffect } from "react";
import {
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Box,
  Typography,
  Input,
} from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, onLogout, isLoading } = useAuth();
  const navigate = useNavigate();
  if (!user.isAuthenticated && !isLoading) {
    navigate("/login");
  }


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

  return (
    <>
      {/* Navbar */}
      <Box
        height="80px"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        columnGap={10}
        borderBottom="2px solid #000000"
      >
        <SearchBarStyled
          disableUnderline={true}
          placeholder="Explore"
          sx={{ paddingLeft: "20px" }}
        />
        <LinkStyled to="/">
          <Typography>Home</Typography>
        </LinkStyled>
        <LinkStyled
          to={user.type === "employer" ? "/employerprofile" : "/studentprofile"}
        >
          <Typography>Profile</Typography>
        </LinkStyled>
        <LinkStyled to="/contact">
          <Typography>Contact Us</Typography>
        </LinkStyled>
        <LinkStyled>
          <Typography>Notification</Typography>
        </LinkStyled>
        <LinkStyled to="/joblist">
          <Typography>Job List</Typography>
        </LinkStyled>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src={`http://localhost:8080/user/${user.userId}/image`}
            />
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
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              onLogout();
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Outlet />
    </>
  );
};

const SearchBarStyled = styled(Input)({
  width: "444px",
  height: "43px",
  backgroundColor: "#e5e5e5",
  borderRadius: "5px",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#000000",
});

export default RootLayout;
