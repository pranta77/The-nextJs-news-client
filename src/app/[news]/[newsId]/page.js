import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image
              src={data.thumbnail_url}
              width={800}
              height={500}
              alt="news"
            />
            <Grid container spacing={2} className="my-2">
              <Grid item xs={6}>
                <Image
                  src={data.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={data.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              {data.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={data.author.img} />
              <Typography>By {data.author.name}</Typography>
              <Typography> -{data.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "15px 0px",
                color: "gray",
              }}
            >
              {data.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
