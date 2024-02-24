import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
  const { data } = await getAllNews();
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              width={800}
              height={500}
              alt="topnews"
            />
          </CardMedia>
          <CardContent>
            <p className=" w-[100px] rounded bg-red-600 px-2 py-1 my-4 text-white">
              {data[0].category}
            </p>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography gutterBottom className="my-3">
              By {data[0].author.name} - {getCurrentDate()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    width={800}
                    height={300}
                    alt="topnews2"
                  />
                </CardMedia>
                <CardContent>
                  <p className=" w-[100px] rounded bg-red-600 px-2 py-1 my-4 text-white">
                    {news.category}
                  </p>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography gutterBottom className="my-3">
                    By Pranta Dev - {getCurrentDate()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
