import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} height="auto" alt="sidenews" />
          </CardMedia>
          <CardContent>
            <p className=" w-[100px] rounded bg-red-600 px-2 py-1 my-4 text-white">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className="my-5">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>PD</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom variant="caption">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
          </Grid>
        </Grid>
        <hr className="border-lime-700 my-3" />
      </Box>
      <Box className="my-5">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>PD</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom variant="caption">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
          </Grid>
        </Grid>
        <hr className="border-lime-700 my-3" />
      </Box>
      <Box className="my-5">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>PD</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom variant="caption">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
          </Grid>
        </Grid>
        <hr className="border-lime-700 my-3" />
      </Box>
      <Box className="my-5">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>PD</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom variant="caption">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
          </Grid>
        </Grid>
        <hr className="border-lime-700 my-3" />
      </Box>
      <Box className="my-5">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>PD</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              Bitcoin Climbs as Elon Musk Says Tesla likely to Accept it Again
            </Typography>
            <Typography gutterBottom variant="caption">
              By Pranta Dev - {getCurrentDate()}
            </Typography>
          </Grid>
        </Grid>
        <hr className="border-lime-700 my-3" />
      </Box>
      <Image width="auto" height="auto" src={sideBottomNews} alt="down" />
    </Box>
  );
};

export default SideBar;
