import React from "react";
import {
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";


const settings = ["Profile", "Logout"];


const RootLayout = () => {
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
  const location = useLocation();
  const [page, setPage] = React.useState(location.pathname);

    return (
      <>
        <div className="navbar">
          <div className="search-bar">
            <SearchIcon />
            <input id="search-design" type="text" placeholder="Explore" />
          </div>
          <div className="btn-links">
            <ToggleButtonGroup
              sx={{ display: "flex", columnGap: "80px" }}
              selectedColo
              value={page}
              exclusive
              onChange={(event, newPage) => setPage(newPage)}
            >
              <Link to="/home" sx={ToggleButtonStyled}>
                <ToggleButtonStyled value="/home">Home</ToggleButtonStyled>
              </Link>
              <Link className="link-btns">
                <ToggleButtonStyled value="Profile" href="/home">
                  Profile
                </ToggleButtonStyled>
              </Link>
              <Link to="/contact">
                <ToggleButtonStyled value="/contact">
                  Contact Us
                </ToggleButtonStyled>
              </Link>
              <Link>
                <ToggleButtonStyled value="Notification">
                  Notification
                </ToggleButtonStyled>
              </Link>
              <Link>
                <ToggleButtonStyled value="Job List">
                  Job List
                </ToggleButtonStyled>
              </Link>
            </ToggleButtonGroup>
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
        <Outlet />
      </>
    );
};

  const ToggleButtonStyled = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#c8c8c8",
    },
    "&.MuiToggleButton-root": {
      border: "none",
      color: "black",
      fontSize: "17px",
    },
  });

export default RootLayout;
