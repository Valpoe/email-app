"use client";
import * as React from "react";
import Link from "next/link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import { ToastContainer } from 'react-toastify';

// MUI imports
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

// Icon imports
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import CopyrightIcon from "@mui/icons-material/Copyright";

// Email component imports
import { emailComponentRenders } from "../components/EmailComponents";

const DRAWER_WIDTH = 240;

// Links for the left drawer
const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "All Templates", href: "/templates", icon: EmailIcon }
];

export default function RootLayout({ children }) {

  // Open state for the template list
  const [open, setOpen] = React.useState(false);

  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body>
        {/* Root layout wrapped in ThemeRegistry */}
        <ThemeRegistry>
          {/* Fixed header */}
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar
              sx={{
                backgroundColor: "background.paper",
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/nolan/64/fox.png"
                alt="fox"
              />
              <Typography
                sx={{ ml: 2 }}
                variant="h6"
                noWrap
                component="div"
                color="white"
              >
                BlueFox
              </Typography>
            </Toolbar>
          </AppBar>
          {/* Fixed left drawer with list of links to navigate around */}
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            {/* Links mapping over the LINKS array */}
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <div key={href}>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} href={href}>
                      <ListItemIcon>
                        <Icon sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </div>
              ))}
              <ListItemButton onClick={toggleList}>
                <ListItemIcon>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary="Choose template" />
              </ListItemButton>
              <Collapse in={open} timeout={300} unmountOnExit>
                {/* Email components mapping over the emailComponentRenders array */}
                <List component="div" disablePadding>
                  {emailComponentRenders.map(({ name, href }) => (
                    <ListItem disablePadding key={href}>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={Link}
                        href={href}
                      >
                        <ListItemIcon>
                          <EmailIcon sx={{ color: "primary.main" }} />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <Divider sx={{ mt: "auto" }} />
            <Typography
              sx={{
                p: 2,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CopyrightIcon sx={{ color: "primary.dark", mr: 1 }} />
              2023 BlueFox Oy
            </Typography>
          </Drawer>
          {/* Fixed side panel */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
          <ToastContainer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
