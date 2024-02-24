import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const FooterItems = [
    {
      rotue: "Home",
      pathname: "/",
    },
    {
      rotue: "Pages",
      pathname: "/pages",
    },
    {
      rotue: "Category",
      pathname: "/category",
    },
    {
      rotue: "News",
      pathname: "/news",
    },
    {
      rotue: "About",
      pathname: "/about",
    },
    {
      rotue: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {FooterItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.rotue}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
          @2024 THE DRAGON NEWS . DESIGN BY PRANTA DEV .
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
