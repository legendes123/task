import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import Box from "@mui/material/Box";
import { timelineDotClasses, timelineItemClasses } from "@mui/lab";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/hooks";
import { dataScroll } from "@/type/type";
const TimeLine = () => {
  const count = Array.from(Array(100));
  // const data = useSelector((state) => state.dataTsoy.dataScroll);
  const data = useAppSelector((state) => state.dataTsoy.dataScroll);
  const [firstExcerpt, secondExcerpt] = data;

  return (
    <Timeline
      sx={{
        width: "50px",
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          textAlign: "justify",
        },
        [`& .${timelineItemClasses.root}`]: {
          width: "8px",
          borderBottom: "0.8px solid #ED1354",
          height: "2px",
          minHeight: "20px",
          textAlign: "justify",
        },
        [`& .${timelineDotClasses.root}`]: {
          width: "16px",
        },
      }}
    >
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem>
        <TimelineContent>
          <Box sx={{ ml: "21px", width: "307px", wordWrap: "break-word" }}>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "44px",
                fontWeight: "300",
                lineHeight: "110px",
                letterSpacing: "-0.04em",
                textAlign: "left",
                color: "#ED1354",
              }}
            >
              {firstExcerpt.date}
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "17px",
                letterSpacing: "-0.03em",
                textAlign: "left",
                color: "#5C5C70",
                wordWrap: "break-word",
              }}
            >
              {firstExcerpt.value}
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
      <TimelineItem>
        <TimelineContent>
          <Box sx={{ ml: "21px", width: "307px", wordWrap: "break-word" }}>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "44px",
                fontWeight: "300",
                lineHeight: "110px",
                letterSpacing: "-0.04em",
                textAlign: "left",
                color: "#ED1354",
              }}
            >
              {secondExcerpt.date}
            </Typography>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "17px",
                letterSpacing: "-0.03em",
                textAlign: "left",
                color: "#5C5C70",
                wordWrap: "break-word",
              }}
            >
              {secondExcerpt.value}
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      {count.map(() => {
        return <TimelineItem />;
      })}
    </Timeline>
  );
};

export default TimeLine;
