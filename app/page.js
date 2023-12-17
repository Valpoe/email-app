import * as React from "react";
import { initializeDatabase } from "../lib/mongo/index.js";

// MUI imports
import {
  Box,
  Container,
  Grid,
  Drawer,
  Typography,
  List,
  Button,
  Divider,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Icon imports
import {
  Tune as TuneIcon,
  People as PeopleIcon,
  ShapeLine as ShapeLineIcon,
  Assessment as AssessmentIcon,
  DesignServices as DesignServicesIcon,
} from "@mui/icons-material";

export default function HomePage() {
  initializeDatabase();
  return (
    <Box sx={{ display: "flex" }}>
      <Container
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "text.secondary" }}>
          Ultimate solution for seamless email customization
        </Typography>
        <Divider
          sx={{
            mb: 4,
            width: "75%",
            height: "2px",
            backgroundColor: "primary.dark",
          }}
        />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: "100%",
                height: "auto",
                mb: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography sx={{ mb: 2 }}>Enhance Email Engagement</Typography>
                <Typography sx={{ mb: 2, color: "text.secondary" }}>
                  Boost your email engagement with our cutting-edge
                  customization solutions. In today's fast-paced digital world,
                  where first impressions matter more than ever, our services
                  ensure your emails not only look great but also resonate with
                  your brand's identity.
                </Typography>
                <Typography sx={{ mb: 2 }}>Captivate Your Audience</Typography>
                <Typography sx={{ mb: 2, color: "text.secondary" }}>
                  In a world inundated with emails, it's crucial to capture your
                  audience's attention from the very first click. Our
                  revolutionary email marketing game-changer, BlueFox,
                  transforms the way you connect with subscribers. Say goodbye
                  to generic emails and hello to captivating content.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Tailored Brand Representation
                </Typography>
                <Typography sx={{ mb: 2, color: "text.secondary" }}>
                  Your brand's identity deserves the spotlight it needs to
                  shine. With BlueFox, you'll have the power to tailor your
                  email content, ensuring it aligns perfectly with your brand's
                  unique voice and style.
                </Typography>
                <Typography sx={{ mb: 2 }}>Stand Out in the Inbox</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  In today's crowded inbox, standing out is a challenge. Our
                  seamless email customization solutions empower you to create
                  emails that not only look great but also convey your brand's
                  identity in a way that sets you apart from the competition.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "auto",
                mb: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <List>
                    <ListItem>
                      <ListItemIcon sx={{ color: "text.secondary" }}>
                        <TuneIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Customize with ease"
                        sx={{ color: "primary.light" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: "text.secondary" }}>
                        <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Segmentation and Targeting"
                        sx={{ color: "primary.light" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: "text.secondary" }}>
                        <ShapeLineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="A/B Testing"
                        sx={{ color: "primary.light" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: "text.secondary" }}>
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Analytics and Insights"
                        sx={{ color: "primary.light" }}
                      />
                    </ListItem>
                    <ListItem sx={{ mb: 2 }}>
                      <ListItemIcon sx={{ color: "text.secondary" }}>
                        <DesignServicesIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Responsive Design"
                        sx={{ color: "primary.light" }}
                      />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "primary.dark",
                      "&:hover": { backgroundColor: "primary.main" },
                      marginBottom: 2,
                    }}
                    href="/templates"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
              <CardMedia
                component="img"
                alt="email-app"
                height="275"
                image="/images/email-app.jpg"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div style={{ margin: "auto" }}>
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/nolan/96/fox.png"
            alt="fox"
          />
        </div>
      </Drawer>
    </Box>
  );
}
