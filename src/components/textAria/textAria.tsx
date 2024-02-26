import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Fade, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import svgIcon2 from "@/svg/Tsoy/tsoy-fnl-2.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { description } from "@/type/type";
import { useAppSelector } from "@/hooks/hooks";
const TextAria = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = useAppSelector((state) => state.dataTsoy.dataDescription);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          opacity: "50%",
          left: "50%",
          top: "75%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image style={{ width: "100%" }} src={svgIcon2} alt="My SVG" />
      </Box>
      <div data-aos="fade-down" data-aos-duration="1000">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "1020px",
            margin: "0 auto",
            mt: "160px",
            zIndex: "100",
            position: "relative",
            transform: "translateY(0)",
            "&:hover": {
              transform: "translateY(1010)",
            },
          }}
        >
          <Box sx={{ display: "flex", margin: "0 auto" }}>
            <Typography
              sx={{
                fontFamily: "Forum",
                fontSize: "92px",
                fontsWeight: "400",

                lineHeight: "83px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#ED1354",
              }}
            >
              Ц
            </Typography>
            <Typography
              sx={{
                fontFamily: "Forum",
                fontsWeight: "400",
                lineHeight: "83px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#5C5C70",
                fontSize: {
                  lg: 92,
                  md: 70,
                  sm: 50,
                  xs: 30,
                },
              }}
            >
              ой на мотоцикле
            </Typography>
          </Box>
          <Grid
            sx={{ width: "800px", mt: "32px" }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#26222C",
              }}
            >
              2002 отливка
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#ED1354",
              }}
            >
              Бронза
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#26222C",
              }}
            >
              188х274х140
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "-0.03em",
                textAlign: "center",
                color: "#26222C",
              }}
            >
              город Окуловка, Новгородская область
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: "100px" }}
          >
            {data.map((elem: string) => {
              return (
                <Box
                  sx={{
                    width: "450px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "EB Garamond",
                      fontWeight: "400",
                      lineHeight: "32px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      fontSize: "20px",
                    }}
                  >
                    {elem}
                  </Typography>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TextAria;
