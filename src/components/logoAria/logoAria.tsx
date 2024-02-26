import React from "react";
import Box from "@mui/material/Box";
import TimeLine from "@/components/timeLine/timeLine";
import Image from "next/image";
// @ts-ignore
// import { ReactComponent as MyIcon } from "@/svg/Tsoy/tsoy-fnl-2.svg";
import svgIconTsoy from "@/svg/Tsoy/tsoy-fnl-2.svg";

import svgIconChangeColor from "@/svg/icon/icon.svg";

import {CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


const LogoAria = () => {
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
      <Box sx={{ maxWidth: "8px" }}>
        <TimeLine />
      </Box>
        <Image style={{
            width: "100%",
            position:'fixed',
        }} src={svgIconTsoy} alt="My SVG" />

      <Grid
        sx={{ mt: "200px", display: "flex", position: "absolute", right: "600px" }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Image src={svgIconChangeColor} alt="My SVG" />
        </Box>
        <Typography
          ml={2}
          sx={{
            fontFamily: "IBM Plex Mono",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "22px",
            letterSpacing: "-0.03em",
            textAlign: "left",
            color: "#8F8FA3",
          }}
        >
          В цвете
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoAria;
