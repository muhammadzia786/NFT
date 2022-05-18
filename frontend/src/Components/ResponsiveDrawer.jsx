import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PaidIcon from "@mui/icons-material/Paid";
import VerifiedIcon from "@mui/icons-material/Verified";

import EditIcon from "@mui/icons-material/Edit";

import Pass from "./Admin/Adminpanel";
import LandingPage from "./LandingPage/LandingPage";
import main from "../images/nmbr1.png";

const drawerWidth = 240;
const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const userToken = localStorage?.getItem("token");
  console.log("userToken", userToken);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [Name, setName] = useState(<LandingPage />);

  const handleClick = () => {
    setName(<Pass />);
  };

  const handlePass = () => {
    setName(<LandingPage />);
  };

  const handleEdit = () => {
    setName(<Pass />);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h2 className="whow" id="logo">
        Bubble Squad
      </h2>
      <img className="mainimg" src={main} />

      <Divider />
      {/* <List>
        {['Home', 'Post Package'].map((text, index) => (
          <ListItem  button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HomeIcon onClick={handlePass}/> : <AddIcon  onClick={handleClick}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <List onClick={handlePass}>
        {["Home"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HomeIcon /> : <HomeIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <List onClick={handleClick}>
        {["Post Package"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AddIcon /> : <AddIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <List onClick={handleEdit}>
        {["Edit"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <EditIcon /> : <EditIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "lavender" }}>
      {/* {userToken ? (
        <> */}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        <div>{Name}</div>
      </Box>
      {/* </>
      ) : (
        // <LandingPage />
        ""
      )} */}
    </Box>
  );
};

export default ResponsiveDrawer;
