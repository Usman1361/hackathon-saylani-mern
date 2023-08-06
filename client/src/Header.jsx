import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { logo } from "./components/SmallComponents/image";
import { Link, useNavigate } from "react-router-dom";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { Link } from "react-router-dom";

export const drawerWidth = 240;
const navItems = ["Products", "Cart", "Orders"];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const Navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handlelogout = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    console.log("logged out");
    Navigate("/login");
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: "20px",
        justifyContent: "space-around",
      }}
    >
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {i === 0 && (
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  to="/Cart"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 2 && (
                <Link
                  to="/order"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {/* <ListItemText sx={{ color: "#F5F5F5" }} primary={item} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          mt={{ xs: 5, md: 0 }}
          color="success"
          variant="contained"
          size="small"
          onClick={handlelogout}
        >
          Logout
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ backgroundColor: "#121120" }}>
      <Container maxWidth="xl">
        <AppBar
          sx={{
            boxShadow: "none",
            position: "static",
            backgroundColor: "#121120",
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: { xs: 1, md: 1 } }}>
              <img src={logo} width={80} height={60} alt="logo" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, i) => (
                <Button key={item} sx={{ color: "#F5F5F5", mx: 2 }}>
                  {i === 0 && (
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "White" }}
                    >
                      {item}
                    </Link>
                  )}
                  {i === 1 && (
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", color: "White" }}
                    >
                      {item}
                    </Link>
                  )}
                  {i === 2 && (
                    <Link
                      to="/order"
                      style={{ textDecoration: "none", color: "White" }}
                    >
                      {item}
                    </Link>
                  )}
                </Button>
              ))}

              <Button
                color="success"
                variant="contained"
                size="small"
                sx={{ marginLeft: "10px", backgroundColor: "red" }}
                onClick={handlelogout}
              >
                Logout
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "block", md: "none" },
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: "#121120",
                  },
                }}
              >
                <Box>
                  <IconButton
                    sx={{
                      display: "inline",
                      float: "right",
                    }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <CloseIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
                {drawer}
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}

export default Header;
