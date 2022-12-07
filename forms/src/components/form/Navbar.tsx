import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import pic from "../../assets/profilePic.png";
import logo from "../../assets/whiteforms.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export function Navbar({
  name,
  id,
  tNumber,
}: {
  name: string;
  id: string;
  tNumber: string;
}) {
  const location = useLocation();
  const { t } = useTranslation();
  const settings = [name, id, tNumber];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ bgcolor: "secondary.main" }} minWidth="90rem">
      <AppBar
        position="sticky"
        sx={{
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          width: "100%",
          height: '4rem',
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ p: 0, m: 0, width: "100%", display: "flex", justifyContent: "center" }}>
          <Toolbar disableGutters sx={{ width: "90%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: "block",
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  {location.pathname === "/createSurvey" && (
                    <Tooltip title={t("firstShow")} placement="right" arrow>
                      <IconButton>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </MenuItem>
              </Menu>
            </Box>
            <ArticleIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AMAN FORMS
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} src={pic} />
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
                    <Typography textAlign="right">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
