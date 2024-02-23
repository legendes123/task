"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Image from "next/image";
import svgIcon from "../../svg/5/logo.svg";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "88px",
        backgroundColor: "white",
        borderBottom: "0.8px solid #5C5C70",
      }}
    >
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid
            width={391}
            sx={{ ml: "40px", mt: "52px", mb: "25px" }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              биография
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              работы
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              работы
            </Typography>
          </Grid>
          <Box sx={{ mt: "40px" }}>
            <Image src={svgIcon} alt="My SVG" />
          </Box>
          <Grid
            sx={{ mr: "40px", mt: "52px", mb: "25px" }}
            width={391}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              выставки
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              принципы
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#5C5C70",
              }}
            >
              контакты
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
