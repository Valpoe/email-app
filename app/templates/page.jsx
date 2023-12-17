"use client";
import * as React from "react";

// MUI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

// Icon imports
import SearchIcon from "@mui/icons-material/Search";

// Email component imports
import { emailComponentRenders } from "../../components/EmailComponents";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredEmailComponents = emailComponentRenders.filter(
    (emailComponent) =>
      emailComponent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        color="text.secondary"
      >
        Templates
      </Typography>
      <Search sx={{ mb: 3 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Search>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={5}>
        {filteredEmailComponents.map((emailComponent, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 300, flexBasis: "calc(33.33% - 8px)" }}
          >
            <CardActionArea href={emailComponent.href}>
              <CardMedia
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 150,
                }}
              >
                {emailComponent.icon}
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {emailComponent.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {emailComponent.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
