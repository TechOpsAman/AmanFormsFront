import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../assets/whiteforms.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export function Navbar({
  name,
  tNumber,
  profilePic,
  handleShareDialogOpen,
  surveyUrl,
  surveyCommentsUrl
}: {
  name: string;
  tNumber: string;
  profilePic: string;
  handleShareDialogOpen: (bool: boolean) => void;
  surveyUrl: string;
  surveyCommentsUrl: string;
}) {
  const location = useLocation();
  const { t } = useTranslation();
  const settings = [name, tNumber];
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

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box sx={{ bgcolor: "secondary.main" }} minWidth="90rem">
      <AppBar
        position="sticky"
        sx={{
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          width: "100%",
          height: "4rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 0,
            m: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar disableGutters sx={{ width: "90%" }}>
            {location.pathname === "/createSurvey" && (
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
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Tooltip title={t("firstShow")} placement="right" arrow>
                      <IconButton
                        onClick={() => {
                          openInNewTab(surveyUrl);
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={t("share")} placement="right" arrow>
                      <IconButton
                        onClick={() => {
                          handleShareDialogOpen(true);
                        }}
                      >
                        <ShareIcon />
                      </IconButton>

                    </Tooltip>
                    <Tooltip title={t("תגובות")} placement="right" arrow>
                      <IconButton
                        onClick={() => {
                          openInNewTab(surveyCommentsUrl);
                        }}
                      >
                        <LibraryBooksIcon />
                      </IconButton>
                    </Tooltip>

                  </MenuItem>
                </Menu>
              </Box>
            )}
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
              <img src={logo} alt="logo" width="200" />
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="פרטים אישיים">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} src={profilePic} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
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
